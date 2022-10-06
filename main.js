const form = document.getElementById("form");
const inputA = document.getElementById("numero-a")
const inputB = document.getElementById("numero-b")
const containerSuccessMsg = document.getElementById("success-message")
const containerErrorMsg = document.getElementById("error-message")
let formValido = false
let podeApagarMsgSucesso = false

function validaAB(a, b) {
    return b > a ? true : false
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if(!formValido) {
        return
    } 

    containerSuccessMsg.classList.remove("hidden")
    inputA.value = ""
    inputB.value = ""

    formValido = false

    podeApagarMsgSucesso = false
    setInterval(function() {
        podeApagarMsgSucesso = true
    }, 500)
})

const checkErrorOnChange = function() {
    // Remover mensagem de sucesso ao começar uma nova entrada de dados se for
    // feita 500ms depois do último submit para evitar que desapareça
    // imediatamente devido ao keyup forçado da tecla enter ao enviar
    if(podeApagarMsgSucesso) {
        containerSuccessMsg.classList.add("hidden")
    }

    // Ignorar lógica de erro se algum dos dois campos estiver vazio.
    // Infelizmente tambem ignora caso contenha dados inválidos (letras) devido
    // ao jeito que input[type="number"] funciona.
    if(inputA.value == "" || inputB.value == "") {
        return
    }

    // Proceder para a validação normal
    if(validaAB(Number(inputA.value), Number(inputB.value))) {
        formValido = true

        inputA.classList.remove("invalid")
        inputB.classList.remove("invalid")
        containerErrorMsg.classList.add("hidden")
    } else {
        formValido = false

        inputA.classList.add("invalid")
        inputB.classList.add("invalid")
        containerErrorMsg.classList.remove("hidden")
    }
}

inputA.addEventListener("keyup", checkErrorOnChange)
inputB.addEventListener("keyup", checkErrorOnChange)
