import {
  getRandomInt,
  getRandomFloat,
  getRandomArr
} from './util.js';

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const houseTypes = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

export function createUser(avatarUrl, description) {
  return {
    author: {
      avatar: avatarUrl,
    },
    location: {
      lat: getRandomFloat(35.65, 35.7, 5),
      lng: getRandomFloat(139.7, 139.8, 5),
    },
    offer: {
      type: houseTypes[getRandomInt(0, 4)],
      address: `${this.location.lat}, ${this.location.lng}`,
      price: getRandomInt(2000, 200000),
      rooms: getRandomInt(1, 5),
      guests: getRandomInt(1, 6),
      checkin: checkin[getRandomInt(0, 2)],
      checkout: checkout[getRandomInt(0, 2)],
      features: getRandomArr(features),
      description,
      photos: getRandomArr(photos),
    },
  };
}
