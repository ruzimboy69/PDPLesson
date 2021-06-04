let r = Math.random() * 100;
    r = parseInt(r);
// r = 0;
document.write(r);
switch (r) {
    case 0:
        document.write("Nol");
        break;
    case 1:
        document.write("Bir");
        break;
    case 2:
        document.write("Ikki");
        break;
    //==========
    default:
        document.write("Siz tanlagan son mavjud emas!");
}
//================================
console.log(    r > 5 ? "Son 5 dan katta!" : "Son 5 dan kichik!" );

const r_new = r <= 10 ? 10 : r;// <= ternary
console.log(r_new);

// let r_n = 10;
// if(r > 10){
//     r_n = r;
// }
//===============================

let a = 0, b = 1, c = 2;
const j = 1, n = 8;

let sonlar = [15, 25, 86, 98, 12, 11, 88, 84];
console.log( Math.pow( sonlar[6], 2 ));

let car = ["Cobalt", 4500, "red", true];

console.log( `Avto nomi: ${car[0]}, avto narxi: ${car[1]}, Holati: ${car[3] ? "Bor" : "Yo'q"}` );

let cars = [
    ["Cobalt", 4500, "red", true],
    ["Nexia", 3500, "black", false],
    ["Damas", 5875, "white", true]
];

// let cobalt = cars[0];
// let nexia = cars[1];
// let damas = cars[2];

let son = [25,65,86,96];
// const [m,k,l] = son;


const [kk, ww, hh] = cars; // const kk = cars[0], ww = cars[1], hh = cars[2];
const [c_name, c_price, c_color] = kk;
// console.log( c_name, c_price, c_color );

son.shift();// array boshidan o'chirish;
son.pop(); // array oxiridan o'chirish;

son.push(100);// array ichiga oxiridan qo'shish;
son.unshift(45);// array ichiga boshidan qo'shish;

const son_new_array = [100,25,86,9,58,87];

son_new_array.splice(0, 0,99);
let str_array = son_new_array.join(" | ");
// str_array.split();
let soz = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos dolorum esse inventore, molestiae obcaecati qui quidem similique? Alias aperiam, debitis excepturi laborum necessitatibus numquam praesentium quae sit tempora voluptates?"

console.log( str_array );

