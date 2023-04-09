import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {API_KEY} from "../../API";
import logo from "../../img/users.png"

const ActorsMovies = ({personId}) => {
    const [movie, setMovie] = useState([])

    const getMovie = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setMovie(res.data.cast)
            })
    }
    useEffect(() => {
        getMovie(API_KEY)
    }, [])
    console.log(movie)

    return (
        <div id="actorsMovies">
            <div className="container">
                <div className="actorsMovies" style={{
                    display:"flex",
                    alignItems:"center",
                    overflowX:"auto",
                    margin:"20px 0"
                }}>
                    {
                        movie.map((el) => (
                            <div className="actorsMovies--card" style={{
                                padding:"10px 0 0 20px",
                               margin:" 10px",
                                border:"2px solid white"
                            }}>
                                <Link to={`/movie/movie_details/${el.id}`}>
                                    {el.poster_path ?  <img style={{width: "100px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${el.poster_path}`} alt="img"/>
                                        : <img src={logo} style={{width:"130px"}} alt=""/>
                                    }
                                </Link>

                                <h5 style={{
                                    color:"white",
                                    fontSize:"10px",
                                    padding:"10px",
                                    width:"100px"
                                }}>{el.title}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default ActorsMovies;