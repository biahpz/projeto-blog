"use strict";


/* =========================================================
   HELPERS
========================================================= */

const $ = (
    selector,
    parent = document
) =>
    parent.querySelector(selector);


const $$ = (
    selector,
    parent = document
) =>
    [...parent.querySelectorAll(selector)];


const body =
    document.body;


/* =========================================================
   20 SÉRIES DO BLOG

   apiName = nome usado para encontrar a série no TVMaze
   expectedYear = evita pegar remake/série errada
========================================================= */

const seriesData = [

    {
        id: "stranger-things",
        title: "Stranger Things",
        apiName: "Stranger Things",
        expectedYear: 2016,
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

        description: [
            "Em Hawkins, o desaparecimento de um garoto revela experimentos secretos, acontecimentos sobrenaturais e uma dimensão assustadora.",
            "A amizade do grupo continua sendo uma das partes mais marcantes da série enquanto os perigos ficam cada vez maiores."
        ],

        tags: [
            "anos 80",
            "amizade",
            "mistério",
            "sobrenatural"
        ],

        quote:
            "Hawkins nunca consegue ficar tranquila por muito tempo.",

        phrase:
            "uma das favoritas ♡",

        trailer:
            "https://www.youtube.com/embed/b9EkMc79ZSU"
    },


    {
        id: "riverdale",
        title: "Riverdale",
        apiName: "Riverdale",
        expectedYear: 2017,
        year: 2017,
        seasons: 7,
        genre: "Drama",
        genres: [
            "Drama",
            "Mistério",
            "Romance"
        ],
        age: "16",
        rating: 4.0,

        description: [
            "Archie, Betty, Veronica e Jughead vivem em uma cidade onde praticamente todo mundo parece esconder alguma coisa.",
            "Romances, crimes, investigações e acontecimentos cada vez mais estranhos transformam Riverdale em puro caos adolescente."
        ],

        tags: [
            "adolescente",
            "mistério",
            "romance",
            "crime"
        ],

        quote:
            "Uma semana tranquila em Riverdale parece ser impossível.",

        phrase:
            "caótica do começo ao fim.",

        trailer:
            "https://www.youtube.com/embed/HxtLlByaYTc"
    },


    {
        id: "gossip-girl",
        title: "Gossip Girl",
        apiName: "Gossip Girl",
        expectedYear: 2007,
        year: 2007,
        seasons: 6,
        genre: "Drama",
        genres: [
            "Drama",
            "Romance"
        ],
        age: "16",
        rating: 4.5,

        description: [
            "No Upper East Side de Manhattan, jovens privilegiados têm seus segredos publicados por uma blogueira anônima.",
            "Luxo, amizade, romance, traições e fofocas fizeram Gossip Girl se tornar uma das séries adolescentes mais lembradas."
        ],

        tags: [
            "Nova York",
            "romance",
            "fofoca",
            "luxo"
        ],

        quote:
            "Nenhum segredo dura para sempre no Upper East Side.",

        phrase:
            "xoxo, Gossip Girl ♡",

        trailer:
            "https://www.youtube.com/embed/eCg1RN-dyQk"
    },


    {
        id: "you",
        title: "You",
        apiName: "You",
        expectedYear: 2018,
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

        description: [
            "Joe Goldberg parece inteligente e romântico, mas sua maneira de enxergar relacionamentos rapidamente revela um lado obsessivo.",
            "A série coloca o espectador dentro de seus pensamentos enquanto Joe tenta justificar decisões cada vez mais perigosas."
        ],

        tags: [
            "crime",
            "obsessão",
            "psicológico",
            "suspense"
        ],

        quote:
            "Joe sempre encontra uma desculpa para o indesculpável.",

        phrase:
            "problemática e viciante.",

        trailer:
            "https://www.youtube.com/embed/ga1m0wjzscU"
    },


    {
        id: "la-casa-de-papel",
        title: "La Casa de Papel",
        apiName: "Money Heist",
        expectedYear: 2017,
        year: 2017,
        seasons: 5,
        genre: "Crime",
        genres: [
            "Crime",
            "Drama",
            "Suspense"
        ],
        age: "16",
        rating: 4.8,

        description: [
            "O Professor reúne criminosos com diferentes habilidades para colocar em prática um plano extremamente ambicioso.",
            "Estratégia, relacionamentos, ação e inúmeras reviravoltas tornam cada etapa ainda mais imprevisível."
        ],

        tags: [
            "assalto",
            "Espanha",
            "estratégia",
            "ação"
        ],

        quote:
            "O plano pode ser perfeito. As pessoas nunca são.",

        phrase:
            "Bella Ciao nunca mais foi a mesma.",

        trailer:
            "https://www.youtube.com/embed/_InqQJRqGW4"
    },


    {
        id: "alice-in-borderland",
        title: "Alice in Borderland",
        apiName: "Alice in Borderland",
        expectedYear: 2020,
        year: 2020,
        seasons: 3,
        genre: "Suspense",
        genres: [
            "Suspense",
            "Ficção científica",
            "Ação"
        ],
        age: "16",
        rating: 4.8,

        description: [
            "Arisu vai parar em uma versão quase vazia de Tóquio onde precisa participar de jogos perigosos para sobreviver.",
            "Cada partida exige inteligência, coragem e decisões capazes de mudar completamente o destino dos participantes."
        ],

        tags: [
            "Japão",
            "jogos",
            "sobrevivência",
            "ação"
        ],

        quote:
            "Cada carta pode representar uma nova chance ou o fim.",

        phrase:
            "um jogo que ninguém gostaria de jogar.",

        trailer:
            "https://www.youtube.com/embed/49_44FFKZ1M"
    },


    {
        id: "outer-banks",
        title: "Outer Banks",
        apiName: "Outer Banks",
        expectedYear: 2020,
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

        description: [
            "John B e seus amigos encontram pistas relacionadas a um tesouro perdido e ao desaparecimento de seu pai.",
            "A busca leva os Pogues para uma aventura cheia de perseguições, romances e perigos."
        ],

        tags: [
            "praia",
            "tesouro",
            "amizade",
            "aventura"
        ],

        quote:
            "Pogues juntos até o final.",

        phrase:
            "praia, amizade e muito caos ♡",

        trailer:
            "https://www.youtube.com/embed/uk_hFfUFXh4"
    },


    {
        id: "round-6",
        title: "Round 6",
        apiName: "Squid Game",
        expectedYear: 2021,
        year: 2021,
        seasons: 3,
        genre: "Suspense",
        genres: [
            "Suspense",
            "Drama",
            "Sobrevivência"
        ],
        age: "18",
        rating: 4.8,

        description: [
            "Pessoas endividadas recebem um convite misterioso para disputar uma enorme quantia em dinheiro.",
            "Brincadeiras aparentemente infantis se transformam em desafios extremamente perigosos."
        ],

        tags: [
            "Coreia",
            "jogos",
            "sobrevivência",
            "drama"
        ],

        quote:
            "Jogos simples nunca pareceram tão assustadores.",

        phrase:
            "você definitivamente não quer perder.",

        trailer:
            "https://www.youtube.com/embed/oqxAJKy0ii4"
    },


    {
        id: "wednesday",
        title: "Wednesday",
        apiName: "Wednesday",
        expectedYear: 2022,
        year: 2022,
        seasons: 2,
        genre: "Mistério",
        genres: [
            "Mistério",
            "Fantasia",
            "Comédia"
        ],
        age: "14",
        rating: 4.7,

        description: [
            "Wednesday Addams começa seus estudos na Academia Nevermore e rapidamente se envolve em uma investigação.",
            "Seus poderes, segredos da escola e seu humor extremamente sarcástico fazem parte da história."
        ],

        tags: [
            "Nevermore",
            "gótico",
            "mistério",
            "fantasia"
        ],

        quote:
            "O sarcasmo dela provavelmente é mais perigoso que qualquer monstro.",

        phrase:
            "sombria e estilosa.",

        trailer:
            "https://www.youtube.com/embed/Di310WS8zLk"
    },


    {
        id: "umbrella-academy",
        title: "The Umbrella Academy",
        apiName: "The Umbrella Academy",
        expectedYear: 2019,
        year: 2019,
        seasons: 4,
        genre: "Fantasia",
        genres: [
            "Fantasia",
            "Ação",
            "Drama"
        ],
        age: "16",
        rating: 4.5,

        description: [
            "Irmãos adotivos com habilidades extraordinárias se reencontram depois de anos separados.",
            "Além dos conflitos familiares, eles precisam enfrentar viagens no tempo e ameaças capazes de destruir o mundo."
        ],

        tags: [
            "superpoderes",
            "família",
            "tempo",
            "ação"
        ],

        quote:
            "Salvar o mundo seria mais fácil se essa família soubesse conversar.",

        phrase:
            "uma família completamente normal... só que não.",

        trailer:
            "https://www.youtube.com/embed/0DAmWHxeoKw"
    },


    {
        id: "bridgerton",
        title: "Bridgerton",
        apiName: "Bridgerton",
        expectedYear: 2020,
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

        description: [
            "Famílias da alta sociedade londrina buscam prestígio enquanto romances inesperados começam a surgir.",
            "Bailes, escândalos, vestidos e fofocas criam o cenário para histórias de amor intensas."
        ],

        tags: [
            "romance",
            "época",
            "sociedade",
            "drama"
        ],

        quote:
            "Um simples olhar em um baile consegue começar um escândalo.",

        phrase:
            "romance, vestidos e fofocas ♡",

        trailer:
            "https://www.youtube.com/embed/gpv7ayf_tyE"
    },


    {
        id: "dark",
        title: "Dark",
        apiName: "Dark",
        expectedYear: 2017,
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

        description: [
            "O desaparecimento de uma criança revela segredos envolvendo várias famílias de uma pequena cidade alemã.",
            "Passado, presente e futuro se misturam em um gigantesco quebra-cabeça."
        ],

        tags: [
            "tempo",
            "Alemanha",
            "mistério",
            "ficção"
        ],

        quote:
            "O começo é o fim e o fim é o começo.",

        phrase:
            "prepare seu cérebro.",

        trailer:
            "https://www.youtube.com/embed/rrwycJ08PSA"
    },


    {
        id: "lucifer",
        title: "Lucifer",
        apiName: "Lucifer",
        expectedYear: 2016,
        year: 2016,
        seasons: 6,
        genre: "Fantasia",
        genres: [
            "Fantasia",
            "Crime",
            "Romance"
        ],
        age: "16",
        rating: 4.7,

        description: [
            "Lucifer Morningstar abandona o inferno e decide morar em Los Angeles.",
            "Quando começa a ajudar a polícia, sua vida acaba ligada à detetive Chloe Decker."
        ],

        tags: [
            "fantasia",
            "crime",
            "romance",
            "investigação"
        ],

        quote:
            "What is it you truly desire?",

        phrase:
            "um diabo extremamente carismático.",

        trailer:
            "https://www.youtube.com/embed/X4bF_quwNtw"
    },


    {
        id: "cobra-kai",
        title: "Cobra Kai",
        apiName: "Cobra Kai",
        expectedYear: 2018,
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

        description: [
            "Décadas depois do famoso torneio de karatê, Johnny Lawrence e Daniel LaRusso voltam a se enfrentar.",
            "Uma nova geração acaba envolvida na rivalidade entre diferentes dojos."
        ],

        tags: [
            "karatê",
            "rivalidade",
            "ação",
            "nostalgia"
        ],

        quote:
            "Às vezes a maior luta acontece fora do tatame.",

        phrase:
            "strike first, maratone depois.",

        trailer:
            "https://www.youtube.com/embed/xCwwxNbtK6Y"
    },


    {
        id: "gambito-da-rainha",
        title: "O Gambito da Rainha",
        apiName: "The Queen's Gambit",
        expectedYear: 2020,
        year: 2020,
        seasons: 1,
        genre: "Drama",
        genres: [
            "Drama",
            "Época"
        ],
        age: "16",
        rating: 4.9,

        description: [
            "Beth Harmon descobre ainda criança um talento extraordinário para o xadrez.",
            "Enquanto enfrenta jogadores cada vez mais fortes, também precisa lidar com os desafios de sua própria vida."
        ],

        tags: [
            "xadrez",
            "competição",
            "drama",
            "superação"
        ],

        quote:
            "Cada movimento pode mudar completamente o jogo.",

        phrase:
            "xeque-mate com muita elegância.",

        trailer:
            "https://www.youtube.com/embed/CDrieqwSdgI"
    },


    {
        id: "elite",
        title: "Elite",
        apiName: "Elite",
        expectedYear: 2018,
        year: 2018,
        seasons: 8,
        genre: "Drama",
        genres: [
            "Drama",
            "Crime",
            "Romance"
        ],
        age: "18",
        rating: 4.2,

        description: [
            "Estudantes de origens diferentes passam a conviver em uma escola extremamente exclusiva.",
            "Relacionamentos, rivalidades, festas, segredos e crimes rapidamente complicam a vida de todos."
        ],

        tags: [
            "Espanha",
            "escola",
            "crime",
            "romance"
        ],

        quote:
            "Em Las Encinas, todo mundo parece esconder alguma coisa.",

        phrase:
            "luxo e confusão.",

        trailer:
            "https://www.youtube.com/embed/QNwhAdrdwp0"
    },


    {
        id: "sex-education",
        title: "Sex Education",
        apiName: "Sex Education",
        expectedYear: 2019,
        year: 2019,
        seasons: 4,
        genre: "Comédia",
        genres: [
            "Comédia",
            "Drama",
            "Adolescente"
        ],
        age: "16",
        rating: 4.6,

        description: [
            "Otis acaba usando os conhecimentos de sua mãe terapeuta para aconselhar colegas da escola.",
            "A série fala de amizade, relacionamentos e amadurecimento com muito humor."
        ],

        tags: [
            "escola",
            "amizade",
            "comédia",
            "adolescência"
        ],

        quote:
            "Ser adolescente já é confuso o bastante.",

        phrase:
            "engraçada e cheia de coração.",

        trailer:
            "https://www.youtube.com/embed/Hd2ldTR-WpI"
    },


    {
        id: "ginny-georgia",
        title: "Ginny & Georgia",
        apiName: "Ginny & Georgia",
        expectedYear: 2021,
        year: 2021,
        seasons: 3,
        genre: "Drama",
        genres: [
            "Drama",
            "Comédia",
            "Romance"
        ],
        age: "16",
        rating: 4.4,

        description: [
            "Georgia tenta começar uma nova vida ao lado dos filhos Ginny e Austin.",
            "Porém, seu passado continua aparecendo enquanto Ginny enfrenta seus próprios problemas."
        ],

        tags: [
            "família",
            "segredos",
            "escola",
            "romance"
        ],

        quote:
            "Por trás da família perfeita existem muitos segredos.",

        phrase:
            "drama familiar em nível máximo.",

        trailer:
            "https://www.youtube.com/embed/QsacpJwXCO8"
    },


    {
        id: "the-witcher",
        title: "The Witcher",
        apiName: "The Witcher",
        expectedYear: 2019,
        year: 2019,
        seasons: 4,
        genre: "Fantasia",
        genres: [
            "Fantasia",
            "Ação",
            "Drama"
        ],
        age: "18",
        rating: 4.3,

        description: [
            "Geralt de Rívia é um caçador de monstros que percorre um continente cheio de criaturas, magia e guerras.",
            "Seu destino acaba ligado aos caminhos de Yennefer e Ciri."
        ],

        tags: [
            "magia",
            "monstros",
            "fantasia",
            "aventura"
        ],

        quote:
            "Às vezes os humanos são mais perigosos que os monstros.",

        phrase:
            "monstros, magia e destino.",

        trailer:
            "https://www.youtube.com/embed/ndl1W4ltcmg"
    },


    {
        id: "anne-with-an-e",
        title: "Anne with an E",
        apiName: "Anne with an E",
        expectedYear: 2017,
        year: 2017,
        seasons: 3,
        genre: "Drama",
        genres: [
            "Drama",
            "Família",
            "Época"
        ],
        age: "12",
        rating: 4.9,

        description: [
            "Anne Shirley é uma garota extremamente imaginativa que chega por engano à casa de Marilla e Matthew.",
            "Sua personalidade muda a vida de todos ao redor enquanto ela descobre amizade, família e seu lugar no mundo."
        ],

        tags: [
            "família",
            "amizade",
            "época",
            "emocionante"
        ],

        quote:
            "Existe tanta beleza até nas pequenas coisas.",

        phrase:
            "um abraço em forma de série ♡",

        trailer:
            "https://www.youtube.com/embed/S5qJXYNNINo"
    }

];


