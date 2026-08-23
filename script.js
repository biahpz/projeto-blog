"use strict";


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const body = document.body;


/* =========================================================
   BANCO DE DADOS DAS SÉRIES
========================================================= */

const seriesData = [

    {
        id: "stranger-things",

        title: "Stranger Things",

        year: 2016,

        seasons: 5,

        genre: "Ficção científica",

        genres: [
            "Ficção científica",
            "Mistério",
            "Drama"
        ],

        age: "16",

        rating: 4.9,

        poster:
            "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",

        description: [
            "Em Hawkins, uma pequena cidade aparentemente tranquila, o desaparecimento de um garoto dá início a uma sequência de acontecimentos estranhos.",
            "Entre experiências secretas, criaturas assustadoras e amizades que parecem impossíveis de quebrar, Stranger Things mistura suspense, nostalgia e emoção de um jeito que prende do começo ao fim."
        ],

        tags: [
            "amizade",
            "mistério",
            "anos 80",
            "sobrenatural",
            "aventura"
        ],

        quote:
            "Uma daquelas séries que fazem você falar “só mais um episódio” até amanhecer.",

        phrase:
            "Hawkins sempre faz a gente voltar ♡",

        trailer:
            "https://www.youtube.com/embed/b9EkMc79ZSU",

        cast: [
            {
                name: "Millie Bobby Brown",
                role: "Eleven"
            },
            {
                name: "Finn Wolfhard",
                role: "Mike Wheeler"
            },
            {
                name: "Noah Schnapp",
                role: "Will Byers"
            },
            {
                name: "Caleb McLaughlin",
                role: "Lucas Sinclair"
            },
            {
                name: "Gaten Matarazzo",
                role: "Dustin Henderson"
            },
            {
                name: "Sadie Sink",
                role: "Max Mayfield"
            }
        ]
    },


    {
        id: "wednesday",

        title: "Wandinha",

        year: 2022,

        seasons: 2,

        genre: "Mistério",

        genres: [
            "Mistério",
            "Fantasia",
            "Comédia"
        ],

        age: "14",

        rating: 4.8,

        poster:
            "https://image.tmdb.org/t/p/w500/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",

        description: [
            "Wandinha Addams começa uma nova fase de sua vida na Escola Nunca Mais, um lugar cheio de alunos tão diferentes quanto ela.",
            "Enquanto tenta dominar seus poderes, ela acaba envolvida em assassinatos, segredos familiares e um mistério que parece ficar cada vez maior."
        ],

        tags: [
            "mistério",
            "escola",
            "fantasia",
            "humor sombrio",
            "investigação"
        ],

        quote:
            "Estranha, sarcástica e impossível de ignorar.",

        phrase:
            "um pouquinho sombria e perfeita ♡",

        trailer:
            "https://www.youtube.com/embed/Di310WS8zLk",

        cast: [
            {
                name: "Jenna Ortega",
                role: "Wandinha Addams"
            },
            {
                name: "Emma Myers",
                role: "Enid Sinclair"
            },
            {
                name: "Joy Sunday",
                role: "Bianca Barclay"
            },
            {
                name: "Hunter Doohan",
                role: "Tyler Galpin"
            }
        ]
    },


    {
        id: "bridgerton",

        title: "Bridgerton",

        year: 2020,

        seasons: 4,

        genre: "Romance",

        genres: [
            "Romance",
            "Drama",
            "Época"
        ],

        age: "16",

        rating: 4.7,

        poster:
            "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/9R9KI3f0gyLdH8xVJxXJ6x4T6Uk.jpg",

        description: [
            "Em meio à alta sociedade londrina, famílias poderosas disputam prestígio enquanto romances inesperados começam a surgir.",
            "Bridgerton mistura festas luxuosas, fofocas, escândalos e histórias de amor que transformam completamente a vida de seus personagens."
        ],

        tags: [
            "romance",
            "época",
            "drama",
            "família",
            "sociedade"
        ],

        quote:
            "Romance, vestidos lindos e fofoca: combinação perigosa.",

        phrase:
            "Lady Whistledown aprovaria ♡",

        trailer:
            "https://www.youtube.com/embed/gpv7ayf_tyE",

        cast: [
            {
                name: "Nicola Coughlan",
                role: "Penelope Featherington"
            },
            {
                name: "Luke Newton",
                role: "Colin Bridgerton"
            },
            {
                name: "Jonathan Bailey",
                role: "Anthony Bridgerton"
            },
            {
                name: "Simone Ashley",
                role: "Kate Sharma"
            }
        ]
    },


    {
        id: "you",

        title: "You",

        year: 2018,

        seasons: 5,

        genre: "Suspense",

        genres: [
            "Suspense",
            "Crime",
            "Drama"
        ],

        age: "18",

        rating: 4.6,

        poster:
            "https://image.tmdb.org/t/p/w500/oANi0vEE92nuijiZQgPZ88FSxqQ.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/4R9BObP8MJP8S5ZrTCS2j79RrPM.jpg",

        description: [
            "Joe Goldberg parece apenas um homem inteligente e romântico, mas sua obsessão rapidamente mostra um lado muito mais perigoso.",
            "A série acompanha relações, crimes e decisões cada vez mais absurdas enquanto Joe tenta justificar para si mesmo tudo o que faz."
        ],

        tags: [
            "suspense",
            "crime",
            "obsessão",
            "psicológico"
        ],

        quote:
            "Você sabe que não deveria torcer por ele. Mesmo assim, continua assistindo.",

        phrase:
            "problemático? bastante. viciante? também.",

        trailer:
            "https://www.youtube.com/embed/ga1m0wjzscU",

        cast: [
            {
                name: "Penn Badgley",
                role: "Joe Goldberg"
            },
            {
                name: "Charlotte Ritchie",
                role: "Kate"
            },
            {
                name: "Victoria Pedretti",
                role: "Love Quinn"
            }
        ]
    },


    {
        id: "cobra-kai",

        title: "Cobra Kai",

        year: 2018,

        seasons: 6,

        genre: "Ação",

        genres: [
            "Ação",
            "Drama",
            "Comédia"
        ],

        age: "14",

        rating: 4.6,

        poster:
            "https://image.tmdb.org/t/p/w500/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/35SS0nlBhu28cSe7TiO3ZiywZhl.jpg",

        description: [
            "Décadas depois do torneio que marcou suas vidas, Johnny Lawrence e Daniel LaRusso voltam a se encontrar.",
            "Velhas rivalidades reaparecem enquanto uma nova geração começa a aprender karatê e descobrir que os conflitos vão muito além do tatame."
        ],

        tags: [
            "karatê",
            "ação",
            "rivalidade",
            "nostalgia"
        ],

        quote:
            "Às vezes o maior adversário não está do outro lado do tatame.",

        phrase:
            "strike first... depois maratone ♡",

        trailer:
            "https://www.youtube.com/embed/xCwwxNbtK6Y",

        cast: [
            {
                name: "William Zabka",
                role: "Johnny Lawrence"
            },
            {
                name: "Ralph Macchio",
                role: "Daniel LaRusso"
            },
            {
                name: "Xolo Maridueña",
                role: "Miguel Diaz"
            },
            {
                name: "Mary Mouser",
                role: "Samantha LaRusso"
            }
        ]
    },


    {
        id: "outer-banks",

        title: "Outer Banks",

        year: 2020,

        seasons: 4,

        genre: "Aventura",

        genres: [
            "Aventura",
            "Drama",
            "Mistério"
        ],

        age: "16",

        rating: 4.5,

        poster:
            "https://image.tmdb.org/t/p/w500/ovDgO2LPfwdVRfvScAqo9aMiIW.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/4QpKxH614YFIsmiIBVUbsnG2H8w.jpg",

        description: [
            "Um grupo de amigos parte em busca de respostas sobre o desaparecimento do pai de John B.",
            "O que começa como uma investigação acaba levando os Pogues a mapas, tesouros, perseguições e situações cada vez mais perigosas."
        ],

        tags: [
            "aventura",
            "tesouro",
            "amizade",
            "praia"
        ],

        quote:
            "Pogues juntos até o final.",

        phrase:
            "aventura, caos e pôr do sol ♡",

        trailer:
            "https://www.youtube.com/embed/uk_hFfUFXh4",

        cast: [
            {
                name: "Chase Stokes",
                role: "John B"
            },
            {
                name: "Madelyn Cline",
                role: "Sarah Cameron"
            },
            {
                name: "Madison Bailey",
                role: "Kiara"
            },
            {
                name: "Jonathan Daviss",
                role: "Pope"
            },
            {
                name: "Rudy Pankow",
                role: "JJ"
            }
        ]
    },


    {
        id: "lucifer",

        title: "Lucifer",

        year: 2016,

        seasons: 6,

        genre: "Fantasia",

        genres: [
            "Fantasia",
            "Crime",
            "Drama"
        ],

        age: "16",

        rating: 4.8,

        poster:
            "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg",

        description: [
            "Cansado de comandar o inferno, Lucifer Morningstar decide abandonar seu reino e viver em Los Angeles.",
            "Depois de se envolver em uma investigação policial, ele descobre uma nova ocupação e uma pessoa que parece completamente diferente de todas as outras."
        ],

        tags: [
            "fantasia",
            "crime",
            "romance",
            "investigação"
        ],

        quote:
            "Tell me, what is it you truly desire?",

        phrase:
            "crime, romance e um certo diabo charmoso.",

        trailer:
            "https://www.youtube.com/embed/X4bF_quwNtw",

        cast: [
            {
                name: "Tom Ellis",
                role: "Lucifer Morningstar"
            },
            {
                name: "Lauren German",
                role: "Chloe Decker"
            },
            {
                name: "Kevin Alejandro",
                role: "Dan Espinoza"
            }
        ]
    },


    {
        id: "dark",

        title: "Dark",

        year: 2017,

        seasons: 3,

        genre: "Ficção científica",

        genres: [
            "Ficção científica",
            "Mistério",
            "Suspense"
        ],

        age: "16",

        rating: 4.9,

        poster:
            "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/3lBDg3i6nn5R2NKFCJ6oKyUo2j5.jpg",

        description: [
            "O desaparecimento de uma criança revela segredos escondidos por gerações em uma pequena cidade alemã.",
            "Dark transforma viagem no tempo, famílias e acontecimentos aparentemente desconectados em um enorme quebra-cabeça."
        ],

        tags: [
            "tempo",
            "mistério",
            "família",
            "ficção científica"
        ],

        quote:
            "O começo é o fim e o fim é o começo.",

        phrase:
            "prepare o cérebro antes de assistir.",

        trailer:
            "https://www.youtube.com/embed/rrwycJ08PSA",

        cast: [
            {
                name: "Louis Hofmann",
                role: "Jonas Kahnwald"
            },
            {
                name: "Lisa Vicari",
                role: "Martha Nielsen"
            },
            {
                name: "Andreas Pietschmann",
                role: "Jonas adulto"
            }
        ]
    },


    {
        id: "money-heist",

        title: "La Casa de Papel",

        year: 2017,

        seasons: 5,

        genre: "Crime",

        genres: [
            "Crime",
            "Suspense",
            "Drama"
        ],

        age: "16",

        rating: 4.8,

        poster:
            "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",

        description: [
            "Um homem conhecido como Professor reúne um grupo de criminosos para executar um plano extremamente ambicioso.",
            "Dentro da Casa da Moeda, cada etapa precisa acontecer no momento certo, mas sentimentos e decisões inesperadas começam a colocar tudo em risco."
        ],

        tags: [
            "assalto",
            "crime",
            "estratégia",
            "suspense"
        ],

        quote:
            "Bella ciao, bella ciao, bella ciao ciao ciao.",

        phrase:
            "o plano era perfeito... quase.",

        trailer:
            "https://www.youtube.com/embed/_InqQJRqGW4",

        cast: [
            {
                name: "Álvaro Morte",
                role: "Professor"
            },
            {
                name: "Úrsula Corberó",
                role: "Tóquio"
            },
            {
                name: "Pedro Alonso",
                role: "Berlim"
            }
        ]
    },


    {
        id: "queen-gambit",

        title: "O Gambito da Rainha",

        year: 2020,

        seasons: 1,

        genre: "Drama",

        genres: [
            "Drama",
            "Época"
        ],

        age: "16",

        rating: 4.8,

        poster:
            "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",

        backdrop:
            "https://image.tmdb.org/t/p/original/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg",

        description: [
            "Beth Harmon descobre ainda criança um talento extraordinário para o xadrez.",
            "Enquanto cresce e enfrenta adversários cada vez mais fortes, ela também precisa lidar com suas próprias dificuldades fora dos tabuleiros."
        ],

        tags: [
            "xadrez",
            "drama",
            "competição",
            "superação"
        ],

        quote:
            "Às vezes é preciso perder para aprender a vencer.",

        phrase:
            "xeque-mate com muita elegância ♡",

        trailer:
            "https://www.youtube.com/embed/CDrieqwSdgI",

        cast: [
            {
                name: "Anya Taylor-Joy",
                role: "Beth Harmon"
            },
            {
                name: "Thomas Brodie-Sangster",
                role: "Benny Watts"
            },
            {
                name: "Harry Melling",
                role: "Harry Beltik"
            }
        ]
    }

];


