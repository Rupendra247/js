let names = ["ss", "yy", "xx"];
console.log(names);
console.log(names[1]);

names[0] = "kool";
console.log(names)

delete names[1]
console.log(names)

// after deleting the array index as the space is not gone it shows as empty 
// but in python whole index space is deleted and affect other value