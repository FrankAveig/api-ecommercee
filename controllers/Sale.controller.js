const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");


/**
 * It creates a new sale, populates the products and buyer fields, and returns the populated sale.
 */
const nuevaVenta = async (req, res) => {
  try {
    if (req.user.type !== "admin") {
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


/**
 * It returns all the sales in the database, with the buyer's name, the product's name, price and the
 * uploader's name.
 * </code>

 */
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


/**
 * It returns all the sales of a user, and the products that were sold in each sale.
 * </code>
 */
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



  /**
   * It takes the id of the sale and the state of the sale from the body of the request and updates the
   * state of the sale in the database.
   * </code>

   */
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