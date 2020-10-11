'use strict';

var gCurrChart = '';


function onProfileLoad(el) {
  localStorage.setItem('currentStock', el.innerHTML)
  window.location = 'profile.html'
}

function getStockProfile() {
  var val = localStorage.getItem('currentStock') || 'AAPL'
  fetchData(val)
}

function renderPage(data) {
  renderStockCard(data);
  renderChart(data);
  renderProfile(data);
}

function renderStockCard(data) {
  var stockData = data;
  var htmlString =
    `<h5 class="card-title h1">${(`${stockData.Name}(${stockData.Symbol})`)}<p class=" text-muted mr-5 t-0 h6 d-inline ">${stockData.Exchange} exchange | currency in
  ${stockData.Currency}</p>
  <button class="btn btn-outline-primary float-right mx-5 font-weight-bold "
  type="submit" data-symbol=${stockData.Symbol} onclick="onSaveToWatchlist(this)">⭐ Add to
  watchlist</button>
  </h5>
  <p class="d-inline text-info mx-0">Sector: ${stockData.Sector} |</p>
  <p class="d-inline text-info mx-0">Industry: ${stockData.Industry} |</p>
  <p class="d-inline text-info mx-0">Analyst Price target: ${stockData.AnalystTargetPrice}</p>
  `;
  document.querySelector('.stockCard').innerHTML = htmlString
}

function renderChart(data) {
  var stockData = data;
  var htmlString =
    `<div id="tradingview_057f2"></div>
  <div class="tradingview-widget-copyright"><a " href="https://www.tradingview.com/symbols/${stockData.Exchange}-${stockData.Symbol}/" rel="noopener"
  target="_blank"><span class="blue-text">${stockData.Symbol} Chart</span></a> by TradingView</div>`

  document.querySelector('.tradingViewChart').innerHTML = htmlString
  var widget = new TradingView.widget(
    {
      "width": 1000,
      "height": 500,
      "symbol": `${stockData.Exchange}:${stockData.Symbol}`,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tradingview_057f2"
    }
  );

  // gCurrChart = widget.options.symbol.split(":")[1];


  var Elwidget = document.createElement('div');
  Elwidget.innerHTML = widget
  document.querySelector('.tradingViewChart').appendChild = Elwidget
}

function renderProfile(data) {
  var stockData = data;
  var htmlString = stockData.Description
  document.querySelector('.description').innerHTML = htmlString
}

function onSaveToWatchlist(el) {
  var symbol = el.dataset.symbol;
  savaWatchList(symbol);
  el.disabled = true
}