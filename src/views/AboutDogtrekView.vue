<script setup>

</script>

<template>
  <h1 class="nadpis">Niečo o dogtrekkingu</h1>

  <div class="uvod">
    <h2 class="nadpis2">Čo je to dogtrekking?</h2>
    <article class="art">
      <p>Dog-trekking je extrémny vytrvalostný šport, pri ktorom sa v časovom limite prekonávajú mimoriadne vzdialenosti.
      </p>
      <p>Pri dogtrekkingu je psovod buď spojený so psom pomocou postroja a vodítka pripevneného na bedrovom páse, alebo
        vedie psa len na vodítku (alebo ich strieda). V žiadnom prípade nie je možné venčiť psa "na voľno" (ani na krátky
        čas).</p>
      <p>Podujatia dogtrekkingu sa zvyčajne organizujú na 100 a viac kilometrov. Najkratšie podujatie dogtrekkingu možno
        rešpektovať ako 80 km. Sú buď etapové (iné miesto štartu a cieľa), alebo rešpektujú len časový limit. Pri etapovom
        dogtrekkingu je odporúčaná dĺžka etapy minimálne 40 km.</p>
      <p>Účastníci sú počas dogtrekkingu odkázaní sami na seba a pred začiatkom podujatia podpíšu vyhlásenie, v ktorom
        uvedú, že sa podujatia zúčastňujú výlučne na vlastné riziko a že sú si vedomí plnej zodpovednosti za seba a svojho
        psa.</p>

      <p>Dogtrekking je zložený z niekoľkých závodov, musí ich však byť minimálne 6, na konci sezóny sa vyhlasuje víťazi z
        každej kategórie. Vyhlasuje sa prvých 5 najlepších, bodovanie funguje tak, že na každom závode podľa umiestnenia
        dostanete body a kto ich má na konci sezóny najviac, vyhrá. </p>
    </article>


    <h2 class="nadpis2">Ako vznikol?</h2>


    <article class="art">
      <p>Dog trekking alebo orientačný beh so psom je jednou z najmladších psích aktivít v Českej republike. Jeho história
        sa začala písať v roku 2000, keď sa v Žďárských vrchoch uskutočnili prvé preteky s názvom Osamelý vlk. Za týmito
        pretekmi a vôbec za myšlienkou priniesť dogtrekking do ČR stojí priateľ, spisovateľ, obdivovateľ aljašských
        malamutov, človek s neúnavnými túlavými nohami, Jaroslav Monte Kvasnica.
      </p>
    </article>


    <h2 class="nadpis2">Pridružené aktivity</h2>
    <article class="art">
      <p>Na závodoch najčastejšie narazíte na 3 katégórie pretekov. LONG - dogtrekking nad 80KM, MID - dogmaraton cca
        42km, SHORT býva okolo 20km a častokrát sa nevyhodnocuje, prípadne sa vyhodnotí hneď po dobehnutí.
      </p>
      <p>
        Dogmaratón ma tiež svoju vlastnú sériu závodov, na konci sezóny sa vyhlásia víťazi každej kategórie
      </p>

      <p> Aby som uviedla všetko na správnu mieru, medzi Longármi (ľudia čo idú LONG) a ostatným bývajú rôzne hádky a
        posudzovanie kto je lepší. Keďže preteky pôvodne vznikli ako dogtrekking, veľa ľudí je veľmi prísnych na označenie
        pretekov pod 80km názvom dogtrek a často sa dohadujú. Tieto závody organizujú ľudia čo chodia alebo chodili
        dogtrekking. Niekedy sa SHORTy nekonajú preto, lebo ľudia čo chodia na 20km tak s nimi býva viac problémov a
        odvozov z trate, než s kýmkoľvek iným.</p>
    </article>
 
    <p> <router-link to="/pravidla" class="odkaz">Pre viac informácií o pravidlách</router-link></p>
    
  </div>
</template>


<style scoped>
.uvod {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;

}

.nadpis {
  text-align: center;
  padding: 20px;
  margin: 10px;
  font-size: 35px;
}

.nadpis2 {
  text-align: center;
  
  font-size: 25px;

}


.art {

  padding: 20px;
  margin: 10px;
  font-size: large;

}

.art p {
  padding: 10px;
}

.obr {
  width: 50%;
}
</style>
