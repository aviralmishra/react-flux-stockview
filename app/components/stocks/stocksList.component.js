var StocksList = React.createClass({
  getInitialState: function () {
    return {
      listFilter: ''
    }
  },

  render: function () {
    return (

      <div className='panel panel-primary'>
        <div className='panel-heading'>
          Market Data...
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">Filter by: </div>
            <div className="col-md-4">
              <input type="text" value="{this.state.listFilter}" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Filtered by: { this.state.listFilter } </h3>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Ask</th>
                  <th>Bid</th>
                  <th>Last Traded</th>
                  <th>Low</th>
                  <th>High</th>
                </tr>
              </thead>
              <tbody>
                <tr className="info">
                  <td>{this.props.stocks[0].symbol}</td>
                  <td>{this.props.stocks[0].ask}</td>
                  <td>{this.props.stocks[0].bid}</td>
                  <td>{this.props.stocks[0].last_trade_date}</td>
                  <td>{this.props.stocks[0].low}</td>
                  <td>{this.props.stocks[0].high}</td>
                  <td>{}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
