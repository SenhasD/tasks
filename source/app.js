let noteRef = 1;

function fetch() {
    let newTask = document.getElementById("data").value;
    localStorage.setItem("Tasks", newTask);
    alert("New Todo Added");
    let data = localStorage.getItem("Tasks");
    document.getElementById('default').textContent = "";
    let container = document.querySelector(".update");
    let AppendNote = document.createElement('p');
    let noteID = noteRef++;
    AppendNote.id = noteID;
    AppendNote.textContent = data + " | Note ID: " + noteID;
    container.appendChild(AppendNote);
};

function delNote() {
    let id = prompt("Enter the note ID: ");
    let removeNote = document.getElementById(id);
    if (removeNote) {
        removeNote.remove();
    } else {
        alert("Note does not exist")
    };
};