const zoomElement = document.querySelector('.img-upload__scale');
const changeScale = zoomElement.querySelector('.scale__control--value');
const btnZoomMinusPicture = zoomElement.querySelector('.scale__control--smaller');
const btnZoomPlusPicture = zoomElement.querySelector('.scale__control--bigger');
const imgPreview = document.querySelector('.img-upload__preview img');

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

const changeZoom = (value) => {
  const currentValue = percentToValue(changeScale.value);
  const newValue = currentValue + value;
  if(desiredRange(newValue)) {
    changeScale.value = valueToPercent(newValue);
    imgPreview.style.transform = `scale(${newValue/100})`;
  }
};

btnZoomMinusPicture.addEventListener('click', () => {
  changeZoom(-step);
});

btnZoomPlusPicture.addEventListener('click', () => {
  changeZoom(step);
});
