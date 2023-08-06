

let serial_number = 0;

const table = document.getElementById("table");

function calculate_serial_number() {
    const last_row_index = table.rows.length - 1;
    if (last_row_index > 0) {
        const last_row = table.rows[last_row_index];
        const first_cell_content = last_row.cells[0].textContent;
        serial_number = parseInt(first_cell_content); 

        serial_number++;
        return;
    }
    else {
        serial_number++;
    }
}


const add_row = () => {
    calculate_serial_number()

    const new_row = document.createElement("tr");
    
    let serial_cell = document.createElement("td");
    serial_cell.textContent = serial_number;
    new_row.appendChild(serial_cell);
    
    let task_cell = document.createElement("td");
    if (document.getElementById("task_input").value == "") {
        alert("Enter a task before submitting!")
        end;
    }
    else {
        task_cell .textContent= document.getElementById("task_input").value;
    }

    new_row.appendChild(task_cell);
    
    let actions_cell = document.createElement("td");
    actions_cell.textContent = "actions";
    new_row.appendChild(actions_cell);

    table.querySelector("tbody").appendChild(new_row);
    
    document.getElementById("task_input").value = "";
}






