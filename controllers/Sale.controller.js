const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");


const nuevaVenta = async (req, res) => {
  try {
    if (req.user.type !== "admin" || req.user.type !== "customer" ) { 
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
    const sales = new Sale({ ...req.body, buyer: req.user.idUser });

    const resp = await sales.save();

    return res.status(201).json({
      mensaje: "Venta creada",
      detalles: await (await resp.populate({path:'products',select:{name:true,price:true}})).populate("buyer", "name")
    });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};


const verVentas = async (req, res) => {
  try {
    if (req.user.type !== "admin") {
        return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
      }
    const sales = await Sale.find()
      .populate("buyer", "name")
      .populate({
        path: "products",
        select: {
          name: true,
          price: true,
        }}); 

    if (!sales.length)
      return res
        .status(404)
        .json({ mensaje: "Error", detalles: "Colección vacía" });
    return res
      .status(200)
      .json({ mensaje: "Ventas encontradas", detalles: sales });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const filtrarVentasUsuario = async (req, res) => {
    
    try {
      
      const buyer = req.user.idUser
      const compras = await Sale.find({buyer}).populate({ path: "products",
      select: {
        name: true,
        price: true,
      }});
      if (!compras.length)
        return res.status(404).json({ mensaje: "Error", detalles: "compras no encontradas" });
      return res.status(200).json({ mensaje: "Compras encontradas", detalles: compras });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  }


  const actualizarEstadoId = async (req, res) => {
    if (req.user.type !== "admin") {
      return res.status(400).json({mensaje: "Error", detalles: "No tienes permiso para ver esto",});
    }

    try {
      const { id } = req.params;
  
      const actualizado = await Sale.findByIdAndUpdate(
        id,
        { $set:{state: req.body }},
        { new: true }
      );
      return res
        .status(200)
        .json({ mensaje: "Estado de la venta actualizado", detalles: actualizado });
    } catch (e) {
      return res.status(400).json({ mensaje: "Error", detalles: e.message });
    }
  };


module.exports = {
  nuevaVenta,
  filtrarVentasUsuario,
  verVentas,
  actualizarEstadoId
};