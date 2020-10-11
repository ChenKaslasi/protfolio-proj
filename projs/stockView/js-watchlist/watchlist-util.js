'use strict'

function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('-');
}

function saveToStorage(key, val) {
      var str = JSON.stringify(val);
      localStorage.setItem(key, str)
  }

function loadFromStorage(key) {
    var str = localStorage.getItem(key)
    return JSON.parse(str)
}
