import React, { useState, useEffect } from 'react';              
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'

export default function MyCard({user}){
  const [details, setDetails] = useState({});
  const imgsrc = user.picture?.large;          // "?" to deep drill further into some APIs

  useEffect(() => {
    setDetails(user);
  }, []);

  return (
    <Card style={{fontFamily:"monospace", backgroundColor:"#B7E9F7"}}>
      <CardBody className='img text-center'>
        <Image height={150} width={150}
        className="border border-dark rounded-circle"
        loader={() => imgsrc}                   // loader function to handle "Error: Invalid src prop" 
        src={imgsrc}
        alt="User Picture"
        />
        <CardTitle className='text-primary'>
          <h2>
            <span>{details.name?.title} </span>  
            <span>{details.name?.first} </span>
            <span>{details.name?.last}</span>     
          </h2>
        </CardTitle>
        <CardText><FaMapMarkedAlt />  {details.location?.city}, {details.location?.state}, {details.location?.country}</CardText>
        <hr />
        <CardText><FaEnvelope />  {details.email}</CardText>
        <CardText><FaPhone />  {details.phone}</CardText>

        <button type="button" className='btn btn-primary' onClick={() => {location.reload()}}>Next User</button>
      </CardBody>
    </Card>
  );
}

