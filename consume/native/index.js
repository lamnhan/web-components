// validations
const originalValidations = [
  { equals: 'OK', type: 'success', message: '👍' },
  { equals: 'NG', type: 'error', message: '👎' }
];
const badassValidations = [
  { equals: 'HI', type: 'success', message: '😘' },
  { equals: 'FU', type: 'error', message: '🤬' }
];

// elements
const switchModeButton = document.getElementById('switch-mode');
const nativeInput = document.querySelector('native-input');
const litInput = document.querySelector('lit-input');
const vueInput = document.querySelector('vue-input');

// another way of setting props
litInput.validations = originalValidations;
vueInput.validations = originalValidations;

// events
switchModeButton.addEventListener('click', switchMode);
nativeInput.addEventListener('change', changeStatus);
litInput.addEventListener('change', changeStatus);

function switchMode() {
  const isBadass = switchModeButton.classList.contains('badass');
  const validations = isBadass ? originalValidations : badassValidations;
  // components
  nativeInput.validations = validations;
  litInput.validations = validations;
  vueInput.validations = validations;
  // button
  switchModeButton.classList[!isBadass ? 'add': 'remove']('badass');
}

function changeStatus(e) {
  const { detail } = e;
  if (!detail.type) {
    document.body.removeAttribute('class');
  } else {
    document.body.classList.add(detail.type);
  }
}
