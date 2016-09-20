var StocksList = React.createClass({
  getInitialState: function () {
    return {
      listFilter: ''
    }
  },
  render: function () {
    var allStocks = this.props.stocks;
    var stockRows = [];

    for(var key in allStocks) {
      stockRows.push(<StockRow key={key} id={key} stock={allStocks[key]} />);
    }

    return (
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          Featured Stocks
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">Filter by: </div>
            <div className="col-md-4">
              <input type="text" value="{this.state.listFilter}" />
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
