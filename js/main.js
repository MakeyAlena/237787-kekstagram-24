import './thumbnails.js';
import './full-photo.js';
import './form-validation.js';
import './zoom.js';
import './effects.js';
import {hideForm} from './form.js';
import {setUserFormSubmit} from './form.js';
import {renderPhotos} from './thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';


const onFail = () => {
  showAlert('Невозможно загрузить фото, попробуйте позже.');
};
getData(renderPhotos, onFail);


setUserFormSubmit(hideForm);
