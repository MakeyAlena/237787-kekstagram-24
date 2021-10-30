const photoDetails = document.querySelector('.big-picture');
const body = document.body;
const commentTemplate = document.querySelector('#comment').content;
const comments = photoDetails.querySelector('.social__comments');
photoDetails.querySelector('.social__comment-count').classList.add('hidden');
photoDetails.querySelector('.comments-loader').classList.add('hidden');

function appendComments(comment) {
  const listNotesFragment = document.createDocumentFragment();

  comment.forEach(({avatar, description}) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = avatar;
    commentElement.querySelector('.social__text').textContent = description;
    listNotesFragment.appendChild(commentElement);
  });
  comments.innerHTML = '';
  comments.appendChild(listNotesFragment);
}

export function showModal({avatar, url, like, comment, description}) {
  body.classList.add('modal-open');
  photoDetails.classList.remove('hidden');
  photoDetails.querySelector('.big-picture__img img').src = url;
  photoDetails.querySelector('.social__header img').src = avatar;
  photoDetails.querySelector('.likes-count').textContent = like;
  photoDetails.querySelector('.comments-count').textContent = comment.length;
  photoDetails.querySelector('.social__caption').textContent = description;
  appendComments(comment);
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

