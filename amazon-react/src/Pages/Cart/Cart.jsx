import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price + amount;
  }, 0);
  return (
    <section className={classes.container}>
      <div className={classes.cart_container}>
        <h3>Hello</h3>
        <h4>Your shopping basket</h4>
        <hr />
        {basket?.length === 0 ? (
          <p>Oops! No item in your cart</p>
        ) : (
          basket?.map((item, id) => (
            <ProductCard
              product={item}
              renderDesc={true}
              flex={true}
              key={id}
              renderAdd={false}
            />
          ))
        )}
      </div>
      <div className={classes.subtotal}>
        <div>
          <p>subtotal ({basket?.length} items)</p>
          <CurrencyFormat amount={total} />
        </div>
        <span>
          <input type="checkbox" />
          <small>This order contains a gift</small>
        </span>
        <Link to="/payments">Continue to check out</Link>
      </div>
    </section>
  );
}

export default Cart;
