const express = require("express");
const { mongoose } = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
    try{
        const user = await User.create(req.body);
        return res.send ({ user });
    }
    catch(err){
        res.status(500).send(err)
    }
});

router.get("/users", async (req, res) => {
    try{
        const users = await User.find();
        return res.send ({ users });
    }
    catch(err){
        res.status(500).send(err)
    }
});

module.exports = app => app.use(router)