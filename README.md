# Dashboard del Clima

Dashboard del clima construido con React, TypeScript y MUI. Consume la API de [Open-Meteo](https://open-meteo.com/) para mostrar el clima actual de Guayaquil.

Sitio publicado: https://matheoglg.github.io/dashboard/

## Funcionalidades

- Distribución responsiva con `Grid` de MUI (encabezado, alertas, selector, indicadores, gráfico, tabla e información adicional).
- Componentes reutilizables con props tipadas: `HeaderUI`, `AlertUI`, `SelectorUI` e `IndicatorUI`.
- Selector de ciudades con eventos y `useState`.
- Indicadores de temperatura, temperatura aparente, velocidad del viento y humedad relativa obtenidos con el hook personalizado `useFetchData` (`useEffect` + `fetch`).

## Tecnologías

React · TypeScript · Vite · MUI · Open-Meteo · GitHub Pages

## Ejecución local

```bash
npm install
npm run dev
```

## Despliegue

```bash
npm run deploy
```

El script `predeploy` compila el proyecto (`npm run build`) y `gh-pages` publica la carpeta `dist` en la rama `gh-pages`.
