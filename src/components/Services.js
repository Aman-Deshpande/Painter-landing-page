import React from "react";
import classes from "./Services.module.css";

export default function Services() {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <p>Home Painting Service Includes</p>
      </div>
      <div className={classes.services__div}>
        <div className={classes.services}>
          <p className={classes.number}>1</p>
          <p>House Inspection with Expert Consultation</p>
        </div>
        <div className={classes.services}>
          <p className={classes.number}>2</p>
          <p>
            Lowest Quotes with Accurate Laser <br />
            Measurements
          </p>
        </div>
        <div className={classes.services}>
          <p className={classes.number}>3</p>
          <p>
            On-Time Project Completion with Dedicated <br /> Manager
          </p>
        </div>
        <div className={classes.services}>
          <p className={classes.number}>4</p>
          <p>
            Top Quality Paints & Experienced and Trained <br /> Partners
          </p>
        </div>
      </div>
    </div>
  );
}
