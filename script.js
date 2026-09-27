// ==========================================
// B.1 - DEFINIÇÃO DOS DADOS
// ==========================================

const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["crime", "drama"],
        nota: 9.8,
        assistido: true
    },
    {
        id: 3,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9.0,
        assistido: true
    },
    {
        id: 4,
        titulo: "The Boys",
        tipo: "serie",
        ano: 2019,
        generos: ["ação", "drama"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 5,
        titulo: "Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["ação", "ficção científica"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 6,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["terror", "ficção científica"],
        nota: 8.9,
        assistido: false
    }
];


// ==========================================
// B.2 - ACESSO E LEITURA DOS DADOS
// ==========================================

console.log(catalogo);

// Título do primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

// Segundo gênero do terceiro item
if (catalogo[2].generos.length > 1) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log("O terceiro item possui apenas um gênero.");
}


// ==========================================
// B.3 A - LISTAGEM COM FOREACH
// ==========================================

console.log("=== LISTA DE FILMES E SÉRIES ===");

catalogo.forEach((item) => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});


// ==========================================
// B.3 B - TRANSFORMAÇÃO COM MAP
// ==========================================

const titulosEmCaixaAlta = catalogo.map((item) => {
    return item.titulo.toUpperCase();
});

console.log("=== TÍTULOS EM CAIXA ALTA ===");
console.log(titulosEmCaixaAlta);


// ==========================================
// B.3 C - SELEÇÃO COM FILTER
// ==========================================

const naoAssistidos = catalogo.filter((item) => {
    return item.assistido === false;
});

console.log("=== ITENS NÃO ASSISTIDOS ===");
console.log(naoAssistidos);
console.log("Quantidade de não assistidos:", naoAssistidos.length);


// ==========================================
// B.3 D - BUSCA COM FIND
// ==========================================

const itemNotaAlta = catalogo.find((item) => {
    return item.nota >= 9;
});

console.log("=== PRIMEIRO ITEM COM NOTA >= 9 ===");

if (itemNotaAlta) {
    console.log("Título:", itemNotaAlta.titulo);
    console.log("Nota:", itemNotaAlta.nota);
} else {
    console.log("Nenhum item possui nota igual ou superior a 9.");
}


// ==========================================
// B.3 E - CÁLCULO DAS MÉDIAS COM REDUCE
// ==========================================

// Soma de todas as notas
const somaNotas = catalogo.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

// Média geral
const mediaGeral = somaNotas / catalogo.length;


// Filtra apenas os itens assistidos
const assistidos = catalogo.filter((item) => {
    return item.assistido === true;
});

// Soma das notas dos itens assistidos
const somaNotasAssistidos = assistidos.reduce((acumulador, item) => {
    return acumulador + item.nota;
}, 0);

// Média dos itens assistidos
const mediaAssistidos = assistidos.length > 0
    ? somaNotasAssistidos / assistidos.length
    : 0;


// Exibição dos resultados
console.log("=== MÉDIAS DAS NOTAS ===");
console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));


// ==========================================
// B.3 F - VERIFICAÇÕES COM SOME E EVERY
// ==========================================

// Verifica se existe algum item lançado antes do ano 2000
const existeAntigo = catalogo.some((item) => {
    return item.ano < 2000;
});

// Verifica se todos os itens possuem pelo menos um gênero
const todosTemGenero = catalogo.every((item) => {
    return item.generos.length >= 1;
});

console.log("=== VERIFICAÇÕES ===");
console.log("Existe item com ano < 2000:", existeAntigo);
console.log(
    "Todos os itens têm pelo menos 1 gênero:",
    todosTemGenero
);


// ==========================================
// B.4 - RESUMO NA PÁGINA (DOM)
// ==========================================

// Quantidade de filmes
const quantidadeFilmes = catalogo.filter((item) => {
    return item.tipo === "filme";
}).length;

// Quantidade de séries
const quantidadeSeries = catalogo.filter((item) => {
    return item.tipo === "serie";
}).length;


// Ranking com as 3 maiores notas
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);


// Seleciona a div #output do HTML
const output = document.getElementById("output");


// Mostra o resumo na página
output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${catalogo.length}</p>

    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>

    <p><strong>Séries:</strong> ${quantidadeSeries}</p>

    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>

    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 notas</h3>

    <ol>
        ${ranking.map((item) => {
            return `<li>${item.titulo} — ${item.nota.toFixed(1)}</li>`;
        }).join("")}
    </ol>
`;
