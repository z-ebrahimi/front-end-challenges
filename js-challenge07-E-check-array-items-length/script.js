const greeting = ["salam khubi?", "merci"];


const filtered_array = greeting.map(function (value, index, array) {
  return value.length;
});
console.log(filtered_array);
