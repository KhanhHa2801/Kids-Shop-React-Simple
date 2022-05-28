import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./componets/Header";
import Footerr from "./componets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProduct from "./componets/product/AllProduct";
import PageContent from "./PageContent";
import NotFoundPage from "./componets/NotFoundPage";
import ProductDetail from "./componets/product/ProductDetail";
import ProductCategory from "./componets/product/ProductCategory";
import Layout from "./componets/Layout";
import AboutUs from "./componets/AboutUs";
import Contact from "./componets/ContactUs";
import Login from "./componets/loginout/Login";
import Register from "./componets/loginout/Register";
import AddProduct from "./componets/product/AddProduct";
import Blog from "./componets/blog/Blog";
import ProductSearch from "./componets/product/ProductSearch";
import BlogPostDetail from "./componets/blog/BlogPostDetail";
import CheckOut from "./componets/order/CheckOut";
import CartPage from "./componets/order/CartPage";
import ViewOrder from "./componets/order/ViewOrder";
import Message from "./componets/message/Mesage";

function App() {
  
  const [listCategory, setListCategory] = useState([]);
  const [listBanner, setListBanner] = useState([]);
  const [product, setProduct] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [listProduct, setListProduct] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [userImage, setUserImage] = useState(localStorage.getItem("userImage"));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));
  const [user, setUser] = useState(null);
  const [state, setState] = useState(false);

  useEffect( ()=>{
      const req = "http://localhost:5500/api/category";
      const res =  axios.get(req)
      .then((res) => {
        setListCategory(res.data);
      })
      .catch(e => console.log(e))
  }, [])

  useEffect( ()=>{
    const req = "http://localhost:5500/api/banner";
    const res =  axios.get(req)
    .then((res) => {
      setListBanner(res.data);
    })
    .catch(e => console.log(e))
  }, [])  


  return (
    <BrowserRouter>
      <Layout listCategory={listCategory} setListCategory={setListCategory}
              listBanner={listBanner} setListBanner={setListBanner}
              product={product} setProduct={setProduct}
              listProduct={listProduct} setListProduct={setListProduct}
              categoryName={categoryName} setCategoryName={setCategoryName}
              userName={userName} setUserName={setUserName}
              userImage={userImage} setUserImage={setUserImage}
              isAdmin={isAdmin} setIsAdmin={setIsAdmin}
              user={user} setUser={setUser}
              state={state} setState={setState}>
        <Routes>
          <Route path="/" element={<PageContent setListProduct={setListProduct} listProduct={listProduct} listCategory={listCategory} listBanner={listBanner} setCategoryName={setCategoryName} state={state} setState={setState} />}/>
          <Route path="/allproduct" element={<AllProduct setProduct={setProduct} 
              listProduct={listProduct} setListProduct={setListProduct}/>} state={state} setState={setState}/>
          <Route path="/productdetail" element={<ProductDetail product={product}/>} state={state} setState={setState}/>
          <Route path="/productcategory" element={<ProductCategory
              listProduct={listProduct} setListProduct={setListProduct} setCategoryName={setCategoryName}  categoryName={categoryName} setProduct={setProduct} />} />
          <Route path="/*" element={<NotFoundPage/>}  />
          <Route path="/404" element={<NotFoundPage/>}  />
          <Route path="/about" element={<AboutUs/>}  />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/login" element={<Login auth="login" userName={userName} setUserName={setUserName}/>} />
          <Route path="/register" element={<Register auth="register" userName={userName} setUserName={setUserName}/>}  />
          <Route path="/addproduct" element={<AddProduct/>}  />
          <Route path="/productsearch" element={<ProductSearch listProduct={listProduct} setProduct={setProduct}/>} />
          <Route path="/blog" element={<BlogPostDetail/>} />
          <Route path="/order" element={<CheckOut/>}  />
          <Route path="/cartpage" element={<CartPage/>}  />
          <Route path="/vieworder" element={<ViewOrder/>}  />
          <Route path="/message" element={<Message/>} />
          
        </Routes> 

      </Layout>
      
    </BrowserRouter>
  )
}

export default App
