import React, { useEffect, useState } from "react";
import { Box, Columns, Heading, Icon, Image } from "react-bulma-components";
import NotFound from "../../pages/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";
import {
    faCalendarDays,
    faGlobe,
    faRankingStar,
    faHandHoldingDollar,
    faHome,
    faClock,
    faCakeCandles,
    faSkull,
} from "@fortawesome/free-solid-svg-icons";

const MovieDetailCard = ({ type, movieID }) => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://movie-app-backend-0ayl.onrender.com/details?type=${type}&id=${movieID}`)
            .then((res) => res.json())
            .then((data) => setDetails(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const componentCreator = () => {
        if (details.id) {
            if (type === "movie") {
                return (
                    <Box
                        style={{
                            width: "90%",
                            height: "fit-content",
                        }}
                    >
                        <Columns>
                            <Columns.Column size={4}>
                                <Image
                                    src={
                                        details.poster_path
                                            ? `https://image.tmdb.org/t/p/original${details.poster_path}`
                                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                    }
                                />
                            </Columns.Column>
                            <Columns.Column>
                                <Columns>
                                    <Columns.Column>
                                        <Heading>
                                            {details.title} - ({details.release_date.split("-")[0]})
                                        </Heading>
                                    </Columns.Column>
                                    <Columns.Column textAlign={"right"}>
                                        <StarRatings
                                            rating={details.vote_average / 2}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name="rating"
                                            starDimension="30px"
                                        />
                                    </Columns.Column>
                                </Columns>

                                {details.tagline ? (
                                    <Heading subtitle italic>
                                        {details.tagline}
                                    </Heading>
                                ) : (
                                    ""
                                )}
                                <hr />
                                <Columns>
                                    <Columns.Column>
                                        <Heading size={4}>Overview</Heading>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <p style={{ textAlign: "right" }}>
                                            {details.genres.map((genre) => genre.name).join(", ")}
                                        </p>
                                    </Columns.Column>
                                </Columns>

                                <p>{details.overview}</p>
                                <hr />
                                <Columns>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                        </Icon>{" "}
                                        {details.release_date}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faHome} />
                                        </Icon>{" "}
                                        {details.homepage ? (
                                            <a
                                                href={details.homepage}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Homepage
                                            </a>
                                        ) : (
                                            "-"
                                        )}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faRankingStar} />
                                        </Icon>{" "}
                                        {details.popularity}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faHandHoldingDollar} />
                                        </Icon>{" "}
                                        {details.production_companies[0].name}
                                    </Columns.Column>
                                </Columns>
                                <Columns>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </Icon>{" "}
                                        {details.production_countries.map((i) => i.name).join(", ")}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faClock} />
                                        </Icon>{" "}
                                        {details.runtime} mins
                                    </Columns.Column>
                                </Columns>
                            </Columns.Column>
                        </Columns>
                    </Box>
                );
            }
            if (type === "tv") {
                return (
                    <Box
                        style={{
                            width: "90%",
                            height: "fit-content",
                        }}
                    >
                        <Columns>
                            <Columns.Column size={4}>
                                <Image
                                    src={
                                        details.poster_path
                                            ? `https://image.tmdb.org/t/p/original${details.poster_path}`
                                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                    }
                                />
                            </Columns.Column>
                            <Columns.Column>
                                <Columns>
                                    <Columns.Column>
                                        <Heading>
                                            {details.name} - ({details.first_air_date.split("-")[0]}
                                            )
                                        </Heading>
                                    </Columns.Column>
                                    <Columns.Column textAlign={"right"}>
                                        <StarRatings
                                            rating={details.vote_average / 2}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            name="rating"
                                            starDimension="30px"
                                        />
                                    </Columns.Column>
                                </Columns>

                                {details.tagline ? (
                                    <Heading subtitle italic>
                                        {details.tagline}
                                    </Heading>
                                ) : (
                                    ""
                                )}
                                <hr />
                                <Columns>
                                    <Columns.Column>
                                        <Heading size={4}>Overview</Heading>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <p style={{ textAlign: "right" }}>
                                            {details.genres.map((genre) => genre.name).join(", ")}
                                        </p>
                                    </Columns.Column>
                                </Columns>

                                <p>{details.overview}</p>
                                <hr />
                                <Heading size={5}>Created by:</Heading>
                                <Heading subtitle>
                                    {details.created_by.map((guy) => guy.name).join(", ")}
                                </Heading>
                                <Columns>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                        </Icon>{" "}
                                        {details.first_air_date}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faHome} />
                                        </Icon>{" "}
                                        {details.homepage ? (
                                            <a
                                                href={details.homepage}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Homepage
                                            </a>
                                        ) : (
                                            "-"
                                        )}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faRankingStar} />
                                        </Icon>{" "}
                                        {details.popularity}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faHandHoldingDollar} />
                                        </Icon>{" "}
                                        {details.production_companies[0].name}
                                    </Columns.Column>
                                </Columns>
                                <Columns>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </Icon>{" "}
                                        {details.production_countries.map((i) => i.name).join(", ")}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faClock} />
                                        </Icon>{" "}
                                        {details.episode_run_time[0] || "-"} mins
                                    </Columns.Column>
                                </Columns>
                            </Columns.Column>
                        </Columns>
                    </Box>
                );
            }
            if (type === "person") {
                return (
                    <Box
                        style={{
                            width: "90%",
                            height: "fit-content",
                        }}
                    >
                        <Columns>
                            <Columns.Column size={4}>
                                <Image
                                    src={
                                        details.profile_path
                                            ? `https://image.tmdb.org/t/p/original${details.profile_path}`
                                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                                    }
                                />
                            </Columns.Column>
                            <Columns.Column>
                                <Heading>{details.name}</Heading>

                                {details.known_for_department ? (
                                    <Heading subtitle italic>
                                        {details.known_for_department}
                                    </Heading>
                                ) : (
                                    ""
                                )}
                                <hr />
                                <Heading size={4}>Biography</Heading>

                                <p>{details.biography}</p>
                                <hr />
                                <Columns>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faCakeCandles} />
                                        </Icon>{" "}
                                        {details.birthday || "-"}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faSkull} />
                                        </Icon>{" "}
                                        {details.deathday || "-"}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faHome} />
                                        </Icon>{" "}
                                        {details.homepage ? (
                                            <a
                                                href={details.homepage}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Homepage
                                            </a>
                                        ) : (
                                            "-"
                                        )}
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Icon>
                                            <FontAwesomeIcon icon={faRankingStar} />
                                        </Icon>{" "}
                                        {details.popularity}
                                    </Columns.Column>
                                </Columns>
                            </Columns.Column>
                        </Columns>
                    </Box>
                );
            }
        }
        if (details.success === false) {
            return <NotFound />;
        }
    };

    return <>{componentCreator()}</>;
};

export default MovieDetailCard;
