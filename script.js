
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

}

const create_new_row = (row) => {

    console.log(row.serial)
    
    store_object();

    // let table_body = document.getElementById("table_body");

    // let new_row = document.createElement("tr");

    // let serial_cell = document.createElement("td");
    // serial_cell.innerHTML = `<td>${row.serial}</td>`
    // new_row.appendChild(serial_cell);

    // let task_cell = document.createElement("td");
    // task_cell.innerHTML = `<td>${row.task}</td>`
    // new_row.appendChild(task_cell);

    // let actions_cell = document.createElement("td");
    // actions_cell.innerHTML = `<button class="act_btn" id="${row.serial}_done">Done</button>
    //                         <button class="act_btn" id="${row.serial}_remove">Remove</button>`
    // new_row.appendChild(actions_cell);

    // table_body.appendChild(new_row);

}

const iterate = () => {

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



// const table = document.getElementById("table");

// // let arr = JSON.parse(localStorage.getItem(arr));

// const get_array = () => {
    
//     return JSON.parse(localStorage.getItem(arr));
// }

// if (localStorage.getItem("arr") == null) {
//     let arr = []
//     localStorage.setItem("arr", arr);
// } else {
//     arr_storage = get_array();
// }

// const create_row = (todo, i) => {

//     let table_body = document.getElementById("table_body");

//     const new_row = document.createElement("tr");
    
//     new_serial_cell = document.createElement("td");
//     new_serial_cell.innerHTML = `<td>${todo.serial}<td>`;
//     new_row.appendChild(new_serial_cell);

//     new_task_cell = document.createElement("td");
//     new_task_cell.innerHTML = `<td>${todo.task}</td>`;
//     new_row.appendChild(new_task_cell);

//     action_buttons_cell = document.createElement("td");
//     action_buttons_cell.innerHTML = `<td class="table_btn">
//                                 <button type="sumbit" id="${todo.serial}_done">Done</button>
//                                 <button type="submit" id="${todo.serial}_remove">Remove Task</button>
//                                 </td>`;
//     new_row.appendChild(action_buttons_cell);

//     table_body.appendChild(new_row);

//     arr_storage = [];

//     document.getElementById("task_input").value = "";

// }

// const iterate = () => {

//     let arr_storage = get_array();

//     arr_storage.map((todo, i) => {
    
//         create_row(todo, i);

//     })
// }

// const store_locally = () => {

//     iterate(todo);
    
//     let input = document.getElementById("task_input").value;
    
//     if (input === "") {
//         alert("Please enter a task before submitting!") 
//     } else {
//         let new_object = {
//             serial : todo.serial,
//             task : input
//         }

//         arr.push(new_object);
        
//         serial_number ++;

//         localStorage.setItem("arr", JSON.stringify(arr));
//     }
// }