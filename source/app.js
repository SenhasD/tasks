function fetch() {
    let newTask = document.getElementById("data").value;
    localStorage.setItem("Tasks", newTask);
    alert("New Todo Added");
    let data = localStorage.getItem("Tasks");
    document.getElementById('default').textContent = "";
    let container = document.querySelector(".update");
    let AppendNote = document.createElement('p');
    AppendNote.textContent = data;
    container.appendChild(AppendNote);
};