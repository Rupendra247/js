import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoutes = Router();

productRoutes
  .route("/") //localhost;8000/product
  .post(async (req, res, next) => {
    try {
      let result = await Product.create(req.body);
      res.status(200).json({
      success:true,
      message:"product created successfullty",
      result: result,
    })  
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  })
  .get((req, res, next) => {
    res.json("get product");
    console.log(req.body);
  })
  .put((req, res, next) => {
    res.json("put product");
    res.json("create put product");
  })
  .delete((req, res, next) => {
    res.json("delet product");
    res.json("create delete product");
  });

export default productRoutes;
