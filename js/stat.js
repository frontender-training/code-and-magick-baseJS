'use strict';

window.renderStatistics = function (ctx, names, times) {

  // Рисует тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Рисует облако
  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Выводим надпись на облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

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

  // Рисуем гистограмму
  var barWidth = 40;
  var initialX = 120;
  var initialY = 245;
  var indent = 90;
  var indentName = 20;
  var indentTime = 15;

  var histogramHeight = 150;
  var step = histogramHeight / (getMaxValue(times) - 0);

  // Вычисляем цвет бара в зависимости от имени игрока
  function fillBarColor(namePlayer) {
    var randomOpacity = Math.random().toFixed(2);
    if (namePlayer === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    }
  }

  for (var i = 0; i < times.length; i++) {
    var barHeight = times[i] * step;
    var getY = initialY - times[i] * step;
    var getX = initialX + indent * i;

    ctx.fillStyle = fillBarColor(names[i]);
    ctx.fillRect(getX, getY, barWidth, barHeight);

    ctx.fillText(names[i], getX, initialY + indentName);
    ctx.fillText(times[i].toFixed(0), getX, getY - indentTime);
  }
};
