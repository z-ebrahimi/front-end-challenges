const isEven = (number) => {
  const result = number % 2 == 0;
  return result;
};

const number1 = isEven(77);
const number2 = isEven(78);
console.log(number1)
console.log(number2)