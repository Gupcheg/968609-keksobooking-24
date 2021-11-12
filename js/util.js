//Функция, возвращающая случайное целое число из переданного диапазона
export function swapValue(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
}


export function getRandomInt(min, max) {
  min = Math.abs(Math.floor(min));
  max = Math.abs(Math.floor(max));

  swapValue(min, max);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
getRandomInt(0, 100);


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
export function getRandomFloat(min, max, valueAfterComma) {

  min = Math.abs(min);
  max = Math.abs(max);

  swapValue(min, max);

  const result = Math.random() * (max - min + 1) + min;
  return result.toFixed(valueAfterComma);
}

getRandomFloat(0, 7, 5);

export const getRandomArr = (arr) => {
  const result = new Array(Math.floor(Math.random() * arr.length));

  // eslint-disable-next-line id-length
  for (let i = 0; i <= result.length + 1; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));

    if (!result.includes(arr[randomIndex])) {
      result[i] = arr[randomIndex];
    }
  }

  return result.filter((item) => item);
};

export function getNumberStr(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

export function getUnicNumbers(count) {
  const mass = [];

  while (mass.length < count) {
    const random = getNumberStr(getRandomInt(1, count));

    if (!mass.includes(random)) {
      mass.push(random);
    }
  }

  return mass;
}


export function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
