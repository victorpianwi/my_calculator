console.log('This is a Calculator that supports up to 13 digits. '
+ "For any errors encountered during the use of this Web Calculator please email me @ victorpianwi@gmail.com. "
+ "You can also contact via telephone @ number 08128929129");

const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-Delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const previousDisplay = document.querySelector('[data-previousDisplay]');
const currentDisplay = document.querySelector('[data-currentDisplay]');
const dotButton = document.querySelector('[data-dot]');
const negativeButton = document.querySelector('[data-negative]');

numberButtons.forEach(button => {
  button.addEventListener('click', perform => {
    if (currentDisplay.textContent == '0'){
      currentDisplay.textContent = button.innerHTML;
    } else if (currentDisplay.textContent == 'sin0') {
      let removeZero = currentDisplay.textContent.toString().slice(0, -1);
      currentDisplay.textContent = removeZero + button.innerHTML;
    } else if (currentDisplay.textContent == '√0' || currentDisplay.textContent == '-0') {
      let removeZero = currentDisplay.textContent.toString().slice(0, -1);
      currentDisplay.textContent = removeZero + button.innerHTML;
    } else {
      currentDisplay.textContent += button.innerHTML;
    };
  });
});

dotButton.addEventListener('click', () => {
  if (currentDisplay.textContent == ''){
    currentDisplay.textContent = '0' + dotButton.innerHTML;
  } else {
    if (currentDisplay.textContent == '√' || currentDisplay.textContent == '-' || currentDisplay.textContent == 'sin'){
      currentDisplay.textContent += '0' + dotButton.innerHTML;
    } else {
      if (currentDisplay.textContent.includes('.')){
        currentDisplay.textContent != dotButton.innerHTML;
      } else {
        currentDisplay.textContent += dotButton.innerHTML;
      };
    }
  };
});

const updateDisplay = () => {
  previousDisplay.textContent = currentDisplay.textContent;
  currentDisplay.textContent = '';
};

operationButtons.forEach(operation => {
  operation.addEventListener('click', () => {
    if (currentDisplay.textContent == ""){
      if (operation.innerHTML == "√" || operation.innerHTML == "-" || operation.innerHTML == "sin"){
        currentDisplay.textContent = operation.innerHTML;
      } else {
        currentDisplay.textContent != operation.innerHTML;
      };
    } else if (currentDisplay.textContent != "" && previousDisplay.textContent != ""){
      if (operation.innerHTML != "√" || operation.innerHTML != "sin"){
        let result = operate();
        previousDisplay.textContent = result + operation.innerHTML;
        currentDisplay.textContent = '';
      };
    } else {
      if (currentDisplay.textContent != ""){
        if (operation.innerHTML != "√" && operation.innerHTML != "sin"){
          if (currentDisplay.textContent == 'sin' || currentDisplay.textContent == '√'|| currentDisplay.textContent == '-'){
            if (currentDisplay.textContent == 'sin'){
              if (operation.innerHTML == '-'){
                currentDisplay.textContent += operation.innerHTML;
              };
            };
          } else {
            currentDisplay.textContent += operation.innerHTML;
            updateDisplay();
          };
        } else {
          if (currentDisplay.textContent.includes("√")){
            currentDisplay.textContent = currentDisplay.textContent.toString().slice(1);
          } else if (currentDisplay.textContent.includes("sin")){
            currentDisplay.textContent = currentDisplay.textContent.toString().slice(3);
          } else {
            currentDisplay.textContent = operation.innerHTML + currentDisplay.textContent;
          };
        };
      };
    };
  });
});

