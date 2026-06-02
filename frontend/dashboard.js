const user =
localStorage.getItem("user_id");

if(!user){

    window.location.href =
    "index.html";

}

function logout(){

    localStorage.clear();

    window.location.href =
    "index.html";

}

const tbody =
document.getElementById("students");

async function addStudent(){

    const student_id =
    document.getElementById(
        "student_id"
    ).value;

    const name =
    document.getElementById(
        "name"
    ).value;

    const section =
    document.getElementById(
        "section"
    ).value;

    await fetch(
        "http://localhost:3000/students",
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({
                student_id,
                name,
                section
            })
        }
    );

    loadStudents();
}

async function loadStudents(){

    const res =
    await fetch(
        "http://localhost:3000/students"
    );

    const students =
    await res.json();

    tbody.innerHTML = "";

    students.forEach(student=>{

        tbody.innerHTML += `
        <tr>

        <td>${student.id}</td>

        <td>${student.student_id}</td>

        <td>${student.name}</td>

        <td>${student.section}</td>

        <td>

        <button
        onclick="deleteStudent(${student.id})"
        >
        Delete
        </button>

        </td>

        </tr>
        `;
    });
}

async function deleteStudent(id){

    await fetch(
        `http://localhost:3000/students/${id}`,
        {
            method:"DELETE"
        }
    );

    loadStudents();
}

loadStudents();