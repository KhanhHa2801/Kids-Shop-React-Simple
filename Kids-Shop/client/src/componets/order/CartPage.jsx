import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function CartPage () {

    const [listProduct, setListProduct] = useState([]);
    const [listOrder, setListOrder] = useState([]);
    const [totalBill, setTotalBill] = useState(null);

    // for(let i=0; i<listProduct.length; i++){
    //     setSumPrice(sumPrice + listProduct[i].price)
    // }

    useEffect( () => {
        const req = "http://localhost:5500/api/user/" + localStorage.getItem("idUser");
        console.log(req)
        try{
            const res = axios.get(req)
            .then(res => {
                setListProduct(res.data)
            })
        }
        catch(e) { 
            console.log(e)
        }
    }, [listProduct] )
    
    useEffect( () => {
            const req = "http://localhost:5500/api/user/ui/"+localStorage.getItem("idUser")
            console.log(req)
            try{
                const res = axios.get(req)
                .then(res => {
                    setTotalBill(res.data)
                })
            }
            catch(e) { 
                console.log(e)
            }
    }, [listProduct] )
    

    const handleDelete =(_id)=>{
        const req = "http://localhost:5500/api/user/delete/" + localStorage.getItem("idUser");
        const res =  axios.put(req, {
            "id": _id
        })
        .then((res) => alert("Đã xóa khỏi giỏ hàng"))
        .catch(e => console.log(e))
    }

    return (
        <div>
                  {/* <!-- --------------------Breadcrumb------------ --> */}
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">Cart</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Cart</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            {/* <!-- -----------Cart page----------- --> */}
            <section id="wrapper">
                <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-12 top-wrapper">
                    <section id="main">
                        <div className="cart-grid row">
                        {/* <!-- Left Block: cart product informations & shpping --> */}
                        <div className="cart-grid-body col-xs-12 col-lg-8">
                            {/* <!-- cart products detailed --> */}
                            <div className="card cart-container">
                            <div className="card-block">
                                <h1 className="h1">Shopping Cart</h1>
                            </div>
                                    {
                                        listProduct ? 
                                        listProduct?.map(
                                            (product, index) => 
                                            <div key={index}>
                                                    <hr className="separator"/>
                                                    <div className="cart-overview js-cart" data-refresh-url="">
                                                        <ul className="cart-items">
                                                           <li className="cart-item">
                                                            <div className="product-line-grid row">
                                                           {/* <!--  product left content: image--> */}
                                                           <div className="product-line-grid-left col-md-2 col-xs-4">
                                                           <span className="product-image media-middle">
                                                            <img src={product?.image[0]} alt={product?.name}/>
                                                            </span>
                                                        </div>
            
                                                         {/* <!--  product left body: description --> */}
                                                            <div className="product-line-grid-body col-md-5 col-xs-8">
                                                                <div className="product-line-info">
                                                                <a className="label" href="#" data-id_customization="0">{product?.name}</a>
                                                                </div>
                                                                <p className="product-desc">
                                                                {product?.introduce}
                                                                </p>
                                                                <div className="product-line-info product-price h5">
                                                                <div className="current-price">
                                                                    <span className="price"> {product?.price}</span>
                                                                </div>
                                                                </div>
                                                                <div className="product-line-info">
                                                                <span className="label">Size:</span>
                                                                <span className="value"> {product?.size[0]?.name}</span>
                                                                </div>
                                                                <div className="product-line-info">
                                                                <span className="label">Color:</span>
                                                                <span className="value"> {product?.color[0]?.name}</span>
                                                                </div>
                                                            </div>
            
                                                         {/* <!--  product left body: description --> */}
                                                            <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                                                                <div className="row">
                                                                <div className="product_qty_price col-md-10 col-xs-10">
                                                                   <div className="row">
                                                                   <div className="col-md-6 col-xs-6 qty">
                                                                    <input name="quantity" defaultValue="1" size="2" className="form-control input-quantity" type="text"/>
                                                                </div>
                                                                <div className="col-md-6 col-xs-6 price">
                                                                    <span className="product-price">
                                                                    {product?.price}
                                                                    </span>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 col-xs-2 text-xs-center cart-line-product">
                                                                <div className="cart-line-product-actions">
                                                                <a
                                                                class                       = "remove-from-cart"
                                                                rel                         = "nofollow"
                                                                data-link-action            = "delete-from-cart"
                                                                data-id-product             = "1"
                                                                data-id-product-attribute   = "1"
                                                                data-id-customization       = ""
                                                                onClick={() => handleDelete(product?._id)}
                                                                >
                                                                <i className="material-icons float-xs-left">delete</i>
                                                                </a>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                        <div className="clearfix"></div>
                                                        </div>
                                                        </li>
                                                        </ul>
                                                    </div>
                                            </div>
                                            ) 
                                        
                                        : <div>
                                            <hr className="separator"/>
                                            <div className="cart-overview js-cart" data-refresh-url="">Not product here</div>
                                        </div>
                                    }

                            <NavLink className="btn btn-primary" to="/allproduct">
                            <i className="material-icons">chevron_left</i>Continue shopping
                            </NavLink>
                            </div>
                        </div>

                        {/* <!-- Right Block: cart subtotal & cart total --> */}
                        <div className="cart-grid-right col-xs-12 col-lg-4">
                            <div className="card cart-summary">
                            <div className="cart-detailed-totals">
                                <div className="card-block">
                                <div className="cart-summary-line" id="cart-subtotal-products">
                                    <span className="label js-subtotal">
                                    {listProduct ? listProduct?.length : 0} item
                                    </span>
                                    <br/>
                                    <br/>
                                    {
                                    listProduct ? listProduct?.map((product, index) => 
                                    <div  key={index}>
                                    <br/>
                                    <span  style={{fontSize: "13px", textDecorationLine: "line-through"}} className="value">{product.price + "$"} </span>
                                    <br/> 
                                    <span  style={{fontSize: "13px"}} className="value">{(product.price-product.discount/100*product.price) + "$"} </span> 
                                       <span style={{float:"left", fontSize:"14px"}} className="value">{product.name} &ensp; </span> 
                                       <br/> 
                                       </div> ): <span className="value">0</span>
                                    } 
                                    
                                </div>
                                {/* <div className="cart-summary-line" id="cart-subtotal-shipping">
                                    <div>
                                        <small className="value">
                                        </small></div>
                                </div> */}
                                </div>
                                <hr className="separator"/>
                                <div className="card-block">
                                <div className="cart-summary-line cart-total">
                                    <span className="label" style={{fontSize: "20px"}}>Total</span>
                                    <span className="value">
                                        {totalBill ? totalBill[0]?.totalBill + "$" : "00.00$"}
                                    </span>
                                </div>

                                </div>
                                <hr className="separator"/>
                            </div>              
                            <div className="checkout cart-detailed-actions card-block">
                                <div className="text-sm-center">
                                <NavLink to="/order" className="btn btn-primary">Proceed to checkout</NavLink>
                                </div>
                            </div>
                            </div>
                            <div id="block-reassurance" className="block-reassurance-cart">
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
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}