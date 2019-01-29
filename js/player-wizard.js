'use strict';

window.player = (function () {

  var playerCoatElement = document.querySelector('.wizard-coat');
  var playerEyesElement = document.querySelector('.wizard-eyes');
  var playerFireballElement = document.querySelector('.setup-fireball');
  var playerName = document.querySelector('.setup-user-name');

  var player = new window.Wizard({name: playerName.value});

  playerCoatElement.addEventListener('click', function () {
    playerCoatElement.style.fill = player.setCoatColor();
  });

  playerEyesElement.addEventListener('click', function () {
    playerEyesElement.style.fill = player.setEyesColor();
  });

  playerFireballElement.addEventListener('click', function () {
    playerFireballElement.style.backgroundColor = player.setFireballColor();
  });

  return player;
})();
