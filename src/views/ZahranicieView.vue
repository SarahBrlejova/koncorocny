<template>
    <main>
       
          <h1> Dogtrekking v okolitých krajinách</h1>
      <div v-for="item in krajinky.data" :key="item.id">
        <Krajiny :data="item" />
      </div>
        
    </main>
  </template>
  
  <script setup>
  import Krajiny from '@/components/Krajiny.vue'
  import { pristupDoKrajin } from "../stores/krajiny"
  const krajinky = pristupDoKrajin();
  </script>

<style scoped>

h1 {
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}
</style>

  