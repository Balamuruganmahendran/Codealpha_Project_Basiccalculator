let displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.textContent = '0';
}

function appendToDisplay(value) {
    if (displayElement.textContent === '0' && value !== '.') {
        displayElement.textContent = value;
    } else {
        displayElement.textContent += value;
    }
}

function calculateResult() {
    try {
        let result = eval(displayElement.textContent.replace('%', '/100'));
        displayElement.textContent = result;
    } catch {
        displayElement.textContent = 'Error';
    }
}

function backspace() {
    if (displayElement.textContent.length > 1) {
        displayElement.textContent = displayElement.textContent.slice(0, -1);
    } else {
        displayElement.textContent = '0';
    }
}

function toggleSign() {
    if (displayElement.textContent.startsWith('-')) {
        displayElement.textContent = displayElement.textContent.slice(1);
    } else {
        displayElement.textContent = '-' + displayElement.textContent;
    }
}
