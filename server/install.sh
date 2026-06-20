#!/bin/bash
# install.sh — Instala dependencias del updater
cd "$(dirname "$0")"
npm install
echo "✓ Dependencias instaladas"
echo ""
echo "Para probar: node updater.js"
echo "Para agregar al cron: crontab -e"
echo "  */30 * * * * cd $(pwd) && node updater.js >> /tmp/mundial-updater.log 2>&1"
