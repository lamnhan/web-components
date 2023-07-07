import { defineCustomElement } from 'vue';
import VueInputCE from './input.ce.vue';

const VueInput = defineCustomElement(VueInputCE)
customElements.define('vue-input', VueInput)
