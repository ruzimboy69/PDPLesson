let sonlar = [];

function addNumber(){
    const son = document.getElementById("son").value;
    if(sonlar.length){

        let sonBorMi = false;

        for(let s of sonlar){

            if(son == s){// 22 == 15; 22 == 75
               sonBorMi = true;
               break;
            }

        }
        if(sonBorMi){
            alert("Bunday son mavjud!");
        }else{
            sonlar.push(son);
            document.getElementById("display").innerText = sonlar.join(",");
        }
    }else{
        sonlar.push(son);
        document.getElementById("display").innerText = sonlar.join(",");
    }
    document.getElementById("son").value = "";
}

// let a = 0;
// const clock = setInterval( function (){
//     a++;
//     console.log(`${a} sekund umring o'tdi!`);
//
//     if(a >= 10){
//         clearInterval(clock);
//     }
//
// },  1000 );

// const getAlert = setTimeout(function (){
//
//     alert("Reklama!");
//
// }, 5000);
/////////////////////////////////////
let soat = 0;
let minut = 0;
let sekund = 0;
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

let alarmHH = 0;
let alarmSS = 0;
let alarmMM = 0;
let isAlarm = false;

const sekundomer = setInterval(function (){
    sekund++;
    ss.style.transform = `rotate(${sekund * 6}deg)`;
    // mm.style.transform = `rotate(${(sekund / 60 ) * 6}deg)`;
    // hh.style.transform = `rotate(${(sekund / 3600 ) * 30}deg)`;

    if(sekund >= 59){
        sekund = 0;
        minut++;
        mm.style.transform = `rotate(${minut * 6}deg)`;
    }
    if(minut >= 59){
        minut = 0;
        soat++;
        hh.style.transform = `rotate(${soat * 30}deg)`;
    }
    if(soat >= 11){
        soat = 0;
    }
    if(sekund == alarmSS && minut == alarmMM && soat == alarmHH && isAlarm){
        document.getElementById("alarm").play();
    }
}, 1000);

const addAlarm = function (){
    alarmHH = document.getElementById("alarmHH").value;
    alarmSS = document.getElementById("alarmSS").value;
    alarmMM = document.getElementById("alarmMM").value;
    isAlarm = true;
}
const clearAlarm = function (){
    isAlarm = false;
    document.getElementById("alarm").pause();
    document.getElementById("alarm").currentTime = 0;
}
const delayAlarm = function (){
    alarmSS = parseInt(alarmSS) + 10;
    document.getElementById("alarm").pause();
    document.getElementById("alarm").currentTime = 0;
}