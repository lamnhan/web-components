<template>
  <label part="input" :class="messageType">
    <strong>{{ label || 'Label' }}</strong>
    <div>
      <input type="text" @input="onChanged" />
      <em>{{ messageText }}</em>
    </div>
  </label>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  label: String,
  validations: Array,
})

const messageType = ref()
const messageText = ref()

function onChanged(e) {
  if (!props.validations) return
  const value = e?.target?.value;
  for (let i = 0; i < validations.length; i++) {
    const { equals, type, message } = validations[i];
    const match = value.toLowerCase() === equals.toLowerCase();
    messageType.value = !match ? '' : type;
    messageText.value = !match ? '' : message;
    if (match) break;
  }
}

</script>

<style>
  :host {
    display: block;
    container-type: inline-size;
    position: relative;
    width: 100%;
  }
  
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  strong {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    flex: 1;
    outline: none;
    box-sizing: border-box;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 0.25rem 0 0 0.25rem;
    font-size: 1.5rem;
  }

  em {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-style: normal;
    width: 3.5rem;
    height: 3.5rem;
    background-color: #ccc;
    border-radius: 0 0.25rem 0.25rem 0;
    text-shadow: 0px 0px 2px #fff;
    font-size: 3rem;
  }

  .error input {
    border-color: var(--color-danger);
  }

  .error em {
    background-color: var(--color-danger);
  }

  .success input {
    border-color: var(--color-success);
  }

  .success em {
    background-color: var(--color-success);
  }
</style>