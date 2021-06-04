let gallery = [];
let size = 1;
$(document).ready(function (){

    $("#getGallery").click(function (){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/photos",
            type: "GET",
            success: function (data){
                gallery = data;
                // for(let d of data){
                //     if(d.id > 100) break;
                //     document.getElementById("div").innerHTML+= `<li>${d.title}<br><img src="${d.url}" alt=""></li>`;
                // }
            },
            error: function (error){
                // alert("ERROR!");
                const status = error.status;
                isError(status);
                // window.href = "/404.html";
            } ,
            beforeSend: function (){
                $("#getGallery").attr("disabled","disabled");
                $("#getGallery > span").toggleClass("d-none");
            },
            complete: function (){
                $("#getGallery").removeAttr("disabled");
                $("#getGallery > span").toggleClass("d-none");
            },
            async: false,
            data: {albumId: size},
        });
        for(let d of gallery){
            document.getElementById("div").innerHTML += `
                
                <div class="col-md-3">
                    <h1>${d.albumId}</h1>
                    <img src="${d.url}" class="img-fluid" alt="">
                    <p>${d.title}</p>
                </div>
            `
        }
        size++;
    });

    // function isError(status){
    //     if(status === 404 ){
    //         location.href = "https://kun.uz/404"
    //     }else if(status === 401){
    //         location.href = "https://pdp.uz/login"
    //     }
    // }
});

// const REQ = {
//     user: function (test){
//         console.log(test);
//     }
// }

async function abc(){

}
function cdb(){

}