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
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item possui apenas um gênero.");
}
