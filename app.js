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

// To remve the backdrop
const backdropClickHandler = () => {
  toggleMainList();
};

const submitHandler = () => {
  const input = document.querySelectorAll('input[name="fav_number"]');
  for (let i = 0; i < input.length; i + 1) {
    if (input[i].checked) {
      selectedValue = input[i].value;
      break;
    }
  }
  const selectedNum = document.getElementById('selectNum');
  selectedNum.innerText = selectedValue;
};

thankYouButton.addEventListener('click', toggleMainList);
backdrop.addEventListener('click', backdropClickHandler);
submitBtn.addEventListener('click', submitHandler);
