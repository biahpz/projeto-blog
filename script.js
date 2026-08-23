/* =========================================================
   BANCO DE DADOS DAS SÉRIES
========================================================= */

const seriesData = [

    {
        id: "stranger-things",

        title: "Stranger Things",

        year: 2016,

        genres: [
            "Ficção científica",
            "Mistério",
            "Drama"
        ],

        seasons: "5 temporadas",

        age: "16",

        status: "Finalizada",

        rating: 4.9,

        phrase: "uma das minhas favoritas!",

        poster:
            "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",

        description: [
            `Ambientada na pequena cidade de Hawkins, Stranger Things
            começa quando o desaparecimento misterioso de Will Byers
            revela acontecimentos sobrenaturais, experimentos secretos
            e uma dimensão assustadora conhecida como Mundo Invertido.`,

            `Com muita nostalgia, amizade e referências à cultura pop,
            a série mistura aventura, mistério, ficção científica e
            terror. A cada temporada, os personagens precisam enfrentar
            ameaças cada vez maiores enquanto tentam proteger Hawkins
            e uns aos outros.`
        ],

        tags: [
            "anos 80",
            "amizade",
            "mistério",
            "sobrenatural"
        ],

        trailer:
            "https://www.youtube.com/embed/b9EkMc79ZSU",

        cast: [
            ["Millie Bobby Brown", "Eleven"],
            ["Finn Wolfhard", "Mike"],
            ["Noah Schnapp", "Will"],
            ["Sadie Sink", "Max"],
            ["Gaten Matarazzo", "Dustin"],
            ["Caleb McLaughlin", "Lucas"]
        ],

        votes: {
            like: 928,
            dislike: 72
        }
    },


    {
        id: "riverdale",

        title: "Riverdale",

        year: 2017,

        genres: [
            "Drama",
            "Mistério",
            "Romance"
        ],

        seasons: "7 temporadas",

        age: "16",

        status: "Finalizada",

        rating: 3.8,

        phrase: "caótica, mas impossível de ignorar",

        poster:
            "https://image.tmdb.org/t/p/w500/cdM7S25iXWQbKi7lN7l4mH8Jv5V.jpg",

        description: [
            `Riverdale acompanha Archie Andrews, Betty Cooper,
            Veronica Lodge, Jughead Jones e outros adolescentes
            enquanto investigam os segredos escondidos por trás
            de uma cidade aparentemente tranquila.`,

            `O que começa como um mistério adolescente rapidamente
            evolui para romances, crimes, conspirações e acontecimentos
            cada vez mais inesperados. É uma série que definitivamente
            não tem medo de ficar estranha.`
        ],

        tags: [
            "romance",
            "adolescente",
            "crime",
            "mistério"
        ],

        trailer:
            "https://www.youtube.com/embed/HxtLlByaYTc",

        cast: [
            ["KJ Apa", "Archie"],
            ["Lili Reinhart", "Betty"],
            ["Camila Mendes", "Veronica"],
            ["Cole Sprouse", "Jughead"],
            ["Madelaine Petsch", "Cheryl"]
        ],

        votes: {
            like: 684,
            dislike: 316
        }
    },


    {
        id: "gossip-girl",

        title: "Gossip Girl",

        year: 2007,

        genres: [
            "Drama",
            "Romance"
        ],

        seasons: "6 temporadas",

        age: "16",

        status: "Finalizada",

        rating: 4.5,

        phrase: "fofoca, luxo e muito drama ♡",

        poster:
            "https://image.tmdb.org/t/p/w500/sdX4fZHYy1hD3U3VfJbY5VYJ4mR.jpg",

        description: [
            `No Upper East Side de Manhattan, um grupo de jovens
            privilegiados tem praticamente cada passo acompanhado
            por uma blogueira anônima conhecida como Gossip Girl.`,

            `Entre romances, amizades, traições e escândalos,
            ninguém consegue manter um segredo por muito tempo.
            É aquele tipo de série perfeita para quem gosta de
            drama e personagens que vivem tomando decisões duvidosas.`
        ],

        tags: [
            "Nova York",
            "romance",
            "fofoca",
            "drama"
        ],

        trailer:
            "https://www.youtube.com/embed/eCg1RN-dyQk",

        cast: [
            ["Blake Lively", "Serena"],
            ["Leighton Meester", "Blair"],
            ["Penn Badgley", "Dan"],
            ["Ed Westwick", "Chuck"],
            ["Chace Crawford", "Nate"]
        ],

        votes: {
            like: 881,
            dislike: 119
        }
    },


    {
        id: "you",

        title: "You",

        year: 2018,

        genres: [
            "Suspense",
            "Drama",
            "Crime"
        ],

        seasons: "5 temporadas",

        age: "18",

        status: "Finalizada",

        rating: 4.6,

        phrase: "perturbadora do jeito certo",

        poster:
            "https://image.tmdb.org/t/p/w500/7bEYwjUvlJW7GerM8GYmqwl4oS3.jpg",

        description: [
            `Joe Goldberg parece ser apenas um homem inteligente
            e apaixonado por livros, mas sua visão sobre romance
            rapidamente revela um lado obsessivo e extremamente
            perigoso.`,

            `You brinca constantemente com a perspectiva do
            protagonista, fazendo o público acompanhar seus
            pensamentos enquanto ele justifica atitudes cada
            vez mais absurdas.`
        ],

        tags: [
            "obsessão",
            "crime",
            "psicológico",
            "suspense"
        ],

        trailer:
            "https://www.youtube.com/embed/ga1m0wjzscU",

        cast: [
            ["Penn Badgley", "Joe Goldberg"],
            ["Victoria Pedretti", "Love Quinn"],
            ["Elizabeth Lail", "Beck"],
            ["Tati Gabrielle", "Marienne"]
        ],

        votes: {
            like: 906,
            dislike: 94
        }
    },


    {
        id: "la-casa-de-papel",

        title: "La Casa de Papel",

        year: 2017,

        genres: [
            "Crime",
            "Drama",
            "Suspense"
        ],

        seasons: "5 partes",

        age: "16",

        status: "Finalizada",

        rating: 4.8,

        phrase: "Bella Ciao nunca mais foi a mesma",

        poster:
            "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",

        description: [
            `Um homem conhecido como Professor reúne criminosos
            com habilidades diferentes para executar um plano
            extremamente ambicioso: realizar um dos maiores
            assaltos já imaginados.`,

            `Com identidades baseadas em nomes de cidades,
            máscaras icônicas e muitos planos dentro de outros
            planos, La Casa de Papel mistura ação, emoção,
            estratégia e relacionamentos.`
        ],

        tags: [
            "assalto",
            "Espanha",
            "ação",
            "estratégia"
        ],

        trailer:
            "https://www.youtube.com/embed/_InqQJRqGW4",

        cast: [
            ["Álvaro Morte", "Professor"],
            ["Úrsula Corberó", "Tokyo"],
            ["Pedro Alonso", "Berlin"],
            ["Itziar Ituño", "Lisboa"],
            ["Jaime Lorente", "Denver"]
        ],

        votes: {
            like: 944,
            dislike: 56
        }
    },


    {
        id: "alice-in-borderland",

        title: "Alice in Borderland",

        year: 2020,

        genres: [
            "Suspense",
            "Ficção científica",
            "Ação"
        ],

        seasons: "3 temporadas",

        age: "16",

        status: "Em andamento",

        rating: 4.7,

        phrase: "jogos que você definitivamente não quer jogar",

        poster:
            "https://image.tmdb.org/t/p/w500/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",

        description: [
            `Arisu e seus amigos são transportados para uma
            versão praticamente vazia de Tóquio, onde precisam
            participar de jogos perigosos para continuar vivos.`,

            `Cada carta representa um tipo e nível de desafio.
            Conforme Arisu tenta entender aquele mundo, a série
            mistura sobrevivência, inteligência, ação e questões
            sobre o verdadeiro valor da vida.`
        ],

        tags: [
            "Japão",
            "sobrevivência",
            "jogos",
            "ação"
        ],

        trailer:
            "https://www.youtube.com/embed/49_44FFKZ1M",

        cast: [
            ["Kento Yamazaki", "Arisu"],
            ["Tao Tsuchiya", "Usagi"],
            ["Nijiro Murakami", "Chishiya"],
            ["Aya Asahina", "Kuina"]
        ],

        votes: {
            like: 931,
            dislike: 69
        }
    },


    {
        id: "outer-banks",

        title: "Outer Banks",

        year: 2020,

        genres: [
            "Aventura",
            "Drama",
            "Mistério"
        ],

        seasons: "4 temporadas",

        age: "16",

        status: "Em andamento",

        rating: 4.5,

        phrase: "P4L! aventura do começo ao fim",

        poster:
            "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiIW.jpg",

        description: [
            `John B e seus amigos vivem em Outer Banks e acabam
            encontrando pistas relacionadas a um tesouro perdido
            e ao desaparecimento do pai de John B.`,

            `A busca transforma as férias do grupo em uma grande
            aventura cheia de perseguições, romances, rivalidades
            e situações perigosas.`
        ],

        tags: [
            "praia",
            "tesouro",
            "amizade",
            "aventura"
        ],

        trailer:
            "https://www.youtube.com/embed/uk_hFfUFXh4",

        cast: [
            ["Chase Stokes", "John B"],
            ["Madelyn Cline", "Sarah"],
            ["Rudy Pankow", "JJ"],
            ["Jonathan Daviss", "Pope"],
            ["Madison Bailey", "Kiara"]
        ],

        votes: {
            like: 894,
            dislike: 106
        }
    },


    {
        id: "squid-game",

        title: "Round 6",

        year: 2021,

        genres: [
            "Suspense",
            "Drama",
            "Sobrevivência"
        ],

        seasons: "3 temporadas",

        age: "18",

        status: "Finalizada",

        rating: 4.8,

        phrase: "brincadeiras infantis nunca foram tão tensas",

        poster:
            "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",

        description: [
            `Centenas de pessoas endividadas recebem um convite
            misterioso para participar de uma competição com um
            prêmio gigantesco.`,

            `O problema é que as brincadeiras aparentemente
            infantis possuem consequências mortais. Round 6
            combina suspense, crítica social e personagens
            marcantes em uma competição brutal.`
        ],

        tags: [
            "Coreia",
            "jogos",
            "sobrevivência",
            "suspense"
        ],

        trailer:
            "https://www.youtube.com/embed/oqxAJKy0ii4",

        cast: [
            ["Lee Jung-jae", "Gi-hun"],
            ["Lee Byung-hun", "Front Man"],
            ["Wi Ha-jun", "Jun-ho"],
            ["Jung Ho-yeon", "Sae-byeok"]
        ],

        votes: {
            like: 951,
            dislike: 49
        }
    },


    {
        id: "wednesday",

        title: "Wednesday",

        year: 2022,

        genres: [
            "Mistério",
            "Comédia",
            "Fantasia"
        ],

        seasons: "2 temporadas",

        age: "14",

        status: "Em andamento",

        rating: 4.7,

        phrase: "sombria, sarcástica e estilosa",

        poster:
            "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

        description: [
            `Wednesday Addams começa a estudar na Academia
            Nevermore, uma escola cheia de alunos tão incomuns
            quanto ela.`,

            `Enquanto tenta dominar suas habilidades psíquicas,
            Wednesday investiga uma sequência de acontecimentos
            misteriosos e descobre segredos relacionados à
            própria família.`
        ],

        tags: [
            "Nevermore",
            "mistério",
            "gótico",
            "fantasia"
        ],

        trailer:
            "https://www.youtube.com/embed/Di310WS8zLk",

        cast: [
            ["Jenna Ortega", "Wednesday"],
            ["Emma Myers", "Enid"],
            ["Hunter Doohan", "Tyler"],
            ["Joy Sunday", "Bianca"],
            ["Catherine Zeta-Jones", "Morticia"]
        ],

        votes: {
            like: 937,
            dislike: 63
        }
    },


    {
        id: "umbrella-academy",

        title: "The Umbrella Academy",

        year: 2019,

        genres: [
            "Fantasia",
            "Ação",
            "Drama"
        ],

        seasons: "4 temporadas",

        age: "16",

        status: "Finalizada",

        rating: 4.4,

        phrase: "a família mais problemática possível",

        poster:
            "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",

        description: [
            `Irmãos adotivos com habilidades extraordinárias
            se reencontram após a morte do homem que os criou
            para formar uma equipe de heróis.`,

            `Além dos problemas familiares, eles descobrem que
            precisam impedir acontecimentos capazes de destruir
            o mundo. A série mistura superpoderes, humor,
            viagens no tempo e muito caos.`
        ],

        tags: [
            "superpoderes",
            "família",
            "tempo",
            "ação"
        ],

        trailer:
            "https://www.youtube.com/embed/0DAmWHxeoKw",

        cast: [
            ["Elliot Page", "Viktor"],
            ["Tom Hopper", "Luther"],
            ["Aidan Gallagher", "Five"],
            ["Robert Sheehan", "Klaus"],
            ["David Castañeda", "Diego"]
        ],

        votes: {
            like: 872,
            dislike: 128
        }
    }

];


