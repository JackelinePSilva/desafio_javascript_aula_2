const aluno = {
    nome : "Jackeline Pereira",
    cpf: "000.111.222-33",
    cidade: "João Pessoa",
    notas: [8.8, 9.0, 5.0, 6.7]
};

//imprimindo nome, cpf e cidade do aluno
console.log(`Nome: `, aluno.nome);
console.log(`CPF: `, aluno.cpf);
console.log(`Cidade: `, aluno.cidade);


//imprimr notas
function imprimirNotas(notas) {
    notas.forEach((nota, index) => {
        console.log(`Nota ${index + 1}: ${nota}`);
    });
};

// falta finalizar



