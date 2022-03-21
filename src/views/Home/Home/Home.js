import React from 'react';
import Partner from '../../Partners/Partner';
import Pricing from '../../Pricing/Pricing';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    return (
        <div>
           <Header/>
           <Pricing/>
           <Partner/>
           <Reviews/>
        </div>
    );
};

export default Home;