/* =========================================================
   ESTADO DO SITE
========================================================= */

const state = {

    currentSeriesId:
        localStorage.getItem(
            "biaCurrentSeries"
        ) ||
        seriesData[0].id,

    filter: "all",

    genre: "all",

    search: "",

    recommendationsSeed: 0

};


/* =========================================================
   ELEMENTOS
========================================================= */

const seriesTitle =
    $("#seriesTitle");

const seriesMetadata =
    $("#seriesMetadata");

const seriesRating =
    $("#seriesRating");

const seriesDescription =
    $("#seriesDescription");

const tagsContainer =
    $("#tagsContainer");

const seriesQuote =
    $("#seriesQuote");

const seriesPoster =
    $("#seriesPoster");

const seriesPhrase =
    $("#seriesPhrase");

const seriesList =
    $("#seriesList");

const favoriteButton =
    $("#favoriteButton");

const posterFavoriteButton =
    $("#posterFavoriteButton");

const trailerButton =
    $("#trailerButton");

const posterTrailerButton =
    $("#posterTrailerButton");

const castButton =
    $("#castButton");

const copyLinkButton =
    $("#copyLinkButton");

const nextSeriesButton =
    $("#nextSeriesButton");

const nextSeriesName =
    $("#nextSeriesName");

const rankingGrid =
    $("#rankingGrid");

const recommendationsGrid =
    $("#recommendationsGrid");

const historyList =
    $("#historyList");

const searchInput =
    $("#searchInput");

const clearSearch =
    $("#clearSearch");

const searchBox =
    $("#searchBox");

const genreSelect =
    $("#genreSelect");

const commentForm =
    $("#commentForm");

const commentInput =
    $("#commentInput");

const characterCounter =
    $("#characterCounter");

const commentsList =
    $("#commentsList");

const commentCounter =
    $("#commentCounter");

const episodeProgress =
    $("#episodeProgress");

const episodeProgressText =
    $("#episodeProgressText");

const starsContainer =
    $("#starsContainer");

const userRatingText =
    $("#userRatingText");

const likeButton =
    $("#likeButton");

const dislikeButton =
    $("#dislikeButton");

const likePercentage =
    $("#likePercentage");

const dislikePercentage =
    $("#dislikePercentage");

const voteProgress =
    $("#voteProgress");

const trailerModal =
    $("#trailerModal");

const trailerFrame =
    $("#trailerFrame");

const trailerModalTitle =
    $("#trailerModalTitle");

const castModal =
    $("#castModal");

const castGrid =
    $("#castGrid");

const searchModal =
    $("#searchModal");

const modalSearchInput =
    $("#modalSearchInput");

const modalSearchResults =
    $("#modalSearchResults");

const settingsPanel =
    $("#settingsPanel");

const settingsOverlay =
    $("#settingsOverlay");

const readingProgress =
    $("#readingProgress");

const backToTop =
    $("#backToTop");

const effectsContainer =
    $("#effectsContainer");

const toastContainer =
    $("#toastContainer");

const cursorGlow =
    $("#cursorGlow");


/* =========================================================
   LOCAL STORAGE
========================================================= */

