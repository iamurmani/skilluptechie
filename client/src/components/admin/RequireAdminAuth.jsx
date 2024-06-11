import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdminAuth from "../../hooks/userAdminAuth";


const RequireAdminAuth = () => {
    const { adminAuth } = useAdminAuth();
    const location = useLocation()
    alert("i am coming")
    return (
        adminAuth?.user 
        ? <Outlet/>
        : <Navigate to='/admin/login' state={{from:location}} replace/>
    )
}
 
export default RequireAdminAuth;