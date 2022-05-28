import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function AboutUs () {

    return (
        <div>
        <div className="breadcrumb-container">
        <nav data-depth="2" className="breadcrumb container">
          <h1 className="h1 category-title breadcrumb-title">About Us</h1>
          <ul>
            <li>
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
        <section id="wrapper">
        <div className="container">
          <div id="content-wrapper" className="col-xs-12">
            <section id="main">
              <div className="about-page">    
                <div className="about-container">
                  <h2 className="home-title">Story Block</h2>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="about-us">
                            <p>
                            Hy vọng bé
                            </p>
                            <p>
                            vững vàng qua khổ đau
                            </p>
                            <p>
                            Hy vọng con
                            </p>
                            <p>
                            tốt số hết cuộc đời
                            </p>
                            <p>
                            Hy vọng bé
                            </p>
                            <p>
                            tích cực từng giây trôi
                            </p>
                            <p>
                            Hy vọng con
                            </p>
                            <p>
                            yêu thương đời say đắm.
                            </p>
                            <button className="btn btn-primary" name="continue" type="submit"> Shop Now </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">                                
                        <a href="#"><img alt="about-img" src="./src/assets/images/about-img.png"/></a>
                    </div>
                  </div>
                </div>              
                <div className="block-title">
                  <h2 className="home-title">Something about us</h2>
                  <p>Tôi đang nấp trong một thời đại rỗng <br/>
                    Tôi ẩn mình giữa vết tích hư không <br/>
                    Tôi khao khát một trời chiều gió lộng <br/>
                    Và tôi say tiếng sóng ở trong lòng.
                  </p>
                </div>
                <div className="about-services">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 service">
                      <img alt="icon-1" src="./src/assets/images/icons/icon-1.png"/>
                      <h3>free resources</h3>
                      <p>Tôi đang nấp trong một thời đại rỗng <br/>
                      Mỗi bước chân là áp lực chất chồng <br/>
                      Nơi con người chẳng thiết tha sự sống <br/>
                      Và nơi em sải bước chẳng chờ mong
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-6 service">
                      <img alt="icon-2" src="./src/assets/images/icons/icon-2.png"/>
                      <h3>multi-purpose</h3>
                      <p>Tôi đang nấp trong một thời đại rỗng</p>
                      <p>Một kỉ nguyên chẳng có nổi tình yêu</p>
                      <p>Là một niềm vui trong dáng dấp yêu kiều</p>
                      <p>Hay là một biển đời toàn nước mắt?</p>
                    </div>
                    <div className="col-lg-4 col-md-12 service">
                      <img alt="icon-3" src="./src/assets/images/icons/icon-3.png"/>
                      <h3>fully responsive</h3>
                      <p>Tôi đang chết trong một thời đại rỗng <br/>
                      Chết tâm hồn chết cả xác thân ta <br/>
                      Tôi chết trên những toà nhà cao ốc <br/>
                      Và ra đi giữa độ tuổi hai ba.</p>
                    </div>
                  </div>
                </div>                  
              </div>
            </section>
          </div>
        </div>
      </section>
      </div>
    )
}