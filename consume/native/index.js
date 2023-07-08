// validations
const originalValidations = [
  { equals: 'HI', type: 'success', message: '😘' },
  { equals: 'FU', type: 'error', message: '🤬' }
];
const reversedValidations = originalValidations
  .map(item => ({ ...item, equals: item.equals === 'HI' ? 'FU' : 'HI' }));

// elements
const reverseButton = document.getElementById('reverse');
const nativeInput = document.querySelector('native-input');
const litInput = document.querySelector('lit-input');
const vueInput = document.querySelector('vue-input');

// another way of setting props
litInput.validations = originalValidations;
vueInput.validations = originalValidations;

// events
reverseButton.addEventListener('click', reverseValidations);
nativeInput.addEventListener('change', onChanged);

function reverseValidations() {
  const isReversed = reverseButton.classList.contains('reversed');
  const validations = isReversed ? originalValidations : reversedValidations;
  // components
  nativeInput.validations = validations;
  litInput.validations = validations;
  vueInput.validations = validations;
  // button
  reverseButton.classList[!isReversed ? 'add': 'remove']('reversed');
}

function onChanged(e) {
  const { detail } = e;
  if (!detail.type) {
    document.body.removeAttribute('class');
  } else {
    document.body.classList.add(detail.type);
  }
}
