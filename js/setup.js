'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

// Открываем окно с похожими персонажами
var userDialog = document.querySelector('.setup');
var similarWizards = document.querySelector('.setup-similar');
userDialog.classList.remove('hidden');
similarWizards.classList.remove('hidden');

// Открываем окно с похожими персонажами
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];

  similarListElement.appendChild(wizardElement);
}
