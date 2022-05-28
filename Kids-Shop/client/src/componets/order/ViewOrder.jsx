import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import CartPage from "./CartPage";

const HandlGetProductById = ({_id})=>{
    const [listProduct, setListProduct] = useState([]);

    useEffect(()=>{
        const req = "http://localhost:5500/api/user/" + _id;
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
    }, [])

    return (listProduct?.map(
            product => 
            <div key={product?._id}>
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
                        
                        </div>
                        </div>
                    <div className="clearfix"></div>
                    </div>
                    </li>
                    </ul>
                </div>
        </div>
        ) 
    )
}

export default function ViewOrder () {

    const [listOrder, setListOrder] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [sumPrice, setSumPrice] = useState("");

    // for(let i=0; i<listProduct.length; i++){
    //     setSumPrice(sumPrice + listProduct[i].price)
    // }

    useEffect( () => {
        const req = "http://localhost:5500/api/order";
        // console.log(req)
        try{
            const res = axios.get(req)
            .then(res => {
                setListOrder(res.data)
            })
        }
        catch(e) { 
            console.log(e)
        }
    }, [listOrder] )

    const handleAccept = (_id) => {
        const req = "http://localhost:5500/api/order/accept/" + _id
        const res =  axios.put(req, {
            "user": _id
        })
        .then((res) => alert("Đã xác nhận đơn hàng"))
        .catch(e => console.log(e))
    }

    const handleDelete =(_id)=>{
        const req = "http://localhost:5500/api/user/delete/" + localStorage.getItem("idUser");
        const res =  axios.put(req, {
            "id": _id
        })
        .then((res) => alert("Đã xóa khỏi giỏ hàng"))
        .catch(e => console.log(e))
    }
    return(
        <div>
                  {/* <!-- --------------------Breadcrumb------------ --> */}
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">View Orders</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>View Order</span>
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
                                <h1 className="h1">All Orders</h1>
                            </div>
                                {
                                    listOrder ? 
                                    listOrder?.map(
                                        (order, index) => 
                                        order?.accept === false ? 
                                        <div key={index}>
                                                <hr className="separator"/>
                                                <div className="cart-overview js-cart" data-refresh-url="">
                                                    <ul className="cart-items">
                                                        <li className="cart-item">
                                                        <div className="product-line-grid row">
                                                        {/* <!--  product left content: image--> */}
                                                        <div className="product-line-grid-left col-md-2 col-xs-4">
                                                        {
                                                        order?.user?.image ?
                                                            <span className="product-image media-middle">
                                                             <img src={order?.user?.image}/>
                                                            </span>
                                                            : <FontAwesomeIcon icon={faUserAstronaut}/>
                                                        }
                                                    </div>
        
                                                        {/* <!--  product left body: description --> */}
                                                         <div className="product-line-grid-body col-md-5 col-xs-8">
                                                            <div className="product-line-info">
                                                            <h3 className="label" data-id_customization="0">{order?.user?.name?.first + " " + order?.user?.name?.last}</h3>
                                                            </div>
                                                            <p className="product-desc">
                                                            {order?.messShip}
                                                            </p>
                                                            <p className="product-desc">
                                                            {order?.date}
                                                            </p>
                                                        </div> 
        
                                                        {/* <!--  product left body: description --> */}
                                                        <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                                                            <div className="row">
                                                            <div className="product_qty_price col-md-10 col-xs-10">
                                                                <div className="row">
                                                                <div className="col-md-6 col-xs-6 qty">
                                                            </div>
                                                            <div className="col-md-6 col-xs-6 price">
                                                                <span className="product-price">
                                                                {order?.totalBill + "$"}
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 col-xs-2 text-xs-center cart-line-product">
                                                        <div className="cart-line-product-actions">
                                                            
                                                            </div>
                                                            <div className="cart-line-product-actions">
                                                            <a onClick={() => handleAccept(order?._id)} style={{"cursor": "pointer"}}>
                                                            <i className="material-icons float-xs-left">check</i>
                                                            </a>
                                                            <a
                                                            class                       = "remove-from-cart"
                                                            rel                         = "nofollow"
                                                            data-link-action            = "delete-from-cart"
                                                            data-id-product             = "1"
                                                            data-id-product-attribute   = "1"
                                                            data-id-customization       = ""
                                                            onClick={() => handleDelete()}
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
                                                    
                                                    <div className="cart-overview js-cart" data-refresh-url="">
                                                    
                                                    <HandlGetProductById _id={order?.user?._id}/>
                                                    </div>
                                                </div>
                                        </div>
                                        : <div>
                                            
                                        </div>
                                        ) 
                                    
                                    : <div >
                                        <hr className="separator"/>
                                        <div className="cart-overview js-cart" data-refresh-url="">Not order here</div>
                                    </div>
                                }

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