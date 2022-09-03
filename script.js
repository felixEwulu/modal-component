'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// opens the modal box
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// the querySelectorAll acts as an array holding all the btns
for (let i = 0; i < btnsOpenModal.length; i++) {
  // listens for user's click
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard events are called global events
//  the keyboard events are called global events, they are the keyUp, keyDown and keyPress
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  //   console.log('A key was pressed');
});

/* 
the info about which key that was pressed would be stored in the pop-up object
when an event occurs, JS generates an object, and that object contains all the info about the event itself,
 we can access the object in the event handler function

*/
