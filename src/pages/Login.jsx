import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Block, Box, Button, Form } from "react-bulma-components";
import { useLoginContext } from "../context/AuthContextProvider";
const Login = () => {
    const { user, setUser } = useLoginContext();
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Box style={{ width: 400 }}>
            <form onSubmit={handleSubmit}>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Control>
                        <Form.Input type="email" placeholder="example@email.com" name="email" />
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Password</Form.Label>
                    <Form.Control>
                        <Form.Input type="password" placeholder="*************" name="password" />
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
