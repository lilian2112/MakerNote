+window.onload = function()
 + {
 + var notes = new NoteList();
 +    notes.addNote("Butts");
 + document.getElementById("demo").innerHTML = toEqual(notes.notes[0],"Butts");
 +
 + var notes = new NoteList();
 +    notes.addNote("I like big butts and I am unable to be deceitful about it.");
 +    notes.truncateNote();
 + document.getElementById("demo1").innerHTML = toEqual(notes.truncatedArray[0], "I like big butts and" );
 +}
