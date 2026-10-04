const data = {
    produtos: [
        {
            id: 1,
            nome: "iPhone 15",
            preco: 3999.90,
            categoria: "Celulares",
            imagem: "https://placehold.co/300x200?text=iPhone+15",
            descricao: "Smartphone Apple com excelente desempenho e câmera de alta qualidade.",
            emEstoque: true
        },
        {
            id: 2,
            nome: "Samsung Galaxy S24",
            preco: 3499.90,
            categoria: "Celulares",
            imagem: "https://placehold.co/300x200?text=Galaxy+S24",
            descricao: "Smartphone Samsung com tela de alta qualidade e ótimo desempenho.",
            emEstoque: true
        },
        {
            id: 3,
            nome: "Lenovo IdeaPad 3",
            preco: 2899.90,
            categoria: "Notebooks",
            imagem: "https://placehold.co/300x200?text=IdeaPad+3",
            descricao: "Notebook para estudos, trabalho e tarefas do dia a dia.",
            emEstoque: true
        },
        {
            id: 4,
            nome: "Acer Nitro 5",
            preco: 4999.90,
            categoria: "Notebooks",
            imagem: "https://placehold.co/300x200?text=Acer+Nitro+5",
            descricao: "Notebook gamer com desempenho para jogos e aplicações pesadas.",
            emEstoque: false
        },
        {
            id: 5,
            nome: "HyperX Cloud II",
            preco: 399.90,
            categoria: "Acessórios",
            imagem: "https://placehold.co/300x200?text=HyperX+Cloud+II",
            descricao: "Headset gamer com áudio de alta qualidade e microfone integrado.",
            emEstoque: true
        },
        {
            id: 6,
            nome: "Logitech G203",
            preco: 149.90,
            categoria: "Acessórios",
            imagem: "https://placehold.co/300x200?text=Logitech+G203",
            descricao: "Mouse gamer compacto, preciso e confortável.",
            emEstoque: true
        },
        {
            id: 7,
            nome: "PlayStation 5",
            preco: 3999.90,
            categoria: "Games",
            imagem: "https://placehold.co/300x200?text=PlayStation+5",
            descricao: "Console de nova geração da Sony com alto desempenho gráfico.",
            emEstoque: true
        },
        {
            id: 8,
            nome: "Xbox Series S",
            preco: 2499.90,
            categoria: "Games",
            imagem: "https://placehold.co/300x200?text=Xbox+Series+S",
            descricao: "Console compacto da Microsoft para jogos digitais.",
            emEstoque: false
        }
    ]
};
const productList = document.getElementById("product-list");

const productDetails = document.getElementById("product-details");

const searchInput = document.querySelector("#search");

const categorySelect = document.querySelector("#category");

const renderButton = document.querySelector("#btnRender");
function formatPrice(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}
function createProductCard(produto) {

    const card = document.createElement("div");

    card.classList.add("card");

    card.setAttribute("data-id", produto.id);

    card.style.padding = "16px";


    const image = document.createElement("img");

    image.setAttribute("src", produto.imagem);

    image.setAttribute("alt", produto.nome);

    image.classList.add("card-image");


    const title = document.createElement("h2");

    title.classList.add("card-title");

    title.textContent = produto.nome;


    const price = document.createElement("p");

    price.textContent = formatPrice(produto.preco);


    const category = document.createElement("p");

    category.textContent = `Categoria: ${produto.categoria}`;


    const detailsButton = document.createElement("button");

    detailsButton.textContent = "Ver detalhes";

    detailsButton.addEventListener("click", function () {
        showProductDetails(produto);
    });


    const highlightButton = document.createElement("button");

    highlightButton.textContent = "Destacar";

    highlightButton.addEventListener("click", function () {

        if (card.classList.contains("highlight")) {
            card.classList.remove("highlight");
        } else {
            card.classList.add("highlight");
        }

    });


    card.appendChild(image);

    card.appendChild(title);

    card.appendChild(price);

    card.appendChild(category);

    card.appendChild(detailsButton);

    card.appendChild(highlightButton);


    return card;
}
function renderProducts(produtos) {

    productList.innerHTML = "";

    produtos.forEach(function (produto) {

        const card = createProductCard(produto);

        productList.appendChild(card);

    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        console.log(
            "Card renderizado - data-id:",
            card.getAttribute("data-id")
        );

    });
}
function renderCategories() {

    categorySelect.innerHTML = "";

    const optionTodas = document.createElement("option");

    optionTodas.value = "Todas";

    optionTodas.textContent = "Todas";

    categorySelect.appendChild(optionTodas);


    const categorias = [];

    data.produtos.forEach(function (produto) {

        if (!categorias.includes(produto.categoria)) {
            categorias.push(produto.categoria);
        }

    });


    categorias.forEach(function (categoria) {

        const option = document.createElement("option");

        option.value = categoria;

        option.textContent = categoria;

        categorySelect.appendChild(option);

    });
}
