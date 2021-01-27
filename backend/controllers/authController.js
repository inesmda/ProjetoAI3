const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../config/Auth.json");

function gerarToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.send({ user, token: gerarToken({ id: user.id }) });
  } catch (err) {
    return res.status(400).send({ error: "Registration Failed!" });
  }
});

router.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(400).send({ error: "User not Found!" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid Password" });

  const token = jwt.sign({ id: user.id }, authConfig.secret, {
    expiresIn: 86400,
  });

  res.send({ user, token: gerarToken({ id: user.id }) });
});

module.exports = (app) => app.use("/auth", router);