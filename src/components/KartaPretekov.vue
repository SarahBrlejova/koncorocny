<template> 
    <div class="karta">
      <img :src="data.image" :alt="data.nazov" />
      <h2>{{ data.nazov }}</h2>
  
      <div>
        <div>{{ data.poloha }}</div>
        <div>{{ data.datum }}</div>
      </div>
      <RouterLink :to="{ name: 'kalendar-podrobnosti', params: { id: data.id } }"> Viac informácií</RouterLink>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink,
    },
  
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
<style  scoped>
.karta{
  margin: 20px;
}
</style>
  