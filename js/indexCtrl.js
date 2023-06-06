/*
  But :    controller
  Auteur : Jeremy Monney
  Date :   05.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  //http = new HttpService();
  //http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
  indexCtrl = new IndexCtrl();  // ctrl principal
  //listener pour home
});

class IndexCtrl {
  constructor() {
    this.vue = new VueService();
    this.loadHome();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadHome() {
    this.vue.chargerVueSimple("home");
  }

  loadChart() {
    this.vue.chargerVue("chart", () =>  new ChartCtrl());
  }

  loadNews() {
    this.vue.chargerVue("news", () =>  new NewsCtrl());
  }

  loadMap() {
    this.vue.chargerVue("map", () =>  new ChartCtrl());
  }
}
