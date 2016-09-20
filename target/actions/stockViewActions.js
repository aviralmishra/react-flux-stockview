var StockViewDispatcher = require('../dispatcher/stockViewDispatcher');
var StockViewConstants = require('../constants/stockViewConstants');

var StockViewActions = {
    addStock: function (stock) {
        ForumDispatcher.dispatch({
            actionType: StockViewConstants.STOCK_LIST_FILTER_ADDED,
            stock: stock
        });
    },

    removeStock: function (stockSymbol) {
        ForumDispatcher.dispatch({
            actionType: StockViewConstants.STOCK_LIST_STOCK_DELETED,
            stockSymbol: stockSymbol
        });
    },

    filterStocks: function (stockSymbol) {
        ForumDispatcher.dispatch({
            actionType: StockViewConstants.STOCK_LIST_FILTERED,
            stockSymbol: stockSymbol
        });
    }
};

module.exports = ForumActions;