import { useContext } from "react";
import AdminAuthContext from "../context/AdminAuthProvider";

const useAdminAuth = () => {
    return useContext(AdminAuthContext);
}
 
export default useAdminAuth;