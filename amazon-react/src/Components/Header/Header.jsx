import React from "react";
import classes from "./Header.module.css";
import amazonWhite from "../../assets/Images/amazon-white-logo.png";
import usFlag from "../../assets/Images/Us-flag.png";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img src={amazonWhite} alt="amazon-logo" />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div>
            {/* Search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Product" />
              <BsSearch size={25} />
            </div>
          </div>
          <div className={classes.right_side_container}>
            {/* right-side-link */}
            <a className={classes.language}>
              <img src={usFlag} />
              <select>
                <option>EN</option>
              </select>
            </a>
            <a href="#">
              <p>Sign in</p>
              <span>Account & Lists</span>
            </a>
            {/* orders */}
            <a href="#">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
