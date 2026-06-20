const BracketRenderer = {
  flagUrl(code) {
    const map = {
      MEX:'mx',RSA:'za',KOR:'kr',CZE:'cz',CAN:'ca',BIH:'ba',USA:'us',PAR:'py',
      QAT:'qa',SUI:'ch',BRA:'br',MAR:'ma',HAI:'ht',SCO:'gb-sct',AUS:'au',TUR:'tr',
      GER:'de',CUR:'cw',CIV:'ci',ECU:'ec',NED:'nl',JPN:'jp',SWE:'se',TUN:'tn',
      BEL:'be',EGY:'eg',ESP:'es',CPV:'cv',KSA:'sa',URU:'uy',FRA:'fr',SEN:'sn',
      IRN:'ir',NZL:'nz',IRQ:'iq',NOR:'no',ARG:'ar',ALG:'dz',AUT:'at',JOR:'jo',
      POR:'pt',COD:'cd',UZB:'uz',COL:'co',ENG:'gb-eng',CRO:'hr',GHA:'gh',PAN:'pa'
    };
    return `https://flagcdn.com/w40/${map[code] || code.toLowerCase()}.png`;
  },

  roundLabels: {
    round32: "Dieciseisavos",
    round16: "Octavos",
    quarter: "Cuartos",
    semi: "Semifinales",
    third: "3er Lugar",
    final: "Final"
  },

  render() {
    const container = document.getElementById('bracket-container');
    if (!container) return;
    container.innerHTML = '';

    this.renderBracketInfo(container);

    const bracket = document.createElement('div');
    bracket.className = 'bracket';

    const rounds = ['round32', 'round16', 'quarter', 'semi', 'third', 'final'];

    rounds.forEach(r => {
      const roundDiv = document.createElement('div');
      roundDiv.className = 'bracket-round';

      const label = document.createElement('div');
      label.className = 'bracket-round-label';
      label.textContent = this.roundLabels[r];
      roundDiv.appendChild(label);

      const matches = fifaData.matches.filter(m => m.round === r);
      matches.forEach(m => {
        roundDiv.appendChild(this.renderMatch(m));
      });

      bracket.appendChild(roundDiv);
    });

    container.appendChild(bracket);
  },

  renderBracketInfo(container) {
    const info = document.createElement('div');
    info.style.cssText = 'font-size:0.8rem;color:var(--fifa-gray-dark);margin-bottom:1rem;';
    const played = fifaData.matches.filter(m => m.round !== 'group' && m.score.home !== null).length;
    const total = fifaData.matches.filter(m => m.round !== 'group').length;
    info.textContent = `Eliminación directa — ${played} de ${total} partidos jugados`;
    container.appendChild(info);
  },

  renderMatch(match) {
    const div = document.createElement('div');
    div.className = 'bracket-match';
    if (match.round === 'final') div.classList.add('final-match');
    if (match.round === 'third') div.classList.add('third-match');

    const homeTeam = match.home ? fifaData.teams[match.home] : null;
    const awayTeam = match.away ? fifaData.teams[match.away] : null;
    const hasScore = match.score && match.score.home !== null;

    let homeCode = match.home || '???';
    let awayCode = match.away || '???';
    let homeName = homeTeam ? homeTeam.name : this.getSeedDescription(match, 'home');
    let awayName = awayTeam ? awayTeam.name : this.getSeedDescription(match, 'away');

    let homeWinner = hasScore && match.score.home > match.score.away;
    let awayWinner = hasScore && match.score.away > match.score.home;

    div.innerHTML = `
      <div class="b-match-teams">
        <div class="b-team ${homeWinner ? 'winner' : ''}">
          <span style="display:flex;align-items:center;gap:0.3rem;flex:1;min-width:0;">
            ${match.home ? `<img src="${this.flagUrl(match.home)}" alt="${match.home}" loading="lazy" onerror="this.style.display='none'">` : ''}
            <span class="name">${homeName}</span>
          </span>
          <span class="b-score ${hasScore ? '' : 'empty'}">${hasScore ? match.score.home : '–'}</span>
        </div>
        <div class="b-team ${awayWinner ? 'winner' : ''}">
          <span style="display:flex;align-items:center;gap:0.3rem;flex:1;min-width:0;">
            ${match.away ? `<img src="${this.flagUrl(match.away)}" alt="${match.away}" loading="lazy" onerror="this.style.display='none'">` : ''}
            <span class="name">${awayName}</span>
          </span>
          <span class="b-score ${hasScore ? '' : 'empty'}">${hasScore ? match.score.away : '–'}</span>
        </div>
      </div>
      <div class="b-match-meta">${this.formatDate(match.date)}</div>
    `;

    return div;
  },

  getSeedDescription(match, side) {
    const seed = match.seed;
    if (!seed) return '???';

    const s = seed[side === 'home' ? 'home' : 'away'];
    if (!s) return '???';

    if (s.type === 'groupPlace') {
      const place = s.place === 1 ? '1°' : s.place === 2 ? '2°' : '3°';
      return `${place} Grupo ${s.group}`;
    }
    if (s.type === 'thirdPlace') {
      return `3° (${s.groups.join('/')})`;
    }
    return '???';
  },

  formatDate(dateStr) {
    const d = new Date(dateStr + "T12:00:00");
    const opts = { weekday: 'short', day: 'numeric', month: 'short' };
    return d.toLocaleDateString('es', opts);
  }
};
