import React, { useEffect, useState } from "react";
import { Box, Heading } from "react-bulma-components";
import DummyCard from "../components/dummyCard/DummyCard";
import MovieCard from "../components/movieCard/MovieCard";
import SearchForm from "../components/searchForm/SearchForm";
import "./Home.css";

const Home = () => {
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
    const fetchDummyCards = () => {
        return Array.from(Array(10)).map(() => {
            return <DummyCard key={Date.now()} />;
        });
    };
    const fetchMovies = () => {
        const items = movies.results.slice(0, 10);
        return items.map((item) => {
            return <MovieCard item={item} key={item.id} />;
        });
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
    return (
        <div className="populars">
            <SearchForm />
            <Box textAlign={"left"} className="popular">
                <Heading>Popular Movies</Heading>
                <div className="cardContainer">
                    {movies.results ? fetchMovies() : fetchDummyCards()}
                </div>
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
