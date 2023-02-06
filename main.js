function Pokemon(nome, tipo) {
    let _nome = nome;
    let _tipo = tipo;

    this.getNome = function() {
        return _nome;
    }

    this.getTipo = function() {
        return _tipo;
    }

    this.fazSom = function() {
        throw new Error('Use um tipo especifico de Pokemon para poder fazer barulho')
    }
}

function Pikachu() {
    Pokemon.call(this, "pikachu", "eletrico")
    this.fazSom = function() {
        console.log("PI - KA - CHU!")
    }
    this.choqueDoTrovao = function() {
        console.log("* barulhos de eletricidade *")
    }
}

function Arbok() {
    Pokemon.call(this, "ekans", "veneno")
    this.fazSom = function() {
        console.log('chaa-bó-ku')
    }
}

pikachu_do_ash = new Pikachu()
arbok_da_jessie = new Arbok()
arbok_do_joaozinho = new Arbok()