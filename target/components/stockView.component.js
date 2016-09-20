var StockViewActions = require('../actions/StockViewActions');
var StocksStore = require('../stores/StocksStore');

var StockView = React.createClass({
  displayName: 'StockView',

  getInitialState: function () {
    return {
      stocks: StocksStore.getStocks()
    };
  },

  componentDidMount: function () {
    StocksStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    StocksStore.removeListener(this._onChange);
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'nav',
        { className: 'navbar navbar-default' },
        React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'a',
            { className: 'navbar-brand' },
            'StockView'
          ),
          React.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: '#' },
                'Home'
              )
            ),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { href: '#' },
                'Featured Stocks'
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(StocksList, { stocks: this.state.stocks })
      )
    );
  },

  _onChange: function () {
    this.setState({ stocks: StocksStore.getStocks() });
  },

  _onStocksFilter: function (stockSymbol) {
    StockViewActions.filterStocks(stockSymbol);
  }
});