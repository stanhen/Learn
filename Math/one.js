export function parseCalculationString(s) {
    // --- Parse a calculation string into an array of numbers and operators
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if (ch === '^*/+-()' && ch + 1 === '^*/+-()') {
            
        }
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
    console.log(calculation) //

    return calculation;
}