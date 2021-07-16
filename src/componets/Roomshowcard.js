import React from 'react';
import "../App.css";
import { Link } from "@reach/router"


import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Roomshowcard = ({rid,rtitle,rsubtitle, rimg, ralt, rcountry}) => {
    return (
        <div className="roomcard col-12 col-md-6 col-lg-4 mb-4">
         <Card className="text-center">
         <img width="100%" src={rimg} alt={ralt} />
         <CardBody>
          <CardTitle tag="h5">{rtitle}</CardTitle>
          <CardSubtitle tag="h6" className="my-2 text-muted">{rsubtitle}</CardSubtitle>
          <CardSubtitle tag="h6" className="my-2 text-muted">{rcountry}</CardSubtitle>
          <Link to={`/rooms/${rid}`} className="btn btn-danger">Show Room</Link>
        </CardBody>
      </Card>
        </div>
    )
}

export default Roomshowcard;
