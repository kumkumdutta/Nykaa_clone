var jwt = require("jsonwebtoken");
require("dotenv").config();

const Adminauth = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (token) {
    jwt.verify(token, process.env.secretKey, function (err, decoded) {
      if (decoded) {
        console.log(decoded);
        if (decoded.role == "admin") {
          next();
        } else {
          res.status(400).send({ msg: "access denied" });
        }
      } else {
        res.status(400).send({ msg: "Token Invalid" });
      }
    });
  } else res.status(400).send({ msg: "Token not available" });
};
module.exports = { Adminauth };
