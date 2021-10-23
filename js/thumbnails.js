import {generatePhotos} from './generate-photos.js';
import {showModal} from './full-photo.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

const listNotes = generatePhotos();

const listNotesFragment = document.createDocumentFragment();

listNotes.forEach(({url, comment, like, description, avatar}) => {
  const thumbnailsElement = thumbnailsTemplate.cloneNode(true);
  thumbnailsElement.querySelector('.picture__img').src = url;
  thumbnailsElement.querySelector('.picture__comments').textContent = comment.length;
  thumbnailsElement.querySelector('.picture__likes').textContent = like;
  thumbnailsElement.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();
    showModal({url, comment, like, description, avatar});
  });
  listNotesFragment.appendChild(thumbnailsElement);
});

thumbnailsList.appendChild(listNotesFragment);
