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

//Функция, возвращающая случайное целое число из переданного диапазона
function swapValue(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
}


function getRandomInt(min, max) {
  min = Math.abs(Math.floor(min));
  max = Math.abs(Math.floor(max));

  swapValue(min, max);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
getRandomInt(0, 100);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomFloat(min, max, valueAfterComma) {

  min = Math.abs(min);
  max = Math.abs(max);

  swapValue(min, max);

  const result = Math.random() * (max - min + 1) + min;
  return result.toFixed(valueAfterComma);
}

getRandomFloat(0, 7, 5);

// Генерация даннных

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const houseTypes = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArr = (arr) => {
  const result = new Array(Math.floor(Math.random() * arr.length));

  // eslint-disable-next-line id-length
  for (let i = 0; i <= result.length + 1; i++) {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));

    if (!result.includes(arr[randomIndex])) {
      result[i] = arr[randomIndex];
    }
  }

  return result.filter((item) => item);
};

function getNumberStr(number) {

  if (number < 10) {
    return `0${number}`;
  }

  return number.toString();
}

function getUnicNumbers(count) {
  const mass = [];

  while (mass.length < count) {
    const random = getNumberStr(getRandomInt(0, count));

    if (!mass.includes(random)) {
      mass.push(random);
    }
  }

  return mass;
}

const getDescription = (index) => DESCRIPTIONS[index];

function UserAdd(avatarUrl, description) {
  this.author = {
    avatar: avatarUrl,
  };
  this.location = {
    lat: getRandomFloat(35.65, 35.7, 5),
    lng: getRandomFloat(139.7, 139.8, 5),
  };
  this.offer = {
    type: houseTypes[getRandomFloat(0, 4)],
    address: `${this.location.lat}, ${this.location.lng}`,
    price: getRandomInt(2000, 200000),
    rooms: getRandomInt(1, 5),
    guests: getRandomInt(1, 6),
    checkin: checkin[getRandomInt(0, 2)],
    checkout: checkout[getRandomInt(0, 2)],
    features: getRandomArr(features),
    description,
    photos: getRandomArr(photos),
  };
}

// eslint-disable-next-line no-unused-vars
function getAuthors() {
  const autorIDs = getUnicNumbers(10);
  const authors = [];
  autorIDs.map((id) => {
    const description = getDescription(Number(id));
    const avatarUrl = `img/avatars/user${id}`;
    const author = new UserAdd(avatarUrl, description);
    authors.push(author);
  });
  return authors;
}
