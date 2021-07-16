import React from 'react';
import "../App.css";

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Serviceshowcard = ({title,subtext,image}) => {
    return (
        <div className="roomcard col-12 col-md-6 col-lg-4 mb-4">
         <Card className="text-center">
         <img width="100%" src={image} alt="service image" />
         <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="my-3 text-muted">{subtext}</CardSubtitle>
          <Button className="btn btn-success">Use Service</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default Serviceshowcard;
