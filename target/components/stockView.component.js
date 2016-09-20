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