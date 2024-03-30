function buttonHideFunction() {
  const textbox = document.querySelector('.text-input');
  setHideButtonFlag(!textbox.value);
}

function addParagraph() {
  const block = document.querySelector('.block');
  const newParagraph = document.createElement('p');
  const textbox = document.querySelector('.text-input');

  newParagraph.classList.add('text');
  newParagraph.textContent = textbox.value;

  textbox.value = null;
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

setHideButtonFlag(true);

document
  .getElementsByClassName('text-input')[0]
  .addEventListener('change', buttonHideFunction);

const buttonElement = document.querySelector('.button');
buttonElement.addEventListener('click', addParagraph);

// module.exports = { addParagraph, setHideButtonFlag, buttonHideFunction };
