
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
          ref: "Product",
        },
      ],
    },
    state:{
        type:String,
        enum:[
            'solicitado',
            'confirmado',
            'enviado'
        ],
        default:'solicitado',
        required:true,
    }
  },
  {
    timestamps: true,
  }
);

mongoose.model('Sale',SaleSchema,'collectionnSales');