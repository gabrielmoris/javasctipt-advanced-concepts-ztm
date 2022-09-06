function a() {
  let grandpa = "grandpa Abe";
  return function b() {
    let father = "father Homer";
    return function c() {
      let son = "son Bart";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a()()());

const one = a();
