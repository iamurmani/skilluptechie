import AdminSideBar from "../../components/admin/AdminSideBar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <AdminSideBar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
