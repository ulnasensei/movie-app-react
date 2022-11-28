import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Block, Box, Button, Form } from "react-bulma-components";
import { useLoginContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router";
import { toastWarning } from "../helpers/Toast";
import { Link } from "react-router-dom";
import { loginEmailUser, loginWithGoogle } from "../auth/firebase";
import Flex from "../components/flex/Flex";

const Login = () => {
    const { user } = useLoginContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        loginEmailUser(email.value, password.value, navigate);
    };
    useEffect(() => {
        if (user) {
            toastWarning("You are already logged in!");
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Flex>
            <Box style={{ width: 400, height: "fit-content" }}>
                <form onSubmit={handleSubmit}>
                    <Form.Field>
                        <Form.Label>Email</Form.Label>
                        <Form.Control>
                            <Form.Input
                                type="email"
                                placeholder="example@email.com"
                                name="email"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field>
                        <Form.Label>Password</Form.Label>
                        <Form.Control>
                            <Form.Input
                                type="password"
                                placeholder="*************"
                                name="password"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Button.Group>
                        <Button color="link" type="submit" fullwidth>
                            Login
                        </Button>
                    </Button.Group>
                </form>
                <Button.Group>
                    <Button
                        color={"secondary"}
                        type="button"
                        fullwidth
                        style={{ marginTop: "0.3rem" }}
                        onClick={() => {
                            navigate("/forgot-password");
                        }}
                    >
                        Forgot Password
                    </Button>
                </Button.Group>
                <div className="strike">
                    <span>OR</span>
                </div>
                <Button.Group>
                    <Button color={"white-bis"} fullwidth onClick={() => loginWithGoogle(navigate)}>
                        <FontAwesomeIcon icon={faGoogle} /> &nbsp; Continue with Google
                    </Button>
                </Button.Group>
                <Block>
                    Don't have an account? <Link to="/register">Register</Link>
                </Block>
            </Box>
        </Flex>
    );
};

export default Login;
