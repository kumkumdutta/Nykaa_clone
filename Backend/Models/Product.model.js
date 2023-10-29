const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  brand : String,
  name : String,
  Price : String,
  currency : String,
  image_link : String,
  description : String,
  rating : Number,
  category : String,
  product_type : String,
  tag_list : Array,
  product_colors : Array

});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = {
  ProductModel
};





