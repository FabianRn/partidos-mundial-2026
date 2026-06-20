const fifaData = {
  lastUpdate: "2026-06-20",
  today: "2026-06-20",

  teams: {
    MEX: { name: "México", fifa: "MEX", group: "A" },
    RSA: { name: "Sudáfrica", fifa: "RSA", group: "A" },
    KOR: { name: "Corea del Sur", fifa: "KOR", group: "A" },
    CZE: { name: "Chequia", fifa: "CZE", group: "A" },
    CAN: { name: "Canadá", fifa: "CAN", group: "B" },
    BIH: { name: "Bosnia y Herzegovina", fifa: "BIH", group: "B" },
    QAT: { name: "Qatar", fifa: "QAT", group: "B" },
    SUI: { name: "Suiza", fifa: "SUI", group: "B" },
    BRA: { name: "Brasil", fifa: "BRA", group: "C" },
    MAR: { name: "Marruecos", fifa: "MAR", group: "C" },
    HAI: { name: "Haití", fifa: "HAI", group: "C" },
    SCO: { name: "Escocia", fifa: "SCO", group: "C" },
    USA: { name: "EE. UU.", fifa: "USA", group: "D" },
    PAR: { name: "Paraguay", fifa: "PAR", group: "D" },
    AUS: { name: "Australia", fifa: "AUS", group: "D" },
    TUR: { name: "Turquía", fifa: "TUR", group: "D" },
    GER: { name: "Alemania", fifa: "GER", group: "E" },
    CUR: { name: "Curazao", fifa: "CUR", group: "E" },
    CIV: { name: "Costa de Marfil", fifa: "CIV", group: "E" },
    ECU: { name: "Ecuador", fifa: "ECU", group: "E" },
    NED: { name: "Países Bajos", fifa: "NED", group: "F" },
    JPN: { name: "Japón", fifa: "JPN", group: "F" },
    SWE: { name: "Suecia", fifa: "SWE", group: "F" },
    TUN: { name: "Túnez", fifa: "TUN", group: "F" },
    BEL: { name: "Bélgica", fifa: "BEL", group: "G" },
    EGY: { name: "Egipto", fifa: "EGY", group: "G" },
    IRN: { name: "Irán", fifa: "IRN", group: "G" },
    NZL: { name: "Nueva Zelanda", fifa: "NZL", group: "G" },
    ESP: { name: "España", fifa: "ESP", group: "H" },
    CPV: { name: "Cabo Verde", fifa: "CPV", group: "H" },
    KSA: { name: "Arabia Saudí", fifa: "KSA", group: "H" },
    URU: { name: "Uruguay", fifa: "URU", group: "H" },
    FRA: { name: "Francia", fifa: "FRA", group: "I" },
    SEN: { name: "Senegal", fifa: "SEN", group: "I" },
    IRQ: { name: "Irak", fifa: "IRQ", group: "I" },
    NOR: { name: "Noruega", fifa: "NOR", group: "I" },
    ARG: { name: "Argentina", fifa: "ARG", group: "J" },
    ALG: { name: "Argelia", fifa: "ALG", group: "J" },
    AUT: { name: "Austria", fifa: "AUT", group: "J" },
    JOR: { name: "Jordania", fifa: "JOR", group: "J" },
    POR: { name: "Portugal", fifa: "POR", group: "K" },
    COD: { name: "RD Congo", fifa: "COD", group: "K" },
    UZB: { name: "Uzbekistán", fifa: "UZB", group: "K" },
    COL: { name: "Colombia", fifa: "COL", group: "K" },
    ENG: { name: "Inglaterra", fifa: "ENG", group: "L" },
    CRO: { name: "Croacia", fifa: "CRO", group: "L" },
    GHA: { name: "Ghana", fifa: "GHA", group: "L" },
    PAN: { name: "Panamá", fifa: "PAN", group: "L" }
  },

  groups: {
    A: ["MEX", "RSA", "KOR", "CZE"],
    B: ["CAN", "BIH", "QAT", "SUI"],
    C: ["BRA", "MAR", "HAI", "SCO"],
    D: ["USA", "PAR", "AUS", "TUR"],
    E: ["GER", "CUR", "CIV", "ECU"],
    F: ["NED", "JPN", "SWE", "TUN"],
    G: ["BEL", "EGY", "IRN", "NZL"],
    H: ["ESP", "CPV", "KSA", "URU"],
    I: ["FRA", "SEN", "IRQ", "NOR"],
    J: ["ARG", "ALG", "AUT", "JOR"],
    K: ["POR", "COD", "UZB", "COL"],
    L: ["ENG", "CRO", "GHA", "PAN"]
  },

  matches: [
    // ===== GROUP STAGE =====
    // Group A
    { id: 1, round: "group", group: "A", date: "2026-06-11", home: "MEX", away: "RSA", score: { home: 2, away: 0 } },
    { id: 2, round: "group", group: "A", date: "2026-06-11", home: "KOR", away: "CZE", score: { home: 2, away: 1 } },
    { id: 3, round: "group", group: "A", date: "2026-06-18", home: "MEX", away: "KOR", score: { home: 1, away: 0 } },
    { id: 4, round: "group", group: "A", date: "2026-06-18", home: "RSA", away: "CZE", score: { home: 1, away: 1 } },
    { id: 5, round: "group", group: "A", date: "2026-06-24", home: "CZE", away: "MEX", score: { home: null, away: null } },
    { id: 6, round: "group", group: "A", date: "2026-06-24", home: "RSA", away: "KOR", score: { home: null, away: null } },
    // Group B
    { id: 7, round: "group", group: "B", date: "2026-06-12", home: "CAN", away: "BIH", score: { home: 1, away: 1 } },
    { id: 8, round: "group", group: "B", date: "2026-06-13", home: "QAT", away: "SUI", score: { home: 1, away: 1 } },
    { id: 9, round: "group", group: "B", date: "2026-06-18", home: "CAN", away: "QAT", score: { home: 6, away: 0 } },
    { id: 10, round: "group", group: "B", date: "2026-06-18", home: "BIH", away: "SUI", score: { home: 1, away: 4 } },
    { id: 11, round: "group", group: "B", date: "2026-06-24", home: "BIH", away: "QAT", score: { home: null, away: null } },
    { id: 12, round: "group", group: "B", date: "2026-06-24", home: "SUI", away: "CAN", score: { home: null, away: null } },
    // Group C
    { id: 13, round: "group", group: "C", date: "2026-06-13", home: "BRA", away: "MAR", score: { home: 1, away: 1 } },
    { id: 14, round: "group", group: "C", date: "2026-06-13", home: "HAI", away: "SCO", score: { home: 0, away: 1 } },
    { id: 15, round: "group", group: "C", date: "2026-06-19", home: "BRA", away: "HAI", score: { home: 3, away: 0 } },
    { id: 16, round: "group", group: "C", date: "2026-06-19", home: "SCO", away: "MAR", score: { home: 0, away: 1 } },
    { id: 17, round: "group", group: "C", date: "2026-06-24", home: "MAR", away: "HAI", score: { home: null, away: null } },
    { id: 18, round: "group", group: "C", date: "2026-06-24", home: "SCO", away: "BRA", score: { home: null, away: null } },
    // Group D
    { id: 19, round: "group", group: "D", date: "2026-06-12", home: "USA", away: "PAR", score: { home: 4, away: 1 } },
    { id: 20, round: "group", group: "D", date: "2026-06-13", home: "AUS", away: "TUR", score: { home: 2, away: 0 } },
    { id: 21, round: "group", group: "D", date: "2026-06-19", home: "USA", away: "AUS", score: { home: 2, away: 0 } },
    { id: 22, round: "group", group: "D", date: "2026-06-19", home: "TUR", away: "PAR", score: { home: 0, away: 1 } },
    { id: 23, round: "group", group: "D", date: "2026-06-25", home: "TUR", away: "USA", score: { home: null, away: null } },
    { id: 24, round: "group", group: "D", date: "2026-06-25", home: "PAR", away: "AUS", score: { home: null, away: null } },
    // Group E
    { id: 25, round: "group", group: "E", date: "2026-06-14", home: "GER", away: "CUR", score: { home: 7, away: 1 } },
    { id: 26, round: "group", group: "E", date: "2026-06-14", home: "CIV", away: "ECU", score: { home: 1, away: 0 } },
    { id: 27, round: "group", group: "E", date: "2026-06-20", home: "GER", away: "CIV", score: { home: null, away: null } },
    { id: 28, round: "group", group: "E", date: "2026-06-20", home: "ECU", away: "CUR", score: { home: null, away: null } },
    { id: 29, round: "group", group: "E", date: "2026-06-25", home: "ECU", away: "GER", score: { home: null, away: null } },
    { id: 30, round: "group", group: "E", date: "2026-06-25", home: "CUR", away: "CIV", score: { home: null, away: null } },
    // Group F
    { id: 31, round: "group", group: "F", date: "2026-06-14", home: "NED", away: "JPN", score: { home: 2, away: 2 } },
    { id: 32, round: "group", group: "F", date: "2026-06-14", home: "SWE", away: "TUN", score: { home: 5, away: 1 } },
    { id: 33, round: "group", group: "F", date: "2026-06-20", home: "NED", away: "SWE", score: { home: 5, away: 1 } },
    { id: 34, round: "group", group: "F", date: "2026-06-20", home: "TUN", away: "JPN", score: { home: null, away: null } },
    { id: 35, round: "group", group: "F", date: "2026-06-25", home: "JPN", away: "SWE", score: { home: null, away: null } },
    { id: 36, round: "group", group: "F", date: "2026-06-25", home: "TUN", away: "NED", score: { home: null, away: null } },
    // Group G
    { id: 37, round: "group", group: "G", date: "2026-06-15", home: "BEL", away: "EGY", score: { home: 1, away: 1 } },
    { id: 38, round: "group", group: "G", date: "2026-06-15", home: "IRN", away: "NZL", score: { home: 2, away: 2 } },
    { id: 39, round: "group", group: "G", date: "2026-06-21", home: "BEL", away: "IRN", score: { home: null, away: null } },
    { id: 40, round: "group", group: "G", date: "2026-06-21", home: "NZL", away: "EGY", score: { home: null, away: null } },
    { id: 41, round: "group", group: "G", date: "2026-06-26", home: "EGY", away: "IRN", score: { home: null, away: null } },
    { id: 42, round: "group", group: "G", date: "2026-06-26", home: "NZL", away: "BEL", score: { home: null, away: null } },
    // Group H
    { id: 43, round: "group", group: "H", date: "2026-06-15", home: "ESP", away: "CPV", score: { home: 0, away: 0 } },
    { id: 44, round: "group", group: "H", date: "2026-06-15", home: "KSA", away: "URU", score: { home: 1, away: 1 } },
    { id: 45, round: "group", group: "H", date: "2026-06-21", home: "ESP", away: "KSA", score: { home: null, away: null } },
    { id: 46, round: "group", group: "H", date: "2026-06-21", home: "URU", away: "CPV", score: { home: null, away: null } },
    { id: 47, round: "group", group: "H", date: "2026-06-26", home: "CPV", away: "KSA", score: { home: null, away: null } },
    { id: 48, round: "group", group: "H", date: "2026-06-26", home: "URU", away: "ESP", score: { home: null, away: null } },
    // Group I
    { id: 49, round: "group", group: "I", date: "2026-06-16", home: "FRA", away: "SEN", score: { home: 3, away: 1 } },
    { id: 50, round: "group", group: "I", date: "2026-06-16", home: "IRQ", away: "NOR", score: { home: 1, away: 4 } },
    { id: 51, round: "group", group: "I", date: "2026-06-22", home: "FRA", away: "IRQ", score: { home: null, away: null } },
    { id: 52, round: "group", group: "I", date: "2026-06-22", home: "NOR", away: "SEN", score: { home: null, away: null } },
    { id: 53, round: "group", group: "I", date: "2026-06-26", home: "SEN", away: "IRQ", score: { home: null, away: null } },
    { id: 54, round: "group", group: "I", date: "2026-06-26", home: "NOR", away: "FRA", score: { home: null, away: null } },
    // Group J
    { id: 55, round: "group", group: "J", date: "2026-06-16", home: "ARG", away: "ALG", score: { home: 3, away: 0 } },
    { id: 56, round: "group", group: "J", date: "2026-06-17", home: "AUT", away: "JOR", score: { home: 3, away: 1 } },
    { id: 57, round: "group", group: "J", date: "2026-06-22", home: "ARG", away: "AUT", score: { home: null, away: null } },
    { id: 58, round: "group", group: "J", date: "2026-06-22", home: "JOR", away: "ALG", score: { home: null, away: null } },
    { id: 59, round: "group", group: "J", date: "2026-06-27", home: "ALG", away: "AUT", score: { home: null, away: null } },
    { id: 60, round: "group", group: "J", date: "2026-06-27", home: "JOR", away: "ARG", score: { home: null, away: null } },
    // Group K
    { id: 61, round: "group", group: "K", date: "2026-06-17", home: "POR", away: "COD", score: { home: 1, away: 1 } },
    { id: 62, round: "group", group: "K", date: "2026-06-17", home: "UZB", away: "COL", score: { home: 1, away: 3 } },
    { id: 63, round: "group", group: "K", date: "2026-06-23", home: "POR", away: "UZB", score: { home: null, away: null } },
    { id: 64, round: "group", group: "K", date: "2026-06-23", home: "COL", away: "COD", score: { home: null, away: null } },
    { id: 65, round: "group", group: "K", date: "2026-06-27", home: "COD", away: "UZB", score: { home: null, away: null } },
    { id: 66, round: "group", group: "K", date: "2026-06-27", home: "COL", away: "POR", score: { home: null, away: null } },
    // Group L
    { id: 67, round: "group", group: "L", date: "2026-06-17", home: "ENG", away: "CRO", score: { home: 4, away: 2 } },
    { id: 68, round: "group", group: "L", date: "2026-06-17", home: "GHA", away: "PAN", score: { home: 1, away: 0 } },
    { id: 69, round: "group", group: "L", date: "2026-06-23", home: "ENG", away: "GHA", score: { home: null, away: null } },
    { id: 70, round: "group", group: "L", date: "2026-06-23", home: "PAN", away: "CRO", score: { home: null, away: null } },
    { id: 71, round: "group", group: "L", date: "2026-06-27", home: "CRO", away: "GHA", score: { home: null, away: null } },
    { id: 72, round: "group", group: "L", date: "2026-06-27", home: "PAN", away: "ENG", score: { home: null, away: null } },

    // ===== ROUND OF 32 (Dieciseisavos) =====
    // 16 matches: group winners vs third-placed, group winners vs runners-up, runners-up vs runners-up
    { id: 73, round: "round32", date: "2026-06-28", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "A", place: 2 }, away: { type: "groupPlace", group: "B", place: 2 } },
      winnerTo: 89, winnerSlot: "home" },
    { id: 74, round: "round32", date: "2026-06-30", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "I", place: 1 }, away: { type: "thirdPlace", groups: ["C","D","F","G","H"] } },
      winnerTo: 90, winnerSlot: "home" },
    { id: 75, round: "round32", date: "2026-06-29", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "C", place: 1 }, away: { type: "groupPlace", group: "F", place: 2 } },
      winnerTo: 89, winnerSlot: "away" },
    { id: 76, round: "round32", date: "2026-06-30", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "E", place: 2 }, away: { type: "groupPlace", group: "I", place: 2 } },
      winnerTo: 91, winnerSlot: "home" },
    { id: 77, round: "round32", date: "2026-06-30", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "A", place: 1 }, away: { type: "thirdPlace", groups: ["C","E","F","H","I"] } },
      winnerTo: 90, winnerSlot: "away" },
    { id: 78, round: "round32", date: "2026-07-03", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "D", place: 2 }, away: { type: "groupPlace", group: "G", place: 2 } },
      winnerTo: 91, winnerSlot: "away" },
    { id: 79, round: "round32", date: "2026-07-01", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "D", place: 1 }, away: { type: "thirdPlace", groups: ["B","E","F","I","J"] } },
      winnerTo: 92, winnerSlot: "home" },
    { id: 80, round: "round32", date: "2026-07-03", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "K", place: 1 }, away: { type: "thirdPlace", groups: ["D","E","I","J","L"] } },
      winnerTo: 92, winnerSlot: "away" },
    { id: 81, round: "round32", date: "2026-07-01", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "G", place: 1 }, away: { type: "thirdPlace", groups: ["A","E","H","I","J"] } },
      winnerTo: 93, winnerSlot: "home" },
    { id: 82, round: "round32", date: "2026-07-02", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "B", place: 1 }, away: { type: "thirdPlace", groups: ["E","F","G","I","J"] } },
      winnerTo: 93, winnerSlot: "away" },
    { id: 83, round: "round32", date: "2026-07-02", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "H", place: 1 }, away: { type: "groupPlace", group: "J", place: 2 } },
      winnerTo: 94, winnerSlot: "home" },
    { id: 84, round: "round32", date: "2026-06-29", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "F", place: 1 }, away: { type: "groupPlace", group: "C", place: 2 } },
      winnerTo: 94, winnerSlot: "away" },
    { id: 85, round: "round32", date: "2026-07-01", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "L", place: 1 }, away: { type: "thirdPlace", groups: ["E","H","I","J","K"] } },
      winnerTo: 95, winnerSlot: "home" },
    { id: 86, round: "round32", date: "2026-07-03", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "J", place: 1 }, away: { type: "groupPlace", group: "H", place: 2 } },
      winnerTo: 96, winnerSlot: "home" },
    { id: 87, round: "round32", date: "2026-07-02", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "K", place: 2 }, away: { type: "groupPlace", group: "L", place: 2 } },
      winnerTo: 95, winnerSlot: "away" },
    { id: 88, round: "round32", date: "2026-06-29", home: null, away: null, score: { home: null, away: null },
      seed: { home: { type: "groupPlace", group: "E", place: 1 }, away: { type: "thirdPlace", groups: ["A","B","C","D","F"] } },
      winnerTo: 96, winnerSlot: "away" },

    // ===== ROUND OF 16 (Octavos) =====
    { id: 89, round: "round16", date: "2026-07-04", home: null, away: null, score: { home: null, away: null },
      winnerTo: 97, winnerSlot: "home" },
    { id: 90, round: "round16", date: "2026-07-04", home: null, away: null, score: { home: null, away: null },
      winnerTo: 97, winnerSlot: "away" },
    { id: 91, round: "round16", date: "2026-07-05", home: null, away: null, score: { home: null, away: null },
      winnerTo: 98, winnerSlot: "home" },
    { id: 92, round: "round16", date: "2026-07-05", home: null, away: null, score: { home: null, away: null },
      winnerTo: 98, winnerSlot: "away" },
    { id: 93, round: "round16", date: "2026-07-06", home: null, away: null, score: { home: null, away: null },
      winnerTo: 99, winnerSlot: "home" },
    { id: 94, round: "round16", date: "2026-07-06", home: null, away: null, score: { home: null, away: null },
      winnerTo: 99, winnerSlot: "away" },
    { id: 95, round: "round16", date: "2026-07-07", home: null, away: null, score: { home: null, away: null },
      winnerTo: 100, winnerSlot: "home" },
    { id: 96, round: "round16", date: "2026-07-07", home: null, away: null, score: { home: null, away: null },
      winnerTo: 100, winnerSlot: "away" },

    // ===== QUARTERFINALS (Cuartos) =====
    { id: 97, round: "quarter", date: "2026-07-09", home: null, away: null, score: { home: null, away: null },
      winnerTo: 101, winnerSlot: "home" },
    { id: 98, round: "quarter", date: "2026-07-10", home: null, away: null, score: { home: null, away: null },
      winnerTo: 101, winnerSlot: "away" },
    { id: 99, round: "quarter", date: "2026-07-11", home: null, away: null, score: { home: null, away: null },
      winnerTo: 102, winnerSlot: "home" },
    { id: 100, round: "quarter", date: "2026-07-11", home: null, away: null, score: { home: null, away: null },
      winnerTo: 102, winnerSlot: "away" },

    // ===== SEMIFINALS (Semifinales) =====
    { id: 101, round: "semi", date: "2026-07-14", home: null, away: null, score: { home: null, away: null },
      winnerTo: 104, winnerSlot: "home", loserTo: 103, loserSlot: "home" },
    { id: 102, round: "semi", date: "2026-07-15", home: null, away: null, score: { home: null, away: null },
      winnerTo: 104, winnerSlot: "away", loserTo: 103, loserSlot: "away" },

    // ===== THIRD PLACE (3er Lugar) =====
    { id: 103, round: "third", date: "2026-07-18", home: null, away: null, score: { home: null, away: null } },

    // ===== FINAL =====
    { id: 104, round: "final", date: "2026-07-19", home: null, away: null, score: { home: null, away: null } }
  ],

  getTeam(code) {
    return this.teams[code];
  },

  getGroupTeams(groupCode) {
    return this.groups[groupCode].map(c => this.teams[c]);
  },

  getGroupMatches(groupCode) {
    return this.matches.filter(m => m.group === groupCode);
  },

  getMatchesByDate(dateStr) {
    return this.matches.filter(m => m.date === dateStr);
  },

  getStandings(groupCode) {
    const teams = this.groups[groupCode];
    const standings = {};
    teams.forEach(code => {
      standings[code] = { team: code, pts: 0, gp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0 };
    });

    this.getGroupMatches(groupCode).forEach(m => {
      if (m.score.home === null) return;
      const h = m.home, a = m.away;
      standings[h].gp++; standings[a].gp++;
      standings[h].gf += m.score.home; standings[h].ga += m.score.away;
      standings[a].gf += m.score.away; standings[a].ga += m.score.home;
      if (m.score.home > m.score.away) {
        standings[h].w++; standings[h].pts += 3;
        standings[a].l++;
      } else if (m.score.home < m.score.away) {
        standings[a].w++; standings[a].pts += 3;
        standings[h].l++;
      } else {
        standings[h].d++; standings[a].d++;
        standings[h].pts++; standings[a].pts++;
      }
    });

    Object.values(standings).forEach(s => { s.gd = s.gf - s.ga; });
    return Object.values(standings).sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return b.gf - a.gf;
    });
  },

  getKnockoutMatches() {
    return this.matches.filter(m => m.round !== "group");
  },

  getRecentMatches(limit = 5) {
    const played = this.matches.filter(m => m.score.home !== null);
    return played.sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
  },

  getUpcomingMatches(limit = 5) {
    const upcoming = this.matches.filter(m => m.score.home === null);
    return upcoming.sort((a, b) => a.date.localeCompare(b.date)).slice(0, limit);
  },

  isGroupStageFinished(groupCode) {
    return this.getGroupMatches(groupCode).every(m => m.score.home !== null);
  },

  getGroupWinner(groupCode) {
    const s = this.getStandings(groupCode);
    return s.length > 0 ? s[0].team : null;
  },

  getGroupRunnerUp(groupCode) {
    const s = this.getStandings(groupCode);
    return s.length > 1 ? s[1].team : null;
  },

  getGroupThird(groupCode) {
    const s = this.getStandings(groupCode);
    return s.length > 2 ? s[2].team : null;
  },

  getBestThirdPlaced() {
    const thirdPlaced = [];
    Object.keys(this.groups).forEach(g => {
      const s = this.getStandings(g);
      if (s.length >= 3) {
        thirdPlaced.push({ ...s[2], group: g });
      }
    });
    return thirdPlaced.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      return b.gf - a.gf;
    }).slice(0, 8);
  }
};
