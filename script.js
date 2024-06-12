let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function allClear() {
    display.value = '';
}

function clearLastDigit() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
