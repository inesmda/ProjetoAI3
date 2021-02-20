const User = require("../models/User");

//Criar Utilizador
exports.CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (err) {
    res.status(500).send(err);
  }
};

//Mostrar Todos os Utilizadores
exports.ListUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.send({ users });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.ShowUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    return res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.UpdateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.DeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    return res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};
