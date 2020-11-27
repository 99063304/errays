var tafels document.getElementById('tafels');

function tafel1() {
  for (var i = 0; i <10; i++) {
  var total3 = arrayEen[i] * arrayTwee[i];
  vermeen.innerHTML = vermeen.innerHTML + arrayEen[i] + 'x'+ arrayTwee[i] + '=' + total3 + '<br>'
}
}
tafel();
