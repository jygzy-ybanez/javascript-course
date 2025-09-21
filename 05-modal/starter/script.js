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
