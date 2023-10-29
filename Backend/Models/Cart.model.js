const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  
  brand: String,
  name: String,
  Price: Number,
  image_link: String,
  description: String,
  category: String,
  product_type: String,
  userId:String
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = {
  CartModel,
};
