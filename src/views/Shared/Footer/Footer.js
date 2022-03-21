import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg'>
            <Container>
                <Row className='g-4'>
                    <Col xs={12} md={6} lg={3}>
                      <div>
                        <h3>Doctors</h3>
                        <a href="#">Dr. Nicksony Simsson</a> <br/>
                        <a href="#">Dr. Maxen Turner-An</a> <br/>
                        <a href="#">Dr.Amy Adams-Williams</a> <br/>
                        <a href="#">Dr.Michael Linden-Richard</a>
                      </div>
                    </Col>

                    <Col xs={12} md={6} lg={3}>
                        <div>
                        <h3>Services</h3>
                        <a href="#">Cardiological Clinical</a> <br/>
                        <a href="#">Outpatient Surgery</a> <br/>
                        <a href="#">Gynaecological Clinic</a> <br/>
                        <a href="#">Outpatient Rehabilitation</a> <br/>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div>
                        <h3>Useful Link</h3>
                        <a href="#">About Us</a> <br/>
                        <a href="#">Team</a> <br/>
                        <a href="#">Testimonial</a> <br/>
                        <a href="#">Emergency</a> <br/>
                        </div>
                    </Col>


                    <Col xs={12} md={6} lg={3}>
                      <div>
                        <h3>Connect Us</h3>
                        <a href="#">333-444-222</a> <br/>
                        <a href="#">clinic.cmsmasters.net</a> <br/>
                        <a href="#">medical-clinic@mail.com</a> <br/>
                        <a href="#">Marion street New York</a> <br/>
                        
                      </div>
                   </Col>
                </Row>
                
         </Container>
         <p p className='py-5'>@copyrignt all rights reserve</p>
        </div>
    );
};

export default Footer;