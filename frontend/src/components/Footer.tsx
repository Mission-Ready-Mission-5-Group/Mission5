import React from 'react';
import './styles/footerstyle.css';
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const Footer=()=>{
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          {/*Column 1*/}  
          <div className='sb__footer-links_div'>
            <img width="100px" height="100px" src="https://metronz.co.nz/wp-content/uploads/2023/09/logo-600x6000-1.svg" alt="Logo"/>
            <a href="/cellnumber"><p>09 391 4642</p></a>
            <a href="/emailaddress"><p>INFO@METRONZ.CO.NZ</p></a>
            <a href="/streetaddress"><p>LEVEL 33, ANZ CENTER, 23-29 ALBERT STREET, AUCKLAND CBD 1010</p></a>
          </div>

          {/*Column 2*/}
          <div className='sb__footer-links_div'>
            <h4>QUICK LINKS</h4>
              <a href="/home"><p>HOME</p></a>
              <a href="/services"><p>SERVICES</p></a>
              <a href="/tenants"><p>TENANTS</p></a>
              <a href="/streetaddress"><p>NEWS</p></a>
              <a href="/about"><p>ABOUT USE</p></a>
              <a href="/services"><p>SERVICES</p></a>
              <a href="/resolution"><p>DISPUTE RESOLUTION</p></a>
              <a href="/contact"><p>CONTACT US</p></a> 
          </div>

          {/*Column 3*/}
          <div className='sb__footer-links_div'>
            <h4>Follow Us</h4>
            <div className='socialmedia'>
              <p><img src={fb} alt=''/></p>
              <p><img src={ig} alt=''/></p>
              <p><img src={linkedin} alt=''/></p>
              <p><img src={twitter} alt=''/></p>
            </div>
          </div>

          <hr></hr>

          {/*Trademark*/}
          <div className='sb__footer-below'>
            <div className='sb__footer-copyright'>
              <p>
                @{new Date().getFullYear()} Metro NZ Property Mangement. All rights reserved.
             </p>
            </div>
          </div>
          <div className='sb__footer-below-links'>
            <a href="/"><div><p>Lorem ipsum dolor sit amet consectetur. Nisi et et ornare tellus.</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