/* =========================================================
   ESTADO
========================================================= */

const state = {

    currentSeriesId:
        localStorage.getItem(
            "biaCurrentSeries"
        ) ||
        "stranger-things",

    filter: "all",

    genre: "all",

    search: ""

};


/* =========================================================
   CACHE DA API
========================================================= */

const apiCache =
    new Map();


/* =========================================================
   STORAGE
========================================================= */

function getStorage(
    key,
    fallback
) {

    try {

        const value =
            localStorage.getItem(key);

        return value
            ? JSON.parse(value)
            : fallback;

    }

    catch {

        return fallback;

    }

}


function setStorage(
    key,
    value
) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


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

            theme:
                "lavender",

            cursor:
                true,

            trail:
                true,

            animations:
                true,

            effects:
                true

        }
    );


/* =========================================================
   ELEMENTOS
========================================================= */

const seriesTitle =
    $("#seriesTitle");


const seriesPoster =
    $("#seriesPoster");


const posterLoader =
    $("#posterLoader");


const seriesMetadata =
    $("#seriesMetadata");


const seriesDescription =
    $("#seriesDescription");


const tagsContainer =
    $("#tagsContainer");


const seriesQuote =
    $("#seriesQuote");


const seriesPhrase =
    $("#seriesPhrase");


