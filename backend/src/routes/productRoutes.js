import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoutes = Router();

productRoutes
  .route("/")
  .post(async (req, res, next) => {
    try {
      let product = new Product(req.body);
      let savedProduct = await product.save();
      res.status(201).json({
        success: true,
        message: "product created successfully",
        data: savedProduct,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  })
  .get((req, res, next) => {
    res.json({
      success: true,
      message: "user created successfully",
    });
  });

productRoutes
  .route("/:id")
  .post((req, res, next) => {
    res.json({
      success: true,
      message: "user created successfully",
    });
  })
  .get((req, res, next) => {
    res.json({
      success: true,
      message: "user created successfully",
    });
  })
  .put((req, res, next) => {
    res.json({
      success: true,
      message: "user created successfully",
    });
  })
  .delete((req, res, next) => {
    res.json({
      success: true,
      message: "user created successfully",
    });
  });

export default productRoutes;
