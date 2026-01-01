const express=require("express");
const router=express.Router();
const isLoggedin=require("../middlewares/isLoggedIn");
const productModel=require("../models/product-model");
const userModel=require("../models/user-model");

router.get("/",function (req,res){
    let error=req.flash("error");


res.render("index",{error,loggedin:false});

});


router.get("/shop",isLoggedin, async function(req,res){
 let product= await productModel.find()
 let success=req.flash("success")
    res.render("shop",{product,success})
})
router.get("/cart", isLoggedin, async function (req, res) {
    try {
        console.log("REQ USER:", req.user.email);

        const user = await userModel
            .findOne({email:req.user.email})
            .populate("cart");

            console.log(user)

        if (!user) {
            console.log("USER NOT FOUND IN DB");
            return res.redirect("/login");
        }

        let bill = 0;

        if (user.cart.length > 0) {
            user.cart.forEach(item => {
                bill += Number(item.price) - Number(item.discount || 0);
            });
            bill += 20;
        }

        res.render("cart", { user, bill });

    } catch (err) {
        res.send(err.message);
    }
});




router.get("/addtocart/:productid",isLoggedin, async function(req,res){
 let user= await userModel.findOne({email:req.user.email});
user.cart.push(req.params.productid)
await user.save();
req.flash("success","Added to cart")
res.redirect("/shop");

})
module.exports=router;



