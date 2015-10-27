var input = document.createElement("textarea");
document.body.appendChild(input);

console.log(window);
console.log(document);


input.addEventListener("keyup", inputchanged, false);

function inputchanged(event){
    console.log(event.target);
    console.log(event.target.value);
}