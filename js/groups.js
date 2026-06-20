const GroupRenderer = {
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

  formatDate(dateStr) {
    const d = new Date(dateStr + "T12:00:00");
    const opts = { weekday: 'short', day: 'numeric', month: 'short' };
    return d.toLocaleDateString('es', opts);
  },

  render() {
    const container = document.getElementById('groups-container');
    if (!container) return;
    container.innerHTML = '';

    const days = this.getMatchDays();
    this.renderDayFilter(days);

    const activeDay = this.getActiveDay(days);
    this.renderDaySection(activeDay, container);
    container.prepend(this.renderSummaryBar());
  },

  getMatchDays() {
    const days = new Set();
    fifaData.matches.filter(m => m.round === 'group').forEach(m => days.add(m.date));
    return Array.from(days).sort();
  },

  getActiveDay(days) {
    const params = new URLSearchParams(window.location.search);
    const selected = params.get('day');
    if (selected) {
      if (days.includes(selected)) return selected;
      return null;
    }
    return null;
  },

  renderDayFilter(days) {
    const container = document.getElementById('day-filter');
    if (!container) return;
    container.innerHTML = '';
    const active = this.getActiveDay(days);
    const today = fifaData.today;

    days.forEach(d => {
      const btn = document.createElement('button');
      btn.className = 'day-btn';
      if (d === active) btn.classList.add('active');
      if (d === today) btn.classList.add('today');
      btn.textContent = this.formatDate(d);
      btn.dataset.day = d;
      btn.addEventListener('click', () => {
        const url = new URL(window.location);
        url.searchParams.set('day', d);
        window.location.href = url.toString();
      });
      container.appendChild(btn);
    });

    const allBtn = document.createElement('button');
    allBtn.className = 'day-btn';
    if (!active) allBtn.classList.add('active');
    allBtn.textContent = 'Ver todos';
    allBtn.addEventListener('click', () => {
      window.location.href = window.location.pathname;
    });
    container.prepend(allBtn);
  },

  renderDaySection(day, container) {
    const groups = Object.keys(fifaData.groups);

    if (day) {
      const groupsWithMatches = groups.filter(g =>
        fifaData.getGroupMatches(g).some(m => m.date === day)
      );
      if (groupsWithMatches.length === 0) {
        container.innerHTML += `<div class="loading">No hay partidos programados para este día</div>`;
        return;
      }
    }

    const grid = document.createElement('div');
    grid.className = 'group-grid';

    groups.forEach(g => {
      const card = this.renderGroupCard(g, day);
      if (card) grid.appendChild(card);
    });

    container.appendChild(grid);
  },

  renderSummaryBar() {
    const bar = document.createElement('div');
    bar.style.cssText = 'display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;font-size:0.8rem;';
    const total = fifaData.matches.filter(m => m.round === 'group').length;
    const played = fifaData.matches.filter(m => m.round === 'group' && m.score.home !== null).length;
    const remaining = total - played;
    bar.innerHTML = `
      <span style="background:var(--fifa-white);padding:0.3rem 0.7rem;border-radius:999px;border:1px solid var(--fifa-border);">
        Total: <strong>${total}</strong> partidos
      </span>
      <span style="background:#D1FAE5;padding:0.3rem 0.7rem;border-radius:999px;border:1px solid #86EFAC;">
        Jugados: <strong>${played}</strong>
      </span>
      <span style="background:#FEF3C7;padding:0.3rem 0.7rem;border-radius:999px;border:1px solid #FCD34D;">
        Pendientes: <strong>${remaining}</strong>
      </span>
    `;
    return bar;
  },

  renderGroupCard(groupCode, dayFilter) {
    const teams = fifaData.getGroupTeams(groupCode);
    const matches = fifaData.getGroupMatches(groupCode);
    const dayMatches = dayFilter ? matches.filter(m => m.date === dayFilter) : matches;
    const standings = fifaData.getStandings(groupCode);
    const finished = fifaData.isGroupStageFinished(groupCode);
    const bestThird = fifaData.getBestThirdPlaced().map(t => t.team);

    if (dayFilter && dayMatches.length === 0) return null;

    const card = document.createElement('div');
    card.className = 'group-card';

    const header = document.createElement('div');
    header.className = 'group-card-header';
    header.innerHTML = `
      <span>Grupo ${groupCode}</span>
      <span class="group-card-status">${finished ? 'Completado' : 'En curso'}</span>
    `;
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'group-card-body';

    body.innerHTML += `
      <div class="standings-legend">
        <span><span class="dot green"></span> Clasifica</span>
        <span><span class="dot gold"></span> Mejor 3°</span>
      </div>
    `;

    const table = document.createElement('table');
    table.className = 'standings-table';
    table.innerHTML = `
      <thead><tr>
        <th class="pos-cell">#</th>
        <th>Equipo</th>
        <th class="num-cell">PJ</th>
        <th class="num-cell">G</th>
        <th class="num-cell">E</th>
        <th class="num-cell">P</th>
        <th class="num-cell">GF</th>
        <th class="num-cell">GC</th>
        <th class="num-cell">DG</th>
        <th class="pts-cell">Pts</th>
      </tr></thead>
      <tbody>
    `;

    standings.forEach((s, i) => {
      const tr = document.createElement('tr');
      const isTopTwo = i < 2;
      const isBestThird = i === 2 && bestThird.includes(s.team);
      if (isTopTwo) tr.classList.add('top-two');
      else if (isBestThird) tr.classList.add('third-place');
      else tr.classList.add('eliminated');

      const team = fifaData.teams[s.team];
      tr.innerHTML = `
        <td class="pos-cell">${i + 1}</td>
        <td><div class="team-cell">
          <img src="${this.flagUrl(s.team)}" alt="${s.team}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 40 30%22><rect fill=%22%23ccc%22 width=%2240%22 height=%2230%22/></svg>'">
          ${team.name}
        </div></td>
        <td class="num-cell">${s.gp}</td>
        <td class="num-cell">${s.w}</td>
        <td class="num-cell">${s.d}</td>
        <td class="num-cell">${s.l}</td>
        <td class="num-cell">${s.gf}</td>
        <td class="num-cell">${s.ga}</td>
        <td class="num-cell">${s.gd > 0 ? '+' : ''}${s.gd}</td>
        <td class="pts-cell">${s.pts}</td>
      `;
      table.appendChild(tr);
    });

    table.innerHTML += '</tbody>';
    body.appendChild(table);

    if (dayMatches.length > 0) {
      body.innerHTML += '<div class="group-matches-title">Partidos</div>';
      dayMatches.forEach(m => {
        const home = fifaData.teams[m.home];
        const away = fifaData.teams[m.away];
        const hasScore = m.score.home !== null;
        const matchDiv = document.createElement('div');
        matchDiv.className = 'group-match';
        matchDiv.innerHTML = `
          <div class="teams">
            <img src="${this.flagUrl(m.home)}" alt="${m.home}" loading="lazy" onerror="this.style.display='none'">
            <span class="code">${m.home}</span>
          </div>
          <div class="score ${hasScore ? '' : 'empty'}">${hasScore ? `${m.score.home} : ${m.score.away}` : '– : –'}</div>
          <div class="teams" style="justify-content:flex-end;">
            <span class="code away">${m.away}</span>
            <img src="${this.flagUrl(m.away)}" alt="${m.away}" loading="lazy" onerror="this.style.display='none'">
          </div>
        `;
        body.appendChild(matchDiv);
      });
    }

    card.appendChild(body);
    return card;
  }
};
