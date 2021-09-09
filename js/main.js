var transportCost = 9433.34 * 500;
var hotelCost = 9433.34 * 250;
var entertainmentCost = 10354.03 * 120;
var total = transportCost + hotelCost + entertainmentCost;


alert("Welcome to travel calculator.");
var buget = Number(prompt("Enter your buget please...", 0));

if (buget >= total) {
  alert("Oq yo’l, Alisher!");
}else if (total >= buget) {
  alert("Alisher, ozgina sabr qilish kerak bo’lar ekan.");
}
console.log(total);