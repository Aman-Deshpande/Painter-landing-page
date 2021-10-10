import React from "react";
import classes from "./Header.module.css";
import man from "../images/male-painter.png";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.painter}>
        <img src={man} alt="painter" />
      </div>
      <div className={classes.desc}>
        <p className={classes.title}>Professional Wall Painters in <br/>Hyderabad</p>
        <p className={classes.para}>Get lowest prices for home painting in Hyderabad</p>
      </div>
    </div>
  );
}
