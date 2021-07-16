import React from 'react';
import "../App.css";
import { RoomsContext } from '../context/RoomsContext';
import { useContext } from 'react';
import Roomshowcard from '../componets/Roomshowcard';

const Allrooms = () => {
    
    const {roominfo: {rooms}}= useContext(RoomsContext);

    const allrooms = rooms.map((item)=>{
        return(
            <Roomshowcard key={item.rid} rid={item.rid} rtitle={item.rtitle} rsubtitle={item.rsubtitle} rimg={item.rimg} rcountry= {item.rcountry} />
        )
    })
    
    return (
        <div className="allrooms">
            <div className="row">
                {allrooms}
            </div>
            
        </div>
    )
}

export default Allrooms;
