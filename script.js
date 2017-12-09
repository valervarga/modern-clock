(function() {
  var handHours = document.querySelector('.hand-hours');
  var handMinutes = document.querySelector('.hand-minutes');
  var handSeconds = document.querySelector('.hand-seconds');

  function moveTime() {
    var hours = new Date().toLocaleString([], { hour12: true, hour: 'numeric' }).slice(0, 2);
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var hoursDegrees = ((hours / 12) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + 90;
    var secondsDegrees = ((seconds / 60) * 360) + 90;

    handHours.style.transform = 'rotate('+ hoursDegrees +'deg)';
    handMinutes.style.transform = 'rotate('+ minutesDegrees +'deg)';
    handSeconds.style.transform = 'rotate('+ secondsDegrees +'deg)';

  }
  moveTime();
  setInterval(moveTime, 1000);
})();
