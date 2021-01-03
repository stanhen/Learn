export default function Clear() {
   const calcClear = $('.ctr'),
      calcDisplay = $('.calculator__display');

   calcClear.on('click', function () {
      calcDisplay.val('');
   });
}