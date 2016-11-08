var noteList = new NoteList();
var saveNote = document.getElementById("addNoteButton");
var noteText = document.getElementById("noteText").value;
noteList.addNote(noteText);
var notes = noteList.truncateNote();
