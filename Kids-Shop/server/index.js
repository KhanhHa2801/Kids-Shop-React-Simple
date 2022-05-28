const express = require('express');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
}

const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const categoryRoute = require("./routes/category");
const bannerRoute = require("./routes/banner");
const blogRoute = require("./routes/blog");
const orderRoute = require("./routes/order");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to mongo')
})

//middleware

app.use(cors(corsOptions))
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/blog", blogRoute);
app.use("/api/order", orderRoute);

app.listen(5500, () => {
    console.log('Listening...');
})