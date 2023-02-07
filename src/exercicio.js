const alunos_e_notas = [
    // ABC reprovados
    {  nome: 'Ana', nota: 3 },
    {  nome: 'Beto', nota: 4 },
    {  nome: 'Carlos', nota: 5 },

    // DEF aprovados
    {  nome: 'Débora', nota: 6 },
    {  nome: 'Edilson', nota: 7 },
    {  nome: 'Flávio', nota: 8 }
]

const alunos_aprovados = alunos_e_notas.filter(function(aluno) {
    return (aluno.nota >= 6) ? true : false
})

console.log(alunos_aprovados)