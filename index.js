const target = document.getElementsByClassName("target")
const button = document.getElementById("button")
const input = document.getElementById("input")

button.onclick = _ => {
    let number = parseInt(Math.random() * 1000000);
    let color = "#" + number;
    input.value = color;
    target[0].style.backgroundColor = color;
}

input.oninput = _ => {
    target[0].style.backgroundColor = input.value;
}


target[0].onmouseover = _ => {
    myInterval = setInterval(changecolor, 500);
}

target[0].onmouseout = _ => {
    clearInterval(myInterval)
 };




function changecolor() {
    let number = parseInt(Math.random() * 1000000);
    let color = "#" + number;
    input.value = color;
    target[0].style.backgroundColor = color;
}