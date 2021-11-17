/* eslint-disable indent */
const getData = (onSuccess, onError) => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then(onSuccess)
    .catch(() => {
      onError('Ошибка получения данных. Попробуйте позже.');
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
      'https://24.javascript.pages.academy/keksobooking', {
        method: 'POST',
        body,
      },
    )
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      onError();
    });
};

export {
  getData,
  sendData
};