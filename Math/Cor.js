export default function Cor() {
    const calcCor = $('.cor'),
        calcDisplay = $('.calculator__display');

    calcCor.on('click', function () {
        calcDisplay.val(Math.sqrt(calcDisplay.val()));
    });
}