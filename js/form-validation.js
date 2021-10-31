const uploadComment = document.querySelector('.text__description');
const MAX_COMMENT_LENGTH = 140;


uploadComment.addEventListener('input', () => {
  const valueLength = uploadComment.value.length;
  if  (valueLength > MAX_COMMENT_LENGTH) {
    uploadComment.setCustomValidity(`Удалите лишние ${  valueLength - MAX_COMMENT_LENGTH} симв.`);
  } else {
    uploadComment.setCustomValidity('');
  }
  uploadComment.reportValidity();
});


const hashtagsInput = document.querySelector('.text__hashtags');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const MAX_COUNT_LENGTH = 5;

hashtagsInput.addEventListener('input', () => {
  const hashtagsStrings = hashtagsInput.value;
  const hashtags = hashtagsStrings.trim().split(' ');
  hashtagsInput.setCustomValidity('');
  if (hashtags.length > MAX_COUNT_LENGTH) {
    hashtagsInput.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  }
  hashtags.forEach((hashtag) => {
    if(hashtag.startsWith('#') && hashtag.length === 1) {
      return hashtagsInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    }
    if(hashtag.length > 20) {
      return hashtagsInput.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    }
    if(!hashtag.startsWith('#') && hashtag.length > 0) {
      return hashtagsInput.setCustomValidity('хэш-тег начинается с символа # (решётка)');
    }
    if(!re.test(hashtag)) {
      return hashtagsInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    }
  });

  const uniqTags = new Set(hashtags.map((hashtag) => hashtag.toLowerCase()));
  if(uniqTags.size !== hashtags.length) {
    hashtagsInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
  }

  hashtagsInput.reportValidity();
});
