import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el,key}) => {
    return (
        <div key={el.id} className="popular--card">
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt=""/>
            </Link>
            <h3>{el.title}</h3>
        </div>
    );
};

export default MovieCard;