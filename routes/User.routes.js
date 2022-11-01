const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

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

router.post("/", registro);
router.post("/login", login);
router.get("/", auth, verInfoUsuario);
router.get("/getAll", auth, verUsuarios);
router.get("/filtrar", auth, filtrarUsuarios);
router.get("/:id", auth, verUsuario);
router.delete("/delete/:id", auth, eliminarUsuarioPorId);
router.delete("/", auth, eliminarUsuariosPorFiltro);
router.put("/:id", auth, actualizarUsuario);

module.exports = router;