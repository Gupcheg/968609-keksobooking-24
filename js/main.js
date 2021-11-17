import {
  changeForm,
  setFormDefault,
  setFormSubmit
} from './form.js';
import {
  addMap,
  addMainPin,
  makeMarkers
} from './map.js';
import {
  selectFilters,
  filterCards
} from './map-filter.js';
import {
  getData
} from './api.js';
import {
  showAlert
} from './util.js';
import {
  debounce
} from './utils/debounce.js';

const RERENDER_DELAY = 500;

changeForm();
addMap();
addMainPin();


getData((pins) => {
  makeMarkers(filterCards(pins));
  selectFilters(debounce(() => makeMarkers(filterCards(pins)), RERENDER_DELAY));
}, showAlert);
setFormSubmit(setFormDefault);