/* =========================================================
   ESTADO DA APLICAÇÃO
========================================================= */

let currentSeriesIndex = 0;

let currentFilter = "all";

let favorites =
    JSON.parse(
        localStorage.getItem("biaFavorites")
    ) || [];

let userVotes =
    JSON.parse(
        localStorage.getItem("biaVotes")
    ) || {};

let userRatings =
    JSON.parse(
        localStorage.getItem("biaRatings")
    ) || {};

let comments =
    JSON.parse(
        localStorage.getItem("biaComments")
    ) || {};

let preferences =
    JSON.parse(
        localStorage.getItem("biaPreferences")
    ) || {
        theme: "lavender",
        font: "medium",
        animations: true
    };


/* =========================================================
   ELEMENTOS
========================================================= */

const seriesList =
    document.getElementById("seriesList");

const seriesTitle =
    document.getElementById("seriesTitle");

const seriesMetadata =
    document.getElementById("seriesMetadata");

const seriesRating =
    document.getElementById("seriesRating");

const seriesDescription =
    document.getElementById("seriesDescription");

const seriesPoster =
    document.getElementById("seriesPoster");

const seriesPhrase =
    document.getElementById("seriesPhrase");

const tagsContainer =
    document.getElementById("tagsContainer");

const favoriteButton =
    document.getElementById("favoriteButton");

