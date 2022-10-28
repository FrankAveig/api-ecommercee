const mongoose = require("mongoose");
const Sale = mongoose.model("Sale");

const nuevaVenta = async (req, res) => {
  try {
    //Creamos la venta con lo que viene del body
    const sales = new Sale({ ...req.body, buyer: req.user.idUser });

    const resp = await sales.save();

    return res.status(201).json({
      mensaje: "Venta creada",
      detalles: await resp.populate({"buyer": "name","products":"name" })
    });
  } catch (e) {
    return res.status(400).json({ mensaje: "Error", detalles: e.message });
  }
};

const verVentas = async (req, res) => {
  try {
  
    const sales = await Sale.find()
      .populate("buyer", "name")
      .populate({
        path: "products",
        select: {
          name: true,
          price: true,
          uploader: true,
        },
        populate: {
          path: "uploader",
          select: {
            name: true,
          },
        },
      }); 

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

module.exports = {
  nuevaVenta,
  verVentas,
};