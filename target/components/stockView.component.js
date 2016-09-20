var StockView = React.createClass({
  displayName: "StockView",

  getInitialState: function () {
    return {
      stocks: [{
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
      }]
    };
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        { className: "navbar navbar-default" },
        React.createElement(
          "div",
          { className: "container-fluid" },
          React.createElement(
            "a",
            { className: "navbar-brand" },
            "StockView"
          ),
          React.createElement(
            "ul",
            { className: "nav navbar-nav" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                "Featured Stocks"
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(StocksList, { stocks: this.state.stocks })
      )
    );
  }
});