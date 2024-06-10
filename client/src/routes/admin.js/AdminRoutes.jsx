import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin/AdminLayout";
import { DashboardLayout } from "../../layouts/admin/DashboardLayout";
import { AdminPrivateRoutes, AdminPublicRoutes } from "./AdminRoutesConstants";
import { useAdminAuth } from "../../context/AdminAuthProvider";

const Authentication = (Component) => {
  return false ? <Component /> : <Navigate to="/admin/login" replace={true} />;
};

function AdminRoutes() {
  const result = useAdminAuth();
  

  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        {/* Public routes */}
        {AdminPublicRoutes.map((ele, index) => (
          <Route
            key={`route-${index}`}
            path={ele.path}
            element={<ele.component />}
          />
        ))}

        {/* Private  routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          {AdminPrivateRoutes.map((ele, index) => (
            <Route
              key={`route-${index}`}
              path={ele.path}
              element={Authentication(ele.component)}
            />
          ))}

          {/* others routes */}
          {/* <Route path="/" element={<Main />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
