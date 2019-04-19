$(document).ready(onReady);

let employeeArray = [];
let monthlyBudget = 20000;

function clickSubmitButton(){
    event.preventDefault();
    let entry = {};
    $(this).serializeArray().forEach(function (item) {
        entry[item.name] = item.value;
    });
    $(this).trigger('reset');
    employeeArray.push(entry);
    render();
}
function render(){
    $('.container').empty();
    for (let i = 0; i < employeeArray.length; i++){
        $('.container').append('<div></div>');
        let newDiv = $('.container').children().last();
        let newEmployee = employeeArray[i];
        newDiv.data ('id',i);
        newDiv.append('<p>' + newEmployee.firstName + '</p>');
        newDiv.append('<p>' + newEmployee.lastName + '</p>');
        newDiv.append('<p>' + newEmployee.id + '</p>');
        newDiv.append('<p>' + newEmployee.title + '</p>');
        newDiv.append('<p>' + newEmployee.annualSalary + '</p>');
        newDiv.append('<button class="deleteBtn">Delete</button>');
    }
}

function clickDeleteButton(){
    let employeeToDelete = $(this).parent().data('id');
    employeeArray.splice(employeeToDelete, 1);
    render();
}

function onReady(){
    render();

    $('.container').on('click', '.deleteBtn', clickDeleteButton);
    $('#newEmployee').on('submit', clickSubmitButton);


    console.log('Hello');
}

