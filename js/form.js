import {resetEffect} from './effects.js';
import {sendData} from './api.js';
const uploadForm = document.querySelector('#upload-select-image');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.body;
const uploadFormFile = uploadForm.querySelector('#upload-file');
const uploadFormCancel = uploadForm.querySelector('#upload-cancel');
const SendFormSuccess = document.querySelector('.success');
const closeSuccessFormButton = document.querySelector('.success__button');
const SendFormFail = document.querySelector('.error');
const closeErrorFormButton = document.querySelector('.error__button');

function openForm() {
  resetEffect();
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
    SendFormSuccess.classList.add('hidden');
  }
  if(evt.key === 'Escape'){
    SendFormFail.classList.add('hidden');
  }
});

uploadFormFile.addEventListener('change', () => {
  openForm();
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
        SendFormSuccess.classList.remove('hidden');
      } ,
      () => {
        closeForm();
        SendFormFail.classList.remove('hidden');
      },
      new FormData(evt.target),
    );
  });
};

closeSuccessFormButton.addEventListener('click', () => {
  SendFormSuccess.classList.add('hidden');
});

SendFormSuccess.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('success')) {
    SendFormSuccess.classList.add('hidden');
  }
});

closeErrorFormButton.addEventListener('click', () => {
  SendFormFail.classList.add('hidden');
});

SendFormFail.addEventListener('click', (evt) => {
  if(evt.target.classList.contains('error')) {
    SendFormFail.classList.add('hidden');
  }
});

export {setUserFormSubmit};
export {openForm, hideForm};

