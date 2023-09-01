const express = require("express").Router();
const router = require("express").Router();
const jwt = require("jsonwebtoken");
router.post("/token", async (req, res) => {
  try {
    const email = "test@gmail.com";
    const token = jwt.sign({ data: email }, process.env.SECRET_KEY, {
      expiresIn: 60 * 5,
    });
    return res.json({ token });
  } catch (e) {
    return res.status(400).json({ message: "invalid token" });
  }
});

module.exports = router;
