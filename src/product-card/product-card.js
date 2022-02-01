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
      <div className="col-6 col-sm-6 col-lg-3 p-1">
        <div className="productCard">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-lg-2">
              <img
                className="imageProduct"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEs_IsixJI4bTnhCwlcWV_K_3eT-pMGg6KWA&usqp=CAU"
                alt="My Product"
              ></img>
              {/* */}
            </div>
            <div className="col-lg-7 col-sm-12">
              <h6 className="productHeading">Product Name</h6>
              <div className="row">
                <div className="col-lg-8 col-8 col-sm-8">
                  <div className="prices">
                    <p>$32.00</p>
                  </div>
                </div>
                <div className="col-lg-4 col-3 col-sm-3">
                  <div>
                    <i onClick={()=>{alert("Product Carted")}} className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>

                </div>
                <div className="col-lg-4 col-4 col-sm-4">
                  <div className="prices offersection">
                    <p className="strikePrice">
                      <strike>$32.00</strike>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-4 col-sm-4">
                  <div className="prices">
                    <p className="offerPrice">20%</p>
                  </div>
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