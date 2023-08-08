

// CODE BELOW THIS ONLY TAKES THE INPUTS AND DISPLAYS IT IN THE TABLE //


// let serial_number = 0;

// const table = document.getElementById("table");

// function calculate_serial_number() {
//     const last_row_index = table.rows.length - 1;
//     if (last_row_index > 0) {
//         const last_row = table.rows[last_row_index];
//         const first_cell_content = last_row.cells[0].textContent;
//         serial_number = parseInt(first_cell_content); 

//         serial_number++;
//         return;
//     }
//     else {
//         serial_number++;
//     }
// }


// const add_row = () => {
//     calculate_serial_number()

//     const new_row = document.createElement("tr");
    
//     let serial_cell = document.createElement("td");
//     serial_cell.textContent = serial_number;
//     new_row.appendChild(serial_cell);
    
//     let task_cell = document.createElement("td");
//     if (document.getElementById("task_input").value == "") {
//         alert("Enter a task before submitting!")
//         end;
//     }
//     else {
//         task_cell .textContent= document.getElementById("task_input").value;
//     }

//     new_row.appendChild(task_cell);
    
//     let actions_cell = document.createElement("td");
//     actions_cell.textContent = "actions";
//     new_row.appendChild(actions_cell);

//     table.querySelector("tbody").appendChild(new_row);

//     document.getElementById("task_input").value = "";
// }


// // CODE BELOW THIS IS UPDATED (NOT COMPLETED) VERION WHERE THE LOCAL STORAGE IS BEING USED //


let arr = [];


const get_array = () => {
    
    return JSON.parse(localStorage.getItem("arr"));
    
}

const store_object = () => {

    let input = document.getElementById("task_input").value;

    arr_storage = get_array();

    if (input !== "") {
        let serial_number = arr_storage.length;

        console.log(serial_number);

        let new_object = {
            serial : serial_number,
            task : input
        }

        arr_storage.push(new_object);
        
        localStorage.setItem("arr", JSON.stringify(arr_storage))
    }   else    {
        return;
    }

    document.getElementById("task_input").value = "";
    iterate();

    iterate();

}


const create_new_row = (row) => {

<<<<<<< HEAD
    console.log(row.task)
    

    let table_body = document.getElementById("table_body");

    let new_row = document.createElement("tr");

    let serial_cell = document.createElement("td");
    serial_cell.innerHTML = `<td>${row.serial}</td>`
    new_row.appendChild(serial_cell);

    let task_cell = document.createElement("td");
    task_cell.innerHTML = `<td>${row.task}</td>`
    new_row.appendChild(task_cell);

    let actions_cell = document.createElement("td");
    actions_cell.innerHTML = `<button class="act_btn" id="${row.serial}_done" >Done</button>
                            <button class="act_btn" id="${row.serial}_remove" >Remove</button>`
    new_row.appendChild(actions_cell);

=======
    let table_body = document.getElementById("table_body");

    let new_row = document.createElement("tr");

    let serial_cell = document.createElement("td");
    serial_cell.innerHTML = `<td>${row.serial+1}</td>`
    new_row.appendChild(serial_cell);

    let task_cell = document.createElement("td");
    task_cell.innerHTML = `<td>${row.task}</td>`
    new_row.appendChild(task_cell);

    let actions_cell = document.createElement("td");
    actions_cell.innerHTML = `<button class="act_btn" id="${row.serial}_done">Done</button>
                            <button class="act_btn" id="${row.serial}_remove">Remove</button>`
    new_row.appendChild(actions_cell);

>>>>>>> c2fb5bf (Cleaned up the code)
    table_body.appendChild(new_row);

}

const iterate = () => {
<<<<<<< HEAD
    document.getElementById("table_body").innerHTML = "";
=======

    document.getElementById("table_body").innerHTML = "";

>>>>>>> c2fb5bf (Cleaned up the code)
    arr_storage = get_array();

    arr_storage.map((todo) => {

        create_new_row(todo)

    })
}

arr_storage = get_array();

if (arr_storage == null) {
    arr_storage = localStorage.setItem("arr", JSON.stringify(arr));
}   else    {
    iterate();
}