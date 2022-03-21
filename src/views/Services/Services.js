import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../../views/Service/Service';
import './Services.css';





const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://cryptic-fortress-30705.herokuapp.com/services`)
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


// const services = [
//     [
//         {
//             "time":"08.00 AM - 09.00 AM",
//             "remaining":"10 SPACES AVAILABLE",
//             "name": "Anesthesiologists",
//             "img": "https://www.businessinsider.in/thumb/msid-76520726,width-700,height-525,imgsize-40417/1-anesthesiologists.jpg",
//             "description": "Anesthesiologists care for patients undergoing surgery by providing them with anesthesia."
//         },
//         {
//             "time":"09.00 AM - 10.00 AM",
//             "remaining":"13 SPACES AVAILABLE",
//             "name":"Surgeons",
//             "img": "https://www.businessinsider.in/thumb/msid-76520732,width-700,height-525,imgsize-403268/2-surgeons.jpg",
//             "description": "Surgeons manage patients' diseases, injuries, and deformities using surgical methods."
//         },
//         {
//             "time":"11.00 AM - 12.00 PM",
//             "remaining":"08 SPACES AVAILABLE",
//             "name": "Oral and maxillofacial surgeons",
//             "img": "https://www.businessinsider.in/thumb/msid-76520739,width-700,height-525,imgsize-1374632/3-oral-and-maxillofacial-surgeons.jpg",
//             "description": "Oral and maxillofacial surgeons provide surgery on patients' mouths, jaws, and faces."
//         },
//         {
//             "time":"07.00 AM - 09.00 AM",
//             "remaining":"10 SPACES AVAILABLE",
//             "name": "Obstetricians and gynecologists",
//             "img":"https://www.businessinsider.in/thumb/msid-76520747,width-700,height-525,imgsize-978532/4-obstetricians-and-gynecologists.jpg",
//             "description": "Obstetricians and gynecologists are physicians that care for women's reproductive systems."
//         },
//         {
//             "time":"05.00 PM - 07.00 PM",
//             "remaining":"03 SPACES AVAILABLE",
//             "name":"Orthodontists",
//             "img": "https://www.businessinsider.in/thumb/msid-76520753,width-700,height-525,imgsize-460398/5-orthodontists.jpg",
//             "description": "Orthodontists help straighten patients' smiles using pressure from braces and other tools."
//         },
//         {
//             "time":"08.00 PM - 09.00 PM",
//             "remaining":"10 SPACES AVAILABLE",
//             "name": "Psychiatrists",
//             "img": "https://www.businessinsider.in/thumb/msid-76520764,width-700,height-525,imgsize-199508/7-psychiatrists.jpg",
//             "description": "Psychiatrists are physicians that treat patients with mental health illnesses."
//         },
//         {
//             "time":"08.00 AM - 09.00 AM",
//             "remaining":"10 SPACES AVAILABLE",
//             "name": "Physicians (all other) and ophthalmologists",
//             "img": "https://www.businessinsider.in/thumb/msid-76520772,width-700,height-525,imgsize-400492/9-physicians-all-other-and-ophthalmologists.jpg",
//             "description": "All otherphysicians are those not listed separately in the U.S. Bureau of Labor Statistics."
//         },
//         {
//             "time":"10.00 AM - 11.00 AM",
//             "remaining":"07 SPACES AVAILABLE",
//             "name": "General pediatricians",
//             "img": "https://www.businessinsider.in/thumb/msid-76520778,width-700,height-525,imgsize-1368601/11-general-pediatricians.jpg",
//             "description": "Pediatricians prevent, diagnose, and treat children's diseases and injuries."
//         },
//         {
//             "time":"08.00 AM - 09.00 AM",
//             "remaining":"10 SPACES AVAILABLE",
//             "name": "Optometrists",
//             "img": "https://www.businessinsider.in/thumb/msid-76520784,width-700,height-525,imgsize-544987/15-optometrists.jpg",
//             "description": "Optometrists treat diseases, injuries, and other disorders related to patients' eyes."
//         }
//     ]
// ]