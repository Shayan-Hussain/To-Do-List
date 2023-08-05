

let serial_number = 0;

const table = document.getElementById("table");

function calculate_serial_number() {
    const last_row_index = table.rows.length - 1;
    const last_row = table.rows[last_row_index];
    const first_cell_content = last_row.cells[0].textContent;
    serial_number = parseInt(first_cell_content); 

    return serial_number++;
}


const add_row = () => {
    const new_row = document.createElement("tr");
    
    let serial_cell = document.createElement("td");
    serial_cell.textContent = calculate_serial_number();
    new_row.appendChild(serial_cell);
    
    let task_cell = document.createElement("td");
    task_cell .textContent= document.getElementById("task_input").value;
    new_row.appendChild(task_cell);
    
    let actions_cell = document.createElement("td");
    actions_cell.textContent = "actions";
    new_row.appendChild(actions_cell);

    table.querySelector("tbody").appendChild(new_row);
    
}



// let serial_number = 0;
// function calculate_serial_number() {

//     let table = document.getElementById("table_body");
//     let last_row_index = table.rows.length - 1;

//     let last_row = table.rows[last_row_index];

//     let last_row_cell = last_row[0].textContent;
    
//     serial_number = parseInt(last_row_cell);
// }

// calculate_serial_number();

// console.log(serial_number);

// const createRow = () => {
//     document.getElementById("table_body").innerHTML = '';

    // const row_html = "<tr>
    //                 <td>$</td>
    //                 <td></td>
    //                 <td></td>
    //                 </tr>"

