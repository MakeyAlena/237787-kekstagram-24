import {showModal} from './full-photo.js';
import {debounce} from './utils/debounce.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

export const renderPhotos = (listNotes) => {
  thumbnailsList.querySelectorAll('.picture').forEach((img) => {
    thumbnailsList.removeChild(img);
  });
  const listNotesFragment = document.createDocumentFragment();

  listNotes.forEach(({url, comments, likes, description, avatar}) => {
    const thumbnailsElement = thumbnailsTemplate.cloneNode(true);
    thumbnailsElement.querySelector('.picture__img').src = url;
    thumbnailsElement.querySelector('.picture__comments').textContent = comments.length;
    thumbnailsElement.querySelector('.picture__likes').textContent = likes;
    thumbnailsElement.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      showModal({url, comments, likes, description, avatar});
    });
    listNotesFragment.appendChild(thumbnailsElement);
  });

  thumbnailsList.appendChild(listNotesFragment);
};
export const debounceRenderPhotos = debounce(renderPhotos);
