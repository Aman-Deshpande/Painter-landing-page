import React from "react";
import classes from "./Form.module.css";
import name from "../images/Vector.png";
import phone from "../images/phone.png"
import email from "../images/email.png"
import location from "../images/location.png"
import icon1 from "../images/Ellipse82.png";
import icon2 from "../images/Ellipse83.png";

export default function Form() {
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <p>REQUEST FOR HOME PAINTERS</p>
      </div>
      <form>
        <div className={classes.input__field}>
          <p>Your Name <span>*</span></p>
          <div>
            <img src={name} alt="" />
            <input type="text" placeholder="Enter your Name" />
          </div>
        </div>
        <div className={classes.input__field}>
          <p>Phone Number <span>*</span></p>
          <div className={classes.inputdiv}>
            <img src={phone} alt="" />
            <input type="text" placeholder="Enter your Phone Number" />
          </div>
        </div>
        <div className={classes.input__field}>
          <p>Email <span>*</span></p>
          <div className={classes.inputdiv}>
            <img src={email} alt="" />
            <input type="text" placeholder="Enter your Email Address" />
          </div>
        </div>
        <div className={classes.input__field}>
          <p>Location <span>*</span></p>
          <div className={classes.inputdiv}>
            <img src={location} alt="" />
            <input type="text" placeholder="Search your Location" />
          </div>
        </div>
      </form>
      <div className={classes.form__footer}>
        <p>Painting Type <span>*</span></p>
        <div className={classes.iconsdiv}>
          <div className={classes.icon}>
            <div className={classes.inputdiv}>
              <img src={icon1} alt="" />
              <p>Repaint</p>
            </div>
            <div>
              <img src={icon2} alt="" />
              <p>Fresh Paint</p>
            </div>
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
