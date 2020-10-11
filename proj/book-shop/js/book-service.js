'use  strict';

const STORAGE_KEY = 'booksDB'
const PAGE_SIZE = 5;
var gPageIdx = 0;
var defaultImg = 'https://picsum.photos/500/500';


_createBooks()

function _createBooks() {  
  var books = loadFromStorage(STORAGE_KEY)
  if (!books || !books.length) {
    books = gInitalBooks
  } 
  gbooks = books
  _savebooksToStorage();
}


function _savebooksToStorage() {
  saveToStorage(STORAGE_KEY, gbooks)
}


function getUsersForDisplay() {
  return loadFromStorage(STORAGE_KEY)
}


function _createBook(name,price,details) {
  var book = 
  { id: makeId(), 
    name: name,
     price: price,
    imgUrl: defaultImg,
    isShown: false,
    details : details,
    rate: 0,
    ratesCounter: 0
  }
  return book
}

function addBook(name,price,details) {
  var book = _createBook(name,price,details);
  gbooks.unshift(book)
  _savebooksToStorage()
}


function deleteBook(id) {
  var bookIdx = gbooks.findIndex(function (book) {
    return id === book.id
})
  gbooks.splice(bookIdx, 1)
  _savebooksToStorage();
}

function updateBooks(id,name,price,details) {
  var bookIdx = gbooks.findIndex(function (book) {
    return id === book.id
  })
  gbooks[bookIdx].id = id;
  gbooks[bookIdx].name = name;
  gbooks[bookIdx].price = price;
  gbooks[bookIdx].imgUrl = imageUrl ;
  gbooks[bookIdx].details = details;

  _savebooksToStorage();
}


function getBookById(bookId) {
  var book = gbooks.find(function (book) {
      return +bookId === book.id || bookId === book.id
  })
  return book
}


function setReview(val,id) {
  var book = getBookById(id);
  book.ratesCounter += 100;
  book.rate = (!book.rate) ? val : book.rate + val ;
  _savebooksToStorage()
}

function getBooksCount() {
  return gbooks.length
}


function getSortBooksTxt() {
   gbooks = getSortTxt(gbooks)
  _savebooksToStorage()
  return gbooks
}

function getSortBooksInt() {
   gbooks = getSortInt(gbooks)
  _savebooksToStorage()
  return gbooks;
}