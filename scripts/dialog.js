function dialogAddNote(){
    let overlayRef = document.getElementById('overlay_add_note');
    overlayRef.classList.remove('d_none');
    overlayRef.innerHTML = "";
    overlayRef.innerHTML += getDialogAddNoteTemplate();
}

function dialogTrash() {
    let overlayRef = document.getElementById('overlay_show_trash');
    overlayRef.classList.remove('d_none');
    // overlayRef.innerHTML = "";
    // overlayRef.innerHTML += getDialogTrashTemplate();
}

function closeOverlay(){
    let overlayRef = document.getElementById('overlay_add_note');
    overlayRef.classList.add('d_none');
    let overlayTrash = document.getElementById('overlay_show_trash');
    overlayTrash.classList.add('d_none');
}

function BubblingProtection(event){
    event.stopPropagation();
}