import React from 'react';
import { FaFacebook ,FaTwitter,FaInstagram,FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
      <div className=''>
        <div className="site-footer rounded-5 mx-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Start, switch, or advance your career with more than 6 courses, Professional Certificates</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a className='text-decoration-none' href="http://scanfcode.com/category/c-language/">Swift</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">R</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Ruby</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">C++</a></li>
              <li><a href="http://scanfcode.com/category/android/">C</a></li>
              <li><a href="http://scanfcode.com/category/templates/">MATLAB</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <a className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="/">Hasan Mt</a>.
            </a>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i><FaFacebook></FaFacebook></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i><FaTwitter></FaTwitter></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i><FaInstagram></FaInstagram></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i><FaLinkedinIn></FaLinkedinIn></a></li>   
            </ul>
          </div>
        </div>
      </div>
</div>
        </div>
    );
};

export default Footer;