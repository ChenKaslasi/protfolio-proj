'use strict' ;

function onPageload() {
  renderSectors()
  renderSymbolList(glist)
}

function renderSymbolList(data) {
  var htmlString = `
  <thead><tr><th>Symbol</th><th>Name</th><th>Sector</th></tr></thead><tbody>`
  data.forEach(item => {
    htmlString += 
    `<tr>
      <td><a class="profileLink" onclick="onProfileLoad(this)" >${item.Symbol}</a></td>
      <td>${item.Name}</td>
      <td>${item.Sector}</td>
    </tr>`
    htmlString += `</tbody>`
  });
  document.querySelector('.ListTable').innerHTML = htmlString
}

function renderSectors() {
  var sectors = getSectorList()
  var htmlStr = `<option>All</option>`;
  sectors.forEach((sector) => {
    htmlStr += `<option value="${sector}">${sector}</option>`
    document.querySelector('.filterBySector').innerHTML = htmlStr
  })
}

function onFilterSelect(el) {
  var selectedSector = el.options[el.selectedIndex].value
    var filterdList = (selectedSector === "All") ? glist : filterBySector(selectedSector) ;
    renderSymbolList(filterdList)
}
