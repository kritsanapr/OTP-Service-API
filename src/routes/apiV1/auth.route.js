const express = require("express");
const router = express.Router();

// Find one
router.get("/auth", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

// Find one
router.get("/auth", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

router.post("/auth", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

router.put("/auth/:id", (req, res) => {
  res.status(200).json({
    msg: "Hello world" + req.params.id,
  });
});

router.delete("/auth/:id", (req, res) => {
  res.status(200).json({
    msg: "Hello world",
  });
});

module.exports = router;
