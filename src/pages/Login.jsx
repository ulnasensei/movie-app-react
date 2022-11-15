import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Block, Box, Button, Form } from "react-bulma-components";
import { useLoginContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router";
import { toastSuccess, toastWarning } from "../helpers/Toast";

const Login = () => {
    const { user, setUser } = useLoginContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(true);
        toastSuccess("Logged in.");
        navigate("/");
    };
    useEffect(() => {
        if (user) {
            toastWarning("You are already logged in!");
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box style={{ width: 400 }}>
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
            <div className="divider">OR LOGIN WITH</div>
            <Button.Group>
                <Button color={"white-bis"} fullwidth>
                    <FontAwesomeIcon icon={faGoogle} /> &nbsp; Google
                </Button>
            </Button.Group>
            <Block>
                Don't have an account? <a href="/register">Register</a>
            </Block>
        </Box>
    );
};

export default Login;