const favoritesCount =
    document.getElementById("favoritesCount");

const seriesCount =
    document.getElementById("seriesCount");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const trailerModal =
    document.getElementById("trailerModal");

const castModal =
    document.getElementById("castModal");

const trailerFrame =
    document.getElementById("trailerFrame");

const trailerModalTitle =
    document.getElementById("trailerModalTitle");

const castGrid =
    document.getElementById("castGrid");

const likeButton =
    document.getElementById("likeButton");

const dislikeButton =
    document.getElementById("dislikeButton");

const likePercentage =
    document.getElementById("likePercentage");

const dislikePercentage =
    document.getElementById("dislikePercentage");

const voteProgress =
    document.getElementById("voteProgress");

const starsContainer =
    document.getElementById("starsContainer");

const userRatingText =
    document.getElementById("userRatingText");

const commentForm =
    document.getElementById("commentForm");

const commentInput =
    document.getElementById("commentInput");

const commentsList =
    document.getElementById("commentsList");

const commentCounter =
    document.getElementById("commentCounter");

const characterCounter =
    document.getElementById("characterCounter");

const sidebar =
    document.querySelector(".sidebar");

const settingsPanel =
    document.getElementById("settingsPanel");

const settingsOverlay =
    document.getElementById("settingsOverlay");