const seriesRating =
    $("#seriesRating");


const seriesList =
    $("#seriesList");


const favoriteButton =
    $("#favoriteButton");


const posterFavoriteButton =
    $("#posterFavoriteButton");


const searchInput =
    $("#searchInput");


const genreSelect =
    $("#genreSelect");


const commentsList =
    $("#commentsList");


const commentInput =
    $("#commentInput");


const commentCounter =
    $("#commentCounter");


const characterCounter =
    $("#characterCounter");


const effectsLayer =
    $("#effectsLayer");


const heartCursor =
    $("#heartCursor");


const toastContainer =
    $("#toastContainer");


/* =========================================================
   FUNÇÕES BÁSICAS
========================================================= */

function getCurrentSeries() {

    return (
        seriesData.find(
            item =>
                item.id ===
                state.currentSeriesId
        ) ||
        seriesData[0]
    );

}


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        String(text);

    return div.innerHTML;

}


/* =========================================================
   TVMAZE
========================================================= */

async function fetchSeriesApi(
    series
) {

    if (
        apiCache.has(
            series.id
        )
    ) {

        return apiCache.get(
            series.id
        );

    }


    try {

        const searchUrl =
            `https://api.tvmaze.com/search/shows?q=${
                encodeURIComponent(
                    series.apiName
                )
            }`;


        const searchResponse =
            await fetch(
                searchUrl
            );


        if (
            !searchResponse.ok
        ) {

            throw new Error(
                "Busca indisponível"
            );

        }


        const results =
            await searchResponse.json();


        let match =
            results.find(
                result => {

                    const show =
                        result.show;


                    const year =
                        show.premiered
                            ? Number(
                                show.premiered
                                    .slice(
                                        0,
                                        4
                                    )
                            )
                            : null;


                    return (

                        show.name
                            .toLowerCase() ===
                        series.apiName
                            .toLowerCase()

                        &&

                        year ===
                        series.expectedYear

                    );

                }
            );


        if (!match) {

            match =
                results.find(
                    result =>
                        result.show.name
                            .toLowerCase() ===
                        series.apiName
                            .toLowerCase()
                );

        }


        if (!match) {

            match =
                results[0];

        }


        if (!match) {

            throw new Error(
                "Série não encontrada"
            );

        }


        const show =
            match.show;


        const castResponse =
            await fetch(
                `https://api.tvmaze.com/shows/${show.id}/cast`
            );


        let cast = [];


        if (
            castResponse.ok
        ) {

            cast =
                await castResponse.json();

        }


        const data = {

            showId:
                show.id,

            image:
                show.image?.original ||
                show.image?.medium ||
                "",

            mediumImage:
                show.image?.medium ||
                show.image?.original ||
                "",

            cast:
                cast
                    .slice(
                        0,
                        10
                    )
                    .map(
                        item => ({

                            name:
                                item.person?.name ||
                                "Ator",

                            character:
                                item.character?.name ||
                                "Personagem",

                            photo:
                                item.person
                                    ?.image
                                    ?.original ||
                                item.person
                                    ?.image
                                    ?.medium ||
                                ""

                        })
                    )

        };


        apiCache.set(
            series.id,
            data
        );


        return data;

    }

    catch (error) {

        console.warn(
            `Não foi possível carregar ${series.title}:`,
            error
        );


        return {

            image:
                "",

            mediumImage:
                "",

            cast:
                []

        };

    }

}


/* =========================================================
   PRÉ-CARREGAR AS 20 CAPAS
========================================================= */

async function preloadAllSeriesImages() {

    const queue =
        [...seriesData];


    const workers =
        Array.from(
            {
                length: 4
            },
            async () => {

                while (
                    queue.length
                ) {

                    const series =
                        queue.shift();


                    const api =
                        await fetchSeriesApi(
                            series
                        );


                    series.poster =
                        api.mediumImage ||
                        api.image ||
                        "";


                    renderSeriesList();

                    renderRanking();

                    renderHistory();

                }

            }
        );


    await Promise.all(
        workers
    );


    renderRecommendations();

}


/* =========================================================
   TOAST
========================================================= */

function toast(
    message,
    icon = "fa-heart"
) {

    const element =
        document.createElement(
            "div"
        );


    element.className =
        "toast";


    element.innerHTML = `

        <i class="fa-solid ${icon}"></i>

        <span>
            ${escapeHTML(message)}
        </span>

    `;


    toastContainer.appendChild(
        element
    );


    setTimeout(
        () => {

            element.style.opacity =
                "0";

        },
        2400
    );


    setTimeout(
        () => {

            element.remove();

        },
        2900
    );

}


/* =========================================================
   CORAÇÕES
========================================================= */

function createHeart(
    x,
    y,
    small = false
) {

    if (
        !settings.effects
    ) {

        return;

    }


    const element =
        document.createElement(
            "span"
        );


    element.className =
        small
            ? "trail-heart"
            : "pop-heart";


    element.textContent =
        Math.random() > .2
            ? "♡"
            : "♥";


    element.style.left =
        `${x}px`;


    element.style.top =
        `${y}px`;


    element.style.color =
        Math.random() > .5
            ? "var(--pink)"
            : "var(--purple)";


    effectsLayer.appendChild(
        element
    );


    setTimeout(
        () =>
            element.remove(),

        small
            ? 700
            : 1100
    );

}


function heartBurst(
    x,
    y,
    amount = 9
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            () => {

                createHeart(

                    x +
                    Math.random() *
                    60 -
                    30,

                    y +
                    Math.random() *
                    30 -
                    15

                );

            },

            i * 45
        );

    }

}


