import Room1 from "../images/room1.jpg";
import Room2 from "../images/room2.jpg";
import Room3 from "../images/room3.jpg";
import Room4 from "../images/room4.jpg";
import Room5 from "../images/room5.jpg";
import Room6 from "../images/room6.jpg";
import Room7 from "../images/room7.jpg";
import Room8 from "../images/room8.jpg";
import Room9 from "../images/room9.jpg";
import Room10 from "../images/room10.jpg";

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
    },
    {   
        rid:uuid(),
        rtitle:"Double Room",
        rsubtitle:"A room to relax",
        rimg:Room4,
        ralt:"double room",
        rinfo:"Set in a late 1930s building in Äänekoski, this hotel is 500 m from the E75 motorway. It offers in-room tea/coffee facilities, free parking and free Wi-Fi in public areas. Private bathrooms, work desks and TVs are in all rooms at Hotel Hirvi. Free sauna and indoor pool access is offered Monday to Thursday. During winter, parking heaters are available on request. Jyväskylä city center is 25 mi from Hirvi Hotel. Jyväskylä Airport is within 25 minutes’ drive.",
        rcountry:"Finland",
        rcity:"Äänekoski"
    },
    {   
        rid:uuid(),
        rtitle:"Family room",
        rsubtitle:"A room that can be shared",
        rimg:Room5,
        ralt:"Family room",
        rinfo:"Located by Lake Patalahti, 2.5 mi from the West Himos Ski Slopes, this motel provides free sauna access and lake views. Guest rooms include lake views and a balcony or terrace.All rooms at Motel Patalahti have a TV, a work desk and a comfortable armchair or sofa.",
        rcountry:"Finland",
        rcity:"Jämsä"
    },
    {   
        rid:uuid(),
        rtitle:"Draculla room",
        rsubtitle:"A room that is for thrill",
        rimg:Room6,
        ralt:"Family room",
        rinfo:"Hotel Bucegi Portile Regatului enjoys the picturesque mountain surroundings of Predeal resort and is provided with a rustic-style restaurant, a summer terrace and free access to a tennis court. WiFi and private parking are also provided free of charge. Rooms are functionally furnished and feature mountain views, a TV and an private bathroom with free toiletries and a hairdryer. Some also feature a balcony.",
        rcountry:"Romania",
        rcity:"Paraul Rece"
    },
    {   
        rid:uuid(),
        rtitle:"Hill station wonder",
        rsubtitle:"A room to experience hill",
        rimg:Room7,
        ralt:"Double room",
        rinfo:"Mera Hills House in Mera provides adults-only accommodations with a shared lounge, a garden and barbecue facilities. There is a terrace and guests can make use of free WiFi and free private parking.",
        rcountry:"Romania",
        rcity:"Mera"
    },
    {   
        rid:uuid(),
        rtitle:"Luxury Paradise",
        rsubtitle:"A villa for special occasion",
        rimg:Room8,
        ralt:"villa",
        rinfo:"Located in Purasca, 5 mi from Lugano, Romantico Palazzo dei Ulivi provides a shared lounge and free WiFi.Fitted with a patio, the units feature a flat-screen TV and a private bathroom with bidet and a hairdryer. A fridge is also provided, as well as a kettle and a coffee machine.",
        rcountry:"Switzerland",
        rcity:"Purasca"
    },
    {   
        rid:uuid(),
        rtitle:"Luxury Paradise",
        rsubtitle:"A villa for special occasion",
        rimg:Room9,
        ralt:"villa",
        rinfo:"Located in Purasca, 5 mi from Lugano, Romantico Palazzo dei Ulivi provides a shared lounge and free WiFi.Fitted with a patio, the units feature a flat-screen TV and a private bathroom with bidet and a hairdryer. A fridge is also provided, as well as a kettle and a coffee machine.",
        rcountry:"UK",
        rcity:"London"
    },
    {   
        rid:uuid(),
        rtitle:"Luxury Paradise",
        rsubtitle:"A villa for special occasion",
        rimg:Room10,
        ralt:"villa",
        rinfo:"Located in Purasca, 5 mi from Lugano, Romantico Palazzo dei Ulivi provides a shared lounge and free WiFi.Fitted with a patio, the units feature a flat-screen TV and a private bathroom with bidet and a hairdryer. A fridge is also provided, as well as a kettle and a coffee machine.",
        rcountry:"Spain",
        rcity:"Madrid"
    }
],

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
    }
    ]

}


const roomsReducer = (state,action) => {
    return state;
}

export default roomsReducer;
