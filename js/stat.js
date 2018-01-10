'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time.toFixed(0);
    }
  }

  var histogramWidth = 150;
  var step = histogramWidth / (max - 0);

  ctx.fillRect(120, 80, times[0] * step, 40);
  ctx.fillRect(120, 170, times[1] * step, 40);
  ctx.fillRect(120, 260, times[2] * step, 40);
  ctx.fillRect(120, 350, times[2] * step, 40);

};

// Алгоритм решения
// 1. Создаем файл js/stat.js в учебном проекте и подключаем его к нашему проекту
// 2. В новом файле js/stat.js создаем объект window с методом renderStatistics
// 3. Определеяем для него фуннкцию  параметрами ctx, names, times
// 4. Проверяем работу функции
// 5. Нарисуем облако и тень от него
// 6. Выведем надпись говорящую о победе
// 7. Определим худшее время
// 8. Нарисуем гистограмму
// 9. Зададим координаты гистошраммы так, чтобы она стала вертикальной
// 10. Выровняем столбцы гистограммы по нижнему краю
// 11. Обобщим алгоритм при помощи цикла
// 12. Вынесем в переменные, непонятные числа
// 13. Вынесем переменные за цикл
// 14. Зададим цвет для столбцов
// 15. Сделаем рефакторинг кода, разбив его на более мелкие функции
