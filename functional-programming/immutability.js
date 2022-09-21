const obj = { name: "Gabriel" };

function clone(obj) {
  return { ...obj };
}
function unpdateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Ezequiel";
  return obj2;
}

console.log("Obj", obj);
console.log("Obj after name change", unpdateName(obj));
