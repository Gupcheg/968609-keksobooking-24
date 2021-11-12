// import {
//   bulki
// } from './data.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const offerHouseTypes = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Особняк',
  hotel: 'Отель',
};

const renderCard = (card) => {
  const cardElem = cardTemplate.cloneNode(true);

  cardElem.querySelector('.popup__avatar').src = `${card.author.avatar}`;
  cardElem.querySelector('.popup__title').textContent = `${card.offer.title}`;
  cardElem.querySelector('.popup__text--address').textContent = `${card.offer.address}`;
  cardElem.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElem.querySelector('.popup__type').textContent = offerHouseTypes[card.offer.type];
  cardElem.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElem.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElem.querySelector('.popup__features').textContent = `${card.offer.features}`;
  cardElem.querySelector('.popup__description').textContent = `${card.offer.description}`;

  const cardPhotos = cardElem.querySelector('.popup__photos');
  cardPhotos.innerHTML = '';

  const pictures = card.offer.photos.map((photo) => {

    const picture = document.createElement('img');
    picture.src = photo;
    picture.alt = 'Фото жилья';
    picture.width = '45';
    picture.height = '40';
    picture.classList.add('popup__photo');
    return picture;

  });
  cardPhotos.append(...pictures);
  mapCanvas.appendChild(cardElem);
};

const renderCards = (cards) => {

  cards.forEach((item) => {
    renderCard(item);
  });
};

export {
  renderCards
};
