var mode = document.querySelectorAll(".mode");
var myPad = document.querySelector("#mypad");
var todo = document.querySelector("#todolist");
todo.style.display="none";
for (i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        for (i = 0; i < mode.length; i++) {
            mode[i].classList.remove("active")
        }
        bd.style.overflow = "";
        this.classList.add("active");
        var mode_app = this.children[1].innerHTML;
        if (mode_app == "To-Do") {
            myPad.style.display = "none";
            todo.style.display = "";
        }
        else {
            todo.style.display = "none";
            myPad.style.display = "";
        }
    })
}







// Notepad
var notes = [
    {
        heading: "Heading of the note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio fugit eum officiis incidunt quos blanditiis commodi. Laborum eum possimus nesciunt recusandae eveniet. Tenetur dolor saepe nihil assumenda, praesentium temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum soluta repudiandae nisi eligendi vel accusantium qui sunt ducimus, saepe, magni iure error dolorum nihil molestiae, adipisci provident debitis. Iste.",
        author: "Jass",
        date: "29/3/2021"
    },
    {
        heading: "Head of the note",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio fugit eum officiis incidunt quos blanditiis commodi. Laborum eum possimus nesciunt recusandae eveniet. Tenetur dolor saepe nihil assumenda, praesentium temporibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum soluta repudiandae nisi eligendi vel accusantium qui sunt ducimus, saepe, magni iure error dolorum nihil molestiae, adipisci provident debitis. Iste.",
        author: "Jasjot Singh Arora",
        date: "29/3/2021"
    }
];
var bd = document.getElementsByTagName("body")[0];
function init_pad() {
    var notepad = document.querySelector(".notepad");
    notepad.innerHTML = "<div class='note add-note'><div class='add-bg'><i class='far fa-plus-square'></i><h1>Add New Note</h1> </div><div class='header'><div class='heading'>Heading of the note</div><div class='icons'><i class='far fa-edit edit-btn'></i><i class='fas fa-trash delete-btn'></i></div></div><div class='body'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, distinctio fugit eum officiis incidunt quos blanditiis commodi. Laborum eum possimus nesciunt recusandae eveniet. Tenetur dolor saepe nihil assumenda, praesentium temporibus?</p></div><div class='footer'><div class='author'>Created by : <span>Jasjot singh</span></div><div class='date'>29/03/2021</div></div></div>";
    for (var i = 0; i < notes.length; i++) {
        notepad.innerHTML += "<div class='note'><div class='header'><div class='heading'>" + notes[i].heading + "</div><div class='icons'><i class='far fa-edit edit-btn'></i><i class='fas fa-trash delete-btn'></i></div></div><div class='body'><p>" + notes[i].body + "</p></div><div class='footer'><div class='author'>Created by : <span>" + notes[i].author + "</span></div><div class='date'>" + notes[i].date + "</div></div></div>";
    }
    run_pad();
}
function run_pad() {
    var edit_btn = document.querySelectorAll(".edit-btn");
    var edit_mode = document.querySelector(".edit-mode");
    var delete_btn = document.querySelectorAll(".delete-btn");
    var delete_mode = document.querySelector(".delete-mode");
    var exit_btn = document.querySelectorAll(".exit-btn");
    var add_mode = document.querySelector(".add-mode");
    var add_btn = document.querySelector(".add-bg");
    for (var i = 0; i < edit_btn.length; i++) {
        edit_btn[i].addEventListener("click", function () {
            var j = 0;
            edit_mode.style.display = "flex";
            bd.style.overflow = "hidden";
            var heading = this.parentElement.previousElementSibling.innerHTML;
            for (j = 0; j < notes.length; j++) {
                if (notes[j].heading === heading) {
                    edit(j);
                }
            }
        })
        delete_btn[i].addEventListener("click", function () {
            delete_mode.style.display = "flex";
            bd.style.overflow = "hidden";
            var heading = this.parentElement.previousElementSibling.innerHTML;
            for (j = 0; j < notes.length; j++) {
                if (notes[j].heading === heading) {
                    dlt(j);
                }
            }
        })
    }
    add_btn.addEventListener("click", function () {
        add_mode.style.display = "flex";
        bd.style.overflow = "hidden";
        var x = notes.length;
        add(x);
    })
    for (var i = 0; i < exit_btn.length; i++) {
        exit_btn[i].addEventListener("click", function () {
            edit_mode.style.display = "none";
            delete_mode.style.display = "none";
            add_mode.style.display = "none";
            bd.style.overflow = "";
        })
    }

    function edit(n) {
        var edit_form = document.querySelector(".edit-form").children[1];
        edit_form.children[0].value = notes[n].heading;
        edit_form.children[1].value = notes[n].body;
        edit_form.children[2].value = notes[n].author;
        crnt = n;
        edit_form.children[3].addEventListener("click", function (e) {
            e.preventDefault();
            notes[crnt].heading = edit_form.children[0].value;
            notes[crnt].body = edit_form.children[1].value;
            notes[crnt].author = edit_form.children[2].value;
            init_pad();
            edit_mode.style.display = "none";
            bd.style.overflow = "";
        })
    }
    function dlt(n) {
        var delete_form = document.querySelector(".delete-form").children[2];
        delete_form.children[0].addEventListener("click", function (e) {
            e.preventDefault();
            notes.splice(n, 1);
            init_pad();
            delete_mode.style.display = "none";
            bd.style.overflow = "";
        })
    }
    function add(n) {
        var add_form = document.querySelector(".add-form").children[1];
        add_form.children[3].addEventListener("click", function (e) {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            date = date.getDate();
            date = date + "/" + month + "/" + year;
            notes[n] = {
                heading: "",
                body: "",
                author: "",
                date: date
            }
            e.preventDefault();
            notes[n].heading = add_form.children[0].value;
            notes[n].body = add_form.children[1].value;
            notes[n].author = add_form.children[2].value;
            init_pad();
            add_mode.style.display = "none";
            bd.style.overflow = "";
        })
    }
}

