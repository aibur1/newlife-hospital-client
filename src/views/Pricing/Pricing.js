import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Pricing.css';

const Pricing = () => {
    return (
        <div>
            <Container className='py-5'>
                <h1 className='py-4'>Our Price Plan</h1>
                <Row className='py-5 g-4'>
                    <Col xs={12} md={6} lg={4}>

                    <div className="price ">
                    <h3>STANDARD</h3>
                    <h1>$150<small>  Per Year</small></h1>
                    <p>15 Test</p>
                    <p>3 Departments</p>
                    <p>15 Emergency</p>
                    <p>  No Medical Assistance</p>
                    <button className="price-btn" >Chose</button>
                    </div>

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <div className="price">
                    <h3>SILVER</h3>
                    <h1>$250<small>  Per Year</small></h1>
                    <p>20 Test</p>
                    <p>5 Departments</p>
                    <p>20 Emergency</p>
                    <p>  No Medical Assistance</p>
                    <button className="price-btn" >Chose</button>
                </div> 

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                    <div className="price">
                    <h3>PREMIUM</h3>
                    <h1>$450<small>  Per Year</small></h1>
                    <p>25 Test</p>
                    <p>10 Departments</p>
                    <p>25 Emergency</p>
                    <p> Have Medical Assistance</p>
                    <button className="price-btn">Chose</button>
                </div> 

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pricing;