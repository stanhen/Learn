//укомудкмукдщ
export function ConversionToArray(s) {
    // делает из строки массив состоящий из цифр и операции
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-()'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else { 
                if(current == '') {
                    calculation.push(ch);
                }else {
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
    console.log(calculation); //

    return calculation;
}

export function priority(calc) {
    //делает приоритет скобками
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
    return(calc);
}

export function calculate(calc) {
    // считает массив получений из строки и дает результат 
    var opt = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        operation;
        let restart = ['Ошибка','Введены неккоректные значения, повторите'];

    for (var i = 0; i < opt.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (opt[i][calc[j]]) {
                operation = opt[i][calc[j]];
            } else if (operation) {
                if(calc[j-1] === "/") {
                    if(calc[j] === 0) {
                        return restart;
                    }
                } 
                newCalc[newCalc.length - 1] = 
                    operation(newCalc[newCalc.length - 1], calc[j]);
                operation = null;
            } else {
                newCalc.push(calc[j]);
            }
   //         console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Невозможно выполнить');
        return restart[1];
    } else {
        return calc[0];
    }
}