const backToTop =
    document.getElementById("backToTop");


/* =========================================================
   SALVAR DADOS
========================================================= */

function saveFavorites() {

    localStorage.setItem(
        "biaFavorites",
        JSON.stringify(favorites)
    );

}

function saveVotes() {

    localStorage.setItem(
        "biaVotes",
        JSON.stringify(userVotes)
    );

}

function saveRatings() {

    localStorage.setItem(
        "biaRatings",
        JSON.stringify(userRatings)
    );

}

function saveComments() {

    localStorage.setItem(
        "biaComments",
        JSON.stringify(comments)
    );

}

function savePreferences() {

    localStorage.setItem(
        "biaPreferences",
        JSON.stringify(preferences)
    );

}


/* =========================================================
   UTILIDADES
========================================================= */

function getCurrentSeries() {

    return seriesData[currentSeriesIndex];

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


function showToast(message, icon = "fa-heart") {

    const container =
        document.getElementById("toastContainer");

    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {

        toast.style.opacity = "0";
        toast.style.transform =
            "translateX(25px)";

    }, 2600);

    setTimeout(() => {

        toast.remove();

    }, 3000);

}


/* =========================================================
   RENDERIZAR LISTA
========================================================= */

function renderSeriesList() {

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();

    seriesList.innerHTML = "";


    const filteredSeries =
        seriesData.filter(series => {

            const matchesSearch =
                series.title
                    .toLowerCase()
                    .includes(searchTerm) ||

                series.genres
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm);


            const matchesFilter =
                currentFilter === "all" ||

                (
                    currentFilter === "favorite" &&
                    favorites.includes(series.id)
                );


            return (
                matchesSearch &&
                matchesFilter
            );

        });


    if (filteredSeries.length === 0) {

        seriesList.innerHTML = `
            <div class="empty-comments">
                Nenhuma série encontrada ♡
            </div>
        `;

        return;

    }


    filteredSeries.forEach(series => {

        const originalIndex =
            seriesData.findIndex(
                item => item.id === series.id
            );

        const button =
            document.createElement("button");

        button.className =
            "series-item" +
            (
                originalIndex === currentSeriesIndex
                    ? " active"
                    : ""
            );


        button.innerHTML = `

            <span class="series-dot"></span>

            <img
                class="series-thumb"
                src="${series.poster}"
                alt="${series.title}"
            >

            <span class="series-item-info">

                <strong>
                    ${series.title}
                </strong>

                <small>
                    ${series.genres[0]}
                </small>

            </span>

            ${
                favorites.includes(series.id)

                ? `
                    <i
                        class="fa-solid fa-heart item-favorite"
                    ></i>
                `

                : ""
            }

        `;


        button.addEventListener(
            "click",
            () => {

                selectSeries(originalIndex);

                if (
                    window.innerWidth <= 850
                ) {
                    closeSidebar();
                }

            }
        );


        seriesList.appendChild(button);

    });


    updateCounters();

}


