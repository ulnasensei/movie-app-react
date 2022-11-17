import React, { useEffect } from "react";
import { Box, Button, Form } from "react-bulma-components";
import { useLoginContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router";
import { toastWarning } from "../helpers/Toast";
import { resetPassword } from "../auth/firebase";

const ForgotPassword = () => {
    const { user } = useLoginContext();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { email } = e.target;
        resetPassword(email.value);
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
                <Button.Group>
                    <Button color="link" type="submit" fullwidth>
                        Send
                    </Button>
                </Button.Group>
            </form>
        </Box>
    );
};

export default ForgotPassword;
