const express = require('express');
const app = express();
const port = 3000;

const cookieParser=require("cookie-parser");
const path=require("path");
const db=require("./config/mongoose-connnections")
const ownersRouter=require("./routes/ownersRouter");
const productsRouter=require("./routes/productsRouter");
const usersRouter=require("./routes/usersrouter");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

app.use("/owners",ownersRouter)
app.use("/users",usersRouter)
app.use("/products",productsRouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


