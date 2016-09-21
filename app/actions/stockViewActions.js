var StockViewDispatcher = require('../dispatcher/stockViewDispatcher');
var StockViewConstants = require('../constants/stockViewConstants');

var StockViewActions = {

  getStock: function (stockSymbol) {
    StockViewDispatcher.dispatch({
      actionType: StockViewConstants.STOCK_VIEW_GET_STOCK,
      stockSymbol: stockSymbol
    });

    StockViewAPI.getStock(stockSymbol);
  },

  addStock: function (stock) {
    StockViewDispatcher.dispatch({
      actionType: StockViewConstants.STOCK_LIST_FILTER_ADDED,
      stock: stock
    });
  },

  removeStock: function (stockSymbol) {
    StockViewDispatcher.dispatch({
      actionType: StockViewConstants.STOCK_LIST_STOCK_DELETED,
      stockSymbol: stockSymbol
    });
  },

  filterStocks: function (stockSymbol) {
    StockViewDispatcher.dispatch({
      actionType: StockViewConstants.STOCK_LIST_FILTERED,
      stockSymbol: stockSymbol
    });
  }
};

module.exports = StockViewActions;
