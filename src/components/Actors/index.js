import React, {useState, useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import logo from "../../img/users.png"

const Actors = ({movie_id}) => {

    const [actors, setActors] = useState([])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const getActors = (id, key) => {
        axios(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                console.log(res.data.cast)
                setActors(res.data.cast)
            })
    }

    useEffect(() => {
        getActors(movie_id, API_KEY)
    }, [])

    console.log(actors)


    return (
            <div id="actors">
                <div className="container">
                    <h2>Актёрский состав сериала</h2>
                    <div className="actors">

                        <Slider {...settings}>
                        {
                            actors.map((el) => (
                                    <div className="actors--block">

                                        <Link to = {`/actors/details/${el.id}`}>
                                            {el.profile_path ?<img className="actors--block__photos" src={`https://www.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`} alt=""/>
                                                :<img src={logo}style={{width:"190px"}} alt=""/>}

                                            <h5>{el.name} </h5>
                                        </Link>

                                    </div>
                                )
                            )
                        }
                        </Slider>
                    </div>
                </div>
            </div>
    );
};

export default Actors;