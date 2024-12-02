document.getElementById('calculate-btn').addEventListener('click', calculate);
document.getElementById('convert-btn').addEventListener('click', convert);

// Função para calcular a operação
function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const base = document.getElementById('base').value;
    const operation = document.getElementById('operation').value;

    // Validando as entradas
    if (!num1 || !num2) {
        alert("Por favor, insira dois números!");
        return;
    }

    let num1Decimal = parseToDecimal(num1, base);
    let num2Decimal = parseToDecimal(num2, base);

    if (isNaN(num1Decimal) || isNaN(num2Decimal)) {
        alert("Por favor, insira números válidos para a base selecionada!");
        return;
    }

    let resultDecimal;
    switch (operation) {
        case 'add':
            resultDecimal = num1Decimal + num2Decimal;
            break;
        case 'subtract':
            resultDecimal = num1Decimal - num2Decimal;
            break;
        case 'multiply':
            resultDecimal = num1Decimal * num2Decimal;
            break;
        case 'divide':
            if (num2Decimal === 0) {
                alert("Divisão por zero não é permitida!");
                return;
            }
            resultDecimal = num1Decimal / num2Decimal;
            break;
    }

    // Exibindo o resultado em todas as bases
    document.getElementById('result').innerText = `
        Decimal: ${resultDecimal}
        Binário: ${decimalToBinary(resultDecimal)}
        Hexadecimal: ${decimalToHex(resultDecimal)}
    `;
}

// Função para converter número para decimal
function parseToDecimal(num, base) {
    if (base === 'decimal') {
        return parseFloat(num);
    } else if (base === 'binary') {
        return parseInt(num, 2);
    } else if (base === 'hexadecimal') {
        return parseInt(num, 16);
    }
    return NaN;
}

// Funções de conversão entre bases
function decimalToBinary(decimal) {
    return decimal.toString(2);
}

function decimalToHex(decimal) {
    return decimal.toString(16).toUpperCase();
}

// Função de conversão entre bases
function convert() {
    const number = document.getElementById('convert-from').value;
    const baseFrom = document.getElementById('base-from').value;
    const baseTo = document.getElementById('base-to').value;

    if (!number) {
        alert("Por favor, insira um número para conversão!");
        return;
    }

    let numberDecimal = parseToDecimal(number, baseFrom);

    if (isNaN(numberDecimal)) {
        alert("Número inválido na base selecionada!");
        return;
    }

    let convertedResult;
    if (baseTo === 'decimal') {
        convertedResult = numberDecimal;
    } else if (baseTo === 'binary') {
        convertedResult = decimalToBinary(numberDecimal);
    } else if (baseTo === 'hexadecimal') {
        convertedResult = decimalToHex(numberDecimal);
    }

    document.getElementById('conversion-result').innerText = convertedResult;
}