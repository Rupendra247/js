let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpYXQiOjE3OTAwNTMyMjAsImV4cCI6MTc5MDA1NTAyMH0.fUKikZw4_ZjejCCxyPa6noDM33v1ZgfCChew8jWPwOE"
import jwt from "jsonwebtoken";
let value =  jwt.verify(token, "sunway12");
console.log(value)
