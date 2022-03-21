import React, { useEffect, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    let { serviceId } = useParams();
    const [service, setService] = useState({});
    // const [singleService, setSingleService] = useState([]);
    const {user}=useAuth();

    useEffect(() => {

        fetch( `https://cryptic-fortress-30705.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const nameRef=useRef();
    const emailRef=useRef();
    const addressRef=useRef();
    const phoneRef=useRef();
    const timeRef=useRef();
    

    const formSubmit = e => {
        e.preventDefault();
        const name=nameRef.current.value;
         const email=emailRef.current.value;
         const address=addressRef.current.value;
         const time = timeRef.current.value;
          const phone=phoneRef.current.value;
        

        const loadData={name,email,address,phone,time,img:service.img,status:'pending',price:service.price}

       fetch(`https://cryptic-fortress-30705.herokuapp.com/services`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },

          body:JSON.stringify(loadData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert(`Your confirmation successfully accepted`)
               e.target.reset()
           }
       })

    }

    return (
        <div className='row '>
            <div className='  col-sm-12 col-md-4 col-lg-6'>
                
                <img src={service?.img} alt="" /> 
                <h1>{service?.name}</h1>
                <h5>{service.description}</h5>
                
            </div>
            
            <div className=' col-sm-12 col-md-4 col-lg-6'>
                 <div className='py-5'>
                      <h1>Confirm Booking now</h1>
                   <form className='' onSubmit={formSubmit}>
                       <input type="name"  ref={nameRef} value={user?.displayName} placeholder='Name'/> <br />
                                <input type="email" value={user?.email} ref={emailRef}placeholder='Email'/> <br />
                                <input disabled type="" value={service?.time} ref={timeRef}placeholder=''/> <br />
                                <input type="text"  ref={addressRef} placeholder='Address'/> <br />
                                {/* <input type="text" value={service?.title} ref={pruductRef} placeholder='Product Name'/> */}
                                <input type="number"ref={phoneRef} placeholder='Phone'/> <br/> <br />
                                {/* <input type="date"  ref={dateRef} placeholder='Date'/> */}
                       <input className='price-btn' type="submit" value="Confirm" />
            
                  </form>
               </div>
            </div>
        </div>
    );
};

export default Booking;