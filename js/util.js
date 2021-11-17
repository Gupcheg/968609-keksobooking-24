//Функция, возвращающая случайное целое число из переданного диапазона
const ALERT_SHOW_TIME = 5000;

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

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
export const getRandomFloat = (min, max, numAfterPoint = 1) => {
  min = Math.min(Math.abs(min), Math.abs(max));
  max = Math.max(Math.abs(min), Math.abs(max));

  return +((Math.random() * (max - min)) + min).toFixed(numAfterPoint);
};

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


export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '18px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onHideMessage = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
  }
  document.body.lastChild.remove();
  document.removeEventListener('click', onHideMessage);
  document.removeEventListener('keydown', onHideMessage);

  const errorButton = document.querySelector('.error__button');
  if (errorButton) {
    errorButton.removeEventListener('click', onHideMessage);
  }
};

const addListenersOnMessage = () => {
  document.addEventListener('click', onHideMessage);
  document.addEventListener('keydown', onHideMessage);
};

export const showSuccessMessage = () => {
  const message = successMessageTemplate.cloneNode(true);
  addListenersOnMessage();
  document.body.append(message);
};

export const showErrorMessage = () => {
  const message = errorMessageTemplate.cloneNode(true);
  addListenersOnMessage();

  const errorButton = message.querySelector('.error__button');
  errorButton.addEventListener('click', onHideMessage);
  document.body.append(message);
};