function operate() {
  let operation;
  let previous = previousDisplay.textContent;
  let current = currentDisplay.textContent;
  if (previousDisplay.textContent.includes('+')) {
    if (previousDisplay.textContent.includes('+') && currentDisplay.textContent == '') {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) + parseFloat(previous.toString().slice(-0, -1) * 1);
    } else if (previousDisplay.textContent.includes('+') && currentDisplay.textContent.includes('sin')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) + parseFloat(Math.sin(current.toString().slice(3)) * 1);
    } else if (previousDisplay.textContent.includes('+') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sin(slice2) * 1) + parseFloat(current * 1);
    } else if (previousDisplay.textContent.includes('+') && currentDisplay.textContent.includes('√')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) + parseFloat(Math.sqrt(current.toString().slice(1)) * 1);
    } else if (previousDisplay.textContent.includes('+') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sqrt(slice2) * 1) + parseFloat(current * 1);
    } else {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) + parseFloat(current * 1);
    };
  } else if (previousDisplay.textContent.includes('-')) {
    if (previousDisplay.textContent.includes('-') && currentDisplay.textContent == '') {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) - parseFloat(previous.toString().slice(0, -1) * 1);
    } else if (previousDisplay.textContent.includes('-') && currentDisplay.textContent.includes('sin')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) - parseFloat(Math.sin(current.toString().slice(3)) * 1);
    } else if (previousDisplay.textContent.includes('-') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sin(slice2) * 1) - parseFloat(current * 1);
    } else if (previousDisplay.textContent.includes('-') && currentDisplay.textContent.includes('√')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) - parseFloat(Math.sqrt(current.toString().slice(1)) * 1);
    } else if (previousDisplay.textContent.includes('-') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sqrt(slice2) * 1) - parseFloat(current * 1);
    } else {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) - parseFloat(current * 1);
    };
  } else if (previousDisplay.textContent.includes('×')) {
    if (previousDisplay.textContent.includes('×') && currentDisplay.textContent == '') {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) * parseFloat(previous.toString().slice(0, -1) * 1);
    } else if (previousDisplay.textContent.includes('×') && currentDisplay.textContent.includes('sin')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) * parseFloat(Math.sin(current.toString().slice(3)) * 1);
    } else if (previousDisplay.textContent.includes('×') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sin(slice2) * 1) * parseFloat(current * 1);
    } else if (previousDisplay.textContent.includes('×') && currentDisplay.textContent.includes('√')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) * parseFloat(Math.sqrt(current.toString().slice(1)) * 1);
    } else if (previousDisplay.textContent.includes('×') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sqrt(slice2) * 1) * parseFloat(current * 1);
    } else {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) * parseFloat(current * 1);
    };
  } else if (previousDisplay.textContent.includes('÷')) {
    if (previousDisplay.textContent.includes('÷') && currentDisplay.textContent == '') {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) / parseFloat(previous.toString().slice(0, -1) * 1);
    } else if (previousDisplay.textContent.includes('÷') && currentDisplay.textContent.includes('sin')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) / parseFloat(Math.sin(current.toString().slice(3)) * 1);
    } else if (previousDisplay.textContent.includes('÷') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sin(slice2) * 1) / parseFloat(current * 1);
    } else if (previousDisplay.textContent.includes('÷') && currentDisplay.textContent.includes('√')) {
      operation = parseFloat(previous.toString().slice(0, -1) * 1) / parseFloat(Math.sqrt(current.toString().slice(1)) * 1);
    } else if (previousDisplay.textContent.includes('÷') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat(Math.sqrt(slice2) * 1) / parseFloat(current * 1);
    } else {
      operation = parseFloat(previous.toString().slice(-0, -1) * 1) / parseFloat(current * 1);
    };
  } else if (previousDisplay.textContent.includes('˄')) {
    if (previousDisplay.textContent.includes('˄') && currentDisplay.textContent == '') {
      operation = Math.pow(parseFloat(previous.toString().slice(-0, -1) * 1), parseFloat(previous.toString().slice(0, -1) * 1));
    }else if (previousDisplay.textContent.includes('˄') && currentDisplay.textContent.includes('sin')) {
      operation = Math.pow(parseFloat(previous.toString().slice(0, -1) * 1) , parseFloat(Math.sin(current.toString().slice(3)) * 1));
    } else if (previousDisplay.textContent.includes('˄') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = Math.pow(parseFloat(Math.sin(slice2) * 1) , parseFloat(current * 1));
    } else if (previousDisplay.textContent.includes('˄') && currentDisplay.textContent.includes('√')) {
      operation = Math.pow(parseFloat(previous.toString().slice(0, -1) * 1), parseFloat(Math.sqrt(current.toString().slice(1)) * 1));
    } else if (previousDisplay.textContent.includes('˄') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = Math.pow(parseFloat(Math.sqrt(slice2) * 1), parseFloat(current * 1));
    } else {
      operation = Math.pow(parseFloat(previous.toString().slice(-0, -1) * 1), parseFloat(current * 1));
    };
  } else if (currentDisplay.textContent.includes('√')) {
    operation = Math.sqrt(current.toString().slice(1));
  } else if (currentDisplay.textContent.includes('sin')) {
    operation = Math.sin(current.toString().slice(3));
  } else if (previousDisplay.textContent.includes('√')) {
    operation = Math.sqrt(current.toString().slice(1));
  } else if (previousDisplay.textContent.includes('sin')) {
    operation = Math.sin(current.toString().slice(3));
  }
   else if (previousDisplay.textContent.includes('%')) {
    if (previousDisplay.textContent.includes('%') && currentDisplay.textContent == '') {
      operation = parseFloat((previous.toString().slice(-0, -1) * 1) / 100) * parseFloat(previous.toString().slice(0, -1) * 1);
    } else if (previousDisplay.textContent.includes('%') && currentDisplay.textContent.includes('sin')) {
      operation = parseFloat((previous.toString().slice(0, -1) * 1) / 100) * parseFloat(Math.sin(current.toString().slice(3)) * 1);
    } else if (previousDisplay.textContent.includes('%') && previousDisplay.textContent.includes('sin')) {
      let slice = previous.toString().slice(3);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat((Math.sin(slice2) * 1) / 100) * parseFloat(current * 1);
    } else if (previousDisplay.textContent.includes('%') && currentDisplay.textContent.includes('√')) {
      operation = parseFloat((previous.toString().slice(0, -1) * 1 / 100)) * parseFloat(Math.sqrt(current.toString().slice(1)) * 1);
    } else if (previousDisplay.textContent.includes('%') && previousDisplay.textContent.includes('√')) {
      let slice = previous.toString().slice(1);
      let slice2 = slice.slice(0, -1);
      operation = parseFloat((Math.sqrt(slice2) * 1) / 100) * parseFloat(current * 1);
    } else {
      operation = parseFloat((previous.toString().slice(-0, -1) * 1) / 100) * parseFloat(current * 1);
    };
  };
  if (isNaN(operation)){
    return operation = 0;
  } else {
    return operation;
  }
};

