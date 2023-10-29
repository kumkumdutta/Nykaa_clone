
var jwt = require('jsonwebtoken');
require("dotenv").config()

const Auth = (req,res,next) =>{
  const token = req.headers?.authorization?.split(" ")[1]
  if(token){
  jwt.verify(token, process.env.secretKey, function(err, decoded) {
    if(decoded){
        req.body["userId"] = decoded.user_id
        console.log(decoded);
        next()
    }else{
        res.status(400).send({"msg":"Token Invalid"})
    }
  })
}else
  res.status(400).send({"msg":"Token not available"})
}
module.exports={Auth}