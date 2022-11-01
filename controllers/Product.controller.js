
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

const nuevoProducto = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(403).json({  mensaje: "Error",detalles: "Sólo un admin puede crear un nuevo producto",
          });
      }
      
      const producto = new Product({...req.body, uploader: req.user.idUser});
  
      const resp = await producto.save();
  
      return res.status(201).json({mensaje: "Producto creado",detalles: await resp.populate("uploader", "name",),
      });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };



  const verProductos = async (req, res) => {
    try {
      const products = await Product.find().populate("uploader", "nombre");
      if (!products.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Colección vacía" });
      return res.status(200).json({ mensaje: "Productos encontrados", detalles: products });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


  const verMisProductosCreados = async (req, res) => {
    try {
      if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
      }
      
      const products = await Product.find({uploader: req.user.idUser}).populate("uploader", "nombre");
      if (!products.length)
        return res.status(404).json({ mensaje: "Error", detalles: "Esste usuario no ha creado productos" });
      return res.status(200).json({ mensaje: "Productos encontradas", detalles: products });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


  const eliminarProductoPorId = async (req, res) => {
    try {
       if (req.user.type !== "admin") {
            return res.status(400).json({mensaje: "Error",detalles: "No tienes permiso para ver esto",});
        }
      const { id } = req.params;
      if (id.length !== 24)
        return res.status(400).json({ mensaje: "Error", detalles: "ID no válido" });
      const products = await Product.findById(id);
      if (!products)
        return res.status(404).json({ mensaje: "Error", detalles: "Producto no encontrado" });
      const eliminado = await Product.findByIdAndDelete(id);
      return res.status(200).json({ mensaje: "Producto eliminado", detalles: eliminado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


const actualizarProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;

    const actualizado = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).populate("uploader", "nombre");
    return res
      .status(200)
      .json({ mensaje: "Producto actualizado", detalles: actualizado });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

module.exports = {
    nuevoProducto,
    verProductos,
    eliminarProductoPorId,
    actualizarProductoPorId,
    verMisProductosCreados,
};