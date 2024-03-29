/*
  But :    JS controller for news page
  Auteur : Jeremy Monney
  Date :   12.06.2023
  Version: 1.0
*/
class NewsCtrl {
  constructor() {
    this.httpServ = new HttpService();
    this.showNews("AAPL");

    const searchBar = document.getElementById("search-bar");
    const self = this;
    //listener on pressing ENTER
    searchBar.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        const searchVal = searchBar.value;
        if (searchVal === "") {
        } else {
          self.showNews(searchVal);
        }
      }
    });
  }
  //Shows the news in the html 
  //data from httpservice
  showNews(symbol) {
    document.getElementById("search-bar").innerHTML = "";
    document.getElementById("newsContainer").innerHTML = "";
    this.httpServ.getNews(symbol, (data) => {
      if (Object.keys(data).length === 0) {
        document.getElementById("newsContainer").innerHTML =
          "<p class='detail_p' style='color: red;'>No news or Invalid symbol!!!</p>";
      } else {
        for (let i = 0; i < data.length; i++) {
          const newsDiv = document.createElement("div");
          newsDiv.classList.add("news-item");

          if (data[i].image == "") {
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", "../images/placeholder_news.jpg");
            newsDiv.appendChild(imageElement);
          } else {
            const imageElement = document.createElement("img");
            imageElement.setAttribute("src", data[i].image);
            newsDiv.appendChild(imageElement);
          }

          const contentDiv = document.createElement("div");
          contentDiv.classList.add("content");

          const headlineElement = document.createElement("h2");
          headlineElement.innerHTML = data[i].headline;
          contentDiv.appendChild(headlineElement);

          const summaryElement = document.createElement("p");
          summaryElement.innerHTML = data[i].summary;
          contentDiv.appendChild(summaryElement);

          const sourceElement = document.createElement("p");
          sourceElement.innerHTML = "Source: " + data[i].source;
          contentDiv.appendChild(sourceElement);

          const linkElement = document.createElement("a");
          linkElement.setAttribute("href", data[i].url);
          linkElement.innerHTML = "Read more";
          contentDiv.appendChild(linkElement);

          newsDiv.appendChild(contentDiv);

          const container = document.getElementById("newsContainer");
          container.appendChild(newsDiv);
        }
      }
    });
  }
}
