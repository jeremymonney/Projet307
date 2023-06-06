
class ChartCtrl {
  constructor() {
    this.httpServ = new HttpService();
    this.afficherQuota("APPL");
  }

   afficherQuota(symbol){
    console.log(this.httpServ.getQuota(symbol));
  }
}