/* =========================================================
   CONFETE
========================================================= */

function confetti(
    x =
        window.innerWidth / 2,

    y =
        window.innerHeight / 2
) {

    if (
        !settings.effects
    ) {

        return;

    }


    const colors = [

        "#a45bdd",
        "#ec6fb4",
        "#776fea",
        "#ffc660",
        "#dd8ae8"

    ];


    for (
        let i = 0;
        i < 28;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti";


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


        effectsLayer.appendChild(
            piece
        );


        setTimeout(
            () =>
                piece.remove(),
            1400
        );

    }

}


/* =========================================================
   RENDER PRINCIPAL
========================================================= */

async function renderCurrentSeries() {

    const series =
        getCurrentSeries();


    localStorage.setItem(
        "biaCurrentSeries",
        series.id
    );


    history.replaceState(
        null,
        "",
        `#${series.id}`
    );


    document.title =
        `${series.title} | Blog da Bia ♡`;


    seriesTitle.textContent =
        series.title;


    seriesRating.textContent =
        series.rating.toFixed(1);


    seriesPhrase.textContent =
        series.phrase;


    seriesMetadata.innerHTML = `

        <span>
            <i class="fa-regular fa-calendar"></i>
            ${series.year}
        </span>

        <span>
            <i class="fa-solid fa-layer-group"></i>
            ${series.seasons}
            ${
                series.seasons === 1
                    ? "temporada"
                    : "temporadas"
            }
        </span>

        <span>
            <i class="fa-solid fa-film"></i>
            ${escapeHTML(series.genre)}
        </span>

        <span>
            <i class="fa-solid fa-user-shield"></i>
            ${series.age}+
        </span>

    `;


    seriesDescription.innerHTML =
        series.description
            .map(
                paragraph => `
                    <p>
                        ${escapeHTML(
                            paragraph
                        )}
                    </p>
                `
            )
            .join("");


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


    seriesQuote.textContent =
        `“${series.quote}”`;


    updateFavoriteUI();

    updateWatchUI();

    updateProgressUI();

    updateStars();

    updateOpinions();

    updateReactions();

    updateNextSeries();

    renderComments();

    renderSeriesList();

    addHistory(
        series.id
    );

    renderHistory();

    updateStats();


    /*
       CARREGA A CAPA CORRETA
    */

    posterLoader.style.display =
        "grid";


    seriesPoster.classList.remove(
        "loaded"
    );


    const api =
        await fetchSeriesApi(
            series
        );


    if (
        state.currentSeriesId !==
        series.id
    ) {

        return;

    }


    series.poster =
        api.mediumImage ||
        api.image ||
        "";


    if (
        api.image
    ) {

        seriesPoster.onload =
            () => {

                posterLoader.style.display =
                    "none";


                seriesPoster.classList.add(
                    "loaded"
                );

            };


        seriesPoster.src =
            api.image;


        seriesPoster.alt =
            `Capa de ${series.title}`;

    }

    else {

        posterLoader.innerHTML = `

            <div style="
                text-align:center;
                padding:20px;
                color:var(--purple);
            ">

                <i class="fa-solid fa-tv"></i>

                <br><br>

                ${escapeHTML(
                    series.title
                )}

            </div>

        `;

    }


    renderSeriesList();

    renderRecommendations();

    renderRanking();

}


/* =========================================================
   SELECIONAR
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


    $("#sidebar")
        .classList.remove(
            "open"
        );


    $("#contentCard")
        .scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

}


/* =========================================================
   LISTA
========================================================= */

function renderSeriesList() {

    let list =
        [...seriesData];


    if (
        state.search.trim()
    ) {

        const term =
            state.search
                .toLowerCase()
                .trim();


        list =
            list.filter(
                series =>
                    (
                        series.title +
                        " " +
                        series.genres.join(" ")
                    )
                        .toLowerCase()
                        .includes(term)
            );

    }


    if (
        state.genre !==
        "all"
    ) {

        list =
            list.filter(
                series =>
                    series.genres.includes(
                        state.genre
                    )
            );

    }


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


    if (
        !list.length
    ) {

        seriesList.innerHTML = `

            <div class="empty-state">
                nenhuma série encontrada ♡
            </div>

        `;

        return;

    }


    seriesList.innerHTML =
        list
            .map(
                series => `

                    <button
                        class="
                            series-item
                            ${
                                series.id ===
                                state.currentSeriesId
                                    ? "active"
                                    : ""
                            }
                        "
                        data-series-id="${series.id}"
                    >

                        <span class="series-dot"></span>


                        ${
                            series.poster
                                ? `
                                    <img
                                        class="series-thumb"
                                        src="${series.poster}"
                                        alt=""
                                    >
                                `
                                : `
                                    <div
                                        class="series-thumb"
                                    ></div>
                                `
                        }


                        <span class="series-item-info">

                            <strong>
                                ${escapeHTML(
                                    series.title
                                )}
                            </strong>

                            <small>
                                ${escapeHTML(
                                    series.genre
                                )}
                                ·
                                ${series.year}
                            </small>

                        </span>


                        ${
                            favorites.includes(
                                series.id
                            )
                                ? `
                                    <i
                                        class="
                                            fa-solid
                                            fa-heart
                                            item-heart
                                        "
                                    ></i>
                                `
                                : ""
                        }

                    </button>

                `
            )
            .join("");

}


/* =========================================================
   LIST CLICK
========================================================= */

seriesList.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-series-id]"
            );


        if (!button) {
            return;
        }


        selectSeries(
            button.dataset.seriesId
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
            todos
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
   PESQUISA
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        state.search =
            searchInput.value;


        $("#searchField")
            .classList.toggle(
                "has-text",
                Boolean(
                    state.search
                )
            );


        renderSeriesList();

    }
);


$("#clearSearch")
    .addEventListener(
        "click",
        () => {

            searchInput.value =
                "";


            state.search =
                "";


            $("#searchField")
                .classList.remove(
                    "has-text"
                );


            renderSeriesList();

        }
    );


/* =========================================================
   FILTROS
========================================================= */

$$(".filter-button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    $$(".filter-button")
                        .forEach(
                            item =>
                                item
                                    .classList
                                    .remove(
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

        }
    );


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

function toggleFavorite(
    event
) {

    const id =
        state.currentSeriesId;


    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item =>
                    item !== id
            );


        toast(
            "removida dos favoritos",
            "fa-heart-crack"
        );

    }

    else {

        favorites.push(id);


        toast(
            "adicionada aos favoritos ♡"
        );


        if (
            event
        ) {

            const rect =
                event.currentTarget
                    .getBoundingClientRect();


            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top +
                rect.height / 2

            );

        }

    }


    setStorage(
        "biaFavorites",
        favorites
    );


    updateFavoriteUI();

    renderSeriesList();

    updateStats();

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
    ]
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    active
                );


                button.innerHTML =
                    active
                        ? `
                            <i class="fa-solid fa-heart"></i>
                        `
                        : `
                            <i class="fa-regular fa-heart"></i>
                        `;

            }
        );

}


/* =========================================================
   WATCH STATUS
========================================================= */

$$("[data-watch-status]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        state.currentSeriesId;


                    const status =
                        button.dataset
                            .watchStatus;


                    if (
                        watchStatus[id] ===
                        status
                    ) {

                        delete watchStatus[id];

                    }

                    else {

                        watchStatus[id] =
                            status;


                        if (
                            status ===
                            "watched"
                        ) {

                            progressData[id] =
                                100;


                            confetti();

                        }

                    }


                    setStorage(
                        "biaWatchStatus",
                        watchStatus
                    );


                    setStorage(
                        "biaProgress",
                        progressData
                    );


                    updateWatchUI();

                    updateProgressUI();

                    updateStats();

                }
            );

        }
    );


