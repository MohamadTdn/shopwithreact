import React from "react";
import "./Cart.css";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

export default function Cart({onClose}) {
  return (
    <div className="Cart">
      <div className="cart-header">
        <h1 className="cart-title">Cart</h1>
        <IoCloseSharp onClick={onClose} />
      </div>
      <div className="cart-item">
        <img className="cart-item-image" src="/images/airpodimg.webp" alt="" />
        <h5 className="cart-item-title">Item Title</h5>
        <h5 className="cart-item-price">200$</h5>
        <Button variant="warning">Remove</Button>
      </div>
      <div className="cart-item">
        <img className="cart-item-image" src="/images/airpodimg.webp" alt="" />
        <h5 className="cart-item-title">Item Title</h5>
        <h5 className="cart-item-price">200$</h5>
        <Button variant="warning">Remove</Button>
      </div>
      <Button variant="primary">Purchase</Button>
    </div>
  );
}
