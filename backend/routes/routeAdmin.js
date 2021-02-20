const express = require("express");
const router = express.Router();

//Importação dos Controladores
const UserController = require("../controllers/controllerUser");
const ProductController = require("../controllers/controllerProduct");
const CategoryController = require("../controllers/controllerCategory");

//Rotas
router.get("/users", UserController.ListUsers);
router.get("user/:id", UserController.ShowUser);

router.post("/product/add", ProductController.AddProduct);
router.get("/products", ProductController.ListProduct);

router.post("/category/add", CategoryController.AddCategory);
router.get("/categories/", CategoryController.ListCategory);

module.exports = router;
