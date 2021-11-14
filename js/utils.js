const ALERT_SHOW_TIME = 5000;
function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('min and max should be positive number or 0');
  }
  if (min >= max) {
    throw new Error('max should be great than min');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getCommentLength (comment, maxLength) {
  if (comment.length > maxLength) {
    return false;
  }
  return true;
}
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = '50%';
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = '30px';
  alertContainer.style.backgroundColor = 'gray';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
export {getRandomIntInclusive, getCommentLength, showAlert};
