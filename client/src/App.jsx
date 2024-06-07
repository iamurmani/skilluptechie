import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
// import AdminSideBar from './feature/AdminSideBar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/MUITheme";
import AdminRoutes from "./routes/admin.js/AdminRoutes"; // Ensure the correct import path
import React, { Suspense } from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
       
          <AdminRoutes />
       
      </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
