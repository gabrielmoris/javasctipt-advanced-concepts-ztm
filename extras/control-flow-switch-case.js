//It allows us to responds depending on the different inputs

const moveCommand = (direction) => {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you found a troll";
      break;
    case "back":
      whatHappens = "you run away to home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you found a dragon";
      break;
    default:
      whatHappens = "Please write a valid direction";
  }
  return whatHappens;
};

console.log(moveCommand("right"));
console.log(moveCommand(121212));
