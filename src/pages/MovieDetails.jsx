import React from "react";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/movieDetailCard/MovieDetailCard";
import NotFound from "./NotFound";

const MovieDetails = () => {
    const { type, id } = useParams();
    const types = ["movie", "tv", "person"];
    if (types.find((i) => i === type)) {
        return <MovieDetailCard type={type} movieID={id} />;
    } else {
        return <NotFound />;
    }
};

export default MovieDetails;
