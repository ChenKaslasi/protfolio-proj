'use strict';

var gProjects = [
  {
    id: "stockview",
    name: "Stock-View",
    title: "Data modeling",
    desc: "Like Yahoo Finance, FINVIZ, BarChart ,stockview provide tools & data for both investors and traders.",
    url: "projs/stockView/index.html",
    publishedAt: '10-10-2020',
    labels: ["MVC", "BootStrap", "Jquery", "finance", "Data"],
    img: "img/stockview.png"
  },
  {
    id: "book-shop",
    name: "Book shoop",
    title: "CRUD application",
    desc: "A simple online store for books.",
    url: "projs/book-shop/index.html",
    publishedAt: '08-10-2020',
    labels: ["Book", "Books", "shop", "rate", "CRUD", "Add"],
    img: "img/book-shop.png"
  },
  {
    id: "mine-sweeper",
    name: "Mine-sweeper",
    title: "Game application",
    desc: "A remake for the classic windows minesweeper game.",
    url: "projs/mine-sweeper/index.html",
    publishedAt: '02-10-2020',
    labels: ["minesweeper", "Mine sweeper", "nostalgic games", "classic games"],
    img: "img/mine-sweeper.png"
  },
  {
    id: "guess-me",
    name: "Guess Who?",
    title: "Game application",
    desc: "In this game the user will differential yes or no questions to help the system isolate the hidden character.",
    url: "projs/guess-me/index.html",
    publishedAt: '09-10-2020',
    labels: ["Guess who", "guessing game", "tree", "structure", "Data"],
    img: "img/guess-me.png"
  },
] ;


function getProjects() {
  return gProjects
}

function getProject(id) {
  var project = gProjects.filter((project) => {
    return project.id === id;
  })
  return project
}



function formatDate() {
  var d = new Date()
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [day, month, year].join('-');
}