import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    console.log(service);
    const {_id, time, remaining, name, img, description} = service;
    return (
        <div>
           <Col>
                <Card className="">

                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h5>{time}</h5>
                        <h4>{remaining}</h4>
                        <h6>{description}</h6>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn price-btn">Appointment</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;