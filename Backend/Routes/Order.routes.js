const express = require("express");


const { OrderModel } = require("../Models/Order.model");
const { Adminauth } = require("../middlewares/Adminauth.middleware");
const OrderRouter = express.Router();

OrderRouter.get("/order", Adminauth, async (req, res) => {
    console.log("order route");
  try {
    const { userId } = req.body;
    if(userId){
        const data = await OrderModel.find({ userId: userId });
        res.status(200).send({ orders: data });
    }
    const order = await OrderModel.find()
    res.status(200).send({orders:order})
   
  } catch (error) {
    res.status(404).send({ err: error });
  }
});

OrderRouter.post("/newOrder", Adminauth, async (req, res) => {
    // console.log("satan" , req.body);
  try {
    const obj = req.body;
    const data = new OrderModel(obj);
    await data.save();
    res.status(200).send({ msg: "new order created" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

OrderRouter.patch("/update:id", Adminauth, async (req, res) => {
  await OrderModel.findByIdAndUpdate(req.params.id, req.query);
  res.status(200).send({ msg: "item updated" });
});

OrderRouter.delete("/delete:id", Adminauth, async (req, res) => {
  await OrderModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ msg: "item deleted" });
});
module.exports = {
  OrderRouter,
};
