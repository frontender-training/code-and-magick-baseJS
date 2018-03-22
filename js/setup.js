'use strict';

var DataWizards = {
  COUNT: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
};

var userDialog = document.querySelector('.setup');
var setupSimilarWizards = document.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

renderWizards();
openPopup();

// Клонируем шаблон волшебника
function renderWizards() {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
}

// Генерируем шаблон волшебника
function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

// Функция, возвращающаая массив объектов магов
function generateWizards() {
  var shuffleWizardNames = shuffleArray(DataWizards.NAMES);
  var shuffleWizardSurnames = shuffleArray(DataWizards.SURNAMES);

  var wizards = [];
  for (var i = 0; i < DataWizards.COUNT; i++) {
    wizards.push({
      names: shuffleWizardNames[i],
      surnames: shuffleWizardSurnames[i],
      coatColor: getRandomElement(DataWizards.COAT_COLOR),
      eyesColor: getRandomElement(DataWizards.EYES_COLOR)
    });
  }
  return wizards;
}

// Функция, открывающая окно с похожими волшебниками
function openPopup() {
  userDialog.classList.remove('hidden');
  setupSimilarWizards.classList.remove('hidden');
}

// Функция, возвращающая новый массив из старого в случайном порядке
function shuffleArray(array) {
  var mixedArray = array.slice();
  for (var i = mixedArray.length - 1; i > 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var tempValue = mixedArray[i];
    mixedArray[i] = array[randomIndex];
    mixedArray[randomIndex] = tempValue;
  }
  return mixedArray;
}

// Функция, возвращающая случайный элемемент массива
function getRandomElement(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  }
  return randomElement;
}
