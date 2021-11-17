import {debounceRenderPhotos as renderPhotos} from './thumbnails.js';
import {getData} from './api.js';
import {onFail} from './on-fail.js';
import { getRandomIntInclusive } from './utils.js';
const RANDOM_POTOS_COUNT = 10;
const uploadFilter = document.querySelector('.img-filters');
const defaultFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');
const comparePhotos = (photoA, photoB) => {
  const commentsA = photoA.comments.length;
  const commentsB = photoB.comments.length;
  return commentsB - commentsA;
};

export const showFilters = () => {
  uploadFilter.classList.remove('img-filters--inactive');
};
export const hideFilters = () => {
  uploadFilter.classList.add('img-filters--inactive');
};

defaultFilter.addEventListener('click', () => {
  uploadFilter.classList.add('img-filters--inactive');
  discussedFilter.classList.remove('img-filters__button--active');
  randomFilter .classList.remove('img-filters__button--active');
  defaultFilter.classList.add('img-filters__button--active');
  getData((photos) => {
    showFilters();
    renderPhotos(photos);
  } , () => {
    showFilters();
    onFail();
  });
});

randomFilter.addEventListener('click', () => {
  defaultFilter.classList.remove('img-filters__button--active');
  discussedFilter.classList.remove('img-filters__button--active');
  randomFilter .classList.add('img-filters__button--active');
  getData((photos) => {
    showFilters();
    if(photos.length <= RANDOM_POTOS_COUNT) {
      renderPhotos(photos);
    }
    const randomPhotos = [];
    const photosIndexes = [];
    while(randomPhotos.length < RANDOM_POTOS_COUNT) {
      const randomIndex = getRandomIntInclusive(0, photos.length - 1);
      if(!photosIndexes.includes(randomIndex)) {
        photosIndexes.push(randomIndex);
        randomPhotos.push(photos[randomIndex]);
      }
    }
    renderPhotos(randomPhotos);
  } , () => {
    showFilters();
    onFail();
  });

});

discussedFilter.addEventListener('click', () => {
  discussedFilter.classList.add('img-filters__button--active');
  randomFilter .classList.remove('img-filters__button--active');
  defaultFilter.classList.remove('img-filters__button--active');


  getData((photos) => {
    renderPhotos(photos.sort(comparePhotos));
  }, onFail);
});

