import React from 'react';

const Home = () => {
    return (
        <div style={{
            background:`url(https://static.ukrinform.com/photos/2022_12/thumb_files/630_360_1672356307-406.jpeg)no-repeat center/cover`,
            boxShadow: "inset 900px 0 0 900px rgba(0,0,0,0.3)"
        }} id="home">
            <div className="container">
                <div className="home">
                    <h1>Добро пожаловать!</h1>
                    <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас!</h2>

                </div>
            </div>

        </div>
    );
};

export default Home;



