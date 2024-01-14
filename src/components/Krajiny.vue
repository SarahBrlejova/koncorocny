<template>
  <div class="uvod">
    <h2>{{ data.nazov }}</h2>
    <div>
     <article>
      <p>{{ data.popis }}</p>
      <p> Odkaz na stránku pretekov: <a :href="data.odkaz">{{ data.odkaz }}</a></p>
     </article>
    </div>
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
<style scoped>
.uvod {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
}


.uvod h2 {
    text-align: center;
    padding: 10px;
    font-size: 25px;



}

.uvod p {
    margin: 10px;

}

.uvod article {
    font-size: 17px;
    max-width: 1000px;
}
</style>
  
 
  