import React from 'react';
import Products from '../Products/Products';

const AllProducts = () => {
    return (
        <div className='grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4
         gap-20 w-5/6 mx-auto my-10'>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
            <Products></Products>
        </div>
    );
}

export default AllProducts;
