var React = require('react');
var ReactDOM = require('react-dom');
var StockView = require('./components/stockView.component');

ReactDOM.render(
    <StockView />,
    document.getElementById('stockView')
);

ReactDOM.render(
  React.createElement(StockView, null),
  document.getElementById('stockView')
);
