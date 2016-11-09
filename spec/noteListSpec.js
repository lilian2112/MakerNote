function testAddingNote(){
  var noteList = new NoteList();

  noteList.addNote("Hi Rosie you have nice glasses.");


  if(noteList.notes.includes("Hi Rosie you have nice glasses.") === false) {
    throw new Error("Note was not added")
  };
};

testAddingNote();
