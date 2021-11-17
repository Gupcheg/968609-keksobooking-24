import {
  sendData
} from './api.js';
import {
  resetMainPin,
  closeOpenedPopup
} from './map.js';
import {
  showSuccessMessage,
  showErrorMessage
} from './util.js';

const roomsCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const typesMinPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const btnReset = adForm.querySelector('.ad-form__reset');
const activeElements = document.querySelectorAll('.ad-form fieldset, .map__filter, .map__filters fieldset');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomsNumberSelect = adForm.querySelector('#room_number');
const capacityOptions = adForm.querySelectorAll('#capacity option');
const typesSelect = adForm.querySelector('#type');
const timeinSelect = adForm.querySelector('#timein');
const timeoutSelect = adForm.querySelector('#timeout');

const changeForm = (isDisabled = true) => {
  if (isDisabled) {
    adForm.classList.add('ad-form--disabled');
    mapFilters.classList.add('map__filters--disabled');
  } else {
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('map__filters--disabled');
  }

  activeElements.forEach((activeElement) => {
    activeElement.disabled = isDisabled;
  });
};

const setFormDefault = () => {
  adForm.reset();
  mapFilters.reset();
  resetMainPin();
  closeOpenedPopup();
};

const setFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        onSuccess();
        showSuccessMessage();
      },
      showErrorMessage,
      new FormData(evt.target),
    );
  });
};

const changeSelected = () => {
  for (const capacityOption of capacityOptions) {
    if (!capacityOption.disabled) {
      capacityOption.selected = true;
      return;
    }
  }
};

const onRoomsNumberChange = () => {
  capacityOptions.forEach((capacityOption) => {
    capacityOption.disabled = !roomsCapacity[roomsNumberSelect.value].includes(capacityOption.value);
  });
  changeSelected();
};

const onInputTitle = (evt) => {
  const {
    target,
  } = evt;
  const {
    validity,
    minLength,
  } = target;
  const valueLength = target.value.length;

  if (validity.tooShort) {
    target.setCustomValidity(`Ещё ${minLength - valueLength} симв.`);
  } else {
    target.setCustomValidity('');
  }

  target.reportValidity();
};

const onInputPrice = (evt) => {
  const {
    target,
  } = evt;
  const {
    validity,
    min,
    max,
  } = target;

  if (validity.rangeOverflow) {
    target.setCustomValidity(`Цена не может превышать ${max} руб.`);
  } else if (validity.rangeUnderflow) {
    target.setCustomValidity(`Цена не может быть меньше ${min} руб.`);
  } else {
    target.setCustomValidity('');
  }

  target.reportValidity();
};

titleInput.addEventListener('input', onInputTitle);
priceInput.addEventListener('input', onInputPrice);

typesSelect.addEventListener('change', () => {
  priceInput.min = typesMinPrice[typesSelect.value];
  priceInput.placeholder = priceInput.min;
});

roomsNumberSelect.addEventListener('change', onRoomsNumberChange);
timeinSelect.addEventListener('change', () => timeoutSelect.value = timeinSelect.value);
timeoutSelect.addEventListener('change', () => timeinSelect.value = timeoutSelect.value);

btnReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  setFormDefault();
});

onRoomsNumberChange();

export {
  changeForm,
  setFormSubmit,
  setFormDefault
};
