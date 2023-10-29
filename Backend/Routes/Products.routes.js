const express = require("express");
const { Auth } = require("../middlewares/Auth.middleware");
const { ProductModel } = require("../Models/Product.model");
const ProductRouter = express.Router();

ProductRouter.post("/add", async (req, res) => {
  let data = new ProductModel(req.body);
  await data.save();
  res.send({ msg: "new product added successfully!!" });
});

ProductRouter.get("/products", async (req, res) => {
  let { page, limit } = req.query;
  let details = {};
  let sortby = {};

  let data1 = [];
  for (let key in req.query) {
    if (
      key !== "page" &&
      key !== "limit" &&
      key !== "order" &&
      key !== "rating"
    ) {
      details[key] = req.query[key];
    } else if (key == "rating") {
      details.rating = { $gte: +req.query[key] };
    } else if (key == "order") {
      console.log("ji");
      sortby.price = req.query[key];
    }
  }
  console.log(details);

  console.log(sortby);
  console.log(page, limit);
  const data = await ProductModel.find(details)
    .skip((page - 1) * limit)
    .limit(+limit)
    .sort(sortby);
  ProductModel.find(details)
    .skip((page - 1) * limit)
    .limit(+limit)
    .sort(sortby);
  data1.push(...data1, data);

  //   let obj = req.query

  res.status(200).send({ msg: data1 });
});

ProductRouter.patch("/update:id", async (req, res) => {
  await ProductModel.findByIdAndUpdate(req.params.id, req.query);
  res.status(200).send({ msg: "product updated" });
});

ProductRouter.delete("/delete:id", async (req, res) => {
  await ProductModel.findByIdAndDelete(req.params.id);
  res.status(200).send({ msg: "product deleted" });
});

module.exports = {
  ProductRouter,
};
