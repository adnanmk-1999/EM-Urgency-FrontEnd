import React, { useEffect, useState } from "react";
import UserContext from "../userContext";

const UserContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const roles = localStorage.getItem('roles');
        const username = localStorage.getItem('username');
        const email = localStorage.getItem('email');

        setUserDetails(accessToken ? {
            accessToken,
            roles,
            username,
            email
        } : null)
    }, []);

    const login = (accessToken, roles, username, email) => {
        // debugger;
        if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('roles', roles);
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
        }

        setUserDetails(accessToken ? {
            accessToken,
            roles,
            username,
            email
        } : null)
    };

    const logout = () => {
        // debugger;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('roles');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        setUserDetails(null);
    }

    return (
        <UserContext.Provider value={{
            userDetails,
            login,
            logout
        }}> {children} </UserContext.Provider>
    )

}

export default UserContextProvider;

