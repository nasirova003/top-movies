import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import Actors from "../Actors";
import Trailer from "../Trailer";

const MovieDetails = ({person_id}) => {
    const [details,setDetails] = useState({})
    const {movie_id} = useParams()

    const getDetails=(key)=>{
        axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${key}&language=en-US`)
            .then((res)=>{
                console.log(res.data)
                setDetails(res.data)
            })
    }
    useEffect(()=>{
        getDetails(API_KEY)
    },[])

const{original_title,release_date,overview,runtime,vote_average,genres}=details
    return (
        <>
            <div id="movieDetails" style={{
                background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}) no-repeat left/cover`,
                maxHeight: '100vh',    filter: "grayscale(0%)",
                boxShadow:"inset 900px 0 0 300px rgba(0,0,0,0.7)"
            }}>
                <div className="container">
                    <div className="movieDetails">

                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`} alt=""/>
                        <div className="movieDetails--info">

                            <h1>{original_title}</h1>
                        <div className="movieDetails--info__genres">
                            <p style={{fontSize:"19px"}}>Жанр :</p>
                            {
                                genres?.map((el)=>{
                                    return(
                                        <p>{el.name}</p>
                                    )
                                })
                            }
                        </div>
                            <h3>{release_date}</h3>
                            <p>{overview}</p>
                            <h3>{Math.floor(runtime/60)} <small>час</small> {runtime%60} <small>мин</small></h3>
                            <div className="movieDetails--info__vote">
                                {Math.round(vote_average * 10)}%
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Actors movie_id ={movie_id}/>
            <Trailer movie_id ={movie_id}/>
        </>
    );
};

export default MovieDetails;