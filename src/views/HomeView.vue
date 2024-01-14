<template>
  <div class="uvod">
    <h1 class="nadpis">Vitajte na stránkach o dogtrekkingu</h1>
 
      <article>
        Dogtrekking je kynologický outdoorový šport, pri ktorom pretekári rozvíjajú svoje fyzické aj psychické schopnosti.
      </article>

      <img :src="uvod" alt="uvod" class="obr">
    </div>
</template>

<script>
export default {
  data() {
    return {
      uvod: 'uvod.jpg'
    }
  }
}
</script>
<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;

}

.nadpis {
  font-weight: bolder;

  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}


article{
  padding: 20px;
  margin: 10px;
  font-size: large;
  
}

.obr {
  width: 50%;
}
</style>
