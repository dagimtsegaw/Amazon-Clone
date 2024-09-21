import React from "react";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  if (!product) {
    return <p>Product not available</p>;
  }

  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card_container}>
      <Link to={`products/${id}`}>
        <img
          src={image || "https://via.placeholder.com/200"}
          alt={title}
          style={{ width: 200 }}
        />
      </Link>
      <div>
        <h4>{title}</h4>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* rate counter */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        <button className={classes.button}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
