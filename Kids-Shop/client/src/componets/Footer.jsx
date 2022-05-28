import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import $ from 'jquery';


export default function Footerr () {

    return (
        <footer id="footer">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            {/* <!-- -------------------storeinfo---------- --> */}
            <div id="ishistoreinfo" className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <div id="ishistoreinfo-container" className="ishistoreinfo-inner">
                <a href="index.html" className="store-logo">
                  <img src="./src/assets/images/footer-logo.png" alt="footer-logo"/>
                </a>
                <div className="store-description">
                  <p>This is Photoshops version of Lorem fenIpsum. Proin gravida nibh sagitt sem nibh id elit.Proin gravida nibh sagitt sem nibh id elit.</p>
                </div>
              </div>
            </div>
            <div id="_mobile_storeinfo" className="block-contact col-md-12 col-sm-12 col-xs-12 footer-block"></div>
            {/* <!-- -------------------myaccount---------- --> */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
              <h3 className="h3 title_block hidden-md-down">Your account</h3>
              <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_account_list" data-toggle="collapse">
                <span className="h3">Your account</span>
                <span className="float-xs-right">
                  <span className="navbar-toggler collapse-icons">
                    <i className="material-icons add"></i>
                    <i className="material-icons remove"></i>
                  </span>
                </span>
              </div>              
              <ul id="footer_account_list" className="footer-dropdown collapse">
                <li>
                  <a className="cms-page-link" href="#">
                    Personal info
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Orders
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Credit slips
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Addresses
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    My Wishlists
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- -------------------linklist---------- --> */}
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 links wrapper footer-block">
              <h3 className="h3 title_block hidden-md-down">Product</h3>
              <div className="footer-title clearfix hidden-lg-up collapsed" data-target="#footer_sub_menu_83280" data-toggle="collapse">
                <span className="h3 title_block">Product</span>
                <span className="navbar-toggler collapse-icons">
                  <i className="material-icons add"></i>
                  <i className="material-icons remove"></i>
                </span>
              </div>
              <ul id="footer_sub_menu_83280" className="footer-dropdown collapse">
                <li>
                  <a className="cms-page-link" href="#">
                    Delivery
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Prices drop
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    New products
                  </a>
                </li>
                <li>
                  <a className="cms-page-link" href="#">
                    Best sales
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- -------------------contactblock ---------- --> */}
            <div id="_desktop_storeinfo" className="block-contact col-lg-3 col-md-12 col-sm-12 col-xs-12 footer-block">
              <h3 className="h3 title_block hidden-md-down">Store information</h3>             
              <div id="contact-info-container" className="footer-contact">
                <div className="block address col-lg-12 col-md-4 col-sm-4 col-xs-12">
                  <span className="icon"><i className="material-icons"></i></span>
                  <div className="content">Demo Shop<br/>01 Demo Street<br/>France</div>
                </div>
                <div className="block phone col-lg-12 col-md-4 col-sm-4 col-xs-12">
                  <span className="icon phone"><i className="material-icons"></i></span>
                  <div className="content">
                    <a href="#">+00 900 123456789</a>
                  </div>
                </div>
                <div className="block email col-lg-12 col-md-4 col-sm-4 col-xs-12">
                  <span className="icon"><i className="material-icons"></i></span>
                  <div className="content">
                    <a href="#">admin@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-after">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              {/* <!-- -------------------copyrights---------- --> */}
              <p className="footer-aftertext">
                  <a className="_blank" href="#" target="_blank">
                    Copyright 2020 All Rights Reserved
                  </a>
              </p>
            </div>
            <div className="col-lg-6 col-xs-12">
              {/* <!-- -------------------payment block---------- --> */}
              <div className="paymentlogo-container">
                <img src="./src/assets/images/paymenticon/1.png" alt="Discover"/>
                <img src="./src/assets/images/paymenticon/2.png" alt="Visa"/>
                <img src="./src/assets/images/paymenticon/3.png" alt="JCB"/>
                <img src="./src/assets/images/paymenticon/4.png" alt="PayPal"/>
                <img src="./src/assets/images/paymenticon/5.png" alt="Master Card"/>
                <img src="./src/assets/images/paymenticon/6.png" alt="American Express"/>
              </div>
            </div>
            <div id="ishispecialdeals-icon">
              <div id="ishispecialdeal" className="ishispecialdeals">
                <div id="ishispecialdeals-carousel" className="owl-carousel">
                  <div className="item product-thumb" data-countdowntime="2020-11-30">
                    <div className="row">
                      <div className="image col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <a href="#" className="thumbnail product-thumbnail">
                          <img src="./src/assets/images/product/1.jpg" alt="product-img"/>
                          <img className="product-img-extra change" alt="product-img" src="./src/assets/images/product/2.jpg"/>
                        </a>
                      </div>   
                      <div className="caption col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <div className="product-title"><a href="#">Aroma Mocha</a></div> 
                        <p className="price">
                          <span className="regular price-old">$55.00</span> 
                          <span className="price-discount">9%</span> 
                          <span className="price-sale">$50.00 </span>
                        </p>                        
                        <div className="product-comments">  
                          <div className="star_content">
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                          </div>
                        </div>
                        <div className='countdown-container'>
                          <div className="countdown-text">The offer ends in : </div>
                          <div className='countdown-days counter'>
                           <span className="data"></span>
                           <span className="lbl">Days</span>
                          </div>
                          <div className='countdown-hours counter'>
                           <span className="data"></span>
                           <span className="lbl">Hours</span>
                          </div>
                          <div className='countdown-minutes counter'>
                           <span className="data"></span>
                           <span className="lbl">Min</span>
                          </div>
                          <div className='countdown-seconds counter'>
                           <span className="data"></span>
                           <span className="lbl">Sec</span>
                          </div>
                        </div>
                        <div className="button-group">  
                          <div className="btn-quickview"> 
                            <a className="quickbox" href="#">
                              <FontAwesomeIcon icon={faEye}/>
                              <span className="lblcart">Quick View</span>
                            </a>
                          </div>                  
                          <div className="btn-wishlist">
                            <a href="#">
                              <FontAwesomeIcon icon={faHeart}/>
                            </a>
                          </div>
                          <div className="btn-cart">
                            <a href="#">
                              <FontAwesomeIcon icon={faCartShopping} />
                              <span className="lblcart">Add to Cart</span>
                            </a>
                          </div>
                        </div> 
                      </div>       
                    </div>         
                  </div>
                  <div className="item product-thumb" data-countdowntime="2020-12-30">
                    <div className="row">
                      <div className="image col-lg-5 col-md-5 col-sm-5 col-xs-5">
                        <a href="#" className="thumbnail product-thumbnail">
                          <img src="./src/assets/images/product/4.jpg" alt="product-img"/>
                          <img className="product-img-extra change" alt="product-img" src="./src/assets/images/product/5.jpg"/>
                        </a>
                      </div>   
                      <div className="caption col-lg-7 col-md-7 col-sm-7 col-xs-7">
                        <div className="product-title"><a href="#">Comdaq Stroller</a></div> 
                        <p className="price">
                          <span className="regular price-old">$20.00</span> 
                          <span className="price-discount">25%</span> 
                          <span className="price-sale">$15.00 </span>
                        </p>                        
                        <div className="product-comments">  
                          <div className="star_content">
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                              <div className="star star_on"></div>
                          </div>
                        </div>
                        <div className='countdown-container'>
                          <div className="countdown-text">The offer ends in : </div>
                          <div className='countdown-days counter'>
                           <span className="data"></span>
                           <span className="lbl">Days</span>
                          </div>
                          <div className='countdown-hours counter'>
                           <span className="data"></span>
                           <span className="lbl">Hours</span>
                          </div>
                          <div className='countdown-minutes counter'>
                           <span className="data"></span>
                           <span className="lbl">Min</span>
                          </div>
                          <div className='countdown-seconds counter'>
                           <span className="data"></span>
                           <span className="lbl">Sec</span>
                          </div>
                        </div>
                        <div className="button-group">  
                            <div className="btn-quickview"> 
                                <a className="quickbox" href="#">
                                <FontAwesomeIcon icon={faEye}/>
                                <span className="lblcart">Quick View</span>
                                </a>
                            </div>                  
                            <div className="btn-wishlist">
                                <a href="#">
                                <FontAwesomeIcon icon={faHeart}/>
                                </a>
                            </div>
                            <div className="btn-cart">
                                <a href="#">
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className="lblcart">Add to Cart</span>
                                </a>
                            </div>
                        </div> 
                      </div>       
                    </div>         
                  </div>
                </div>   
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="slidetop" href="#" ></a>
    </footer>
    )
}