import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import reportWebVitals from './reportWebVitals';
import ProductCard from './product-card/product-card'

function BookList(){
  
  return (<>
  
  <div className='container'>
    <div className='row'>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    </div>
    
    </div>
  
    </>
  );
  
  
}
ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
