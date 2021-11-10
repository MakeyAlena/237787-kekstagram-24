const sliderElement = document.querySelector('.effect-level__slider');
const radioEffects = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview');
const effectValue = document.querySelector('.effect-level__value');
let selectedFilter = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
});

export function resetEffect() {
  imgPreview.classList.remove(`effects__preview--${selectedFilter}`);
  selectedFilter = 'none';
  imgPreview.classList.add(`effects__preview--${selectedFilter}`);
  imgPreview.style.filter = '';
  sliderElement.classList.add('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 10,
  });
}

resetEffect();

function updateFilter(currentValue) {
  if (currentValue === 'chrome') {
    imgPreview.style.filter = 'grayscale(1)';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
  if (currentValue === 'sepia') {
    imgPreview.style.filter = 'sepia(1)';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
  if (currentValue === 'marvin') {
    imgPreview.style.filter = 'invert(100%)';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }
  if (currentValue === 'phobos') {
    imgPreview.style.filter = 'blur(3px)';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
  if (currentValue === 'heat') {
    imgPreview.style.filter = 'brightness(3)';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }

  if(currentValue === 'none') {
    resetEffect();
  } else {
    sliderElement.classList.remove('hidden');
  }
}


sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  if(selectedFilter === 'chrome') {
    imgPreview.style.filter = `grayscale(${value})`;
    effectValue.value = value;
  }
  if(selectedFilter === 'sepia') {
    imgPreview.style.filter = `sepia(${value})`;
    effectValue.value = value;
  }
  if(selectedFilter === 'marvin') {
    imgPreview.style.filter = `invert(${value}%)`;
    effectValue.value = value;
  }
  if(selectedFilter === 'phobos') {
    imgPreview.style.filter = `blur(${value}px)`;
    effectValue.value = value;
  }
  if(selectedFilter === 'heat') {
    imgPreview.style.filter = `brightness(${value})`;
    effectValue.value = value;
  }
});

radioEffects.forEach((radioEffect) => {
  radioEffect.addEventListener('change', (evt) => {
    const currentValue = evt.target.value;
    imgPreview.classList.remove(`effects__preview--${selectedFilter}`);
    imgPreview.classList.add(`effects__preview--${currentValue}`);
    selectedFilter = currentValue;
    updateFilter(currentValue);
  });
});

