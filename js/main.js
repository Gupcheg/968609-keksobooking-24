//Функция, возвращающая случайное целое число из переданного диапазона
function swapValue(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
}


function getRandomInt(min, max) {
  min = Math.abs(Math.floor(min));
  max = Math.abs(Math.floor(max));

  swapValue(min, max);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
getRandomInt(0, 100);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomFloat(min, max, valueAfterComma) {

  min = Math.abs(min);
  max = Math.abs(max);

  swapValue(min, max);

  const result = Math.random() * (max - min + 1) + min;
  return result.toFixed(valueAfterComma);
}

getRandomFloat(0, 7, 5);
