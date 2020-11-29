


function spel() {
var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];
var randomspellen = spellen[Math.floor(spellen.length*Math.random())];
document.write('<h2>' + randomspellen + '</h2>');
}
spel();
