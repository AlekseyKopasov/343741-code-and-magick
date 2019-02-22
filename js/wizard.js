'use strict';

window.Wizard = (function () {

  var Wizard = function (wizard) {
    this.name = wizard.name;
    this.coatColor = wizard.colorCoat;
    this.eyesColor = wizard.colorEyes;
    this.fireballColor = wizard.colorFireball;
  };

  Wizard.COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  Wizard.EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  Wizard.FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  Wizard.changeColor = function (arrayColors, currentColor) {
    return arrayColors[(arrayColors.indexOf(currentColor) + 1) % arrayColors.length];
  };

  Wizard.prototype.setCoatColor = function () {
    this.coatColor = this.constructor.changeColor(this.constructor.COAT_COLORS, this.coatColor);
    this.onChange();
    return this.coatColor;
  };

  Wizard.prototype.setEyesColor = function () {
    this.eyesColor = this.constructor.changeColor(this.constructor.EYES_COLORS, this.eyesColor);
    this.onChange();
    return this.eyesColor;
  };

  Wizard.prototype.setFireballColor = function () {
    this.fireballColor = this.constructor.changeColor(this.constructor.FIREBALL_COLORS, this.fireballColor);
    return this.fireballColor;
  };

  return Wizard;

})();
