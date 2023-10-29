const express = require("express");
const { UserModel } = require("../Models/User.model");
const bcrypt = require("bcrypt");
const UserRouter = express.Router();
var jwt = require("jsonwebtoken");

UserRouter.post("/register", async (req, res) => {
  let { email, name, password, role , adminkey} = req.body;
  if(role == "admin" && adminkey == process.env.adminkey){
    let admin = await UserModel.findOne({ email });
  if (admin?.email) {
    res.status(406).send({ msg: "admin already exists" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.status(304).send({ msg: err });
      }
      let data = new UserModel({ email, name, password: hash, role , adminkey});
      await data.save();
    });

    res.status(201).send({ msg: "admin registered successfully!!" });
  }
  }
  let user = await UserModel.findOne({ email });
  if (user?.email) {
    res.status(406).send({ msg: "user already exists" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.status(304).send({ msg: err });
      }
      let data = new UserModel({ email, name, password: hash, role });
      await data.save();
    });

    res.status(201).send({ msg: "user registered successfully!!" });
  }
});

UserRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  
  let data = await UserModel.findOne({ email });
  //   console.log(data);

  if (data) {
    bcrypt.compare(password, data.password, function (err, result) {
      let token = jwt.sign({ userId: data.id , role:data.role }, process.env.secretKey);
      if (err) {
        res.status(404).send({ msg: err });
      }
      if (result) {
        res.status(200).send({ msg: "login sucessfull!!!!!!", token });
      } else {
        res.status(401).send({ msg: "wrong Credentials!!!" });
      }
    });
  } else {
    res.status(401).send({ msg: "please register!!" });
  }
});

module.exports = {
  UserRouter,
};
