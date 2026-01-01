const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// Test route
router.get("/", (req, res) => {
  res.send("Owner route working");
});

// Create owner (DEV only)
router.post("/create", async (req, res) => {
  try {
    // ❗ allow only in development
    if (process.env.NODE_ENV !== "development") {
      return res
        .status(403)
        .send("You are not allowed to create owner");
    }
    console.log(ownerModel);

    // check if owner already exists
    const owners = await ownerModel.find();
    if (owners.length > 0) {
      return res
        .status(503)
        .send("Owner already exists");
    }

    const { fullname, email, password } = req.body;

    const createdOwner = await ownerModel.create({
      fullname,
      email,
      password, // ⚠️ hash later
    });

    res.status(201).json(createdOwner);

  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.get("/admin",function(req,res){
 let success= req.flash("success")
  res.render("createproducts",{success});

})

module.exports = router;
