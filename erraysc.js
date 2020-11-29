var tafels = document.getElementById('tafels');
var arrayEen = [2,4,6,8];

function tafel1() {
  for (var i = 0; i < arrayEen.length; i++) {
    for (var a = 1; a <=10; a++) {
      var total3 = [a] * arrayEen[i];
      tafels.innerHTML = tafels.innerHTML + [a] + 'x'+ arrayEen[i] + '=' + total3 + '<br>';
}
}
}
tafel1();
