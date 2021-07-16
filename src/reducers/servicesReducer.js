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
        image: Service1
        },

        {
            id:uuid(),
            title:"Semi open & outdoor restaurant",
            subtext:"Dine like you never did before",
            image: Service2
        },
        {
            id:uuid(),
            title:"Parking arrangement",
            subtext:"Worry free arrangement for your transportation",
            image: Service3
        },
        {
            id:uuid(),
            title:"Swimming pool/ Jacuzzi activities",
            subtext:"Spend your time swimming or taking a bath in the Jacuzzi",
            image: Service4
        },
        {
            id:uuid(),
            title:"Poolside and indoor bar",
            subtext:"Enjoy your time with the best wine and drinks.",
            image: Service5
        },
        {
            id:uuid(),
            title:"24 Hour room service",
            subtext:"Service on your order. Time doesn't matter when you are enjoying.",
            image: Service6
        },
        {
            id:uuid(),
            title:"Laundry service",
            subtext:"Get your clothes cleaned and just do what you came for.",
            image: Service7
        },
        {
            id:uuid(),
            title:"Tour, Guidance & excursions",
            subtext:"Take a package tour with best guide and enjoy the sceneries",
            image: Service8
        },
        {
            id:uuid(),
            title:"Sunset boat trip",
            subtext:"Whatever the city is, we offer you a beautiful boat or cruise trip",
            image: Service9
        },
        {
            id:uuid(),
            title:"Airport transfers",
            subtext:"We provide silk smooth transfer ride. Get rid of all your tension.",
            image: Service10
        }
]


}




 const servicesReducer = (state,action) => {
    return state;
    
}


export default servicesReducer;