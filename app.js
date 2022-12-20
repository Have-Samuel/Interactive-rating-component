const thanksNote = document.getElementById('add-modal');
const thankYouButton = document.querySelector('.main-data button');
const backdrop = document.getElementById('backdrop');
const numberRatings = document.getElementById('numbers');
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

const ratingHandler = () => {
  const digitSelect = () => {

  }
};

const submitHandler = () => {
  const paragraph = document.querySelector('.paragraph');
  paragraph.innerText = 'Hello';
  console.log(paragraph);
};

thankYouButton.addEventListener('click', toggleMainList);
backdrop.addEventListener('click', backdropClickHandler);
submitBtn.addEventListener('click', submitHandler);
