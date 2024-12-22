let localNotes = {
    'notesTitles':['Notiz 1'],
    'notes':['Hallo! bitte schreibe eine Notiz wenn du auf + drückst!'],
    'archivNotesTitles':['Notiz 2'],
    'archivNotes':['Bitte lösche mich auf dem X oder schieb mich zurück zu den Notizen auf dem N '], 
    'trashNotesTitles':['Notiz 3'],
    'trashNotes':['Bitte lösche mich auf dem X!']
}

let localStorageNotes = {
    'storageNotesTitles':[],
    'storageNotes':[],
    'storageArchivNotesTitles':[],
    'storageArchivNotes':[],
    'storageTrashNotesTitles':[],
    'storageTrashNotes':[]
}

function init() {
    getFromLocalStorage();
    renderAllNotes();
}

function renderAllNotes(){
    renderNotes();
    renderArchivNotes();
    renderTrashNotes();
}

function renderNotes(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    if(localStorageNotes.storageNotes == "" && localStorageNotes.storageArchivNotes == "" && localStorageNotes.storageTrashNotes == ""){
        for (let indexNote = 0; indexNote < localNotes.notes.length; indexNote++) {
            contentRef.innerHTML += getNoteTemplate(indexNote);
        }
    }else{
        for (let indexNote = 0; indexNote < localStorageNotes.storageNotes.length; indexNote++) {
            contentRef.innerHTML += getStorageNoteTemplate(indexNote);
        }
    }
    
}

function renderArchivNotes(){
    let archivContentRef = document.getElementById('archiv_content');
    archivContentRef.innerHTML = "";

    if(localStorageNotes.storageNotes == "" && localStorageNotes.storageArchivNotes == "" && localStorageNotes.storageTrashNotes == ""){
        for (let indexArchivNote = 0; indexArchivNote < localNotes.archivNotes.length; indexArchivNote++) {
            archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
        }
    }else{
        for (let indexArchivNote = 0; indexArchivNote < localStorageNotes.storageArchivNotes.length; indexArchivNote++) {
            archivContentRef.innerHTML += getStorageArchivNoteTemplate(indexArchivNote);
        }
    }

}

function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    if(localStorageNotes.storageNotes == "" && localStorageNotes.storageArchivNotes == "" && localStorageNotes.storageTrashNotes == ""){
        for (let indexTrashNote = 0; indexTrashNote < localNotes.trashNotes.length; indexTrashNote++) {
            trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
        }
    }else{
        for (let indexTrashNote = 0; indexTrashNote < localStorageNotes.storageTrashNotes.length; indexTrashNote++) {
            trashContentRef.innerHTML += getStorageTrashNoteTemplate(indexTrashNote);
        }
    }
}

function addNote(){
    let noteInputTitleRef = document.getElementById('note_input_title');
    let noteInputTitle = noteInputTitleRef.value;
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    if(noteInput !== "" && noteInputTitle !== ""){
        localStorageNotes.storageNotesTitles.push(noteInputTitle);
        localStorageNotes.storageNotes.push(noteInput);
    }else{
        alert("Bitte fülle die Felder aus!")
        return
        }
        saveToLocalStorage();
        init();

        noteInputTitleRef.value = "";
        noteInputRef.value = "";
}

function saveToLocalStorage(){
    localStorage.setItem("notesStorage", JSON.stringify(localStorageNotes.storageNotes));
    localStorage.setItem("notesTitlesStorage", JSON.stringify(localStorageNotes.storageNotesTitles));
    localStorage.setItem("archivNotesStorage", JSON.stringify(localStorageNotes.storageArchivNotes));
    localStorage.setItem("archivNotesTitlesStorage", JSON.stringify(localStorageNotes.storageArchivNotesTitles));
    localStorage.setItem("trashNotesStorage", JSON.stringify(localStorageNotes.storageTrashNotes));
    localStorage.setItem("trashNotesTitlesStorage", JSON.stringify(localStorageNotes.storageTrashNotesTitles));
}

function getFromLocalStorage(){
    let notesInStorage = JSON.parse(localStorage.getItem("notesStorage"));
    let notesTitlesInStorage = JSON.parse(localStorage.getItem("notesTitlesStorage"));
    let archivNotesInStorage = JSON.parse(localStorage.getItem("archivNotesStorage"));
    let archivNotesTitlesInStorage = JSON.parse(localStorage.getItem("archivNotesTitlesStorage"));
    let trashNotesInStorage = JSON.parse(localStorage.getItem("trashNotesStorage"));
    let trashNotesTitlesInStorage = JSON.parse(localStorage.getItem("trashNotesTitlesStorage"));

    if(notesInStorage !== null || archivNotesInStorage !== null || trashNotesInStorage !== null){
        localStorageNotes.storageNotes = notesInStorage;
        localStorageNotes.storageNotesTitles = notesTitlesInStorage;
        localStorageNotes.storageArchivNotes = archivNotesInStorage;
        localStorageNotes.storageArchivNotesTitles = archivNotesTitlesInStorage;
        localStorageNotes.storageTrashNotes = trashNotesInStorage;
        localStorageNotes.storageTrashNotesTitles = trashNotesTitlesInStorage;
    }
}

function moveNote(indexNote, startKey, destinationKey){
    let note = localNotes[startKey].splice(indexNote, 1);
    localNotes[destinationKey].push(note[0]);
    let noteTitle = localNotes[startKey + "Titles"].splice(indexNote, 1);
    localNotes[destinationKey + "Titles"].push(noteTitle[0]);
    renderAllNotes()
}

function moveStorageNote(indexNote, startKey, destinationKey){
    let note = localStorageNotes[startKey].splice(indexNote, 1);
    localStorageNotes[destinationKey].push(note[0]);
    let noteTitle = localStorageNotes[startKey + "Titles"].splice(indexNote, 1);
    localStorageNotes[destinationKey + "Titles"].push(noteTitle[0]);
    renderAllNotes()
    saveToLocalStorage();
}

function deleteNote(indexNote){
    localNotes.trashNotes.splice(indexNote, 1);
    localNotes.trashNotesTitles.splice(indexNote, 1);
    renderAllNotes();
}

function deleteNoteStorage(indexNote){
    localStorageNotes.storageTrashNotes.splice(indexNote, 1);
    localStorageNotes.storageTrashNotesTitles.splice(indexNote, 1);
    saveToLocalStorage();
    renderAllNotes();
}