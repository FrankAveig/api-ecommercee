const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"..."
    },
    img:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.suzukijember.com%2Fgallery%2Fgambar_product%2F%3FMA&psig=AOvVaw29KG-vfntzAlLrOnBXKet4&ust=1667063204088000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNCNh8S0g_sCFQAAAAAdAAAAABAb'
    },
    price:{
        type:Number,
        required:true,
    },
    uploader: {
        type: mongoose.ObjectId,
        ref: "User",
      }

})

mongoose.model("Product", ProductSchema, "collectionProduct");
