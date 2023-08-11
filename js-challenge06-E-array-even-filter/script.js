function filterEvenNumbers(numbers) {
  const even_numbers = numbers.filter(function (value) {
    return value % 2 == 0;
  });
  return even_numbers;
}

const numbers1 = [-99, -1, 0, 1, 2, 999];
const filtered_numbers1 = filterEvenNumbers(numbers1);
console.log(filtered_numbers1);


//or
const numbers2 = [1, 6, 77, 3, -5, 999, 56, 0, -34];
console.log(filterEvenNumbers(numbers2));
