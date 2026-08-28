import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../../page/Products/Products';
import AllProducts from '../../page/allproducts/AllProducts';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <h1 className='text-4xl font-bold text-yellow-800 text-center underline mt-5 '>Tanding Products</h1>
            <AllProducts></AllProducts>
        </div>
    );
}

export default Home;
