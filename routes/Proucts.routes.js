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


router.post("/", auth, nuevoProducto);
router.get("/getAll", auth, verProductos);
router.get("/misPeliculas", auth, verMisProductosCreados);
router.put("/:id", auth, actualizarProductoPorId);
router.delete("/:id", auth, eliminarProductoPorId);

module.exports = router;          