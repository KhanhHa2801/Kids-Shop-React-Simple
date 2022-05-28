import {faHeart, faEye, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProductCategory ({categoryName, setProduct}) {

  const [listProduct, setListProduct] = useState([]);
  const [styleBlock, setStyleBlock] = useState({});

  useEffect( ()=>{
    console.log(categoryName)
    const req = "http://localhost:5500/api/category/" + categoryName;
    const res =  axios.get(req)
    .then((res) => {
      setListProduct(res.data[0])
      setStyleBlock({display: "block"})
      console.log(res.data[0])
    })
    .catch(e => console.log(e))
  }, [categoryName])  

    const handleProductImg = (product) => {
        setProduct(product);
        window.scrollTo(0,0)
    }
    
    const handleAddToCart = (_id) => {
      const req = "http://localhost:5500/api/user/" + localStorage.getItem("idUser");
      const res =  axios.put(req, {
        "id": _id
      })
      .then((res) => {
        alert("Thêm giỏ hàng thành công")
      })
      .catch(e => console.log(e))
    }

    return (
        <section id="ishiproductsblock" className="ishiproductsblock container">
        { listProduct?.listProduct ? <div>
        <h3 className="home-title">
            {categoryName}'s Products
        </h3>
        <ul id="ishiproductstab" className="nav nav-tabs clearfix">
          <li className="nav-item first_item active">
           <a className="nav-link" href="#featured-products-block" data-toggle="tab">Featured</a>
         </li>
         <li className="nav-item ">
           <a className="nav-link" href="#new-products-block" data-toggle="tab">Latest</a>
         </li>
         <li className="nav-item last_item">
           <a className="nav-link " href="#bestseller-products-block" data-toggle="tab">Best sellers</a>
         </li>
        </ul>       
        <div className="tab-content">
          <div id="featured-products-block" className="tab-pane active">
            <div className="block_content row">
              <div id="ishi-featured-products" className="owl-carousel" style={styleBlock}>
                {
                  listProduct?.listProduct.map((product, index) => (
                    <div className="product-thumb" key={index} style={{width: "33.33%", float:"left"}}>
                      <div className="item">
                        <div className="product-desc">
                          <div className="product-title"><a href="#">{product?.name}</a></div>
                          <div className="product-comments">  
                            <div className="star_content">
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                            </div>
                          </div>
                        </div>
                        <div className="image">
                              <NavLink to="/productdetail" className="thumbnail product-thumbnail" onClick={() => handleProductImg(product)}>
                                  <img src={product?.image[0] ? product?.image[0] : "./src/assets/images/product/1.jpg"} alt="product-img"/>
                                  <img className="product-img-extra change" alt="product-img" src={product?.image[1] ? product?.image[1] : ""}/>`
                              </NavLink>
                          {product?.inStock == 0 ? <span className="outstock-overlay">SOLD OUT</span> : ""}
                          <div className="product-flags">
                            {product?.sale == true ? <div className="sale">Sale</div> : null}
                          </div>
                        </div>
                        <div className="caption">  
                          <p className="description">
                            {product?.introduce} 
                          </p>
                          <p className="price">
                            <span className="regular price-old">{product?.price}</span> 
                            <span className="price-discount">{product?.discount + "%"}</span> 
                            <span className="price-sale">{product?.price} </span>
                          </p>
                          <div className="btn-cart">
                          <a data-button-action="add-to-cart" className={product?.inStock == 0 ? "button sold-out" : "button"}>
                              <FontAwesomeIcon icon={faCartShopping} />
                              <span className="lblcart" onClick={() => handleAddToCart(product?._id)}>{product?.inStock == 0 ? "SOLD OUT" : "ADD TO CART"}</span>
                            </a>
                          </div>                           
                          <div className="button-group">  
                            <div className="btn-quickview"> 
                              <a className="quickbox" href="#">
                                <FontAwesomeIcon icon={faEye} />
                                <span className="lblcart">Quick View</span>
                              </a>
                            </div>                  
                            <div className="btn-wishlist">
                              <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                              </a>
                            </div>
                          </div> 
                        </div> 
                      </div>
                    </div>
                  ))
                }
              </div>
              </div>
            </div>
          </div>
          <div id="new-products-block" className="tab-pane">
            <div className="block_content row">
              <div id="ishi-new-products" className="owl-carousel">
              <div className="product-thumb">
                  <div className="item">
                    <div className="product-desc">
                      <div className="product-title"><a href="#">Aroma Mocha</a></div>
                      <div className="product-comments">  
                        <div className="star_content">
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                        </div>
                      </div>
                    </div>
                    <div className="image">
                      <a href="#" className="thumbnail product-thumbnail">
                        <img src="./src/assets/images/product/1.jpg" alt="product-img"/>
                        <img className="product-img-extra change" alt="product-img" src="./src/assets/images/product/2.jpg"/>
                      </a>
                      <span className="outstock-overlay">SOLD OUT</span>
                      <div className="product-flags">
                        <div className="sale">Sale</div>
                      </div>
                    </div>
                    <div className="caption">  
                      <p className="description">
                      The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                      <p className="price">
                        <span className="regular price-old">$55.00</span> 
                        <span className="price-discount">9%</span> 
                        <span className="price-sale">$50.00 </span>
                      </p>
                      <div className="btn-cart">
                        <a data-button-action="add-to-cart" className="button sold-out">
                          <i className="fa fa-shopping-cart"></i> 
                          <span className="lblcart">SOLD OUT</span>
                        </a>
                      </div>                           
                      <div className="button-group">  
                        <div className="btn-quickview"> 
                            <a className="quickbox" href="#">
                                <FontAwesomeIcon icon={faEye} />
                                <span className="lblcart">Quick View</span>
                            </a>
                        </div>                  
                        <div className="btn-wishlist">
                        <a href="#">
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                        </div>
                      </div> 
                    </div> 
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div id="bestseller-products-block" className="tab-pane">
            <div className="block_content row">
              <div id="ishi-bestseller-products" className="owl-carousel">
              <div className="product-thumb">
                  <div className="item">
                    <div className="product-desc">
                      <div className="product-title"><a href="#">Aroma Mocha</a></div>
                      <div className="product-comments">  
                        <div className="star_content">
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                            <div className="star star_on"></div>
                        </div>
                      </div>
                    </div>
                    <div className="image">
                      <a href="#" className="thumbnail product-thumbnail">
                        <img src="./src/assets/images/product/1.jpg" alt="product-img"/>
                        <img className="product-img-extra change" alt="product-img" src="./src/assets/images/product/2.jpg"/>
                      </a>
                      <span className="outstock-overlay">SOLD OUT</span>
                      <div className="product-flags">
                        <div className="sale">Sale</div>
                      </div>
                    </div>
                    <div className="caption">  
                      <p className="description">
                      The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                      <p className="price">
                        <span className="regular price-old">$55.00</span> 
                        <span className="price-discount">9%</span> 
                        <span className="price-sale">$50.00 </span>
                      </p>
                      <div className="btn-cart">
                        <a data-button-action="add-to-cart" className="button sold-out">
                          <i className="fa fa-shopping-cart"></i> 
                          <span className="lblcart">SOLD OUT</span>
                        </a>
                      </div>                           
                      <div className="button-group">  
                        <div className="btn-quickview"> 
                                <a className="quickbox" href="#">
                                    <FontAwesomeIcon icon={faEye} />
                                    <span className="lblcart">Quick View</span>
                                </a>
                            </div>                  
                            <div className="btn-wishlist">
                            <a href="#">
                                <FontAwesomeIcon icon={faHeart} />
                            </a>
                            </div>
                      </div> 
                    </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div>  */}
        </div>
        : <div>
            <h3 className="home-title">
                {categoryName}'s Products
            </h3>
            <p>Not product now</p>
        </div>
        }
      </section>
    )
}