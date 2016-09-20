var StocksFilter = React.createClass({
  displayName: "StocksFilter",

  getInitialState: function () {
    return {
      listFilter: ''
    };
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "col-md-4 col-md-offset-4" },
      React.createElement(
        "div",
        { className: "login-panel panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-heading" },
          React.createElement(
            "h3",
            { className: "panel-title" },
            "Stocks..."
          )
        ),
        React.createElement(
          "div",
          { className: "panel-body" },
          React.createElement(
            "form",
            { role: "form" },
            React.createElement(
              "fieldset",
              null,
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement("input", { className: "form-control", placeholder: "AAPL, IBM, MSFT", name: "stocks", autofocus: true })
              ),
              React.createElement(
                "button",
                { type: "button", className: "btn btn-primary btn-block" },
                "Fetch"
              )
            )
          )
        )
      )
    );
  }
});