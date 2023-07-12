//1.
let article = prompt("متن مقاله را بنویسید...")


//2.
article = article.trim();


//3.
let lead = article.slice(0, 50) + "...";
document.getElementById("app").innerHTML = `<p>${lead}</p>`


//4.
article_array = article.split(" ");
console.log("article.array:",article_array)


//5.
console.log("article.length:", article.length);







