import React from 'react';
import './Header.css';
import slider1 from '../../Images/slilde1.jpg';
import slider2 from '../../Images/slide2.jpg';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider1}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Header;