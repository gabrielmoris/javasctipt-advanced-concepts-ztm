// Currying: conversion of a several-arguments-function in a one-argument-function
const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;

const multiplyByThree = curriedMultiply(3);
console.log(multiplyByThree(5)); //15 (3*5)

//Partial Application: similar to currying but partially
const multiplyMore = (a, b, c) => a * b * c;
const partialMultiplyMoreByThree = multiplyMore.bind(null, 5); //==>bind(thisArg, arg1, arg2, /* …, */ argN)
console.log(partialMultiplyMoreByThree(5, 10)); //250