function getStorage(key, fallback) {

    try {

        const value =
            localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return JSON.parse(value);

    } catch (error) {

        console.warn(
            `Erro ao ler ${key}`,
            error
        );

        return fallback;

    }

}


function setStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.warn(
            `Erro ao salvar ${key}`,
            error
        );

    }

}


/* =========================================================
   DADOS SALVOS
========================================================= */

let favorites =
    getStorage(
        "biaFavorites",
        []
    );

let watchStatus =
    getStorage(
        "biaWatchStatus",
        {}
    );

let progressData =
    getStorage(
        "biaProgress",
        {}
    );

let ratingsData =
    getStorage(
        "biaRatings",
        {}
    );

let opinionsData =
    getStorage(
        "biaOpinions",
        {}
    );

let reactionsData =
    getStorage(
        "biaReactions",
        {}
    );

let commentsData =
    getStorage(
        "biaComments",
        {}
    );

let historyData =
    getStorage(
        "biaHistory",
        []
    );

let settings =
    getStorage(
        "biaSettings",
        {
            theme: "lavender",
            font: "medium",
            animations: true,
            cursor: true,
            effects: true
        }
    );


/* =========================================================
   SÉRIE ATUAL
========================================================= */

function getCurrentSeries() {

    return (
        seriesData.find(
            series =>
                series.id ===
                state.currentSeriesId
        ) ||
        seriesData[0]
    );

}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        String(text);

    return element.innerHTML;

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    icon = "fa-heart"
) {

    const toast =
        document.createElement("div");

    toast.className =
        "toast";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${escapeHTML(message)}</span>
    `;

    toastContainer.appendChild(
        toast
    );

    setTimeout(() => {

        toast.style.opacity =
            "0";

        toast.style.transform =
            "translateX(20px)";

    }, 2700);


    setTimeout(() => {

        toast.remove();

    }, 3100);

}


/* =========================================================
   CORAÇÃO
========================================================= */

function createHeart(
    x = window.innerWidth / 2,
    y = window.innerHeight / 2
) {

    if (!settings.effects) {
        return;
    }

    const hearts = [
        "♡",
        "♥",
        "♡",
        "✦"
    ];

    const heart =
        document.createElement("span");

    heart.className =
        "floating-heart";

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];

    heart.style.left =
        `${x}px`;

    heart.style.top =
        `${y}px`;

    heart.style.color =
        Math.random() > 0.5
            ? "var(--primary)"
            : "var(--primary-3)";

    effectsContainer.appendChild(
        heart
    );

    setTimeout(
        () => heart.remove(),
        1300
    );

}


/* =========================================================
   CONFETE
========================================================= */

function createConfetti(
    x = window.innerWidth / 2,
    y = window.innerHeight / 2
) {

    if (!settings.effects) {
        return;
    }

    const colors = [
        "#b879dc",
        "#e58fc1",
        "#ffd46f",
        "#9e84df",
        "#ef9dac"
    ];

    for (
        let i = 0;
        i < 28;
        i++
    ) {

        const piece =
            document.createElement("span");

        piece.className =
            "confetti-piece";

        piece.style.left =
            `${x}px`;

        piece.style.top =
            `${y}px`;

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.setProperty(
            "--x",
            `${
                Math.random() *
                260 -
                130
            }px`
        );

        piece.style.animationDelay =
            `${
                Math.random() *
                0.12
            }s`;

        effectsContainer.appendChild(
            piece
        );

        setTimeout(
            () => piece.remove(),
            1500
        );

    }

}


/* =========================================================
   RENDER PRINCIPAL
========================================================= */

function renderCurrentSeries() {

    const series =
        getCurrentSeries();


    localStorage.setItem(
        "biaCurrentSeries",
        series.id
    );


    /* TÍTULO */

    seriesTitle.textContent =
        series.title;


    /* NOTA */

    seriesRating.textContent =
        series.rating.toFixed(1);


    /* POSTER */

    seriesPoster.src =
        series.poster;

    seriesPoster.alt =
        `Poster de ${series.title}`;


    /* METADADOS */

    seriesMetadata.innerHTML = `
        <span class="metadata-item">
            <i class="fa-regular fa-calendar"></i>
            ${series.year}
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-layer-group"></i>
            ${series.seasons}
            ${
                series.seasons === 1
                    ? "temporada"
                    : "temporadas"
            }
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-film"></i>
            ${escapeHTML(series.genre)}
        </span>

        <span class="metadata-item">
            <i class="fa-solid fa-user-shield"></i>
            ${series.age}+
        </span>
    `;


    /* DESCRIÇÃO */

    seriesDescription.innerHTML =
        series.description
            .map(
                paragraph => `
                    <p>
                        ${escapeHTML(paragraph)}
                    </p>
                `
            )
            .join("");


    /* TAGS */

    tagsContainer.innerHTML =
        series.tags
            .map(
                tag => `
                    <span class="tag">
                        #${escapeHTML(tag)}
                    </span>
                `
            )
            .join("");


    /* FRASE */

    seriesQuote.innerHTML = `
        <i class="fa-solid fa-quote-left"></i>

        <span>
            ${escapeHTML(series.quote)}
        </span>
    `;

    seriesPhrase.textContent =
        series.phrase;


    /* EFEITO */

    const contentCard =
        $("#contentCard");

    contentCard.classList.remove(
        "content-changing"
    );

    void contentCard.offsetWidth;

    contentCard.classList.add(
        "content-changing"
    );


    updateFavoriteUI();

    updateWatchStatusUI();

    updateProgressUI();

    updateRatingUI();

    updateOpinionUI();

    updateReactionsUI();

    renderComments();

    renderSeriesList();

    updateNextSeries();

    addToHistory(series.id);

    renderHistory();

    updateStatistics();

}


/* =========================================================
   TROCAR SÉRIE
========================================================= */

function selectSeries(id) {

    const exists =
        seriesData.some(
            series =>
                series.id === id
        );

    if (!exists) {
        return;
    }

    state.currentSeriesId =
        id;

    renderCurrentSeries();

    if (
        window.innerWidth <= 850
    ) {

        $("#sidebar")
            .classList.remove(
                "open"
            );

    }

    window.scrollTo({
        top:
            $("#contentCard")
                .offsetTop - 15,

        behavior: "smooth"
    });

}


/* =========================================================
   LISTA LATERAL
========================================================= */

function renderSeriesList() {

    let list =
        [...seriesData];


    /* PESQUISA */

    if (state.search) {

        const term =
            state.search
                .toLowerCase()
                .trim();

        list =
            list.filter(series => {

                const text = `
                    ${series.title}
                    ${series.genre}
                    ${series.genres.join(" ")}
                    ${series.tags.join(" ")}
                `.toLowerCase();

                return text.includes(term);

            });

    }


    /* GÊNERO */

    if (
        state.genre !== "all"
    ) {

        list =
            list.filter(
                series =>
                    series.genres.includes(
                        state.genre
                    )
            );

    }


    /* FAVORITOS */

    if (
        state.filter ===
        "favorite"
    ) {

        list =
            list.filter(
                series =>
                    favorites.includes(
                        series.id
                    )
            );

    }


    /* ASSISTIDOS */

    if (
        state.filter ===
        "watched"
    ) {

        list =
            list.filter(
                series =>
                    watchStatus[
                        series.id
                    ] ===
                    "watched"
            );

    }


    if (!list.length) {

        seriesList.innerHTML = `
            <div class="empty-state">
                Nenhuma série encontrada ♡
            </div>
        `;

        return;

    }


    seriesList.innerHTML =
        list
            .map(series => {

                const favorite =
                    favorites.includes(
                        series.id
                    );

                const status =
                    watchStatus[
                        series.id
                    ];

                return `
                    <button
                        class="series-item
                        ${
                            series.id ===
                            state.currentSeriesId
                                ? "active"
                                : ""
                        }"
                        data-series-id="${series.id}"
                    >

                        <span class="series-dot"></span>

                        <img
                            class="series-thumb"
                            src="${series.poster}"
                            alt=""
                        >

                        <span class="series-item-info">

                            <strong>
                                ${escapeHTML(series.title)}
                            </strong>

                            <small>
                                ${escapeHTML(series.genre)}
                                ·
                                ${series.year}
                            </small>

                        </span>

                        ${
                            favorite
                                ? `
                                    <i
                                        class="fa-solid fa-heart item-favorite"
                                    ></i>
                                `
                                : ""
                        }

                        ${
                            status
                                ? `
                                    <i
                                        class="
                                            fa-solid
                                            ${
                                                status === "watched"
                                                    ? "fa-check"
                                                    : status === "watching"
                                                        ? "fa-play"
                                                        : "fa-bookmark"
                                            }
                                            item-watch-status
                                        "
                                    ></i>
                                `
                                : ""
                        }

                    </button>
                `;

            })
            .join("");

}


/* =========================================================
   CLIQUE LISTA
========================================================= */

seriesList.addEventListener(
    "click",
    event => {

        const item =
            event.target.closest(
                "[data-series-id]"
            );

        if (!item) {
            return;
        }

        selectSeries(
            item.dataset.seriesId
        );

    }
);


/* =========================================================
   GÊNEROS
========================================================= */

function populateGenres() {

    const genres =
        [
            ...new Set(
                seriesData.flatMap(
                    series =>
                        series.genres
                )
            )
        ].sort();


    genreSelect.innerHTML = `
        <option value="all">
            Todos os gêneros
        </option>

        ${
            genres
                .map(
                    genre => `
                        <option value="${genre}">
                            ${genre}
                        </option>
                    `
                )
                .join("")
        }
    `;

}


/* =========================================================
   BUSCA
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        state.search =
            searchInput.value;

        searchBox.classList.toggle(
            "has-text",
            Boolean(
                searchInput.value
            )
        );

        renderSeriesList();

    }
);


clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        state.search = "";

        searchBox.classList.remove(
            "has-text"
        );

        renderSeriesList();

        searchInput.focus();

    }
);


/* =========================================================
   FILTROS
========================================================= */

$$(".filter-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                $$(".filter-button")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );

                button.classList.add(
                    "active"
                );

                state.filter =
                    button.dataset.filter;

                renderSeriesList();

            }
        );

    });


genreSelect.addEventListener(
    "change",
    () => {

        state.genre =
            genreSelect.value;

        renderSeriesList();

    }
);


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(event) {

    const series =
        getCurrentSeries();

    const index =
        favorites.indexOf(
            series.id
        );


    if (index >= 0) {

        favorites.splice(
            index,
            1
        );

        showToast(
            `${series.title} removida dos favoritos`,
            "fa-heart-crack"
        );

    } else {

        favorites.push(
            series.id
        );

        showToast(
            `${series.title} adicionada aos favoritos ♡`,
            "fa-heart"
        );

        const rect =
            event?.currentTarget
                ?.getBoundingClientRect();

        createHeart(
            rect
                ? rect.left +
                  rect.width / 2
                : window.innerWidth / 2,

            rect
                ? rect.top +
                  rect.height / 2
                : window.innerHeight / 2
        );

    }


    setStorage(
        "biaFavorites",
        favorites
    );

    updateFavoriteUI();

    renderSeriesList();

    updateStatistics();

}


favoriteButton.addEventListener(
    "click",
    toggleFavorite
);


posterFavoriteButton.addEventListener(
    "click",
    toggleFavorite
);


function updateFavoriteUI() {

    const active =
        favorites.includes(
            state.currentSeriesId
        );

    [
        favoriteButton,
        posterFavoriteButton
    ].forEach(button => {

        button.classList.toggle(
            "active",
            active
        );

        button.innerHTML =
            active
                ? `<i class="fa-solid fa-heart"></i>`
                : `<i class="fa-regular fa-heart"></i>`;

    });

}


/* =========================================================
   STATUS DE EXIBIÇÃO
========================================================= */

$$("[data-watch-status]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    state.currentSeriesId;

                const newStatus =
                    button.dataset
                        .watchStatus;

                if (
                    watchStatus[id] ===
                    newStatus
                ) {

                    delete watchStatus[
                        id
                    ];

                    showToast(
                        "Status removido",
                        "fa-bookmark"
                    );

                } else {

                    watchStatus[id] =
                        newStatus;

                    const messages = {

                        want:
                            "Adicionada à sua lista ♡",

                        watching:
                            "Marcada como assistindo",

                        watched:
                            "Marcada como assistida ✓"

                    };

                    showToast(
                        messages[
                            newStatus
                        ],
                        "fa-tv"
                    );

                    if (
                        newStatus ===
                        "watched"
                    ) {

                        progressData[id] =
                            100;

                        setStorage(
                            "biaProgress",
                            progressData
                        );

                    }

                }


                setStorage(
                    "biaWatchStatus",
                    watchStatus
                );

                updateWatchStatusUI();

                updateProgressUI();

                renderSeriesList();

                updateStatistics();

            }
        );

    });


function updateWatchStatusUI() {

    const current =
        watchStatus[
            state.currentSeriesId
        ];


    $$("[data-watch-status]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset
                    .watchStatus ===
                    current
            );

        });

}


/* =========================================================
   PROGRESSO
========================================================= */

episodeProgress.addEventListener(
    "input",
    () => {

        const value =
            Number(
                episodeProgress.value
            );

        progressData[
            state.currentSeriesId
        ] = value;


        if (value === 100) {

            watchStatus[
                state.currentSeriesId
            ] = "watched";

            setStorage(
                "biaWatchStatus",
                watchStatus
            );

            updateWatchStatusUI();

        } else if (
            value > 0 &&
            !watchStatus[
                state.currentSeriesId
            ]
        ) {

            watchStatus[
                state.currentSeriesId
            ] = "watching";

            setStorage(
                "biaWatchStatus",
                watchStatus
            );

            updateWatchStatusUI();

        }


        setStorage(
            "biaProgress",
            progressData
        );

        episodeProgressText
            .textContent =
            `${value}%`;

        renderSeriesList();

        updateStatistics();

    }
);


episodeProgress.addEventListener(
    "change",
    () => {

        if (
            Number(
                episodeProgress.value
            ) === 100
        ) {

            showToast(
                "Maratona concluída! ♡",
                "fa-trophy"
            );

            createConfetti();

        }

    }
);


function updateProgressUI() {

    const value =
        progressData[
            state.currentSeriesId
        ] || 0;

    episodeProgress.value =
        value;

    episodeProgressText
        .textContent =
        `${value}%`;

}


/* =========================================================
   AVALIAÇÃO POR ESTRELAS
========================================================= */

$$("[data-star]")
    .forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                paintStars(
                    Number(
                        button.dataset.star
                    )
                );

            }
        );


        button.addEventListener(
            "click",
            event => {

                const rating =
                    Number(
                        button.dataset.star
                    );

                ratingsData[
                    state.currentSeriesId
                ] = rating;

                setStorage(
                    "biaRatings",
                    ratingsData
                );

                updateRatingUI();


                if (rating === 5) {

                    showToast(
                        "5 estrelas! Essa entrou para as favoritas do coração ♡",
                        "fa-star"
                    );

                    const rect =
                        event.currentTarget
                            .getBoundingClientRect();

                    createConfetti(
                        rect.left,
                        rect.top
                    );

                } else {

                    showToast(
                        `Você deu ${rating} ${
                            rating === 1
                                ? "estrela"
                                : "estrelas"
                        }`,
                        "fa-star"
                    );

                }

            }
        );

    });


starsContainer.addEventListener(
    "mouseleave",
    updateRatingUI
);


function paintStars(value) {

    $$("[data-star]")
        .forEach(button => {

            const star =
                Number(
                    button.dataset.star
                );

            button.innerHTML =
                star <= value
                    ? `<i class="fa-solid fa-star"></i>`
                    : `<i class="fa-regular fa-star"></i>`;

        });

}


function updateRatingUI() {

    const rating =
        ratingsData[
            state.currentSeriesId
        ] || 0;

    paintStars(rating);

    if (!rating) {

        userRatingText.textContent =
            "ainda não avaliado";

        return;

    }

    userRatingText.textContent =
        `${rating}/5`;

}


/* =========================================================
   LIKE / DISLIKE
========================================================= */

likeButton.addEventListener(
    "click",
    event => {

        setOpinion(
            "like",
            event
        );

    }
);


dislikeButton.addEventListener(
    "click",
    event => {

        setOpinion(
            "dislike",
            event
        );

    }
);


function setOpinion(
    opinion,
    event
) {

    const id =
        state.currentSeriesId;

    if (
        opinionsData[id] ===
        opinion
    ) {

        delete opinionsData[id];

        showToast(
            "Voto removido",
            "fa-rotate-left"
        );

    } else {

        opinionsData[id] =
            opinion;

        if (
            opinion === "like"
        ) {

            showToast(
                "Você gostou dessa série ♡",
                "fa-thumbs-up"
            );

            const rect =
                event.currentTarget
                    .getBoundingClientRect();

            createHeart(
                rect.left +
                    rect.width / 2,

                rect.top
            );

        } else {

            showToast(
                "Opinião registrada",
                "fa-thumbs-down"
            );

        }

    }


    setStorage(
        "biaOpinions",
        opinionsData
    );

    updateOpinionUI();

}


/* =========================================================
   PERCENTUAIS
========================================================= */

function updateOpinionUI() {

    const opinion =
        opinionsData[
            state.currentSeriesId
        ];

    likeButton.classList.toggle(
        "active",
        opinion === "like"
    );

    dislikeButton.classList.toggle(
        "active",
        opinion === "dislike"
    );


    /*
       Percentual ilustrativo baseado
       na nota do blog + voto local.
    */

    const series =
        getCurrentSeries();

    let like =
        Math.round(
            65 +
            series.rating * 6
        );

    like =
        Math.min(
            98,
            like
        );


    if (opinion === "like") {

        like =
            Math.min(
                99,
                like + 1
            );

    }


    if (
        opinion === "dislike"
    ) {

        like =
            Math.max(
                1,
                like - 3
            );

    }


    const dislike =
        100 - like;


    likePercentage.textContent =
        `${like}%`;

    dislikePercentage.textContent =
        `${dislike}%`;

    voteProgress.style.width =
        `${like}%`;

}


/* =========================================================
   REAÇÕES EMOJI
========================================================= */

$$("[data-reaction]")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const reaction =
                    button.dataset.reaction;

                const id =
                    state.currentSeriesId;


                if (
                    !reactionsData[id]
                ) {

                    reactionsData[id] =
                        {};

                }


                const current =
                    reactionsData[id][
                        reaction
                    ] || false;


                reactionsData[id][
                    reaction
                ] = !current;


                setStorage(
                    "biaReactions",
                    reactionsData
                );


                updateReactionsUI();


                if (!current) {

                    const rect =
                        event.currentTarget
                            .getBoundingClientRect();

                    createHeart(
                        rect.left +
                            rect.width / 2,

                        rect.top
                    );

                }

            }
        );

    });


function updateReactionsUI() {

    const data =
        reactionsData[
            state.currentSeriesId
        ] || {};


    $$("[data-reaction]")
        .forEach(button => {

            const reaction =
                button.dataset.reaction;

            const active =
                Boolean(
                    data[
                        reaction
                    ]
                );

            button.classList.toggle(
                "active",
                active
            );


            const counter =
                $(
                    `[data-reaction-count="${reaction}"]`,
                    button
                );


            /*
                Base decorativa +
                reação deste navegador.
            */

            const baseCounts = {

                love: 48,
                cry: 21,
                shock: 35,
                laugh: 17,
                angry: 8

            };


            counter.textContent =
                baseCounts[
                    reaction
                ] +
                (
                    active
                        ? 1
                        : 0
                );

        });

}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function getCurrentComments() {

    return (
        commentsData[
            state.currentSeriesId
        ] || []
    );

}


commentInput.addEventListener(
    "input",
    () => {

        characterCounter.textContent =
            `${commentInput.value.length}/280`;

    }
);


/* =========================================================
   INSERIR EMOJI
========================================================= */

$$("[data-insert-emoji]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const emoji =
                    button.dataset
                        .insertEmoji;

                const start =
                    commentInput
                        .selectionStart;

                const end =
                    commentInput
                        .selectionEnd;

                const value =
                    commentInput.value;


                commentInput.value =
                    value.slice(
                        0,
                        start
                    ) +
                    emoji +
                    value.slice(
                        end
                    );


                commentInput.focus();

                commentInput
                    .selectionStart =
                    commentInput
                        .selectionEnd =
                        start +
                        emoji.length;


                characterCounter
                    .textContent =
                    `${commentInput.value.length}/280`;

            }
        );

    });


/* =========================================================
   PUBLICAR COMENTÁRIO
========================================================= */

commentForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const text =
            commentInput.value
                .trim();

        if (!text) {
            return;
        }


        const id =
            state.currentSeriesId;

        if (!commentsData[id]) {

            commentsData[id] = [];

        }


        commentsData[id]
            .unshift({

                id:
                    Date.now()
                    .toString(),

                author:
                    "Visitante",

                text,

                date:
                    new Date()
                        .toISOString(),

                likes: 0,

                liked: false,

                replies: []

            });


        setStorage(
            "biaComments",
            commentsData
        );


        commentInput.value =
            "";

        characterCounter.textContent =
            "0/280";


        renderComments();

        updateStatistics();


        showToast(
            "Comentário publicado ♡",
            "fa-comment"
        );

        createHeart(
            window.innerWidth / 2,
            window.innerHeight / 2
        );

    }
);


/* =========================================================
   TEMPO DO COMENTÁRIO
========================================================= */

function formatCommentDate(
    dateString
) {

    const date =
        new Date(
            dateString
        );

    const difference =
        Date.now() -
        date.getTime();

    const minutes =
        Math.floor(
            difference /
            60000
        );


    if (minutes < 1) {

        return "agora";

    }


    if (minutes < 60) {

        return `${minutes} min`;

    }


    const hours =
        Math.floor(
            minutes / 60
        );


    if (hours < 24) {

        return `${hours} h`;

    }


    const days =
        Math.floor(
            hours / 24
        );


    if (days < 7) {

        return `${days} d`;

    }


    return date
        .toLocaleDateString(
            "pt-BR"
        );

}


/* =========================================================
   RENDER COMENTÁRIOS
========================================================= */

function renderComments() {

    const comments =
        getCurrentComments();


    commentCounter.textContent =
        `${comments.length} ${
            comments.length === 1
                ? "comentário"
                : "comentários"
        }`;


    if (!comments.length) {

        commentsList.innerHTML = `
            <div class="empty-state">
                Ainda não tem comentário aqui.
                Seja a primeira pessoa a comentar ♡
            </div>
        `;

        return;

    }


    commentsList.innerHTML =
        comments
            .map(comment => {

                const replies =
                    comment.replies || [];

                return `
                    <article
                        class="comment-card"
                        data-comment-id="${comment.id}"
                    >

                        <div class="comment-card-avatar">
                            ${escapeHTML(
                                comment.author
                                    .charAt(0)
                                    .toUpperCase()
                            )}
                        </div>


                        <div class="comment-card-content">

                            <div class="comment-card-meta">

                                <strong>
                                    ${escapeHTML(comment.author)}
                                </strong>

                                <small>
                                    ${formatCommentDate(comment.date)}
                                </small>

                            </div>


                            <p>
                                ${escapeHTML(comment.text)}
                            </p>


                            <div class="comment-card-actions">

                                <button
                                    class="
                                        comment-action-button
                                        comment-like-button
                                        ${
                                            comment.liked
                                                ? "active"
                                                : ""
                                        }
                                    "
                                    data-comment-like="${comment.id}"
                                >

                                    <i
                                        class="${
                                            comment.liked
                                                ? "fa-solid"
                                                : "fa-regular"
                                        } fa-heart"
                                    ></i>

                                    ${
                                        comment.likes || 0
                                    }

                                </button>


                                <button
                                    class="comment-action-button"
                                    data-comment-reply="${comment.id}"
                                >

                                    <i class="fa-regular fa-comment"></i>

                                    responder

                                </button>

                            </div>


                            <form
                                class="reply-form"
                                data-reply-form="${comment.id}"
                            >

                                <input
                                    type="text"
                                    maxlength="180"
                                    placeholder="Escreva uma resposta..."
                                    required
                                >

                                <button type="submit">
                                    enviar
                                </button>

                            </form>


                            ${
                                replies.length
                                    ? `
                                        <div class="comment-replies">

                                            ${
                                                replies
                                                    .map(
                                                        reply => `
                                                            <div class="comment-reply">

                                                                <strong>
                                                                    ${escapeHTML(reply.author)}
                                                                </strong>

                                                                <p>
                                                                    ${escapeHTML(reply.text)}
                                                                </p>

                                                            </div>
                                                        `
                                                    )
                                                    .join("")
                                            }

                                        </div>
                                    `
                                    : ""
                            }

                        </div>


                        <button
                            class="delete-comment"
                            data-comment-delete="${comment.id}"
                            title="Excluir comentário"
                        >

                            <i class="fa-regular fa-trash-can"></i>

                        </button>

                    </article>
                `;

            })
            .join("");

}


/* =========================================================
   AÇÕES DOS COMENTÁRIOS
========================================================= */

commentsList.addEventListener(
    "click",
    event => {

        const like =
            event.target.closest(
                "[data-comment-like]"
            );

        const reply =
            event.target.closest(
                "[data-comment-reply]"
            );

        const remove =
            event.target.closest(
                "[data-comment-delete]"
            );


        /* CURTIR */

        if (like) {

            toggleCommentLike(
                like.dataset
                    .commentLike
            );

            return;

        }


        /* RESPONDER */

        if (reply) {

            const form =
                $(
                    `[data-reply-form="${reply.dataset.commentReply}"]`
                );

            if (form) {

                form.classList.toggle(
                    "open"
                );

                if (
                    form.classList
                        .contains(
                            "open"
                        )
                ) {

                    $("input", form)
                        .focus();

                }

            }

            return;

        }


        /* EXCLUIR */

        if (remove) {

            deleteComment(
                remove.dataset
                    .commentDelete
            );

        }

    }
);


/* =========================================================
   RESPOSTAS
========================================================= */

commentsList.addEventListener(
    "submit",
    event => {

        const form =
            event.target.closest(
                "[data-reply-form]"
            );

        if (!form) {
            return;
        }

        event.preventDefault();


        const input =
            $("input", form);

        const text =
            input.value.trim();

        if (!text) {
            return;
        }


        const commentId =
            form.dataset.replyForm;

        const comments =
            getCurrentComments();

        const comment =
            comments.find(
                item =>
                    item.id ===
                    commentId
            );


        if (!comment) {
            return;
        }


        if (!comment.replies) {

            comment.replies = [];

        }


        comment.replies.push({

            id:
                Date.now()
                    .toString(),

            author:
                "Visitante",

            text,

            date:
                new Date()
                    .toISOString()

        });


        commentsData[
            state.currentSeriesId
        ] = comments;


        setStorage(
            "biaComments",
            commentsData
        );


        renderComments();

        updateStatistics();


        showToast(
            "Resposta publicada ♡",
            "fa-reply"
        );

    }
);


/* =========================================================
   CURTIR COMENTÁRIO
========================================================= */

function toggleCommentLike(
    commentId
) {

    const comments =
        getCurrentComments();

    const comment =
        comments.find(
            item =>
                item.id ===
                commentId
        );

    if (!comment) {
        return;
    }


    comment.liked =
        !comment.liked;


    comment.likes =
        Math.max(
            0,
            (
                comment.likes ||
                0
            ) +
            (
                comment.liked
                    ? 1
                    : -1
            )
        );


    commentsData[
        state.currentSeriesId
    ] = comments;


    setStorage(
        "biaComments",
        commentsData
    );


    renderComments();

}


/* =========================================================
   EXCLUIR COMENTÁRIO
========================================================= */

function deleteComment(
    commentId
) {

    const comments =
        getCurrentComments()
            .filter(
                comment =>
                    comment.id !==
                    commentId
            );


    commentsData[
        state.currentSeriesId
    ] = comments;


    setStorage(
        "biaComments",
        commentsData
    );


    renderComments();

    updateStatistics();


    showToast(
        "Comentário removido",
        "fa-trash"
    );

}


/* =========================================================
   TRAILER
========================================================= */

function openTrailer() {

    const series =
        getCurrentSeries();

    trailerModalTitle.textContent =
        `${series.title} — trailer`;

    trailerFrame.src =
        `${series.trailer}?autoplay=1`;

    openModal(
        trailerModal
    );

}


trailerButton.addEventListener(
    "click",
    openTrailer
);


posterTrailerButton.addEventListener(
    "click",
    openTrailer
);


/* =========================================================
   ELENCO
========================================================= */

castButton.addEventListener(
    "click",
    () => {

        const series =
            getCurrentSeries();


        castGrid.innerHTML =
            series.cast
                .map(person => {

                    const initials =
                        person.name
                            .split(" ")
                            .slice(0, 2)
                            .map(
                                word =>
                                    word[0]
                            )
                            .join("");

                    return `
                        <div class="cast-card">

                            <div class="cast-avatar">
                                ${escapeHTML(initials)}
                            </div>

                            <strong>
                                ${escapeHTML(person.name)}
                            </strong>

                            <small>
                                ${escapeHTML(person.role)}
                            </small>

                        </div>
                    `;

                })
                .join("");


        openModal(
            castModal
        );

    }
);


/* =========================================================
   MODAIS
========================================================= */

function openModal(modal) {

    modal.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";

}


function closeModal(modal) {

    modal.classList.remove(
        "open"
    );


    if (
        modal ===
        trailerModal
    ) {

        trailerFrame.src = "";

    }


    if (
        !$(".modal.open") &&
        !settingsPanel.classList
            .contains("open")
    ) {

        body.style.overflow =
            "";

    }

}


$$("[data-close-modal]")
    .forEach(element => {

        element.addEventListener(
            "click",
            () => {

                const modal =
                    element.closest(
                        ".modal"
                    );

                if (modal) {

                    closeModal(
                        modal
                    );

                }

            }
        );

    });


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            $$(".modal.open")
                .forEach(
                    closeModal
                );

            closeSettings();

            $("#sidebar")
                .classList.remove(
                    "open"
                );

        }

    }
);


/* =========================================================
   COPIAR LINK
========================================================= */

copyLinkButton.addEventListener(
    "click",
    async () => {

        const url =
            `${window.location.href.split("#")[0]}#${state.currentSeriesId}`;


        try {

            await navigator
                .clipboard
                .writeText(url);

            showToast(
                "Link copiado ♡",
                "fa-link"
            );

        } catch {

            showToast(
                "Não foi possível copiar automaticamente",
                "fa-triangle-exclamation"
            );

        }

    }
);


