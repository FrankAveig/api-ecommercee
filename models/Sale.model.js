
const mongoose = require("mongoose");


const SaleSchema = new mongoose.Schema({
    
    total: {
      type: Number,
      required: true,
    },
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    products: {
      type: [
        {
          type: mongoose.ObjectId,
          ref: "Products",
        },
      ],
    },
  },

);

mongoose.model('Sale',SaleSchema,'collectionnSales');