import {generatePhotos} from './generate-photos.js';

const thumbnailsList = document.querySelector('.pictures');
const thumbnailsTemplate = document.querySelector('#picture').content;

const listNotes = generatePhotos();

const listNotesFragment = document.createDocumentFragment();

listNotes.forEach(({url, comment, like}) => {
  const thumbnailsElement = thumbnailsTemplate.cloneNode(true);
  thumbnailsElement.querySelector('.picture__img').src = url;
  thumbnailsElement.querySelector('.picture__comments').textContent = comment.length;
  thumbnailsElement.querySelector('.picture__likes').textContent = like;
  listNotesFragment.appendChild(thumbnailsElement);
});

thumbnailsList.appendChild(listNotesFragment);
