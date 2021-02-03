/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Math/BackspaceON.js":
/*!*****************************!*\
  !*** ./Math/BackspaceON.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BackspaceONN
/* harmony export */ });
function BackspaceONN() {
    const calcBackspace = $('.backspace'),
        calcDisplay = $('.calculator__display');

    calcBackspace.removeClass("display", "none");
    calcBackspace.css("display", "block");

    calcBackspace.on('click', function () {
        calcDisplay.val(calcDisplay.val().substring(0, calcDisplay.val().length - 1));
    });

}

/***/ }),

/***/ "./Math/BackspaceOff.js":
/*!******************************!*\
  !*** ./Math/BackspaceOff.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ BackspaceOff
/* harmony export */ });
function BackspaceOff() {
    const calcBackspace = $('.backspace'),
        calcDisplay = $('.calculator__display');

    calcDisplay.val('');
    calcBackspace.removeClass("display", "block");
    calcBackspace.css("display", "none");
}

/***/ }),

/***/ "./Math/Clear.js":
/*!***********************!*\
  !*** ./Math/Clear.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Clear
/* harmony export */ });
function Clear() {
   const calcClear = $('.ctr'),
      calcDisplay = $('.calculator__display');

   calcClear.on('click', function () {
      calcDisplay.val('');
   });
}

/***/ }),

/***/ "./Math/Cor.js":
/*!*********************!*\
  !*** ./Math/Cor.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cor
/* harmony export */ });
function Cor() {
    const calcCor = $('.cor'),
        calcDisplay = $('.calculator__display');

    calcCor.on('click', function () {
        calcDisplay.val(Math.sqrt(calcDisplay.val()));
    });
}

/***/ }),

/***/ "./Math/logic.js":
/*!***********************!*\
  !*** ./Math/logic.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConversionToArray": () => /* binding */ ConversionToArray,
/* harmony export */   "priority": () => /* binding */ priority,
/* harmony export */   "calculate": () => /* binding */ calculate
/* harmony export */ });
//укомудкмукдщ
function ConversionToArray(s) {
    // делает из строки массив состоящий из цифр и операции
    var calculation = [],
        current = '';
    for (var i = 0, ch; ch = s.charAt(i); i++) {
        if ('^*/+-()'.indexOf(ch) > -1) {
            if (current == '' && ch == '-') {
                current = '-';
            } else { 
                if(current == '') {
                    calculation.push(ch);
                }else {
                    calculation.push(parseFloat(current), ch);
                    current = '';
                }
            }
        } else {
            current += s.charAt(i);
        }
    }
    if (current != '') {
        calculation.push(parseFloat(current));
    }
    console.log(calculation); //

    return calculation;
}

function priority(calc) {
    //делает приоритет скобками
    let newArr = [];
    for (var s = 0; s < calc.length; s++){

        if (calc[s] === '('){
            let position = calc.indexOf('(');
            console.log(`position is ${position}`);
            newArr.push(...calc.splice(calc.indexOf('(') , calc.indexOf(')') - calc.indexOf('(') + 1));
            console.log(newArr);
            newArr.pop();
            newArr.shift();
            console.log(newArr);
           console.log('newArr');
           calc.splice(position,0,(calculate(newArr)));
           console.log(calc);
           console.log('END');
        }
    }
    return(calc);
}

function calculate(calc) {
    // считает массив получений из строки и дает результат 
    var opt = [{'^': (a, b) => Math.pow(a, b)},
               {'*': (a, b) => a * b, '/': (a, b) => a / b},
               {'+': (a, b) => a + b, '-': (a, b) => a - b}],
        newCalc = [],
        operation;
        let restart = ['Ошибка','Введены неккоректные значения, повторите'];

    for (var i = 0; i < opt.length; i++) {
        for (var j = 0; j < calc.length; j++) {
            if (opt[i][calc[j]]) {
                operation = opt[i][calc[j]];
            } else if (operation) {
                if(calc[j-1] === "/") {
                    if(calc[j] === 0) {
                        return restart;
                    }
                } 
                newCalc[newCalc.length - 1] = 
                    operation(newCalc[newCalc.length - 1], calc[j]);
                operation = null;
            } else {
                newCalc.push(calc[j]);
            }
   //         console.log(newCalc);
        }
        calc = newCalc;
        newCalc = [];
    }
    if (calc.length > 1) {
        console.log('Невозможно выполнить');
        return restart[1];
    } else {
        return calc[0];
    }
}


/***/ }),

/***/ "./Math/trigonometry.js":
/*!******************************!*\
  !*** ./Math/trigonometry.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrigonometryOperations": () => /* binding */ TrigonometryOperations
/* harmony export */ });
const calcDisplay = $('.calculator__display');
function TrigonometryOperations () {
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


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Math_BackspaceON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/BackspaceON */ "./Math/BackspaceON.js");
/* harmony import */ var _Math_BackspaceOff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Math/BackspaceOff */ "./Math/BackspaceOff.js");
/* harmony import */ var _Math_Clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Math/Clear */ "./Math/Clear.js");
/* harmony import */ var _Math_Cor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Math/Cor */ "./Math/Cor.js");
/* harmony import */ var _Math_logic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Math/logic */ "./Math/logic.js");
/* harmony import */ var _Math_trigonometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Math/trigonometry */ "./Math/trigonometry.js");







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

            (0,_Math_BackspaceON__WEBPACK_IMPORTED_MODULE_0__.default)();
            (0,_Math_Clear__WEBPACK_IMPORTED_MODULE_2__.default)();
            (0,_Math_Cor__WEBPACK_IMPORTED_MODULE_3__.default)();
            (0,_Math_trigonometry__WEBPACK_IMPORTED_MODULE_5__.TrigonometryOperations)();
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
            (0,_Math_BackspaceOff__WEBPACK_IMPORTED_MODULE_1__.default)();
            calcDisplay.val('Выключение');
            setTimeout (rest,1000);
        });
    }

     function equal (){
        calcEqual.on('click', function () {
            console.log(calcDisplay.val());

         if ((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.calculate)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.priority)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.ConversionToArray)(calcDisplay.val()))) === 'Ошибка' || (0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.calculate)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.priority)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.ConversionToArray)(calcDisplay.val()))) === 'Введены неккоректные значения, повторите' ) {
            calcDisplay.val((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.calculate)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.priority)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.ConversionToArray)(calcDisplay.val()))));
            setTimeout(rest, 1000);
         } else {
            calcDisplay.val((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.calculate)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.priority)((0,_Math_logic__WEBPACK_IMPORTED_MODULE_4__.ConversionToArray)(calcDisplay.val()))).toFixed(2));
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map