/* =========================================================
   SELECIONAR SÉRIE
========================================================= */

function selectSeries(index) {

    currentSeriesIndex = index;

    const contentCard =
        document.getElementById("contentCard");

    contentCard.classList.remove(
        "content-changing"
    );

    void contentCard.offsetWidth;

    contentCard.classList.add(
        "content-changing"
    );


    renderCurrentSeries();

    renderSeriesList();


    window.history.replaceState(
        null,
        "",
        `#${getCurrentSeries().id}`
    );


    if (
        window.innerWidth <= 850
    ) {

        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });

    }

}


/* =========================================================
   RENDERIZAR SÉRIE ATUAL
========================================================= */

function renderCurrentSeries() {

    const series =
        getCurrentSeries();


    document.title =
        `${series.title} | Blog da Bia`;


    seriesTitle.textContent =
        series.title;


    seriesRating.textContent =
        series.rating.toFixed(1);


    seriesPoster.src =
        series.poster;

    seriesPoster.alt =
        `Poster de ${series.title}`;


    seriesPhrase.textContent =
        series.phrase;


    /* METADADOS */

    seriesMetadata.innerHTML = `

        <span class="metadata-item">
            <i class="fa-regular fa-calendar"></i>
            ${series.year}
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-film"></i>
            ${series.genres.join(" • ")}
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-layer-group"></i>
            ${series.seasons}
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-circle-info"></i>
            ${series.status}
        </span>

        <span class="metadata-item">
            ${series.age}+
        </span>

    `;


    /* DESCRIÇÃO */

    seriesDescription.innerHTML =
        series.description
            .map(
                paragraph =>
                    `<p>${paragraph}</p>`
            )
            .join("");


    /* TAGS */

    tagsContainer.innerHTML =
        series.tags
            .map(
                tag =>
                    `<span class="tag">#${tag}</span>`
            )
            .join("");


    updateFavoriteButton();

    updateVoteDisplay();

    updateStars();

    renderComments();

}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite() {

    const series =
        getCurrentSeries();

    const index =
        favorites.indexOf(series.id);


    if (index === -1) {

        favorites.push(series.id);

        showToast(
            `${series.title} foi adicionada aos favoritos ♡`
        );

    }

    else {

        favorites.splice(index, 1);

        showToast(
            `${series.title} foi removida dos favoritos`,
            "fa-heart-crack"
        );

    }


    saveFavorites();

    updateFavoriteButton();

    renderSeriesList();

    updateCounters();

}


function updateFavoriteButton() {

    const isFavorite =
        favorites.includes(
            getCurrentSeries().id
        );


    favoriteButton.classList.toggle(
        "active",
        isFavorite
    );


    favoriteButton.innerHTML =
        isFavorite

        ? `<i class="fa-solid fa-heart"></i>`

        : `<i class="fa-regular fa-heart"></i>`;

}


function updateCounters() {

    seriesCount.textContent =
        seriesData.length;

    favoritesCount.textContent =
        favorites.length;

}


/* =========================================================
   VOTAÇÃO
========================================================= */

function vote(type) {

    const series =
        getCurrentSeries();

    const previousVote =
        userVotes[series.id];


    if (previousVote === type) {

        delete userVotes[series.id];

        showToast(
            "Seu voto foi removido",
            "fa-rotate-left"
        );

    }

    else {

        userVotes[series.id] = type;

        showToast(
            type === "like"
                ? "Você gostou dessa série ♡"
                : "Opinião registrada!"
        );

    }


    saveVotes();

    updateVoteDisplay();

}


