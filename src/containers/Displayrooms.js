import React from 'react';
import "../App.css";
import Room1 from "../images/room1.jpg";
import Room2 from "../images/room2.jpg";
import Room3 from "../images/room3.jpg";
import Roomcard from '../componets/Roomcard';


const rooms= [
{   
    rid:1,
    rtitle:"Delux supreme",
    rsubtitle:"Room full with comfort and convenince",
    rimg:Room1,
    ralt:"delux supreme",
    rinfo:"It is a room that comes with all the luxury a traveller can ask for. You can use the pool, go to sauna, use the modern shower system and order anything from room."
},

{   
    rid:2,
    rtitle:"Dream suite",
    rsubtitle:"A room to please your appetite",
    rimg:Room2,
    ralt:"dream suite",
    rinfo:"It is a room that aims to give you all the relaxation you need. With this room you can have your own masseuse, chef and swimming-pool."
},

{   
    rid:3,
    rtitle:"Traveler's Delight",
    rsubtitle:"A room for the couple",
    rimg:Room3,
    ralt:"delight suite",
    rinfo:"It is a room that aims to give you privacy with your family. You fix your eating schedule and let us know when you want to do what. You are in control."
}

]



const Displayrooms = () => {

    const allrooms= rooms.map((item)=>{
        return (
            <Roomcard rtitle={item.rtitle} rsubtitle={item.rsubtitle} rimg={item.rimg} ralt={item.ralt} rinfo={item.rinfo} />
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
