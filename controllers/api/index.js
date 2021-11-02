const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const blogRoutes = require("./blogController");
router.use("/blogs",blogRoutes);

module.exports=router;