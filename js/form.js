import {resetEffect} from './effects.js';
const uploadForm = document.querySelector('#upload-select-image');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadFormFile = uploadForm.querySelector('.img-upload__control');
const uploadFormCancel = uploadForm.querySelector('#upload-cancel');


function openForm() {
  resetEffect();
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function hideForm() {
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}

body.addEventListener('keydown', (evt)  => {
  if(evt.key === 'Escape' && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    hideForm();
  }
});

uploadFormFile.addEventListener('click', () => {
  openForm();
});

uploadFormCancel.addEventListener('click', () => {
  hideForm();
});
