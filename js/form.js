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

const FOR_ONE = '1';
const FOR_TWO = '2';
const FOR_THREE = '3';
const FOR_NOBODY = '100';

const ROOM_PHOTO_SIZE = 70;

const roomsCapacity = {
  [FOR_ONE]: ['1'],
  [FOR_TWO]: ['1', '2'],
  [FOR_THREE]: ['1', '2', '3'],
  [FOR_NOBODY]: ['0'],
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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
const avatarInput = adForm.querySelector('.ad-form__field input[type=file]');
const avatarPreview = adForm.querySelector('.ad-form-header__preview img');
const photoInput = adForm.querySelector('.ad-form__upload input[type=file]');
const photoPreview = adForm.querySelector('.ad-form__photo');

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
const resetCapacityRooms = () => {
  capacityOptions.forEach((capacityOption) => {
    capacityOption.disabled = false;

    if (!capacityOption.selected) {
      capacityOption.disabled = true;
    }
  });
};

const resetImagesForm = () => {
  photoPreview.innerHTML = '';
  avatarPreview.src = `${document.location.href}/img/muffin-grey.svg`;
};

const updatePriceInput = () => {
  priceInput.min = typesMinPrice[typesSelect.value];
  priceInput.placeholder = priceInput.min;
};

const setFormDefault = () => {
  adForm.reset();
  mapFilters.reset();
  resetMainPin();
  closeOpenedPopup();
  resetCapacityRooms();
  resetImagesForm();
  updatePriceInput();
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

const inputPhotoFromUser = (input, preview) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

const onChangeRoomsAmount = () => {
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

avatarInput.addEventListener('change', () => inputPhotoFromUser(avatarInput, avatarPreview));
photoInput.addEventListener('change', () => {
  const photo = document.createElement('img');

  photo.alt = 'Фотография жилья';
  photo.width = ROOM_PHOTO_SIZE;
  photo.height = ROOM_PHOTO_SIZE;
  inputPhotoFromUser(photoInput, photo);
  photoPreview.append(photo);
});

titleInput.addEventListener('input', onInputTitle);
priceInput.addEventListener('input', onInputPrice);

typesSelect.addEventListener('change', updatePriceInput);

roomsNumberSelect.addEventListener('change', onChangeRoomsAmount);
timeinSelect.addEventListener('change', () => timeoutSelect.value = timeinSelect.value);
timeoutSelect.addEventListener('change', () => timeinSelect.value = timeoutSelect.value);

btnReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  setFormDefault();
});
setFormDefault();

export {
  changeForm,
  setFormSubmit,
  setFormDefault
};
