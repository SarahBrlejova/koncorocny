<template>
  <main>
    <h1 class="nadpis">Kalendár akcií na rok 2024</h1>
    <div class="uvod">
      <div class="karta" v-for="item in preteky.data" :key="item.id">
      <KartaPretekov :data="item" />
    </div>
    </div>
  </main>
</template>

<script setup>
import KartaPretekov from '@/components/KartaPretekov.vue'
import { pristupDoPretekov } from "../stores/preteky"
const preteky = pristupDoPretekov();
</script>
<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: row;
  flex-wrap: wrap;

}

.nadpis {
  font-weight: bolder;
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}
.karta{
  width: 300px;
  margin: 10px;
}


</style>