'use strict';

// Секция констант
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;

// Секция функций
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) - min);
};

var getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};

var generateWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_LASTNAMES),
    coatColor: getRandomElement(WIZARD_COATS_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  };
};

var generateWizards = function () {
  var similarWizards = [];
  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    similarWizards.push(generateWizard());
  }
  return similarWizards;
};

// Секция основной логики файла
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

userDialog.querySelector('.setup-similar').classList.remove('hidden');
renderWizards(generateWizards(WIZARD_QUANTITY));
