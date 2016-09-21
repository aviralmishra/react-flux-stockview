var StockViewDispatcher = require('../dispatcher/stockViewDispatcher');
var StockViewConstants = require('../constants/stockViewConstants');

var StockViewServerActions = {

  getStocks: function (response) {
    StockViewDispatcher.dispatch({
      actionType: StockViewConstants.STOCK_VIEW_LOAD_STOCKS,
      response: response
    });
  }
};

module.exports = StockViewServerActions;
