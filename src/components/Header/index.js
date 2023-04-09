import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../contex";

const Header = () => {

    const [search, setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {dark}=useContext(LanguageContext)
    const {setDark}=useContext(LanguageContext)
    console.log(setLanguage)
    return (
        <div id="header" style={{
            background:dark === true ? "wheat": "black"
        }}>
            <div className="container">
                <div className="header">
                    <h1 className="header--log">MOVIES&#x27B2;</h1>
                    <div className="header__nav">
                        <NavLink to={"/"} className="header__nav--link" style={{
                            color : dark === true ?"black" : "white"
                        }}>Home</NavLink>
                        <NavLink to={"/popular"} className="header__nav--link" style={{
                            color : dark === true ?"black" : "white"
                        }}>Popular</NavLink>
                        <NavLink to={"/top"} className="header__nav--link" style={{
                            color : dark === true ?"black" : "white"
                        }}>TopRated</NavLink>
                    </div>

                    <select onChange={(e) => setLanguage(e.target.value)}>
                        <option value="ru-RU">Russian</option>
                        <option value="en-US">English</option>
                        <option value="fr-FR">French</option>
                    </select>

                    <div className="header--search">
                        <input type="text"
                               onChange={(e) => {
                                   setSearch(e.target.value)
                               }}
                        />
                        <button onClick={() => nav(`/movie/search_movie/${search}`)} className="header--search__btn">Search
                        </button>
                    </div>
                    <div className="header--dark">
                        <button className="header--dark__day" style={{
                            background:"black",
                            padding:"10px",
                            borderRadius:"50px",
                            color:"white",
                            fontSize:"10px"
                        }} onClick={()=>setDark(true)}>Light</button>
                        <button className="header--dark__night" style={{
                            background:"black",
                            padding:"10px",
                            borderRadius:"50px",
                            color:"white",
                            fontSize:"10px"
                        }} onClick={()=>setDark(false)}>Night</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;