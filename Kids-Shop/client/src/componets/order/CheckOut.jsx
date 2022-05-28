import axios from "axios";
import { useState, useEffect } from "react";

export default function CheckOut () {


    const [messShip, setMessShip] = useState("");
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("Thanh toán khi nhận hàng");
    const [totalBill, setTotalBill] = useState(null);
    const [listProduct, setListProduct] = useState([]);
    const [sumPrice, setSumPrice] = useState("");

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
    }, [] )

    useEffect( () => {
        const req = "http://localhost:5500/api/user/ui/"+localStorage.getItem("idUser")
        console.log(req)
        try{
            const res = axios.get(req)
            .then(res => {
                setTotalBill(res.data)
                console.log(res.data)
            })
        }
        catch(e) { 
            console.log(e)
        }
}, [listProduct] )

    function handleOrder ()  {
    if(localStorage.getItem("idUser")){
        function f() {
            const req = "http://localhost:5500/api/order/add";
            try{
                const res = axios.post(req,  {
                    totalBill: totalBill[0]?.totalBill || 0,
                    accept: false,
                    messShip: messShip,
                    address: address,
                    payment: payment || "Thanh toán khi nhận hàng",
                    user: localStorage.getItem("idUser"),
                    product: listProduct
                }).then((res) => {
                    alert("Đặt hàng thành công, hãy đợi shop xác nhận đơn hàng bạn nhé.");
                    window.scrollTo(0,0)
                })
                .catch( (err) => {
                        if(!address || !payment){
                            alert('Bạn chưa điền đủ thông tin');
                        }
                        else if(!listProduct){
                            alert('Không có sản phẩm nào được chọn')
                        }
                        else if(err.response !== undefined){
                            alert('Đặt hàng không thành công, lỗi ', err.response);
                            console.log(err)
                        }
                } )
            }
            catch (err) {
                console.log(err);
            }
        }
        f()
    }
    else {
        function f() {
            if(confirm("Bạn chưa đăng nhập, bạn hãy đăng nhập trước khi đặt hàng nhé, bạn muốn đăng nhập ngay bây giờ không? ")){
                window.location.href = "/login";
            }
            else{

            }
        }
        f()
    }
    }
    return (
        <div>
            {/* <!-- --------------------Breadcrumb------------ --> */}
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">Order</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Order</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            {/* <!-- -----------Checkout page----------- --> */}
            <section id="wrapper"  className="top-wrapper">      
                <div className="container">
                <section id="content">
                    <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <div className="accordion" id="accordionExample">
                        <section className="checkout-step card" id="checkout-addresses-step">
                            <div className="collapsed" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="false" aria-controls="collapsetwo">
                            <h1 className="step-title h3">
                                <span className="step-number">1</span> Addresses
                            </h1>
                            </div>
                            <div className="content collapse show" id="collapsetwo" data-parent="#accordionExample">
                            <form>
                                <p>
                                The selected address will be used both as your personal address (for invoice) and as your delivery address.
                                </p>      
                                <section className="form-fields">
                                <div className="form-group row">
                                    <label className="col-md-3 col-sm-12 form-control-label required">
                                    Address
                                    </label>
                                    <div className="col-md-6 col-sm-12">
                                    <input className="form-control" name="address1" value={address} required="" type="text" placeholder="Hà Nội" onChange={e => setAddress(e.target.value) }/> 
                                    </div>                            
                                </div>
                                </section>
                            </form>
                            </div>
                        </section>
                        <section className="checkout-step card" id="checkout-delivery-step">
                            <div className="collapsed" data-toggle="collapse" data-target="#collapsethree" aria-expanded="false" aria-controls="collapsethree">
                            <h1 className="step-title h3">
                                <span className="step-number">2</span> Send message to your shipper?
                            </h1>
                            </div>
                            <div className="content collapse" id="collapsethree" data-parent="#accordionExample">
                            <form className="clearfix" method="post">
                                <div id="delivery">
                                <label className="delivery_message">If you would like to add a comment about your order, please write it in the field below.</label>
                                <textarea rows="2" cols="120" id="delivery_message" className="form-control" name="delivery_message" value={messShip} onChange={e => setMessShip(e.target.value)}></textarea>
                                </div>                
                            </form>
                            </div>
                        </section>
                        <section className="checkout-step card" id="checkout-payment-step">
                            <div className="collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                            <h1 className="step-title h3">
                                <span className="step-number">3</span> Payment
                            </h1>
                            </div>
                            <div className="content collapse" id="collapsefour" data-parent="#accordionExample">
                            <div className="payment-options">
                                <div>
                                <div className="payment-option clearfix">        
                                    <span className="custom-radio float-xs-left">
                                    <input className="ps-shown-by-js" name="payment-option" required="" type="radio" onClick={()=>setPayment("Thanh toán khi nhận hàng")}/>
                                    <span></span>
                                    </span>
                                    <label>
                                    <span>Payment on delivery</span>
                                    </label>
                                </div>
                                </div>
                                <div>
                                <div className="payment-option clearfix">
                                    <span className="custom-radio float-xs-left">
                                    <input className="ps-shown-by-js" name="payment-option" required="" type="radio" onClick={() => setPayment("Thanh toán bằng hính thức khác")}/>
                                    <span></span>
                                    </span>
                                    <label>
                                    <span>Payment in another form</span>
                                    </label>
                                </div>
                                </div>
                            </div>
                            <form method="GET" className="payment-form">
                                <ul>
                                <li>
                                    <span className="custom-checkbox">
                                    <input required="" value="1" type="checkbox"/>
                                    <span><i className="material-icons checkbox-checked">checkbox</i></span>
                                    </span>
                                    <label> I agree to the <a href="#">terms of service</a> and will adhere to them unconditionally.</label>
                                </li>
                                </ul>
                            </form>
                            <button type="submit" disabled="" className="btn btn-primary center-block" onClick={handleOrder}>
                                Order with an obligation to pay
                            </button>
                            </div>
                        </section>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <section id="js-checkout-summary" className="card js-cart">
                        <div className="card-block-summary-details">
                        <div className="cart-summary-products">
                            <div id="cart-summary-product-list">
                            <ul className="media-list">
                            {
                                listProduct ? listProduct.map(product => 
                                    <li className="media" key={product?._id}>
                                        <div className="media-left">
                                            <a title="Omnis dicam mentitum">
                                            <img src={product?.image[0]}/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <span className="product-name">{product.name}</span>
                                            <span className="product-quantity">x1</span>
                                            <span className="product-price float-xs-right">{product.price}</span>
                                        </div>
                                    </li>
                                ) 
                                : <li className="media"></li>
                            }
                                
                            </ul>
                            </div>                    
                        </div>
                        
                        </div>
                        <hr className="separator"/>
                        <div className="cart-summary-totals">
                        <div className="cart-summary-line cart-total">
                            <span className="label" style={{fontSize: "20px"}}>Total</span>
                            <span className="value">{totalBill ? totalBill[0]?.totalBill + "$" : "00.00$"}</span>
                        </div>
                        </div>
                    </section>
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
            </section>
        </div>
    )
}