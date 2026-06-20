# Partidos Mundial 2026 🏆

Aplicación web para seguir los resultados de la Copa Mundial FIFA 2026 en tiempo real. Muestra fase de grupos con tabla de posiciones, filtro por día, y bracket de eliminación directa.

## 🌐 Demo

Actualmente corriendo en: `https://ninety-geese-stop.loca.lt`

## ✨ Funcionalidades

- Visualización de fase de grupos (12 grupos, 48 selecciones)
- Tabla de posiciones con puntos, diferencial de gol, etc.
- Filtro de partidos por día
- Bracket de eliminación directa (16vos, 8vos, cuartos, semis, final)
- Actualización de marcadores vía script

## 🚀 Cómo usar

```bash
# Servidor local (Python 3)
python3 server.py

# Tunnel público (localtunnel)
npx localtunnel --port 8080
```

## 📝 Actualizar marcadores

```bash
bash update.sh <id_partido> <goles_local> <goles_visitante>
```

Ejemplo: `bash update.sh 33 5 1` (Países Bajos 5-1 Suecia)

Los IDs están en `js/data.js`.

## 🗓️ Fuente de datos

Calendario oficial extraído de FIFA.com.

## 🛠️ Tecnologías

- Python 3 (servidor HTTP estático)
- JavaScript vanilla (frontend)
- Node.js (actualizador vía API-Football)
- localtunnel (tunnel público)
