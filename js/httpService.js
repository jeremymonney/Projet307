/*
  But :    controller
  Auteur : Jeremy Monney
  Date :   05.06.2023 / V1.0
*/
/*
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "<API_key>" // Replace this
const finnhubClient = new finnhub.DefaultApi()
*/

class HttpService{
    constructor(){}

    getQuote(symbol){
        let quote = {
            "url": "https://finnhub.io/api/v1/quote?symbol=" +symbol +"&token=chusla9r01qruokjh2r0chusla9r01qruokjh2rg",
            "method": "GET",
            "timeout": 0,
          };
    }

}