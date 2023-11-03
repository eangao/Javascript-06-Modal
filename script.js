'use strict';

////////////////////////////////////////////////////////
// PROJECT #2: Modal Window
////////////////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  // console.log('Button clicked');

  //not use the dot ex. .hidden.  The dot is only for the selector. We are passing here the name of the class
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  // console.log(btnOpenModal[i].textContent);
  btnOpenModal[i].addEventListener('click', openModal);
}

// do not call the function right away thats why we don't add  parentheses  ex.closeModal(). call the function only if the button is click
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// there are actually three types of events for the keyboard.
// There is the key down the key press or the key up.

// But this time we actually need to look
// at the event object in order to figure out
// which key was pressed.
// And how can we do that?
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
