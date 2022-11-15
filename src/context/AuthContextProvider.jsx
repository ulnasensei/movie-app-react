import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    console.log(user);
    const values = { user, setUser };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useLoginContext = () => {
    return useContext(AuthContext);
};

export default AuthContextProvider;
