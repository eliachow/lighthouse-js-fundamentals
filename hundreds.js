function howManyHundreds(num) {
  let bottles = num / 100;
  return Math.floor(bottles);
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
