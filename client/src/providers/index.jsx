// this folder belongs to provider like redux, usecontext , language provider, snackbar provider, MUI theme provider

import React from "react";
import { AdminAuthProvider } from "../context/AdminAuthProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../utils/MUITheme";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <AdminAuthProvider>{children}</AdminAuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Providers;
