function buttonHideFunction() {
  const textInput = document.querySelector('.text-input');
  if (textInput.value) {
    setHideButtonFlag(false);
  } else {
    setHideButtonFlag(true);
  }
}

function addParagraph() {
  const block = document.querySelector('.block');
  const newParagraph = document.createElement('p');
  const textInput = document.querySelector('.text-input');

  newParagraph.classList.add('text');
  newParagraph.textContent = textInput.value;

  textInput.value = null;
  buttonHideFunction();

  block.append(newParagraph);

  if (block.childElementCount > 5) {
    block.removeChild(block.firstElementChild);
  }
}

function setHideButtonFlag(flag) {
  const buttonElement = document.querySelector('.button');
  buttonElement.hidden = flag;
}

console.log('123');
setHideButtonFlag(true);

// document.addEventListener('change', buttonHideFunction);
document
  .getElementsByClassName('text-input')[0]
  .addEventListener('change', buttonHideFunction);

const buttonElement = document.querySelector('.button');
buttonElement.addEventListener('click', addParagraph);

// module.exports = { addParagraph, setHideButtonFlag, buttonHideFunction };
