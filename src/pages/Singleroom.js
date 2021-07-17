import React from 'react';
import "../App.css";
import { useContext } from 'react';
import {RoomsContext} from "../context/RoomsContext";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Singleroom = ({roomid}) => {

    const {roominfo:{rooms}}=useContext(RoomsContext);

    const room= rooms.filter((item)=> item.rid===roomid);

    console.log(room);

    return (
        <div className="singleroom">
            <Card>
        <CardBody>
          <CardTitle tag="h5">{room[0].rtitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{room[0].rsubtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src={room[0].rimg} alt="Card image cap" style={{height:"60vh"}}/>
        <CardBody>
          <CardText>{room[0].rinfo}</CardText>
          <CardSubtitle tag="h5" className="mb-2 text-muted">{room[0].rcity}{" , "} {room[0].rcountry}</CardSubtitle> 
        </CardBody>
      </Card> 
        </div>
    )
}

export default Singleroom;
