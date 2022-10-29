
const express = require("express");
const auth = require("../middleware/auth");


const router = express.Router();


const {
  nuevaVenta,
  verVentas,
  filtrarVentasUsuario,
} = require("../controllers");


router.post("/", auth, nuevaVenta);
router.get("/getAll", auth, verVentas);
router.get("/compras", auth, filtrarVentasUsuario,);


module.exports = router;