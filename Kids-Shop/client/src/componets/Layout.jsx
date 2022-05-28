import Header from "./Header";
import { useEffect } from "react";
import Footer from "./Footer";

export default function Layout ({children, listCategory, setCategoryName, setListCategory, setListProduct, userName, userImage, setUserName, setUserImage, isAdmin, setIsAdmin, listProduct, user, setUser, setProduct, categoryName}) {
    return (
        <>
            <Header listCategory={listCategory} setCategoryName={setCategoryName} setListCategory={setListCategory}setListProduct={setListProduct} userName={userName} setUserName={setUserName} userImage={userImage} setUserImage={setUserImage} isAdmin={isAdmin} setIsAdmin={setIsAdmin} listProduct={listProduct} user={user} setUser={setUser} categoryName={categoryName}/>
                {children}
            <Footer />
        </>
    )
}