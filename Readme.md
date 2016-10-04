# react-flux-stockview
StockView is a responsive and interactive finance application built using React, HTML and Bootstrap.

It allows the user to:

1. Search stock(s) and view the market data from Yahoo Finance.
2. Automatically add searched stocks to their featured list
3. Remove stocks from their featured list
4. View and analyse stock's past data through graphs and charts based on past data


## Instructions to run the application
Run the following commands to run the application:

1. git clone https://github.com/aviralmishra/react-flux-stockview.git
2. cd react-flux-stockview
3. npm start

## Note

'app/config/stockViewConfig.js' file is not added to the repo as it contains sensitive information.

You will need to provide this file to get the application running. Here is the template for the file:

```
var StockViewConfig = {
	'API_URL': '<API_URL>',
	'HEADER_MASHAPE_KEY': '<X-Mashape-Key Header>',
	'HEADER_ACCEPT_KEY': '<Accept Header e.g. application/json>',
	'QUERY_KEY_TEXT': '<Query Parameter Key (If any)>'
}

module.exports = StockViewConfig;
```



