const car = {
    car_name: "Cobalt",
    color: "red",
    price: 4580,
    poz: [1,2,3],
    is_have: true,
    last_name: "Palonchiev",
    first_name: "Palonchi",
}
const users = [
    {
        last_name: "Palonchiev",
        first_name: "Palonchi"
    },{
        last_name: "Nasriddinov",
        first_name: "Afandi"
    },
];
for(let item of users){// item => {};
    document.writeln(` ${item.last_name} ${item.first_name} |||||| `);
};
const user = {
    last_name: "Palonchiev",
    first_name: "Palonchi",
    role: [
        {
            name: "USER",
            prefix: 0
        },
        {
            name: "MENTOR",
            prefix: 1
        }
    ],
};
// console.log(user.role[0], user.role[1]);

let {last_name, first_name} = user;

if(last_name.length > 5){
    user.r = Math.random();
}

let order = { ...car, ...user, last_name: "Mirsoatov", first_name: "Dilshod" };
// console.log(order);

function my_first_function(a){

    alert(a);

}
const calc = function (a, b, oper){

    switch (oper){
        case "+":
            console.log( a + b);
            break;
        case "-":
            console.log( a - b);
            break;
        case "*":
            console.log( a * b);
            break;
        case "/":
            console.log( a / b);
            break;
        default:
            console.log("Bunday amal mavjud emas!");
    }

}

const advance_calc = function (oper, foiz = 0, ...sonlar){
    let result = 0;
    switch (oper) {
        case "+":
            for (let son of sonlar) {
                result += son;
            }
            break;
        case "-":
            for (let son of sonlar) {
                result -= son;
            }
            break;
        case "*":
            result = 1;
            for (let son of sonlar) {
                result *= son;
            }
            break;
        case "/":
            result = 1;
            for (let son of sonlar) {
                result /= son;
            }
            break;
        default:
            console.log("Bunday amal mavjud emas!");
    }
    let p = 0;
    if( result > 0){
         p = result * (foiz / 100);
         console.log(p, result);
    }else{
        console.log(result);
    }
}
advance_calc("+",25, 10,10,10,10,10,10);