function updateVoteDisplay() {

    const series =
        getCurrentSeries();

    let likes =
        series.votes.like;

    let dislikes =
        series.votes.dislike;


    const vote =
        userVotes[series.id];


    if (vote === "like") {
        likes++;
    }

    if (vote === "dislike") {
        dislikes++;
    }


    const total =
        likes + dislikes;


    const likePercent =
        total === 0
            ? 0
            : Math.round(
                (likes / total) * 100
            );


    const dislikePercent =
        100 - likePercent;


    likePercentage.textContent =
        `${likePercent}%`;

    dislikePercentage.textContent =
        `${dislikePercent}%`;

    voteProgress.style.width =
        `${likePercent}%`;


    likeButton.classList.toggle(
        "active",
        vote === "like"
    );

    dislikeButton.classList.toggle(
        "active",
        vote === "dislike"
    );


    likeButton.querySelector("i").className =
        vote === "like"
            ? "fa-solid fa-thumbs-up"
            : "fa-regular fa-thumbs-up";


    dislikeButton.querySelector("i").className =
        vote === "dislike"
            ? "fa-solid fa-thumbs-down"
            : "fa-regular fa-thumbs-down";

}


/* =========================================================
   AVALIAÇÃO POR ESTRELAS
========================================================= */

function rateSeries(value) {

    const series =
        getCurrentSeries();


    userRatings[series.id] =
        Number(value);


    saveRatings();

    updateStars();


    showToast(
        `Você deu ${value} estrela${
            value > 1 ? "s" : ""
        } para ${series.title}`,
        "fa-star"
    );

}


function updateStars() {

    const series =
        getCurrentSeries();

    const rating =
        userRatings[series.id] || 0;


    const buttons =
        starsContainer.querySelectorAll(
            "button"
        );


    buttons.forEach(button => {

        const star =
            Number(
                button.dataset.star
            );

        const icon =
            button.querySelector("i");


        icon.className =
            star <= rating
                ? "fa-solid fa-star"
                : "fa-regular fa-star";

    });


    userRatingText.textContent =
        rating
            ? `${rating}/5`
            : "ainda não avaliado";

}


/* =========================================================
   MODAIS
========================================================= */

function openTrailer() {

    const series =
        getCurrentSeries();


    trailerModalTitle.textContent =
        `Trailer de ${series.title}`;


    trailerFrame.src =
        series.trailer;


    trailerModal.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


function openCast() {

    const series =
        getCurrentSeries();


    castGrid.innerHTML =
        series.cast
            .map(person => {

                const initials =
                    person[0]
                        .split(" ")
                        .map(name => name[0])
                        .slice(0, 2)
                        .join("");


                return `

                    <div class="cast-card">

                        <div class="cast-avatar">
                            ${initials}
                        </div>

                        <strong>
                            ${person[0]}
                        </strong>

                        <small>
                            ${person[1]}
                        </small>

                    </div>

                `;

            })
            .join("");


    castModal.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


function closeModals() {

    document
        .querySelectorAll(".modal")
        .forEach(
            modal =>
                modal.classList.remove(
                    "open"
                )
        );


    trailerFrame.src = "";


    document.body.style.overflow = "";

}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function renderComments() {

    const series =
        getCurrentSeries();

    const seriesComments =
        comments[series.id] || [];


    commentCounter.textContent =
        `${seriesComments.length} ${
            seriesComments.length === 1
                ? "comentário"
                : "comentários"
        }`;


    if (
        seriesComments.length === 0
    ) {

        commentsList.innerHTML = `

            <div class="empty-comments">
                Ainda não tem comentários.
                Seja a primeira pessoa a comentar ♡
            </div>

        `;

        return;

    }


    commentsList.innerHTML =
        [...seriesComments]
            .reverse()
            .map(comment => `

                <div
                    class="comment-card"
                    data-comment-id="${comment.id}"
                >

                    <div class="comment-card-avatar">
                        B
                    </div>

                    <div class="comment-card-content">

                        <div>

                            <strong>
                                bia
                            </strong>

                            <small>
                                ${comment.date}
                            </small>

                        </div>

                        <p>
                            ${escapeHTML(comment.text)}
                        </p>

                    </div>

                    <button
                        class="delete-comment"
                        data-delete-comment="${comment.id}"
                        title="Excluir comentário"
                    >
                        <i class="fa-regular fa-trash-can"></i>
                    </button>

                </div>

            `)
            .join("");


    document
        .querySelectorAll(
            "[data-delete-comment]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    deleteComment(
                        button.dataset
                            .deleteComment
                    );

                }
            );

        });

}


function addComment(text) {

    const series =
        getCurrentSeries();


    if (!comments[series.id]) {

        comments[series.id] = [];

    }


    comments[series.id].push({

        id:
            Date.now().toString(),

        text: text,

        date:
            new Date()
                .toLocaleDateString(
                    "pt-BR",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    }
                )

    });


    saveComments();

    renderComments();


    showToast(
        "Comentário publicado ♡",
        "fa-comment"
    );

}


