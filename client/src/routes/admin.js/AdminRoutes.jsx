import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../../layouts/admin/AdminLayout";
import { DashboardLayout } from "../../layouts/admin/DashboardLayout";
import OverView from "../../pages/admin/OverView";
import { AdminPrivateRoutes, AdminPublicRoutes } from "./AdminRoutesConstants";

function AdminRoutes() {
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

        <Route path="dashboard" element={<DashboardLayout />}>
          {/* Private  routes */}
          {AdminPrivateRoutes.map((ele, index) => (
            <Route
              key={`route-${index}`}
              path={ele.path}
              element={<ele.component />}
            />
          ))}
          <Route path="overview" element={<OverView />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
