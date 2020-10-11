'use strict';

function savaWatchList(symbol) {
  var item =createWatchListItem(symbol);
  var watchlist = loadFromStorage('watchlist');
  if(Array.isArray(watchlist) && watchlist.length) {
    watchlist.push(item) 
    saveToStorage('watchlist',watchlist) ;
  } else saveToStorage('watchlist',[item]) ;
}

function createWatchListItem(symbol) {
  var item = {
    symbol: symbol ,
    time: formatDate(),
    notes : ''
  }
  return item
}

function removeSymbol(symbol) {
  var watchlist = loadFromStorage('watchlist');
  var filterd = watchlist.filter((item) => {
    return item.symbol !== symbol
  })
  saveToStorage('watchlist',filterd) ;
}
