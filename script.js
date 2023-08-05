

let serial_number = 0;
let task = "";

const table = document.getElementById("table");

function calculate_serial_number() {
    const last_row_index = table.rows.length - 1;
    const last_row = table.rows[last_row_index];
    const first_cell_content = last_row.cells[0].textContent;
    serial_number = parseInt(first_cell_content); 

    serial_number++;
}

const add_input = () => {
    task = document.getElementById("task_input").value;
    
}
 
const add_row = () => {
    table
}

console.log(task);


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

