$(function () {
        $("#label2").click(function () {
            $("#showcard").slideUp(1500);
        });
        $("#label2").dblclick(function () {
            $("#showcard").slideDown(1500);
        });

});

/* VKİ */ 

// VKİ: vuvut Kitle indeksi
//kilo
//boy
//vki

// 18.5 ve altı Düşük Kilolu
// 18.5 - 24.9 Normal Kilolu
// 25-29.9 Fazla Kilolu
// 30-40 Obez
// 40 ve üstü Aşırı Obez
$(function(){
    $("#sonuc").hide();

    $("#vkibtn").click(function () {

        let kilo = Number($("#kilo").val());
        let boy = Number($("#boy").val())/100;

        let vki = kilo / Math.pow(boy,2);

        let yuvarla = Math.round(vki);

        //sonuc
        $("#sonuc").show();
        $("#sonuc").html("Sonuç: "+vki);
        if(yuvarla < 18 ){
            $("#sonuc2").html("<i><b> Düşük Kilolu </b></i> ");
        }else if(18 <= yuvarla && yuvarla <24){
            $("#sonuc2").html("<i><b> Normal Kilolu <b><i>");
        }else if(24 <= yuvarla && yuvarla <29){
            $("#sonuc2").html("<i><b> Fazla Kilolu <b><i>");
        }else if(29 <= yuvarla && yuvarla <40){
            $("#sonuc2").html("<i><b> Obez Kilolu <b><i>");
        }else if(yuvarla >=40){
            $("#sonuc2").html("<i><b> Aşırı Obez Kilolu <b><i>");
        }
    })
});


/* Todo list */

let addTodoButton = document.getElementById("addTodo");
let clearTodoButton = document.getElementById("clearTodo");
let clearLineTodo = document.getElementById("clearLineTodo");
let inputText = document.getElementById("inputText");
let todoContainer = document.getElementById("todoContainer");


let order = 0;


addTodoButton.addEventListener("click",function () {
    
    let li = document.createElement("li");
    let veri = inputText.value;
    li.classList.add("todoList");



    if(veri == ""){
        alert("Lütfen görev giriniz.");
    }else{
        todoContainer.appendChild(li);
        order++;
        li.innerHTML = `<label id="content">${veri}</label>`;
        inputText.value ="";
        
    }

    var s = 0;
    $(li).on("click",function () { 

        $(li).css("color","green");

        s++
        if(s == 1)
        {
            $(li).html(li.innerHTML + " (görev yapıldı)");
        }else{
            return;
        }
        

    })

    $(li).on("dblclick",function () { 
        
            todoContainer.removeChild(li);
    });
});
/*
li.addEventListener("dblclick",function(){
    
    todoContainer.removeChild(li);

});
*/
/*
function deleteLine(){
    clearLineTodo.addEventListener("click",function(){
        todoContainer.removeChild(li);
    });
}
*/


/*
function cbControl() {
    if(cb.checked == true){
        li.classList.add("todoListChecked");
    }else{
        li.classList.add("todoList");
    }
}
*/

clearTodoButton.addEventListener("click",function () {
    todoContainer.remove();
});





/*
    li.addEventListener("click",function () {
        
        li.classList.add("todoListFinished");
    });
    li.addEventListener("dblclick",function () {
        todoContainer.removeChild(li);
    });
*/