function deleteComment(id) {

    const series =
        getCurrentSeries();


    comments[series.id] =
        (
            comments[series.id] || []
        )
        .filter(
            comment =>
                comment.id !== id
        );


    saveComments();

    renderComments();


    showToast(
        "Comentário excluído",
        "fa-trash"
    );

}


/* =========================================================
   PESQUISA
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        searchInput
            .parentElement
            .classList
            .toggle(
                "has-text",
                searchInput.value.length > 0
            );


        renderSeriesList();

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchInput
            .parentElement
            .classList
            .remove("has-text");


        renderSeriesList();

        searchInput.focus();

    }
);


/* =========================================================
   FILTROS
========================================================= */

document
    .querySelectorAll(".filter-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentFilter =
                    button.dataset.filter;


                document
                    .querySelectorAll(
                        ".filter-button"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                renderSeriesList();

            }
        );

    });


/* =========================================================
   PRÓXIMA / ALEATÓRIA
========================================================= */

function nextSeries() {

    const nextIndex =
        (
            currentSeriesIndex + 1
        ) % seriesData.length;


    selectSeries(nextIndex);

}


function randomSeries() {

    let randomIndex;


    do {

        randomIndex =
            Math.floor(
                Math.random() *
                seriesData.length
            );

    }

    while (
        randomIndex === currentSeriesIndex &&
        seriesData.length > 1
    );


    selectSeries(randomIndex);


    showToast(
        `Sorteada: ${getCurrentSeries().title}`,
        "fa-shuffle"
    );

}


/* =========================================================
   COMPARTILHAR
========================================================= */

async function shareSeries() {

    const series =
        getCurrentSeries();


    const shareData = {

        title:
            `${series.title} | Blog da Bia`,

        text:
            `Olha o que eu achei de ${series.title} ♡`,

        url:
            window.location.href

    };


    try {

        if (navigator.share) {

            await navigator.share(
                shareData
            );

        }

        else {

            await navigator
                .clipboard
                .writeText(
                    window.location.href
                );


            showToast(
                "Link copiado para a área de transferência!",
                "fa-link"
            );

        }

    }

    catch (error) {

        console.log(
            "Compartilhamento cancelado."
        );

    }

}


/* =========================================================
   SIDEBAR MOBILE
========================================================= */

function openSidebar() {

    sidebar.classList.add("open");

}


function closeSidebar() {

    sidebar.classList.remove("open");

}


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

function openSettings() {

    settingsPanel.classList.add("open");

    settingsOverlay.classList.add(
        "open"
    );

}


function closeSettings() {

    settingsPanel.classList.remove(
        "open"
    );

    settingsOverlay.classList.remove(
        "open"
    );

}


function applyTheme(theme) {

    document.body.dataset.theme =
        theme;


    preferences.theme =
        theme;


    document
        .querySelectorAll(
            ".theme-option"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.theme ===
                    theme
            );

        });


    savePreferences();

}


function applyFontSize(size) {

    const sizes = {
        small: "14px",
        medium: "16px",
        large: "18px"
    };


    document
        .documentElement
        .style
        .setProperty(
            "--font-size",
            sizes[size]
        );


    preferences.font =
        size;


    document
        .querySelectorAll(
            "[data-font]"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.font ===
                    size
            );

        });


    savePreferences();

}


function applyAnimations(enabled) {

    preferences.animations =
        enabled;


    document.body.classList.toggle(
        "no-animations",
        !enabled
    );


    document.getElementById(
        "animationToggle"
    ).checked = enabled;


    savePreferences();

}


function loadPreferences() {

    applyTheme(
        preferences.theme ||
        "lavender"
    );


    applyFontSize(
        preferences.font ||
        "medium"
    );


    applyAnimations(
        preferences.animations !== false
    );

}


function resetPreferences() {

    preferences = {
        theme: "lavender",
        font: "medium",
        animations: true
    };


    loadPreferences();


    showToast(
        "Preferências restauradas ♡",
        "fa-rotate-left"
    );

}


/* =========================================================
   EVENTOS DOS BOTÕES
========================================================= */

favoriteButton.addEventListener(
    "click",
    toggleFavorite
);


likeButton.addEventListener(
    "click",
    () => vote("like")
);


dislikeButton.addEventListener(
    "click",
    () => vote("dislike")
);


starsContainer
    .querySelectorAll("button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                rateSeries(
                    Number(
                        button.dataset.star
                    )
                );

            }
        );

    });


document
    .getElementById(
        "trailerButton"
    )
    .addEventListener(
        "click",
        openTrailer
    );


document
    .getElementById(
        "posterTrailerButton"
    )
    .addEventListener(
        "click",
        openTrailer
    );


