var EventEmitter = require('events').EventEmitter;
var StockViewDispatcher = require('../dispatcher/stockViewDispatcher');
var StockViewConstants = require('../constants/stockViewConstants');

var stocks = [{
  "symbol": "AAPL",
  "ask": "593.00",
  "bid": "592.88",
  "last_trade_date": "5/14/2014",
  "low": "591.74",
  "high": "597.40",
  "low_52_weeks": "388.87",
  "high_52_weeks": "604.41",
  "volume": "5270360",
  "open": "592.43",
  "close": "592.95"
}, {
  "symbol": "MSFT",
  "ask": "40.15",
  "bid": "40.14",
  "last_trade_date": "5/14/2014",
  "low": "40.05",
  "high": "40.45",
  "low_52_weeks": "30.84",
  "high_52_weeks": "41.66",
  "volume": "14780003",
  "open": "40.30",
  "close": "40.155"
}, {
  "symbol": "GOOG",
  "ask": "526.08",
  "bid": "525.82",
  "last_trade_date": "5/14/2014",
  "low": "525.29",
  "high": "533.00",
  "low_52_weeks": "502.80",
  "high_52_weeks": "604.83",
  "volume": "961141",
  "open": "531.95",
  "close": "525.90"
}];

var StocksStore = new EventEmitter();

StocksStore.emitChange = function () {
  this.emit('change');
};

StocksStore.addChangeListener = function (listener) {
  this.on('change', listener);
};

StocksStore.getStocks = function () {
  return stocks;
};

StocksStore.addStock = function (newStock) {
  stocks[Object.keys(stocks).length + 1] = {
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
  var remainingStocks = stocks.filter(function (elem) {
    return !elem['symbol'].toUpperCase().equals(stockSymbol.toUpperCase());
  });
  stocks = remainingStocks;

  this.emitChange();
};

StocksStore.filterStocks = function (stockSymbol) {
  var filteredStocks = stocks.filter(function (elem) {
    return elem['symbol'].toUpperCase().startsWith(stockSymbol.toUpperCase());
  });
  stocks = filteredStocks;

  this.emitChange();
};

StockViewDispatcher.register(function (action) {
  switch (action.actionType) {
    case StockViewConstants.STOCK_LIST_STOCK_ADDED:
      {
        StocksStore.addStock(action.stock);
        break;
      }
    case StockViewConstants.STOCK_LIST_STOCK_DELETED:
      {
        StocksStore.removeStock(action.stockSymbol);
        break;
      }
    case StockViewConstants.STOCK_LIST_FILTERED:
      {
        StocksStore.filterStocks(action.stockSymbol);
        break;
      }
  }
});

module.exports = ForumStore;