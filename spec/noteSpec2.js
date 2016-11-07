
function testNewNote() {
  var notes = new Notes();
  notes.addNote("Butts");
  if
  (notes.notesArray[0] != "Butts")
  {
    return "Error";
  } else {
    return "Passed";
  }
}
