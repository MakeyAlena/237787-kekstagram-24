import {resetEffect} from './effects.js';
import {sendData} from './api.js';
const uploadForm = document.querySelector('#upload-select-image');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadFormFile = uploadForm.querySelector('#upload-file');
const uploadFormCancel = uploadForm.querySelector('#upload-cancel');
const sendFormSuccess = document.querySelector('.success');
const closeSuccessFormButton = document.querySelector('.success__button');
const sendFormFail = document.querySelector('.error');
const closeErrorFormButton = document.querySelector('.error__button');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const preview = document.querySelector('.img-upload__preview img');

function openForm() {
  resetEffect();
  preview.style.transform = 'scale(1)';
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

function hideForm() {
  uploadForm.reset();
  body.classList.remove('modal-open');
  uploadOverlay.classList.add('hidden');
}

body.addEventListener('keydown', (evt)  => {
  if(evt.key === 'Escape' && !evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
    hideForm();
  }
  if(evt.key === 'Escape'){
    sendFormSuccess.classList.add('hidden');
  }
  if(evt.key === 'Escape'){
    sendFormFail.classList.add('hidden');
  }
});

uploadFormFile.addEventListener('change', () => {
  openForm();
  const file = uploadFormFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});

uploadFormCancel.addEventListener('click', () => {
  hideForm();
});


const setUserFormSubmit = (closeForm) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        closeForm();
        sendFormSuccess.classList.remove('hidden');
      } ,
      () => {
        closeForm();
        sendFormFail.classList.remove('hidden');
      },
      new FormData(evt.target),
    );
  });
};

closeSuccessFormButton.addEventListener('click', () => {
  sendFormSuccess.classList.add('hidden');
});

sendFormSuccess.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('success')) {
    sendFormSuccess.classList.add('hidden');
  }
});

closeErrorFormButton.addEventListener('click', () => {
  sendFormFail.classList.add('hidden');
});

sendFormFail.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('error')) {
    sendFormFail.classList.add('hidden');
  }
});

export {setUserFormSubmit};
export {openForm, hideForm};

