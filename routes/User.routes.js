//! 1.- Importar express & Middleware
const express = require("express");
const auth = require("../middleware/auth");

//! 2.- Instanciar enrutador
const router = express.Router();

//! 3.- Importar controladores
const {
  registro,
  verUsuarios,
  filtrarUsuarios,
  eliminarUsuarioPorId,
  eliminarUsuariosPorFiltro,
  actualizarUsuario,
  login,
  verInfoUsuario,
  verUsuario,
} = require("../controllers");

//! 4.- Declaramos las rutas
router.post("/", registro);
router.post("/login", login);
// devuvelve los datos de un usuario en especifico siempre y cuando este este logeado o sea administrador ya que recibe el id a travez del token
router.get("/", auth, verInfoUsuario);
// devuelve todos los usuarios
router.get("/getAll", auth, verUsuarios);
// filtra los usuarios por un parametro pasado por el body, este endpoint solo puede ser usado por un usuario tipo administrador
router.get("/filtrar", auth, filtrarUsuarios);
// busca un usuario por el id pasado por parametro, este endpoint solo puede ser usado por un usuario tipo administrador
router.get("/:id", auth, verUsuario);
// elimina un usuario por el id pasado por parametro, este endpoint solo puede ser usado por un usuario tipo administrador
router.delete("/delete/:id", auth, eliminarUsuarioPorId);
// elimina un usuario por un parametro pasado por el body, este endpoint solo puede ser usado por un usuario tipo administrador
router.delete("/", auth, eliminarUsuariosPorFiltro);
// busca un usuario a travez en un id pasado por parametro y actualiza los valores pasados por el body
router.put("/:id", auth, actualizarUsuario);

//! 5.- Exportamos el enrutador
module.exports = router;