import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { SnackbarProvider } from "notistack";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles
        styles={{
          body: {
            backgroundImage: 'url(./src/assets/Cloudy.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          '@media screen and (max-width: 600px)': {
            body: {
              backgroundPosition: 'right center',
            },
          },
        }}
      />
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
