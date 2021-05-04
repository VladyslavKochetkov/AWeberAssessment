import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../state/store";
import GlobalSnackBar from "./Snackbar";

if (process.env.NODE_ENV === "development") {
  document.getElementById("root")?.classList.add("debug-screens");
}

const theme = createMuiTheme();

const Config: React.FC = ({ children }) => (
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalSnackBar />
          {children}
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

export default Config;
