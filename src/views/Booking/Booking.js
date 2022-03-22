import React, { useEffect, useRef, useState } from 'react';
import { CircularProgress, Container,Grid,TextField } from '@mui/material';
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
    },[])

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
        

        const loadData={name,email,address,phone,time,img:service.img,status:'pending'}

       fetch(`https://cryptic-fortress-30705.herokuapp.com/services`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },

          body:JSON.stringify(loadData)
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
           if(data.insertedId){
               alert(`Your confirmation successfully accepted`)
               e.target.reset()
           }
       })

    }

    return (
        
        <div className='orderPlace'>
        <Container>
          <Grid container spacing={2}>
             <Grid item xs={12} md={6}>
              <div className='single-service-review-area'>
              <div className='single-service-review'>
                       <img src={service.img} alt="" />
                        <div className='bg-dark'>
                        <h1>{service?.title}</h1>
                       <p>{service.description}</p>
                      
                        </div>
                   </div>
              </div>
               </Grid> 
 
               <Grid item xs={12} md={6}>
                <div className='order-Place-form'>
                    <h1>Confirm orders now</h1>
                <form onSubmit={formSubmit}>
                <input type="name"  ref={nameRef} value={user?.displayName} placeholder='Name'/>
                              <input type="email" value={user?.email} ref={emailRef}placeholder='Email'/>
                              <input value={service.time} type="text"  ref={timeRef} placeholder='time'/>
                              <input type="text"  ref={addressRef} placeholder='Address'/>
                             
                              <input type="number"ref={phoneRef} placeholder='Phone'/>
                              
                          <input type="submit" value="Place order" />
          
        </form>
                </div>
               </Grid> 
             
 
 
               </Grid>
     
        </Container>
      </div>
    );
};

export default Booking;