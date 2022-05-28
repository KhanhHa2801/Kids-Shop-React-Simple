const router = require('express').Router();
const {Category} = require("../models/index");

router.post("/add", async(req, res) => {

    try{
        const category = await new Category({
            name: req.body.name,
            image: req.body.image,
            product: req.body.product || []
        })

        await category.save();
        res.status(200).json(category);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})



//getall
router.get("/", async (req, res) => {
    try{
        const category = await Category.find().populate('listProduct');
        res.status(200).json(category);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/:name", async (req, res) => {
    try{
        const category = await Category.find({name: req.params.name}).populate("listProduct");
        res.status(200).json(category);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})



module.exports = router