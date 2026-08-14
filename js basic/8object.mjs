// let info = ["nurse", 30 , false , 60];
let info = {
    name: "nital",
    age: 30,
    isMarried: false,
    weight: 60,
};

console.log(info.name) ;
info.name = "rup";
console.log(info.name);

info.country = "nepal";
console.log(info);

delete info.weight;
console.log(info)