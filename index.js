const Schema = require("./emp_pb");
const fs = require("fs")
const employee1 = new Schema.Employee();
employee1.setId(1001);
employee1.setName("Zaryab");
employee1.setSalary(1001);



const employee2 = new Schema.Employee();
employee2.setId(1002);
employee2.setName("Ali");
employee2.setSalary(9000);

const employee3 = new Schema.Employee();
employee3.setId(1003);
employee3.setName("Umar");
employee3.setSalary(5000);


const employees = new Schema.Employees();
employees.addEmployees(employee1);
employees.addEmployees(employee2);
employees.addEmployees(employee3);
const bytes = employees.serializeBinary();
console.log("binary " + bytes)
fs.writeFileSync("employeesbinary", bytes)
JSON.parse

const get_employees = Schema.Employees.deserializeBinary(bytes);

console.log("\n" + get_employees.toString())