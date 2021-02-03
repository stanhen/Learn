function parseCalculationString(s) {
    // --- Parse a calculation string into an array of numbers and operators
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-()'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else {
                if(current == ''){
                    calculation.push(ch);
                } else {
                    calculation.push(parseFloat(current), ch);
                    current = '';
                }
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    return calculation;
}
function calculate(calc) {
    // --- Perform a calculation expressed as an array of operators and numbers
    var ops = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        currentOp;
    for (var i = 0; i < ops.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (ops[i][calc[j]]) {
                currentOp = ops[i][calc[j]];
            } else if (currentOp) {
                newCalc[newCalc.length - 1] = 
                    currentOp(newCalc[newCalc.length - 1], calc[j]);
                currentOp = null;
            } else {
                newCalc.push(calc[j]);
            }
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Error: unable to resolve calculation');
        return calc;
    } else {
        return calc[0];
    }
}

function oshibkapovtoraOperation (mass) {
    let povtor = 0;
    let pos = 0;


for (var i = 0; i < mass.length; i++){
    console.log('working');
    
    if (mass[i] === '*' && mass[i+1] === '*') {
        povtor++;
     //    mass.splice(i-1,2);
        console.log(povtor);
     //   console.log(mass.indexOf(i));
    }  
}
//mass.splice(i-1,2);
}
oshibkapovtoraOperation([5, '*' , '*','*' , '*','*' , '*','*' , '*', 8, 8]);

oshibkapovtoraOperation([3,2,5, '+',4]);


function priority(calc) {
    let newArr = [];
    for (var s = 0; s < calc.length; s++){


        if (calc[s] === '('){
            let position = calc.indexOf('(');
            console.log(`position is ${position}`);
            newArr.push(...calc.splice(calc.indexOf('(') , calc.indexOf(')') - calc.indexOf('(') + 1));
            console.log(newArr);
            newArr.pop();
            newArr.shift();
            console.log(newArr);
           console.log('newArr');
           calc.splice(position,0,(calculate(newArr)));
           console.log(calc);
           console.log('END');
        }
    }
    console.log(calc);
}
//priority(parseCalculationString('5+9+8+7+(8+9+8+5+7+55)+55+44+99+5+88888+0+1'));
priority(parseCalculationString('5+8+9+9+8**8-55*99/5+6-8'));



