import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../views/Service/Service';
import './Services.css';





const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='my-5'>Our Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;