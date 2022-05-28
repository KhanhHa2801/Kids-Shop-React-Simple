const router = require('express').Router();
const {Banner} = require("../models/index");

router.post("/add", async(req, res) => {

    try{
        const banner = await new Banner({
            id: req.body.id,
            title: req.body.title,
            detail: req.body.detail,
            image: req.body.image
        })

        await banner.save();
        res.status(200).json(banner);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})



//getall
router.get("/", async (req, res) => {
    try{
        const banner = await Banner.find();
        res.status(200).json(banner);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/:id", async (req, res) => {
    try{
        const banner = await Banner.find({id: req.body.id});
        res.status(200).json(banner);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

module.exports = router