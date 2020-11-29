var optel = document.getElementById('optel');
var aftrek = document.getElementById('aftrek');
var vermeen = document.getElementById('vermeen');
var deel =  document.getElementById('deel');

var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optel1() {
for (var i = 0; i <10; i++) {
  var total1 = arrayEen[i] + arrayTwee[i];
  optel.innerHTML = optel.innerHTML + arrayEen[i] + '+' + arrayTwee[i] + '=' + total1 + '<br>';
}
}
optel1();
function aftrek1() {
  for (var i = 0; i <10; i++) {
  var total2 = arrayTwee[i] - arrayEen[i];
  aftrek.innerHTML = aftrek.innerHTML + arrayTwee[i] + '-'+ arrayEen[i] + '=' + total2 + '<br>';
}
}
aftrek1();
function vermeen1() {
  for (var i = 0; i <10; i++) {
  var total3 = arrayEen[i] * arrayTwee[i];
  vermeen.innerHTML = vermeen.innerHTML + arrayEen[i] + 'x'+ arrayTwee[i] + '=' + total3 + '<br>';
}
}
vermeen1();
function deel1() {
  for (var i = 0; i <10; i++) {
  var total4 = arrayTwee[i] / arrayEen[i];
  deel.innerHTML = deel.innerHTML + arrayTwee[i] + ':'+ arrayEen[i] + '=' + total4 + '<br>';
}
}
deel1();
