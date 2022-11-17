import React from "react";
import { Box, Button, Form } from "react-bulma-components";
import { toastError } from "../../helpers/Toast";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/AuthContextProvider";

const SearchForm = () => {
    const { user } = useLoginContext();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            navigate(`/search/${e.target.type.value}/${e.target.query.value}`);
        } else {
            toastError("You need to login to search!");
        }
    };
    return (
        <Box className="searchBox">
            <form onSubmit={handleSubmit}>
                <Form.Field kind="group">
                    <Form.Control>
                        <Form.Input placeholder="Search..." required name="query" />
                    </Form.Control>
                    <Form.Control>
                        <Form.Select name="type">
                            <option value="movie">Movie</option>
                            <option value="tv">TV</option>
                            <option value="person">Person</option>
                            <option value="multi">All</option>
                        </Form.Select>
                    </Form.Control>
                </Form.Field>
                <Form.Field>
                    <Button fullwidth color={"info"} submit>
                        Search
                    </Button>
                </Form.Field>
            </form>
        </Box>
    );
};

export default SearchForm;
