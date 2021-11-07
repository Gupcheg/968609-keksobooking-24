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

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const houseTypes = ['bungalow', 'flat', 'hotel', 'house', 'palace'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];


const getDescription = (index) => DESCRIPTIONS[index];


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
