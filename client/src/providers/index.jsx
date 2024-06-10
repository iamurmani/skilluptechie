// this folder belongs to provider like redux, usecontext , language provider, snackbar provider, MUI theme provider

import React from "react";
import { AdminAuthProvider } from "../context/AdminAuthProvider";

const Providers = ({children}) => {
  return (
    <>
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </>
  );
};

export default Providers;
