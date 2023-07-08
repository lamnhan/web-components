const originalPlaceholder = 'Type OK or NG';
const badassPlaceholder = 'Type HI or FU';
const originalValidations = [
  { equals: 'OK', type: 'success', message: '👍' },
  { equals: 'NG', type: 'error', message: '👎' }
];
const badassValidations = [
  { equals: 'HI', type: 'success', message: '😘' },
  { equals: 'FU', type: 'error', message: '🤬' }
];

// element refs
const switchModeButton = document.getElementById('switch-mode');
const nativeInput = document.querySelector('native-input');
const litInput = document.querySelector('lit-input');
const vueInput = document.querySelector('vue-input');

// another way of setting props
// nativeInput.placeholder = originalPlaceholder;
// nativeInput.validations = originalValidations;
// litInput.placeholder = originalPlaceholder;
// litInput.validations = originalValidations;
// vueInput.placeholder = originalPlaceholder;
// vueInput.validations = originalValidations;

// events
switchModeButton.addEventListener('click', switchMode);
nativeInput.addEventListener('change', changeStatus);
litInput.addEventListener('change', changeStatus);
vueInput.addEventListener('change', changeStatus);

function switchMode() {
  const isBadass = switchModeButton.classList.contains('badass');
  // compute props
  const placeholder = isBadass ? originalPlaceholder : badassPlaceholder;
  const validations = isBadass ? originalValidations : badassValidations;
  // set component props
  nativeInput.placeholder = placeholder;
  nativeInput.validations = validations;
  litInput.placeholder = placeholder;
  litInput.validations = validations;
  vueInput.placeholder = placeholder;
  vueInput.validations = validations;
  // update the button
  switchModeButton.textContent = !isBadass ? 'Badass mode' : 'Normal mode';
  switchModeButton.classList[!isBadass ? 'add': 'remove']('badass');
}

function changeStatus(e) {
  const [{ type }] = e.detail || [];
  if (!type) {
    document.body.classList.remove('error', 'success');
  } else {
    document.body.classList.add(type);
  }
}
