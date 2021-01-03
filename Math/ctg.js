export default function Ctg() {
    const calcCtg = $('.ctg'),
        calcDisplay = $('.calculator__display');

    calcCtg.on('click', function () {
        calcDisplay.val(Math.cos(calcDisplay.val()) / Math.sin(calcDisplay.val()));
    });
}