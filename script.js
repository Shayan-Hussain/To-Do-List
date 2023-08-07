
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






// CODE BELOW THIS IS UPDATED (NOT COMPLETED) VERION WHERE THE LOCAL STORAGE IS BEING USED //





const table = document.getElementById("table");

let arr = [];

let arr_storage = [];

let serial_number = 1;

const store_locally = () => {
    
    let input = document.getElementById("task_input").value;
    
    if (input === "") {
        alert("Please enter a task before submitting!") 
    } else {
        let new_object = {
            serial : serial_number,
            task : input
        }

        arr.push(new_object);
        
        serial_number ++;

        localStorage.setItem("arr", JSON.stringify(arr));
    }
}

const create_row = () => {

    store_locally();

    arr_storage = JSON.parse(localStorage.getItem("arr"));

    let table_body = document.getElementById("table_body");

    const new_row = document.createElement("tr");
    
    new_serial_cell = document.createElement("td");
    new_serial_cell.innerHTML = `<td>${arr_storage[arr.length-1]["serial"]}<td>`;
    new_row.appendChild(new_serial_cell);

    new_task_cell = document.createElement("td");
    new_task_cell.innerHTML = `<td>${arr_storage[arr.length-1]["task"]}</td>`;
    new_row.appendChild(new_task_cell);

    action_buttons_cell = document.createElement("td");
    action_buttons_cell.innerHTML = `<td class="table_btn">
                                <button type="sumbit" id="${serial_number}_done">Done</button>
                                <button type="submit" id="${serial_number}_remove">Remove Task</button>
                                </td>`;
    new_row.appendChild(action_buttons_cell);

    table_body.appendChild(new_row);

    arr_storage = [];

    document.getElementById("task_input").value = "";

}