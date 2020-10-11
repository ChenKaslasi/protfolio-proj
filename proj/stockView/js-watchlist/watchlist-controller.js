'use strict';

function onInit() {
  if (!loadFromStorage('watchlist') || loadFromStorage('watchlist').length < 1) {
    renderEmptyWatchlist()
  } else 
  renderWatchList()
}

function renderWatchList() {
  var watchlist = loadFromStorage('watchlist');
  var htmlStr = '';
  watchlist.forEach((item,index) => {
    htmlStr += `
    <tr>
    <th scope="row">${index+1}</th>
    <td class="text-info profileLink" onclick="onProfileLoad(this)">${item.symbol}</td>
    <td class="${item.symbol}">${item.time}</td>
    <td class="d-flex justify-content-center actionButtons">
      <button type="button" class="btn btn-primary watchListBtn" data-symbol="${item.symbol}" onclick="onSymbolRemove(this)">Delete</button>

    </td>
  </tr> 
`
  })
  document.querySelector('.tableBody').innerHTML = htmlStr
}

function renderEmptyWatchlist() {
  var htmlStr = '<tr><th colspan="5">Add stock to watchlist to see them here. </th></tr>';
  document.querySelector('.tableBody').innerHTML = htmlStr
}

function onSaveChanges() {
  var text =document.querySelector('.noteText').value
  document.querySelector('')

}

function onSymbolRemove(el) {
  var symbol = el.dataset.symbol;
  removeSymbol(symbol);
  onInit()
}