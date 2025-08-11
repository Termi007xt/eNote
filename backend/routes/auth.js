const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "NoHecking@MeBoi";

//Create a user using : POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name (atleast 3 characters).").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email.").isEmail(),
    body("password", "Password must be atleast 5 characters.").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors, dont crash.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether user with this email exist already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email aready exists" });
      }

      const salt = await bcrypt.genSaltSync(10);
      const securePass = await bcrypt.hashSync(req.body.password, salt);

      //Create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;
