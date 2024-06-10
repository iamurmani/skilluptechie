import { BrowserRouter } from "react-router-dom";
import "./App.css";
// import AdminSideBar from './feature/AdminSideBar';
import React, { Suspense } from "react";
import AdminRoutes from "./routes/admin.js/AdminRoutes"; // Ensure the correct import path

function App() {
  window.myCustomProperty = "Hello, world!";

  console.log(myCustomProperty);
let name="mani"

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <AdminRoutes />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
