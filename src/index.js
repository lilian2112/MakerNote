noteList = new NoteList();

window.onload = function()
{
  makeUrlChangeShowNote();
  // function to display notes
  function displayNotes(){
    var notes = noteList.notes
    var result = ""
    for (var i = 0; i < notes.length; i++) {
      result += " <li style='list-style: none'><a href='#" + notes[i] + "'>" + notes[i].substring(0,20) + "</a></li>";
    }
    getElement("note_list").innerHTML = result
  };

  getElement("add_note_button").addEventListener('click', function(){
    event.preventDefault();
    addNote();
  });
  getElement("all_notes").addEventListener('click', function(){
    event.preventDefault();
    displayNotes();
  });

  //function to add note
  function addNote(){
    var noteText = getElement("note_text").value;
    noteList.addNote(noteText);
    displayNotes();
  };

  //function to display full note
  function makeUrlChangeShowNote() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };

  function showNote(note) {
    getElement("note_list").innerHTML = note;
  };
}
