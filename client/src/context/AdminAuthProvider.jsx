import { createContext, useEffect, useState } from "react";

const AdminAuthContext = createContext({});

const INITIALSTAGE = JSON.parse(localStorage.getItem("user")) || {};

export const AdminAuthProvider = ({ children }) => {
    const [ adminAuth, setAdminAuth ] = useState(INITIALSTAGE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(adminAuth));
    },[adminAuth]);

    return (
        <AdminAuthContext.Provider value={{adminAuth, setAdminAuth}}>
            {children}
        </AdminAuthContext.Provider>
    )
};
export default AdminAuthContext;