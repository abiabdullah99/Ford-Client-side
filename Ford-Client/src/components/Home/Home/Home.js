import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Product from '../Product/Product';
import Team from '../Team/Team';
import Busniess from '../Busniess/Busniess';
import Review from '../Review/Review'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Product></Product>
            <Team></Team>
            <Busniess></Busniess>
            <Review></Review>
        </div>
    );
};

export default Home;