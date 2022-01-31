import React, { useState } from 'react';

import '../bootstrap.css';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const ProductCard = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  
  return (
    <>
      <div className='col-6 col-sm-6 p-1'>
        <div className='productCard'>
          <div className='row'>
            <div className='col-lg-4 col-sm-12'>
              <img className='imageProduct' src='https://dummyimage.com/180x180.gif?text=product' alt='My Product'></img>
            </div>
            <div className='col-lg-12 col-sm-12'>
              <h6>Product Name</h6>
            </div>
            <div className='col-12 col-lg-12'>
              <div className='row'>
                <div className='col-lg-3 col-3 col-sm-3'>
                  <p>$32.00</p>
                </div>
                <div className='col-lg-3 col-3 col-sm-3'>
                  <p><strike>$32.00</strike></p>
                </div>
                <div className='col-lg-3 col-3 col-sm-3'>
                  <p>20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;