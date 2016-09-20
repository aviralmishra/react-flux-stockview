var StocksList = React.createClass({
  displayName: 'StocksList',

  getInitialState: function () {
    return {
      listFilter: ''
    };
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'panel panel-primary' },
      React.createElement(
        'div',
        { className: 'panel-heading' },
        'Market Data...'
      ),
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-2' },
            'Filter by: '
          ),
          React.createElement(
            'div',
            { className: 'col-md-4' },
            React.createElement('input', { type: 'text', value: '{this.state.listFilter}' })
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'h3',
              null,
              'Filtered by: ',
              this.state.listFilter,
              ' '
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
                  'Last Traded'
                ),
                React.createElement(
                  'th',
                  null,
                  'Low'
                ),
                React.createElement(
                  'th',
                  null,
                  'High'
                )
              )
            ),
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                { className: 'info' },
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].symbol
                ),
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].ask
                ),
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].bid
                ),
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].last_trade_date
                ),
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].low
                ),
                React.createElement(
                  'td',
                  null,
                  this.props.stocks[0].high
                ),
                React.createElement('td', null)
              )
            )
          )
        )
      )
    );
  }
});