export default function Cos() {
  const calcCos = $('.cos'),
    calcDisplay = $('.calculator__display');

  calcCos.on('click', function () {
    calcDisplay.val(Math.cos((calcDisplay.val()) * Math.PI / 180));
  });

}