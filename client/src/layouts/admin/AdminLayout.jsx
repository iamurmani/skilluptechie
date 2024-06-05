import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return ( 
        <main className="h-full">
            <Outlet />
        </main>
     );
}
 
export default AdminLayout;