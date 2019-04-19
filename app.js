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
        console.log('Hey, I work.');
    }
}

function onReady(){
    console.log('Hello');
