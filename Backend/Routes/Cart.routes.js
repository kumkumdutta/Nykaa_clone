const express = require("express");
const { Auth } = require("../middlewares/Auth.middleware");
const { CartModel } = require("../Models/Cart.model");
const CartRouter = express.Router();

CartRouter.get("/mycart", Auth, async (req, res) => {
    ;
  try {
    const { userId } = req.body;
    const data = await CartModel.find({ userId: userId });
    res.status(200).send({ cart: data });
  } catch (error) {
    res.status(404).send({ err: error });
  }
});

CartRouter.post("/addcart", Auth, async (req, res) => {
    console.log("satan" , req.body);
  try {
    const obj = req.body;
    const data = new CartModel(obj);
    await data.save();
    res.status(200).send({ msg: "item added to the cart" });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

CartRouter.patch("/update:id", Auth, async (req, res) => {
  await CartModel.findByIdAndUpdate(req.params.id, req.query);
  res.status(200).send({ msg: "item updated" });
});

CartRouter.delete("/delete:id", Auth, async (req, res) => {
  await CartModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ msg: "item deleted" });
});
module.exports = {
  CartRouter,
};
