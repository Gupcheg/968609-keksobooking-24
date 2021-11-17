import {
  getRandomInt,
  getRandomFloat,
  getRandomArr,
  arrayRandElement
} from './util.js';
import {
  getUnicNumbers
} from './util.js';

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const HOUSE_TYPES = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TITLES = [
  'Сдаётся жильё',
  'Комфортное жилище',
  'Уютное жильё',
  'Прекрасные апартаменты',
  'Приятная квартира',
  'Сдаётся жильё',
  'Комфортное жилище',
  'Уютное жильё',
  'Прекрасные апартаменты',
  'Приятная квартира',
];

// Описание помещений
const DESCRIPTIONS = [
  'Хорошая квартира с приятным видом из окна',
  'Комфортная квартира с приятным дизайном',
  'Уютная, тихая, скромная квартира',
  'Милая, уютная квартира с привлекательным видом',
  'Комфортабельная квартира',
  'Хорошая квартира с приятным видом из окна',
  'Комфортная квартира с приятным дизайном',
  'Уютная, тихая, скромная квартира',
  'Милая, уютная квартира с привлекательным видом',
  'Комфортабельная квартира',
];
const ROOMS = ['1', '2', '3', '100'];
const GUESTS = ['для 1', 'для 2', 'для 3', 'не для'];

export const getDescription = (index) => DESCRIPTIONS[index];

export const createUser = (avatarUrl, description, location) => ({
  author: {
    avatar: avatarUrl,
  },
  location: location,
  offer: {
    title: arrayRandElement(TITLES),
    type: HOUSE_TYPES[getRandomInt(0, 4)],
    address: `${location.lat}, ${location.lng}`,
    price: getRandomInt(1000, 100000),
    rooms: ROOMS[getRandomInt(0, 3)],
    guests: GUESTS[getRandomInt(0, 3)],
    checkin: CHECK_TIME[getRandomInt(0, CHECK_TIME.length - 1)],
    checkout: CHECK_TIME[getRandomInt(0, CHECK_TIME.length - 1)],
    features: getRandomArr(FEATURES),
    description,
    photos: getRandomArr(PHOTOS),
  },
});

export function getAuthors() {
  const authorIDs = getUnicNumbers(10);
  const authors = [];

  authorIDs.map((id) => {
    const location = {
      lat: getRandomFloat(35.65, 35.70, 5),
      lng: getRandomFloat(139.70, 139.80, 5),
    };
    const description = getDescription(Number(id));
    const avatarUrl = `img/avatars/user${id}.png`;
    const author = createUser(avatarUrl, description, location);

    authors.push(author);
  });

  return authors;
}

export const createAuthors = getAuthors();
