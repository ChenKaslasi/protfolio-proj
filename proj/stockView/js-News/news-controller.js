'use strict';

function onInitNews() {
  renderNews(gNews)
}

function renderNews(data) {
  var strHTML = `<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Date</th>
    <th scope="col">Symbol</th>
    <th scope="col">Header</th>
  </tr>
</thead> <tbody>`;
  data.forEach(function (item, index) {
    strHTML += `<tr><td style="width: 5%">${index + 1}</td><td style="width: 15%"> ${(item.publishedDate)}</td><td style="width: 5%"><a href=${`https://www.barchart.com/stocks/quotes/${item.symbol}/overview`}>${item.symbol}</a></td><td style="width: 60%">${(item.text).replace(/(([^\s]+\s\s*){20})(.*)/, "$1…")}</td><td style="width: 5%"  ><a href="${item.url}" class="badge badge-primary p-2" >Go to story</a></td></tr>`
  })
  strHTML += `</tbody>`;
  document.querySelector('.table-striped').innerHTML = strHTML;
}

