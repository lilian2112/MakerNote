
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
    document.getElementById("note_list").innerHTML = result
  };

  document.getElementById("add_note_button").addEventListener('click', function(){
    event.preventDefault();
    addNote();
  });

  //function to add note
  function addNote(){
    var noteText = document.getElementById("note_text").value;
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
    document
    .getElementById("full_note")
    .innerHTML = note;
  };
}
