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
//Filtrar las peliculas que ha creado el usuario logeado
router.get("/misPeliculas", auth, verMisProductosCreados);
//Eliminar un producto pasandole un id por parametro
router.delete("/:id", auth, eliminarProductoPorId);
//Actualizar un producto pasandol
router.put("/:id", auth, actualizarProductoPorId);

module.exports = router;          