'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: WIZARD_NAMES[0],
    surname: WIZARD_SURNAMES[0],
    coatColor: COAT_COLOR[0],
    eyesColor: EYES_COLOR[0]
  },
  {
    name: WIZARD_NAMES[1],
    surname: WIZARD_SURNAMES[1],
    coatColor: COAT_COLOR[1],
    eyesColor: EYES_COLOR[1]
  },
  {
    name: WIZARD_NAMES[2],
    surname: WIZARD_SURNAMES[2],
    coatColor: COAT_COLOR[2],
    eyesColor: EYES_COLOR[2]
  },
  {
    name: WIZARD_NAMES[3],
    surname: WIZARD_SURNAMES[3],
    coatColor: COAT_COLOR[3],
    eyesColor: EYES_COLOR[3]
  }
];

// Открываем окно с похожими персонажами
var userDialog = document.querySelector('.setup');
var similarWizards = document.querySelector('.setup-similar');
userDialog.classList.remove('hidden');
similarWizards.classList.remove('hidden');

// Открываем окно с похожими персонажами
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// Генерируем и клонируем шаблон волшебника
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
