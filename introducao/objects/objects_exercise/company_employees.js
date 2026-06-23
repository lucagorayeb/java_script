const company = {
    name : "Tech Solut",
    employees : [
        {"name" : "John", "position" : "Developer", "salary" : 1500.00},
        {"name" : "Mary", "position" : "Counter", "salary" : 1500.00},
        {"name" : "Joseph", "position" : "Manager", "salary" : 1700.00}
    ],
    payroll : function(employee){
        return this.employees[employee]["salary"] * 12;
    }
}

console.log("Printing every employee:");
for (const employee in company.employees){
    console.log(company.employees[employee]);
}

console.log();

console.log("Printing only developers:");
for (const employee in company.employees){
    if(company.employees[employee]["position"] == "Developer"){
        console.log(company.employees[employee]);
    }
}

console.log();

console.log("Printing total payrol for every employee:");
for (const employee in company.employees){
    console.log(company.payroll(employee));
}