init_pad();


//Todo list
var list = document.querySelector(".list");
var task = document.querySelectorAll(".data");
var add_task = document.querySelector(".add-btn");
document.querySelector(".todo-form").style.height = "0px";
add_task.addEventListener("click", function () {
    if (document.querySelector(".todo-form").style.height == "0px"){
        document.querySelector(".todo-form").style.height = "50px";
        document.querySelector(".todo-form").children[0].value = "";
    }
    else {
        document.querySelector(".todo-form").style.height = "0px";
    }
})
document.querySelector(".todo-form").children[1].addEventListener("click", function () {
    if (document.querySelector(".todo-form").children[0].value != "") {
        var node = document.createElement("div");
        node.classList.add("data");
        var textnode = document.createTextNode(document.querySelector(".todo-form").children[0].value);
        var node2 = document.createElement("div");
        node2.classList.add("list-icon", "dlt-icon");
        var node3 = document.createElement("i");
        node3.classList.add("fas", "fa-trash");
        node2.appendChild(node3);
        node.appendChild(textnode);
        node.appendChild(node2);
        list.appendChild(node);
        task = document.querySelectorAll(".data");
        for (var i = 0; i < task.length; i++) {
            task[i].onclick = function () {
                this.classList.toggle("completed");
            }
            task[i].children[0].onclick = function(){
                list.removeChild(this.parentElement);
                task = document.querySelectorAll(".data");
            }
        }
        document.querySelector(".todo-form").style.height = "0px";
        document.querySelector(".todo-form").style.borderColor = "black";     
        document.querySelector(".todo-form").style.borderWidth = "2px";
        document.querySelector(".todo-form").children[0].placeholder = "Add a new Task";
    }
    else
    {
        document.querySelector(".todo-form").style.borderColor = "Red";     
        document.querySelector(".todo-form").style.borderWidth = "5px"; 
        document.querySelector(".todo-form").children[0].placeholder = "Please Input the task !";
    }
})
for (var i = 0; i < task.length; i++) {
    task[i].onclick = function () {
        this.classList.toggle("completed");
    }
    task[i].children[0].onclick = function(){
        list.removeChild(this.parentElement);
        task = document.querySelectorAll(".data");
    }
}