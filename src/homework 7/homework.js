const buttonHideFunction = () => {
  console.log('hello1 ');
  const textInput = document.querySelector('.text-input');
  if (textInput.value) {
    setHideButtonFlag(false);
  } else {
    setHideButtonFlag(true);
  }
};

const addParagraph = () => {
  console.log('hello1 ');
  const block = document.querySelector('.block');
  const newParagraph = document.createElement('p');
  const textInput = document.querySelector('.text-input');

  newParagraph.classList.add('text');
  newParagraph.innerText = textInput.value;

  textInput.value = null;
  buttonHideFunction();

  block.append(newParagraph);

  if (block.childElementCount > 5) {
    block.removeChild(block.firstElementChild);
  }
};

const setHideButtonFlag = (flag) => {
  const buttonElement = document.querySelector('.button');
  buttonElement.hidden = flag;
};

setHideButtonFlag(true);

document.addEventListener('change', buttonHideFunction);

const buttonElement = document.querySelector('.button');
buttonElement.addEventListener('click', addParagraph);

// module.exports = { addParagraph, setHideButtonFlag, buttonHideFunction };
