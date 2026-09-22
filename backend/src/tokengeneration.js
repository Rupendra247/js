import jwt from "jsonwebtoken";
let details = {
        id:123,
};

let secretkey = "sunway12";
let expiryInfo = {
    expiresIn:"30m",
};
let token = jwt.sign(details,secretkey,expiryInfo)
console.log(token)
