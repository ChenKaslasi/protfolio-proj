'use strict';


function makeId(length = 6) {
  var txt = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function toggleClass(el, toggleClass){
      document.querySelector(`.${el}`).classList.toggle(`${toggleClass}`);
  }
  

  
function getSortTxt(dataObj) {
  var booksSorted = dataObj.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  })
  return booksSorted
}

function getSortInt(dataObj) {
  var booksSorted = dataObj.sort(function (a, b) { return b.price - a.price });
  return booksSorted;
}