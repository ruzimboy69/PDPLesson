var num_a = 0;
var num_b = 0;
var oper = '';


function raqam(son) {
    var qiymat = document.getElementById('input').value;
    if (qiymat == '0') {
        document.getElementById('input').value = ''
    }
    document.getElementById('input').value += son;
}

function amal(nishon) {
    oper=nishon;
    num_a=document.getElementById('input').value;
    document.getElementById('input').value=''
}

function natija() {
    num_b=document.getElementById('input').value;
    result=0;
    if (oper==='+'){
        result=parseFloat(num_a)+parseFloat(num_b);
    }
    else if (oper==='-'){
        result=num_a-num_b;
    }
    else if (oper==='*'){
        result=num_a*num_b;
    }
    else{
        result=num_a/num_b;
    }

    document.getElementById('input').value=result

}
function tozalash() {
    document.getElementById('input').value='0';
}