
const express = require("express");
const auth = require("../middleware/auth");


const router = express.Router();


const {
  nuevaVenta,
  verVentas,
} = require("../controllers");


router.post("/", auth, nuevaVenta);
router.get("/getAll", auth, verVentas);


module.exports = router;