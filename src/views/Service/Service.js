import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    console.log(service);
    const {_id, name, img, description} = service;
    return (
        <div>
           <Col>
                <Card className="">

                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title> {name}</Card.Title>
                        <h6>{description}</h6>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn price-btn">Booking</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;