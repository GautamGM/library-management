import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9E1B32", // Primary color (blue)
    },
    secondary: {
      main: "#dc004e", // Secondary color (pink)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Default font
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    
  </StrictMode>
);
