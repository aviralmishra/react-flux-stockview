var StocksList = React.createClass({
  displayName: 'StocksList',

  getInitialState: function () {
    return {
      listFilter: ''
    };
  },
  onListFilterChange: function (event) {
    this.setState({ listFilter: event.target.value });
  },
  onDelete: function (event) {
    console.log(event.target.value);
  },
  render: function () {
    var listFilter = this.state.listFilter;
    var allStocks = this.props.stocks;
    var stockRows = [];

    for (var key in allStocks) {
      stockRows.push(React.createElement(StockRow, { key: key, id: key, stock: allStocks[key], onDelete: this.onDelete }));
    }

    return React.createElement(
      'div',
      { className: 'panel panel-primary' },
      React.createElement(
        'div',
        { className: 'panel-heading' },
        'Featured Stocks'
      ),
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-3' },
            'Filter by:',
            React.createElement(
              'div',
              { 'class': 'form-group' },
              React.createElement('input', { 'class': 'form-control', value: listFilter, onChange: this.onListFilterChange })
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'table-responsive' },
          React.createElement(
            'table',
            { className: 'table' },
            React.createElement(
              'thead',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'th',
                  null,
                  'Symbol'
                ),
                React.createElement(
                  'th',
                  null,
                  'Stock'
                ),
                React.createElement(
                  'th',
                  null,
                  'Ask'
                ),
                React.createElement(
                  'th',
                  null,
                  'Bid'
                ),
                React.createElement(
                  'th',
                  null,
                  'Last Traded Date'
                ),
                React.createElement(
                  'th',
                  null,
                  'Actions'
                )
              )
            ),
            React.createElement(
              'tbody',
              null,
              stockRows
            )
          )
        )
      )
    );
  }
});