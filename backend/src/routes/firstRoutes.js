import { Router } from "express";

let firstRoute = Router();

firstRoute
  .route("/")
  .post((req, res, next) => {
    console.log("i am post method"); // for printing in terminal
    res.json("i am gandu  post method");
  })

  .get((req, res, next) => {
    res.json("i am gandu get method");
  })

  .put((req, res, next) => {
    res.json("i am gandu put method");
  })
  .delete((req, res, next) => {
    res.json("i am gandu delete method");
  });

export default firstRoute;
