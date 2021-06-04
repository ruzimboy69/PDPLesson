const hidding = document.getElementById("hidding");
const image = document.getElementById("images");
const random = parseInt(Math.random() * 10);

const src = image.getAttribute("src");

// image.removeAttribute("class");

if(src === ""){
    if(random > 5){

        hidding.style.backgroundColor = "red";
        image.setAttribute("src","images/1.png");

    }else{

        hidding.style.backgroundColor = "#303030";
        image.setAttribute("src","images/2.png");
    }
}else{
    alert("Rasm bo'sh emas!");
}

//// //////////////////////////// ///

const images = document.getElementsByTagName("img");

for(let img of images){
    const attr = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    img.setAttribute("alt", `${alt === "" ? "Ixtiyoriy text alt uchun!" : alt}`);
    if(attr === ""){
        img.setAttribute("src", `images/${random > 5 ? 1 : 2 }.png`);
    }
}
// //////////////////////////// ///

const container = document.getElementById("container");

console.log(container.classList);
if(random > 5){
    // container.classList.add("d-none");
    container.classList.remove("text-left");
    container.classList.toggle("container");
    container.classList.toggle("bg-dark");
}
// /////////////////////////// ///

const all_div = document.getElementsByTagName("div").length;
// hidding.innerText = `${all_div} ^ ${random} = ${Math.pow(all_div, random)}`;
hidding.innerText = Math.pow(all_div, random);

const result = `<span class='text-white'> ${Math.pow(all_div, random)} </span>`;

hidding.innerHTML = result;
/// /////////////////////////

const users = [
    {
        full_name: "Nasriddinov Afandi",
        age: 25,
        status: true
    },
    {
        full_name: "Palonchiev Pistonchi",
        age: 28,
        status: false
    },
    {
        full_name: "Turdiev Berdi",
        age: 87,
        status: true
    },
    {
        full_name: "Olimov Qobil",
        age: 65,
        status: false
    },
];
const table = document.getElementById("userTable");
// const tableHTML = table.innerHTML;
// console.log(tableHTML);

for(let i = 0; i < users.length; i++ ){
    // if(i >= 2){
    //     break;
    // }
    table.innerHTML += `<tr>
                        <td>${i + 1}</td>
                        <td>${users[i].full_name}</td>
                        <td>${users[i].age}</td>
                        <td>
                            <span class="badge ${users[i].status ? "badge-success" : "badge-danger"}">
                                ${users[i].status ? "Active" : "No active"}
                            </span>
                        </td>
                   </tr>`;
}




