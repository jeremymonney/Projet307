/*
  But :    JS controller for index paage
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
$().ready(function () {
  indexCtrl = new IndexCtrl();
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
    this.vue.chargerVue("chart", () => new ChartCtrl());
  }

  loadNews() {
    this.vue.chargerVue("news", () => new NewsCtrl());
  }

  loadMap() {
    this.vue.chargerVue("map", () => new MapCtrl());
  }
}
