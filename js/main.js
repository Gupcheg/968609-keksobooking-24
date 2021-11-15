import {
  changeForm
} from './form.js';

import {
  addMap,
  addMainPin,
  makeMarkers
} from './map.js';

import {
  createAuthors
} from './data.js';

addMap();
addMainPin();
changeForm();

const pins = createAuthors;
makeMarkers(pins);
