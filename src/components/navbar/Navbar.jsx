import React, { useState } from "react";
import { Image, Navbar } from "react-bulma-components";
import { useNavigate } from "react-router";
import { useLoginContext } from "../../context/AuthContextProvider";
import { logout } from "../../auth/firebase";

const NavbarComponent = () => {
    const { user } = useLoginContext();
    const [burger, setBurger] = useState(false);

    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/");
    };
    const login = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <Navbar color="link" style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
            <Navbar.Brand>
                <Navbar.Item
                    renderAs="a"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}
                >
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="React Movie App"
                        width="150"
                        height="45"
                    />
                </Navbar.Item>

                <Navbar.Burger
                    className={burger ? "is-active" : ""}
                    onClick={() => setBurger((current) => !current)}
                />
            </Navbar.Brand>

            <Navbar.Menu className={burger ? "is-active" : ""}>
                <Navbar.Container align="right">
                    {user ? (
                        <>
                            <Navbar.Item>
                                <Image
                                    src={user.photoURL}
                                    style={{ width: "32px", height: "32px" }}
                                    rounded
                                    referrerPolicy="no-referrer"
                                />
                                &nbsp;&nbsp;
                                {user.displayName}
                            </Navbar.Item>
                            <Navbar.Item hoverable={true} onClick={handleLogout} textWeight="bold">
                                Logout
                            </Navbar.Item>
                        </>
                    ) : (
                        <Navbar.Item hoverable={true} onClick={(e) => login(e)} textWeight="bold">
                            Login
                        </Navbar.Item>
                    )}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarComponent;
