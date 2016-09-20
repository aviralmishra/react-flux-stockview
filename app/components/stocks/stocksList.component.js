var StocksList = React.createClass({
  getInitialState: function () {
    return {
      listFilter: ''
    }
  },
  handleChange: function (event) {
    this.setState({ listFilter: event.target.value });
  },
  render: function () {
    var listFilter = this.state.listFilter;

    var allStocks = this.props.stocks;
    var filteredStocks = allStocks.filter(function (elem) {
      return elem['symbol'].toUpperCase().startsWith(listFilter.toUpperCase());
    });

    var stockRows = [];
    for (var key in filteredStocks) {
      stockRows.push(<StockRow key={key} id={key} stock={filteredStocks[key]} />);
    }

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          Featured Stocks
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-3">Filter by:
              <div class="form-group">
                <input class="form-control" value={listFilter} onChange={this.handleChange} />
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
