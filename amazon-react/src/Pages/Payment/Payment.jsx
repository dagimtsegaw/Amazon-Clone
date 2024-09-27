import React from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";

function Payment() {
  return (
    <LayOut>
      {/* header */}
      <div>CheckOut</div>
      {/* Payment method */}
      <section>
        {/* address */}
        <div></div>
        <hr />

        {/* product */}
        <div></div>
        <hr />

        {/* card form */}
        <div></div>
      </section>
    </LayOut>
  );
}

export default Payment;
