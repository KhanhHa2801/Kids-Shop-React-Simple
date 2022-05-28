import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export default function Header( {listCategory, setCategoryName, setListCategory, setListProduct, userName, setUserName, userImage, setUserImage, isAdmin, setIsAdmin, user, setUser, categoryName}) {


    const [cartP, setCartP] = useState([]);
    const [sumPrice, setSumPrice] = useState(0);
   
    useEffect( ()=>{
        const req = "http://localhost:5500/api/category";
        const res =  axios.get(req)
        .then((res) => {
            setListCategory(res.data);
        })
        .catch(e => console.log(e))
    }, [categoryName])

    useEffect(() => {
        if(localStorage.getItem("idUser")) {
            function load(){
                const req = "http://localhost:5500/api/user/" + localStorage.getItem("idUser");
                const res =  axios.get(req)
                .then((res) => {
                    setCartP(res.data);
                    // res.data?.forEach(dt => {
                    //     setSumPrice(sumPrice + res.data.price)
                    // });
                    // console.log(sumPrice)
                })
                .catch(e => console.log(e))
            }
            load()
        }
        else{}
             
    }, [cartP])


    const handleHome = () => {
        window.location.href = "/";
        window.scrollTo(0,0);
    }

    const handleAllProduct = () => {
        window.scrollTo(0,0);
    }

    const handleClickLog = () => {
        userName ? window.location.href = "/login" : null;
        localStorage.clear();
        window.scrollTo(0,0);
    }

    const [search, setSearch] = useState("");
    const handleSearch = ()=>{
        const req = "http://localhost:5500/api/products/" + search;
        const res =  axios.get(req)
        .then((res) => {
        window.scrollTo(0,0);
        setListProduct(res.data);
        })
        .catch(e => console.log(e))
    }

    const handleDelete =(_id)=>{
        const req = "http://localhost:5500/api/user/delete/" + localStorage.getItem("idUser");
        const res =  axios.put(req, {
            "id": _id
        })
        .then((res) => {
        window.scrollTo(0,0);
        alert("Đã xóa khỏi giỏ hàng");
        })
        .catch(e => console.log(e))
    }


    return (
        <>
        <header id="header" className="home">
        <div className="header-nav">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 left-nav"> 
              {/* <!-- Block search  --> */}
              <div id="_desktop_seach_widget">
                <div id="search_widget" className="search-widget">
                  <span className="search-logo hidden-lg-up">
                    <FontAwesomeIcon icon={faSearch}/>
                  </span>
                  <form method="get" >
                    <input name="controller" value="search" type="hidden" onChange={ () => {} }/>
                    <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                    <input name="s" placeholder="Search our catalog" className="ui-autocomplete-input" autoComplete="off" type="text" value={search} onChange={ (e) => setSearch(e.target.value) }/>
                    <NavLink to="/productsearch" onClick={handleSearch}>
                    <button>
                      <i className="material-icons search">search</i>
                    </button>
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 right-nav">       
              <div className="userinfo-inner">
                <ul className="userinfo">   
                  <li className="wishlist">
                    { userImage ? <img className="rounded-circle z-depth-2" alt={userImage} src={userImage}      data-holder-rendered="true" style={{width: "30px", height: "30px"}}></img> : <FontAwesomeIcon icon={faUserAstronaut} />}
                    <span style={{color: "white"}}>&nbsp;&nbsp;&nbsp;{userName}</span>
                  </li>
                  <li className="log-in">
                    <NavLink to={userName ? "/login" : "/login"} id="customer_login_link"  onClick={handleClickLog}>{userName ? "Log out" : "Log in"}</NavLink>
                  </li>
                  <li className="create_account">
                    <NavLink to="/register" id="customer_register_link">Create Account</NavLink>
                  </li> 
                </ul>
              </div>  
            </div>
          </div>
        </div>
      </div>
            <div className="header-top">
            <div className="container">
            <div className="row"> 
                <div id="desktop_logo" className="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                <NavLink to="/" onClick={handleHome}>
                    <img className="logo img-responsive" src="../src/assets/images/header-logo.png" alt="Demo Shop"/>
                </NavLink>
                </div>
                <div className="header-top-right offset-xl-2 col-xl-7 col-lg-9 col-md-7 col-sm-12 col-xs-12">    
                <div id="ishiservices" className="ishiservicesblock">
                    <div className="ishiservices owl-carousel">        
                    <div className="services item">
                        <a href="#">
                        <div className="service-img" style={{"backgroundImage": "url(../src/assets/images/services/1.png)"}}>
                        </div>
                        <div className="service-block">
                            <div className="service-title">Free Worldwide Delivery</div>
                            <div className="service-desc">Lorem ipsum Dolor Site Amet</div>
                        </div>
                        </a>
                    </div>
                    <div className="services item">
                        <a href="#">
                        <div className="service-img" style={{"backgroundImage": "url(../src/assets/images/services/2.png)"}}>
                        </div>
                        <div className="service-block">
                            <div className="service-title">Free Gift Voucher</div>
                            <div className="service-desc">Lorem ipsum Dolor Site Amet</div>
                        </div>
                        </a>
                    </div>
                    <div className="services item">
                        <a href="#">
                        <div className="service-img" style={{"backgroundImage": "url(../src/assets/images/services/3.png)"}}>
                        </div>
                        <div className="service-block">
                            <div className="service-title">Money Back Guarantee</div>
                            <div className="service-desc">Lorem ipsum Dolor Site Amet</div>
                        </div>
                        </a>
                    </div>
                    <div className="services item">
                        <a href="#">
                        <div className="service-img" style={{"backgroundImage": "url(../src/assets/images/services/4.png)"}}>
                        </div>
                        <div className="service-block">
                            <div className="service-title">24X7 Support Assistance</div>
                            <div className="service-desc">Lorem ipsum Dolor Site Amet</div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>  
            </div>
            </div>
            </div> 
            <div className="nav-full-width">
                <div className="container">
                <div className="row">
                    {/* <!-- ------------------mega menu----------- --> */}
                    <div id="_desktop_top_menu" className="menu js-top-menu hidden-sm-down">
                    <ul className="top-menu" id="top-menu" data-depth="0">  
                        <li className="cms-page" id="category-12">
                        <NavLink className="dropdown-item" to="/" data-depth="0" onClick={handleHome}>
                            Home
                        </NavLink>
                        </li>
                        
                        <li className="category" id="category-3">
                        <a className="dropdown-item"  data-depth="0">Product</a>
                        <span className="float-xs-right hidden-lg-up">
                            <span data-target="#top_sub_menu_37079" data-toggle="collapse" className="navbar-toggler collapse-icons">
                            <i className="material-icons add">
                            keyboard_arrow_down
                            </i>
                            <i className="material-icons remove">
                            keyboard_arrow_up
                                </i>
                            </span>
                        </span>
                        <div className="popover sub-menu collapse" id="top_sub_menu_37079">
                            <ul className="top-menu" data-depth="1">
                            <li className="category" id="category-4">
                                <NavLink to="/allproduct" className="dropdown-item dropdown-submenu" data-depth="1" onClick={handleAllProduct}>
                                    All product
                                </NavLink>
                            </li>
                            <li className="category" id="category-8">
                                <NavLink className="dropdown-item dropdown-submenu" to="/category" data-depth="1">
                                Category
                                </NavLink>
                                <span className="float-xs-right hidden-lg-up">
                                    <span data-target="#top_sub_menu_71335" data-toggle="collapse" className="navbar-toggler collapse-icons">
                                    <i className="material-icons add">
                                        keyboard_arrow_down
                                    </i>
                                    <i className="material-icons remove">
                                        keyboard_arrow_up
                                    </i>
                                    </span>
                                </span>
                                <div className="collapse" id="top_sub_menu_71335">
                                <ul className="top-menu" data-depth="2">
                                    {
                                        listCategory ? 
                                        listCategory.map((category, index) => 
                                        <li className="category" id="category-5" key={index}>
                                            <NavLink className="dropdown-item" to="/productcategory" data-depth="2" onClick={() => {           
                                                setCategoryName(category?.name);        
                                                window.scrollTo(0,0);
                                                }}>
                                            {category?.name}
                                            </NavLink>
                                        </li>
                                            )
                                        : <div></div>
                                    }
                                </ul>
                                </div>
                            </li>
                            
                            </ul>
                            <img className="category-image" src="../src/assets/images/category-dropdown.jpg" alt="category-image" title="Women"/>
                        </div>
                        </li>
                        <li className="cms-page" id="cms-page-4">
                        <NavLink className="dropdown-item" to="/about" data-depth="0">
                            About us
                        </NavLink>
                        </li>
                        <li className="cms-page" id="cms-page-4">
                        <NavLink className="dropdown-item" to="/blog" data-depth="0">
                            Blogs
                        </NavLink>
                        </li>
                        <li className="cms-page" id="cms-page-4">
                        <NavLink className="dropdown-item" to="/news" data-depth="0">
                            News
                        </NavLink>
                        </li>
                        <li className="cms-page" id="cms-page-1">
                        <NavLink className="dropdown-item" to="/contact" data-depth="0">
                            Contact us
                        </NavLink>
                        </li>
                        {
                            localStorage.getItem("isAdmin")==="true" ? 
                        <li className="category" id="category-3">
                        <a className="dropdown-item"  data-depth="10">Admin</a>
                        <span className="float-xs-right hidden-lg-up">
                            <span data-target="#top_sub_menu_37070" data-toggle="collapse" className="navbar-toggler collapse-icons">
                            <i className="material-icons add">
                            keyboard_arrow_down
                            </i>
                            <i className="material-icons remove">
                            keyboard_arrow_up
                                </i>
                            </span>
                        </span>
                        <div className="popover sub-menu collapse" id="top_sub_menu_37070">
                            <ul className="top-menu" data-depth="10">
                            <li className="category" id="category-2">
                                <NavLink to="/addproduct" className="dropdown-item dropdown-submenu" data-depth="1" onClick={handleAllProduct}>
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="category" id="category-1">
                                <NavLink to="/vieworder" className="dropdown-item dropdown-submenu" data-depth="11" onClick={handleAllProduct}>
                                    View order
                                </NavLink>
                            </li>
                            </ul>
                        </div>
                        </li>
                         : <li className="category" id="category-3">
                         <NavLink className="dropdown-item" to="/message"  data-depth="10">Message</NavLink></li>
                        }
                    </ul>
                    <div className="clearfix"></div>
                    </div>
                    {
                    localStorage.getItem("isAdmin")==="false" ? 
                    <div id="_desktop_cart">
                    <div className="blockcart cart-preview inactive">
                        <div className="header">
                        <NavLink to="/cartpage">
                        <span className="cart-NavLink">
                            <span className="cart-img">
                            <i className="material-icons">shopping_cart</i>
                            </span>
                            <span className="cart-content">
                            <span className="cart-name">
                            <span className="cart-products-count">{cartP ? cartP.length : 0}</span> items
                            </span>
                            <span className="cart-products-count hidden-lg-up">{cartP ? cartP.length : 0}</span>
                            </span>
                        </span>
                        </NavLink>
                        <div className="cart-dropdown" onTouchMove={()=>console.log('move')}>
                            <div className="product-container">
                            {
                                cartP ? 
                                cartP.map((cart, index) => <div className="product" key={index}> 
                                <a className="product-image" href="#">
                                <img src={cart?.image[0]} alt="Simul dolorem voluptaria"/>
                                </a>
                                <div className="product-detail">
                                <div className="product-name">
                                    <span className="quantity-formated">
                                    <span className="quantity">1</span>
                                    &nbsp;x&nbsp;
                                    </span>
                                    <a className="cart_block_product_name" >{cart?.name}</a>
                                </div>
                                <div className="price">{cart?.price}</div>
                                <ul className="product-atributes">
                                    <li className="atributes">
                                    <span className="label">Size:</span>
                                    <span className="value">{cart?.size[0]?.name}</span>
                                    </li>
                                    <li className="atributes">
                                    <span className="label">Color:</span>
                                    <span className="value">{cart?.color[0]?.name}</span>
                                    </li>
                                </ul>
                                </div> 
                                <div className="remove-product">
                                <a className="remove-from-cart" rel="nofollow" onClick={()=>handleDelete(cart?._id)}>
                                    <i className="material-icons">delete</i>
                                </a>
                                </div>
                            </div>)
                                : <div className="product"> </div>
                            }
                            
                            </div>
                            <div className="billing-info">
                                {/* <div className="billing subtotal-info">
                                <span className="label">Subtotal</span>
                                <span className="value"></span>
                                </div>
                                <div className="billing shipping-info">
                                <span className="label">Shipping</span>
                                <span className="value">$7.00</span>
                                </div>
                                <div className="billing tax-info">
                                <span className="label">Taxes</span>
                                <span className="value">$0.00</span>
                                </div>
                                <div className="billing total-info">
                                <span className="label">Total</span>
                                <span className="value">$78.48</span>
                                </div>  */}
                            </div>
                            <div className="cart-btn col-xs-12">
                            <NavLink to="/cartpage" className="btn btn-primary checkout" onClick={()=>window.scrollTo(0,0)}>Go To Cart</NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    : null
                    }
                    {/* <!-- -------------------shopping cart----------- --> */}
                    
                    {/* <!-- -------------------headercontact----------- --> */}
                    {
                        localStorage.getItem("isAdmin")==="false" ? 
                        <div className="contact-num">
                        <a href="contactpage.html">
                            <div className="call-img">
                                <i className="material-icons">
                                local_phone
                                </i>
                            </div>
                            <div className="call-num">+00 900 123456789</div>
                        </a>
                        </div>
                        : null
                    }
                    
                    {/* <!-- ------------------mobile media--------- --> */}
                    <div id="menu-icon" className="menu-icon hidden-lg-up">
                    <i className="fa fa-bars" aria-hidden="true">

                    </i>
                    </div>
                    <div id="_mobile_cart"></div>
                    <div id="_mobile_seach_widget"></div>
                    <div className="clearfix"></div>
                </div>
                </div>
            </div> 
             
        </header>
        {/* <!-- -------------------mobile media---------- --> */}
        <div id="mobile_top_menu_wrapper" className="hidden-lg-up" style={{"display":"none"}}>
          <div id="top_menu_closer">
            <i className="material-icons">
                close
            </i>
          </div>
          <div className="js-top-menu mobile" id="_mobile_top_menu"></div>
        </div>
       </>
    )
}