body{
    font-family: Arial;
    text-align: center;
    background-color: #f4f4f4;
}

h1{
    color: #333;
}

input{
    padding:10px;
    width:200px;
}

button{
    padding:10px;
    background:blue;
    color:white;
    border:none;
}

li{
    margin:10px;
    list-style:none;
}
function addTask(){
    let input = document.getElementById("taskInput").value;

    if(input === "") return;

    let list = document.getElementById("taskList");

    let li = document.createElement("li");
    li.textContent = input;

    list.appendChild(li);

    document.getElementById("taskInput").value = "";
}
