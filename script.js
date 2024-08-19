const inputNumber = document.getElementById('input-number');
const conversionSelect = document.getElementById('conversion-select');
const convertBtn = document.getElementById('convert-btn');
const answerDiv = document.querySelector('.ans');

convertBtn.addEventListener('click', () => {
    const inputValue = inputNumber.value;
    const selectedConversion = conversionSelect.value;

    let result;

    switch (selectedConversion) {
        case 'binary-to-decimal':
            result = binaryToDecimal(inputValue);
            break;
        case 'binary-to-octal':
            result = binaryToOctal(inputValue);
            break;
        case 'binary-to-hexadecimal':
            result = binaryToHexadecimal(inputValue);
            break;
        case 'decimal-to-binary':
            result = decimalToBinary(inputValue);
            break;
        case 'decimal-to-octal':
            result = decimalToOctal(inputValue);
            break;
        case 'decimal-to-hexadecimal':
            result = decimalToHexadecimal(inputValue);
            break;
        case 'octal-to-binary':
            result = octalToBinary(inputValue);
            break;
        case 'octal-to-decimal':
            result = octalToDecimal(inputValue);
            break;
        case 'octal-to-hexadecimal':
            result = octalToHexadecimal(inputValue);
            break;
        case 'hexadecimal-to-binary':
            result = hexadecimalToBinary(inputValue);
            break;
        case 'hexadecimal-to-octal':
            result = hexadecimalToOctal(inputValue);
            break;
        case 'hexadecimal-to-decimal':
            result = hexadecimalToDecimal(inputValue);
            break;
        default:
            result = 'Invalid conversion selected';
    }

    answerDiv.innerText = result;
});

// Conversion functions
function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}

function binaryToOctal(binary) {
    return parseInt(binary, 2).toString(8);
}

function binaryToHexadecimal(binary) {
    return parseInt(binary, 2).toString(16);
}

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

function decimalToOctal(decimal) {
    return decimal.toString(8);
}

function decimalToHexadecimal(decimal) {
    return decimal.toString(16);
}

function octalToBinary(octal) {
    return parseInt(octal, 8).toString(2);
}

function octalToDecimal(octal) {
    return parseInt(octal, 8);
}

function octalToHexadecimal(octal) {
    return parseInt(octal, 8).toString(16);
}

function hexadecimalToBinary(hex) {
    return parseInt(hex, 16).toString(2);
}

function hexadecimalToOctal(hex) {
    return parseInt(hex, 16).toString(8);
}

function hexadecimalToDecimal(hex) {
    return parseInt(hex, 16);
}