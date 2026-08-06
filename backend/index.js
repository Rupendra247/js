// make express applicaton
// attach port to it

import express from "express";

let app = express();

app.listen(8000, () => {
  console.log("application runing at port 8000");
});

/*
database

crud

 c = create   (post) 
 r = read     (get) 
 u = upate    (put/patch)
 d = delete   (delete)sss



 making api means

defining response for each reqest 

 */
