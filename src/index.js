import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import reportWebVitals from './reportWebVitals';
import CategoryArea from './category-design/category-list';
import ProductsCard from './product-card/product-card';
import NavigationBar from './navigation-bar-and-bnner/navigation-bar';

function Testing(){
  
  return (
    <>
      <div className="container">
      <div className="row">
          <NavigationBar />
        </div>
        <div className="row">
          <CategoryArea />
        </div>
        <div className="row productContainer">
          <ProductsCard data={{"ss":"as"}}/>
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />





          
          <ProductsCard />
          <ProductsCard />
        </div>
      </div>
    </>
  );
  
  
}
ReactDOM.render(
  <Testing />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
