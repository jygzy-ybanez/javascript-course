'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');
console.log('Modal project ready!');

//SECTION 1: DOM ELEMENT SELECTION & CACHING
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
console.log('Open buttons:', btnsOpenModalEl.length);

//SECTION 2: OPEN/CLOSE HELPERS WITH CLASS TOGGLING
const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

//SECTION 3: CONNECTING EBERYTHING WITH EVEN LISTENERS
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');
console.log('Enhanced modal development ready!');

//SECTION 1: KEYBOARD EVENT FUNDAMENTALS
console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
  console.log('Key pressed:', e);
  console.log('Key name:', e.key);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    console.log('ESC key pressed!');
  }
});

//SECTION 2: ESC KEY IMPLEMENTATION WITH GUARDS
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

//SECTION 3: ADVANCED UX & ACCESSIBILITY FEATURES
let lastFocusedButton = null;

// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
//   modalEl.focus();
//   lastFocusedButton = document.activeElement;
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
//   if (lastFocusedButton) {
//     lastFocusedButton.focus();
//   }
// };

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');
