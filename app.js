const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');
const port=process.env.PORT || 8800;
app.use(cors());
const adminRouteImport=require('./route/admin.route');
const userRouteImport=require('./route/user.route');
const categoryRouteImport=require('./route/category.route');
const medicineRouteImport=require('./route/medicine.route');
const cartRouteImport=require('./route/cart.route');


mongoose
.connect("mongodb+srv://root:root@ayurvedacluster.oihsu.mongodb.net/theGreatAyurveda?retryWrites=true&w=majority")
.then(()=>{
console.log("database conectivity success ");
})
.catch((err)=>{
    console.log(" database connectivity failed"+err);
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/admin/',adminRouteImport);
app.use('/api/user/',userRouteImport);
app.use('/api/category/',categoryRouteImport);
app.use('/api/medicine/',medicineRouteImport);
app.use('/api/cart/',cartRouteImport);

app.listen(port,()=>{
    console.log('Server Running');
});