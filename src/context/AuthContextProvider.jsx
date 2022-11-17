import React, { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const values = { user, setUser };

    useEffect(() => {
        userObserver(setUser);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useLoginContext = () => {
    return useContext(AuthContext);
};

export default AuthContextProvider;