/* =========================================================
   COMPARTILHAR
========================================================= */

$("#shareButton")
    .addEventListener(
        "click",
        async () => {

            const series =
                getCurrentSeries();

            const data = {

                title:
                    `Blog da Bia — ${series.title}`,

                text:
                    `Olha essa série no Blog da Bia: ${series.title} ♡`,

                url:
                    window.location.href

            };


            if (
                navigator.share
            ) {

                try {

                    await navigator
                        .share(data);

                } catch {
                    /* usuário cancelou */
                }

            } else {

                try {

                    await navigator
                        .clipboard
                        .writeText(
                            window.location.href
                        );

                    showToast(
                        "Link copiado para compartilhar ♡",
                        "fa-share-nodes"
                    );

                } catch {

                    showToast(
                        "Compartilhamento não disponível",
                        "fa-share-nodes"
                    );

                }

            }

        }
    );


/* =========================================================
   PRÓXIMA SÉRIE
========================================================= */

function updateNextSeries() {

    const currentIndex =
        seriesData.findIndex(
            series =>
                series.id ===
                state.currentSeriesId
        );

    const next =
        seriesData[
            (
                currentIndex + 1
            ) %
            seriesData.length
        ];

    nextSeriesName.textContent =
        next.title;

}


nextSeriesButton.addEventListener(
    "click",
    () => {

        const currentIndex =
            seriesData.findIndex(
                series =>
                    series.id ===
                    state.currentSeriesId
            );

        const next =
            seriesData[
                (
                    currentIndex + 1
                ) %
                seriesData.length
            ];

        selectSeries(
            next.id
        );

    }
);


