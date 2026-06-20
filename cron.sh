#!/bin/bash
# cron.sh — Ejecuta el actualizador del Mundial 2026
# Usar en crontab: */30 * * * * /ruta/cron.sh

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
/home/goldm/.nvm/versions/node/v24.16.0/bin/node server/updater.js >> /tmp/mundial-updater.log 2>&1
