toggleTarefa = function (e) {
    $(e.target).toggleClass("cortado-grande")
}

$(document).ready(function () {
    $('header button').click((e) => {
        $('form').slideDown()
        $(e.target).fadeOut(150)
        $('input[type="text"]').focus()
    })

    $("#botao-cancelar").click(() => {
        $("form").slideUp()
        $("header button").fadeIn(150)
    })

    $('form').on('submit', (e) => {
        e.preventDefault()

        $('#informe-sem-tarefas').hide()

        const novaTarefa = $('input[type="text"]').val()
        const novoItem = $('<li style="display:none"></li>')
        novoItem.text(novaTarefa)
        novoItem.click(toggleTarefa)
        novoItem.appendTo('ul')
        novoItem.fadeIn(250)

        $('input[type="text"]').val('')
        $('input[type="text"]').focus()
    })
})
