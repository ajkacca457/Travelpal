import Room1 from "../images/room1.jpg";
import Room2 from "../images/room2.jpg";
import Room3 from "../images/room3.jpg";
import uuid from 'react-uuid'


export const initialState= {
    rooms: [{   
        rid:uuid(),
        rtitle:"Delux supreme",
        rsubtitle:"Room full with comfort and convenince",
        rimg:Room1,
        ralt:"delux supreme",
        rinfo:"It is a room that comes with all the luxury a traveller can ask for. You can use the pool, go to sauna, use the modern shower system and order anything from room.",
        rcountry:"Italy",
        rcity:"Rome"
    },
    
    {   
        rid:uuid(),
        rtitle:"Dream suite",
        rsubtitle:"A room to please your appetite",
        rimg:Room2,
        ralt:"dream suite",
        rinfo:"It is a room that aims to give you all the relaxation you need. With this room you can have your own masseuse, chef and swimming-pool.",
        rcountry:"Greece",
        rcity:"Santorini"
    },
    
    {   
        rid:uuid(),
        rtitle:"Traveler's Delight",
        rsubtitle:"A room for the couple",
        rimg:Room3,
        ralt:"delight suite",
        rinfo:"It is a room that aims to give you privacy with your family. You fix your eating schedule and let us know when you want to do what. You are in control.",
        rcountry:"France",
        rcity:"Cannes"
    }],
    hotrooms:[{   
        rid:uuid(),
        rtitle:"Delux supreme",
        rsubtitle:"Room full with comfort and convenince",
        rimg:Room1,
        ralt:"delux supreme",
        rinfo:"It is a room that comes with all the luxury a traveller can ask for. You can use the pool, go to sauna, use the modern shower system and order anything from room.",
        rcountry:"Italy",
        rcity:"Rome"
    },
    
    {   
        rid:uuid(),
        rtitle:"Dream suite",
        rsubtitle:"A room to please your appetite",
        rimg:Room2,
        ralt:"dream suite",
        rinfo:"It is a room that aims to give you all the relaxation you need. With this room you can have your own masseuse, chef and swimming-pool.",
        rcountry:"Greece",
        rcity:"Santorini"
    },
    
    {   
        rid:uuid(),
        rtitle:"Traveler's Delight",
        rsubtitle:"A room for the couple",
        rimg:Room3,
        ralt:"delight suite",
        rinfo:"It is a room that aims to give you privacy with your family. You fix your eating schedule and let us know when you want to do what. You are in control.",
        rcountry:"France",
        rcity:"Cannes"
    }]

}


const roomsReducer = (state,action) => {
    return state;
}

export default roomsReducer;
