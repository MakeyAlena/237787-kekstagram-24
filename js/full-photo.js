const photoDetails = document.querySelector('.big-picture');
const body = document.body;
const commentTemplate = document.querySelector('#comment').content;
const commentsBlock = photoDetails.querySelector('.social__comments');
const showMoreComment = photoDetails.querySelector('.social__comments-loader');
const countOfComment = photoDetails.querySelector('.social__comment-count');
let currentCommentCount = 0;
let currentComment = [];

function appendComments(comments, start, step) {
  const listNotesFragment = document.createDocumentFragment();
  const end = step + start;
  comments.slice(start, end).forEach(({avatar, message}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__text').textContent = message;
    listNotesFragment.appendChild(commentElement);
  });
  commentsBlock.appendChild(listNotesFragment);
  let countComment = comments.length;
  if(comments.length <= end) {
    showMoreComment.classList.add('hidden');
  } else {
    showMoreComment.classList.remove('hidden');
    countComment = end;
  }
  countOfComment.innerHTML = `${countComment} из <span class="comments-count">${comments.length}</span> комментариев`;
  currentCommentCount = end;
}

export function showModal({avatar, url, likes, comments, description}) {
  currentCommentCount = 0;
  currentComment = comments;
  body.classList.add('modal-open');
  photoDetails.classList.remove('hidden');
  photoDetails.querySelector('.big-picture__img img').src = url;
  if(avatar) {
    photoDetails.querySelector('.social__header img').src = avatar;
  } else {
    photoDetails.querySelector('.social__header img').classList.add('hidden');
  }

  photoDetails.querySelector('.likes-count').textContent = likes;
  photoDetails.querySelector('.social__caption').textContent = description;
  commentsBlock.innerHTML = '';
  appendComments(comments, currentCommentCount, 5);
}


function hideModal() {
  body.classList.remove('modal-open');
  photoDetails.classList.add('hidden');
}

body.addEventListener('keydown', (evt)  => {
  if(evt.key === 'Escape') {
    hideModal();
  }
});

document.querySelector('#picture-cancel').addEventListener('click', () => {
  hideModal();
});

showMoreComment.addEventListener('click', () => {
  appendComments(currentComment, currentCommentCount, 5);
});

