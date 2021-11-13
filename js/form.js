const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const roomsCapacity = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const activeElements = document.querySelectorAll('.ad-form fieldset, .map__filters fieldset, .map__filter');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const roomsNumberSelect = adForm.querySelector('#room_number');
const capacityOptions = adForm.querySelectorAll('#capacity option');

function changeForm(isDisabled = true) {
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
}

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength >= MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Достигнута максимальная длина ${ MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const priceValue = priceInput.value;

  if (priceValue > MAX_PRICE) {
    priceInput.setCustomValidity(`Цена не может превышать ${ MAX_PRICE } руб.`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

const changeSelected = () => {
  for (const capacityOption of capacityOptions) {
    if (!capacityOption.disabled) {
      capacityOption.selected = true;
    }
  }
};

const onRoomsNumberChange = () => {
  capacityOptions.forEach((capacityOption) => {
    capacityOption.disabled = !roomsCapacity[roomsNumberSelect.value].includes(capacityOption.value);
  });
  changeSelected();
};

onRoomsNumberChange();
roomsNumberSelect.addEventListener('change', onRoomsNumberChange);

export {
  changeForm
};
