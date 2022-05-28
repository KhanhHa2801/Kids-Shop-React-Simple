import {faHeart, faEye, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'; 

export default function TrendingProduct ({setProduct, setListProduct, listProduct}) {

  
  useEffect( ()=>{
  const req = "http://localhost:5500/api/products";
  const res =  axios.get(req)
  .then((res) => {
    setListProduct(res.data);
  })
  .catch(e => console.log(e))
  
  }, [])  

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
        <h3 className="home-title">
            <span className="title-icon"><span></span></span>
            Trending Products
        </h3>
        <ul id="ishiproductstab" className="nav nav-tabs clearfix">
          <li className="nav-item first_item active">
           <a className="nav-link" href="#featured-products-block" data-toggle="tab">Featured</a>
         </li>
        </ul>       
        <div className="tab-content">
          <div id="featured-products-block" className="tab-pane active">
            <div className="block_content row">
              <div id="ishi-featured-products" className="owl-carousel">
              {
                  // listProduct  ? 
                  listProduct?.map((product, index) => (
                    <div className="product-thumb " key={index} style={{width: "20%", float:"left"}}>
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
                                  <img src={product?.image[0] ? product?.image[0] : "./src/assets/images/product/1.jpg"} />
                                  <img className="product-img-extra change" src={product?.image[1] ? product?.image[1] : ""}/>
                              </NavLink>
                          {product?.inStock == 0 ? <span className="outstock-overlay">SOLD OUT</span> : ""}
                          <div className="product-flags">
                            {product?.sale == true ? <div className="sale">Sale</div> : <div></div>}
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
                  // : <div className="product-thumb">Not products now</div>
                }
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}