
const aluno = {
    nome: "João Silva",
    cpf: "123.456.789-00",
    cidade: "São Paulo",
    notas: [7.5, 8.0, 6.5, 9.0]
};

// Função para imprimir informações do aluno
function imprimirInformacoes(aluno) {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`CPF: ${aluno.cpf}`);
    console.log(`Cidade: ${aluno.cidade}`);
}

// Função para imprimir cada uma das notas do array
function imprimirNotas(notas) {
    notas.forEach((nota, index) => {
        console.log(`Nota ${index + 1}: ${nota}`);
    });
}

// Função para calcular a média das notas
function calcularMedia(notas) {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / notas.length;
}

// Função para selecionar uma nota aleatória e convertê-la
function converterNotaAleatoria(notas) {
    const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
    const notaConvertida = notaAleatoria * 10;
    return notaConvertida;
}

// Execução das funções
imprimirInformacoes(aluno);
imprimirNotas(aluno.notas);

const media = calcularMedia(aluno.notas);
console.log(`Média das notas: ${media.toFixed(2)}`);

const notaConvertida = converterNotaAleatoria(aluno.notas);
console.log(`Nota aleatória convertida para escala 0-100: ${notaConvertida}`);


