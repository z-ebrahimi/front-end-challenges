const numbers = [-99, -1, 0, 1, 2, 999];
console.log(numbers);


const filtered_array = numbers.filter(function (value) {
  return value % 2 == 0 ;
});
console.log(filtered_array);