document
    .getElementById(
        "castButton"
    )
    .addEventListener(
        "click",
        openCast
    );


document
    .getElementById(
        "nextSeriesButton"
    )
    .addEventListener(
        "click",
        nextSeries
    );


document
    .getElementById(
        "randomButton"
    )
    .addEventListener(
        "click",
        randomSeries
    );


document
    .getElementById(
        "shareButton"
    )
    .addEventListener(
        "click",
        shareSeries
    );


document
    .getElementById(
        "openSidebar"
    )
    .addEventListener(
        "click",
        openSidebar
    );


document
    .getElementById(
        "closeSidebar"
    )
    .addEventListener(
        "click",
        closeSidebar
    );


document
    .getElementById(
        "settingsButton"
    )
    .addEventListener(
        "click",
        openSettings
    );


document
    .getElementById(
        "closeSettings"
    )
    .addEventListener(
        "click",
        closeSettings
    );


settingsOverlay.addEventListener(
    "click",
    closeSettings
);


/* =========================================================
   EVENTOS CONFIGURAÇÕES
========================================================= */

document
    .querySelectorAll(
        ".theme-option"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                applyTheme(
                    button.dataset.theme
                );

            }
        );

    });


document
    .querySelectorAll(
        "[data-font]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                applyFontSize(
                    button.dataset.font
                );

            }
        );

    });


document
    .getElementById(
        "animationToggle"
    )
    .addEventListener(
        "change",
        event => {

            applyAnimations(
                event.target.checked
            );

        }
    );


document
    .getElementById(
        "resetButton"
    )
    .addEventListener(
        "click",
        resetPreferences
    );


/* =========================================================
   EVENTOS DOS MODAIS
========================================================= */

document
    .querySelectorAll(
        "[data-close-modal]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            closeModals
        );

    });


document
    .querySelectorAll(
        ".modal-backdrop"
    )
    .forEach(backdrop => {

        backdrop.addEventListener(
            "click",
            closeModals
        );

    });


/* =========================================================
   FORMULÁRIO DE COMENTÁRIO
========================================================= */

commentInput.addEventListener(
    "input",
    () => {

        characterCounter.textContent =
            `${commentInput.value.length}/280`;

    }
);


commentForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const text =
            commentInput.value.trim();


        if (!text) {
            return;
        }


        addComment(text);


        commentInput.value = "";

        characterCounter.textContent =
            "0/280";

    }
);


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 500
        );

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   ATALHOS DO TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
            ESC
            Fecha modal/configurações/menu.
        */

        if (event.key === "Escape") {

            closeModals();

            closeSettings();

            closeSidebar();

        }


        /*
            CTRL + K
            Abre a pesquisa.
        */

        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            if (
                window.innerWidth <= 850
            ) {
                openSidebar();
            }

            searchInput.focus();

        }


        /*
            SETA DIREITA
            Próxima série.

            Não funciona quando estiver
            digitando em input/textarea.
        */

        const typing =
            ["INPUT", "TEXTAREA"]
                .includes(
                    document.activeElement.tagName
                );


        if (
            event.key === "ArrowRight" &&
            !typing &&
            !document
                .querySelector(".modal.open")
        ) {

            nextSeries();

        }


        /*
            SETA ESQUERDA
            Série anterior.
        */

        if (
            event.key === "ArrowLeft" &&
            !typing &&
            !document
                .querySelector(".modal.open")
        ) {

            const previousIndex =
                (
                    currentSeriesIndex - 1 +
                    seriesData.length
                ) % seriesData.length;


            selectSeries(
                previousIndex
            );

        }

    }
);


/* =========================================================
   ABRIR SÉRIE PELO HASH DA URL
========================================================= */

function loadSeriesFromHash() {

    const id =
        window.location.hash
            .replace("#", "");


    if (!id) {
        return;
    }


    const index =
        seriesData.findIndex(
            series =>
                series.id === id
        );


    if (index !== -1) {

        currentSeriesIndex =
            index;

    }

}


/* =========================================================
   FALLBACK PARA IMAGENS
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.src =
                "https://placehold.co/500x750/e9d7f5/6d4d7d?text=Blog+da+Bia";

        }

    },
    true
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initialize() {

    loadSeriesFromHash();

    loadPreferences();

    renderSeriesList();

    renderCurrentSeries();

    updateCounters();


    console.log(
        "%c♡ Blog da Bia carregado com sucesso!",
        "color:#a968d5;font-size:16px;font-weight:bold;"
    );

    console.log(
        "Atalhos: Ctrl + K = pesquisa | ← → = trocar série | Esc = fechar"
    );

}


initialize();