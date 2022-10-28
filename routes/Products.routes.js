const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const {
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
} = require("../controllers");

//rutas
router.post("/", auth, nuevoProducto);
router.get("/getAll", auth, verProductos);
router.get("/misPeliculas", auth, verMisProductosCreados);
router.delete("/:id", auth, eliminarProductoPorId);
router.put("/:id", auth, actualizarProductoPorId);

module.exports = router;