const findAge = (age) => {
  if (age < 18) {
    return "you are child";
  } else if (age > 18 && age < 60) {
    return "you are audlt";
  } else {
    return "you are old age ";
  }
};
const number = findAge(20);
console.log(number);

// 0 t0 18 child
// 18 60 adult
// 60
