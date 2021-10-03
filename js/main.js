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
getRandomIntInclusive(0, 10);


function getCommentLength (comment, maxLength) {
  if (comment.length > maxLength) {
    return false;
  }
  return true;
}

getCommentLength('comment', 140);
