// Há qualquer diferença entre usar isso e o script ja estar no final de body?
$(document).ready(function () {
    let brazilTelMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }
    
    let brazilTelMaskOptions = {
        onKeyPress: function() {
            field.mask(brazilTelMaskBehavior.apply());
        },
        placeholder: "(__) _____-____"
    };
    
    $('#telefone').mask(brazilTelMaskBehavior, brazilTelMaskOptions);
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');

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
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            logradouro: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            }
        },
    })
})
