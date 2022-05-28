const router = require('express').Router();
const {Blog} = require("../models/index");

router.post("/add", async(req, res) => {

    try{
        const blog = await new Blog({
            title: req.body.title,
            content: req.body.content,
            date: Date.now(),
            user: req.body.user || [],
            comment: req.body.comment || [],
            tag: req.body.tag || []
        })

        await blog.save();
        res.status(200).json(blog);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})



//getall
router.get("/", async (req, res) => {
    try{
        const blog = await Blog.find();
        res.status(200).json(blog);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/:title", async (req, res) => {
    try{
        const blog = await Blog.find({title: req.params.title});
        console.log(req.body.title)
        res.status(200).json(blog);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

module.exports = router