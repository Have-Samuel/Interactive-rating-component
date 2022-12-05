const mainList = document.getElementById('numbers');
const thankYouButton = document.querySelector('section button');
// const listItemElements = mainList.querySelectorAll('li');

const toggleMainList = () => {
  mainList.classList.toggle('visible');
};

thankYouButton.addEventListener('click', toggleMainList);
// for (const listItemEl of listItemElements) {
//   console.log(listItemEl);
// }