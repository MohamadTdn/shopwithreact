import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductBox.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProductBox({ imgSrc, title, price }) {
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      initiallyVisible={true}
      animateOnce={true}
    >
      <div className="ProductBox text-center">
        <img className="product-cover" src={`/${imgSrc}`} alt="" />
        <h4 className="product-title">{title}</h4>
        <h5 className="product-price">{price} $</h5>
        <Link to={"/productInfo/1"}>
          <Button className="add-to-cart-btn" variant="primary">
            More
          </Button>
        </Link>
      </div>
    </ScrollAnimation>
  );
}
