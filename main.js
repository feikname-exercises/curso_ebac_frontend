$(document).ready(function () {
    $("header button").click(() => {
        $("form").slideDown()
    })

    $("#botao-cancelar").click(() => {
        $("form").slideUp()
    })

    $("form").on("submit", (e) => {
        e.preventDefault()

        const enderecoDaNovaImagem = $('input[type="url"]').val()
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`).appendTo(novoItem)

        novoItem.appendTo("ul")
        novoItem.fadeIn(250)
        $('input[type="url"]').val("")
    })
})
