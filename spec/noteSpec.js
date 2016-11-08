var notes = new Notes();
notes.addNote("Butts");
toEqual(notes.notesArray[0],"Butts");


var notes = new Notes();
  notes.addNote("I like big butts and I am unable to be deceitful about it.");
  notes.truncateNote();
  toEqual(notes.abbreviatedArray[0], "I like big butts and" );
