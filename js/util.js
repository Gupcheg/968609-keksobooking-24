//Функция, возвращающая случайное целое число из переданного диапазона
const ALERT_SHOW_TIME = 5000;

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

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

  setTimeout(() => alertContainer.remove(), ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onClickDOM = () => {
  document.body.lastChild.remove();
  document.removeEventListener('click', onClickDOM);
};

const onKeyDownDOM = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.body.lastChild.remove();
    document.removeEventListener('keydown', onKeyDownDOM);
  }
};

const onClickErrorButton = () => {
  const errorButton = document.querySelector('.error__button');

  document.body.lastChild.remove();
  errorButton.removeEventListener('click', onClickErrorButton);
};

const addListenersOnMessage = () => {
  document.addEventListener('click', onClickDOM);
  document.addEventListener('keydown', onKeyDownDOM);
};

export const showSuccessMessage = () => {
  const message = successMessageTemplate.cloneNode(true);

  addListenersOnMessage();
  document.body.append(message);
};

export const showErrorMessage = () => {
  const message = errorMessageTemplate.cloneNode(true);
  const errorButton = message.querySelector('.error__button');

  addListenersOnMessage();
  errorButton.addEventListener('click', onClickErrorButton);
  document.body.append(message);
};
