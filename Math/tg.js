export default function Tg() {
  const calcTg = $('.tg'),
    calcDisplay = $('.calculator__display');

  calcTg.on('click', function () {
    calcDisplay.val(Math.sin(calcDisplay.val()) / Math.cos(calcDisplay.val()));
  });


}