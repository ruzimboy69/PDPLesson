// const $ = function (selector){
//
//     let e = null;
//     // let type = selector.indexOf();
//     let type = selector[0];
//     let id = selector.substring(1, selector.length);
//     if( type === "#" ){
//         e = document.getElementById(id);
//     }else if(type === "."){
//         e = document.getElementsByClassName(id);
//     }else{
//         e = document.getElementsByTagName(selector);
//     }
//     return e;
// }
const element = $("#test");
// string, number, object, function, boolean

$(".nav-link:not(.active)").click( function (){

    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    // $(this).toggleClass("bg-dark d-none");
});

$(".btn").click(function (){

    $(".btn  > span ").toggleClass("d-none");
    $(this).attr("disabled","disabled");

    const y = $(this).attr("data-toggle");
    const interval = setTimeout(
        ()=>{
            $(".btn > span").toggleClass("d-none");
            $(this).removeAttr("disabled");
        }
    , 5000);
});

















const test = function (){

}
function te(){

}
const look = (a, b, ...c)=>{
    //...
}
// const r = (son)=> son - Math.random(); // 15 5; => 10
const r = son => son - Math.random(); // 15 5; => 10

let masalan = function (son) {
    return son - Math.random();
}

const e = r(15)
console.log(e);


