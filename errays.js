  var alledagenweek = ['maandag', 'dinsdag','woensdag', 'donderdag','vrijdag', 'zaterdag', 'zondag'];

  var text = document.getElementById('text');
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');
  var text4 = document.getElementById('text4');
  var text5 = document.getElementById('text5');

  for (var i = 0; i < alledagenweek.length; i++) {
    text.innerHTML += alledagenweek[i];
  }
  for (var i = 0; i <4; i++) {
    text1.innerHTML += alledagenweek[i];
  }
  for (var i = 5; i <=6; i++) {
    text2.innerHTML += alledagenweek[i];
  }
  for (var i = alledagenweek.length ; i-- > 0 ; ){
    text3.innerHTML += alledagenweek[i];
  }
  for (var i = 5; i-- > 0 ; ){
    text4.innerHTML += alledagenweek[i];
  }
  for (var i = 7; i-- >= 6 ; ){
    text5.innerHTML += alledagenweek[i];
  }
