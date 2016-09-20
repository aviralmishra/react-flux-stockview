var StockRow = React.createClass({
  displayName: "StockRow",

  propTypes: {
    stock: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired
  },
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
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "button",
          {
            type: "button",
            value: this.props.stock.symbol,
            className: "btn btn-danger btn-circle btn-xl", onClick: this.props.onDelete },
          React.createElement("i", { className: "fa fa-times", "aria-hidden": "true" })
        )
      )
    );
  }
});