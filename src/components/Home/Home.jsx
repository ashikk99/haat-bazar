import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../../page/Products/Products';
import AllProducts from '../../page/allproducts/AllProducts';
import ProductCarousel from '../../page/Products/ProductCarousel';
import Card from '../Card';

const Home = () => {
    return (
        <div className='max-w-dvw mx-auto'>
            <HeroBanner></HeroBanner>
            <ProductCarousel></ProductCarousel>
            <h1 className='text-4xl  text-center underline py-10'>Most popular products</h1>
            {/* <Products></Products> */}
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-5/6 mx-auto '>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card> 
                <Card></Card> 
                <Card></Card> 
                <Card></Card> 
                <Card></Card> 
            </div>

            <h1 className='text-4xl  text-center underline py-10 text-amber-500 font-bold'>Baby LifeStyle</h1>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-5/6 mx-auto my-10  '>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
}

export default Home;
