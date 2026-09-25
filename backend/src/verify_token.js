import jwt from "jsonwebtoken";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpYXQiOjE3OTAxNzUwOTIsImV4cCI6MTc5MDE3Njg5Mn0.H7D5QIk3D7H9wN0caRMXBdI-UreEnURa7yscPdYDPjU"

let value =  jwt.verify(token, "sunway12");
console.log(value)
