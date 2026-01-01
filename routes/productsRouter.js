const express=require("express");
const router=express.Router();
const upload=require("../config/multer-config")
const productModel=require("../models/product-model");


router.post("/create", upload.single("image"), async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    const productData = {
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor
    };

    // only add image if user uploaded one
    if (req.file) {
      productData.image = req.file.buffer;
    }

    await productModel.create(productData);

    req.flash("success", "Product created successfully");
    res.redirect("/owners/admin");

  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports=router;