function updateWatchUI() {

    const status =
        watchStatus[
            state.currentSeriesId
        ];


    $$("[data-watch-status]")
        .forEach(
            button => {

                button.classList.toggle(

                    "active",

                    button.dataset
                        .watchStatus ===
                        status

                );

            }
        );

}


/* =========================================================
   PROGRESSO
========================================================= */

$("#episodeProgress")
    .addEventListener(
        "input",
        event => {

            const value =
                Number(
                    event.target.value
                );


            progressData[
                state.currentSeriesId
            ] =
                value;


            if (
                value === 100
            ) {

                watchStatus[
                    state.currentSeriesId
                ] =
                    "watched";

            }

            else if (
                value > 0
            ) {

                watchStatus[
                    state.currentSeriesId
                ] =
                    "watching";

            }


            setStorage(
                "biaProgress",
                progressData
            );


            setStorage(
                "biaWatchStatus",
                watchStatus
            );


            updateProgressUI();

            updateWatchUI();

            updateStats();

        }
    );


$("#episodeProgress")
    .addEventListener(
        "change",
        event => {

            if (
                Number(
                    event.target.value
                ) ===
                100
            ) {

                toast(
                    "maratona concluída ♡",
                    "fa-trophy"
                );


                confetti();

            }

        }
    );


function updateProgressUI() {

    const value =
        progressData[
            state.currentSeriesId
        ] ||
        0;


    $("#episodeProgress")
        .value =
        value;


    $("#episodeProgressText")
        .textContent =
        `${value}%`;

}


/* =========================================================
   ESTRELAS
========================================================= */

$$("[data-star]")
    .forEach(
        button => {

            button.addEventListener(
                "mouseenter",
                () =>
                    paintStars(
                        Number(
                            button.dataset.star
                        )
                    )
            );


            button.addEventListener(
                "click",
                event => {

                    const value =
                        Number(
                            button.dataset.star
                        );


                    ratingsData[
                        state.currentSeriesId
                    ] =
                        value;


                    setStorage(
                        "biaRatings",
                        ratingsData
                    );


                    updateStars();


                    toast(
                        `${value}/5 estrelas`,
                        "fa-star"
                    );


                    if (
                        value === 5
                    ) {

                        const rect =
                            event.currentTarget
                                .getBoundingClientRect();


                        confetti(
                            rect.left,
                            rect.top
                        );

                    }

                }
            );

        }
    );


$("#starsContainer")
    .addEventListener(
        "mouseleave",
        updateStars
    );


function paintStars(
    value
) {

    $$("[data-star]")
        .forEach(
            button => {

                const number =
                    Number(
                        button.dataset.star
                    );


                button.innerHTML =
                    number <= value
                        ? `
                            <i class="fa-solid fa-star"></i>
                        `
                        : `
                            <i class="fa-regular fa-star"></i>
                        `;

            }
        );

}


function updateStars() {

    const value =
        ratingsData[
            state.currentSeriesId
        ] ||
        0;


    paintStars(value);


    $("#userRatingText")
        .textContent =
        value
            ? `${value}/5`
            : "ainda não avaliado";

}


/* =========================================================
   LIKE / DISLIKE
========================================================= */

$("#likeButton")
    .addEventListener(
        "click",
        event =>
            voteOpinion(
                "like",
                event
            )
    );


$("#dislikeButton")
    .addEventListener(
        "click",
        event =>
            voteOpinion(
                "dislike",
                event
            )
    );


function voteOpinion(
    type,
    event
) {

    const id =
        state.currentSeriesId;


    if (
        opinionsData[id] ===
        type
    ) {

        delete opinionsData[id];

    }

    else {

        opinionsData[id] =
            type;


        if (
            type ===
            "like"
        ) {

            const rect =
                event.currentTarget
                    .getBoundingClientRect();


            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top

            );

        }

    }


    setStorage(
        "biaOpinions",
        opinionsData
    );


    updateOpinions();

}


/* =========================================================
   OPINION UI
========================================================= */

function updateOpinions() {

    const series =
        getCurrentSeries();


    const vote =
        opinionsData[
            state.currentSeriesId
        ];


    let likes =
        Math.min(
            98,
            Math.round(
                65 +
                series.rating *
                6
            )
        );


    if (
        vote === "like"
    ) {

        likes =
            Math.min(
                99,
                likes + 1
            );

    }


    if (
        vote === "dislike"
    ) {

        likes =
            Math.max(
                1,
                likes - 3
            );

    }


    $("#likePercentage")
        .textContent =
        `${likes}%`;


    $("#dislikePercentage")
        .textContent =
        `${100 - likes}%`;


    $("#voteProgress")
        .style.width =
        `${likes}%`;


    $("#likeButton")
        .classList.toggle(
            "active",
            vote === "like"
        );


    $("#dislikeButton")
        .classList.toggle(
            "active",
            vote === "dislike"
        );

}


/* =========================================================
   REAÇÕES
========================================================= */

$$("[data-reaction]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const id =
                        state.currentSeriesId;


                    const type =
                        button.dataset.reaction;


                    reactionsData[id] ??=
                        {};


                    reactionsData[id][type] =
                        !reactionsData[id][type];


                    setStorage(
                        "biaReactions",
                        reactionsData
                    );


                    updateReactions();


                    const rect =
                        event.currentTarget
                            .getBoundingClientRect();


                    createHeart(
                        rect.left +
                        rect.width / 2,
                        rect.top
                    );

                }
            );

        }
    );


function updateReactions() {

    const data =
        reactionsData[
            state.currentSeriesId
        ] ||
        {};


    const base = {

        love:
            48,

        cry:
            22,

        shock:
            35,

        laugh:
            18,

        angry:
            9

    };


    $$("[data-reaction]")
        .forEach(
            button => {

                const type =
                    button.dataset.reaction;


                const active =
                    Boolean(
                        data[type]
                    );


                button.classList.toggle(
                    "active",
                    active
                );


                $(
                    `[data-reaction-count="${type}"]`,
                    button
                )
                    .textContent =
                    base[type] +
                    (
                        active
                            ? 1
                            : 0
                    );

            }
        );

}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function getComments() {

    return (
        commentsData[
            state.currentSeriesId
        ] ||
        []
    );

}


commentInput.addEventListener(
    "input",
    () => {

        characterCounter.textContent =
            `${commentInput.value.length}/280`;

    }
);


$$("[data-insert-emoji]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    commentInput.value +=
                        button.dataset
                            .insertEmoji;


                    commentInput.dispatchEvent(
                        new Event("input")
                    );


                    commentInput.focus();

                }
            );

        }
    );


