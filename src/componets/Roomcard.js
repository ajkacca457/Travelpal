import React from 'react';
import "../App.css";
import { Link } from "@reach/router";

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Roomcard = ({rid,rtitle,rsubtitle, rimg, ralt, rinfo}) => {
    return (
        <div className="roomcard col-12 col-md-6 col-lg-4 mb-2">
         <Card>
        <CardBody>
          <CardTitle tag="h5">{rtitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{rsubtitle}</CardSubtitle>
        </CardBody>
         <img width="100%" src={rimg} alt={ralt} />
        <CardBody>
          <CardText>{rinfo}</CardText>
        </CardBody>
          <Link to={`/hotrooms/${rid}`} className="btn btn-danger w-50 mx-auto my-2">View Room</Link>
      </Card>
        </div>
    )
}

export default Roomcard;
