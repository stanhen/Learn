export default function BackspaceOff() {
    const calcBackspace = $('.backspace'),
        calcDisplay = $('.calculator__display');

    calcDisplay.val('');
    calcBackspace.removeClass("display", "block");
    calcBackspace.css("display", "none");
}