// Loops: for, while, do while;
let summa = 0;
let kup = 1;

for(let i = 0; i <= 5 ; i++){ // 0
    // bajarilishi kerak bo'lgan ish
    // summa = summa + (i % 2 === 0 ? i : 0);
    // kup = kup * (i % 2 !==0 ? i : 1);

    if(i % 2 === 0){
       summa += i;
    }else{
        kup *= i;
    }
}
// console.log(summa, "======", kup);
const r = parseInt(Math.random() * 1000);
let count = 0;

for(let l = 1; l <= r; l++){
    if( l % 8 === 0 ){ // 8 % 8 === 0; 72 % 8 === 0
        count++;
    }
    // count = parseInt(r / 8);
}
let a = "Assalomu Alaykum!";
let suz = 0;
for(let i = 0; i <= a.length; i++ ){
    if(  a[i] === "a" || a[i] === "A"){
        suz++;
    }
}

let cars = ["Cobalt", "Malibu", "Nexia", "Matiz", "Lacetti"];

for(let i = 0; i < cars.length; i++){
    // console.log( cars[i] ); // cars[2]
}

for(let item of cars){
    console.log(item);
    if(item === "Malibu") break;
}
for(let item in cars){
    console.log(cars[item]);
    if(cars[item] === "Malibu") break;
}

let k = 16;
while ( k <= 15){
    //
    console.log(`${k} ta idish yuvildi!`);
    k++;
}
let i = 16;
do{
    console.log(`${i} ta idish yuvildi! Bu do while!`);
    i++;
}while (i <= 15);

let randomSon = parseInt(Math.random()*100);// 2
let logins = [75,58,69,35,2,7,89,52,14,36];
let is_number = "no";

for(let y of logins){ // y = 75
    if(randomSon === y){ // 2 !== 75
        //
        is_number = "yes";
    }
}
if(is_number === "no"){
    logins.push(randomSon);
}
console.log(logins, randomSon);

