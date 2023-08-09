

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
        let serial_number = arr_storage[arr_storage.length-1].serial+1;

        console.log(serial_number);

        let new_object = {
            serial : serial_number,
            task : input,
            done : false
        }

        arr_storage.push(new_object);
        
        localStorage.setItem("arr", JSON.stringify(arr_storage))
    }   else    {
        return;
    }

    document.getElementById("task_input").value = "";
    iterate();

}

const done_btn = (id) => {
    
    let initial_arr = get_array();
    for (let i = 0; i < initial_arr.length; i++) {
        if (initial_arr[i].serial == id) {
            initial_arr[i].done = !initial_arr[i].done;
            break;
        }
    }
    localStorage.setItem("arr", JSON.stringify(initial_arr));

    iterate();
}

const create_new_row = (row) => {
    
    let table_body = document.getElementById("table_body");

    let new_row = document.createElement("tr");
    new_row.style.backgroundColor = row.done?"green":"";

    let serial_cell = document.createElement("td");
    serial_cell.innerHTML = `<td>${row.serial}</td>`
    new_row.appendChild(serial_cell);

    let task_cell = document.createElement("td");
    task_cell.innerHTML = `<td>${row.task}</td>`
    new_row.appendChild(task_cell);

    let actions_cell = document.createElement("td");
    actions_cell.innerHTML = `<button class="act_btn" id="${row.serial}_done" onclick="done_btn(${row.serial})">Done</button>
                            <button class="act_btn" id="${row.serial}_remove" >Remove</button>`
    new_row.appendChild(actions_cell);

    table_body.appendChild(new_row);

}

const iterate = () => {
    document.getElementById("table_body").innerHTML = "";
    let arr_storage = get_array();

    arr_storage.map((todo) => {

        create_new_row(todo)

    })
}

let arr_storage = get_array();

if (arr_storage == null) {
    arr_storage = localStorage.setItem("arr", JSON.stringify(arr));
}   else    {
    iterate();
}