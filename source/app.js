let noteRef = 1;
if (localStorage.getItem("Tasks") !== null) {
    console.log("Recently used tasks:");
    console.log(localStorage.getItem("Tasks"));
    console.log(localStorage.getItem("ID"));
} else {
    console.log("No recent data found");
};

function fetch() {
    let newTask = document.getElementById("data").value;
    let data = localStorage.getItem("Tasks");
    document.getElementById('default').textContent = "";
    let container = document.querySelector(".update");
    let AppendNote = document.createElement('p');
    let noteID = noteRef++;
    localStorage.setItem("Tasks", newTask);
    localStorage.setItem("ID", noteID);
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

function deleteRecent() {
    localStorage.clear();
    console.log("Local browser storage cleared");
};

function restoreTask() {
    let container = document.querySelector(".update");
    let AppendNote = document.createElement('p');
    let data = localStorage.getItem("Tasks");
    let noteID = localStorage.getItem("ID");
    if (data !== null) {
        AppendNote.textContent = data + " | Note ID: " + noteID;
        container.appendChild(AppendNote);
    } else {
        alert("No recent note found");
    };
};