import React, { useState, useContext } from "react";
import classes from "./Auth.module.css";
import logo from "../../assets/Images/amazon-black-logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  // console.log(password, email);

  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  const authHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button
            type="submit"
            className={classes.signIn_button}
            onClick={authHandler}
            name="signin"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          className={classes.register_button}
          onClick={authHandler}
          name="signup"
        >
          Create your amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
