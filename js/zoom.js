const zoomElement = document.querySelector('.img-upload__scale');
const changeScale = zoomElement.querySelector('.scale__control--value');
const btnZoomMinusPicture = zoomElement.querySelector('.scale__control--smaller');
const btnZoomPlusPicture = zoomElement.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview');

const min = 25;
const max = 100;
const step = 25;

function valueToPercent(value){
  return `${value}%`;
}
function percentToValue(value){
  return parseInt(value, 10);
}

function desiredRange (value) {
  return (value >= min) && (value <= max);
}

btnZoomMinusPicture.addEventListener('click', () => {
  const currentValue = percentToValue(changeScale.value);
  const newValue = currentValue - step;
  if(desiredRange(newValue)) {
    changeScale.value = valueToPercent(newValue);
    imgPreview.style.transform = `scale(${newValue/100})`;
  }
});

btnZoomPlusPicture.addEventListener('click', () => {
  const currentValue = percentToValue(changeScale.value);
  const newValue = currentValue + step;
  if(desiredRange(newValue)) {
    changeScale.value = valueToPercent(newValue);
    imgPreview.style.transform = `scale(${newValue/100})`;
  }
});
