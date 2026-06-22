function successCallback(){
    console.log("Success!");
}

function failCallback(){
    console.log("Fail!");
}
const promisse = doSomething();
promise.then(successCallback, failCallback);