'use strict';

showNotes();

// Add Note in localStorage 

document.querySelector('#add_todo').addEventListener('click', function () {

    let user_val = document.querySelector('#user_val');

    if (user_val.value.trim() != 0) {
        let allNotes = localStorage.getItem('allNotes');
        let notesArry = [];
        (allNotes === null) ? notesArry = [] : notesArry = JSON.parse(allNotes);  // 

        notesArry.push(user_val.value);
        localStorage.setItem("allNotes", JSON.stringify(notesArry));   // 
        user_val.value = '';
    }
    showNotes();
});

function showNotes() {
    let allNotes = localStorage.getItem('allNotes');
    let notesArry = [];
    (allNotes === null) ? notesArry = [] : notesArry = JSON.parse(allNotes);  // 

    let HTML = '';
    notesArry.forEach(function (element, index) {

        HTML += `<div class="note">
        <p>${element}</p>
        <div class="buttons">
            <button class="edit_note" id="${index}" onclick='editNote(this.id)'>EDIT</button>
            <button class="remove" id="${index}" onclick='deleteNote(this.id)'>REMOVE</button>
        </div>
    </div>
    <hr>`;
    });

    let NotesDiv = document.querySelector('#NotesDiv');
    (notesArry.length == 0) ? NotesDiv.innerHTML = '<h2>Add Notes!</h2>' : NotesDiv.innerHTML = HTML;
}

// Edit Note functinly 
function editNote(index) {
    let allNotes = localStorage.getItem('allNotes');
    let notesArry = [];
    (allNotes === null) ? notesArry = [] : notesArry = JSON.parse(allNotes);
    let updateNote = notesArry.splice(index, 1);
    console.log(updateNote);
    user_val.value = updateNote;
    localStorage.setItem("allNotes", JSON.stringify(notesArry));
    showNotes();
}

// Delete Note functinly 
function deleteNote(index) {
    let allNotes = localStorage.getItem('allNotes');
    let notesArry = [];
    (allNotes === null) ? notesArry = [] : notesArry = JSON.parse(allNotes);
     notesArry.splice(index, 1);
    localStorage.setItem("allNotes", JSON.stringify(notesArry));
    showNotes();
}


