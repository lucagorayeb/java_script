let btn = document.querySelector("button");

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function mudaCor(button){
    let rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    button.target.style.backgroundColor = rndCol;
    console.log(button);
}
// btn.onclick -> Faz evento ao clicar uma vez.

// btn.ondblclick -> Faz evento ao clicar duas vezes.

// btn.onblur e btn.onfocus ->

//btn.ondblclick = mudaCor;

// window.onekeypress -> Faz o evento ao clique da seta para baixo ou para cima

// btn.onmouseover -> Faz o evento quando o mouse estiver em cima do obotão
// btn.onmouseout -> Faz o evento quando o mouse estiver em fora do obotão
// btn.onmouseout = mudaCor;
btn.addEventListener("click", mudaCor);