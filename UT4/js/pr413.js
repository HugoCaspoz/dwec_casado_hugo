let btn = document.getElementById("add-button");
let todos = document.getElementById("todos");
let textTodo = document.getElementById("input-text");

let id  = 0;
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (textTodo.value.trim() != "") {
        let ul = document.querySelector('ul');
        let li = document.createElement("li");

        li.textContent = textTodo.value.trim();
        li.dataset.id = id;
       
        let borrar = document.createElement("btn");
        borrar.classList.add("btn");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click" , (e) => {
            e.preventDefault();
            li.remove();
        })

        let tachar = document.createElement("btn");
        tachar.classList.add("tachar");
        tachar.textContent = "X";
        tachar.addEventListener("click" , (e) => {
            e.preventDefault();
            li.classList.toggle("tachartext");
        })
        ul.appendChild(li);
        li.appendChild(borrar)
        li.prepend(tachar)

       
    }
    textTodo.value = "";
    id++
});