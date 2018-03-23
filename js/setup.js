'use strict';

// Module3-task1
var DATA_WIZARDS = {
  COUNT: 4,
  NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

// Module4-task1
var KEYCODE = {
  ENTER: 13,
  ESC: 27
};

// Module4-task1
var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');   // кнопка открытия окна
var userDialogClose = userDialog.querySelector('.setup-close'); // кнопка закрытия окна

var userInputName = userDialog.querySelector('.setup-user-name');

var changeCoatColor = userDialog.querySelector('.wizard-coat');
var changeEyesColor = userDialog.querySelector('.wizard-eyes');
var changeFireballColor = userDialog.querySelector('.setup-fireball-wrap');

// Module3-task1
var setupSimilarWizards = document.querySelector('.setup-similar');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// Module4-task1
changeCoatColor.addEventListener('click', function (evt) {
  changeCoatColor.style.fill = DATA_WIZARDS.COAT_COLOR[counter(DATA_WIZARDS.COAT_COLOR)];
});

changeEyesColor.addEventListener('click', function (evt) {
  changeEyesColor.style.fill = DATA_WIZARDS.EYES_COLOR[counter(DATA_WIZARDS.EYES_COLOR)];
});

changeFireballColor.addEventListener('click', function (evt) {
  changeFireballColor.style.background = DATA_WIZARDS.FIREBALL_COLOR[counter(DATA_WIZARDS.FIREBALL_COLOR)];
});

// Счетчик
var counter = makeCounter();

function makeCounter() {
  var count = 1;

  return function (array) {
    if (count >= array.length) {
      count = 0;
      return count++;
    }
    return count++;
  };
}

// Валидация формы
userInputName.addEventListener('invalid', function (evt) {
  if (userInputName.validity.tooShort) {
    userInputName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userInputName.validity.tooLong) {
    userInputName.setCustomValidity('Имя не должно превышать из 25-ти символов');
  } else if (userInputName.validity.valueMissing) {
    userInputName.setCustomValidity('Введите имя персонажа');
  } else {
    userInputName.setCustomValidity('');
  }
});

// Валидация инпута для edge
userInputName.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

// Закрываем окно с настройками персонажа по клику на кнопку Enter
userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE.ENTER) {
    closeSettingsWizard();
  }
});

// Закрываем окно с настройками персонажа по клику на крестик
userDialogClose.addEventListener('click', function () {
  closeSettingsWizard();
});


// Открываем окно с настройками персонажа по клику на иконку
userDialogOpen.addEventListener('click', function () {
  openSettingsWizard();
  showSimilarWizards();
});

// Открываем окно с настройками персонажа по клику на кнопку Enter
userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE.ENTER) {
    openSettingsWizard();
    showSimilarWizards();
  }
});

// Закрываем окно с настройками персонажа по клику на клавишу ESC
function onUserDialogEscPress(evt) {
  if (evt.keyCode === KEYCODE.ESC) {
    closeSettingsWizard();
  }
}

// Функция, открывающая окно с похожими волшебниками и создающая функцию для закрытия окна с клавиатуры
function openSettingsWizard() {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onUserDialogEscPress);
}

// Функция, закрывающая окно с похожими волшебниками и удаляющую функцию для закрытия окна с клавиатуры
function closeSettingsWizard() {
  if (document.activeElement !== userInputName) {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onUserDialogEscPress);
  }
}

// Module3-task1
// Функция, открывающая окно с похожими волшебниками
function showSimilarWizards() {
  setupSimilarWizards.classList.remove('hidden');
}

renderWizards();

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
  var shuffleWizardNames = shuffleArray(DATA_WIZARDS.NAMES);
  var shuffleWizardSurnames = shuffleArray(DATA_WIZARDS.SURNAMES);

  var wizards = [];
  for (var i = 0; i < DATA_WIZARDS.COUNT; i++) {
    wizards.push({
      names: shuffleWizardNames[i],
      surnames: shuffleWizardSurnames[i],
      coatColor: getRandomElement(DATA_WIZARDS.COAT_COLOR),
      eyesColor: getRandomElement(DATA_WIZARDS.EYES_COLOR)
    });
  }
  return wizards;
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
