const span = document.querySelector("span");
const h3 = document.querySelector("h3");


let clickCount = 0

function clickSpan() {

    clickCount += 1
    console.log(clickCount)
    h3.innerText = clickCount

} 


span.addEventListener("click", clickSpan)