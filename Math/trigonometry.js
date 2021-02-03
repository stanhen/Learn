const calcDisplay = $('.calculator__display');
export function TrigonometryOperations () {
  function restart(){
   calcDisplay.val('Перезагрузка')
   location.reload();
  }
  const calcSin = $('.sin'),
   calcCos = $('.cos'),
   calcTg = $('.tg'),
   calcCtg = $('.ctg');

   if (calcDisplay.val() === '') {
    calcSin.on('click', function () {
      calcDisplay.val('Введите значение');
      setTimeout(restart,1000);
    });
    calcCos.on('click', function () {
      calcDisplay.val('Введите значение');
      setTimeout(restart,1000);
    }); 
    calcTg.on('click', function () {
      calcDisplay.val('Введите значение');
      setTimeout(restart,1000);

    });
    calcCtg.on('click', function () {
      calcDisplay.val('Введите значение');
      setTimeout(restart,1000);
    });
   } else{
 calcSin.on('click', function () {
  calcDisplay.val(Math.sin((calcDisplay.val()) * Math.PI / 180));
});

calcCos.on('click', function () {
  calcDisplay.val(Math.cos((calcDisplay.val()) * Math.PI / 180));
});

calcTg.on('click', function () {
  calcDisplay.val(Math.sin(calcDisplay.val()) / Math.cos(calcDisplay.val()));
});

calcCtg.on('click', function () {
  calcDisplay.val(Math.cos(calcDisplay.val()) / Math.sin(calcDisplay.val()));
});
}
}
//всцыв
