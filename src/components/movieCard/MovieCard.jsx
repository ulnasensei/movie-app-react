import React, { useEffect, useState } from "react";
import { Card, Content, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFilm, faIdBadge, faUser, faTv } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const MovieCard = ({ item }) => {
    const [info, setInfo] = useState({});
    const type = item.media_type;
    const percentage = Math.trunc((item?.vote_average || 0) * 10);

    const getColor = (value) => {
        var hue = ((value / 100) * 120).toString(10);
        return ["hsl(", hue, ",100%,50%)"].join("");
    };
    const extractInfo = (item) => {
        if (type === "person") {
            return {
                icon: (
                    <>
                        <FontAwesomeIcon icon={faUser} /> &nbsp;
                    </>
                ),
                name: item.name,
                info: (
                    <>
                        <FontAwesomeIcon icon={faIdBadge} />
                        &nbsp; {item.known_for_department}
                    </>
                ),
                image: item.profile_path,
                id: item.id,
            };
        }
        if (type === "movie") {
            return {
                icon: (
                    <>
                        <FontAwesomeIcon icon={faFilm} /> &nbsp;
                    </>
                ),
                name: item.title,
                info: (
                    <>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        &nbsp; {item.release_date}
                    </>
                ),
                image: item.poster_path,
                id: item.id,
            };
        }
        if (type === "tv") {
            return {
                icon: (
                    <>
                        <FontAwesomeIcon icon={faTv} /> &nbsp;
                    </>
                ),
                name: item.name,
                info: (
                    <>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        &nbsp; {item.first_air_date}
                    </>
                ),
                image: item.poster_path,
                id: item.id,
            };
        }
    };
    useEffect(() => {
        setInfo(extractInfo(item));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Link to={`/${type}/${info.id}`}>
            <Card style={{ width: 250, height: 500, margin: "auto" }}>
                <div
                    style={{
                        width: "250px",
                        height: "375px",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Card.Image
                        src={
                            info.image
                                ? `https://image.tmdb.org/t/p/original${info.image}`
                                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                        }
                    />
                </div>
                {type === "person" ? (
                    ""
                ) : (
                    <div
                        style={{
                            width: 70,
                            height: 70,
                            position: "absolute",
                            top: "-25px",
                            left: "-25px",
                            margin: "0",
                        }}
                    >
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            background={true}
                            styles={buildStyles({
                                textSize: "30px",
                                textColor: "#232323",
                                pathColor: getColor(percentage),
                                backgroundColor: "#ffffff",
                            })}
                        />
                    </div>
                )}
                <Card.Content>
                    <Content>
                        <Heading size={6} style={{ height: "2rem" }}>
                            {info.icon} {info.name}
                        </Heading>
                        {info.info}
                    </Content>
                </Card.Content>
            </Card>
        </Link>
    );
};

export default MovieCard;
