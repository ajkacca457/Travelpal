import React from 'react';
import College from "../images/travelpalcollection.png"

const About = () => {
    return (
        <div className="About">
            <div className="row" style={{width:"80%", margin:"2% auto"}}>

                <div className="col-md-6 col-12">
                <img src={College} alt="travelpal" style={{width:"80%"}} />
                </div>

                <div className="col-md-6 col-12 d-flex flex-column justify-content-center">
                    <h1>Hello world</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempore doloremque obcaecati. Rem officia placeat quo dolorem voluptas, eius ut maxime molestiae qui alias vel nostrum sequi, ad minus ducimus nihil hic itaque voluptatem molestias dicta, quis incidunt minima vitae? Vel aliquid, dolorum doloribus obcaecati maxime error itaque pariatur fugiat.</p>

                </div>

            </div>
            


        </div>
    )
}

export default About;
