//THIS is the object that the function is a property of.
//Why use this:
//1: gives methods access to their object

const obj = {
  name: "Juan Francisco",
  sing() {
    return `dale a tu cuerpo alegria ${this.name}`;
  },
  singAgain() {
    return this.sing() + "!!!";
  },
};

// console.log(obj.singAgain());

//2. execute same code for multiple objects

function importantPerson() {
  console.log(this.name + "!");
}

const name = "Juan Carlos I";
const obj1 = {
  name: "Felipino",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "Jackie Chan",
  importantPerson: importantPerson,
};

// importantPerson(), obj1.importantPerson(), obj2.importantPerson();
/////////////////////////////////////////////////////////////////////////////////////////

//a and b (this) refers to the global obj, c refers tot he object where it is called (hi:)
const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
// a();
/////////////////////////////////////////////////////////////////////////////////////////

const obj3 = {
  name: "Casimiro",
  sing() {
    console.log("in sing()", this);
    //in anotherFunction(), this is not lexically scoped, it doesnt depend where it is, it depends where is called!
    //here this will refer then to the global object unless I use an arrow
    //function, bind this to it or make a reference (put it in a variable)
    var anotherFunction = function () {
      console.log("in sing.anotherFunction()", this);
    };
    return anotherFunction.bind(this);
    // anotherFunction();
  },
};
