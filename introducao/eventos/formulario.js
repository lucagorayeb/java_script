let form = document.querySelector("form");
let fname = document.getElementById("fname");
let lanme = document.getElementById("lname");
let submit = document.getElementById("submit");
let para = document.querySelector("p");

form.onsubmit = function (e) {
    if (fname.value === "" || lname.value === ""){
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    }
}