const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formValido = false

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2 ? true : false;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");

    const containerMensagemSucesso = document.querySelector('.success-message');

    const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`
    
    if (!formValido) {
        return
    }

    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = "block"
    
    nomeBeneficiario.value = ""
    numeroContaBeneficiario.value = ""
    valorDeposito.value = ""

})

nomeBeneficiario.addEventListener('keyup', function(e) {
    formValido = validaNome(e.target.value)

    const containerMensagemErro = document.querySelector('.error-message');

    if(!formValido) {
        nomeBeneficiario.classList.add('error')
        containerMensagemErro.style.display = "block"
    } else {
        nomeBeneficiario.classList.remove('error');
        containerMensagemErro.style.display = "none"
    }
})