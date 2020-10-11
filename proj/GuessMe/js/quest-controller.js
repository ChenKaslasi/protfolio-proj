'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);

function init() {
  console.log('Started...');
  getFromStorage('questDB');
  if(!gQuestsTree) {
    createQuestsTree()
  }
}

function onStartGuessing() {
  // TODO: hide the game-start section
  $('.game-start').css({display:'none'})
  renderQuest();
  // TODO: show the quest section
  $('.quest').css({display:'block'})
}

function renderQuest() {
  // TODO: select the <h2> inside quest and update
  // its text by the currQuest text
  var currQuest = getCurrQuest().txt
  $('.quest').find('h2').text(currQuest)
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  gLastRes = res
  // If this node has no children
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      alert('Yes, I knew it!');
      // TODO: improve UX <------------------------------------------------
    } else {
      alert('I dont know...teach me!');
      // TODO: hide and show new-quest section
        $('.quest').css({display:'none'})
        $('.new-quest').css({display:'block'})
    }
  } else {
    // TODO: update the lastRes global var
    moveToNextQuest(res);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  // TODO: Get the inputs' values
  // TODO: Call the service addGuess
  addGuess(newQuest, newGuess, gLastRes)
  $('#newGuess').val('');
  $('#newQuest').val('');
  setToStorage()
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-start').show();
  gLastRes = null;
  init()
}
