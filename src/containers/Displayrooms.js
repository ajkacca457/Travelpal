import React from 'react';
import "../App.css";
import { useContext } from 'react';
import { RoomsContext } from '../context/RoomsContext';
import Roomcard from '../componets/Roomcard';





const Displayrooms = () => {

    const {roominfo:{hotrooms}}= useContext(RoomsContext);
    console.log(hotrooms);
    const allrooms= hotrooms.map((item)=>{
        return (
            <Roomcard key={item.rid} rtitle={item.rtitle} rsubtitle={item.rsubtitle} rimg={item.rimg} ralt={item.ralt} rinfo={item.rinfo} />
        )
    })


    return (
        <div className="roomdisplay">
            <h3 className="text-center bg-secondary w-25 p-2 text-white heading">Our Special Rooms</h3>
        <div className="drooms row mx-auto my-5">  
            {allrooms}
        </div>
        </div>
    )
}

export default Displayrooms;
