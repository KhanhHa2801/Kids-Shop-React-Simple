import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AddProduct () {


    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [introduce, setIntroduce] = useState("");
    const [discount, setDiscount] = useState(0);
    const [importDate, setImportDate] = useState("2022-01-01");
    const [description, setDescription] = useState("");
    const [inStock, setInStock] = useState(0);
    const [color, setColor] = useState([]);
    const [image, setImage] = useState("");
    const [size, setSize] = useState([]);
    const [febricMaterial, setFebricMaterial] = useState([]);
    const [sale, setSale] = useState(false);
    const [percentPriceColor, setPercentPriceColor] = useState(0);
    const [percentPriceSize, setPercentPriceSize] = useState(0);
    const [percentPriceFeb, setPercentPriceFeb] = useState(0);
    const [categoryId, setCategoryId] = useState("");
    const [listCategory, setListCategory] = useState([]);
    const [nameCategory, setNameCategory] = useState("Select Category");
    
    useEffect( ()=>{
        const req = "http://localhost:5500/api/category";
        const res =  axios.get(req)
        .then((res) => {
        setListCategory(res.data);
        })
        .catch(e => console.log(e))
    }, []);

    const handleSubmit = () => {
        const req = "http://localhost:5500/api/products/add";

        let arrColorObj = [];
        color.split(',').map(cl => arrColorObj.push({
            name: cl,
            percentPriceColor: 0
        }));
        
        let arrSizeObj = [];
        size.split(',').map(s => arrSizeObj.push({
            name: s,
            percentPriceColor: 0
        }));

        let arrFebObj = [];
        febricMaterial.split(',').map(f => arrFebObj.push({
            name: f,
            percentPriceColor: 0
        }));

        try{
            // {
            //     "image": "./src/assets/images/product/6.jpg,./src/assets/images/product/5.jpg",
            //     "_id": "626a4eaeacf705bdb3ba3295",
            //     "id": "MH06",
            //     "name": "School Bag",
            //     "price": "10.00",
            //     "introduce": "Cặp sách cho bé đến trường",
            //     "discount": {
            //         "$numberDecimal": "0.2"
            //     },
            //     "description": "Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!",
            //     "inStock": 290,
            //     "color": [{
            //         "name": "pink",
            //         "percentPrice": 0
            //     },
            //     {
            //         "name": "white",
            //         "percentPrice": 1.0
            //     }
            //     ],
            //     "size": [
            //         {
            //             "name": "S",
            //             "percentPrice": 0
            //         },
            //         {
            //             "name": "L",
            //             "percentPrice": 1
            //         }
            //     ],
            //     "febricMaterial": [
            //         {
            //             "name": "Leather",
            //             "percentPrice": 0
            //         }
            //     ],
            //     "categoryId": "62749524665a287be3951330"
            // }
            const res = axios.post(req,  {
                name: name,
                price: price,
                introduce: introduce || "",
                discount: discount,
                importDate: importDate || Date.now(),
                description: description || "",
                inStock: inStock || 0,
                color: arrColorObj,
                image: image,
                size: arrSizeObj,
                febricMaterial: arrFebObj,
                sale: sale,
                categoryId: categoryId
                
            }).then((res) => {
                alert("Thêm thành công");
                window.localStorage.href = "/allproduct"
            })
            .catch( (err) => {
                    if(!name || !price){
                        alert('Bạn chưa điền đủ thông tin');
                    }
                    else if(err.response !== undefined){
                        alert("Thêm không thành công");
                    }
            } )
        }
        catch (err) {
            console.log(err);
        }
        window.scrollTo(0,0);
    }

    return (
        <div>
            <div className="breadcrumb-container">
                <nav data-depth="2" className="breadcrumb container">
                <h1 className="h1 category-title breadcrumb-title">Add New Product</h1>
                <ul>
                    <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Admin</span>
                    </a>
                    </li>
                    <li>
                    <a href="#">
                        <span>Add new product</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>

            <section id="wrapper">
                <div className="container">
                <div className="row">
                    <div id="content-wrapper" className="col-12">
                    <section id="main">
                        <div className="login-page">                  
                        <div className="block-title">
                            <h2 className="title"><span>Add New Product</span></h2>
                        </div>
                        <div className="card">
                            <div className="login-form">
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label required">Name's product</label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Price
                                </label>
                                <div className=" input-group col-md-2 col-sm-12">
                                <input
                                className="form-control"
                                name="price"
                                type="text"
                                value={price}
                                onChange={e => setPrice(e.target.value)}/>
                                <span className="form-control input-group-text">$</span>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Introduce
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <textarea  value={introduce}
                                onChange={e => setIntroduce(e.target.value)} style={{width: "100%", border: "1px solid #eee"}} rows="5" name="introduce" type="text"
                                ></textarea>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Discount
                                </label>
                                <div className=" input-group col-md-2 col-sm-12">
                                <input
                                className="form-control"
                                name="discount"
                                type="text"
                                value={discount}
                                onChange={e => setDiscount(e.target.value)}/>
                                <span className="form-control input-group-text">%</span>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                ImportDate
                                </label>
                                <div className="col-md-3 col-sm-12">
                                <input
                                className="form-control"
                                name="discount"
                                type="date"
                                value={importDate}
                                onChange={e => setImportDate(e.target.value)}/>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Description
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <textarea  value={description}
                                onChange={e => setDescription(e.target.value)} style={{width: "100%", border: "1px solid #eee"}} rows="5" name="description" type="text"
                                ></textarea>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                InStock
                                </label>
                                <div className="col-md-2 col-sm-12">
                                <input
                                className="form-control"
                                name="inStock"
                                type="text"
                                value={inStock}
                                onChange={e => setInStock(e.target.value)}/>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Color
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="color"
                                type="text"
                                value={color}
                                onChange={e => {
                                    setColor(e.target.value)
                                }}/>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Image
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="image"
                                type="file"
                                // value={image}
                                onChange={e => { 
                                    let arr = e.target.value.split('\\');
                                    let img = "./src/assets/images/product/" + arr[arr.length-1];
                                    setImage(img);
                                }}/>
                                </div>                            
                            </div>

                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Size
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="size"
                                type="text"
                                value={size}
                                onChange={e => {
                                   
                                    setSize(e.target.value)
                                }}/>
                                </div>                            
                            </div>
                            
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Febric Material
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input
                                className="form-control"
                                name="febricMaterial"
                                type="text"
                                value={febricMaterial}
                                onChange={e => {
                                   
                                    setFebricMaterial(e.target.value)
                                }}/>
                                </div>                            
                            </div>
 
                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                Sale
                                </label>
                                <div className="col-md-9 col-sm-12">
                                <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="sale" onClick={(e) => setSale(e.target.checked)}/>
                                <label className="form-check-label" htmlFor="sale">
                                    Sale
                                </label>
                                </div>                            
                            </div>


                            <div className="form-group row ">
                                <label className="col-md-3 col-sm-12 form-control-label">
                                    Category
                                </label>
                                <div className="col-md-9 col-sm-12">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="btnCategory" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {nameCategory}
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="btnCategory">
                                            {
                                                listCategory ? listCategory.map((category, index) => (
                                                    <button class="dropdown-item" type="button" key={index} onClick={() => {
                                                        setCategoryId(category?._id);
                                                        console.log(category?._id);
                                                        setNameCategory(category?.name);
                                                    }}>{category?.name}</button>
                                                ))
                                                : <div></div>
                                            }
                                            
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            

                            <div className="form-group text-center">
                                <NavLink to="/">
                                <button className="btn btn-primary" onClick={handleSubmit}>Add Product</button>
                                </NavLink>


                            </div>
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