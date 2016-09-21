var EventEmitter = require('events').EventEmitter;
var StockViewDispatcher = require('../dispatcher/stockViewDispatcher');
var StockViewConstants = require('../constants/stockViewConstants');

var StocksStore = new EventEmitter();

var _stocks = [];

StocksStore.emitChange = function () {
  this.emit('change');
};

StocksStore.addChangeListener = function (listener) {
  this.on('change', listener);
};

StocksStore.getStocks = function () {
  return _stocks;
};

StocksStore.loadStocks = function (response) {
  _stocks = response;

  this.emitChange();
  return _stocks;
};

StocksStore.addStock = function (newStock) {
  _stocks[Object.keys(_stocks).length + 1] = {
    "symbol": newStock.symbol,
    "ask": newStock.ask,
    "bid": newStock.bid,
    "last_trade_date": newStock.last_trade_date,
    "low": newStock.low,
    "high": newStock.high,
    "low_52_weeks": newStock.low_52_weeks,
    "high_52_weeks": newStock.high_52_weeks,
    "volume": newStock.volume,
    "open": newStock.open,
    "close": newStock.close
  };

  this.emitChange();
};

StocksStore.removeStock = function (stockSymbol) {
  var remainingStocks = _stocks.filter(function (elem) {
    return elem['symbol'].toUpperCase().indexOf(stockSymbol.toUpperCase());
  });
  _stocks = remainingStocks;

  this.emitChange();
}

StocksStore.filterStocks = function (stockSymbol) {
  var filteredStocks = _stocks.filter(function (elem) {
    return elem['symbol'].toUpperCase().startsWith(stockSymbol.toUpperCase());
  });
  _stocks = filteredStocks;

  this.emitChange();
}

StockViewDispatcher.register(function (action) {
  switch (action.actionType) {
    case StockViewConstants.STOCK_VIEW_LOAD_STOCKS: {
      StocksStore.loadStocks(action.response);
      break;
    }
    case StockViewConstants.STOCK_LIST_STOCK_ADDED: {
      StocksStore.addStock(action.stock);
      break;
    }
    case StockViewConstants.STOCK_LIST_STOCK_DELETED: {
      StocksStore.removeStock(action.stockSymbol);
      break;
    }
    case StockViewConstants.STOCK_LIST_FILTERED: {
      StocksStore.filterStocks(action.stockSymbol);
      break;
    }
  }
});

module.exports = StocksStore;
