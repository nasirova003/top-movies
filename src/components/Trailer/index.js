import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";


const Trailer = ({movie_id}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                console.log(res.data.results)
                setVideo(res.data.results)
            })
    }

    useEffect(() => {
        getVideo(API_KEY)
    }, [])

    console.log(video)

    return (
        <div id="video">
            <div className="container">
                <div className="video">

                    {
                        video.map((el)=>(
                            <div className="video--card">
                                <iframe width="300" height="200" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="FR-35 || movie, actors, trailers" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US