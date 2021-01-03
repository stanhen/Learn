export default function Equal() {
    const calcEqual = $('.equal'),
        calcDisplay = $('.calculator__display');

    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });

}