$("#commentForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const text =
                commentInput.value
                    .trim();


            if (!text) {
                return;
            }


            commentsData[
                state.currentSeriesId
            ] ??=
                [];


            commentsData[
                state.currentSeriesId
            ].unshift({

                id:
                    Date.now()
                        .toString(),

                author:
                    "Visitante",

                text,

                date:
                    new Date()
                        .toISOString(),

                liked:
                    false,

                likes:
                    0,

                replies:
                    []

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

            updateStats();


            toast(
                "comentário publicado ♡",
                "fa-comment"
            );

        }
    );


function formatDate(
    value
) {

    const time =
        Date.now() -
        new Date(value)
            .getTime();


    const minutes =
        Math.floor(
            time /
            60000
        );


    if (
        minutes < 1
    ) {

        return "agora";

    }


    if (
        minutes < 60
    ) {

        return `${minutes} min`;

    }


    const hours =
        Math.floor(
            minutes /
            60
        );


    if (
        hours < 24
    ) {

        return `${hours} h`;

    }


    return (
        new Date(value)
            .toLocaleDateString(
                "pt-BR"
            )
    );

}


function renderComments() {

    const comments =
        getComments();


    commentCounter.textContent =
        `${comments.length} ${
            comments.length === 1
                ? "comentário"
                : "comentários"
        }`;


    if (
        !comments.length
    ) {

        commentsList.innerHTML = `

            <div class="empty-state">
                ainda não tem comentários ♡
            </div>

        `;

        return;

    }


    commentsList.innerHTML =
        comments
            .map(
                comment => `

                    <article
                        class="comment-card"
                    >

                        <div class="comment-card-avatar">
                            ${comment.author[0]}
                        </div>


                        <div class="comment-body">

                            <div class="comment-meta">

                                <strong>
                                    ${escapeHTML(
                                        comment.author
                                    )}
                                </strong>

                                <small>
                                    ${formatDate(
                                        comment.date
                                    )}
                                </small>

                            </div>


                            <p>
                                ${escapeHTML(
                                    comment.text
                                )}
                            </p>


                            <div class="comment-actions">

                                <button
                                    class="${
                                        comment.liked
                                            ? "active"
                                            : ""
                                    }"
                                    data-like-comment="${comment.id}"
                                >

                                    ♡

                                    ${comment.likes || 0}

                                </button>


                                <button
                                    data-reply-comment="${comment.id}"
                                >
                                    responder
                                </button>

                            </div>


                            <form
                                class="reply-form"
                                data-reply-form="${comment.id}"
                            >

                                <input
                                    maxlength="180"
                                    placeholder="responder..."
                                    required
                                >

                                <button>
                                    enviar
                                </button>

                            </form>


                            <div class="comment-replies">

                                ${
                                    (
                                        comment.replies ||
                                        []
                                    )
                                        .map(
                                            reply => `

                                                <div class="comment-reply">

                                                    <strong>
                                                        ${escapeHTML(
                                                            reply.author
                                                        )}
                                                    </strong>

                                                    <p>
                                                        ${escapeHTML(
                                                            reply.text
                                                        )}
                                                    </p>

                                                </div>

                                            `
                                        )
                                        .join("")
                                }

                            </div>

                        </div>


                        <button
                            class="delete-comment"
                            data-delete-comment="${comment.id}"
                        >

                            <i class="fa-regular fa-trash-can"></i>

                        </button>

                    </article>

                `
            )
            .join("");

}


/* =========================================================
   COMMENT ACTIONS
========================================================= */

commentsList.addEventListener(
    "click",
    event => {

        const like =
            event.target.closest(
                "[data-like-comment]"
            );


        const reply =
            event.target.closest(
                "[data-reply-comment]"
            );


        const remove =
            event.target.closest(
                "[data-delete-comment]"
            );


        const comments =
            getComments();


        if (like) {

            const comment =
                comments.find(
                    item =>
                        item.id ===
                        like.dataset
                            .likeComment
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


            setStorage(
                "biaComments",
                commentsData
            );


            renderComments();

        }


        if (reply) {

            const form =
                $(
                    `[data-reply-form="${reply.dataset.replyComment}"]`
                );


            form?.classList.toggle(
                "open"
            );

        }


        if (remove) {

            commentsData[
                state.currentSeriesId
            ] =
                comments.filter(
                    comment =>
                        comment.id !==
                        remove.dataset
                            .deleteComment
                );


            setStorage(
                "biaComments",
                commentsData
            );


            renderComments();

            updateStats();

        }

    }
);


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


        const comment =
            getComments()
                .find(
                    item =>
                        item.id ===
                        form.dataset
                            .replyForm
                );


        if (!comment) {
            return;
        }


        comment.replies ??=
            [];


        comment.replies.push({

            author:
                "Visitante",

            text

        });


        setStorage(
            "biaComments",
            commentsData
        );


        renderComments();

        updateStats();

    }
);


/* =========================================================
   MODAIS
========================================================= */

function openModal(
    modal
) {

    modal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeModal(
    modal
) {

    modal.classList.remove(
        "open"
    );


    if (
        modal.id ===
        "trailerModal"
    ) {

        $("#trailerFrame")
            .src =
            "";

    }


    if (
        !$(".modal.open") &&
        !$("#settingsPanel")
            .classList
            .contains(
                "open"
            )
    ) {

        body.style.overflow =
            "";

    }

}


$$("[data-close-modal]")
    .forEach(
        element => {

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

        }
    );


/* =========================================================
   TRAILER
========================================================= */

function openTrailer() {

    const series =
        getCurrentSeries();


    $("#trailerModalTitle")
        .textContent =
        `Trailer — ${series.title}`;


    $("#trailerFrame")
        .src =
        `${series.trailer}?autoplay=1`;


    openModal(
        $("#trailerModal")
    );

}


$("#trailerButton")
    .addEventListener(
        "click",
        openTrailer
    );


$("#posterTrailerButton")
    .addEventListener(
        "click",
        openTrailer
    );


/* =========================================================
   ELENCO COM FOTOS REAIS
========================================================= */

$("#castButton")
    .addEventListener(
        "click",
        async () => {

            const series =
                getCurrentSeries();


            $("#castModalTitle")
                .textContent =
                `${series.title} — elenco ♡`;


            $("#castGrid")
                .innerHTML = `

                    <div class="empty-state">
                        carregando elenco...
                    </div>

                `;


            openModal(
                $("#castModal")
            );


            const api =
                await fetchSeriesApi(
                    series
                );


            if (
                !api.cast.length
            ) {

                $("#castGrid")
                    .innerHTML = `

                        <div class="empty-state">
                            não foi possível carregar o elenco.
                        </div>

                    `;

                return;

            }


            $("#castGrid")
                .innerHTML =
                api.cast
                    .map(
                        person => `

                            <article class="cast-card">

                                <div class="cast-photo-wrapper">

                                    ${
                                        person.photo
                                            ? `

                                                <img
                                                    src="${person.photo}"
                                                    alt="${escapeHTML(person.name)}"
                                                    class="cast-photo"
                                                >

                                            `
                                            : `

                                                <div class="cast-placeholder">

                                                    ${
                                                        escapeHTML(
                                                            person.name[0]
                                                        )
                                                    }

                                                </div>

                                            `
                                    }

                                </div>


                                <div class="cast-info">

                                    <strong>
                                        ${escapeHTML(
                                            person.name
                                        )}
                                    </strong>

                                    <span>
                                        ${escapeHTML(
                                            person.character
                                        )}
                                    </span>

                                </div>

                            </article>

                        `
                    )
                    .join("");

        }
    );


/* =========================================================
   COPIAR LINK
========================================================= */

$("#copyLinkButton")
    .addEventListener(
        "click",
        async () => {

            try {

                await navigator
                    .clipboard
                    .writeText(
                        window.location.href
                    );


                toast(
                    "link copiado ♡",
                    "fa-link"
                );

            }

            catch {

                toast(
                    "não foi possível copiar",
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


            if (
                navigator.share
            ) {

                try {

                    await navigator.share({

                        title:
                            `${series.title} | Blog da Bia`,

                        text:
                            `Olha ${series.title} no Blog da Bia ♡`,

                        url:
                            window.location.href

                    });

                }

                catch {
                    /* cancelou */
                }

            }

            else {

                $("#copyLinkButton")
                    .click();

            }

        }
    );


/* =========================================================
   ALEATÓRIA
========================================================= */

$("#randomButton")
    .addEventListener(
        "click",
        () => {

            const possibilities =
                seriesData.filter(
                    series =>
                        series.id !==
                        state.currentSeriesId
                );


            const chosen =
                possibilities[
                    Math.floor(
                        Math.random() *
                        possibilities.length
                    )
                ];


            selectSeries(
                chosen.id
            );


            toast(
                `sorteada: ${chosen.title} ✦`,
                "fa-shuffle"
            );

        }
    );


/* =========================================================
   NEXT
========================================================= */

function updateNextSeries() {

    const index =
        seriesData.findIndex(
            series =>
                series.id ===
                state.currentSeriesId
        );


    const next =
        seriesData[
            (
                index + 1
            ) %
            seriesData.length
        ];


    $("#nextSeriesName")
        .textContent =
        next.title;

}


$("#nextSeriesButton")
    .addEventListener(
        "click",
        () => {

            const index =
                seriesData.findIndex(
                    series =>
                        series.id ===
                        state.currentSeriesId
                );


            selectSeries(

                seriesData[
                    (
                        index + 1
                    ) %
                    seriesData.length
                ].id

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
                (a,b) =>
                    b.rating -
                    a.rating
            )
            .slice(
                0,
                5
            );


    $("#rankingGrid")
        .innerHTML =
        ranking
            .map(
                (
                    series,
                    index
                ) => `

                    <button
                        class="ranking-card"
                        data-ranking="${series.id}"
                    >

                        <span class="ranking-number">
                            ${index + 1}
                        </span>


                        ${
                            series.poster
                                ? `
                                    <img
                                        src="${series.poster}"
                                        alt="${series.title}"
                                    >
                                `
                                : `
                                    <div
                                        style="
                                            aspect-ratio:2/3;
                                            border-radius:12px;
                                            background:var(--soft-gradient);
                                        "
                                    ></div>
                                `
                        }


                        <div class="ranking-info">

                            <strong>
                                ${series.title}
                            </strong>

                            <span>
                                ⭐ ${series.rating.toFixed(1)}
                            </span>

                        </div>

                    </button>

                `
            )
            .join("");

}


$("#rankingGrid")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-ranking]"
                );


            if (button) {

                selectSeries(
                    button.dataset.ranking
                );

            }

        }
    );


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function shuffle(
    array
) {

    return [...array]
        .sort(
            () =>
                Math.random() -
                .5
        );

}


