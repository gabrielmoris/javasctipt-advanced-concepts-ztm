export const fight2 = (char1, char2) => {
  const attack1 = Math.floor(Math.random() * char1.length);
  const attack2 = Math.floor(Math.random() * char2.length);
  return attack1 > attack2
    ? `${char1} wins in ES6 Module`
    : `${char2} wins in ES6 Module`;
};
