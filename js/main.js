import {
  changeForm,
  setFormDefault,
  setFormSubmit
} from './form.js';

import {
  getData
} from './api.js';
import {
  showAlert
} from './util.js';

import {
  addMap,
  addMainPin,
  makeMarkers
} from './map.js';


addMap();
addMainPin();
changeForm();

getData(makeMarkers, showAlert);
setFormSubmit(setFormDefault);
