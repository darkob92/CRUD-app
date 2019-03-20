import React, { Component } from 'react';
import './products.css';
import ProductsList from './productsList.json';

class Products extends Component {
  render() {
    const list = ProductsList.map((item) => {
      return(
        <div className="product">
          <img src={item.src} className="product-image" />
          <h4 className="product-description">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </h4>
        </div>
      );
    })
    return (
      <div className="products-container">
        { list }
      </div>
    );
  }
}

export default Products;