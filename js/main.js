import {
  getAuthors
} from './data.js';

import {
  renderCards
} from './generate.js';

import {
  changeForm
} from './form.js';

import {
  bulki
} from './data.js';

renderCards([bulki[0]]);
getAuthors();
changeForm(true);
