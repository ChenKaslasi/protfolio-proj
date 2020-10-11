'use strict';

function init() {
  renderBooks()
}

function onBookAdd() {
  toggleClass('createBook', 'hide');
}

function onBookSave() {
  var name = document.querySelector('.name').value
  var price = document.querySelector('.price').value
  var details = document.querySelector('.details').value

  document.querySelector('.name').value = ''
  document.querySelector('.price').value = ''
  document.querySelector('.details').value = ''

  addBook(name, price, details)
  toggleClass('createBook', 'hide');
  renderBooks()
}

function onDelete(el) {
  var id = el.className;
  deleteBook(id);
  renderBooks()
  checkEmptyTable()
}

function onUpdate(el) {
  var id = el.className;
  var name = prompt('Set new name')
  var price = prompt('What is the new Price ?')
  var details = prompt('add new details about the book')
  updateBooks(id, name, price, details)
  renderBooks()
}


function renderBooks() {
  var books = getUsersForDisplay();
  var strHTML = `<table><thead><tr>
                  <th>Id</td>
                  <th class="nameHeader" onclick="onSortTxt()">Name</td>
                  <th class="priceHeader" onclick="onSortInt()">Price</td>
                  <th >Avg rate</td>
                  <th>Rate</td>
                  <th colspan="3">Actions</td>
                  </tr></thead><tbody>`;
  books.forEach(function (book) {
    strHTML += `<tr>
          <td>${book.id}</td>
          <td>${book.name}</td>
          <td>${(book.price) + ' $ '}</td>
          <td>${(book.rate / book.ratesCounter).toFixed(2)}</td>
          <td>
            <span>0</span>
            <input type="range" id="${book.id}" class="review">
            <span>100</span>
            <button onclick="onSetRate(this)" class="${book.id}">Send review</button>
          </td>
          <td><button onclick="onRead(this)" class="${book.id}">Read</button></td>
          <td><button onclick="onUpdate(this)" class="${book.id}">Update</button></td>
          <td> <button onclick="onDelete(this)" class="${book.id}">Delete</button></td>
            
          </tr>`
  })
  strHTML += `</tbody></table>`;
  document.querySelector('.table').innerHTML = strHTML;
}


function onRead(el) {
  setModal(el)
  var modal = document.querySelector('.modal-section')
  modal.classList.remove('hide')
}


function setModal(el) {
  var id = el.className;
  var book = getBookById(id);
  document.querySelector('.bookName').innerHTML = book.name;
  document.querySelector('.bookDetails').innerHTML = book.details;
  document.querySelector('.bookImage').src = book.imgUrl || 'https://picsum.photos/500/500';
}

function onCloseModal() {
  var modal = document.querySelector('.modal-section')
  modal.classList.add('hide')
}

function onSetRate(el) {
  var id = el.className;
  var val = +document.getElementById(id).value
  setReview(val,id)
  renderBooks()
}


function checkEmptyTable() {
  var bookCounter = getBooksCount();
  
  // console.log(noBooksMsg)
  if(!bookCounter) {
    toggleClass('noBooks','hide')
  }
}

function onSortTxt() {
  getSortBooksTxt();
  renderBooks()
}

function onSortInt() {
  getSortBooksInt();
  renderBooks()
} 