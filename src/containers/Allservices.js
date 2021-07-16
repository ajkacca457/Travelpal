import React from 'react';
import "../App.css";
import { ServiceContext } from '../context/ServicesContext';
import { useContext } from 'react';
import Serviceshowcard from '../componets/Serviceshowcard';

const Allservices = () => {
    
  const {services:{services}}=useContext(ServiceContext);
    
    const allservices= services.map((item)=>{
        return (
            <Serviceshowcard key={item.id} title={item.title} image={item.image} subtext={item.subtext}/>
        )
    })

    return (
        <div className="allservices">
            <div className="row">
                {allservices}
            </div>
            
        </div>
    )
}

export default Allservices;
