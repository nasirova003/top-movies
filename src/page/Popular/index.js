import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../contex";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const [active,setActive]=useState(1)
    const {language}=useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)

    const getPopular = (key) => {
      axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) =>{
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[active,language])
    if(active===0){
        setActive(active+1)
    }
    return (
        <div id="popular" style={{
            background:dark === true ? "wheat": "black",
            color:dark === true ? "black": "white"
        }}>
            <div className="container">
                <h1>Popular movies</h1>
                <div className="popular">
                    {
                        popular.map((el)=>{
                            return(
                            <MovieCard el={el} key={el.id}/>
                            )
                        })
                    }

                </div>
                <div className="popularBtn">
                    <button onClick={()=>setActive(active-1)}>Назад</button>
                    <h3  style={{
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

export default Popular;

