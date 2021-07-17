import uuid from 'react-uuid';
import Service1 from "../images/service1.jpg";
import Service2 from "../images/service2.jpg";
import Service3 from "../images/service3.jpg";
import Service4 from "../images/service4.jpg";
import Service5 from "../images/service5.jpg";
import Service6 from "../images/service6.jpg";
import Service7 from "../images/service7.jpg";
import Service8 from "../images/service8.jpg";
import Service9 from "../images/service9.jpg";
import Service10 from "../images/service10.jpg";






export const initialState= {

    services: [
        {
        id:uuid(),
        title:"Spa",
        subtext:"Get the best relaxing experience",
        image: Service1, 
        info: "Hacienda Puerta del Cielo offers Massages which combine Deep Tissue, Relaxation, Swedish and Hot Stone therapies. We also offer Full-Body Exfoliation, Body Wraps, Fruit Masks, as well as, Aroma Therapy.  For your convenience, we have designed a Spa Menu which groups some of these treatments together for your enjoyment!  You could also create your own custom Spa Package, (please select a minimum of 3 spa services).  All Spa Services are provided on an individual basis, (we do not offer “couple’s massages”).",
        price:"50$ per hour"
        },

        {
            id:uuid(),
            title:"Semi open & outdoor restaurant",
            subtext:"Dine like you never did before",
            image: Service2,
            info:"The hotel restaurant with both indoor and outdoor seating offers an open-buffet breakfast and is directly accessible from guestroom corridors",
            price:"Entry fee 50$"
        },
        {
            id:uuid(),
            title:"Parking arrangement",
            subtext:"Worry free arrangement for your transportation",
            image: Service3,
            info:"Isfanbul Holiday Home & Suites offers 24-hour indoor parking for its guests. The hotel is directly accessible from the indoor car park and guests can easily reach the shopping mall by using the elevators that are facing the car park hotel entrance. The indoor parking and valet services are free for accommodating hotel guests. Car washing service is also available with an additional cost.",
            price:"25$ per hour"
        },
        {
            id:uuid(),
            title:"Swimming pool/ Jacuzzi activities",
            subtext:"Spend your time swimming or taking a bath in the Jacuzzi",
            image: Service4,
            info:"Enjoy the best views of Finland's capital city from the rooftop pool at the Clarion Hotel Helsinki. Cast your gaze in three directions, and take some time out at our fully-equipped gym and modern spa facilities. This is the ideal place for some rest and relaxation as you marvel at the city's spectacular skyline.",
            price:"Entry starts from 50$"
        },
        {
            id:uuid(),
            title:"Poolside and indoor bar",
            subtext:"Enjoy your time with the best wine and drinks.",
            image: Service5,
            info:"At the apex of the Dream Hollywood is Tao Group’s newest dining, daylife and nightlife concept, The Highlight Room. The luxe 11,000 square foot outdoor rooftop, lounge, pool and grill is set high above Hollywood with unparalleled aerial views of the famed Hollywood sign and the Los Angeles skyline. The Highlight Room offers lively experiences day and night, in addition to casual fare in a stylish atmosphere no matter what the weather.",
            price:"Entry fee 20$"
        },
        {
            id:uuid(),
            title:"24 Hour room service",
            subtext:"Service on your order. Time doesn't matter when you are enjoying.",
            image: Service6,
            info:"Holiday Home & Suites provides 24-hour room service. Please click here for Room Service menu.",
            price:"service charge 15%"
        },
        {
            id:uuid(),
            title:"Laundry service",
            subtext:"Get your clothes cleaned and just do what you came for.",
            image: Service7,
            info:"When you get caught with a stain, it’s a relief to know that the country’s leading service for washing clothes and all sorts of textiles is near. The nationwide laundry network of 60 service points stretches to almost every location where there are businesses and homes. You’ll feel perfectly at home in SOL Laundries, the true customer service specialists.",
            price:"20$ per use"
        },
        {
            id:uuid(),
            title:"Tour, Guidance & excursions",
            subtext:"Take a package tour with best guide and enjoy the sceneries",
            image: Service8,
            info:"Discover a variety of tour guide services to bring a local perspective to your group experiences. Browse our partner listings for detailed offerings. And scroll all the way down for some additional seasonal and unique experiences.",
            price:"Range 50$ to 2000$"
        },
        {
            id:uuid(),
            title:"Sunset boat trip",
            subtext:"Whatever the city is, we offer you a beautiful boat or cruise trip",
            image: Service9,
            info:"On this popular boat sightseeing tour you will get to see the beautiful shorelines of Helsinki. We pass by many famous sights, including the historic Suomenlinna Fortress, Helsinki Zoo on Korkeasaari Island, the fleet of icebreakers and Degerö Canal. Along the way you will hear fascinating stories about the archipelago. Alternative route might be used if the canal is not accessible.",
            price:"Starts from 500$"
        },
        {
            id:uuid(),
            title:"Airport transfers",
            subtext:"We provide silk smooth transfer ride. Get rid of all your tension.",
            image: Service10,
            info:"The accommodating hotel guests can benefit of free shuttle service provided by Isfanbul Shopping & Entertainment World based on availability. Please click here for free shuttle bus hours and destinations.",
            price:"Starts from 30$"
        }
]


}




 const servicesReducer = (state,action) => {
    return state;
    
}


export default servicesReducer;