import { useEffect } from "react";
export default function Blog() {
  
  
    return(
        <section id="smartblog_block" className="smartblog_block clearfix container">
        <h3 className="home-title"><span className="title-icon"><span></span></span>Latest Blog</h3>
        <div className="block_content">
          <div id="smartblog-carousel" className="smartblog-carousel owl-carousel">
            <div className="item blog_post">
              <div className="news_module_image_holder">
                <a href="blog_post.html">
                  <img alt="Upon of seasons earth dominion" className="feat_img_small" src="./src/assets/images/blog/1.jpg"/>
                  <span className="blog-hover"></span>
                </a>
                <div className="date-comment">
                  <span className="blog_date"> <i className="fa fa-calendar"></i> 27 July 2020</span>
                  <span className="write-comment"> <a href="#"><i className="fa fa-comment"></i> 1 Comments</a></span>
                </div>
              </div>
              <div className="blog_content">
                <div className="blog_inner">
                  <h4 className="blog_title"><a href="blog_post.html">Upon of seasons earth dominion</a></h4>
                  <p className="blog-desc"> Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought brought... </p>
                </div>
              </div>  
            </div>
            <div className="item blog_post">
              <div className="news_module_image_holder">
                <a href="blog_post.html">
                  <img alt="Lorem ipsum dolor sit amet" className="feat_img_small" src="./src/assets/images/blog/2.jpg"/>
                  <span className="blog-hover"></span>
                </a>
                <div className="date-comment">
                  <span className="blog_date"> <i className="fa fa-calendar"></i> 27 July 2020</span>
                  <span className="write-comment"> <a href="#"><i className="fa fa-comment"></i> 1 Comments</a></span>
                </div>
              </div>
              <div className="blog_content">
                <div className="blog_inner">
                  <h4 className="blog_title"><a href="blog_post.html">Lorem ipsum dolor sit amet</a></h4>    
                  <p className="blog-desc">
                      Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought brought...
                  </p>
                </div>
              </div>  
            </div>
            <div className="item blog_post">
              <div className="news_module_image_holder">
                <a href="blog_post.html">
                  <img alt="Upon of seasons earth dominion" className="feat_img_small" src="./src/assets/images/blog/3.jpg"/>
                  <span className="blog-hover"></span>
                </a>
                <div className="date-comment">
                  <span className="blog_date"> <i className="fa fa-calendar"></i> 27 July 2020</span>
                  <span className="write-comment"> <a href="#"><i className="fa fa-comment"></i> 1 Comments</a></span>
                </div>
              </div>
              <div className="blog_content">
                <div className="blog_inner">
                  <h4 className="blog_title"><a href="blog_post.html">Upon of seasons earth dominion</a></h4>
                  <p className="blog-desc">
                     Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                  </p>
                </div>
              </div>  
            </div>
            <div className="item blog_post">
              <div className="news_module_image_holder">
                <a href="blog_post.html">
                  <img alt="Christmas Sale is here 7" className="feat_img_small" src="./src/assets/images/blog/4.jpg"/>
                  <span className="blog-hover"></span>
                </a>
                <div className="date-comment">
                  <span className="blog_date"> <i className="fa fa-calendar"></i> 27 July 2020</span>
                  <span className="write-comment"> <a href="#"><i className="fa fa-comment"></i> 1 Comments</a></span>
                </div>
              </div>
              <div className="blog_content">
                <div className="blog_inner">
                  <h4 className="blog_title"><a href="blog_post.html">Christmas Sale is here 7</a></h4>
                  <p className="blog-desc">
                      Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light...
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section> 
    )
}