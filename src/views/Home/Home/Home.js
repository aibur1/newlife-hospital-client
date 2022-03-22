import React from 'react';
import Partner from '../../Partners/Partner';
import Pricing from '../../Pricing/Pricing';
import FreeCamp from '../FreeCamp/FreeCamp';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Header/>
           <Pricing/>
           <Partner/>
           <FreeCamp/>
           <Reviews/>
        </div>
    );
};

export default Home;