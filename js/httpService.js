/*
  But :    JS getting all data from Finnhub.io API
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
class HttpService {
  constructor() {}
  //Error management
  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }
  //Gets chart infos
  getQuote(symbol, successCallBack) {
    let url =
      "https://finnhub.io/api/v1/quote?symbol=" +
      symbol +
      "&token=chusla9r01qruokjh2r0chusla9r01qruokjh2rg";

    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallBack,
    });
  }
  //Gets data for chart
  getChartData(symbol, successCallBack) {
    let currentDate = new Date();
    let oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    let fromTimestamp = Math.floor(oneYearAgo.getTime() / 1000);
    let toTimestamp = Math.floor(currentDate.getTime() / 1000);

    return $.ajax({
      url: "https://finnhub.io/api/v1/stock/candle",
      method: "GET",
      success: successCallBack,
      data: {
        symbol: symbol,
        resolution: "D",
        from: fromTimestamp,
        to: toTimestamp,
        token: "chusla9r01qruokjh2r0chusla9r01qruokjh2rg",
      },
    });
  }
  //Gets news infos
  getNews(symbol, successCallBack) {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, "0");
    let day = String(currentDate.getDate()).padStart(2, "0");
    let formattedDate = year + "-" + month + "-" + day;
    let url =
      "https://finnhub.io/api/v1/company-news?symbol=" +
      symbol +
      "&from=" +
      formattedDate +
      "&to=" +
      formattedDate +
      "&token=chusla9r01qruokjh2r0chusla9r01qruokjh2rg";
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallBack,
    });
  }
}
