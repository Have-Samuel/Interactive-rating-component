const mainList = document.getElementById('add-modal');
const thankYouButton = document.querySelector('.main-data button');
// const listItemElements = mainList.querySelectorAll('li');

const toggleMainList = () => {
  mainList.classList.toggle('visible');
};

thankYouButton.addEventListener('click', toggleMainList);
// for (const listItemEl of listItemElements) {
//   console.log(listItemEl);
// }