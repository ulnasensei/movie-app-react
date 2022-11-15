import React from "react";
import { Outlet, Navigate } from "react-router";
import { useLoginContext } from "../context/AuthContextProvider";
import { toastError } from "../helpers/Toast";

const PrivateRouter = () => {
    const { user } = useLoginContext();
    const runErrorToast = () => {
        toastError("To access this page, you need to login.");
        return <Navigate to="/login" />;
    };
    return <>{user ? <Outlet /> : <>{runErrorToast()}</>}</>;
};

export default PrivateRouter;
