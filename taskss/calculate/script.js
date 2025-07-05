class Calculate {
    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    add() {
        return this.number1 + this.number2;
    }

    sub() {
        return this.number1 - this.number2;
    }

    mul() { 
        return this.number1 * this.number2;
    }

    div() {
        if (this.number2 === 0) {
            return "Infinite"; 
        }
        return this.number1 / this.number2;
    }
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter both numbers");
        return;
    }

    const calculator = new Calculate(num1, num2);
    let result;

    if (operation === 'add') {
        result = calculator.add();
    } else if (operation === 'sub') {
        result = calculator.sub();
    } else if (operation === 'mul') {
        result = calculator.mul();
    } else if (operation === 'div') {
        result = calculator.div();
    }
    
    document.getElementById('result-display').textContent = result;
}