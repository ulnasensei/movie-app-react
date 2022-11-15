import React, { useState } from "react";
import { Navbar } from "react-bulma-components";
import { useLoginContext } from "../../context/AuthContextProvider";

const NavbarComponent = () => {
    const { user } = useLoginContext();
    const [burger, setBurger] = useState(false);

    return (
        <Navbar color="link">
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="/">
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
                        <Navbar.Item hoverable={true} href="/logout" textWeight="bold">
                            Logout
                        </Navbar.Item>
                    ) : (
                        <Navbar.Item hoverable={true} href="/login" textWeight="bold">
                            Login
                        </Navbar.Item>
                    )}
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};

export default NavbarComponent;
