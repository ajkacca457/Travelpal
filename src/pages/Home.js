import React from 'react';
import "../App.css"
import Display from '../componets/Homecarousel';
import About from '../componets/About';


const Home = () => {
    return (
        <div className="home">
            <Display/>
            <About/>
        </div>
    )
}


export default Home;