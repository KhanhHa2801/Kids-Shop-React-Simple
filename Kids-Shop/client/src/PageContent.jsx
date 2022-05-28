
import BannerHead from "./componets/banner/BannerHead";
import CategorySlide from "./componets/category/CategorySlide"
import TrendingProduct from "./componets/product/TrendingProduct";
import Feedback from "./componets/feedback/Feedback";
import Blog from "./componets/blog/Blog";
import { useEffect } from "react";

export default function PageContent({ listCategory, listBanner, listProduct, setProduct, setListProduct, setCategoryName}) {

    return (
        <div>
          <CategorySlide listCategory={listCategory} setCategoryName={setCategoryName} />
          <BannerHead listBanner={listBanner} />
          <TrendingProduct listProduct={listProduct} setProduct={setProduct} setListProduct={setListProduct} />
          <Feedback />
          <Blog />
        </div>
    )
}