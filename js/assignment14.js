//  PROBLEM 1
const employees = [
  {
    name: 'Sam',
    department: 'Tech',
    poistion: 'Manager',
    salary: 40000,
    raise: true
  },
  {
    name: 'Mary',
    department: 'Finance',
    poistion: 'Trainee',
    salary: 18500,
    raise: true
  },
  {
    name: 'Bill',
    department: 'HR',
    poistion: 'Executive',
    salary: 21200,
    raise: false
  }
];
console.log('Problem 1: ', employees);

//  PROBLEM 2
const company = {
  companyName: 'Tech Stars',
  website: 'www.techstars.site',
  employees: employees
};
console.log('Problem 2: ', company);

//  PROBLEM 3
function addEmployee(employeeeName, dept, pos, sal, rse) {
  const newEmployee = {
    name: employeeeName,
    department: dept,
    poistion: pos,
    salary: sal,
    raise: rse
  };

  employees.push(newEmployee);
}
addEmployee('Anna', 'Tech', 'Executive', 25600, false);
console.log('Problem 3: ', employees);


//  PROBLEM 4
function calcSalaries(obj) {
  let total = 0;
  for(let i=0; i<obj.employees.length; i++) {
    total = total + obj.employees[i].salary;
  };

  return total;
}
console.log('Problem 4: ', calcSalaries(company));


//  PROBLEM 5
function giveRaise() {
  for(let i=0;i<employees.length;i++){
    if(employees[i].raise){
      employees[i].salary *= 1.1;
      employees[i].raise = false;
    }
  }
}
giveRaise();
console.log('Problem 5: ', employees);


//  PROBLEM 6
const homeWorkers = ['Anna', 'Sam'];
function setWFH() {
  for(let i=0;i<employees.length;i++){
    employees[i].wfh = homeWorkers.includes(employees[i].name);
  }
}
setWFH();
console.log('Problem 6: ', employees);
