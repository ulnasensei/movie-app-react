import React, { useEffect, useState } from "react";
import { Box, Heading } from "react-bulma-components";
import { useParams } from "react-router-dom";
import Flex from "../components/flex/Flex";
import MovieCard from "../components/movieCard/MovieCard";
import SearchForm from "../components/searchForm/SearchForm";
import "./SearchPage.css";

const SearchPage = () => {
    const params = useParams();
    const [result, setResult] = useState({});

    useEffect(() => {
        setResult({});
        if (
            ["movie", "tv", "person", "multi"].find((item) => item === params.type) &&
            params.query
        ) {
            console.log(params.query, params.type);

            fetch(
                `https://movie-app-backend-0ayl.onrender.com/search?type=${params.type}&query=${params.query}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setResult(data);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params]);

    const displayResults = () => {
        if (result.results) {
            console.log(result.results);
            return result.results.map((item) => {
                if (params.type !== "multi") {
                    item = { ...item, media_type: params.type };
                }
                return <MovieCard item={item} key={item.id} />;
            });
        }
    };

    return (
        <Flex height={Boolean(result.results)}>
            <div className="search-result">
                <SearchForm />
                <Box textAlign={"left"} className="result">
                    <Heading>
                        {params.query
                            ? `Search results for: ${params.query}`
                            : "Search for something."}
                    </Heading>
                    <div className="cardContainer">{displayResults()}</div>
                </Box>
            </div>
        </Flex>
    );
};

export default SearchPage;
