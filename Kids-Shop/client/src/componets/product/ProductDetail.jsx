import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleBolt } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function ProductDetail ({product}) {

    const handleAddToCart = (_id) => {
        const req = "http://localhost:5500/api/user/" + localStorage.getItem("idUser");
        const res =  axios.put(req, {
          "id": _id
        })
        .then((res) => {
            alert("Thêm giỏ hàng thành công");
            // window.location.href = "/allproduct";
        })
        .catch(e => console.log(e))
      }

    return (
        <div>
        {
            product ? 
        <section id="wrapper">
            <div className="container">
                <div className="row">
                <div id="content-wrapper" className="col-12">
                    <section id="main">
                    <div className="row">
                        <div className="col-md-6">
                        <section className="page-content" id="content">
                            <ul className="product-flags">
                            <li className="product-flag new">New</li>
                            </ul>
                            <div className="images-container">
                            <div className="product-cover">
                                <div id="product-zoom">
                                <img className="js-qv-product-cover" src={product?.image[0] ? product?.image[0] : "./src/assets/images/product/1.jpg"} alt="product-image" title="product-image" style={{"width":"100%"}}/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="js-qv-mask mask">
                                <ul className="qv-carousel product-images owl-carousel">
                                    <li className="thumb-container item">
                                    <img
                                    className="thumb js-thumb  selected "
                                    src={product?.image[1] ? product?.image[1] : "./src/assets/images/product/2.jpg"}
                                    alt="related-items"
                                    title=""
                                    // data-image-large-src="./src/assets/images/product/2.jpg"
                                    width="100"
                                    // itemprop="image"
                                    />
                                    </li>
                                    <li className="thumb-container item">
                                    <img
                                    className="thumb js-thumb "
                                    src={product?.image[2] ? product?.image[2] : "./src/assets/images/product/3.jpg"}
                                    alt="related-items"
                                    title=""
                                    // data-image-large-src="./src/assets/images/product/3.jpg"
                                    width="100"
                                    // itemprop="image"
                                    />
                                    </li>
                                    <li className="thumb-container item">
                                    <img
                                    className="thumb js-thumb "
                                    src={product?.image[3] ? product?.image[3] : "./src/assets/images/product/4.jpg"}
                                    alt="related-items"
                                    title=""
                                    // data-image-large-src="./src/assets/images/product/4.jpg"
                                    width="100"
                                    // itemprop="image"
                                    />
                                    </li>
                                    <li className="thumb-container item">
                                    <img
                                    className="thumb js-thumb "
                                    src="./src/assets/images/product/6.jpg"
                                    alt="related-items"
                                    title=""
                                    // data-image-large-src="./src/assets/images/product/6.jpg"
                                    width="100"
                                    // itemprop="image"
                                    />
                                    </li>
                                    <li className="thumb-container item">
                                    <img
                                    className="thumb js-thumb "
                                    src="./src/assets/images/product/7.jpg"
                                    alt="related-items"
                                    title=""
                                    // data-image-large-src="./src/assets/images/product/7.jpg"
                                    width="100"
                                    // itemprop="image"
                                    />
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="scroll-box-arrows">
                            <i className="material-icons left">&#xE314;</i>
                            <i className="material-icons right">&#xE315;</i>
                            </div>
                        </section>
                        </div>
                        <div className="col-md-6 productfullldetails">
                        <h1 className="h1 product-title">{product?.name}</h1>
                        <div className="product-information">
                            <div id="product-description-short-1">
                            <p>{product?.introduce}</p>
                            </div>
                            <div className="product-comments display_comments">  
                            <div className="star_content">
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                                <div className="star star_on"></div>
                            </div>
                            <div className="comment_advice">
                                <a href="#tab-review" className="read_comment scrollLink"><i className="material-icons comments" aria-hidden="true">mode_comment</i>Read Reviews</a>
                                <a href="#tab-review"  className="write_comment scrollLink"><i className="material-icons comments" aria-hidden="true">mode_edit</i>Write Review</a>
                            </div>
                            <span>5 review</span>
                            </div>
                            <div className="product-actions">
                                <form action="#" method="post" id="add-to-cart-or-refresh">
                                <input type="hidden" name="token" value="3d2187fdc78a54510e1e1670c3ff42b0"/>
                                <input type="hidden" name="id_product" value="1" id="product_page_product_id"/>
                                <input type="hidden" name="id_customization" value="0" id="product_customization_id"/>
                                <div className="product-variants">
                                    <div className="clearfix product-variants-item">
                                    <span className="control-label">Size</span>
                                    <select
                                    className=" form-control-select"
                                    id="group_1"
                                    data-product-attribute="1"
                                    name="group[1]">
                                    <option value="1" title={product?.size[0]?.name}>{product?.size[1]?.name}</option>
                                    <option value="3" title={product?.size[2]?.name}>{product?.size[2]?.name}</option>
                                    </select>
                                    </div>
                                    <div className="clearfix product-variants-item">
                                    <span className="control-label">Color</span>
                                    <ul id="group_3">
                                        <li className="float-xs-left input-container">
                                        <label>
                                            <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="13" checked="checked"/>
                                            <span className="color" style={{backgroundColor: `${product?.color[0]?.name}`}}>
                                            <span className="sr-only">{product?.color[0]?.name}</span></span>
                                        </label>
                                        </li>
                                        <li className="float-xs-left input-container">
                                        <label>
                                            <input className="input-color" type="radio" data-product-attribute="3" name="group[3]" value="14"/>
                                            <span className="color" style={{backgroundColor: `${product?.color[1]?.name}`}}>
                                            <span className="sr-only">{product?.color[1]?.name}</span></span>
                                        </label>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <section className="product-discounts">
                                </section>
                                <div className="product-prices">
                                    <div className="product-price h5">
                                    {/* <link  href="#"/> */}
                                    <meta itemprop="priceCurrency" content="USD"/>
                                    <div className="current-price">
                                        <span itemprop="price">{product?.price}</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="product-add-to-cart">
                                    <div className="product-quantity-selector form-control-select">
                                        <p>Quantity</p>
                                        <div className="quantity-counter">
                                            <FontAwesomeIcon icon={faCaretLeft}><span>-</span></FontAwesomeIcon>
                                            <input name="quantity" value="1" className="quantity"/>
                                            <FontAwesomeIcon icon={faCaretRight}><span>+</span></FontAwesomeIcon>
                                        </div>      
                                    </div>
                                    <div className="product-quantity clearfix">
                                    <div className="add">
                                        <p
                                        className="btn btn-primary"
                                        onClick={()=>handleAddToCart(product?._id)}
                                        >
                                        <FontAwesomeIcon icon={faCartShopping}>&#xE547;</FontAwesomeIcon>
                                        Add to cart
                                        </p>
                                    </div>
                                    <div className="buttons_bottom_block no-print wishlist_login">
                                        <a className="wishlist_button"  title="Add to my wishlist">
                                            <FontAwesomeIcon icon={faHeart}>&#xE547;</FontAwesomeIcon>
                                        <span>Add to wishlist</span>
                                        </a>
                                    </div>
                                    <div id="product-availability">
                                        <i className="material-icons product-available">&#xE5CA;</i>
                                        {product?.inStock ? "In stock" : "Out stock"}
                                    </div>
                                    </div>
                                </div>
                                <div className="product-additional-info">
                                    <div className="social-sharing">
                                    <span>Share</span>
                                    <ul>
                                        <li className="facebook icon-gray">
                                        <a  className="text-hide" title="Share" target="_blank">Share</a>
                                        </li>
                                        <li className="twitter icon-gray">
                                        <a  className="text-hide" title="Tweet" target="_blank">Tweet</a>
                                        </li>
                                        <li className="googleplus icon-gray">
                                        <a  className="text-hide" title="Google+" target="_blank">Google+</a>
                                        </li>
                                        <li className="pinterest icon-gray"><a  className="text-hide" title="Pinterest" target="_blank">Pinterest</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 paymentlogo-container">
                                    <span>Payment</span>
                                    <img src="./src/assets/images/paymenticon/1.png" alt="Discover"/>
                                    <img src="./src/assets/images/paymenticon/2.png" alt="Visa" />
                                    <img src="./src/assets/images/paymenticon/3.png" alt="JCB" />
                                    <img src="./src/assets/images/paymenticon/4.png" alt="PayPal" />
                                    <img src="./src/assets/images/paymenticon/5.png" alt="Master Card" />
                                    <img src="./src/assets/images/paymenticon/6.png" alt="American Express" />
                                    </div>
                                </div>
                                <div id="block-reassurance">
                                    <ul>
                                    <li>
                                        <div className="block-reassurance-item">
                                        <img src="./src/assets/images/block-reassurance/1.png" alt="Security policy (edit with Customer reassurance module)"/>
                                        <span className="h6">Security policy (edit with Customer reassurance module)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="block-reassurance-item">
                                        <img src="./src/assets/images/block-reassurance/2.png" alt="Delivery policy (edit with Customer reassurance module)"/>
                                        <span className="h6">Delivery policy (edit with Customer reassurance module)</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="block-reassurance-item">
                                        <img src="./src/assets/images/block-reassurance/3.png" alt="Return policy (edit with Customer reassurance module)"/>
                                        <span className="h6">Return policy (edit with Customer reassurance module)</span>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row product-block-information">
                        <div className="col-12 product-details">
                        <div className="tabs">
                            <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item active">
                            <a
                            className="nav-link"
                            data-toggle="tab"
                            
                            role="tab"
                            aria-controls="description"
                            aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a
                                className="nav-link"
                                data-toggle="tab"
                                
                                role="tab"
                                aria-controls="product-details"
                                >Product Details</a>
                            </li>
                            <li className="nav-item">
                                <a
                                className="nav-link"
                                data-toggle="tab"
                                
                                role="tab"
                                aria-controls="product-details"
                                >reviews</a>
                            </li>
                            </ul>
                            <div className="tab-content" id="tab-content">
                            <div className="tab-pane fade show active" id="description" role="tabpanel">
                                <div className="product-description">
                                <p>{product?.description}</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="product-details" role="tabpanel" >
                                <div className="product-manufacturer">
                                <a >
                                    <img src="./src/assets/images/product-brandlogo.png" className="img img-thumbnail manufacturer-logo" alt="Fashion Manufacturer 1"/>
                                </a>
                                </div>
                                <div className="product-reference">
                                <label className="label">Reference </label>
                                <span itemprop="sku">demo_1</span>
                                </div>
                                <div className="product-quantities">
                                <label className="label">In stock</label>
                                <span data-stock="294" data-allow-oosp="0">294 Items</span>
                                </div>
                                <div className="product-out-of-stock"></div>
                                <section className="product-features">
                                <h3 className="h6">Data sheet</h3>
                                <dl className="data-sheet">
                                    <dt className="name">Compositions</dt>
                                    <dd className="value">Cotton</dd>
                                    <dt className="name">Styles</dt>
                                    <dd className="value">Casual</dd>
                                    <dt className="name">Properties</dt>
                                    <dd className="value">Short Sleeve</dd>
                                </dl>
                                </section>
                            </div>
                            <div className="tab-pane fade" id="tab-review" role="tabpanel">
                                <form className="form-horizontal " id="form-review">
                                <div id="review">
                                    <p>There are no reviews for this product?.</p>
                                </div>
                                <h2>Write a review</h2>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <input name="name" value="" id="input-name" className="form-control" type="text" placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <textarea name="text" rows="5" id="input-review" className="form-control"  placeholder="Your Review"></textarea>
                                    <div className="help-block"> HTML is not translated!</div>
                                    </div>
                                </div>
                                <div className="form-group required">
                                    <div className="col-sm-12">
                                    <label className="control-label">Rating</label>
                                    <span className="custom-radio">
                                        <input name="rating" value="1" type="radio"/>
                                        <span></span>
                                    </span>
                                    <span className="custom-radio">
                                        <input name="rating" value="2" type="radio"/>
                                        <span></span>
                                    </span>
                                    <span className="custom-radio">
                                        <input name="rating" value="3" type="radio"/>
                                        <span></span>
                                    </span>
                                    <span className="custom-radio">
                                        <input name="rating" value="4" type="radio"/>
                                        <span></span>
                                    </span>
                                    <span className="custom-radio">
                                        <input name="rating" value="5" type="radio"/>
                                        <span></span>
                                    </span>
                                    </div>
                                </div>
                                <div className="buttons clearfix">
                                    <div className="pull-right">
                                    <button type="button" id="button-review" data-loading-text="Loading..." className="btn btn-primary">Continue</button>
                                    </div>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                        
                    </div>
                    </section>
                </div>
                </div>
            </div>
            </section>
        : 
        <div></div>
        } 

            <div className="container">
                <div id="_mobile_left_column" className="row"></div>
                <div id="_mobile_right_column" className="row"></div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
}