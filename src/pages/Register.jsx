import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Block, Box, Button, Form } from "react-bulma-components";
import { useLoginContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router";
import { toastWarning } from "../helpers/Toast";
import { Link } from "react-router-dom";
import "./divider.css";
import { createEmailUser, loginWithGoogle } from "../auth/firebase";
import Flex from "../components/flex/Flex";

const Register = () => {
    const { user } = useLoginContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, name } = e.target;

        createEmailUser(email.value, password.value, name.value, navigate);
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control>
                            <Form.Input type="text" placeholder="John Smith" name="name" required />
                        </Form.Control>
                    </Form.Field>
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
                            Register
                        </Button>
                    </Button.Group>
                </form>
                <div className="strike">
                    <span>OR</span>
                </div>

                <Button.Group>
                    <Button color={"white-bis"} fullwidth onClick={loginWithGoogle}>
                        <FontAwesomeIcon icon={faGoogle} /> &nbsp; Continue with Google
                    </Button>
                </Button.Group>
                <Block>
                    Already have an account? <Link to="/login">Login</Link>
                </Block>
            </Box>
        </Flex>
    );
};

export default Register;
