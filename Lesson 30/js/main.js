function calc(){

    const son_a = document.getElementById("a").value;
    const son_b = document.getElementById("b").value;
    const oper = document.getElementById("select").value;
    let result = 0;

    switch (oper){
        case "*":
            result = parseFloat(son_a) * parseFloat(son_b);
            break;
        case "/":
            result = parseFloat(son_a) / parseFloat(son_b);
            break;
        case "+":
            result = parseFloat(son_a) + parseFloat(son_b);
            break;
        case "-":
            result = parseFloat(son_a) - parseFloat(son_b);
            break;
        default:
            alert("Amallarni birini tanlang!");
    }
    document.getElementById("result").innerText = oper !== "" ? result : "";
}

const iAgger = function (){

    const checkbox = document.getElementById("switch").checked;
    document.getElementById("save_button").classList.toggle("disabled");

    if( checkbox ){
        document.getElementById("save_button").removeAttribute("disabled");
    }else{
        document.getElementById("save_button").setAttribute("disabled","disabled");
    }

}

function count(){
    const text = document.getElementById("text").value;
    const jami_soz = text.split(" ");

    const qogani = 4 - jami_soz.length;
    document.getElementById("all").innerText = qogani;
    document.getElementById("real").innerText = jami_soz.length;
    console.log(jami_soz);
    if(qogani + 1 <= 0){
        document.getElementById("text").setAttribute("maxLength", text.length)
    }else{
        document.getElementById("text").removeAttribute("maxLength")
    }
}