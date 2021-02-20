const express = require("express");
const router = express.Router();

//Importação dos Controladores
const UserController = require("../controllers/controllerUser");

//Rotas
router.post("/register", UserController.CreateUser);

router.get("/user/:id", UserController.ShowUser);
router.put("/user/:id", UserController.UpdateUser);
router.delete("/user/:id", UserController.DeleteUser);

module.exports = router;
