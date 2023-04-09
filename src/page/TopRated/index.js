import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../contex";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [active,setActive]=useState(1)
    const {language}=useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    const getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }
    useEffect(() => {
        getTopRated(API_KEY)
    }, [active,language])
    if(active===0){
        setActive(active+1)
    }
    return (
        <div id="topRated" style={{
            background:dark === true ? "wheat": "black",
            color:dark === true ? "black": "white"
        }}>
            <div className="container">
                <h1>Popular movies</h1>
                <div className="topRated">
                    {
                        topRated.map((el) => {
                            return (
                                <MovieCard el={el} key={el.id}/>
                            )
                        })
                    }
                </div>
                <div className="topRatedBtn" >
                    <button onClick={()=>setActive(active-1)}>Назад</button>
                    <h3 style={{
                        background:dark === true ? "wheat": "black",
                        color:dark === true ? "black": "white"
                    }}>page:{active}</h3>
                    <button onClick={()=>setActive(active+1)}>Далее</button>
                    <button onClick={()=>setActive(0)}>сбросить</button>
                </div>
            </div>
        </div>
    );
};

export default TopRated;