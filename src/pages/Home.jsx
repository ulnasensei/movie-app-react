import React, { useEffect, useState } from "react";
import { Box, Button, Form, Heading } from "react-bulma-components";
import MovieCard from "../components/movieCard/MovieCard";
import { useLoginContext } from "../context/AuthContextProvider";
import { toastError } from "../helpers/Toast";
import "./Home.css";

const Home = () => {
    const { user } = useLoginContext();
    const [movies, setMovies] = useState({});
    const [tv, setTV] = useState({});
    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch("https://movie-app-backend-0ayl.onrender.com/?type=movie")
            .then((res) => res.json())
            .then((data) => setMovies(data));
        fetch("https://movie-app-backend-0ayl.onrender.com/?type=tv")
            .then((res) => res.json())
            .then((data) => setTV(data));
        fetch("https://movie-app-backend-0ayl.onrender.com/?type=person")
            .then((res) => res.json())
            .then((data) => setPeople(data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const fetchMovies = () => {
        if (movies.results) {
            const items = movies.results.slice(0, 10);
            return items.map((item) => {
                return <MovieCard item={item} key={item.id} />;
            });
        }
    };
    const fetchTV = () => {
        if (tv.results) {
            const items = tv.results.slice(0, 10);
            return items.map((item) => {
                return <MovieCard item={item} key={item.id} />;
            });
        }
    };
    const fetchPerson = () => {
        if (people.results) {
            const items = people.results.slice(0, 10);
            return items.map((item) => {
                return <MovieCard item={item} key={item.id} />;
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.query.value, e.target.type.value);
        if (user) {
            //do stuff
        } else {
            toastError("You need to login to search!");
        }
    };
    return (
        <div className="populars">
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
            <Box textAlign={"left"} className="popular">
                <Heading>Popular Movies</Heading>
                <div className="cardContainer">{fetchMovies()}</div>
            </Box>
            <Box textAlign={"left"} className="popular">
                <Heading>Popular TV Shows</Heading>
                <div className="cardContainer">{fetchTV()}</div>
            </Box>
            <Box textAlign={"left"} className="popular">
                <Heading>Popular People</Heading>
                <div className="cardContainer">{fetchPerson()}</div>
            </Box>
        </div>
    );
};

export default Home;
