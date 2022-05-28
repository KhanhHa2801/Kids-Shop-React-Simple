const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const {User, Product, Order} = require("../models/index");
//register

// router.get('/', (req, res) => {
//     res.send('Hi')
// })

router.post("/register", async(req, res) => {

    try{
        const user = await new User({
            email: req.body.email,
            name: {
                first: req.body.name.first,
                last: req.body.name.last
            },
            password: req.body.password,
            wishlist: req.body.wishlist || [],
            comment: req.body.comment || [],
            feedback: req.body.feedback || [],
            image: req.body.image || "",
            isAdmin: req.body.isAdmin || false,
            totalBill: 0
        })

        await user.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(404).json(err);
    }
    
})


//login
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email.trim(), password: req.body.password.trim()});
        !user && res.status(404).json("Wrong Email or Password");
        if(user.password != req.body.password)
            res.status(404).json("Wrong Email or Password");
        else
            res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
})

//get
router.get("/ui/:_id", async (req, res) => {
    try{
        const user = await User.find({_id: req.params._id})
        res.status(200).json(user);
    }catch(err){
        res.status(404).json("Not found user");
        console.log(err);
    }
})

router.put('/:_id', async(req, res, next) => {
    const productId = req.body.productId;
    const user = await User.find({_id: req.params._id}).populate()
    res.status(200).json(user[0].listProduct)
    const listProduct = user[0].listProduct;
    listProduct.push(req.body.id);
    let totalBill = 0;
    await Promise.all(listProduct.map( async productid => {
        const product = await Product.findOne({_id: productid});
        console.log(product)
        totalBill += parseFloat(product?.price) - parseFloat(product?.discount)/100*parseFloat(product?.price );
    }))
    User.findByIdAndUpdate({_id: req.params._id}, {listProduct: listProduct, totalBill: totalBill}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User : ", docs);
        }
    })

    // Order.findOneAndUpdate({user: req.params._id}, {product: listProduct, totalBill: totalBill}, function (err, docs) {
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("Updated Order : ", docs);
    //     }
    // })
})

router.get('/:_id', async(req, res, next) => {
    const productId = req.body.productId;
    const user = await User.find({_id: req.params._id}).populate('listProduct')
    res.status(200).json(user[0].listProduct)
})

router.put('/delete/:_id', async(req, res, next) => {
    const productId = req.body.id;
    const user = await User.find({_id: req.params._id}).populate()
    res.status(200).json(user[0].listProduct)
    const listProduct = user[0].listProduct;
    const index = listProduct.indexOf(productId)
    listProduct.splice(index, 1);
    let totalBill = 0;
    await Promise.all(listProduct.map( async productid => {
        const product = await Product.findOne({_id: productid});
        totalBill += parseFloat(product?.price ) - parseFloat(product?.discount)/100*parseFloat(product?.price);
    }))
    User.findByIdAndUpdate({_id: req.params._id}, {listProduct: listProduct, totalBill: totalBill}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated User : ", docs);
        }
    })
    // Order.findOneAndUpdate({user: req.params._id}, {product: listProduct ,totalBill: totalBill}, function (err, docs) {
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("Updated Order : ", docs);
    //     }
    // })
})



module.exports = router