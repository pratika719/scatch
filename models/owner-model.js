const mongoose= require('mongoose');

const ownerSchema=({
    fullname:{type:String,
        minLength:3,
        trim:true},
    email:String,
    password:String,
    products:{type:Array,
        default:[]},
    gstnumber:String,
    picture:String,
    

})

module.exports=mongoose.model("owner",ownerSchema);
