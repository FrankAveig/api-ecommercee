const {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    login,
    verInfoUsuario,
    verUsuario
  } = require("./User.controller");
  
  const{
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
  } = require('./Product.controller')
  const{
    nuevaVenta,
    verVentas,
    filtrarVentasUsuario,
    actualizarEstadoId
  } = require('./Sale.controller')
  module.exports = {
    registro,
    verUsuarios,
    filtrarUsuarios,
    eliminarUsuarioPorId,
    eliminarUsuariosPorFiltro,
    actualizarUsuario,
    login,
    verInfoUsuario,
    verUsuario,
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
    nuevaVenta,
    verVentas,
    filtrarVentasUsuario,
    actualizarEstadoId
  };