$(document).ready(onReady);

let employeeArray = [];

employeeArray.push({
    firstName: 'Jen',
    lastName: 'Barber',
    id: 4521,
    title: 'Team Lead',
    annualSalary: 800000,
});

employeeArray.push({
    firstName: 'Maurice',
    lastName: 'Moss',
    id: 8724,
    title: 'Support Team',
    annualSalary: 58000,
});

employeeArray.push({
    firstName: 'Roy',
    lastName: 'Smith',
    id: 9623,
    title: 'Quality Assurance',
    annualSalary: 48000,
});

function monthlyCosts(employee){
    for (let i = 0; i < employee.length; i++){
        $('.container'.append('<div></div>'));
        let newDiv = $('.container').children().last();
        let newEmployee = employee[i];
        newDiv.append('<p>' + newEmployee.firstName+ '</p>');
        newDiv.append('<p>' + newEmployee.lastName+ '</p>');
        newDiv.append('<p>' + newEmployee.id+ '</p>');
        newDiv.append('<p>' + newEmployee.title+ '</p>');
        newDiv.append('<p>' + newEmployee.annualSalary+ '</p>');
        newDiv.append('<button class = "deleteBtn">Delete</button>');
    } console.log('Im working');
}

function onReady(){
    console.log('im working');
}
