/*
  But :    JS to load the view
  Auteur : Jeremy Monneys
  Date :   12.06.2023
  Version: 1.0
*/
class VueService {
  constructor() {}

  chargerVue(vue, callback) {
    $("#view").load("views/" + vue + ".html", function () {
      if (typeof callback !== "undefined") {
        callback();
      }
    });
  }

  chargerVueSimple(vue) {
    $("#view").load("views/" + vue + ".html");
  }
}
