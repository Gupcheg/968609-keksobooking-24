const ROOM_PHOTO_MAP_WIDTH = 45;
const ROOM_PHOTO_MAP_HEIGHT = 40;

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const offerHouseTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardElem = (template, element, data, text) => {
  if (data) {
    template.querySelector(element).textContent = text;
  } else {
    template.querySelector(element).classList.add('hidden');
  }
};

const renderCards = (card) => {
  const cardElement = cardTemplate.cloneNode(true);

  if (card.author.avatar) {
    cardElement.querySelector('.popup__avatar').src = `${card.author.avatar}`;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  cardElem(cardElement, '.popup__title', card.offer.title, `${card.offer.title}`);
  cardElem(cardElement, '.popup__text--address', card.offer.address, `${card.offer.address}`);
  cardElem(cardElement, '.popup__text--price', card.offer.price, `${card.offer.price} ₽/ночь`);
  cardElem(cardElement, '.popup__type', card.offer.type, offerHouseTypes[card.offer.type]);
  cardElem(cardElement, '.popup__text--capacity', card.offer.rooms && card.offer.guests, `${card.offer.rooms} комнаты ${card.offer.guests} гостей`);
  cardElem(cardElement, '.popup__text--time', card.offer.checkin && card.offer.checkout, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  cardElem(cardElement, '.popup__description', card.offer.description, `${card.offer.description}`);

  if (card.offer.features) {
    const cardFeatures = cardElement.querySelector('.popup__features');
    const features = card.offer.features.map((feature) => {
      const elementLi = document.createElement('li');
      elementLi.classList.add('popup__feature');
      elementLi.classList.add(`popup__feature--${feature}`);
      return elementLi;
    });

    cardFeatures.innerHTML = '';
    cardFeatures.append(...features);
  } else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }

  if (card.offer.photos) {
    const cardPhotos = cardElement.querySelector('.popup__photos');
    const pictures = card.offer.photos.map((photo) => {
      const picture = document.createElement('img');
      picture.src = photo;
      picture.alt = 'Фото жилья';
      picture.width = ROOM_PHOTO_MAP_WIDTH;
      picture.height = ROOM_PHOTO_MAP_HEIGHT;
      picture.classList.add('popup__photo');
      return picture;
    });

    cardPhotos.innerHTML = '';
    cardPhotos.append(...pictures);
  } else {
    cardElement.querySelector('.popup__photo').classList.add('hidden');
  }

  return cardElement;
};

export {
  renderCards
};
