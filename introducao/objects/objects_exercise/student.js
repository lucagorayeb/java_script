const student = {
    firstName : "Luca",
    lastName : "Gorayeb",
    age : 20,
    course : "Computantion Engeniring",
    grades : [10, 9, 8],
    completeName : function(){
        return this.firstName + " " + this.lastName;
    },
    second_grade : function(){
        return this.grades[1];
    },
    average : function(){
        if(this.grades.length == 1){
            return this.grades[0];
        }
        return this.grades.pop() + this.average(this.grades);
    }
};

console.log(JSON.stringify(student));
console.log(student.completeName());
console.log(student.second_grade());
console.log(student.average(student.grades));