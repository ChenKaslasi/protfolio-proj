'use strict';


async function fetchData(symbol) {
  var data = await (await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=SA6UKHZGVCJ3II66`).catch(handleErr)).json();
  renderPage(data)
}

function handleErr(err) {
  console.log(err)
}

