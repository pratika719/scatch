const mongoose= require('mongoose');

const productSchema=({
    image:String,
    name:String,
    price: Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
    

})

mongoose.model("product",productSchema);
