var StockRow = React.createClass({
  displayName: "StockRow",


  getInitialState: function () {
    return {};
  },
  render: function () {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.stock.symbol
      ),
      React.createElement(
        "td",
        null,
        this.props.stock.symbol
      ),
      React.createElement(
        "td",
        null,
        this.props.stock.ask
      ),
      React.createElement(
        "td",
        null,
        this.props.stock.bid
      ),
      React.createElement(
        "td",
        null,
        this.props.stock.last_trade_date
      )
    );
  }
});