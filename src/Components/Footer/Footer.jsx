import React from "react";
import style from "./Footerstyle.module.css";
import Android from './../../images/Android.svg'
import IOS from './../../images/IOS.svg'
import QR from './../../images/QR.svg'

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.Section}>
        <div>
          <h6>Subscribe now</h6>
          <p>sign up and receive 10% gift voucher!</p>
          <div>
            <label> Email address</label> <br></br>
            <div>
            <input type={"email"} placeholder="Enter your email address" />{" "}
            <button type="submit">Register</button>

            </div>
            
          </div>
          <h4 >GLOWSKY</h4>
        </div>
        <div className={style.firstlower}>
          <p>social media links</p>
          <p> all rights reserved GLOWSKY 2024 </p>
        </div>
      </div>

      <div className={style.Section}>
        <div className={style.sndSection}>
          <div className={style.info}>
            <div>
              <h6>Help</h6>
              <p>Contact us</p>
              <p>FAQ</p>
              <p>Terms & conditions</p>
              <p>Privacy policy</p>
            </div>
            <div>
              <h6>About us</h6>
              <p>
                Sama created GLOWSKY to make it easy for every <br />
                woman to look after herself and feel amazing, every day. With{" "}
                <br />
                thoughtfully selected skincare, makeup, and hair care products,{" "}
                <br />
                GLOWSKY is designed to help you bring out your natural beauty
                <br />, stay confident, and feel cared for. Here, it’s all about
                <br /> you – your beauty, your self-care, your glow.
              </p>
            </div>
          </div>

          <div>
            <h6>Download the App</h6>
            <p>Scan the QR code with your mobile<br/> device </p>
            <div className={style.social}>
              <img src={QR}></img>
              <div className={style.app}>
                <img src={Android}></img>
                <img src={IOS}></img>
              </div>
            </div>
          </div>
        </div>
        <div className={style.secondlower}>
          <div className={style.lowerSection}>
            <div>
              <p>Grow Your Business with Us</p>
              <p>join as a Vendor Today!</p>
            </div>
            <button> Join now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
