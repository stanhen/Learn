export default function X3() {
    const calcX3 = $('.x3'),
        calcDisplay = $('.calculator__display');

    calcX3.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 3));
    });

}