  function TestLib() {
    this.document = document
  }
  var getElement = function(element){
      return this.document.getElementById(element);
  };
