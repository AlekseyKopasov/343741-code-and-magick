'use strict';

(function () {
  var wizards = [];

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  var updateWizards = function () {
    window.renderWizards.create(wizards.sort(function (left, right) {
      var rankDiff = window.utils.getRank(right) - window.utils.getRank(left);
      if (rankDiff === 0) {
        rankDiff = window.utils.nameSort(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var refreshWizaeds = window.debounce(updateWizards);

  window.player.onChange = function () {
    refreshWizaeds();
  };

  window.backend.load(successHandler, window.errorMessage.create);

})();
