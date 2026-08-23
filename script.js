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
   20 SÉRIES
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
            "Na pequena cidade de Hawkins, o desaparecimento de um garoto revela experimentos secretos, criaturas sobrenaturais e uma dimensão assustadora.",
            "A série mistura amizade, aventura, suspense e nostalgia em uma história que fica cada vez maior."
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
            "Archie, Betty, Veronica e Jughead vivem em uma cidade aparentemente tranquila, mas cheia de segredos e crimes.",
            "Riverdale mistura romance adolescente, investigação, suspense e acontecimentos cada vez mais inesperados."
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
            "No Upper East Side de Manhattan, jovens privilegiados têm seus segredos revelados por uma blogueira anônima.",
            "Luxo, romances, amizades, traições e muita fofoca transformaram Gossip Girl em um clássico adolescente."
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
            "Joe Goldberg parece inteligente e romântico, mas sua maneira de enxergar relacionamentos rapidamente revela um lado obsessivo e perigoso.",
            "A série coloca o espectador dentro dos pensamentos de Joe enquanto suas escolhas ficam cada vez mais absurdas."
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
            "O Professor reúne um grupo de criminosos para executar um dos planos mais ambiciosos já imaginados.",
            "Estratégia, ação, relacionamentos e inúmeras reviravoltas tornam cada parte do assalto ainda mais intensa."
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
            "Arisu vai parar em uma versão quase vazia de Tóquio, onde precisa participar de jogos perigosos para sobreviver.",
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
            "A investigação leva os Pogues para uma aventura cheia de perseguições, romances e perigos."
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
            "Seus poderes, os segredos da escola e seu humor extremamente sarcástico fazem parte da história."
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
            "Lucifer Morningstar abandona o inferno e decide viver em Los Angeles.",
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
            "Uma nova geração acaba envolvida na rivalidade entre os diferentes dojos."
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
   STATE
========================================================= */

const state = {

    currentSeriesId:
        localStorage.getItem(
            "biaCurrentSeries"
        ) ||
        "stranger-things",

    filter:
        "all",

    genre:
        "all",

    search:
        ""

};


/* =========================================================
   STORAGE
========================================================= */

function getStorage(
    key,
    fallback
) {

    try {

        const value =
            localStorage.getItem(
                key
            );


        return value
            ? JSON.parse(value)
            : fallback;

    }

    catch {

        return fallback;

    }

}


function saveStorage(
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
            theme: "lavender",
            cursor: true,
            trail: true,
            animations: true,
            effects: true
        }
    );


/* =========================================================
   API CACHE
========================================================= */

const apiCache =
    new Map();


/* =========================================================
   ESCAPE
========================================================= */

function escapeHTML(text) {

    const element =
        document.createElement(
            "div"
        );


    element.textContent =
        String(text);


    return element.innerHTML;

}


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
   TVMAZE - CAPAS + ELENCO
========================================================= */

