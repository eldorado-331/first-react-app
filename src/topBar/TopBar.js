import React from "react";
import classes from './TopBar.module.css'
const TopBar = (props) => {
  return (
    <nav className={classes.Topbar}>
      <img src={require("./images/AmazonLogo.png")} alt="Amazon Logo" />
    </nav>
  );
};

export default TopBar;
