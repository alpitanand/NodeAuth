var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../../api/User/user.model");

router.get("/", async (req, res) => {
 

  var user = await User.findSimilarEmail(req.body.email);

  if (!user) {
    return res.status(404).send("You are not registered");
  } else {
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid password");
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("token", token).send(token);
  }
});


module.exports = router
