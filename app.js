const mainList = document.getElementById('add-modal');
const thankYouButton = document.querySelector('.main-data button');
const backdrop = document.getElementById('backdrop');
const listItemElements = mainList.querySelectorAll('li');

// Shows the backdrop
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMainList = () => {
  mainList.classList.toggle('visible');
  toggleBackdrop();
};

// To remve the backdrop
const backdropClickHandler = () => {
  toggleMainList();
};

thankYouButton.addEventListener('click', toggleMainList);
backdrop.addEventListener('click', backdropClickHandler);
