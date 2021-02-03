import BackspaceONN from '../Math/BackspaceON';
import BackspaceOff from '../Math/BackspaceOff';
import Clear from '../Math/Clear';
import Cor from '../Math/Cor';
import {ConversionToArray,calculate,priority} from '../Math/logic';
import {TrigonometryOperations} from '../Math/trigonometry';

$(document).ready(function () {

    const calcDisplay = $('.calculator__display'),
        calcEqual = $('.equal'),
        calcX2 = $('.x2'),
        calcX3 = $('.x3'),
        calcButton = $('.button'),
        calcON = $('.ON'),
        calcOFF = $('.OFF');

    function rest () {
        location.reload();
    }

    function calcStart() {
        calcON.on('click', function () {
            console.log(calcDisplay.val());
            calcON.addClass("active");
            calcON.removeClass("display", "block");
            calcON.css("display", "none");

            calcButton.on('click', function () {
                calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
            });

            BackspaceONN();
            Clear();
            Cor();
            TrigonometryOperations();
            triginometry();
        });
    }

    function calcEnd() {
        calcOFF.on('click', function () {
            calcON.removeClass("active");
            calcON.removeClass("display", "none");
            calcON.css("display", "block");
            calcButton.on('click', function () {
                calcDisplay.val('Выключение');
            });
            BackspaceOff();
            calcDisplay.val('Выключение');
            setTimeout (rest,1000);
        });
    }

     function equal (){
        calcEqual.on('click', function () {
            console.log(calcDisplay.val());

         if (calculate(priority(ConversionToArray(calcDisplay.val()))) === 'Ошибка' || calculate(priority(ConversionToArray(calcDisplay.val()))) === 'Введены неккоректные значения, повторите' ) {
            calcDisplay.val(calculate(priority(ConversionToArray(calcDisplay.val()))));
            setTimeout(rest, 1000);
         } else {
            calcDisplay.val(calculate(priority(ConversionToArray(calcDisplay.val()))).toFixed(2));
         }
        });
    }
    function triginometry() {
        calcX2.on('click', function () {
            calcDisplay.val(calcDisplay.val() + '^2');
        });
        calcX3.on('click', function () {
            calcDisplay.val(calcDisplay.val() + '^3');
        });
    }

    calcStart();
    calcEnd();
    equal();
});
