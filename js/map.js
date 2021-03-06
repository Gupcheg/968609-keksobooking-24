/* eslint-disable indent */
import {
  changeForm
} from './form.js';
import {
  renderCards
} from './generate.js';

const ICON_SIZE = 40;
const ICON_ANCHOR_X = 20;
const ICON_ANCHOR_Y = 40;

const MAP = L.map('map-canvas');
const MARKER_GROUP = L.layerGroup().addTo(MAP);
const MAP_ZOOM = 13.5;

const MAIN_PIN_ADDRESS = {
  lat: 35.67783,
  lng: 139.75849,
};

const MAIN_PIN_ICON = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker({
  lat: MAIN_PIN_ADDRESS.lat,
  lng: MAIN_PIN_ADDRESS.lng,
}, {
  draggable: true,
  icon: MAIN_PIN_ICON,
});

const adressInput = document.querySelector('#address');

const setAddressInputValue = () => adressInput.value = `${MAIN_PIN_ADDRESS.lat}, ${MAIN_PIN_ADDRESS.lng}`;

const addMap = () => {
  MAP.on('load', () => {
    changeForm(false);
    setAddressInputValue();
  })
    .setView({
      lat: MAIN_PIN_ADDRESS.lat,
      lng: MAIN_PIN_ADDRESS.lng,
    }, MAP_ZOOM);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(MAP);
};

const addMainPin = () => {
  mainPinMarker
    .on('moveend', (evt) => {
      const markerTarget = evt.target;
      adressInput.value = `${markerTarget.getLatLng().lat.toFixed(5)}, ${markerTarget.getLatLng().lng.toFixed(5)}`;
    })
    .addTo(MAP);
};

const createMarker = (func, point) => {
  const {
    lat,
    lng,
  } = point;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [ICON_SIZE, ICON_SIZE],
    iconAnchor: [ICON_ANCHOR_X, ICON_ANCHOR_Y],
  });

  const marker = L.marker({
    lat,
    lng,
  }, {
    icon,
  });

  marker
    .addTo(MARKER_GROUP)
    .bindPopup(func);
};

const makeMarkers = (cards) => {
  MARKER_GROUP.clearLayers();

  cards.forEach((card) => createMarker(() => renderCards(card), card.location));
};

const resetMainPin = () => {
  mainPinMarker.setLatLng({
    lat: MAIN_PIN_ADDRESS.lat,
    lng: MAIN_PIN_ADDRESS.lng,
  });
  setAddressInputValue();
};

const closeOpenedPopup = () => MAP.closePopup();

export {
  addMap,
  addMainPin,
  makeMarkers,
  resetMainPin,
  closeOpenedPopup
};
