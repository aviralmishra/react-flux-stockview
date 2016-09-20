var React = require('react');

var StockViewActions = require('../../actions/StockViewActions');

var StockRow = React.createClass({
  propTypes: {
    stock: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
    }
  },

  _onDelete: function (event) {
    StockViewActions.removeStock(this.props.stock.symbol);
  },

  render: function () {
    return (
      <tr>
        <td>{this.props.stock.symbol}</td>
        <td>{this.props.stock.symbol}</td>
        <td>{this.props.stock.ask}</td>
        <td>{this.props.stock.bid}</td>
        <td>{this.props.stock.last_trade_date}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-circle btn-xl" onClick={this._onDelete}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }
});

module.exports = StockRow;
