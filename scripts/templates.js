function getNoteTemplate(indexNote){
    return /*html*/`
    <div class="note">
        <h3>${localNotes.notesTitles[indexNote]}</h3>
        <p>${localNotes.notes[indexNote]}</p>
        <div>
            <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="btn">X</button>
            <button onclick="moveNote(${indexNote}, 'notes', 'archivNotes')" class="btn">A</button>
        </div>
    </div>
    `;
}

function getStorageNoteTemplate(indexNote){
    return /*html*/`
    <div class="note">
        <h3>${localStorageNotes.storageNotesTitles[indexNote]}</h3>
        <p>${localStorageNotes.storageNotes[indexNote]}</p>
        <div>
            <button onclick="moveStorageNote(${indexNote}, 'storageNotes', 'storageTrashNotes')" class="btn">X</button>
            <button onclick="moveStorageNote(${indexNote}, 'storageNotes', 'storageArchivNotes')" class="btn">A</button>
        </div>
    </div>
    `;
}

function getArchivNoteTemplate(indexArchivNote){
    return /*html*/`
    <div class="note">
        <h3>${localNotes.archivNotesTitles[indexArchivNote]}</h3>
        <p>${localNotes.archivNotes[indexArchivNote]}</p>
        <div>
            <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'trashNotes')" class="btn">X</button>
            <button onclick="moveNote(${indexArchivNote}, 'archivNotes', 'notes')" class="btn">N</button>
        </div>
    </div>
    `;
}

function getStorageArchivNoteTemplate(indexArchivNote){
    return /*html*/`
    <div class="note">
        <h3>${localStorageNotes.storageArchivNotesTitles[indexArchivNote]}</h3>
        <p>${localStorageNotes.storageArchivNotes[indexArchivNote]}</p>
        <div>
            <button onclick="moveStorageNote(${indexArchivNote}, 'storageArchivNotes', 'storageTrashNotes')" class="btn">X</button>
            <button onclick="moveStorageNote(${indexArchivNote}, 'storageArchivNotes', 'storageNotes')" class="btn">N</button>
        </div>
    </div>
    `;
}

function getTrashNoteTemplate(indexTrashNote){
    return /*html*/`
    <div class="note">
        <h3>${localNotes.trashNotesTitles[indexTrashNote]}</h3>
        <p>${localNotes.trashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
            <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'archivNotes')" class="btn">A</button>
        </div>
    </div>
    `;
}

function getStorageTrashNoteTemplate(indexTrashNote){
    return /*html*/`
    <div class="note">
        <h3>${localStorageNotes.storageTrashNotesTitles[indexTrashNote]}</h3>
        <p>${localStorageNotes.storageTrashNotes[indexTrashNote]}</p>
        <div>
            <button onclick="deleteNoteStorage(${indexTrashNote})" class="btn">X</button>
            <button onclick="moveStorageNote(${indexTrashNote}, 'storageTrashNotes', 'storageArchivNotes')" class="btn">A</button>
        </div>
    </div>
    `;
}

function getDialogAddNoteTemplate(){
    return /*html*/`
        <div class="inputbox" onclick="BubblingProtection(event)">
                <h3>Notiz hinzufügen</h3>
                <form class="input_form">
                    <p>Titel der Notiz</p>
                    <input name="title" type="text" id="note_input_title">
                    <p>Deine Nachricht</p>
                    <input name="text" type="text" id="note_input">
                    <button onclick="addNote()">Speichern</button>
                </form>
            </div>`;
}

// function getDialogTrashTemplate() {
//     return /*html*/`
//     <div class="inputbox">
//         <h2>trash</h2>
//         <div id="trash_content" class="notebox"></div>
//     </div>
//     `;
// }