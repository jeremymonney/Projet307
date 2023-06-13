/*
  But :    JS getting all data from Finnhub.io API
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
class HttpService {
  constructor() {}

  getQuote(symbol, successCallBack, errorCallBack) {
    let url =
      "https://finnhub.io/api/v1/quote?symbol=" +
      symbol +
      "&token=chusla9r01qruokjh2r0chusla9r01qruokjh2rg";

    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallBack,
      error: errorCallBack
    });
  }

  getChartData(symbol, successCallBack, errorCallBack) {
    let currentDate = new Date();
    let oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    let fromTimestamp = Math.floor(oneYearAgo.getTime() / 1000);
    let toTimestamp = Math.floor(currentDate.getTime() / 1000);

    return $.ajax({
      url: "https://finnhub.io/api/v1/stock/candle",
      method: "GET",
      success: successCallBack,
      error: errorCallBack,
      data: {
        symbol: symbol,
        resolution: "D",
        from: fromTimestamp,
        to: toTimestamp,
        token: "chusla9r01qruokjh2r0chusla9r01qruokjh2rg",
      },
    });
  }

  getNews(symbol, successCallBack, errorCallBack) {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, "0");
    let day = String(currentDate.getDate()).padStart(2, "0");
    let formattedDate = year + "-" + month + "-" + day;
    console.log(formattedDate);
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
      error: errorCallBack,
    });
  }
}
