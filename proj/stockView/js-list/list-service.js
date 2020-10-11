'use strict' ;

function filterBySector(sector) {
  var filterdList = glist.filter((item) => {
    return item.Sector === sector
  })
  return filterdList
}

function getSectorList() {
  var arr = []
  glist.map((item) => {
    if(!arr.includes(item.Sector)) arr.push(item.Sector)
    return
  })
  return arr
}


