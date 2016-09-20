var StockRow = React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function () {
    return (
      <tr>
        <td>{this.props.stock.symbol}</td>
        <td>{this.props.stock.symbol}</td>
        <td>{this.props.stock.ask}</td>
        <td>{this.props.stock.bid}</td>
        <td>{this.props.stock.last_trade_date}</td>
      </tr>
    );
  }
});
