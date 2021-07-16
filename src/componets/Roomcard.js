import React from 'react';
import "../App.css";

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Roomcard = ({rtitle,rsubtitle, rimg, ralt, rinfo}) => {
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
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
        </div>
    )
}

export default Roomcard;
