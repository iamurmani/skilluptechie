import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin/AdminLayout";
import { DashboardLayout } from "../../layouts/admin/DashboardLayout";
import { AdminPrivateRoutes, AdminPublicRoutes } from "./AdminRoutesConstants";
import { useAdminAuth } from "../../context/AdminAuthProvider";

// Access only if logged
const Authentication = (Component) => {
  return false ? <Component /> : <Navigate to="/admin/login" replace={true} />;
};

// Navigate to dashboard isAlready logged
const AleardyLogged = (Component) => {
  return false ? (
    <Navigate to="/admin/dashboard/overview" replace={true} />
  ) : (
    <Component />
  );
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
            element={AleardyLogged(ele.component)}
          />
        ))}

        {/* Private  routes */}
        <Route path="dashboard" element={Authentication(<DashboardLayout />)}>
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

      {/* 404 */}
      <Route path="/*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default AdminRoutes;
