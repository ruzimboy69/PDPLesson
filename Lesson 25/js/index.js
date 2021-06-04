let a = 0;
    a++; // increment
    a-- // decrement

    a = a + 2;
    a += 2;
    a *= 2;
    a /= a * 2 + a;// a = a / a * 2 + a;

//=================================
// true => true, 1, a = 5
// false => false, 0, undefined, null, NaN, c = ?;

let g = true;
let c;
let b = a;
let r_one = Math.random() * 10;
let r_two = Math.random() * 10;
    r_one = parseInt(r_one);
    r_two = parseInt(r_two);
let is_user = false;

console.log( "A:" + r_one, "B:" + r_two , !is_user ); // one > two; 5 >= 8;

//====================================
// if - else , switch, ternaty

// if(r_one > r_two){
//     document.write("R one: " + r_one + " soni " + r_two + " sonidan katta!");
// }
// else if(r_one < r_two){
//     document.write("R one: " + r_one + " soni " + r_two + " sonidan kichik!");
// }
// else{
//     document.write("R one: " + r_one + " soni " + r_two + " sonlari o'zaro teng!");
// }

let r = parseInt(Math.random() * 100);

if( r > 0 && r < 20 ) {// r > 0 ~ r < 10
    console.log( `Siz tanlagan son ${r} siz tanlagan oraliqda!`);
}else{
    console.log( `Siz tanlagan son ${r} siz tanlagan oraliqda emas!`); // " String ", ' String '
}

if( r > 5 ) console.log(`${r} soni 5 dan katta!`);