function renderRecommendations() {

    const current =
        getCurrentSeries();


    const related =
        seriesData
            .filter(
                series =>
                    series.id !==
                        current.id &&
                    series.genres.some(
                        genre =>
                            current.genres.includes(
                                genre
                            )
                    )
            );


    const remaining =
        seriesData
            .filter(
                series =>
                    series.id !==
                        current.id &&
                    !related.includes(
                        series
                    )
            );


    const selected =
        [
            ...shuffle(related),
            ...shuffle(remaining)
        ]
            .slice(
                0,
                4
            );


    $("#recommendationsGrid")
        .innerHTML =
        selected
            .map(
                series => `

                    <button
                        class="recommendation-card"
                        data-recommendation="${series.id}"
                    >

                        ${
                            series.poster
                                ? `
                                    <img
                                        src="${series.poster}"
                                        alt=""
                                    >
                                `
                                : ""
                        }


                        <div class="recommendation-overlay">

                            <strong>
                                ${series.title}
                            </strong>

                            <span>
                                ${series.genre}
                                ·
                                ⭐ ${series.rating}
                            </span>

                        </div>

                    </button>

                `
            )
            .join("");

}


$("#recommendationsGrid")
    .addEventListener(
        "click",
        event => {

            const item =
                event.target.closest(
                    "[data-recommendation]"
                );


            if (item) {

                selectSeries(
                    item.dataset
                        .recommendation
                );

            }

        }
    );


$("#refreshRecommendations")
    .addEventListener(
        "click",
        () => {

            renderRecommendations();


            toast(
                "novas sugestões ✦",
                "fa-wand-magic-sparkles"
            );

        }
    );


/* =========================================================
   HISTÓRICO
========================================================= */

function addHistory(id) {

    historyData =
        historyData.filter(
            item =>
                item !== id
        );


    historyData.unshift(id);


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

    $("#historyList")
        .innerHTML =
        historyData
            .map(
                id => {

                    const series =
                        seriesData.find(
                            item =>
                                item.id === id
                        );


                    if (!series) {
                        return "";
                    }


                    return `

                        <button
                            class="history-item"
                            data-history="${series.id}"
                        >

                            ${
                                series.poster
                                    ? `
                                        <img
                                            src="${series.poster}"
                                            alt=""
                                        >
                                    `
                                    : ""
                            }

                            <span>

                                <strong>
                                    ${series.title}
                                </strong>

                                <small>
                                    visto recentemente
                                </small>

                            </span>

                        </button>

                    `;

                }
            )
            .join("");

}


$("#historyList")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-history]"
                );


            if (button) {

                selectSeries(
                    button.dataset.history
                );

            }

        }
    );


$("#clearHistoryButton")
    .addEventListener(
        "click",
        () => {

            historyData = [];


            setStorage(
                "biaHistory",
                []
            );


            renderHistory();

        }
    );


/* =========================================================
   STATS
========================================================= */

function updateStats() {

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
                    list
                ) =>
                    total +
                    list.length,
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
   VISITAS
========================================================= */

function registerVisit() {

    let visits =
        Number(
            localStorage.getItem(
                "biaVisits"
            )
        ) ||
        0;


    if (
        !sessionStorage.getItem(
            "biaVisitSession"
        )
    ) {

        visits++;


        localStorage.setItem(
            "biaVisits",
            visits
        );


        sessionStorage.setItem(
            "biaVisitSession",
            "1"
        );

    }


    $("#visitCounter")
        .textContent =
        visits;

}


/* =========================================================
   SEARCH MODAL
========================================================= */

function renderModalSearch(
    value = ""
) {

    const term =
        value
            .trim()
            .toLowerCase();


    const results =
        seriesData.filter(
            series =>
                !term ||
                series.title
                    .toLowerCase()
                    .includes(term)
        );


    $("#modalSearchResults")
        .innerHTML =
        results
            .map(
                series => `

                    <button
                        class="modal-search-result"
                        data-modal-series="${series.id}"
                    >

                        ${
                            series.poster
                                ? `
                                    <img
                                        src="${series.poster}"
                                        alt=""
                                    >
                                `
                                : `
                                    <div
                                        style="
                                            width:42px;
                                            height:52px;
                                            border-radius:7px;
                                            background:var(--soft-gradient);
                                        "
                                    ></div>
                                `
                        }


                        <span>

                            <strong>
                                ${series.title}
                            </strong>

                            <small>
                                ${series.genre}
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


$("#searchButton")
    .addEventListener(
        "click",
        () => {

            $("#modalSearchInput")
                .value =
                "";


            renderModalSearch();


            openModal(
                $("#searchModal")
            );


            setTimeout(
                () =>
                    $("#modalSearchInput")
                        .focus(),
                100
            );

        }
    );


$("#modalSearchInput")
    .addEventListener(
        "input",
        event =>
            renderModalSearch(
                event.target.value
            )
    );


$("#modalSearchResults")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-modal-series]"
                );


            if (button) {

                closeModal(
                    $("#searchModal")
                );


                selectSeries(
                    button.dataset
                        .modalSeries
                );

            }

        }
    );


/* =========================================================
   SETTINGS
========================================================= */

function applySettings() {

    if (
        settings.theme ===
        "lavender"
    ) {

        body.removeAttribute(
            "data-theme"
        );

    }

    else {

        body.dataset.theme =
            settings.theme;

    }


    $$(".theme-option")
        .forEach(
            button =>
                button.classList.toggle(
                    "active",
                    button.dataset.theme ===
                        settings.theme
                )
        );


    body.classList.toggle(
        "custom-cursor",
        settings.cursor
    );


    body.classList.toggle(
        "cursor-off",
        !settings.cursor
    );


    body.classList.toggle(
        "no-animations",
        !settings.animations
    );


    $("#cursorToggle")
        .checked =
        settings.cursor;


    $("#trailToggle")
        .checked =
        settings.trail;


    $("#animationToggle")
        .checked =
        settings.animations;


    $("#effectsToggle")
        .checked =
        settings.effects;

}


$(".settings-panel");


$("#settingsButton")
    .addEventListener(
        "click",
        () => {

            $("#settingsPanel")
                .classList.add(
                    "open"
                );


            $("#settingsOverlay")
                .classList.add(
                    "open"
                );


            body.style.overflow =
                "hidden";

        }
    );


function closeSettings() {

    $("#settingsPanel")
        .classList.remove(
            "open"
        );


    $("#settingsOverlay")
        .classList.remove(
            "open"
        );


    if (
        !$(".modal.open")
    ) {

        body.style.overflow =
            "";

    }

}


$("#closeSettings")
    .addEventListener(
        "click",
        closeSettings
    );


$("#settingsOverlay")
    .addEventListener(
        "click",
        closeSettings
    );


$$(".theme-option")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    settings.theme =
                        button.dataset.theme;


                    setStorage(
                        "biaSettings",
                        settings
                    );


                    applySettings();

                }
            );

        }
    );


[
    [
        "cursorToggle",
        "cursor"
    ],

    [
        "trailToggle",
        "trail"
    ],

    [
        "animationToggle",
        "animations"
    ],

    [
        "effectsToggle",
        "effects"
    ]

]
    .forEach(
        (
            [
                id,
                property
            ]
        ) => {

            $(`#${id}`)
                .addEventListener(
                    "change",
                    event => {

                        settings[property] =
                            event.target.checked;


                        setStorage(
                            "biaSettings",
                            settings
                        );


                        applySettings();

                    }
                );

        }
    );


