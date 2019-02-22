'use strict';

(function () {
  var KEYCODE_ESC = 27;

  var onPopupEscClose = function (evt) {
    if (evt.keyCode === KEYCODE_ESC && evt.target !== setupUserNameElement) {
      setupFormElement.classList.add('hidden');
    }
  };

  var popupOpen = function () {
    setupFormElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscClose);
  };

  var popupClose = function () {
    setupFormElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscClose);
  };

  var setupFormElement = document.querySelector('.setup');
  var setupUserNameElement = document.querySelector('.setup-user-name');
  var setupSubmitElement = document.querySelector('.setup-submit');

  setupSubmitElement.tabIndex = 0;

  window.popup = {
    open: popupOpen,
    close: popupClose
  };
})();
