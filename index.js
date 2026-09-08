const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoute.js")
const app = express();
app.use(express.json());
app.use("/users", userRoute)
app.use("/products", productRoute)
const port = 5000;
const atlas_string = "mongodb+srv://adebayot971_db_user:adebayot971_db_user@cluster0.uwtjtbj.mongodb.net/cohot8_db?appName=Cluster0"
mongoose.connect(atlas_string).then(()=>{console.log('MongoDB Connected')}).catch((err)=>{console.error('connected error',err.message)});
app.get('/',(req,res)=>{res.send('Welcome')});
app.listen(port,()=>{console.log('server is running on '+port)});