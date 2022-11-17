import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";
import SearchPage from "../pages/SearchPage";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <div id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/:type/:id" element={<PrivateRouter />}>
                        <Route path="" element={<MovieDetails />} />
                    </Route>
                    <Route path="/search" element={<PrivateRouter />}>
                        <Route path="" element={<SearchPage />} />
                        <Route path=":type/:query" element={<SearchPage />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
