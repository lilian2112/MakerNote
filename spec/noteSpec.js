
function testNewNote() {
  var notes = new Notes();
  notes.addNote("Butts");
  if
  (notes.notesArray[0] == "Butts")
  {
    return "Passed: testNewNote";
  } else {
    return "Errorz: testNewNote";
  }
}

function testTruncation() {
  var notes = new Notes();
  notes.addNote("I like big butts and I am unable to be deceitful about it.");
  notes.truncateNote();
  if
    ( notes.abbreviatedArray[0] == "I like big butts and" )
    {
      return "Passed: testTruncation";
    } else {
      return "Errorz: testTruncation";
    }
}
