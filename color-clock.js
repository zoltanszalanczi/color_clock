function colorClock(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var hexColor = '#' + hours + minutes + seconds;

  if (hours <= 9) {
    hours = '0' + hours;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }

  var clockFace = hours + ':' + minutes + ':' + seconds;

  document.getElementById('clock').innerHTML = clockFace;

  setTimeout(function() {
  colorClock();}
, 1000);

  document.body.style.background = hexColor;
}

colorClock();