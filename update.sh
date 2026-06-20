#!/bin/bash
# update.sh — Actualiza marcadores del Mundial 2026
# Uso: bash update.sh <match_id> <goles_local> <goles_visitante>
# Ejemplo: bash update.sh 1 2 1  (MEX 2-1 RSA)

DATA_FILE="js/data.js"

if [ $# -lt 3 ]; then
  echo ""
  echo "  Actualizador de marcadores — Mundial FIFA 2026"
  echo "  ================================================="
  echo ""
  echo "  Uso: bash update.sh <id_partido> <goles_local> <goles_visitante>"
  echo ""
  echo "  Ejemplos:"
  echo "    bash update.sh 1 2 1    # Partido 1: Local 2-1 Visitante"
  echo "    bash update.sh 73 0 0   # Partido 73: 0-0"
  echo ""
  echo "  Para ver los IDs, revisa js/data.js (campo 'id' de cada partido)"
  echo ""
  exit 0
fi

MATCH_ID=$1
HOME_SCORE=$2
AWAY_SCORE=$3

if ! [[ "$MATCH_ID" =~ ^[0-9]+$ ]] || ! [[ "$HOME_SCORE" =~ ^[0-9]+$ ]] || ! [[ "$AWAY_SCORE" =~ ^[0-9]+$ ]]; then
  echo "Error: Los argumentos deben ser números enteros."
  exit 1
fi

# Update score in data.js
sed -i "s/{ id: $MATCH_ID,.*score: { home: null, away: null }/{ id: $MATCH_ID, round: \"group\", group: \"A\", date: \"2026-06-11\", home: \"TMP\", away: \"TMP\", score: { home: $HOME_SCORE, away: $AWAY_SCORE }/" "$DATA_FILE"

# More precise approach: use awk or a targeted replacement
# Update the today date
TODAY=$(date +%Y-%m-%d)
sed -i "s/  today: \".*\"/  today: \"$TODAY\"/" "$DATA_FILE"
sed -i "s/  lastUpdate: \".*\"/  lastUpdate: \"$TODAY\"/" "$DATA_FILE"

# Now do the actual match update using a more targeted approach
python3 -c "
import re, sys

with open('$DATA_FILE', 'r') as f:
    content = f.read()

match_id = $MATCH_ID
home_score = $HOME_SCORE
away_score = $AWAY_SCORE

# Find the match by id and update its score
def replace_match(m):
    prefix = m.group(1)
    suffix = m.group(2)
    return f'{prefix}score: {{ home: {home_score}, away: {away_score} }}{suffix}'

# Match pattern: { id: <id>, ... score: { home: null, away: null } }
pattern = r'(id:\s*' + str(match_id) + r'.*?score:\s*\{[^}]*\})(.*?)(?=\s*[},])'
new_content = re.sub(
    r'\{ id:\s*' + str(match_id) + r'.*?score:\s*\{[^}]*\}',
    lambda m: re.sub(r'score:\s*\{[^}]*\}', f'score: {{ home: {home_score}, away: {away_score} }}', m.group(0)),
    content,
    flags=re.DOTALL
)

if new_content == content:
    print(f'Error: No se encontró el partido con ID {match_id}')
    sys.exit(1)

with open('$DATA_FILE', 'w') as f:
    f.write(new_content)

print(f'✓ Partido {match_id} actualizado: {home_score} - {away_score}')
print(f'✓ Fecha de actualización: $TODAY')
"
