
const express = require("express");
const auth = require("../middleware/auth");


const router = express.Router();


const {
  nuevaVenta,
  verVentas,
  filtrarVentasUsuario,
  actualizarEstadoId
} = require("../controllers");


router.post("/", auth, nuevaVenta);
router.post('/estado/:id',auth,actualizarEstadoId)
router.get("/getAll", auth, verVentas);
router.get("/compras", auth, filtrarVentasUsuario,);


module.exports = router;