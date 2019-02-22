'use strict';
(function () {
  var WIZARD_QUANTITY = 4;

  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var createWizardElement = function (wizards) {
    var wizardsLength = wizards.length > WIZARD_QUANTITY ? WIZARD_QUANTITY : wizards.length;
    var fragment = document.createDocumentFragment();

    wizards.slice(0, wizardsLength).forEach(function (element) {
      fragment.appendChild(renderWizard(element));
    });

    similarListElement.innerHTML = '';
    similarListElement.appendChild(fragment);
    userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.renderWizards = {
    create: createWizardElement
  };
})();
