import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import TopRated from "./page/TopRated";
import MovieDetails from "./components/MovieDetails";
import Info from "./components/Info";
import Search from "./page/Search";

function App() {
    return (
        <div id="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top"} element={<TopRated/>}/>
                <Route path={`//movie/movie_details/:movie_id`} element={<MovieDetails/>}/>
                <Route path={"/actors/details/:personId"} element={<Info/>}/>
                <Route path={"/movie/search_movie/:movieName"} element={ <Search/> }/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
