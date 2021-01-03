export default function Sin() {
    const calcSin = $('.sin'),
        calcDisplay = $('.calculator__display');

    calcSin.on('click', function () {
        alcDisplay.val(Math.sin((calcDisplay.val()) * Math.PI / 180));
    });

}