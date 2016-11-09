window.testLib = (function() {

  function TestLib(elements) {

  }

  var testLib = {
    TestLib.prototype.get = function(element) {
      document.getElementById(element);
    };
  };

  return testLib;
}());
