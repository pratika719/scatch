const mongoose= require('mongoose');

const ownerSchema=({
    fullname:String,
    email:String,
    password:String,
    products:Array,
    gstnumber:String,
    picture:String,
    

})

mongoose.model("owner",ownerSchema);