async function fetchSeriesData(
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

        const searchResponse =
            await fetch(
                `https://api.tvmaze.com/search/shows?q=${
                    encodeURIComponent(
                        series.apiName
                    )
                }`
            );


        if (
            !searchResponse.ok
        ) {

            throw new Error(
                "Erro na pesquisa"
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


        const cast =
            castResponse.ok
                ? await castResponse.json()
                : [];


        const data = {

            image:
                show.image?.original ||
                show.image?.medium ||
                "",

            thumb:
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

                            role:
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


        series.poster =
            data.thumb ||
            data.image;


        return data;

    }

    catch (error) {

        console.error(
            `Erro carregando ${series.title}`,
            error
        );


        return {
            image: "",
            thumb: "",
            cast: []
        };

    }

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


    $("#toastContainer")
        .appendChild(element);


    setTimeout(
        () => {

            element.style.opacity =
                "0";

        },
        2500
    );


    setTimeout(
        () => element.remove(),
        2950
    );

}


/* =========================================================
   HEART EFFECT
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


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        small
            ? "trail-heart"
            : "pop-heart";


    heart.textContent =
        Math.random() > .25
            ? "♡"
            : "♥";


    heart.style.left =
        `${x}px`;


    heart.style.top =
        `${y}px`;


    $("#effectsLayer")
        .appendChild(heart);


    setTimeout(
        () => heart.remove(),
        small
            ? 750
            : 1200
    );

}


function heartBurst(
    x,
    y,
    amount = 8
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
                    25 -
                    12
                );

            },
            i * 45
        );

    }

}


/* =========================================================
   CONFETTI
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
        i < 30;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


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
                280 -
                140
            }px`
        );


        $("#effectsLayer")
            .appendChild(piece);


        setTimeout(
            () => piece.remove(),
            1500
        );

    }

}


/* =========================================================
   RENDER CURRENT
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


    $("#seriesTitle")
        .textContent =
        series.title;


    $("#seriesRating")
        .textContent =
        series.rating.toFixed(1);


    $("#seriesPhrase")
        .textContent =
        series.phrase;


    $("#seriesMetadata")
        .innerHTML = `

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


    $("#seriesDescription")
        .innerHTML =
        series.description
            .map(
                text => `
                    <p>
                        ${escapeHTML(text)}
                    </p>
                `
            )
            .join("");


    $("#tagsContainer")
        .innerHTML =
        series.tags
            .map(
                tag => `
                    <span class="tag">
                        #${escapeHTML(tag)}
                    </span>
                `
            )
            .join("");


    $("#seriesQuote")
        .textContent =
        `“${series.quote}”`;


    const card =
        $("#contentCard");


    card.classList.remove(
        "content-changing"
    );


    void card.offsetWidth;


    card.classList.add(
        "content-changing"
    );


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


    /* CAPA */

    const loader =
        $("#posterLoader");


    const poster =
        $("#seriesPoster");


    loader.style.display =
        "grid";


    loader.innerHTML = `
        <i class="fa-solid fa-spinner"></i>
    `;


    poster.classList.remove(
        "loaded"
    );


    const api =
        await fetchSeriesData(
            series
        );


    if (
        state.currentSeriesId !==
        series.id
    ) {

        return;

    }


    if (
        api.image
    ) {

        poster.onload =
            () => {

                loader.style.display =
                    "none";


                poster.classList.add(
                    "loaded"
                );

            };


        poster.src =
            api.image;


        poster.alt =
            `Capa de ${series.title}`;

    }

    else {

        loader.innerHTML = `
            <div
                style="
                    text-align:center;
                    padding:20px;
                "
            >
                <i class="fa-solid fa-tv"></i>

                <br><br>

                ${escapeHTML(series.title)}
            </div>
        `;

    }


    renderSeriesList();

    renderRanking();

    renderRecommendations();

}


/* =========================================================
   SELECT SERIES
========================================================= */

function selectSeries(id) {

    if (
        !seriesData.some(
            series =>
                series.id === id
        )
    ) {

        return;

    }


    state.currentSeriesId =
        id;


    renderCurrentSeries();


    $("#sidebar")
        .classList.remove(
            "open"
        );

}


/* =========================================================
   LIST
========================================================= */

function renderSeriesList() {

    let list =
        [...seriesData];


    if (
        state.search.trim()
    ) {

        const search =
            state.search
                .trim()
                .toLowerCase();


        list =
            list.filter(
                series =>
                    (
                        series.title +
                        " " +
                        series.genres.join(" ")
                    )
                        .toLowerCase()
                        .includes(search)
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


    if (!list.length) {

        $("#seriesList")
            .innerHTML = `
                <div class="empty-state">
                    nenhuma série encontrada ♡
                </div>
            `;

        return;

    }


    $("#seriesList")
        .innerHTML =
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
                                        src="${series.poster}"
                                        alt=""
                                        class="series-thumb"
                                    >
                                `
                                : `
                                    <div
                                        class="series-thumb"
                                    ></div>
                                `
                        }


                        <span class="series-info">

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
                            favorites.includes(
                                series.id
                            )
                                ? `
                                    <i
                                        class="
                                            fa-solid
                                            fa-heart
                                            series-favorite-icon
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


$("#seriesList")
    .addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-series-id]"
                );


            if (button) {

                selectSeries(
                    button.dataset.seriesId
                );

            }

        }
    );


/* =========================================================
   GENRES
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
        ]
            .sort();


    $("#genreSelect")
        .innerHTML = `

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
   SEARCH
========================================================= */

$("#searchInput")
    .addEventListener(
        "input",
        event => {

            state.search =
                event.target.value;


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

            $("#searchInput")
                .value =
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
   FILTERS
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

        }
    );


