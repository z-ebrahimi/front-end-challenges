function checkItemsLength (items) {
  const items_length = items.map (function(value ,index, array) {
    return value.length;
  });
  return items_length
}

const items1 = ["salam khubi?", "merci"];
const items1_length = checkItemsLength (items1);
console.log(items1_length)


const items2 = ["a", "ab", "abc", "", "9999"];
const items2_length = checkItemsLength (items2);
console.log(items2_length)
