import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import part1 from '../../views/Images/partners/1.jpg';
import part2 from '../../views/Images/partners/2.jpg';
import part3 from '../../views/Images/partners/3.jpg';
import part4 from '../../views/Images/partners/4.jpg';
import part5 from '../../views/Images/partners/5.jpg';
import './Partner.css';

const Partner = () => {
    return (
        <div>
       <Container>
            <Row>
               <Col xs={12} md={12} lg={12}>
             <h2>Our Beloved Partners</h2>
             <p className='py-4'>An increasingly common model of physician/hospital partnership is the surgery center joint venture, in which a physician group and a hospital each own a percentage of the ASC and benefit from its profits.To identify the hospital, you can store the institute indicator of the insurance provider in the Inst. Ind. field in the hospital master record. In Germany, the institute indicator is assigned by the Federal Office for Statistics.</p>
               </Col> 
            </Row>
            <Row>
                <Col xs={12} md={6} lg={4}><img src={part1} alt="" srcset="" /></Col>
                <Col  xs={12} md={6} lg={4}><img src={part2} alt="" srcset="" /></Col>
                <Col xs={12} md={6} lg={4}><img src={part3} alt="" srcset="" /></Col>
                <Col xs={12} md={6} lg={4}><img src={part4} alt="" srcset="" /></Col>
                <Col xs={12} md={6} lg={4}><img src={part5} alt="" srcset="" /></Col>
                <Col xs={12} md={6} lg={4}><img src={part3} alt="" srcset="" /></Col>
                
            </Row>
        </Container> 
        </div>
    );
};

export default Partner;