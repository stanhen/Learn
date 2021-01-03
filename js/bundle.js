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

/***/ "./Math/Equal.js":
/*!***********************!*\
  !*** ./Math/Equal.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Equal
/* harmony export */ });
function Equal() {
    const calcEqual = $('.equal'),
        calcDisplay = $('.calculator__display');

    calcEqual.on('click', function () {
        calcDisplay.val(eval(calcDisplay.val()));
    });

}

/***/ }),

/***/ "./Math/X2.js":
/*!********************!*\
  !*** ./Math/X2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ X2
/* harmony export */ });
function X2() {
    const calcX2 = $('.x2'),
        calcDisplay = $('.calculator__display');

    calcX2.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 2));
    });


}

/***/ }),

/***/ "./Math/X3.js":
/*!********************!*\
  !*** ./Math/X3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ X3
/* harmony export */ });
function X3() {
    const calcX3 = $('.x3'),
        calcDisplay = $('.calculator__display');

    calcX3.on('click', function () {
        calcDisplay.val(Math.pow(calcDisplay.val(), 3));
    });

}

/***/ }),

/***/ "./Math/cos.js":
/*!*********************!*\
  !*** ./Math/cos.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Cos
/* harmony export */ });
function Cos() {
  const calcCos = $('.cos'),
    calcDisplay = $('.calculator__display');

  calcCos.on('click', function () {
    calcDisplay.val(Math.cos((calcDisplay.val()) * Math.PI / 180));
  });

}

/***/ }),

/***/ "./Math/ctg.js":
/*!*********************!*\
  !*** ./Math/ctg.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Ctg
/* harmony export */ });
function Ctg() {
    const calcCtg = $('.ctg'),
        calcDisplay = $('.calculator__display');

    calcCtg.on('click', function () {
        calcDisplay.val(Math.cos(calcDisplay.val()) / Math.sin(calcDisplay.val()));
    });
}

/***/ }),

/***/ "./Math/sin.js":
/*!*********************!*\
  !*** ./Math/sin.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Sin
/* harmony export */ });
function Sin() {
    const calcSin = $('.sin'),
        calcDisplay = $('.calculator__display');

    calcSin.on('click', function () {
        alcDisplay.val(Math.sin((calcDisplay.val()) * Math.PI / 180));
    });

}

/***/ }),

/***/ "./Math/tg.js":
/*!********************!*\
  !*** ./Math/tg.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Tg
/* harmony export */ });
function Tg() {
  const calcTg = $('.tg'),
    calcDisplay = $('.calculator__display');

  calcTg.on('click', function () {
    calcDisplay.val(Math.sin(calcDisplay.val()) / Math.cos(calcDisplay.val()));
  });


}

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
/* harmony import */ var _Math_cos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Math/cos */ "./Math/cos.js");
/* harmony import */ var _Math_ctg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Math/ctg */ "./Math/ctg.js");
/* harmony import */ var _Math_Equal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Math/Equal */ "./Math/Equal.js");
/* harmony import */ var _Math_sin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Math/sin */ "./Math/sin.js");
/* harmony import */ var _Math_tg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Math/tg */ "./Math/tg.js");
/* harmony import */ var _Math_X2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Math/X2 */ "./Math/X2.js");
/* harmony import */ var _Math_X3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Math/X3 */ "./Math/X3.js");












$(document).ready(function () {



    const calcDisplay = $('.calculator__display'),
        calcButton = $('.button'),
        calcON = $('.ON'),
        calcOFF = $('.OFF');


        function calcActive() {
            (0,_Math_BackspaceON__WEBPACK_IMPORTED_MODULE_0__.default)();
            (0,_Math_Clear__WEBPACK_IMPORTED_MODULE_2__.default)();
            (0,_Math_Cor__WEBPACK_IMPORTED_MODULE_3__.default)();
            (0,_Math_cos__WEBPACK_IMPORTED_MODULE_4__.default)();
            (0,_Math_ctg__WEBPACK_IMPORTED_MODULE_5__.default)();
            (0,_Math_Equal__WEBPACK_IMPORTED_MODULE_6__.default)();
            (0,_Math_sin__WEBPACK_IMPORTED_MODULE_7__.default)();
            (0,_Math_tg__WEBPACK_IMPORTED_MODULE_8__.default)();
            (0,_Math_X2__WEBPACK_IMPORTED_MODULE_9__.default)();
            (0,_Math_X3__WEBPACK_IMPORTED_MODULE_10__.default)();
            calcON.removeClass("display", "block");
            calcON.css("display", "none");
        
            calcButton.on('click', function () {
                calcDisplay.val(calcDisplay.val() + $(this).attr('value'));
            });
        }


        function calcOffed() {
            (0,_Math_BackspaceOff__WEBPACK_IMPORTED_MODULE_1__.default)();
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