export default function BackspaceONN() {
    const calcBackspace = $('.backspace'),
        calcDisplay = $('.calculator__display');

    calcBackspace.removeClass("display", "none");
    calcBackspace.css("display", "block");

    calcBackspace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
    });

}