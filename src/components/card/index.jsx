import React from "react";

// import { formatter, ratingStar } from '../helper';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Styles from "../card/card.css";



function Card(props) {
  const { key,
    discounted,
    productName,
    image,
    newPrice,
    oldPrice,
   } = props;
  return (
    
    <div className="card" key={key}>
      <div className="header">
      <span className="discounted">{`-${discounted}%`}</span>
      <button className="delete-button">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      </div>
      
      <div className="card-header">
        <img
          className="product-image"
          src={image}
          alt="Product"
        />
      </div>
      <button
        className="add-to-cart-button"
      ><FontAwesomeIcon icon={faShoppingCart} className="cart_icon"/>
        Add to Cart
      </button>
      <div className="card-body">
        <p className="product_name">{productName}</p>
        <div className="price-wrapper">
          <p className="new_price">{newPrice}</p>

          <p className="old_price">{oldPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
