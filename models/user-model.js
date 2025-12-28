const mongoose= require('mongoose');

const userSchema=({
    fullname:String,
    email:String,
    password:String,
    cart:{
        type:Array,
        default:[]
    },
    isadmin:Boolean,
    orders:Array,
    contact:Number,
    picture:String,

})

mongoose.model("user",userSchema);
