# Dashboard del Clima

Dashboard del clima construido con React, TypeScript y MUI. Consume la API de [Open-Meteo](https://open-meteo.com/) para mostrar el clima actual y por hora de varias ciudades del Ecuador.

Sitio publicado: https://matheoglg.github.io/dashboard/

## Funcionalidades

- Distribución responsiva con `Grid` de MUI (encabezado, alertas, selector, indicadores, gráfico, tabla e información adicional).
- Componentes reutilizables con props tipadas: `HeaderUI`, `AlertUI`, `SelectorUI` e `IndicatorUI`.
- Selector de ciudades (Guayaquil, Quito, Manta, Cuenca) que comunica la opción elegida a `App` mediante el prop `onOptionSelect`.
- Indicadores de temperatura, temperatura aparente, velocidad del viento y humedad relativa obtenidos con el hook personalizado `useFetchData` (`useEffect` + `fetch`), que vuelve a consultar la API cada vez que cambia la ciudad.
- Gráfico de líneas (`LineChart` de MUI X Charts) y tabla (`DataGrid` de MUI X) con la temperatura y el viento por hora.
- Estados de carga (`CircularProgress`) y de error (`Alert`).

## Tecnologías

React · TypeScript · Vite · MUI · MUI X · Open-Meteo · GitHub Pages

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
