var React = require('react');
var StockViewActions = require('../actions/StockViewActions');
var StocksStore = require('../stores/StocksStore');
var StocksList = require('./stocks/stocksList.component');
var StockViewAPI =  require('../api/stockViewAPI');

var StockView = React.createClass({
  getInitialState: function () {
    return {
      stocks: StocksStore.getStocks()
    }
  },

  componentDidMount: function () {
    StockViewAPI.getStocks(['AAON', 'AAPL', 'GOOG', 'IBM', 'MSFT']);
    StocksStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    StocksStore.removeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <a className='navbar-brand'>StockView</a>
            <ul className='nav navbar-nav'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Featured Stocks</a></li>
            </ul>
          </div>
        </nav >
        <div className="container">
          <StocksList stocks={this.state.stocks} />
        </div>
      </div >
    );
  },

  _onChange: function () {
    this.setState({ stocks: StocksStore.getStocks() });
  },
});

module.exports = StockView;
