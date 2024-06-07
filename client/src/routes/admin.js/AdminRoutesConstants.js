import { lazy } from "react";

export const AdminPublicRoutes = [
  {
    name: "AdminLogin",
    path: "login",
    component: lazy(() => import("../../pages/admin/AdminLogin")),
  },
];

export const AdminPrivateRoutes = [
  {
    name: "OverView",
    path: "overview",
    component: lazy(() => import("../../pages/admin/OverView")),
  },
];
