import React from 'react';
import { ServiceContext } from '../context/ServicesContext';
import { useContext } from 'react';
import "../App.css";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';



const Singleservice = ({serviceid}) => {

    const {services:{services}}=useContext(ServiceContext);

    const service= services.filter((item)=>item.id===serviceid);

    console.log(service);



    return (
        <div className="singleroom">
        <Card>
        <CardBody>
          <CardTitle tag="h5">{service[0].title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{service[0].subtext}</CardSubtitle>
        </CardBody>
        <img width="100%" src={service[0].image} alt="service info" style={{height:"60vh"}}/>
        <CardBody>
          <CardText>{service[0].info}</CardText>
          <h5 className="bg-warning w-50 text-center p-2">{service[0].price}</h5> 
        </CardBody>
      </Card> 
        </div>
    )
}

export default Singleservice;
