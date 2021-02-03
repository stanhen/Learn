import {ConversionToArray,calculate,priority} from '../Math/logic';
test('double operation signs', () =>{
    expect(calculate([3, '+','+',2])).toBe(4);
})