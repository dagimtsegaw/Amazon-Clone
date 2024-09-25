import React from "react";
import classes from "./Auth.module.css";
import logo from "../../assets/Images/amazon-black-logo.png";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img src={logo} alt="amazon-logo" />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <button type="submit" className={classes.signIn_button}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={classes.register_button}>
          Create your amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
