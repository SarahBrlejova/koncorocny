<script setup>
import { RouterView } from 'vue-router';
import Hlavicka from './components/Hlavicka.vue';
import Paticka from './components/Paticka.vue';
</script>

<template>
  <header>
    <Hlavicka />
  </header>
  <RouterView />
  <footer>
    <Paticka />
  </footer>
</template>
<style scoped></style>