/*
  But :    JS controller for chart data
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
class ChartCtrl {
  constructor() {
    this.httpServ = new HttpService();
    this.showQuote("AAPL");
    this.showChart("AAPL");

    const searchBar = document.getElementById("search-bar");
    const self = this;

    searchBar.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        const searchVal = searchBar.value;
        if(searchVal === ""){
        }else{
          self.showQuote(searchVal);
          self.showChart(searchVal);
        }
      }
    });
  }

  showQuote(symbol) {
    this.httpServ.getQuote(symbol, (data) => {
      if (data.c === 0) {
        document.getElementById("chart_div2").innerHTML =
          "<p class='detail_p' style='color: red;'>Invalid symbol!!!</p>";
      }else{
        document.getElementById("chart_symbol").innerHTML = symbol;
        document.getElementById("chart_c").innerHTML = data.c;
        document.getElementById("chart_d").innerHTML = data.d;
        if (data.dp > 0) {
          document.getElementById("chart_dp").innerHTML = data.dp + "%";
          document.getElementById("chart_dp").style.color = "#2bd900";
        } else {
          document.getElementById("chart_dp").innerHTML = data.dp + "%";
          document.getElementById("chart_dp").style.color = "red";
        }
        document.getElementById("chart_h").innerHTML = data.h;
        document.getElementById("chart_l").innerHTML = data.l;
        document.getElementById("chart_o").innerHTML = data.o;
        document.getElementById("chart_pc").innerHTML = data.pc;
      }
    });
  }

  showChart(symbol) {
    const chartContainer = document.getElementById("chart-container");
    // Destroy the existing chart
    while (chartContainer.firstChild) {
      chartContainer.firstChild.remove();
    }
    this.httpServ.getChartData(symbol).done(function (response) {
      let seriesData = [];
      if(response.t === undefined){
        console.log("No data");
      }else{
        for (var i = 0; i < response.t.length; i++) {
          seriesData.push([
            response.t[i] * 1000,
            response.o[i],
            response.h[i],
            response.l[i],
            response.c[i],
          ]);
        }
        Highcharts.stockChart("chart-container", {
          series: [
            {
              type: "candlestick",
              data: seriesData,
            },
          ],
          // Additional chart options
        });
      }
    });
  }
  
}
