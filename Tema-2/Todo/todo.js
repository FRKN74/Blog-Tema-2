let addTodoButton =document.getElementById("addTodo");
let clearTodoButton =document.getElementById("clearTodo");
let inputText = document.getElementById("inputText");
let todoContainer = document.getElementById("todoContainer");


addTodoButton.addEventListener("click",function () {
    
    // yeni element (p) oluşturuldu
    var pharagraf = document.createElement("p");

    pharagraf.classList.add("paragraf-styling");



    // oluşturulan p elementini "todoContainer" içerisine gönderdi
    todoContainer.appendChild(pharagraf);
    if(inputText.value == "")
    alert("Lütfen görev giriniz.");

    pharagraf.innerHTML = inputText.value;
    inputText.value ="";

    pharagraf.addEventListener("click",function () {
        pharagraf.style.textDecoration = 'line-through';
    });

    pharagraf.addEventListener("dblclick",function () {
        todoContainer.removeChild(pharagraf);
    });
    
    clearTodoButton.addEventListener("click",function () { 

        todoContainer.remove();
    })

})