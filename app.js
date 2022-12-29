const thanksNote = document.getElementById('add-modal');
const thankYouButton = document.querySelector('.main-data button');
const backdrop = document.getElementById('backdrop');
const submitBtn = document.getElementById('submit-btn');
let selectedValue;

// Shows the backdrop
const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMainList = () => {
  thanksNote.classList.toggle('visible');
  toggleBackdrop();
};

// To remove the backdrop
const backdropClickHandler = () => {
  toggleMainList();
};

const submitHandler = () => {
  const input = document.querySelectorAll('input[name="fav_number"]'); // number selector for the rating
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      selectedValue = input[i].value;
      break;
    }
  }
  const numDiv = document.querySelector('.selected-para');
  const selectedNum = numDiv.getElementById('selectNum');
  selectedNum.innerText = selectedValue;
};

thankYouButton.addEventListener('click', toggleMainList);
backdrop.addEventListener('click', backdropClickHandler);
submitBtn.addEventListener('click', submitHandler);
