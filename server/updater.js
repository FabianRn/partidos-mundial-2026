const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_FILE = path.join(__dirname, '..', 'js', 'data.js');
const OPENFOOTBALL_URL = 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';

const TEAM_MAP = {
  'Mexico': 'MEX', 'South Africa': 'RSA', 'South Korea': 'KOR',
  'Czech Republic': 'CZE', 'Canada': 'CAN', 'Bosnia & Herzegovina': 'BIH',
  'USA': 'USA', 'Paraguay': 'PAR', 'Qatar': 'QAT', 'Switzerland': 'SUI',
  'Brazil': 'BRA', 'Morocco': 'MAR', 'Haiti': 'HAI', 'Scotland': 'SCO',
  'Australia': 'AUS', 'Turkey': 'TUR', 'Germany': 'GER', 'Curaçao': 'CUR',
  'Ivory Coast': 'CIV', 'Ecuador': 'ECU', 'Netherlands': 'NED', 'Japan': 'JPN',
  'Sweden': 'SWE', 'Tunisia': 'TUN', 'Belgium': 'BEL', 'Egypt': 'EGY',
  'Iran': 'IRN', 'New Zealand': 'NZL', 'Spain': 'ESP', 'Cape Verde': 'CPV',
  'Saudi Arabia': 'KSA', 'Uruguay': 'URU', 'France': 'FRA', 'Senegal': 'SEN',
  'Iraq': 'IRQ', 'Norway': 'NOR', 'Argentina': 'ARG', 'Algeria': 'ALG',
  'Austria': 'AUT', 'Jordan': 'JOR', 'Portugal': 'POR', 'DR Congo': 'COD',
  'Uzbekistan': 'UZB', 'Colombia': 'COL', 'England': 'ENG', 'Croatia': 'CRO',
  'Ghana': 'GHA', 'Panama': 'PAN', 'United States': 'USA'
};

function getToday() {
  return new Date().toISOString().split('T')[0];
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Invalid JSON')); }
      });
    }).on('error', reject);
  });
}

function readDataFile() {
  return fs.readFileSync(DATA_FILE, 'utf-8');
}

function writeDataFile(content) {
  fs.writeFileSync(DATA_FILE, content, 'utf-8');
}

function updateScoreInContent(content, matchId, homeScore, awayScore) {
  const regex = new RegExp(
    `(\\{ id:\\s*${matchId}[^}]*?score:\\s*\\{ home:\\s*)(null|\\d+)(,\\s*away:\\s*)(null|\\d+)( \\})`,
    'g'
  );
  const replacement = `$1${homeScore}$3${awayScore}$5`;
  const updated = content.replace(regex, replacement);
  if (updated === content) {
    console.log(`  ⚠ No match found for ID ${matchId}`);
  }
  return updated;
}

