var StockView = React.createClass({
  getInitialState: function () {
    return {
      stocks: [
        {
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
        }
      ]
    }
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
  }
});
