import BackspaceONN from '../Math/BackspaceON';
import BackspaceOff from '../Math/BackspaceOff';
import Clear from '../Math/Clear';
import Cor from '../Math/Cor';
import Cos from '../Math/cos';
import Ctg from '../Math/ctg';
import Equal from '../Math/Equal';
import Sin from '../Math/sin';
import Tg from '../Math/tg';
import X2 from '../Math/X2';
import X3 from '../Math/X3';

$(document).ready(function () {

    const calcDisplay = $('.calculator__display'),
        calcButton = $('.button'),
        calcON = $('.ON'),
        calcOFF = $('.OFF');

        function calcActive() {
            BackspaceONN();
            Clear();
            Cor();
            Cos();
            Ctg();
            Equal();
            Sin();
            Tg();
            X2();
            X3();
            calcON.removeClass("display", "block");
            calcON.css("display", "none");
        
            calcButton.on('click', function () {
                calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
            });
        }

        function calcOffed() {
            BackspaceOff();
            calcON.removeClass("display", "none");
            calcON.css("display", "block");
            calcButton.on('click', function () {
                calcDisplay.val('');
            });
        }



    function calcStart() {
        calcON.on('click', function () {
            calcON.addClass("active");
            calcActive();
        });
    }

    function calcEnd() {
        calcOFF.on('click', function () {
            calcON.removeClass("active");
            calcOffed();
        });
    }
    calcStart();
    calcEnd();

});





