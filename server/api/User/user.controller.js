const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.create = async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin
  };

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(data.password, salt);

  const user = new User({
    name: data.name,
    email: data.email,
    password: hashPassword,
    isAdmin: data.isAdmin
  });
  try {
    await user.save();
    return res.send({ user });
  } catch {
    res.status(500).send("Some internal error occured");
  }
};


module.exports.check = async (req, res) =>{
  res.send("Yaeee..!!!, works")
}
