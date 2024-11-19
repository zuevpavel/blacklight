/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../pages/blocks/index/modal-js/modal-js.js */ "./src/pages/blocks/index/modal-js/modal-js.js");

__webpack_require__(/*! ./script.js */ "./src/js/script.js");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  const header = document.querySelector(".header");
  const containerBox = document.querySelectorAll(".container-height-js");
  let headerHeight = 0;
  setHeaderHeight();

  function setHeaderHeight() {
    containerBox.forEach(function (container) {
      container.style.setProperty('--header-height', `${headerHeight}px`);
    });

    if (header) {
      headerHeight = header.offsetHeight;
      containerBox.forEach(function (container) {
        container.style.setProperty('--header-height', `${headerHeight}px`);
      });
    }
  }

  window.addEventListener('resize', setHeaderHeight);
  /*maximizing the window*/

  var maximize = 0;
  let maximizeBtn = document.querySelectorAll('.maximize');
  maximizeBtn.forEach(function (el) {
    el.onclick = function () {
      let window = this.closest(".window");
      let windowBody = window.querySelector('.window-body');

      if (maximize == 0) {
        window.classList.add('fullScreen'); // windowBody.style.height = "90vh";

        maximize = 1;
      } else {
        window.classList.remove('fullScreen'); // windowBody.style.height = "";

        maximize = 0;
      }
    };
  }); // /*closing the window*/

  function close() {
    let closeBtn = document.querySelectorAll('.close-btn');
    closeBtn.forEach(function (el) {
      el.onclick = function () {
        let window = this.closest(".window");
        window.style.display = "none";
      };
    });
  }

  close();
  let folder = document.querySelectorAll('.boxx');

  function openFolderDbl() {
    folder.forEach(function (el) {
      el.ondblclick = function (e) {
        const clickedElement = e.target.closest('[data-btn]');

        if (clickedElement) {
          let target = clickedElement.dataset.btn;
          this.modalContainer = document.querySelector(`[data-window="${target}"]`);
          this.modalContainer.style.display = "block"; // this.modalContainer.classList.remove("fullScreen");

          return;
        }
      };
    });
  }

  function openFolder() {
    folder.forEach(function (el) {
      el.onclick = function (e) {
        const clickedElement = e.target.closest('[data-btn]');

        if (clickedElement) {
          let target = clickedElement.dataset.btn;
          this.modalContainer = document.querySelector(`[data-window="${target}"]`);
          this.modalContainer.style.display = "block";
          this.modalContainer.classList.add("fullScreen"); // this.modalContainer.classList.remove("fullScreen");

          return;
        }
      };
    });
  }

  if (window.innerWidth > 767) {
    openFolderDbl();
  }

  if (window.innerWidth < 767) {
    openFolder();
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 767) {
      folder.forEach(function (el) {
        el.ondblclick = function (e) {
          return false;
        };
      });
      openFolder();
    } else {
      folder.forEach(function (el) {
        el.onclick = function (e) {
          return false;
        };
      });
      openFolderDbl();
    }
  }); // document.addEventListener('click', function(e){
  //     const clickedElement = e.target.closest('[data-btn]');
  //     if (clickedElement) {
  //         let target = clickedElement.dataset.btn;
  //         this.modalContainer = document.querySelector(`[data-window="${target}"]`);
  //         // this.modalContainer.style.display = "block";
  //         this.modalContainer.classList.add("fullScreen");
  //         return;
  //     }
  // }.bind(this));
  // boxes

  const container = document.querySelector(".container");
  let element, startX, startY, bbox;
  container.addEventListener("pointerdown", userPressed, {
    passive: true
  });

  function userPressed(event) {
    element = event.target;

    if (element.classList.contains("item")) {
      // element.style.boxShadow = "-8px 8px 22px -8px rgba(0, 0, 0, 0.70)";
      element.style.transform = "scale(1.01)";
      let zIndexes = [];
      document.querySelectorAll(".item").forEach(box => {
        zIndexes.push(box.style.zIndex);
      });
      element.style.zIndex = Math.max(...zIndexes) + 2;
      startX = event.clientX;
      startY = event.clientY;
      bbox = element.getBoundingClientRect();
      container.addEventListener("pointermove", userMoved, {
        passive: true
      });
      container.addEventListener("pointerup", userReleased, {
        passive: true
      });
      container.addEventListener("pointercancel", userReleased, {
        passive: true
      });
    }
  }

  function userMoved(event) {
    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    element.style.left = bbox.left + deltaX + "px";
    element.style.top = bbox.top + deltaY - headerHeight + "px";
    element.style.right = "";
    element.style.bottom = "";
  }

  function userReleased(event) {
    // element.style.boxShadow = "-4px 4px 20px -6px rgba(0, 0, 0, 0.75)";
    element.style.transform = "scale(1.00)";
    container.removeEventListener("pointermove", userMoved);
    container.removeEventListener("pointerup", userReleased);
    container.removeEventListener("pointercancel", userReleased);
  } //Dark mode


  const btnDarkMode = document.querySelector('.theme__button-input');
  const theme = document.querySelector('.theme');
  const currentTheme = localStorage.getItem('theme');
  const desktopWindow = document.querySelector('.desktop-window');
  const hero = document.querySelector('.hero');

  function setTheme(name) {
    theme.setAttribute('data-theme', name); // localStorage.setItem('theme', name)
  }

  if (currentTheme) {
    theme.setAttribute('data-theme', currentTheme);
  } else {
    setTheme('dark');
    desktopWindow.classList.remove('active');
    hero.classList.add('active');
  }

  btnDarkMode.addEventListener('click', () => {
    if (theme.getAttribute('data-theme') === 'light') {
      setTheme('dark');
      desktopWindow.classList.remove('active');
      hero.classList.add('active');
    } else {
      setTheme('light');
      hero.classList.remove('active');
      desktopWindow.classList.add('active');
    } // desktopWindow.classList.toggle('active');
    // hero.classList.toggle('active');

  });

  if (theme.getAttribute('data-theme') === 'light') {
    document.querySelector('.theme__button-input').checked = true;
    desktopWindow.classList.add('active');
    hero.classList.remove('active');
  } else {
    hero.classList.add('active');
    desktopWindow.classList.remove('active');
  } //time counter to header


  let startTime = 540; //9 утра

  let endTime = startTime + 540; //6 вечера

  let timer;
  let timerText = document.querySelector('#countdownText');
  setTimer();

  function setTimer() {
    let now = String(new Date()).substr(16, 5);
    let time = now.split(':');
    let nowTime = +time[0] * 60 + +time[1];
    let countdownEl = document.querySelector("#countdown");

    if (endTime > nowTime) {
      timer = endTime - nowTime;
      timerText.innerHTML = 'до конца рабочего дня';
    } else {
      timer = 1440 - nowTime + startTime;
      timerText.innerHTML = 'до начала рабочего дня';
    }

    ;
    let hours = Math.floor(timer / 60);
    let minutes = timer % 60;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    countdownEl.innerHTML = `${hours}: ${minutes}`;
  }

  ;
  setInterval(updateCountdown, 60000);

  function updateCountdown() {
    timer--;

    if (timer <= 0) {
      setTimer();
    }
  }
});

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global document */
const ready = function (fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/pages/blocks/index/modal-js/modal-js.js":
/*!*****************************************************!*\
  !*** ./src/pages/blocks/index/modal-js/modal-js.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Modal {
  constructor(options) {
    let defaultOptions = {
      isOpen: () => {},
      isClose: () => {}
    };
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.modal'); // this.speed = 300;

    this.speed = false;
    this.animation = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.fixBlocks = document.querySelectorAll('.fix-block');
    this.fockusElements = ['a[href]', 'input', 'button', 'select', 'textarea', '[tabindex]'];
    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', function (e) {
        const clickedElement = e.target.closest('[data-path]');

        if (clickedElement) {
          // console.log('clicked');
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this.modalContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.modal-close')) {
          this.close();
          return;
        }
      }.bind(this));
      window.addEventListener('keydown', function (e) {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      }.bind(this));
      this.modal.addEventListener('click', function (e) {
        if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
          this.close();
        } // если мы не кликаем по данному окну и мы не кликаем по внутренностям этого окна и если окно открыто, то тогда закрыть окно.

      }.bind(this));
    }
  }

  open() {
    this.previousActiveElement = document.activeElement;
    this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');
    this.disableScroll();
    this.modalContainer.classList.add('modal-open');
    this.modalContainer.classList.add(this.animation);
    setTimeout(() => {
      this.modalContainer.classList.add('animate-open');
      this.options.isOpen(this);
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('modal-open');
      this.enableScroll();
      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();
    }
  } //фокус только внутри модалки


  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.fockusElements);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);

    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.fockusElements);

    if (this.isOpen) {
      if (focusable) focusable[0].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }

  disableScroll() {
    let pagePosition = window.scrollY;
    this.lockPadding();
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }

  enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    this.unlockPadding();
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }

  lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = paddingOffset;
    });
    document.body.style.paddingRight = paddingOffset;
  }

  unlockPadding() {
    this.fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
    document.body.style.paddingRight = '0px';
  }

}

const modal = new Modal({
  isOpen: modal => {
    console.log(modal);
    console.log('opened');
  },
  isClose: () => {
    console.log('closed');
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL2RvY3VtZW50UmVhZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Jsb2Nrcy9pbmRleC9tb2RhbC1qcy9tb2RhbC1qcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwicmVhZHkiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXJCb3giLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVySGVpZ2h0Iiwic2V0SGVhZGVySGVpZ2h0IiwiZm9yRWFjaCIsImNvbnRhaW5lciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibWF4aW1pemUiLCJtYXhpbWl6ZUJ0biIsImVsIiwib25jbGljayIsImNsb3Nlc3QiLCJ3aW5kb3dCb2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY2xvc2UiLCJjbG9zZUJ0biIsImRpc3BsYXkiLCJmb2xkZXIiLCJvcGVuRm9sZGVyRGJsIiwib25kYmxjbGljayIsImUiLCJjbGlja2VkRWxlbWVudCIsInRhcmdldCIsImRhdGFzZXQiLCJidG4iLCJtb2RhbENvbnRhaW5lciIsIm9wZW5Gb2xkZXIiLCJpbm5lcldpZHRoIiwiZWxlbWVudCIsInN0YXJ0WCIsInN0YXJ0WSIsImJib3giLCJ1c2VyUHJlc3NlZCIsInBhc3NpdmUiLCJldmVudCIsImNvbnRhaW5zIiwidHJhbnNmb3JtIiwiekluZGV4ZXMiLCJib3giLCJwdXNoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXNlck1vdmVkIiwidXNlclJlbGVhc2VkIiwiZGVsdGFYIiwiZGVsdGFZIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJ0bkRhcmtNb2RlIiwidGhlbWUiLCJjdXJyZW50VGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVza3RvcFdpbmRvdyIsImhlcm8iLCJzZXRUaGVtZSIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRpbWVyIiwidGltZXJUZXh0Iiwic2V0VGltZXIiLCJub3ciLCJTdHJpbmciLCJEYXRlIiwic3Vic3RyIiwidGltZSIsInNwbGl0Iiwibm93VGltZSIsImNvdW50ZG93bkVsIiwiaW5uZXJIVE1MIiwiaG91cnMiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZUNvdW50ZG93biIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwiTW9kYWwiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImlzT3BlbiIsImlzQ2xvc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJtb2RhbCIsInNwZWVkIiwiYW5pbWF0aW9uIiwicHJldmlvdXNBY3RpdmVFbGVtZW50IiwiZml4QmxvY2tzIiwiZm9ja3VzRWxlbWVudHMiLCJldmVudHMiLCJwYXRoIiwicGFyc2VJbnQiLCJvcGVuIiwiYmluZCIsImtleUNvZGUiLCJmb2N1c0NhdGNoIiwiYWN0aXZlRWxlbWVudCIsImRpc2FibGVTY3JvbGwiLCJzZXRUaW1lb3V0IiwiZm9jdXNUcmFwIiwiZW5hYmxlU2Nyb2xsIiwiZm9jdXNhYmxlIiwiZm9jdXNBcnJheSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiZm9jdXNlZEluZGV4IiwiaW5kZXhPZiIsInNoaWZ0S2V5IiwibGVuZ3RoIiwiZm9jdXMiLCJwcmV2ZW50RGVmYXVsdCIsInBhZ2VQb3NpdGlvbiIsInNjcm9sbFkiLCJsb2NrUGFkZGluZyIsImJvZHkiLCJwb3NpdGlvbiIsInVubG9ja1BhZGRpbmciLCJzY3JvbGwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYWRkaW5nT2Zmc2V0Iiwib2Zmc2V0V2lkdGgiLCJwYWRkaW5nUmlnaHQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFQLEM7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUVBQyxzRUFBSyxDQUFDLFlBQVU7QUFHWixRQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsUUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGdCQUFULENBQTBCLHNCQUExQixDQUFyQjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBQyxpQkFBZTs7QUFDZixXQUFTQSxl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QXdCUyxFQUFELElBQVE7QUFDM0JBLFFBQUUsQ0FBQ1AsS0FBSCxDQUFTeUksWUFBVCxHQUF3QkYsYUFBeEI7QUFDSCxLQUZEO0FBR0EvSSxZQUFRLENBQUMwSSxJQUFULENBQWNsSSxLQUFkLENBQW9CeUksWUFBcEIsR0FBbUNGLGFBQW5DO0FBQ0g7O0FBRURILGVBQWEsR0FBRztBQUNaLFNBQUsvQixTQUFMLENBQWV2RyxPQUFmLENBQXdCUyxFQUFELElBQVE7QUFDM0JBLFFBQUUsQ0FBQ1AsS0FBSCxDQUFTeUksWUFBVCxHQUF3QixLQUF4QjtBQUNILEtBRkQ7QUFHQWpKLFlBQVEsQ0FBQzBJLElBQVQsQ0FBY2xJLEtBQWQsQ0FBb0J5SSxZQUFwQixHQUFtQyxLQUFuQztBQUVIOztBQWxLTzs7QUFxS1osTUFBTXhDLEtBQUssR0FBRyxJQUFJUixLQUFKLENBQVU7QUFDcEJJLFFBQU0sRUFBR0ksS0FBRCxJQUFXO0FBQ2Z5QyxXQUFPLENBQUNDLEdBQVIsQ0FBWTFDLEtBQVo7QUFDQXlDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDSCxHQUptQjtBQUtwQjdDLFNBQU8sRUFBRSxNQUFNO0FBQ1g0QyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7QUFQbUIsQ0FBVixDQUFkLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvZW50cnkuanNcIik7XG4iLCJyZXF1aXJlKCcuLi9wYWdlcy9ibG9ja3MvaW5kZXgvbW9kYWwtanMvbW9kYWwtanMuanMnKTtcbnJlcXVpcmUoJy4vc2NyaXB0LmpzJyk7XG4iLCJpbXBvcnQgcmVhZHkgZnJvbSAnVXRpbHMvZG9jdW1lbnRSZWFkeS5qcyc7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyLWhlaWdodC1qc1wiKTtcbiAgICBsZXQgaGVhZGVySGVpZ2h0ID0gMDtcbiAgICBzZXRIZWFkZXJIZWlnaHQoKTtcbiAgICBmdW5jdGlvbiBzZXRIZWFkZXJIZWlnaHQoKSB7XG4gICAgICAgIGNvbnRhaW5lckJveC5mb3JFYWNoKGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWhlYWRlci1oZWlnaHQnLCBgJHtoZWFkZXJIZWlnaHR9cHhgKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGNvbnRhaW5lckJveC5mb3JFYWNoKGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1oZWFkZXItaGVpZ2h0JywgYCR7aGVhZGVySGVpZ2h0fXB4YClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVhZGVySGVpZ2h0KTtcblxuICAgICAgICAvKm1heGltaXppbmcgdGhlIHdpbmRvdyovXG4gICAgdmFyIG1heGltaXplID0gMDtcblxuICAgIGxldCBtYXhpbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXhpbWl6ZScpO1xuICAgIG1heGltaXplQnRuLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHdpbmRvdyA9IHRoaXMuY2xvc2VzdChcIi53aW5kb3dcIik7XG4gICAgICAgICAgICBsZXQgd2luZG93Qm9keSA9IHdpbmRvdy5xdWVyeVNlbGVjdG9yKCcud2luZG93LWJvZHknKTtcbiAgICAgICAgICAgIGlmKG1heGltaXplID09IDApe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGFzc0xpc3QuYWRkKCdmdWxsU2NyZWVuJyk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Qm9keS5zdHlsZS5oZWlnaHQgPSBcIjkwdmhcIjtcbiAgICAgICAgICAgICAgICBtYXhpbWl6ZSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdmdWxsU2NyZWVuJyk7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93Qm9keS5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG1heGltaXplID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIC8vIC8qY2xvc2luZyB0aGUgd2luZG93Ki9cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlLWJ0bicpO1xuICAgICAgICBjbG9zZUJ0bi5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdpbmRvdyA9IHRoaXMuY2xvc2VzdChcIi53aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZSgpO1xuXG5cblxuICAgIGxldCBmb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94eCcpO1xuXG4gICAgZnVuY3Rpb24gb3BlbkZvbGRlckRibCgpIHtcbiAgICAgICAgZm9sZGVyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLm9uZGJsY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1idG5dJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBjbGlja2VkRWxlbWVudC5kYXRhc2V0LmJ0bjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXdpbmRvdz1cIiR7dGFyZ2V0fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImZ1bGxTY3JlZW5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuRm9sZGVyKCkge1xuICAgICAgICBmb2xkZXIuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwub25jbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWJ0bl0nKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xpY2tlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGNsaWNrZWRFbGVtZW50LmRhdGFzZXQuYnRuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtd2luZG93PVwiJHt0YXJnZXR9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbFNjcmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbFNjcmVlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xuICAgICAgICBvcGVuRm9sZGVyRGJsKCk7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY3KSB7XG4gICAgICAgIG9wZW5Gb2xkZXIoKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2Nykge1xuICAgICAgICAgICAgZm9sZGVyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5vbmRibGNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgb3BlbkZvbGRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9sZGVyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG9wZW5Gb2xkZXJEYmwoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAvLyAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1idG5dJyk7XG4gICAgLy8gICAgIGlmIChjbGlja2VkRWxlbWVudCkge1xuICAgIC8vICAgICAgICAgbGV0IHRhcmdldCA9IGNsaWNrZWRFbGVtZW50LmRhdGFzZXQuYnRuO1xuICAgIC8vICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXdpbmRvdz1cIiR7dGFyZ2V0fVwiXWApO1xuICAgIC8vICAgICAgICAgLy8gdGhpcy5tb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIC8vICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZnVsbFNjcmVlblwiKTtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0uYmluZCh0aGlzKSk7XG5cblxuICAgIC8vIGJveGVzXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IGVsZW1lbnQsc3RhcnRYLHN0YXJ0WSxiYm94O1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgdXNlclByZXNzZWQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIGZ1bmN0aW9uIHVzZXJQcmVzc2VkKGV2ZW50KSB7XG4gICAgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpdGVtXCIpKSB7XG4gICAgICAgIC8vIGVsZW1lbnQuc3R5bGUuYm94U2hhZG93ID0gXCItOHB4IDhweCAyMnB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjcwKVwiO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4wMSlcIjtcbiAgICAgICAgbGV0IHpJbmRleGVzID0gW107XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKS5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgICAgekluZGV4ZXMucHVzaChib3guc3R5bGUuekluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gTWF0aC5tYXgoLi4uekluZGV4ZXMpICsgMjtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgYmJveCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgdXNlck1vdmVkLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCB1c2VyUmVsZWFzZWQsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLCB1c2VyUmVsZWFzZWQsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVzZXJNb3ZlZChldmVudCkge1xuICAgIGxldCBkZWx0YVggPSBldmVudC5jbGllbnRYIC0gc3RhcnRYO1xuICAgIGxldCBkZWx0YVkgPSBldmVudC5jbGllbnRZIC0gc3RhcnRZO1xuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGJib3gubGVmdCArIGRlbHRhWCArIFwicHhcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGJib3gudG9wICsgZGVsdGFZIC0gaGVhZGVySGVpZ2h0ICsgXCJweFwiO1xuICAgIGVsZW1lbnQuc3R5bGUucmlnaHQgPSBcIlwiO1xuICAgIGVsZW1lbnQuc3R5bGUuYm90dG9tID0gXCJcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1c2VyUmVsZWFzZWQoZXZlbnQpIHtcbiAgICAvLyBlbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IFwiLTRweCA0cHggMjBweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC43NSlcIjtcbiAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4wMClcIjtcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHVzZXJNb3ZlZCk7XG4gICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgdXNlclJlbGVhc2VkKTtcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJjYW5jZWxcIiwgdXNlclJlbGVhc2VkKTtcbiAgICB9XG5cblxuXG5cblxuXG4vL0RhcmsgbW9kZVxuY29uc3QgYnRuRGFya01vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWVfX2J1dHRvbi1pbnB1dCcpXG5jb25zdCB0aGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpXG5jb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKVxuY29uc3QgZGVza3RvcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNrdG9wLXdpbmRvdycpXG5jb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKVxuXG5mdW5jdGlvbiBzZXRUaGVtZShuYW1lKXtcbiAgICB0aGVtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBuYW1lKVxuICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIG5hbWUpXG59XG5cbmlmIChjdXJyZW50VGhlbWUpIHtcbiAgICB0aGVtZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBjdXJyZW50VGhlbWUpXG59IGVsc2Uge1xuICAgIHNldFRoZW1lKCdkYXJrJylcbiAgICBkZXNrdG9wV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmJ0bkRhcmtNb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICh0aGVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICBzZXRUaGVtZSgnZGFyaycpO1xuICAgICAgICBkZXNrdG9wV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRoZW1lKCdsaWdodCcpXG4gICAgICAgIGhlcm8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGRlc2t0b3BXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICAgIC8vIGRlc2t0b3BXaW5kb3cuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8gaGVyby5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pXG5cbmlmICh0aGVtZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSA9PT0gJ2xpZ2h0Jykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZV9fYnV0dG9uLWlucHV0JykuY2hlY2tlZCA9IHRydWU7XG4gICAgZGVza3RvcFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufSBlbHNlIHtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGRlc2t0b3BXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbi8vdGltZSBjb3VudGVyIHRvIGhlYWRlclxubGV0IHN0YXJ0VGltZSA9IDU0MDsgLy85INGD0YLRgNCwXG5sZXQgZW5kVGltZSA9IHN0YXJ0VGltZSArIDU0MDsgLy82INCy0LXRh9C10YDQsFxubGV0IHRpbWVyO1xubGV0IHRpbWVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudGRvd25UZXh0Jylcblxuc2V0VGltZXIoKTtcblxuZnVuY3Rpb24gc2V0VGltZXIoKSB7XG4gICAgbGV0IG5vdyA9IFN0cmluZyhuZXcgRGF0ZSgpKS5zdWJzdHIoMTYsIDUpO1xuXG4gICAgbGV0IHRpbWUgPSBub3cuc3BsaXQoJzonKTtcbiAgICBsZXQgbm93VGltZSA9ICgrdGltZVswXSo2MCkgKyArdGltZVsxXTtcbiAgICBsZXQgY291bnRkb3duRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50ZG93blwiKTtcblxuXG4gICAgaWYgKGVuZFRpbWUgPiAgbm93VGltZSkge1xuICAgICAgICB0aW1lciA9IGVuZFRpbWUgLSBub3dUaW1lO1xuICAgICAgICB0aW1lclRleHQuaW5uZXJIVE1MID0gJ9C00L4g0LrQvtC90YbQsCDRgNCw0LHQvtGH0LXQs9C+INC00L3RjydcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lciA9IDE0NDAgLSBub3dUaW1lICsgc3RhcnRUaW1lO1xuICAgICAgICB0aW1lclRleHQuaW5uZXJIVE1MID0gJ9C00L4g0L3QsNGH0LDQu9CwINGA0LDQsdC+0YfQtdCz0L4g0LTQvdGPJ1xuICAgIH07XG5cbiAgICBsZXQgaG91cnMgPSBNYXRoLmZsb29yKHRpbWVyIC8gNjApO1xuICAgIGxldCBtaW51dGVzID0gdGltZXIgJSA2MDtcbiAgICBob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgbWludXRlcyA6IG1pbnV0ZXM7XG4gICAgY291bnRkb3duRWwuaW5uZXJIVE1MID0gYCR7aG91cnN9OiAke21pbnV0ZXN9YDtcbn07XG5cbnNldEludGVydmFsKHVwZGF0ZUNvdW50ZG93biwgNjAwMDApO1xuZnVuY3Rpb24gdXBkYXRlQ291bnRkb3duKCkge1xuICAgIHRpbWVyLS07XG4gICAgaWYgKHRpbWVyIDw9IDApIHtcbiAgICBzZXRUaW1lcigpO1xuICAgIH1cbn1cblxufSk7XG4iLCIvKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxuY29uc3QgcmVhZHkgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWFkeTtcbiIsImNsYXNzIE1vZGFsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogKCkgPT4ge30sXG4gICAgICAgICAgICBpc0Nsb3NlOiAoKSA9PiB7fSxcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gICAgICAgIC8vIHRoaXMuc3BlZWQgPSAzMDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpeEJsb2NrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXgtYmxvY2snKTtcbiAgICAgICAgdGhpcy5mb2NrdXNFbGVtZW50cyA9IFtcbiAgICAgICAgICAgICdhW2hyZWZdJyxcbiAgICAgICAgICAgICdpbnB1dCcsXG4gICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICdzZWxlY3QnLFxuICAgICAgICAgICAgJ3RleHRhcmVhJyxcbiAgICAgICAgICAgICdbdGFiaW5kZXhdJ1xuICAgICAgICBdO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuXG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBhdGhdJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNsaWNrZWRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBjbGlja2VkRWxlbWVudC5kYXRhc2V0LnBhdGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSBjbGlja2VkRWxlbWVudC5kYXRhc2V0LmFuaW1hdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWVkID0gY2xpY2tlZEVsZW1lbnQuZGF0YXNldC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb24gPyBhbmltYXRpb24gOiAnZmFkZSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZCA/IHBhcnNlSW50KHNwZWVkKSA6IDMwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7dGFyZ2V0fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcubW9kYWwtY2xvc2UnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNDYXRjaChlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAgICAgdGhpcy5tb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWxfX2NvbnRhaW5lcicpICYmICFlLnRhcmdldC5jbG9zZXN0KCcubW9kYWxfX2NvbnRhaW5lcicpICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g0LXRgdC70Lgg0LzRiyDQvdC1INC60LvQuNC60LDQtdC8INC/0L4g0LTQsNC90L3QvtC80YMg0L7QutC90YMg0Lgg0LzRiyDQvdC1INC60LvQuNC60LDQtdC8INC/0L4g0LLQvdGD0YLRgNC10L3QvdC+0YHRgtGP0Lwg0Y3RgtC+0LPQviDQvtC60L3QsCDQuCDQtdGB0LvQuCDQvtC60L3QviDQvtGC0LrRgNGL0YLQviwg0YLQviDRgtC+0LPQtNCwINC30LDQutGA0YvRgtGMINC+0LrQvdC+LlxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zaXRpb24tdGltZScsIGAke3RoaXMuc3BlZWQgLyAxMDAwfXNgKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVNjcm9sbCgpO1xuXG4gICAgICAgIHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5hbmltYXRpb24pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9wZW4nKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc09wZW4odGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvY3VzVHJhcCgpO1xuICAgICAgICB9LCB0aGlzLnNwZWVkKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1vcGVuJyk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5hbmltYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcblxuICAgICAgICAgICAgdGhpcy5lbmFibGVTY3JvbGwoKTtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0Nsb3NlKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL9GE0L7QutGD0YEg0YLQvtC70YzQutC+INCy0L3Rg9GC0YDQuCDQvNC+0LTQsNC70LrQuFxuICAgIGZvY3VzQ2F0Y2goZSkge1xuICAgICAgICBjb25zdCBmb2N1c2FibGUgPSB0aGlzLm1vZGFsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2NrdXNFbGVtZW50cyk7XG4gICAgICAgIGNvbnN0IGZvY3VzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmb2N1c2FibGUpO1xuICAgICAgICBjb25zdCBmb2N1c2VkSW5kZXggPSBmb2N1c0FycmF5LmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBmb2N1c0FycmF5W2ZvY3VzQXJyYXkubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IGZvY3VzQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgZm9jdXNBcnJheVswXS5mb2N1cygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9jdXNUcmFwKCkge1xuICAgICAgICBjb25zdCBmb2N1c2FibGUgPSB0aGlzLm1vZGFsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5mb2NrdXNFbGVtZW50cyk7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgaWYgKGZvY3VzYWJsZSkgZm9jdXNhYmxlWzBdLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZVNjcm9sbCgpIHtcbiAgICAgICAgbGV0IHBhZ2VQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgICB0aGlzLmxvY2tQYWRkaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5kYXRhc2V0LnBvc2l0aW9uID0gcGFnZVBvc2l0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IC1wYWdlUG9zaXRpb24gKyAncHgnO1xuICAgIH1cblxuICAgIGVuYWJsZVNjcm9sbCgpIHtcbiAgICAgICAgbGV0IHBhZ2VQb3NpdGlvbiA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuZGF0YXNldC5wb3NpdGlvbiwgMTApO1xuICAgICAgICB0aGlzLnVubG9ja1BhZGRpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICAgICAgd2luZG93LnNjcm9sbCh7IHRvcDogcGFnZVBvc2l0aW9uLCBsZWZ0OiAwIH0pO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICAgIH1cblxuICAgIGxvY2tQYWRkaW5nKCkge1xuICAgICAgICBsZXQgcGFkZGluZ09mZnNldCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuZml4QmxvY2tzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nT2Zmc2V0O1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBwYWRkaW5nT2Zmc2V0O1xuICAgIH1cblxuICAgIHVubG9ja1BhZGRpbmcoKSB7XG4gICAgICAgIHRoaXMuZml4QmxvY2tzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XG5cbiAgICB9XG59XG5cbmNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHtcbiAgICBpc09wZW46IChtb2RhbCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RhbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuZWQnKTtcbiAgICB9LFxuICAgIGlzQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCcpO1xuICAgIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=