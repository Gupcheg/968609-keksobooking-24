import {
  getRandomInt,
  getRandomFloat,
  getRandomArr,
  arrayRandElement
} from './util.js';
import {
  getUnicNumbers
} from './util.js';

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const houseTypes = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const checkTime = ['12:00', '13:00', '14:00'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const titles = [
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


export function createUser(avatarUrl, description, location) {
  // console.log(location);
  return {
    author: {
      avatar: avatarUrl,
    },
    location: location,
    offer: {
      title: arrayRandElement(titles),
      type: houseTypes[getRandomInt(0, 4)],
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInt(1000, 100000),
      rooms: ROOMS[getRandomInt(0, 3)],
      guests: GUESTS[getRandomInt(0, 3)],
      checkin: checkTime[getRandomInt(0, checkTime.length - 1)],
      checkout: checkTime[getRandomInt(0, checkTime.length - 1)],
      features: getRandomArr(features),
      description,
      photos: getRandomArr(photos),
    },
  };
}


export function getAuthors() {
  const authorIDs = getUnicNumbers(10);
  const authors = [];
  authorIDs.map((id) => {
    const location = {
      lat: getRandomFloat(35.65000, 35.70000, 5),
      lng: getRandomFloat(139.70000, 139.80000, 5),
    };
    const description = getDescription(Number(id));
    const avatarUrl = `img/avatars/user${id}.png`;
    const author = createUser(avatarUrl, description, location);

    authors.push(author);
  });
  return authors;
}

export const createAuthors = getAuthors();