$("#genreSelect")
    .addEventListener(
        "change",
        event => {

            state.genre =
                event.target.value;


            renderSeriesList();

        }
    );


/* =========================================================
   FAVORITES
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


        if (event) {

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


    saveStorage(
        "biaFavorites",
        favorites
    );


    updateFavoriteUI();

    renderSeriesList();

    updateStats();

}


$("#favoriteButton")
    .addEventListener(
        "click",
        toggleFavorite
    );


$("#posterFavoriteButton")
    .addEventListener(
        "click",
        toggleFavorite
    );


function updateFavoriteUI() {

    const active =
        favorites.includes(
            state.currentSeriesId
        );


    [
        $("#favoriteButton"),
        $("#posterFavoriteButton")
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


                    saveStorage(
                        "biaWatchStatus",
                        watchStatus
                    );


                    saveStorage(
                        "biaProgress",
                        progressData
                    );


                    updateWatchUI();

                    updateProgressUI();

                    renderSeriesList();

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
   PROGRESS
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


            saveStorage(
                "biaProgress",
                progressData
            );


            saveStorage(
                "biaWatchStatus",
                watchStatus
            );


            updateProgressUI();

            updateWatchUI();

            renderSeriesList();

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
   STARS
========================================================= */

function paintStars(value) {

    $$("[data-star]")
        .forEach(
            button => {

                const star =
                    Number(
                        button.dataset.star
                    );


                button.innerHTML =
                    star <= value
                        ? `
                            <i class="fa-solid fa-star"></i>
                        `
                        : `
                            <i class="fa-regular fa-star"></i>
                        `;

            }
        );

}


