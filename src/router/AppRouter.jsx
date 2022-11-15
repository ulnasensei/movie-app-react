import React from "react";
import { Box } from "react-bulma-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Box id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/movie/:id" element={<PrivateRouter />}>
                        <Route path="/movie/:id" element={<MovieDetails type={"movie"} />} />
                    </Route>
                    <Route path="/tv/:id" element={<MovieDetails type={"tv"} />} />
                </Routes>
            </Box>
        </BrowserRouter>
    );
};

export default AppRouter;
