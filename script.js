let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

//esse de baixo são para as numerações, apesar de ser número na pratica não é. de vez (number) coloca (value)
function appendNumber(value){
    currentInput += value
    display.textContent = currentInput
}