function updateDateInContent(content) {
  const today = getToday();
  content = content.replace(/(lastUpdate:\s*")[^"]*(")/, `$1${today}$2`);
  content = content.replace(/(today:\s*")[^"]*(")/, `$1${today}$2`);
  return content;
}

async function main() {
  console.log(`\n=== Actualizador Mundial 2026 ===`);
  console.log(`Fecha: ${getToday()}\n`);

  console.log('Descargando datos de openfootball...');
  let data;
  try {
    data = await fetchJSON(OPENFOOTBALL_URL);
    console.log(`  → ${data.matches.length} partidos encontrados\n`);
  } catch (err) {
    console.error('  ✗ Error al descargar:', err.message);
    console.log('  Usando datos locales como fallback.');
    return;
  }

  const playedMatches = data.matches.filter(m => m.score && m.score.ft);
  console.log(`Partidos con marcador: ${playedMatches.length}\n`);

  let content = readDataFile();
  let updated = 0;
  let skipped = 0;

  for (const match of playedMatches) {
    const date = match.date;
    const homeName = match.team1;
    const awayName = match.team2;
    const [homeGoals, awayGoals] = match.score.ft;

    if (homeGoals === null || awayGoals === null || homeGoals === undefined) {
      skipped++;
      continue;
    }

    const homeCode = TEAM_MAP[homeName];
    const awayCode = TEAM_MAP[awayName];

    if (!homeCode || !awayCode) {
      console.log(`  ⚠ Sin mapeo: ${homeName} vs ${awayName}`);
      skipped++;
      continue;
    }

    const swapped = findIfSwapped(content, homeCode, awayCode, date);
    let matchId = findMatchId(content, homeCode, awayCode, date);
    if (!matchId) {
      matchId = findMatchByTeams(content, homeCode, awayCode);
      if (matchId) {
        console.log(`  ℹ ${homeCode} vs ${awayCode}: fecha difiere (openfootball: ${date}), actualizando igual`);
      }
    }
    if (!matchId) {
      skipped++;
      continue;
    }

    let finalHomeGoals = homeGoals;
    let finalAwayGoals = awayGoals;
    let displayHome = homeCode;
    let displayAway = awayCode;
    if (swapped) {
      finalHomeGoals = awayGoals;
      finalAwayGoals = homeGoals;
    }

    const currentScore = getCurrentScore(content, matchId);
    if (currentScore && currentScore.home === finalHomeGoals && currentScore.away === finalAwayGoals) {
      skipped++;
      continue;
    }

    const oldStr = currentScore !== null && currentScore.home !== null ? `${currentScore.home}-${currentScore.away}` : '–';
    if (swapped) {
      content = updateScoreInContent(content, matchId, finalHomeGoals, finalAwayGoals);
      console.log(`  ✓ Partido ${matchId}: ${displayHome} ${oldStr} → ${finalHomeGoals}-${finalAwayGoals} ${displayAway} (local/visitante invertido)`);
    } else {
      content = updateScoreInContent(content, matchId, finalHomeGoals, finalAwayGoals);
      console.log(`  ✓ Partido ${matchId}: ${displayHome} ${oldStr} → ${finalHomeGoals}-${finalAwayGoals} ${displayAway}`);
    }
    updated++;
  }

  if (updated > 0) {
    content = updateDateInContent(content);
    writeDataFile(content);
    console.log(`\n✅ Actualizados ${updated} partido(s). ${skipped} sin cambios.`);
  } else {
    console.log(`\n📌 Sin cambios. ${skipped} partidos revisados.`);
  }

  console.log('\n=== Fin ===\n');
}

function findMatchId(content, home, away, date) {
  const regex = /{ id:\s*(\d+),\s*round:\s*"group",\s*group:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*home:\s*"([^"]+)",\s*away:\s*"([^"]+)",\s*score:\s*\{ home:\s*(null|\d+),\s*away:\s*(null|\d+)\s*\}/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    if (m[4] === home && m[5] === away && m[3] === date) {
      return parseInt(m[1]);
    }
  }

  const koRegex = /{ id:\s*(\d+),\s*round:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*home:\s*"([^"]+)",\s*away:\s*"([^"]+)",\s*score:\s*\{ home:\s*(null|\d+),\s*away:\s*(null|\d+)\s*\}/g;
  while ((m = koRegex.exec(content)) !== null) {
    if (m[4] === home && m[5] === away && m[3] === date) {
      return parseInt(m[1]);
    }
  }

  console.log(`  ⚠ No match: ${home} vs ${away} on ${date}`);
  return null;
}

function findIfSwapped(content, home, away, date) {
  const regex = /{ id:\s*(\d+),\s*round:\s*"group",\s*group:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*home:\s*"([^"]+)",\s*away:\s*"([^"]+)"/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    if (m[4] === away && m[5] === home && m[3] === date) return true;
  }
  const koRegex = /{ id:\s*(\d+),\s*round:\s*"([^"]+)",\s*date:\s*"([^"]+)",\s*home:\s*"([^"]+)",\s*away:\s*"([^"]+)"/g;
  while ((m = koRegex.exec(content)) !== null) {
    if (m[4] === away && m[5] === home && m[3] === date) return true;
  }
  return false;
}

function findMatchByTeams(content, home, away) {
  const allRegex = /{ id:\s*(\d+),\s*round:\s*"([^"]+)",\s*(?:group:\s*"([^"]+)",\s*)?date:\s*"([^"]+)",\s*home:\s*"([^"]+)",\s*away:\s*"([^"]+)",\s*score:\s*\{ home:\s*(null|\d+),\s*away:\s*(null|\d+)\s*\}/g;
  let m;
  while ((m = allRegex.exec(content)) !== null) {
    if (m[5] === home && m[6] === away) return parseInt(m[1]);
    if (m[5] === away && m[6] === home) return parseInt(m[1]);
  }
  return null;
}

function getCurrentScore(content, matchId) {
  const regex = new RegExp(`id:\\s*${matchId}[^}]*?score:\\s*\\{ home:\\s*(null|\\d+),\\s*away:\\s*(null|\\d+)`);
  const m = regex.exec(content);
  if (!m) return null;
  return {
    home: m[1] === 'null' ? null : parseInt(m[1]),
    away: m[2] === 'null' ? null : parseInt(m[2])
  };
}

main().catch(err => {
  console.error('Error general:', err);
  process.exit(1);
});
