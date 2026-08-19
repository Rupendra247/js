import { Router } from "express";

let productRoutes = Router();

productRoutes
  .route("/") //localhost;8000/product
  .post((req, res, next) => {
    res.json("create post product");
    // res.json(req.body);
    // console.log(req.body); // to print body
    // console.log(req.params);
    console.log("this gandu post request");
    console.log(req.query); // to print the input given in postman with paras query method
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