/* =========================================================
   SÉRIE ALEATÓRIA
========================================================= */

$("#randomButton")
    .addEventListener(
        "click",
        () => {

            let random;

            do {

                random =
                    seriesData[
                        Math.floor(
                            Math.random() *
                            seriesData.length
                        )
                    ];

            } while (
                random.id ===
                    state.currentSeriesId &&
                seriesData.length > 1
            );


            selectSeries(
                random.id
            );


            showToast(
                `Que tal ${random.title}? ✦`,
                "fa-shuffle"
            );

        }
    );


/* =========================================================
   RANKING
========================================================= */

function renderRanking() {

    const ranking =
        [...seriesData]
            .sort(
                (a, b) =>
                    b.rating -
                    a.rating
            )
            .slice(
                0,
                5
            );


    rankingGrid.innerHTML =
        ranking
            .map(
                (series, index) => `
                    <article
                        class="ranking-card"
                        data-ranking-series="${series.id}"
                    >

                        <span class="ranking-position">
                            ${index + 1}
                        </span>

                        <img
                            src="${series.poster}"
                            alt="${escapeHTML(series.title)}"
                        >

                        <div class="ranking-card-info">

                            <strong>
                                ${escapeHTML(series.title)}
                            </strong>

                            <span>

                                <i class="fa-solid fa-star"></i>

                                ${series.rating.toFixed(1)}

                            </span>

                        </div>

                    </article>
                `
            )
            .join("");

}


rankingGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                "[data-ranking-series]"
            );

        if (!card) {
            return;
        }

        selectSeries(
            card.dataset
                .rankingSeries
        );

    }
);


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function shuffleArray(array) {

    const copy =
        [...array];

    for (
        let i =
            copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] = [
            copy[j],
            copy[i]
        ];

    }

    return copy;

}


function renderRecommendations() {

    const current =
        getCurrentSeries();


    let related =
        seriesData.filter(
            series =>
                series.id !==
                    current.id &&
                series.genres.some(
                    genre =>
                        current.genres
                            .includes(
                                genre
                            )
                )
        );


    let others =
        seriesData.filter(
            series =>
                series.id !==
                    current.id &&
                !related.some(
                    item =>
                        item.id ===
                        series.id
                )
        );


    related =
        shuffleArray(
            related
        );

    others =
        shuffleArray(
            others
        );


    const recommendations =
        [
            ...related,
            ...others
        ].slice(
            0,
            4
        );


    recommendationsGrid
        .innerHTML =
        recommendations
            .map(
                series => `
                    <article
                        class="recommendation-card"
                        data-recommendation="${series.id}"
                    >

                        <img
                            src="${series.backdrop || series.poster}"
                            alt="${escapeHTML(series.title)}"
                        >

                        <div class="recommendation-overlay">

                            <strong>
                                ${escapeHTML(series.title)}
                            </strong>

                            <span>
                                ${escapeHTML(series.genre)}
                                ·
                                ⭐ ${series.rating.toFixed(1)}
                            </span>

                        </div>

                    </article>
                `
            )
            .join("");

}


