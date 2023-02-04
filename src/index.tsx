// react
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import "./styles.css"
import "./fonts/PressStart2P-Regular.ttf"

// components
import { Propose } from './components/Propose';
import { Info } from './components/Info';

// fluent ui
import { FluentProvider, BrandVariants, createDarkTheme, Portal, createLightTheme } from '@fluentui/react-components';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/ErrorPage';

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
const darkAppTheme = createDarkTheme(brandVariants);
const lightAppTheme = createLightTheme(brandVariants);
darkAppTheme.fontFamilyBase = "PressStart2P-Regular";
lightAppTheme.fontFamilyBase = "PressStart2P-Regular";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {return redirect('/propose')},    
    errorElement: <ErrorPage />,
  },
  {
    path: "/propose",
    element: <Propose />,
    errorElement: <ErrorPage />
  },
  {
    path: '/info',
    element: <Info />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FluentProvider theme={darkAppTheme} applyStylesToPortals={true}>
      <Portal>
        <RouterProvider router={router} />
      </Portal>
    </FluentProvider>
  </React.StrictMode>
);
