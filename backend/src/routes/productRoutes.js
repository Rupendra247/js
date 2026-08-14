import { Router } from "express";

let productRoutes = Router();

productRoutes
  .route("/") //localhost;8000/product
  .post((req, res, next) => {
    res.json("create product");
    // res.json(req.body);
    console.log(req.body); // to print body
    // console.log(req.query); // to print the input given in postman with paras query method
    console.log("this gandu post request");
  })
  .get((req, res, next) => {
    res.json("get product");
  })
  .put((req, res, next) => {
    res.json("put product");
  })
  .delete((req, res, next) => {
    res.json("delet product");
  });

export default productRoutes;
