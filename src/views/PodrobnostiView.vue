<template>
  <button @click="$router.back()"> Naspäť na kalendár</button>
  <div class="uvod" v-if="pretek">
    <h1 class="nadpis">{{ pretek.nazov }}</h1>
    <article>
      <p>Dĺžka pretekov: {{ pretek.km }} </p>
      <p>Miesto konanie pretekov: {{ pretek.poloha }}</p>
      <p>Dátum pretekov: {{ pretek.datum }}</p>
      <p> Odkaz na stránku pretekov: <a :href="pretek.odkaz">{{ pretek.odkaz }}</a></p>
      <p>Popis: {{ pretek.popis }} </p>
    </article>
  </div>
  <div v-else>
    <p>Pretek nebol nájdený.</p>
  </div>
</template>

<script>
import { pristupDoPretekov } from '../stores/preteky';

export default {
  data() {
    return {
      pretek: null,

    };
  },
  mounted() {
    const store = pristupDoPretekov();
    const id = parseInt(this.$route.params.id, 10);
    this.pretek = store.data.find(p => p.id === id);
  }
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

article {
  border: 2px solid #584B53;
  margin: 20px;
  padding: 30px;
  border-radius: 5px;

}

a {
  color: #584B53;
  font-style: italic;
}

button {
 margin: 10px;
padding: 10px;  

color: #584B53;
}
button:hover {
  font-size: 15px;
}
.nadpis {
  font-weight: bolder;

  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}
</style>

