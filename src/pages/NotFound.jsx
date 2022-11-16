import React from "react";
import { Box } from "react-bulma-components";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Box backgroundColor="dark" style={{ height: "100vh", width: "100%", marginTop: "-2rem" }}>
            <div className="error">
                <p className="p">4</p>
                <span className="dracula">
                    <div className="con">
                        <div className="hair" />
                        <div className="hair-r" />
                        <div className="head" />
                        <div className="eye" />
                        <div className="eye eye-r" />
                        <div className="mouth" />
                        <div className="blod" />
                        <div className="blod blod2" />
                    </div>
                </span>
                <p className="p">4</p>
                <div className="page-ms">
                    <p className="page-msg"> Oops, the page you're looking for Disappeared </p>
                    <button className="go-back" onClick={() => navigate(-1)}>
                        Go Back
                    </button>{" "}
                    &nbsp;
                    <button className="go-back" onClick={() => navigate("/")}>
                        Go Home
                    </button>
                </div>
            </div>
        </Box>
    );
};

export default NotFound;
