export default function X2() {
    const calcX2 = $('.x2'),
        calcDisplay = $('.calculator__display');

    calcX2.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 2));
    });


}