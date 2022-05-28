import { useEffect } from "react";

export default function Contact() {

    return (
        <div>
            <div className="breadcrumb-container">
      <nav data-depth="2" className="breadcrumb container">
        <h1 className="h1 category-title breadcrumb-title">Contact</h1>
        <ul>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
    {/* <!-- ----------------contactpage----------- --> */}
    <section id="wrapper">
      <div id="content-wrapper" className="top-wrapper">
        <div className="container">
          <div className="row">
            <section id="main">
              <div className="contact-form-information">
                <div className="row">
                  <div className="contact-banner col-lg-6 col-md-12">
                    <div className="image-container">
                      <a href="javascript:void(0);">
                        <img
                        src="./src/assets/images/contact-image.png"
                        alt="contact-image"/>
                      </a>
                    </div>
                  </div>
                  <div className="information-container col-lg-6 col-md-12">
                    <div className="title-container">
                      <h3 className="heading">get in touch</h3>
                      <span className="subheading">We&#39;d Love to Hear From You, Lets Get In Touch!</span>
                    </div>
                    <div className="list-contact-info col-md-12 col-sm-12 col-xs-12">
                      <div className="contact_info_item col-md-6 col-sm-6 col-xs-6">
                       <h3>address</h3>
                       <p>Demo street</p>
                       <p>France</p>
                      </div>
                      <div className="contact_info_item col-md-6 col-sm-6 col-xs-6">
                        <h3>Phone</h3>
                        <p>+00 900 123456789</p>
                      </div>
                      <div className="contact_info_item col-md-6 col-sm-6 col-xs-6">
                        <h3>Email</h3>
                        <p>
                          <a href="#">
                            admin@gmail.com
                          </a> 
                        </p>
                      </div>
                      <div className="contact_info_item col-md-6 col-sm-6 col-xs-6">
                        <h3>additional Information</h3>
                        <p>We are open: Monday - Saturday, 10AM - 5PM and colsed on sunday sorry for that.</p>
                      </div>
                      <div className="contact_info_item block-social col-md-12 col-sm-12 col-xs-12">
                        <h3>Social</h3>
                        <ul className="social-inner">
                          <li className="facebook">
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook"></i><span className="socialicon-label">Facebook</span>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter"></i><span className="socialicon-label">Twitter</span>
                            </a>
                          </li>
                          <li className="rss">
                            <a href="#" target="_blank">
                              <i className="fa fa-rss"></i><span className="socialicon-label">Rss</span>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="#" target="_blank">
                              <i className="fa fa-youtube"></i><span className="socialicon-label">YouTube</span>
                            </a>
                          </li>
                          <li className="googleplus">
                            <a href="#" target="_blank">
                              <i className="fa fa-google-plus"></i><span className="socialicon-label">Google +</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="contact-map clearfix">
          <div id="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4942.998389285883!2d72.86381628231031!3d21.235140418614346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc781696a0f9b3ea0!2sIshi%20Technolabs!5e0!3m2!1sen!2sin!4v1594468091731!5m2!1sen!2sin" width="100%" height="400" frameBorder="0" style={{"border":"0"}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
        <div className="container">
          <div className="contact-form-bottom">
            <div className="contact-form form-vertical">
              <div className="title-container">
                <h3 className="heading">leave us a message</h3>
                <span className="subheading">-good for nature, good for you-</span>
              </div>
              <section className="form-field">
                <form method="post" action="#" id="contact_form" className="contact-form">
                  <div className="form-fields row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group">
                      <label htmlFor="ContactFormName" className="hidden control-label">Name</label>
                      <input type="text" id="ContactFormName" className="form-control" name="contact[name]" value="" placeholder="Name"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group">
                      <label htmlFor="ContactFormEmail" className="hidden">Email</label>
                      <input type="email" id="ContactFormEmail" className="form-control" name="contact[email]" autoCapitalize="off" value="" placeholder="Email"/>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-group">
                      <label htmlFor="ContactFormPhone" className="hidden">Phone</label>
                      <input type="text" id="ContactFormPhone" className="form-control" name="contact[phone]" value="" placeholder="Phone"/>
                    </div>              
                    <div className="form-group-area col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                      <label htmlFor="ContactFormMessage" className="hidden">Message</label>
                      <textarea rows="10" id="ContactFormMessage" className="form-control" name="contact[body]" placeholder="your message"></textarea>
                    </div>
                    <div className="submit-button col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input className="btn btn-primary" name="submitMessage" value="Send" type="submit"/>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}