const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const {Order} = require("../models/index");

router.post("/add", async(req, res) => {

    try{
        const order = await new Order({
            totalBill: req.body.totalBill || 0,
            accept: req.body.accept || false,
            messShip: req.body.messShip || "",
            address: req.body.address,
            payment: req.body.payment || "Thanh toán khi nhận hàng",
            user: req.body.user,
            product: req.body.product || []
        })

        await order.save();                                    
        res.status(200).json(order);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})



//getall
router.get("/", async (req, res) => {
    try{
        const order = await Order.find().populate('user')
        res.status(200).json(order);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

//getone
router.get("/:user", async (req, res) => {
    try{
        const order = await Order.find({user: req.params.user}).populate('user')

        // Order.find({user: req.params.user}).populate([{
        //     path: 'user',
        //     model: 'User'
        // }, {
        //     path: 'product',
        //     model: 'Product'
        // }]).exec(function(err, order) {
        //     if(err) throw err;
        //     if(order) {
        //         // execute on order
        //         console.log(order);
        //     }
        // });
        res.status(200).json(order);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

router.put('/accept/:_id', async(req, res, next) => {
    const order = await Order.find({_id: req.params._id})

    Order.findByIdAndUpdate({_id: req.params._id}, {accept: true}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Order : ", docs);
            res.status(200).json(order);
        }
    })
})

router.get("/id/:_id", async (req, res) => {
    try{
        const order = await Order.find({_id: req.params._id}).populate('user')
        res.status(200).json(order);
    }catch(err){
        res.status(404).json("Nothing");
        console.log(err);
    }
})

module.exports = router