$$("[data-star]")
    .forEach(
        button => {

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

                    const value =
                        Number(
                            button.dataset.star
                        );


                    ratingsData[
                        state.currentSeriesId
                    ] =
                        value;


                    saveStorage(
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
        event => {

            setOpinion(
                "like",
                event
            );

        }
    );


$("#dislikeButton")
    .addEventListener(
        "click",
        event => {

            setOpinion(
                "dislike",
                event
            );

        }
    );


function setOpinion(
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
            type === "like"
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


    saveStorage(
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
   REACTIONS
========================================================= */

$$("[data-reaction]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const id =
                        state.currentSeriesId;


                    const reaction =
                        button.dataset.reaction;


                    reactionsData[id] ??=
                        {};


                    reactionsData[id][reaction] =
                        !reactionsData[id][reaction];


                    saveStorage(
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

    const reactions =
        reactionsData[
            state.currentSeriesId
        ] ||
        {};


    const base = {
        love: 48,
        cry: 22,
        shock: 35,
        laugh: 18,
        angry: 9
    };


    $$("[data-reaction]")
        .forEach(
            button => {

                const type =
                    button.dataset.reaction;


                const active =
                    Boolean(
                        reactions[type]
                    );


                button.classList.toggle(
                    "active",
                    active
                );


                const count =
                    $(
                        `[data-reaction-count="${type}"]`,
                        button
                    );


                count.textContent =
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
   COMMENTS
========================================================= */

function getComments() {

    return (
        commentsData[
            state.currentSeriesId
        ] ||
        []
    );

}


$("#commentInput")
    .addEventListener(
        "input",
        event => {

            $("#characterCounter")
                .textContent =
                `${event.target.value.length}/280`;

        }
    );


$$("[data-insert-emoji]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const input =
                        $("#commentInput");


                    input.value +=
                        button.dataset
                            .insertEmoji;


                    input.dispatchEvent(
                        new Event("input")
                    );


                    input.focus();

                }
            );

        }
    );


$("#commentForm")
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const input =
                $("#commentInput");


            const text =
                input.value.trim();


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


            saveStorage(
                "biaComments",
                commentsData
            );


            input.value =
                "";


            $("#characterCounter")
                .textContent =
                "0/280";


            renderComments();

            updateStats();


            toast(
                "comentário publicado ♡",
                "fa-comment"
            );

        }
    );


function formatCommentDate(
    value
) {

    const diff =
        Date.now() -
        new Date(value)
            .getTime();


    const minutes =
        Math.floor(
            diff /
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


    return new Date(value)
        .toLocaleDateString(
            "pt-BR"
        );

}


function renderComments() {

    const comments =
        getComments();


    $("#commentCounter")
        .textContent =
        `${comments.length} ${
            comments.length === 1
                ? "comentário"
                : "comentários"
        }`;


    if (!comments.length) {

        $("#commentsList")
            .innerHTML = `
                <div class="empty-state">
                    ainda não tem comentários ♡
                </div>
            `;

        return;

    }


    $("#commentsList")
        .innerHTML =
        comments
            .map(
                comment => `

                    <article class="comment-card">

                        <div class="comment-avatar">
                            ${escapeHTML(
                                comment.author[0]
                            )}
                        </div>


                        <div class="comment-body">

                            <div class="comment-meta">

                                <strong>
                                    ${escapeHTML(
                                        comment.author
                                    )}
                                </strong>

                                <small>
                                    ${formatCommentDate(
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

                                    <i
                                        class="${
                                            comment.liked
                                                ? "fa-solid"
                                                : "fa-regular"
                                        } fa-heart"
                                    ></i>

                                    ${comment.likes || 0}

                                </button>


                                <button
                                    data-reply-comment="${comment.id}"
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
                                    maxlength="180"
                                    placeholder="responder..."
                                    required
                                >

                                <button type="submit">
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


$("#commentsList")
    .addEventListener(
        "click",
        event => {

            const comments =
                getComments();


            const likeButton =
                event.target.closest(
                    "[data-like-comment]"
                );


            if (likeButton) {

                const comment =
                    comments.find(
                        item =>
                            item.id ===
                            likeButton.dataset
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


                saveStorage(
                    "biaComments",
                    commentsData
                );


                renderComments();

                return;

            }


            const replyButton =
                event.target.closest(
                    "[data-reply-comment]"
                );


            if (replyButton) {

                const form =
                    $(
                        `[data-reply-form="${replyButton.dataset.replyComment}"]`
                    );


                form?.classList.toggle(
                    "open"
                );


                if (
                    form?.classList
                        .contains(
                            "open"
                        )
                ) {

                    $("input", form)
                        ?.focus();

                }


                return;

            }


            const deleteButton =
                event.target.closest(
                    "[data-delete-comment]"
                );


            if (deleteButton) {

                commentsData[
                    state.currentSeriesId
                ] =
                    comments.filter(
                        item =>
                            item.id !==
                            deleteButton.dataset
                                .deleteComment
                    );


                saveStorage(
                    "biaComments",
                    commentsData
                );


                renderComments();

                updateStats();

            }

        }
    );


$("#commentsList")
    .addEventListener(
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

                text,

                date:
                    new Date()
                        .toISOString()

            });


            saveStorage(
                "biaComments",
                commentsData
            );


            renderComments();

            updateStats();


            toast(
                "resposta publicada ♡",
                "fa-reply"
            );

        }
    );


/* =========================================================
   MODALS
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
        button => {

            button.addEventListener(
                "click",
                () => {

                    const modal =
                        button.closest(
                            ".modal"
                        );


                    if (modal) {

                        closeModal(modal);

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
   CAST COM FOTOS
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
                        carregando fotos do elenco...
                    </div>
                `;


            openModal(
                $("#castModal")
            );


            const api =
                await fetchSeriesData(
                    series
                );


            if (!api.cast.length) {

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
                        actor => `

                            <article class="cast-card">

                                <div class="cast-photo-wrapper">

                                    ${
                                        actor.photo
                                            ? `
                                                <img
                                                    src="${actor.photo}"
                                                    alt="${escapeHTML(actor.name)}"
                                                    class="cast-photo"
                                                >
                                            `
                                            : `
                                                <div class="cast-placeholder">
                                                    ${escapeHTML(
                                                        actor.name[0]
                                                    )}
                                                </div>
                                            `
                                    }

                                </div>


                                <div class="cast-info">

                                    <strong>
                                        ${escapeHTML(
                                            actor.name
                                        )}
                                    </strong>

                                    <span>
                                        ${escapeHTML(
                                            actor.role
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
   COPY / SHARE
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
                    /* cancelado */
                }

            }

            else {

                $("#copyLinkButton")
                    .click();

            }

        }
    );


/* =========================================================
   RANDOM
========================================================= */

$("#randomButton")
    .addEventListener(
        "click",
        () => {

            const possible =
                seriesData.filter(
                    series =>
                        series.id !==
                        state.currentSeriesId
                );


            const chosen =
                possible[
                    Math.floor(
                        Math.random() *
                        possible.length
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

function getNextSeries() {

    const index =
        seriesData.findIndex(
            series =>
                series.id ===
                state.currentSeriesId
        );


    return seriesData[
        (
            index + 1
        ) %
        seriesData.length
    ];

}


function updateNextSeries() {

    $("#nextSeriesName")
        .textContent =
        getNextSeries()
            .title;

}


$("#nextSeriesButton")
    .addEventListener(
        "click",
        () => {

            selectSeries(
                getNextSeries()
                    .id
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

                        <span class="ranking-position">
                            ${index + 1}
                        </span>


                        ${
                            series.poster
                                ? `
                                    <img
                                        src="${series.poster}"
                                        alt="${escapeHTML(series.title)}"
                                    >
                                `
                                : `
                                    <div
                                        style="
                                            width:100%;
                                            aspect-ratio:2/3;
                                            border-radius:12px;
                                            background:var(--gradient-soft);
                                        "
                                    ></div>
                                `
                        }


                        <div class="ranking-text">

                            <strong>
                                ${escapeHTML(
                                    series.title
                                )}
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

            const item =
                event.target.closest(
                    "[data-ranking]"
                );


            if (item) {

                selectSeries(
                    item.dataset.ranking
                );

            }

        }
    );


/* =========================================================
   RECOMMENDATIONS
========================================================= */

function shuffle(array) {

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
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


function renderRecommendations() {

    const current =
        getCurrentSeries();


    const related =
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


    const others =
        seriesData.filter(
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
            ...shuffle(others)
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
                                        alt="${escapeHTML(series.title)}"
                                    >
                                `
                                : ""
                        }


                        <div class="recommendation-overlay">

                            <strong>
                                ${escapeHTML(
                                    series.title
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    series.genre
                                )}
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
   HISTORY
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


    saveStorage(
        "biaHistory",
        historyData
    );

}


function renderHistory() {

    if (!historyData.length) {

        $("#historyList")
            .innerHTML = `
                <div class="empty-state">
                    seu histórico está vazio ♡
                </div>
            `;

        return;

    }


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
                                    ${escapeHTML(
                                        series.title
                                    )}
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

            const item =
                event.target.closest(
                    "[data-history]"
                );


            if (item) {

                selectSeries(
                    item.dataset.history
                );

            }

        }
    );


$("#clearHistoryButton")
    .addEventListener(
        "click",
        () => {

            historyData =
                [];


            saveStorage(
                "biaHistory",
                []
            );


            renderHistory();


            toast(
                "histórico limpo",
                "fa-trash"
            );

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
                ) => {

                    const replies =
                        list.reduce(
                            (
                                subtotal,
                                comment
                            ) =>
                                subtotal +
                                (
                                    comment.replies
                                        ?.length ||
                                    0
                                ),
                            0
                        );


                    return (
                        total +
                        list.length +
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
   VISITS
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

    const search =
        value
            .trim()
            .toLowerCase();


    const results =
        seriesData.filter(
            series =>
                !search ||
                series.title
                    .toLowerCase()
                    .includes(search)
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
                                            background:var(--gradient-soft);
                                        "
                                    ></div>
                                `
                        }


                        <span>

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
                () => {

                    $("#modalSearchInput")
                        .focus();

                },
                100
            );

        }
    );


$("#modalSearchInput")
    .addEventListener(
        "input",
        event => {

            renderModalSearch(
                event.target.value
            );

        }
    );


$("#modalSearchResults")
    .addEventListener(
        "click",
        event => {

            const item =
                event.target.closest(
                    "[data-modal-series]"
                );


            if (!item) {
                return;
            }


            closeModal(
                $("#searchModal")
            );


            selectSeries(
                item.dataset
                    .modalSeries
            );

        }
    );


/* =========================================================
   SETTINGS
========================================================= */

function openSettings() {

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


$("#settingsOverlay")
    .addEventListener(
        "click",
        closeSettings
    );


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


    $$(".theme-button")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.theme ===
                        settings.theme
                );

            }
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


$$(".theme-button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    settings.theme =
                        button.dataset.theme;


                    saveStorage(
                        "biaSettings",
                        settings
                    );


                    applySettings();


                    toast(
                        "tema alterado ♡",
                        "fa-palette"
                    );

                }
            );

        }
    );


[
    ["cursorToggle", "cursor"],
    ["trailToggle", "trail"],
    ["animationToggle", "animations"],
    ["effectsToggle", "effects"]
]
    .forEach(
        ([id, property]) => {

            $(`#${id}`)
                .addEventListener(
                    "change",
                    event => {

                        settings[property] =
                            event.target.checked;


                        saveStorage(
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
                theme: "lavender",
                cursor: true,
                trail: true,
                animations: true,
                effects: true
            };


            saveStorage(
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

            $("#heartCursor")
                .style.left =
                `${event.clientX}px`;


            $("#heartCursor")
                .style.top =
                `${event.clientY}px`;

        }


        if (
            !settings.cursor ||
            !settings.trail ||
            !settings.effects
        ) {

            return;

        }


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
);


document.addEventListener(
    "mouseover",
    event => {

        if (
            event.target.closest(
                "button,input,textarea,select,a"
            )
        ) {

            $("#heartCursor")
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

            $("#heartCursor")
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
   SCROLL PROGRESS
========================================================= */

function updateScroll() {

    const maximum =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    const percentage =
        maximum > 0
            ? (
                window.scrollY /
                maximum
            ) *
            100
            : 0;


    $("#readingProgress")
        .style.width =
        `${percentage}%`;


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
        passive: true
    }
);


/* =========================================================
   TOP
========================================================= */

function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
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
   MOBILE SIDEBAR
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


                    if (!target) {
                        return;
                    }


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });


                    $$(".quick-button")
                        .forEach(
                            item =>
                                item.classList.remove(
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
   DEVELOPER HEART
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

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        $$(".reveal")
            .forEach(
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
                threshold: .06
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
   LOCAL PHOTOS
========================================================= */

function verifyLocalPhotos() {

    const photos = [

        {
            element:
                $("#ownerPhoto"),

            path:
                "./img/Beatriz.jpg"
        },

        {
            element:
                $("#beatrizDeveloperPhoto"),

            path:
                "./img/Beatriz.jpg"
        },

        {
            element:
                $("#bayerleePhoto"),

            path:
                "./img/Bayerlee.jpg"
        }

    ];


    photos.forEach(
        photo => {

            if (
                !photo.element
            ) {

                return;

            }


            photo.element.addEventListener(
                "error",
                () => {

                    console.error(
                        `Imagem não encontrada: ${photo.path}`
                    );


                    toast(
                        `Confira ${photo.path}`,
                        "fa-image"
                    );

                },
                {
                    once: true
                }
            );

        }
    );

}


/* =========================================================
   PRELOAD CAPAS
========================================================= */

async function preloadSeries() {

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


                    if (!series) {
                        break;
                    }


                    await fetchSeriesData(
                        series
                    );


                    renderSeriesList();

                }

            }
        );


    await Promise.all(
        workers
    );


    renderRanking();

    renderRecommendations();

    renderHistory();

}


/* =========================================================
   HASH
========================================================= */

function loadHash() {

    const hash =
        location.hash
            .replace(
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
   ESC + SHORTCUTS
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


            return;

        }


        if (
            event.target.matches(
                "input,textarea,select"
            )
        ) {

            return;

        }


        if (
            event.key === "/"
        ) {

            event.preventDefault();


            $("#searchButton")
                .click();

        }


        if (
            event.key
                .toLowerCase() ===
            "f"
        ) {

            $("#favoriteButton")
                .click();

        }


        if (
            event.key
                .toLowerCase() ===
            "r"
        ) {

            $("#randomButton")
                .click();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            $("#nextSeriesButton")
                .click();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

async function initialize() {

    loadHash();

    populateGenres();

    applySettings();

    verifyLocalPhotos();

    renderSeriesList();

    renderRanking();

    renderRecommendations();

    renderHistory();

    updateStats();

    registerVisit();

    initializeReveal();

    initializeTilt();

    updateScroll();


    await renderCurrentSeries();


    preloadSeries();


    setTimeout(
        () => {

            toast(
                "bem-vindo ao Blog da Bia ♡"
            );

        },
        650
    );


    console.log(
        "♡ Blog da Bia carregado"
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);