equalButton.addEventListener('click', () => {
  let result;
  if (previousDisplay.textContent == '' && currentDisplay.textContent == ''){
    result = 0;
    return currentDisplay.textContent = result;
  } else if (previousDisplay.textContent == '' && currentDisplay.textContent.includes('√') == false && currentDisplay.textContent.includes('sin') == false){
    result = currentDisplay.textContent;
    return currentDisplay.textContent = result;
  } else {
    result = operate();
    previousDisplay.textContent = '';
    return currentDisplay.textContent = result;
    };
});

allClearButton.addEventListener('click', () => {
  previousDisplay.textContent = '';
  currentDisplay.textContent = '';
});

if (isNaN(currentDisplay.textContent)){
  currentDisplay.textContent = 0;
};

const deleteIt = () => {
  if (isNaN(currentDisplay.textContent)){
    currentDisplay.textContent = 0;
  } else {
    if (currentDisplay.textContent == '' || currentDisplay.textContent == '0'){
      let numbers = parseFloat(previousDisplay.textContent.toString().slice(0, -2) * 1);
      let operator = previousDisplay.textContent.toString().slice(-1);
      if (numbers == 0){
        previousDisplay.textContent = '';
        currentDisplay.textContent = 0;
      } else {
        previousDisplay.textContent = numbers + operator;
      };
    } else{
      currentDisplay.textContent = parseFloat(currentDisplay.textContent.toString().slice(0, -1) * 1);
    };
  };
};

deleteButton.addEventListener('click', () => {
  deleteIt();
});

negativeButton.addEventListener('click', () => {
  if (currentDisplay.textContent.indexOf('-') == 0){
    currentDisplay.textContent = currentDisplay.textContent.toString().slice(1,13);
  } else {
    if (currentDisplay.textContent.includes("sin") || currentDisplay.textContent.includes('√')){
      currentDisplay.textContent != '-' + currentDisplay.textContent;
    } else {
      currentDisplay.textContent = '-' + currentDisplay.textContent;
    };
  };
});
