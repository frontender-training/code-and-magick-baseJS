'use strict';

window.renderStatistics = function (ctx, names, times) {
  var startX = 100;
  var startY = 10;
  var widthRect = 420;
  var heightRect = 270;
  var lenghtShadow = 10;
  var margin = 40;

  var colorRect = ['rgba(0, 0, 0, 0.7)', 'rgb(256, 256, 256)'];
  var text = ['Ура вы победили!', 'Список результатов: '];

  drawRect(startX + lenghtShadow, startY + lenghtShadow, widthRect, heightRect, colorRect[0]);
  drawRect(startX, startY, widthRect, heightRect, colorRect[1]);
  writeText(text);
  drawHistogram(times, names);

  // Рисуем прямоугольник
  function drawRect(axisX, axisY, width, height, fillColor) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(axisX, axisY, width, height);
  }

  // Выводим надпись на облаке
  function writeText(textArray) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    for (var i = 0; i < textArray.length; i++) {
      ctx.fillText(textArray[i], startX + margin, startY + (i + 1) * 25);
    }
  }

  // Рисуем гистограмму
  function drawHistogram(arrayTimes, arrayNames) {
    var barWidth = 40;
    var indent = 90;
    var indentName = 20;
    var indentTime = 10;
    var histogramHeight = 150;
    var paddingTop = 60;
    var step = histogramHeight / (getMaxValue(times) - 0);

    var initialX = startX + margin;
    var initialY = startY + histogramHeight + indentName + indentTime + paddingTop;

    for (var i = 0; i < arrayTimes.length; i++) {
      var barHeight = arrayTimes[i] * step;
      var getY = initialY - arrayTimes[i] * step;
      var getX = initialX + indent * i;

      ctx.fillStyle = fillBarColor(names[i]);
      ctx.fillRect(getX, getY, barWidth, barHeight);

      ctx.fillText(arrayNames[i], getX, initialY + indentName);
      ctx.fillText(arrayTimes[i].toFixed(0), getX, getY - indentTime);
    }
  }

  // Вспомогательные функции
  // Ищем наихудший результат
  function getMaxValue(array) {
    var max = -1;
    for (var i = 0; i < array.length; i++) {
      var value = array[i];
      if (value > max) {
        max = value;
      }
    }
    return max;
  }

  // Вычисляем цвет бара в зависимости от имени игрока
  function fillBarColor(namePlayer) {
    var randomOpacity = Math.random().toFixed(2);
    if (namePlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    }
  }
};
