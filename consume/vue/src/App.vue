<template>
  <div ref="hostRef" class="host">

    <button
      @click="isBadass = !isBadass"
      :class="{ badass: isBadass }"
    >{{ !isBadass ? 'Nomal mode' : 'Badass mode' }}</button>
  
    <native-input
      label="Native"
      :placeholder="placeholder"
      .validations="validations"
      @change="changeStatus"
    ></native-input>
  
    <lit-input
      label="Lit"
      :placeholder="placeholder"
      .validations="validations"
      @change="changeStatus"
    ></lit-input>
  
    <vue-input
      label="Vue"
      :placeholder="placeholder"
      .validations="validations"
      @change="changeStatus"
    ></vue-input>

  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { Validation } from '../../../src/types';
  import '../../../build/native/standalone/input.js';
  import '../../../build/lit/standalone/input.js';
  import '../../../build/vue/standalone/input.umd.min.js';

  const originalPlaceholder = 'Type OK or NG';
  const originalValidations = [
    { equals: 'OK', type: 'success', message: '👍' },
    { equals: 'NG', type: 'error', message: '👎' }
  ] as Validation[];
  const badassPlaceholder = 'Type HI or FU';
  const badassValidations = [
    { equals: 'HI', type: 'success', message: '😘' },
    { equals: 'FU', type: 'error', message: '🤬' }
  ] as Validation[];

  const hostRef = ref<HTMLElement>();
  const isBadass = ref(false);
  const placeholder = computed(() =>  isBadass.value ? badassPlaceholder : originalPlaceholder);
  const validations = computed(() => isBadass.value ? badassValidations : originalValidations);

  function changeStatus(e: CustomEvent) {
    const [{ type }] = e.detail || [];
    if (!type) {
      hostRef.value?.classList.remove('error', 'success');
    } else {
      hostRef.value?.classList.add(type);
    }
  }
</script>

<style scoped>
  .host {
    display: block;
    position: relative; 
  }

  .host > * {
    margin-bottom: 2rem;
  }

  .host::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: .15;
  }

  .host.error::before {
    background: var(--color-danger);
  }

  .host.success::before {
    background: var(--color-success);
  }

  button {
    display: block;
    margin: 0 auto 3rem;
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fff;
    cursor: pointer;
    font-size: 1.3rem;
  }

  button.badass {
    background: #333;
    color: #fff;
  }
</style>
