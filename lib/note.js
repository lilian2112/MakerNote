"use strict";
(function(exports){
    function NoteList(){
      this.notes = []
    };

    NoteList.prototype.notes = function(){
      return this.notes;
    };

    NoteList.prototype.addNote = function(note){
      this.notes.push(note);
    };

    NoteList.prototype.truncateNote = function(){
      var truncatedArray = this.notes.map(function(note){
        return note.substring(0,20);
      });
      return truncatedArray
    };

  exports.NoteList = NoteList;
})(this);
