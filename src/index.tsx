// react
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import "./styles.css"

// components
import { App } from './components/App';

// fluent ui
import { FluentProvider, BrandVariants, createDarkTheme, createLightTheme } from '@fluentui/react-components';

const brandVariants: BrandVariants = {
  // https://www.rampgenerator.com/
  10: "#1C2B1F",
  20: "#283C2D",
  30: "#354E3B",
  40: "#426049",
  50: "#4E7157",
  60: "#5B8365",
  70: "#689573",
  80: "#75A781",
  90: "#83B08D",
  100: "#91B99A",
  110: "#9FC2A7",
  120: "#ADCBB4",
  130: "#BBD4C1",
  140: "#C9DDCE",
  150: "#D7E6DB",
  160: "#E6EFE8"
};
const appTheme = createDarkTheme(brandVariants);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FluentProvider theme={appTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
