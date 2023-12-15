function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
let history = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function allClear() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        
        if (!isNaN(result)) {
            history.push({ expression, result });
            updateHistory();
            document.getElementById('display').value = result;
        } else {
            document.getElementById('display').value = 'Error';
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    history.forEach(entry => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.expression} = ${entry.result}`;
        historyList.appendChild(listItem);
    });
}
