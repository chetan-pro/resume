import React from "react";
import Image from "../../assets/prflimg.png";
import "./style.css";

function index() {
  return (
      <div className='section' id="Profile">
        <div id="leftPrfl">
          <img src={Image} alt="Profile Image" />
        </div>
        <div id="rightPrfl">
          <h1><span>Chetan</span> Sable</h1>
          <div id="line"></div>
          <ul>
            <li>DESIGN</li>
            <li>CODE</li>
            <li>CREATE</li>
            <li>STIMULATE</li>
          </ul>
          <p>
            I am Chetan Sable from 'The City Of Lakes' Bhopal. I am pursuing B.Tech in computer science branch and been doing Design & Development from past few years. By all this time I have been learing everyday and working on multiple projects to improve my skill and to be <br />up to date.
          </p>
          <div id="contact">
            <h1><span>Communicate</span> With Me</h1>
            <ul>
                <li>
                    <label>Email </label><span>-</span><h3>Sablechetan8789@gmail.com</h3>
                </li>
                <li>
                    <label>Mobile no. </label><span>-</span><h3>7024124397</h3>
                </li>
            </ul>
        </div>
        </div>
      </div>
  );
}

export default index;
