import React from "react";

const Flex = ({ children, height }) => {
    return (
        <div
            style={{
                width: "100vw",
                height: height ? "100%" : "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
            }}
        >
            {children}
        </div>
    );
};

export default Flex;
