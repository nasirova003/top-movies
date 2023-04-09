import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import ActorsMovies from "../ActorsMovies";
import logo from "../../img/users.png"

const Info = () => {
    const [info, setInfo] = useState({})
    const [bio, setBio] = useState(300)
    const {personId} = useParams()

    const getInfo = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
            .then((res) => {
                setInfo(res.data)
            })
    }
    useEffect(() => {
        getInfo(API_KEY)
    }, [])

    const openBio = (text) => {
        if (bio === 300) {
            return setBio(text.length)
        } else {
            return setBio(300)
        }
    }
    console.log(info)
    const {profile_path, name, birthday, place_of_birth, biography} = info

    return (
        <div id="info">
            <div className="container">
                <div className="info">
                    <div className="info--img">
                        <img style={{width: "250px"}} src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`} alt=""/>
                    </div>
                    <div className="info--content">
                        <h1>{name}</h1>
                        <h4>{birthday} ({Math.abs(birthday?.slice(0, 4) - 2023)} years)</h4>
                        <h4>was born in : {place_of_birth}</h4>
                        <p>{biography?.slice(0, bio)}</p>
                        <button onClick={() => {
                            openBio(biography)
                        }}>{bio === 300 ? "Читать далее..." : "Закрыть"}</button>
                        <ActorsMovies personId={personId}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Info;