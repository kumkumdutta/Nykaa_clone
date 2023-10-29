const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  brand: String,
  name: String,
  Price: Number,
  image_link: String,
  quantity:Number,
  product_type: String,
  userId:String
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = {
  OrderModel,
};
