import {getRandomIntInclusive} from './utils.js';

const DESCRIPTIONS = [
  'Вместе веселее!',
  'Море и закат',
  'Любовь-морковь',
  'Обновка',
  'Лучшие моменты',
  'Дети - цветы жизни',
];


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const PHOTO_COUNT = 25;


function getCommets(count) {
  return Array.from({length:count}).map(() => ({
    avatar: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,description:COMMENTS[getRandomIntInclusive(0,5)],
  }));
}


const createPhotos = (index) => ({
  id: index,
  url : `photos/${index}.jpg`,
  description: DESCRIPTIONS[getRandomIntInclusive(0,5)],
  like: getRandomIntInclusive(15, 200),
  comment: getCommets(getRandomIntInclusive(0,15)),
  avatar: `img/avatar-${getRandomIntInclusive(1,6)}.svg`,
  name: NAMES[getRandomIntInclusive(0,7)],
});


export function generatePhotos() {
  return Array.from({length:PHOTO_COUNT}).map((skip, index) => createPhotos(index+1));
}