recommendationsGrid
    .addEventListener(
        "click",
        event => {

            const card =
                event.target.closest(
                    "[data-recommendation]"
                );

            if (!card) {
                return;
            }

            selectSeries(
                card.dataset
                    .recommendation
            );

        }
    );


$("#refreshRecommendations")
    .addEventListener(
        "click",
        () => {

            renderRecommendations();

            showToast(
                "Novas sugestões para você ✦",
                "fa-wand-magic-sparkles"
            );

        }
    );


/* =========================================================
   HISTÓRICO
========================================================= */

function addToHistory(id) {

    historyData =
        historyData.filter(
            item =>
                item.id !== id
        );


    historyData.unshift({

        id,

        date:
            new Date()
                .toISOString()

    });


    historyData =
        historyData.slice(
            0,
            8
        );


    setStorage(
        "biaHistory",
        historyData
    );

}


function renderHistory() {

    if (!historyData.length) {

        historyList.innerHTML = `
            <div class="empty-state">
                Seu histórico está vazio.
            </div>
        `;

        return;

    }


    historyList.innerHTML =
        historyData
            .map(item => {

                const series =
                    seriesData.find(
                        series =>
                            series.id ===
                            item.id
                    );

                if (!series) {
                    return "";
                }


                return `
                    <button
                        class="history-item"
                        data-history-series="${series.id}"
                    >

                        <img
                            src="${series.poster}"
                            alt=""
                        >

                        <span class="history-item-info">

                            <strong>
                                ${escapeHTML(series.title)}
                            </strong>

                            <small>
                                visto recentemente
                            </small>

                        </span>

                    </button>
                `;

            })
            .join("");

}


historyList.addEventListener(
    "click",
    event => {

        const item =
            event.target.closest(
                "[data-history-series]"
            );

        if (!item) {
            return;
        }

        selectSeries(
            item.dataset
                .historySeries
        );

    }
);


$("#clearHistoryButton")
    .addEventListener(
        "click",
        () => {

            historyData = [];

            setStorage(
                "biaHistory",
                historyData
            );

            renderHistory();

            showToast(
                "Histórico limpo",
                "fa-trash"
            );

        }
    );


/* =========================================================
   ESTATÍSTICAS
========================================================= */

function updateStatistics() {

    const watched =
        Object.values(
            watchStatus
        )
            .filter(
                status =>
                    status ===
                    "watched"
            )
            .length;


    const comments =
        Object.values(
            commentsData
        )
            .reduce(
                (
                    total,
                    seriesComments
                ) => {

                    const replies =
                        seriesComments
                            .reduce(
                                (
                                    sum,
                                    comment
                                ) =>
                                    sum +
                                    (
                                        comment.replies
                                            ?.length ||
                                        0
                                    ),
                                0
                            );

                    return (
                        total +
                        seriesComments.length +
                        replies
                    );

                },
                0
            );


    $("#seriesCount")
        .textContent =
        seriesData.length;

    $("#favoritesCount")
        .textContent =
        favorites.length;

    $("#watchedCount")
        .textContent =
        watched;


    $("#totalSeriesStat")
        .textContent =
        seriesData.length;

    $("#totalFavoritesStat")
        .textContent =
        favorites.length;

    $("#totalWatchedStat")
        .textContent =
        watched;

    $("#totalCommentsStat")
        .textContent =
        comments;

}


/* =========================================================
   CONTADOR DE VISITAS LOCAL
========================================================= */

function updateVisitCounter() {

    const sessionKey =
        "biaVisitSession";

    let visits =
        Number(
            localStorage.getItem(
                "biaVisits"
            )
        ) || 0;


    if (
        !sessionStorage.getItem(
            sessionKey
        )
    ) {

        visits++;

        localStorage.setItem(
            "biaVisits",
            visits
        );

        sessionStorage.setItem(
            sessionKey,
            "true"
        );

    }


    $("#visitCounter")
        .textContent =
        visits;

}


/* =========================================================
   PESQUISA MODAL
========================================================= */

$("#searchButton")
    .addEventListener(
        "click",
        () => {

            openModal(
                searchModal
            );

            modalSearchInput.value =
                "";

            renderModalSearch("");

            setTimeout(
                () =>
                    modalSearchInput
                        .focus(),
                150
            );

        }
    );


modalSearchInput
    .addEventListener(
        "input",
        () => {

            renderModalSearch(
                modalSearchInput.value
            );

        }
    );


function renderModalSearch(
    term
) {

    const normalized =
        term
            .toLowerCase()
            .trim();


    const results =
        seriesData.filter(
            series => {

                if (!normalized) {
                    return true;
                }

                return `
                    ${series.title}
                    ${series.genre}
                    ${series.genres.join(" ")}
                `
                    .toLowerCase()
                    .includes(
                        normalized
                    );

            }
        );


    if (!results.length) {

        modalSearchResults
            .innerHTML = `
                <div class="empty-state">
                    Nenhuma série encontrada ♡
                </div>
            `;

        return;

    }


    modalSearchResults
        .innerHTML =
        results
            .map(
                series => `
                    <button
                        class="modal-search-result"
                        data-modal-series="${series.id}"
                    >

                        <img
                            src="${series.poster}"
                            alt=""
                        >

                        <span>

                            <strong>
                                ${escapeHTML(series.title)}
                            </strong>

                            <small>
                                ${escapeHTML(series.genre)}
                                ·
                                ${series.year}
                            </small>

                        </span>

                        <i class="fa-solid fa-arrow-right"></i>

                    </button>
                `
            )
            .join("");

}


