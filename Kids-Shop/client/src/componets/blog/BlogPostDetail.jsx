export default function BlogPostDetail() {
    return (
        <div>
            {/* <!-- --------------------Breadcrumb------------ --> */}
      <div className="breadcrumb-container">
        <nav data-depth="2" className="breadcrumb container">
          <h1 className="h1 category-title breadcrumb-title">Blog</h1>
          <ul>
            <li>
              <a href="index.html">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Blog Post</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- ---------------Smart Blog ----------------- --> */}
      <section id="wrapper">
        <div className="container">
          <div className="row">          
            <div id="content-wrapper" className="left-column col-xs-12 col-sm-12 col-md-12 col-lg-9"> 
              <div id="content" className="block">
                <div id="sdsblogArticle" className="blog-post">
                    <div className="articleBody">
                        <div id="lipsum" className="articleContent">
                          <div className="single-blogpost-img">
                            <a id="post_images" href="javascript:void(0)">
                                <img src="./src/assets/images/blog/blogpost-1.jpg" alt="Nostro expetenda"/>
                            </a>
                          </div>
                            <div className="page-item-title">
                              <p className="h3">Toy</p>
                                <h2>Nostro expetenda </h2>
                            </div>
                            <ul className="post-info">
                              <li> 
                               <time dateTime="2018-09-10">september 10 , 2018</time>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-user"></i>
                                  by Ishi Themes
                                </a>
                              </li>
                              <li>
                                <i className="fa fa-comment"></i>2 
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-bookmark"></i>Toy 
                                </a>
                              </li>
                           </ul>
                            <div className="sdsarticle-des">
                              <p>
                                Doctus omittam intellegam duo in. Ius ne sint dicit accusamus, cu pri solum decore corpora. Mei melius audire ex. Nostrum ocurreret cum at. Ut apeirian invenire eleifend eos, mei velit vituperata at.
                              </p>
                              <p className="h4">
                                «Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna»
                              </p>
                              <div className="small-desc">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                </p>
                              </div>
                            </div>
                        </div> 
                        <div className="sdsarticleBottom">   
                          <div className="smartblogcomments">
                            <p className="h2">comments</p>
                            <ul className="comment-list">
                              <li>
                                <div className="comment-content">
                                  <div className="avatar"><img src="./src/assets/images/avatar.jpg" alt="avatar"/></div>
                                  <div className="comment-text">
                                    <time dateTime="2018-05-24">May 24.2018</time>
                                    <p className="h3">alexander</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div id="smartblogcomments">
                              <form action="#" className="commentform">
                                <p className="h2">add a comment</p>
                                <textarea name="comment" placeholder="Your comment" required="" className="form-control inputContent"></textarea>
                                <input placeholder="Name" required="" type="text" className="form-control"/>
                                <input placeholder="E-mail" required="" type="email" className="form-control"/>
                                <button type="submit" className="btn btn-primary">comment</button>
                              </form>
                            </div>
                          </div>
                        </div>  
                    </div>
                </div>
              </div>
            </div> 
            <div id="_desktop_right_column" className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <div id="right-column">
                <section className="blog-category">
                  <h3 className="h1 products-section-title block-title hidden-md-down">Top viewed</h3>
                  <div className="block-title clearfix  hidden-lg-up collapsed" data-target="#blogarticle-container" data-toggle="collapse">
                    <span className="products-section-title">Top viewed</span>
                    <span className="navbar-toggler collapse-icons">
                      <i className="material-icons add">&#xE313;</i>
                      <i className="material-icons remove">&#xE316;</i>
                    </span>
                  </div>
                  <div id="blogarticle-container" className="collapse data-toggler">
                    <div className="description clearfix">
                      <div className="blog-artical">
                        <a href="#" title="Upon of seasons earth dominion">
                          <img alt="Upon of seasons earth dominion" src="./src/assets/images/blog/1.jpg"/>
                        </a>
                      </div>
                      <div className="blog-desc">
                        <p className='sdstitle_block'><a title="Upon of seasons earth dominion" href="#">Upon of seasons earth dominion</a></p>
                        <div className="smart-desc">
                          <div className="meta-likes">
                            <a href="#" className="touchsize-likes"><i className="fa fa-heart"></i><span> 6</span></a>
                          </div>
                          <div className="meta-date">
                            <span>August 16, 2018</span>
                          </div>                          
                        </div>
                      </div>
                    </div>
                    <div className="description clearfix">
                      <div className="blog-artical">
                        <a href="#" title="Upon of seasons earth dominion">
                          <img alt="Upon of seasons earth dominion" src="./src/assets/images/blog/2.jpg"/>
                        </a>
                      </div>
                      <div className="blog-desc">
                        <p className='sdstitle_block'><a title="Upon of seasons earth dominion" href="#">Christmas Sale is here 7</a></p>
                        <div className="smart-desc">
                          <div className="meta-likes">
                            <a href="#" className="touchsize-likes"><i className="fa fa-heart"></i><span> 10</span></a>
                          </div>
                          <div className="meta-date">
                            <span>August 16, 2018</span>
                          </div>                          
                        </div>
                      </div>
                    </div>
                    <div className="description clearfix">
                      <div className="blog-artical">
                        <a href="#" title="Upon of seasons earth dominion">
                          <img alt="Upon of seasons earth dominion" src="./src/assets/images/blog/4.jpg"/>
                        </a>
                      </div>
                      <div className="blog-desc">
                        <p className='sdstitle_block'><a title="Upon of seasons earth dominion" href="#">Viderer voluptatum te eum</a></p>
                        <div className="smart-desc">
                          <div className="meta-likes">
                            <a href="#" className="touchsize-likes"><i className="fa fa-heart"></i><span> 12</span></a>
                          </div>
                          <div className="meta-date">
                            <span>August 16, 2018</span>
                          </div>                          
                        </div>
                      </div>
                    </div>
                    <div className="description clearfix">
                      <div className="blog-artical">
                        <a href="#" title="Upon of seasons earth dominion">
                          <img alt="Upon of seasons earth dominion" src="./src/assets/images/blog/8.jpg"/>
                        </a>
                      </div>
                      <div className="blog-desc">
                        <p className='sdstitle_block'><a title="Upon of seasons earth dominion" href="#">Lorem ipsum dolor sit amet</a></p>
                        <div className="smart-desc">
                          <div className="meta-likes">
                            <a href="#" className="touchsize-likes"><i className="fa fa-heart"></i><span> 8</span></a>
                          </div>
                          <div className="meta-date">
                            <span>August 16, 2018</span>
                          </div>                          
                        </div>
                      </div>
                    </div>
                    <div className="description clearfix">
                      <div className="blog-artical">
                        <a href="#" title="Upon of seasons earth dominion">
                          <img alt="Upon of seasons earth dominion" src="./src/assets/images/blog/6.jpg"/>
                        </a>
                      </div>
                      <div className="blog-desc">
                        <p className='sdstitle_block'><a title="Upon of seasons earth dominion" href="#">Scelerisque vestibulum urna</a></p>
                        <div className="smart-desc">
                          <div className="meta-likes">
                            <a href="#" className="touchsize-likes"><i className="fa fa-heart"></i><span> 4</span></a>
                          </div>
                          <div className="meta-date">
                            <span>August 16, 2018</span>
                          </div>                          
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div id="ishileftbanners" className="clearfix">
                  <div id="ishileftbanners_1" className="ishileftbanners-container">
                    <div className="image-container">
                      <a className="ishi-customhover-fadeinflip" href="#">  
                        <img src="./src/assets/images/leftbanner.jpg" alt="leftbanner1"/>
                      </a>
                    </div>
                  </div>
                </div>
                <section className="popular-blog clearfix mt-3"> 
                  <h3 className="h1 block-title hidden-md-down">Popular Tag</h3>
                  <div className="block-title clearfix  hidden-lg-up collapsed" data-target="#tag-container" data-toggle="collapse">
                    <span className="products-section-title">Popular Tag</span>
                    <span className="navbar-toggler collapse-icons">
                      <i className="material-icons add">&#xE313;</i>
                      <i className="material-icons remove">&#xE316;</i>
                    </span>
                  </div>
                  <div id="tag-container" className="collapse data-toggler">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Top</a></li>
                      <li><a href="#">Blouses</a></li>
                      <li><a href="#">Dress</a></li>
                      <li><a href="#">Outfits</a></li>
                      <li><a href="#">Accessories</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>        
          </div>
        </div>        
      </section>
      <div className="container">
        <div id="_mobile_left_column"></div>
        <div id="_mobile_right_column"></div>
        <div className="clearfix"></div>
      </div>
        </div>
    )
}