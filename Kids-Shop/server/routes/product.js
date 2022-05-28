const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const {Product, Category} = require("../models/index");
//register

// router.get('/', (req, res) => {
//     res.send('Hi')
// })

router.post("/add", async(req, res) => {
    try{
        const product = await new Product({
            name: req.body.name,
            price: req.body.price,
            introduce: req.body.introduce || "",
            discount: req.body.discount,
            importDate: req.body.importDate || Date.now(),
            description: req.body.description || "",
            inStock: req.body.inStock || 0,
            color: req.body.color,
            image: req.body.image.split(','),
            size: req.body.size,
            febricMaterial: req.body.febricMaterial,
            sale: req.body.sale || false
        })

        const category = await Category.findOne({_id: req.body.categoryId})
        // res.status(200).json(category.listProduct)
        const listProduct = category.listProduct;
        console.log(listProduct)
        listProduct?.push(product?._id);
        // res.status(200).json(category)
        // console.log(listProduct)
        Category.findOneAndUpdate({_id: req.body.categoryId}, {listProduct: listProduct}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Caterory : ", docs);
            }
        } )
        await product.save();
        res.status(200).json(product);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})



//getall
router.get("/", async (req, res) => {
    try{
        const product = await Product.find();
        res.status(200).json(product);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/id/:_id", async (req, res) => {
    try{
        const product = await Product.findOne({_id: req.params._id});
        res.status(200).json(product);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/:name", async (req, res) => {
    try{
    const product = await Product.find({name: {$regex: req.params.name}});
        res.status(200).json(product);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

module.exports = router