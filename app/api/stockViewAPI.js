var StockViewServerActions = require('../actions/stockViewServerActions');
var StockViewConfig = require('../config/stockViewConfig');

var request = require('superagent');

var StockViewAPI = {
  getStocks: function (symbols) {
    var query = "&" + StockViewConfig.QUERY_KEY_TEXT + "=" + symbols.join(',');

    request.get(StockViewConfig.API_URL + query)
      .set('X-Mashape-Key', StockViewConfig.HEADER_MASHAPE_KEY)
      .set('Accept', StockViewConfig.HEADER_ACCEPT_KEY)
      .end(function (err, response) {
        if (err) return console.error(err);

        StockViewServerActions.getStocks(response.body);
      });
  }
};

module.exports = StockViewAPI;
