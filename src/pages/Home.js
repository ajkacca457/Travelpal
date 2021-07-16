import React from 'react';
import "../App.css"
import Display from '../componets/Homecarousel';
import About from '../componets/About';
import Displayrooms from '../containers/Displayrooms';


const Home = () => {
    return (
        <div className="home">
            <Display/>
            <About/>
            <Displayrooms/>
        </div>
    )
}


export default Home;