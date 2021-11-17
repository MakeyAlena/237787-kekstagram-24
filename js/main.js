import './thumbnails.js';
import './full-photo.js';
import './form-validation.js';
import './zoom.js';
import './effects.js';
import {showFilters} from './filter.js';
import {hideForm} from './form.js';
import {setUserFormSubmit} from './form.js';
import {renderPhotos} from './thumbnails.js';
import {getData} from './api.js';
import {onFail} from './on-fail.js';

getData((photos) => {
  showFilters();
  renderPhotos(photos);
} , () => {
  showFilters();
  onFail();
});


setUserFormSubmit(hideForm);