modalSearchResults
    .addEventListener(
        "click",
        event => {

            const result =
                event.target.closest(
                    "[data-modal-series]"
                );

            if (!result) {
                return;
            }

            closeModal(
                searchModal
            );

            selectSeries(
                result.dataset
                    .modalSeries
            );

        }
    );


/* =========================================================
   SETTINGS
========================================================= */

$("#settingsButton")
    .addEventListener(
        "click",
        openSettings
    );


$("#closeSettings")
    .addEventListener(
        "click",
        closeSettings
    );


settingsOverlay.addEventListener(
    "click",
    closeSettings
);


function openSettings() {

    settingsPanel.classList.add(
        "open"
    );

    settingsOverlay.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";

}


function closeSettings() {

    settingsPanel.classList.remove(
        "open"
    );

    settingsOverlay.classList.remove(
        "open"
    );


    if (!$(".modal.open")) {

        body.style.overflow =
            "";

    }

}


/* =========================================================
   TEMA
========================================================= */

$$("[data-theme]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                settings.theme =
                    button.dataset.theme;

                saveSettings();

                applySettings();

                showToast(
                    "Tema alterado ♡",
                    "fa-palette"
                );

            }
        );

    });


/* =========================================================
   FONTE
========================================================= */

$$("[data-font]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                settings.font =
                    button.dataset.font;

                saveSettings();

                applySettings();

            }
        );

    });


/* =========================================================
   TOGGLES
========================================================= */

$("#animationToggle")
    .addEventListener(
        "change",
        event => {

            settings.animations =
                event.target.checked;

            saveSettings();

            applySettings();

        }
    );


$("#cursorToggle")
    .addEventListener(
        "change",
        event => {

            settings.cursor =
                event.target.checked;

            saveSettings();

            applySettings();

        }
    );


$("#effectsToggle")
    .addEventListener(
        "change",
        event => {

            settings.effects =
                event.target.checked;

            saveSettings();

            applySettings();

        }
    );


function saveSettings() {

    setStorage(
        "biaSettings",
        settings
    );

}


/* =========================================================
   APLICAR SETTINGS
========================================================= */

function applySettings() {

    /* TEMA */

    if (
        settings.theme ===
        "lavender"
    ) {

        body.removeAttribute(
            "data-theme"
        );

    } else {

        body.dataset.theme =
            settings.theme;

    }


    /* BOTÕES DE TEMA */

    $$("[data-theme]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.theme ===
                    settings.theme
            );

        });


    /* FONTE */

    const sizes = {

        small: "14px",
        medium: "16px",
        large: "18px"

    };


    document.documentElement
        .style.setProperty(
            "--font-size",
            sizes[
                settings.font
            ] ||
            "16px"
        );


    $$("[data-font]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.font ===
                    settings.font
            );

        });


    /* ANIMAÇÕES */

    body.classList.toggle(
        "no-animations",
        !settings.animations
    );


    /* CURSOR */

    body.classList.toggle(
        "no-cursor-glow",
        !settings.cursor
    );


    /* CHECKBOX */

    $("#animationToggle")
        .checked =
        settings.animations;

    $("#cursorToggle")
        .checked =
        settings.cursor;

    $("#effectsToggle")
        .checked =
        settings.effects;

}


/* =========================================================
   RESET SETTINGS
========================================================= */

$("#resetSettingsButton")
    .addEventListener(
        "click",
        () => {

            settings = {

                theme:
                    "lavender",

                font:
                    "medium",

                animations:
                    true,

                cursor:
                    true,

                effects:
                    true

            };


            saveSettings();

            applySettings();


            showToast(
                "Preferências restauradas",
                "fa-rotate-left"
            );

        }
    );


/* =========================================================
   CURSOR
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        if (!settings.cursor) {
            return;
        }

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================================
   PROGRESSO DA PÁGINA
========================================================= */

function updateReadingProgress() {

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    const percentage =
        height > 0
            ? (
                scrollTop /
                height
            ) * 100
            : 0;


    readingProgress.style.width =
        `${percentage}%`;


    backToTop.classList.toggle(
        "show",
        scrollTop > 450
    );

}


window.addEventListener(
    "scroll",
    updateReadingProgress,
    {
        passive: true
    }
);


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


backToTop.addEventListener(
    "click",
    scrollToTop
);


$("#footerTopButton")
    .addEventListener(
        "click",
        scrollToTop
    );


$("#logoButton")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            scrollToTop();

        }
    );


/* =========================================================
   MENU MOBILE
========================================================= */

$("#openSidebar")
    .addEventListener(
        "click",
        () => {

            $("#sidebar")
                .classList.add(
                    "open"
                );

        }
    );


$("#closeSidebar")
    .addEventListener(
        "click",
        () => {

            $("#sidebar")
                .classList.remove(
                    "open"
                );

        }
    );


/* =========================================================
   NAVEGAÇÃO RÁPIDA
========================================================= */

$$("[data-scroll]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const target =
                    document.getElementById(
                        button.dataset.scroll
                    );

                if (!target) {
                    return;
                }


                $$(".quick-nav-item")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );


                button.classList.add(
                    "active"
                );


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


/* =========================================================
   CORAÇÃO DOS DESENVOLVEDORES
========================================================= */

$("#sendHeartButton")
    .addEventListener(
        "click",
        event => {

            const rect =
                event.currentTarget
                    .getBoundingClientRect();


            for (
                let i = 0;
                i < 8;
                i++
            ) {

                setTimeout(
                    () => {

                        createHeart(
                            rect.left +
                                Math.random() *
                                rect.width,

                            rect.top +
                                Math.random() *
                                rect.height
                        );

                    },
                    i * 80
                );

            }


            showToast(
                "Bayerlee e Beatriz receberam seu coração ♡",
                "fa-heart"
            );

        }
    );


/* =========================================================
   REVEAL AO ROLAR
========================================================= */

function initializeReveal() {

    const elements =
        $$(".reveal");


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList.add(
                                    "visible"
                                );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* =========================================================
   HASH DA URL
========================================================= */

function loadSeriesFromHash() {

    const hash =
        window.location.hash
            .replace(
                "#",
                ""
            );

    if (!hash) {
        return;
    }


    const exists =
        seriesData.some(
            series =>
                series.id === hash
        );


    if (exists) {

        state.currentSeriesId =
            hash;

    }

}


/* =========================================================
   ATALHOS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const target =
            event.target;

        const typing =
            target.matches(
                "input, textarea, select"
            );


        if (typing) {
            return;
        }


        /*
            "/" abre pesquisa
        */

        if (
            event.key === "/"
        ) {

            event.preventDefault();

            $("#searchButton")
                .click();

        }


        /*
            F = favoritar
        */

        if (
            event.key
                .toLowerCase() ===
            "f"
        ) {

            favoriteButton.click();

        }


        /*
            R = aleatória
        */

        if (
            event.key
                .toLowerCase() ===
            "r"
        ) {

            $("#randomButton")
                .click();

        }


        /*
            SETA DIREITA =
            próxima série
        */

        if (
            event.key ===
            "ArrowRight"
        ) {

            nextSeriesButton.click();

        }

    }
);


/* =========================================================
   DUPLO CLIQUE = CORAÇÃO
========================================================= */

document.addEventListener(
    "dblclick",
    event => {

        if (
            event.target.closest(
                "button, input, textarea, select"
            )
        ) {
            return;
        }

        createHeart(
            event.clientX,
            event.clientY
        );

    }
);


/* =========================================================
   RECOMENDAÇÕES AO TROCAR SÉRIE
========================================================= */

const originalRenderCurrentSeries =
    renderCurrentSeries;


renderCurrentSeries =
    function () {

        originalRenderCurrentSeries();

        renderRecommendations();

    };


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function init() {

    loadSeriesFromHash();

    populateGenres();

    applySettings();

    renderRanking();

    renderCurrentSeries();

    renderRecommendations();

    renderHistory();

    updateStatistics();

    updateVisitCounter();

    updateReadingProgress();

    initializeReveal();


    setTimeout(
        () => {

            showToast(
                "Bem-vindo ao Blog da Bia ♡",
                "fa-heart"
            );

        },
        700
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);