$("#resetSettingsButton")
    .addEventListener(
        "click",
        () => {

            settings = {

                theme:
                    "lavender",

                cursor:
                    true,

                trail:
                    true,

                animations:
                    true,

                effects:
                    true

            };


            setStorage(
                "biaSettings",
                settings
            );


            applySettings();


            toast(
                "configurações restauradas ♡"
            );

        }
    );


/* =========================================================
   CURSOR
========================================================= */

let lastTrail =
    0;


document.addEventListener(
    "mousemove",
    event => {

        if (
            settings.cursor
        ) {

            heartCursor.style.left =
                `${event.clientX}px`;


            heartCursor.style.top =
                `${event.clientY}px`;

        }


        if (
            settings.cursor &&
            settings.trail &&
            settings.effects
        ) {

            const now =
                Date.now();


            if (
                now -
                lastTrail >
                55
            ) {

                lastTrail =
                    now;


                createHeart(
                    event.clientX,
                    event.clientY,
                    true
                );

            }

        }

    }
);


document.addEventListener(
    "mouseover",
    event => {

        if (
            event.target.closest(
                "button,input,textarea,select,a"
            )
        ) {

            heartCursor
                .classList.add(
                    "hover"
                );

        }

    }
);


document.addEventListener(
    "mouseout",
    event => {

        if (
            event.target.closest(
                "button,input,textarea,select,a"
            )
        ) {

            heartCursor
                .classList.remove(
                    "hover"
                );

        }

    }
);


document.addEventListener(
    "click",
    event => {

        if (
            settings.effects
        ) {

            createHeart(
                event.clientX,
                event.clientY
            );

        }

    }
);


/* =========================================================
   TILT
========================================================= */

function initializeTilt() {

    if (
        !window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        return;

    }


    document.addEventListener(
        "mousemove",
        event => {

            const card =
                event.target.closest(
                    ".tilt-card"
                );


            if (!card) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    x /
                    rect.width -
                    .5
                ) *
                7;


            const rotateX =
                (
                    y /
                    rect.height -
                    .5
                ) *
                -7;


            card.style.transform = `

                perspective(900px)

                rotateX(${rotateX}deg)

                rotateY(${rotateY}deg)

                translateY(-3px)

            `;

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            const card =
                event.target.closest(
                    ".tilt-card"
                );


            if (
                card &&
                !card.contains(
                    event.relatedTarget
                )
            ) {

                card.style.transform =
                    "";

            }

        }
    );

}


/* =========================================================
   SCROLL
========================================================= */

function updateScroll() {

    const max =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    const percent =
        max > 0
            ? (
                window.scrollY /
                max
            ) *
            100
            : 0;


    $("#readingProgress")
        .style.width =
        `${percent}%`;


    $("#backToTop")
        .classList.toggle(
            "show",
            window.scrollY >
            450
        );

}


window.addEventListener(
    "scroll",
    updateScroll,
    {
        passive:
            true
    }
);


/* =========================================================
   TOP
========================================================= */

function goTop() {

    window.scrollTo({

        top:
            0,

        behavior:
            "smooth"

    });

}


$("#backToTop")
    .addEventListener(
        "click",
        goTop
    );


$("#footerTopButton")
    .addEventListener(
        "click",
        goTop
    );


$("#logoButton")
    .addEventListener(
        "click",
        goTop
    );


/* =========================================================
   MOBILE
========================================================= */

$("#openSidebar")
    .addEventListener(
        "click",
        () =>
            $("#sidebar")
                .classList.add(
                    "open"
                )
    );


$("#closeSidebar")
    .addEventListener(
        "click",
        () =>
            $("#sidebar")
                .classList.remove(
                    "open"
                )
    );


/* =========================================================
   QUICK NAV
========================================================= */

$$("[data-scroll]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        document.getElementById(
                            button.dataset.scroll
                        );


                    target?.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });


                    $$(".quick-button")
                        .forEach(
                            item =>
                                item
                                    .classList.remove(
                                        "active"
                                    )
                        );


                    button.classList.add(
                        "active"
                    );

                }
            );

        }
    );


/* =========================================================
   CORAÇÃO FINAL
========================================================= */

$("#sendHeartButton")
    .addEventListener(
        "click",
        event => {

            const rect =
                event.currentTarget
                    .getBoundingClientRect();


            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top,

                14

            );


            confetti(

                rect.left +
                rect.width / 2,

                rect.top

            );


            toast(
                "Bayerlee e Beatriz receberam seu coração ♡"
            );

        }
    );


/* =========================================================
   REVEAL
========================================================= */

function initializeReveal() {

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
                threshold:
                    .06
            }

        );


    $$(".reveal")
        .forEach(
            element =>
                observer.observe(
                    element
                )
        );

}


/* =========================================================
   FOTOS LOCAIS DOS CRIADORES
========================================================= */

function checkLocalPhotos() {

    [
        [
            $("#ownerPhoto"),
            "Beatriz.jpg"
        ],

        [
            $("#beatrizDeveloperPhoto"),
            "Beatriz.jpg"
        ],

        [
            $("#bayerleePhoto"),
            "Bayerlee.jpg"
        ]

    ]
        .forEach(
            (
                [
                    image,
                    filename
                ]
            ) => {

                if (!image) {
                    return;
                }


                image.addEventListener(
                    "error",
                    () => {

                        console.error(
                            `A foto ${filename} não foi encontrada.`
                        );


                        image.style.opacity =
                            ".25";


                        toast(
                            `Confira o arquivo ${filename}`,
                            "fa-image"
                        );

                    },

                    {
                        once:
                            true
                    }
                );

            }
        );

}


/* =========================================================
   HASH
========================================================= */

function loadHash() {

    const hash =
        location.hash.replace(
            "#",
            ""
        );


    if (
        seriesData.some(
            series =>
                series.id === hash
        )
    ) {

        state.currentSeriesId =
            hash;

    }

}


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            $$(".modal.open")
                .forEach(
                    modal =>
                        closeModal(
                            modal
                        )
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
   INICIALIZAÇÃO
========================================================= */

async function initialize() {

    loadHash();

    populateGenres();

    applySettings();

    checkLocalPhotos();

    renderSeriesList();

    renderRanking();

    renderRecommendations();

    renderHistory();

    updateStats();

    registerVisit();

    initializeReveal();

    initializeTilt();

    updateScroll();


    /*
       SÉRIE ATUAL PRIMEIRO
    */

    await renderCurrentSeries();


    /*
       DEPOIS CARREGA AS OUTRAS
       SEM TRAVAR A PÁGINA
    */

    preloadAllSeriesImages();


    setTimeout(
        () => {

            toast(
                "bem-vindo ao Blog da Bia ♡"
            );

        },
        650
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);