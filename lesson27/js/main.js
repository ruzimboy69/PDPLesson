let students = [
    {
        id:1,
        firstName: "Abbos",
        lastName: "Ibragimov",
        age: 20,
        group: 77,
    },
    {
        id:2,
        firstName: "Ozodbek",
        lastName: "Oripjonov",
        age: 22,
        group: 7,
    },
    {
        id:3,
        firstName: "Ali",
        lastName: "Vali",
        age: 30,
        group: 15,
    },
];
let edited=-1;
getStudentList();

function getStudentList() {

    document.getElementById('studentList').innerHTML='';

    for (let i = 0; i < students.length; i++) {
        document.getElementById('studentList').innerHTML +=
            '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + students[i].firstName + '</td>' +
            '<td>' + students[i].lastName + '</td>' +
            '<td>' + students[i].age + '</td>' +
            '<td>' + students[i].group + '</td>' +
            '<td>' +
            '<button onclick="deleteStudent('+ i +')" type="button" class="btn btn-danger">Delete</button>' +
            '<button onclick="editStudent('+ i +')" type="button" class="btn btn-warning ml-3">Edit</button>' +
            '</td>' +
            '</tr>'
    }
}


function addStudent() {

    let ismi = document.forms['myForm']['firstName'].value;
    let familiyasi = document.forms['myForm']['lastName'].value;
    let yoshi = document.forms['myForm']['age'].value;
    let guruhi = document.forms['myForm']['group'].value;


    if (ismi !== '' && familiyasi !== '' && yoshi !== '' && guruhi !== '') {

        let newStudentList={
            id:students.length+1,
            firstName: ismi,
            lastName:familiyasi ,
            age: yoshi,
            group: guruhi,
        };

        if (edited>=0){
            students[edited]=newStudentList;
            edited=-1;
        }
        else{
            students.push(newStudentList);
        }
        getStudentList();
        document.forms['myForm'].reset();

    }
    else {
        alert("Formani to'liq to'ldiring")
    }

}

function deleteStudent(id) {
           students.splice(id,1);
          getStudentList();
}

function editStudent(id) {

    edited=id;
    document.forms['myForm']['firstName'].value=students[id].firstName;
    document.forms['myForm']['lastName'].value=students[id].lastName;
    document.forms['myForm']['age'].value=students[id].age;
    document.forms['myForm']['group'].value=students[id].group;
}