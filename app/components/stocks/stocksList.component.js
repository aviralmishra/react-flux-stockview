var React = require('react');

var StockViewActions = require('../../actions/StockViewActions');
var StockRow = require('./stockRow.component');

var StocksList = React.createClass({
  getInitialState: function () {
    return {
      listFilter: ''
    }
  },
  _onStocksFilter: function (event) {
    StockViewActions.filterStocks(event.target.value);
  },
  render: function () {
    var listFilter = this.state.listFilter;
    var allStocks = this.props.stocks;
    var stockRows = [];

    for (var key in allStocks) {
      stockRows.push(<StockRow key={key} id={key} stock={allStocks[key]}/>);
    }

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          Featured Stocks
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-3">Filter by:
              <div className="form-group">
                <input className="form-control" value={listFilter} onChange={this._onStocksFilter} />
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Stock</th>
                  <th>Ask</th>
                  <th>Bid</th>
                  <th>Last Traded Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stockRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = StocksList;
