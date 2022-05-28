import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function CategorySlide({listCategory, setCategoryName}) {


    return (
      <div id="top_home">
      <section id="ishislider" className="ishislider-container owl-carousel">
        <div className="item">
          <a href="#">
            <img src="./src/assets/images/slider/slide-1.png" alt="Slide-1" className="img-responsive"/>
          </a>
        </div>
        <div className="item">
          <a href="#">
            <img src="./src/assets/images/slider/slide-2.png" alt="Slide-2" className="img-responsive"/>
          </a>
        </div>
      </section>
      <section id="ishicategory" className="ishicategoryblock">
        <h3 className="home-title"><span className="title-icon"><span></span></span>Shop By Category</h3>
        <div className="ishicategoryblock-carousel owl-carousel" style={{display: "block"}}>
            {
                listCategory ? 
                    listCategory.map((categoy, index) => index<3 ?(
                      <div className="image-container" style={{width: "32%", float: "left"}} key={categoy._id}> 
                        <div className="item" >
                          <NavLink to="/productcategory" onClick={() => {           
                                                setCategoryName(categoy?.name);        
                                                window.scrollTo(0,0);
                                                }}>
                            <img src={categoy?.image} alt="category-1" className="img-responsive" />
                          </NavLink>
                          <div className="text-container">
                            {categoy?.name}
                          </div>
                        </div>  
                      </div>
                    ) : <div></div>)
                :
                <div className="image-container"></div>
          }
        </div>        
      </section>
      </div>
    )
}