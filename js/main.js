// Há qualquer diferença entre usar isso e o script ja estar no final de body?
$(document).ready(function () {
    $('#carousel-imagens').slick({ autoplay: true })

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })
    
    let brazilTelMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }
    
    let brazilTelMaskOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(brazilTelMaskBehavior.apply({}, arguments), options);
        },
        placeholder: "(__) _____-____"
    };
    
    $('#telefone').mask(brazilTelMaskBehavior, brazilTelMaskOptions);
    
    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            "veiculo-interesse": {
                required: true
            },
    
        },
        submitHandler: function (form) {
            // TODO
        },
        invalidHandler: function (evento, validador) {
            let numeroCamposIncorretos = validador.numberOfInvalids();
            console.log(numeroCamposIncorretos)
            if (numeroCamposIncorretos > 0) {
    
            }
        },
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()
        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })
})
