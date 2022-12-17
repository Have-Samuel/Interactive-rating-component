const thanksNote = document.getElementById('add-modal');
const thankYouButton = document.querySelector('.main-data button');
const backdrop = document.getElementById('backdrop');

const submitBtn = document.getElementById('submit-btn');

// Shows the backdrop
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMainList = () => {
  thanksNote.classList.toggle('visible');
  toggleBackdrop();
};

// To remve the backdrop
const backdropClickHandler = () => {
  toggleMainList();
};

thankYouButton.addEventListener('click', toggleMainList);
backdrop.addEventListener('click', backdropClickHandler);
submitBtn.addEventListener('click');