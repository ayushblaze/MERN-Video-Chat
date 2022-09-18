const express = require("express");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const auth = require("../middleware/auth");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
}); 

router.post("/register", validator.body(registerSchema), authControllers.controllers.postRegister);
router.post("/login", validator.body(loginSchema), authControllers.controllers.postLogin);
// Test route to check if the middleware is working
router.get("/test", auth, (req, res) => {
  res.send("JWT Authentication Successful, User Authenticated.");
});

module.exports = router;


