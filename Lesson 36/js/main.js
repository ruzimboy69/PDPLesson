let todo = [];
$("#getTodo").click(function (){

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        beforeSend: function (){
            $("#getTodo span").toggleClass("d-none");
            $("#getTodo").attr("disabled","disabled");
        },
        success: function (data){
            todo = data;
        },
        error: err => {
            const status = err.status;
            if(status === 404){
                location.href = "https://kun.uz/404";
            }
            console.log(err);
        },
        complete: function (){
            $("#getTodo span").toggleClass("d-none");
            $("#getTodo").removeAttr("disabled");
        },
        async: false,
    });
    draw();
});
function draw(){
    let div = '';
    let a = 0, b = 0;
    for(let list of todo){
        list.completed ? a++ : b++;
        div += `<div class="card-body text-white ${list.completed ? "bg-success": "bg-danger"}">
                   <input type="checkbox" onchange="changeStatus(${list.id})" ${list.completed && "checked"}> ${list.title} 
                </div>`;
    }
    const completed = (a / todo.length) * 100;
    const unCompleted = (b / todo.length) * 100;
    $("#completed").css("width",`${completed.toFixed(1)}%`).text(completed.toFixed(1)+"%");
    $("#unCompleted").css("width",`${unCompleted.toFixed(1)}%`).text(unCompleted.toFixed(1)+"%");
    $(".card").html(div);
};
function changeStatus(id){
    for(let index in todo){
        if(todo[index].id === id){
            todo[index].completed = !todo[index].completed;
        }
    }
    draw();
};