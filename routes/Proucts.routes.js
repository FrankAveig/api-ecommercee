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
//crear un nuevo producto
router.post("/", auth, nuevoProducto);
//Ver todos los productos
router.get("/getAll", auth, verProductos);
router.get("/misPeliculas", auth, verMisProductosCreados);
router.delete("/:id", auth, eliminarProductoPorId);
router.put("/:id", auth, actualizarProductoPorId);

module.exports = router;          