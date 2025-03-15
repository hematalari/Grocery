import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">

          <div className="footer-content-left">
            <h2>GroceryStore</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              similique nemo natus!
            </p>
            <div className="footer-content-socialmedia">
              <FontAwesomeIcon className='facebook' icon={faFacebook} />
              <FontAwesomeIcon className='insta' icon={faInstagram} />
              <FontAwesomeIcon className='utube' icon={faYoutube} />
              <FontAwesomeIcon className='twitter' icon={faTwitter} />
            </div>
          </div>

            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#delivery">Delivery</a>
                </li>
                <li>
                  <a href="#contactus">ContactUs</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#policy">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+21 9999999999</li>
                <li>contact@grocerystore.com</li>
              </ul>
            </div>
          </div>
        <hr />
          <p className="footer-copyright">
            &copy; 2024 GroceryStore. All rights reserved.
          </p>
      </div>
    </>
  );
}

export default Footer;
