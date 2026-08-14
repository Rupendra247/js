// sunday saturday off day

const allOne = (day) => {
  if (day == "sunday" || day == "saturday") {
    return "offday";
  } else {
    return "workday";
  }
};

const week = allOne("sunday");
console.log(week);
