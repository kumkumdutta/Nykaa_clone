const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { connection } = require('./config/db');
const { UserRouter } = require('./Routes/Users.routes');
const { ProductRouter } = require('./Routes/Products.routes');
const { CartRouter } = require('./Routes/Cart.routes');
const { OrderRouter } = require('./Routes/Order.routes');





app.use(cors())
app.use(express.json())
app.use('/auth',UserRouter)
app.use('/prod',ProductRouter)
app.use('/cart',CartRouter)
app.use('/admin',OrderRouter)
app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log('connected to db');
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running at ${process.env.PORT}`);
});