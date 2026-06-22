const regressive = (number) => {
    if(number == 1){
        return 1;
    }
    console.log(number)
    return regressive(number - 1);
};
console.log(regressive(3))

//function regressive(){};