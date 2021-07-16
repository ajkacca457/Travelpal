import React from 'react';
import College from "../images/travelpalcollection.png";
import Logo from "../images/travelpallogo.png";
import { Button } from 'reactstrap';
import { Link } from '@reach/router';

const About = () => {
    return (
        <div className="About">
            <div className="row" style={{width:"80%", margin:"2% auto"}}>

                <div className="col-md-6 col-12 text-center mb-3">
                <img src={College} alt="travelpal" style={{width:"80%"}} />
                </div>

                <div className="col-md-6 col-12 d-flex flex-column justify-content-center bg-secondary text-white p-2">
                    <img src={Logo} alt="travelpal" style={{width:"100px", height:"50px", backgroundColor:"white", margin:"10px auto"}} />
                    <h2 className="text-center">TravelPal</h2>
                    <p className="w-75 mx-auto" style={{textAlign:"justify"}}>TravelPal is a company that aims to secure safe accommodation for travellers. TravelPal makes it easy for international travellers to find a place to live in. Using TravelPal travellers can find excellent rooms to live in with affordable pricing. TravelPal is extremely easy to use. Travellers can search the type of accommodation or service they are looking for. Pay some advance with debit or credit card and just like that the service will be confirmed.</p>
                    <Link to="/rooms" className="btn bg-dark w-50 mx-auto text-white">Rooms</Link>
                    <Link to="/services" className="btn bg-dark mt-2 w-50 mx-auto text-white">Services</Link>
                </div>

            </div>
            


        </div>
    )
}

export default About;
