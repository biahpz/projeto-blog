"use strict";


/* =========================================================
   BLOG DA BIA — SCRIPT.JS
   ========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const body = document.body;

const STORAGE_KEY = "blogDaBiaDataV4";


/* =========================================================
   ELEMENTOS PRINCIPAIS
========================================================= */

const loader = $("#loader");
const toast = $("#toast");
const toastIcon = $("#toastIcon");
const toastText = $("#toastText");

const scrollProgress = $("#scrollProgress");
const backTop = $("#backTop");

const heartCursor = $("#heartCursor");
const clickEffects = $("#clickEffects");

const mobileMenuBtn = $("#mobileMenuBtn");
const mobileMenu = $("#mobileMenu");
const mobileMenuClose = $("#mobileMenuClose");
const menuOverlay = $("#menuOverlay");

const searchOpenBtn = $("#searchOpenBtn");
const searchOverlay = $("#searchOverlay");
const searchClose = $("#searchClose");
const globalSearch = $("#globalSearch");
const clearSearch = $("#clearSearch");
const searchResults = $("#searchResults");

const themeBtn = $("#themeBtn");
const themeIcon = $("#themeIcon");
const shareBlogBtn = $("#shareBlogBtn");

const heroBackdrop = $("#heroBackdrop");
const heroPoster = $("#heroPoster");
const heroPosterCard = $("#heroPosterCard");
const heroTitle = $("#heroTitle");
const heroRating = $("#heroRating");
const heroYear = $("#heroYear");
const heroSeasons = $("#heroSeasons");
const heroDescription = $("#heroDescription");
const communityRating = $("#communityRating");

const heroFavoriteBtn = $("#heroFavoriteBtn");
const heroWatchedBtn = $("#heroWatchedBtn");
const watchTrailerBtn = $("#watchTrailerBtn");
const randomSeriesBtn = $("#randomSeriesBtn");
const copySeriesBtn = $("#copySeriesBtn");
const heroDots = $("#heroDots");

const favoriteCount = $("#favoriteCount");
const watchedCount = $("#watchedCount");
const watchlistCount = $("#watchlistCount");
const ratingsCount = $("#ratingsCount");
const streakCount = $("#streakCount");

const resetDataBtn = $("#resetDataBtn");

const dailySeriesBtn = $("#dailySeriesBtn");
const dailyPreview = $("#dailyPreview");

const seriesSearch = $("#seriesSearch");
const seriesSort = $("#seriesSort");
const seriesGrid = $("#seriesGrid");
const seriesResultCount = $("#seriesResultCount");
const emptySeries = $("#emptySeries");
const clearFiltersBtn = $("#clearFiltersBtn");

const rankingList = $("#rankingList");
const achievementGrid = $("#achievementGrid");

const commentForm = $("#commentForm");
const commentName = $("#commentName");
const commentSeries = $("#commentSeries");
const commentText = $("#commentText");
const commentSpoiler = $("#commentSpoiler");
const commentCharCount = $("#commentCharCount");
const commentCount = $("#commentCount");
const commentSort = $("#commentSort");
const commentsList = $("#commentsList");

const seriesModal = $("#seriesModal");
const seriesModalClose = $("#seriesModalClose");
const modalBackdrop = $("#modalBackdrop");
const modalPoster = $("#modalPoster");
const modalBadge = $("#modalBadge");
const modalTitle = $("#modalTitle");
const modalRating = $("#modalRating");
const modalYear = $("#modalYear");
const modalSeasons = $("#modalSeasons");
const modalDescription = $("#modalDescription");

const modalFavorite = $("#modalFavorite");
const modalWatchlist = $("#modalWatchlist");
const modalWatched = $("#modalWatched");

const starRating = $("#starRating");
const castGrid = $("#castGrid");

const episodeProgress = $("#episodeProgress");
const episodeProgressText = $("#episodeProgressText");

const recommendations = $("#recommendations");

const trailerModal = $("#trailerModal");
const trailerClose = $("#trailerClose");
const trailerTitle = $("#trailerTitle");
const openYoutubeTrailer = $("#openYoutubeTrailer");

const settingsFloating = $("#settingsFloating");
const settingsPanel = $("#settingsPanel");
const settingsClose = $("#settingsClose");

const effectsToggle = $("#effectsToggle");
const animationsToggle = $("#animationsToggle");

const currentYear = $("#currentYear");


/* =========================================================
   BANCO DE SÉRIES

   Coloque as capas em:
   img/series/

   Exemplo:
   img/series/stranger-things.jpg

   Se a imagem local não existir, o sistema tenta buscar
   uma capa automaticamente.
========================================================= */

const seriesData = [

    {
        id: "stranger-things",
        title: "Stranger Things",
        year: 2016,
        seasons: "5 temporadas",
        rating: 4.9,
        genre: ["misterio", "terror", "drama"],
        country: "Estados Unidos",
        image: "./img/series/stranger-things.jpg",
        query: "Stranger Things",
        description:
            "O desaparecimento de um garoto revela experimentos secretos, forças sobrenaturais e uma garota com poderes extraordinários.",
        cast: [
            ["Millie Bobby Brown", "Eleven"],
            ["Finn Wolfhard", "Mike Wheeler"],
            ["Noah Schnapp", "Will Byers"],
            ["Sadie Sink", "Max Mayfield"],
            ["Gaten Matarazzo", "Dustin Henderson"],
            ["Caleb McLaughlin", "Lucas Sinclair"]
        ]
    },

    {
        id: "wednesday",
        title: "Wednesday",
        year: 2022,
        seasons: "2 temporadas",
        rating: 4.8,
        genre: ["misterio", "comedia", "terror"],
        country: "Estados Unidos",
        image: "./img/series/wednesday.jpg",
        query: "Wednesday",
        description:
            "Wednesday Addams investiga uma onda de mistérios enquanto tenta se adaptar à excêntrica Academia Nevermore.",
        cast: [
            ["Jenna Ortega", "Wednesday Addams"],
            ["Emma Myers", "Enid Sinclair"],
            ["Joy Sunday", "Bianca Barclay"],
            ["Hunter Doohan", "Tyler Galpin"],
            ["Catherine Zeta-Jones", "Morticia Addams"]
        ]
    },

    {
        id: "dark",
        title: "Dark",
        year: 2017,
        seasons: "3 temporadas",
        rating: 4.9,
        genre: ["misterio", "drama"],
        country: "Alemanha",
        image: "./img/series/dark.jpg",
        query: "Dark",
        description:
            "O desaparecimento de crianças em uma cidade alemã revela segredos familiares e um complexo mistério envolvendo o tempo.",
        cast: [
            ["Louis Hofmann", "Jonas Kahnwald"],
            ["Lisa Vicari", "Martha Nielsen"],
            ["Andreas Pietschmann", "Jonas adulto"],
            ["Maja Schöne", "Hannah Kahnwald"]
        ]
    },

    {
        id: "bridgerton",
        title: "Bridgerton",
        year: 2020,
        seasons: "3+ temporadas",
        rating: 4.7,
        genre: ["romance", "drama"],
        country: "Reino Unido",
        image: "./img/series/bridgerton.jpg",
        query: "Bridgerton",
        description:
            "Romances, escândalos e segredos movimentam a alta sociedade londrina em uma temporada cheia de paixões.",
        cast: [
            ["Nicola Coughlan", "Penelope Featherington"],
            ["Luke Newton", "Colin Bridgerton"],
            ["Jonathan Bailey", "Anthony Bridgerton"],
            ["Simone Ashley", "Kate Sharma"]
        ]
    },

    {
        id: "outer-banks",
        title: "Outer Banks",
        year: 2020,
        seasons: "4+ temporadas",
        rating: 4.6,
        genre: ["acao", "drama", "romance"],
        country: "Estados Unidos",
        image: "./img/series/outer-banks.jpg",
        query: "Outer Banks",
        description:
            "Um grupo de amigos parte em busca de um tesouro lendário enquanto enfrenta perigos, romances e grandes segredos.",
        cast: [
            ["Chase Stokes", "John B"],
            ["Madelyn Cline", "Sarah Cameron"],
            ["Madison Bailey", "Kiara"],
            ["Jonathan Daviss", "Pope"],
            ["Rudy Pankow", "JJ"]
        ]
    },

    {
        id: "cobra-kai",
        title: "Cobra Kai",
        year: 2018,
        seasons: "6 temporadas",
        rating: 4.7,
        genre: ["acao", "comedia", "drama"],
        country: "Estados Unidos",
        image: "./img/series/cobra-kai.jpg",
        query: "Cobra Kai",
        description:
            "Décadas depois do torneio que mudou suas vidas, Johnny Lawrence e Daniel LaRusso voltam a se enfrentar.",
        cast: [
            ["Ralph Macchio", "Daniel LaRusso"],
            ["William Zabka", "Johnny Lawrence"],
            ["Xolo Maridueña", "Miguel Diaz"],
            ["Mary Mouser", "Samantha LaRusso"]
        ]
    },

    {
        id: "you",
        title: "You",
        year: 2018,
        seasons: "5 temporadas",
        rating: 4.6,
        genre: ["drama", "misterio"],
        country: "Estados Unidos",
        image: "./img/series/you.jpg",
        query: "You",
        description:
            "Um homem aparentemente encantador transforma paixão em obsessão enquanto tenta controlar a vida das pessoas que ama.",
        cast: [
            ["Penn Badgley", "Joe Goldberg"],
            ["Charlotte Ritchie", "Kate"],
            ["Victoria Pedretti", "Love Quinn"]
        ]
    },

    {
        id: "lucifer",
        title: "Lucifer",
        year: 2016,
        seasons: "6 temporadas",
        rating: 4.8,
        genre: ["drama", "comedia", "misterio"],
        country: "Estados Unidos",
        image: "./img/series/lucifer.jpg",
        query: "Lucifer",
        description:
            "Cansado de governar o inferno, Lucifer Morningstar decide viver em Los Angeles e ajudar a polícia a resolver crimes.",
        cast: [
            ["Tom Ellis", "Lucifer Morningstar"],
            ["Lauren German", "Chloe Decker"],
            ["D. B. Woodside", "Amenadiel"],
            ["Lesley-Ann Brandt", "Mazikeen"]
        ]
    },

    {
        id: "the-witcher",
        title: "The Witcher",
        year: 2019,
        seasons: "4+ temporadas",
        rating: 4.5,
        genre: ["acao", "drama"],
        country: "Estados Unidos",
        image: "./img/series/the-witcher.jpg",
        query: "The Witcher",
        description:
            "Geralt de Rívia, um caçador de monstros, percorre um continente onde humanos podem ser mais perigosos que criaturas.",
        cast: [
            ["Henry Cavill", "Geralt"],
            ["Anya Chalotra", "Yennefer"],
            ["Freya Allan", "Ciri"],
            ["Joey Batey", "Jaskier"]
        ]
    },

    {
        id: "sex-education",
        title: "Sex Education",
        year: 2019,
        seasons: "4 temporadas",
        rating: 4.7,
        genre: ["comedia", "drama", "romance"],
        country: "Reino Unido",
        image: "./img/series/sex-education.jpg",
        query: "Sex Education",
        description:
            "Um adolescente inseguro usa o conhecimento da mãe terapeuta para criar uma clínica de aconselhamento entre estudantes.",
        cast: [
            ["Asa Butterfield", "Otis"],
            ["Emma Mackey", "Maeve"],
            ["Ncuti Gatwa", "Eric"],
            ["Aimee Lou Wood", "Aimee"]
        ]
    },

    {
        id: "anne-with-an-e",
        title: "Anne with an E",
        year: 2017,
        seasons: "3 temporadas",
        rating: 4.9,
        genre: ["drama"],
        country: "Canadá",
        image: "./img/series/anne-with-an-e.jpg",
        query: "Anne with an E",
        description:
            "Uma jovem órfã cheia de imaginação transforma a vida de uma pequena comunidade com sua personalidade intensa e sonhadora.",
        cast: [
            ["Amybeth McNulty", "Anne Shirley"],
            ["Lucas Jade Zumann", "Gilbert Blythe"],
            ["Geraldine James", "Marilla Cuthbert"],
            ["R. H. Thomson", "Matthew Cuthbert"]
        ]
    },

    {
        id: "heartstopper",
        title: "Heartstopper",
        year: 2022,
        seasons: "3+ temporadas",
        rating: 4.8,
        genre: ["romance", "drama"],
        country: "Reino Unido",
        image: "./img/series/heartstopper.jpg",
        query: "Heartstopper",
        description:
            "Charlie e Nick descobrem que uma amizade inesperada pode se transformar em algo muito maior.",
        cast: [
            ["Kit Connor", "Nick Nelson"],
            ["Joe Locke", "Charlie Spring"],
            ["William Gao", "Tao Xu"],
            ["Yasmin Finney", "Elle Argent"]
        ]
    },

    {
        id: "the-queens-gambit",
        title: "O Gambito da Rainha",
        year: 2020,
        seasons: "Minissérie",
        rating: 4.9,
        genre: ["drama"],
        country: "Estados Unidos",
        image: "./img/series/o-gambito-da-rainha.jpg",
        query: "The Queen's Gambit",
        description:
            "Uma jovem prodígio do xadrez enfrenta adversários, fama e seus próprios conflitos enquanto busca se tornar a melhor do mundo.",
        cast: [
            ["Anya Taylor-Joy", "Beth Harmon"],
            ["Thomas Brodie-Sangster", "Benny Watts"],
            ["Harry Melling", "Harry Beltik"]
        ]
    },

    {
        id: "the-night-agent",
        title: "O Agente Noturno",
        year: 2023,
        seasons: "2+ temporadas",
        rating: 4.6,
        genre: ["acao", "drama", "misterio"],
        country: "Estados Unidos",
        image: "./img/series/o-agente-noturno.jpg",
        query: "The Night Agent",
        description:
            "Um agente do FBI atende uma ligação que o coloca no centro de uma perigosa conspiração política.",
        cast: [
            ["Gabriel Basso", "Peter Sutherland"],
            ["Luciane Buchanan", "Rose Larkin"],
            ["Hong Chau", "Diane Farr"]
        ]
    },

    {
        id: "one-piece",
        title: "One Piece",
        year: 2023,
        seasons: "2+ temporadas",
        rating: 4.8,
        genre: ["acao", "comedia"],
        country: "Estados Unidos",
        image: "./img/series/one-piece.jpg",
        query: "One Piece 2023",
        description:
            "Monkey D. Luffy reúne uma tripulação para explorar os mares e encontrar o lendário tesouro One Piece.",
        cast: [
            ["Iñaki Godoy", "Monkey D. Luffy"],
            ["Mackenyu", "Roronoa Zoro"],
            ["Emily Rudd", "Nami"],
            ["Jacob Romero", "Usopp"]
        ]
    },

    {
        id: "alice-in-borderland",
        title: "Alice in Borderland",
        year: 2020,
        seasons: "3 temporadas",
        rating: 4.8,
        genre: ["acao", "misterio", "drama"],
        country: "Japão",
        image: "./img/series/alice-in-borderland.jpg",
        query: "Alice in Borderland",
        description:
            "Um jovem e seus amigos ficam presos em uma versão vazia de Tóquio onde precisam vencer jogos mortais.",
        cast: [
            ["Kento Yamazaki", "Arisu"],
            ["Tao Tsuchiya", "Usagi"],
            ["Nijirō Murakami", "Chishiya"]
        ]
    },

    {
        id: "squid-game",
        title: "Round 6",
        year: 2021,
        seasons: "3 temporadas",
        rating: 4.8,
        genre: ["acao", "drama", "misterio"],
        country: "Coreia do Sul",
        image: "./img/series/round-6.jpg",
        query: "Squid Game",
        description:
            "Pessoas endividadas recebem uma proposta para participar de jogos infantis em troca de um prêmio gigantesco.",
        cast: [
            ["Lee Jung-jae", "Seong Gi-hun"],
            ["Lee Byung-hun", "Front Man"],
            ["Wi Ha-jun", "Hwang Jun-ho"]
        ]
    },

    {
        id: "all-of-us-are-dead",
        title: "All of Us Are Dead",
        year: 2022,
        seasons: "2+ temporadas",
        rating: 4.6,
        genre: ["terror", "acao", "drama"],
        country: "Coreia do Sul",
        image: "./img/series/all-of-us-are-dead.jpg",
        query: "All of Us Are Dead",
        description:
            "Estudantes ficam presos em uma escola durante um surto zumbi e precisam encontrar uma maneira de sobreviver.",
        cast: [
            ["Park Ji-hu", "Nam On-jo"],
            ["Yoon Chan-young", "Lee Cheong-san"],
            ["Cho Yi-hyun", "Choi Nam-ra"]
        ]
    },

    {
        id: "sweet-home",
        title: "Sweet Home",
        year: 2020,
        seasons: "3 temporadas",
        rating: 4.5,
        genre: ["terror", "acao", "drama"],
        country: "Coreia do Sul",
        image: "./img/series/sweet-home.jpg",
        query: "Sweet Home",
        description:
            "Quando pessoas começam a se transformar em monstros, moradores de um prédio lutam para sobreviver.",
        cast: [
            ["Song Kang", "Cha Hyun-su"],
            ["Lee Jin-wook", "Pyeon Sang-wook"],
            ["Lee Si-young", "Seo Yi-kyung"]
        ]
    },

    {
        id: "the-glory",
        title: "A Lição",
        year: 2022,
        seasons: "1 temporada",
        rating: 4.8,
        genre: ["drama", "misterio"],
        country: "Coreia do Sul",
        image: "./img/series/a-licao.jpg",
        query: "The Glory",
        description:
            "Anos depois de sofrer violência escolar, uma mulher coloca em prática um elaborado plano de vingança.",
        cast: [
            ["Song Hye-kyo", "Moon Dong-eun"],
            ["Lee Do-hyun", "Joo Yeo-jeong"],
            ["Lim Ji-yeon", "Park Yeon-jin"]
        ]
    },

    /* =====================================================
       PRODUÇÕES BRASILEIRAS
    ===================================================== */

    {
        id: "sintonia",
        title: "Sintonia",
        year: 2019,
        seasons: "5 temporadas",
        rating: 4.7,
        genre: ["brasil", "drama"],
        country: "Brasil",
        image: "./img/series/sintonia.jpg",
        query: "Sintonia",
        description:
            "Três amigos de infância tentam conquistar seus sonhos enquanto música, religião e crime cruzam seus caminhos em São Paulo.",
        cast: [
            ["Christian Malheiros", "Nando"],
            ["Jottapê", "Doni"],
            ["Bruna Mascarenhas", "Rita"]
        ]
    },

    {
        id: "bom-dia-veronica",
        title: "Bom Dia, Verônica",
        year: 2020,
        seasons: "3 temporadas",
        rating: 4.7,
        genre: ["brasil", "drama", "misterio"],
        country: "Brasil",
        image: "./img/series/bom-dia-veronica.jpg",
        query: "Good Morning Veronica",
        description:
            "Uma escrivã da polícia começa a investigar casos de violência e descobre uma rede muito mais perigosa do que imaginava.",
        cast: [
            ["Tainá Müller", "Verônica Torres"],
            ["Reynaldo Gianecchini", "Matias"],
            ["Klara Castanho", "Ângela"]
        ]
    },

    {
        id: "cidade-invisivel",
        title: "Cidade Invisível",
        year: 2021,
        seasons: "2 temporadas",
        rating: 4.5,
        genre: ["brasil", "misterio", "drama"],
        country: "Brasil",
        image: "./img/series/cidade-invisivel.jpg",
        query: "Invisible City",
        description:
            "Um investigador descobre criaturas do folclore brasileiro vivendo escondidas entre os humanos.",
        cast: [
            ["Marco Pigossi", "Eric"],
            ["Alessandra Negrini", "Inês"],
            ["Manu Dieguez", "Luna"]
        ]
    },

    {
        id: "dna-do-crime",
        title: "DNA do Crime",
        year: 2023,
        seasons: "2+ temporadas",
        rating: 4.7,
        genre: ["brasil", "acao", "drama"],
        country: "Brasil",
        image: "./img/series/dna-do-crime.jpg",
        query: "Criminal Code Netflix",
        description:
            "Agentes federais usam pistas de DNA para investigar uma complexa rede criminosa na fronteira brasileira.",
        cast: [
            ["Maeve Jinkings", "Suellen"],
            ["Rômulo Braga", "Benício"],
            ["Thomás Aquino", "Sem Alma"]
        ]
    },

    {
        id: "de-volta-aos-15",
        title: "De Volta aos 15",
        year: 2022,
        seasons: "3 temporadas",
        rating: 4.5,
        genre: ["brasil", "comedia", "romance"],
        country: "Brasil",
        image: "./img/series/de-volta-aos-15.jpg",
        query: "Back to 15",
        description:
            "Uma mulher de 30 anos volta misteriosamente aos 15 e ganha a chance de tentar mudar seu passado.",
        cast: [
            ["Maisa Silva", "Anita jovem"],
            ["Camila Queiroz", "Anita adulta"],
            ["Klara Castanho", "Carol"]
        ]
    },

    {
        id: "coisa-mais-linda",
        title: "Coisa Mais Linda",
        year: 2019,
        seasons: "2 temporadas",
        rating: 4.5,
        genre: ["brasil", "drama", "romance"],
        country: "Brasil",
        image: "./img/series/coisa-mais-linda.jpg",
        query: "Most Beautiful Thing Netflix",
        description:
            "No Rio de Janeiro dos anos 1950, uma mulher transforma sua vida ao abrir um clube de bossa nova.",
        cast: [
            ["Maria Casadevall", "Malu"],
            ["Pathy Dejesus", "Adélia"],
            ["Mel Lisboa", "Thereza"]
        ]
    },

    {
        id: "3-percent",
        title: "3%",
        year: 2016,
        seasons: "4 temporadas",
        rating: 4.5,
        genre: ["brasil", "drama", "acao"],
        country: "Brasil",
        image: "./img/series/3-percent.jpg",
        query: "3 Percent Netflix",
        description:
            "Em um futuro desigual, jovens enfrentam um processo brutal para conquistar uma vida privilegiada.",
        cast: [
            ["Bianca Comparato", "Michele"],
            ["Vaneza Oliveira", "Joana"],
            ["Rodolfo Valente", "Rafael"]
        ]
    },

    {
        id: "irmandade",
        title: "Irmandade",
        year: 2019,
        seasons: "2 temporadas",
        rating: 4.5,
        genre: ["brasil", "drama", "acao"],
        country: "Brasil",
        image: "./img/series/irmandade.jpg",
        query: "Brotherhood Netflix Brazil",
        description:
            "Uma advogada é obrigada a atuar como informante contra o próprio irmão, líder de uma facção criminosa.",
        cast: [
            ["Naruna Costa", "Cristina"],
            ["Seu Jorge", "Edson"],
            ["Hermila Guedes", "Darlene"]
        ]
    },

    {
        id: "pedaço-de-mim",
        title: "Pedaço de Mim",
        year: 2024,
        seasons: "1 temporada",
        rating: 4.6,
        genre: ["brasil", "drama"],
        country: "Brasil",
        image: "./img/series/pedaco-de-mim.jpg",
        query: "Desperate Lies Netflix",
        description:
            "Uma mulher enfrenta uma situação familiar extraordinária que transforma completamente sua vida.",
        cast: [
            ["Juliana Paes", "Liana"],
            ["Vladimir Brichta", "Tomás"],
            ["Felipe Abib", "Oscar"]
        ]
    },

    {
        id: "os-donos-do-jogo",
        title: "Os Donos do Jogo",
        year: 2025,
        seasons: "1 temporada",
        rating: 4.5,
        genre: ["brasil", "drama", "acao"],
        country: "Brasil",
        image: "./img/series/os-donos-do-jogo.jpg",
        query: "Os Donos do Jogo Netflix",
        description:
            "Ambição, poder e conflitos familiares se misturam em uma disputa pelo controle de um império clandestino.",
        cast: []
    }

];


/* =========================================================
   ESTADO
========================================================= */

const defaultState = {
    favorites: [],
    watched: [],
    watchlist: [],
    ratings: {},
    progress: {},
    comments: [],
    opened: {},
    theme: "light",
    colorTheme: "bia",
    effects: true,
    animations: true,
    lastVisit: null,
    streak: 1
};

let state = loadState();

let activeFilter = "all";

let activeSeriesId =
    seriesData[0].id;

let heroIndex = 0;

let currentTrailerSeries = null;

let toastTimer = null;


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadState() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            );

        return {
            ...defaultState,
            ...(saved || {})
        };

    } catch (error) {

        return {
            ...defaultState
        };

    }

}


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =========================================================
   TEXTO SEGURO
========================================================= */

function escapeHTML(value = "") {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    icon = "♡"
) {

    if (!toast) return;

    toastIcon.textContent =
        icon;

    toastText.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2400);

}


/* =========================================================
   CAPAS

   1. tenta arquivo JPG local
   2. se falhar, consulta TVMaze
   3. se falhar novamente, gera placeholder
========================================================= */

const imageCache = {};


async function resolvePoster(series) {

    if (
        imageCache[series.id]
    ) {
        return imageCache[
            series.id
        ];
    }

    const cached =
        localStorage.getItem(
            `poster_${series.id}`
        );

    if (cached) {

        imageCache[series.id] =
            cached;

        return cached;

    }

    try {

        const response =
            await fetch(
                `https://api.tvmaze.com/singlesearch/shows?q=${
                    encodeURIComponent(
                        series.query
                    )
                }`
            );

        if (!response.ok) {
            throw new Error(
                "Imagem não encontrada"
            );
        }

        const data =
            await response.json();

        const image =
            data?.image?.original ||
            data?.image?.medium;

        if (image) {

            imageCache[series.id] =
                image;

            localStorage.setItem(
                `poster_${series.id}`,
                image
            );

            return image;

        }

    } catch (error) {

        console.warn(
            `Não foi possível buscar capa de ${series.title}`
        );

    }

    return createPlaceholder(
        series.title
    );

}


function createPlaceholder(title) {

    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                height="750"
            >
                <defs>
                    <linearGradient
                        id="g"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stop-color="#9256d4"
                        />
                        <stop
                            offset="50%"
                            stop-color="#dc6ab9"
                        />
                        <stop
                            offset="100%"
                            stop-color="#6f6bdc"
                        />
                    </linearGradient>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="url(#g)"
                />

                <text
                    x="50%"
                    y="47%"
                    fill="white"
                    text-anchor="middle"
                    font-size="30"
                    font-family="Arial"
                >
                    ♡
                </text>

                <text
                    x="50%"
                    y="54%"
                    fill="white"
                    text-anchor="middle"
                    font-size="23"
                    font-family="Arial"
                >
                    ${
                        escapeHTML(
                            title
                        )
                    }
                </text>
            </svg>
        `)
    );

}


/* =========================================================
   IMAGEM COM FALLBACK
========================================================= */

async function loadImageForElement(
    img,
    series
) {

    if (!img) return;

    img.src =
        series.image;

    img.onerror =
        async () => {

            img.onerror = null;

            img.src =
                await resolvePoster(
                    series
                );

        };

}


/* =========================================================
   DATA
========================================================= */

function getSeries(id) {

    return seriesData.find(
        series =>
            series.id === id
    );

}


function randomItem(array) {

    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


/* =========================================================
   HERO
========================================================= */

const heroSeries =
    seriesData.slice(
        0,
        6
    );


function createHeroDots() {

    if (!heroDots) return;

    heroDots.innerHTML =
        heroSeries
            .map(
                (_, index) => `
                    <button
                        class="hero-dot ${
                            index === 0
                                ? "active"
                                : ""
                        }"
                        data-hero-index="${index}"
                        aria-label="Destaque ${
                            index + 1
                        }"
                    ></button>
                `
            )
            .join("");

}


async function updateHero(index) {

    heroIndex =
        (
            index +
            heroSeries.length
        ) %
        heroSeries.length;

    const series =
        heroSeries[
            heroIndex
        ];

    activeSeriesId =
        series.id;

    heroTitle.textContent =
        series.title;

    heroRating.textContent =
        `★ ${series.rating}`;

    heroYear.textContent =
        series.year;

    heroSeasons.textContent =
        series.seasons;

    heroDescription.textContent =
        series.description;

    communityRating.textContent =
        `${series.rating} / 5`;

    await loadImageForElement(
        heroPoster,
        series
    );

    const poster =
        await resolvePoster(
            series
        );

    heroBackdrop.style.backgroundImage =
        `
        linear-gradient(
            rgba(30,15,36,.18),
            rgba(30,15,36,.18)
        ),
        url("${poster}")
        `;

    updateHeroButtons(
        series.id
    );

    $$(".hero-dot").forEach(
        (dot, i) => {

            dot.classList.toggle(
                "active",
                i === heroIndex
            );

        }
    );

}


/* =========================================================
   FAVORITOS
========================================================= */

function isFavorite(id) {

    return state.favorites
        .includes(id);

}


function toggleFavorite(id) {

    if (isFavorite(id)) {

        state.favorites =
            state.favorites.filter(
                item => item !== id
            );

        showToast(
            "Removida dos favoritos",
            "♡"
        );

    } else {

        state.favorites.push(
            id
        );

        showToast(
            "Adicionada aos favoritos!",
            "♥"
        );

        burstConfetti();

    }

    saveState();

    updateEverything();

}


/* =========================================================
   ASSISTIDAS
========================================================= */

function isWatched(id) {

    return state.watched
        .includes(id);

}


function toggleWatched(id) {

    if (isWatched(id)) {

        state.watched =
            state.watched.filter(
                item => item !== id
            );

        showToast(
            "Removida das assistidas",
            "✓"
        );

    } else {

        state.watched.push(
            id
        );

        state.progress[id] =
            100;

        showToast(
            "Maratona concluída!",
            "🍿"
        );

        burstConfetti();

    }

    saveState();

    updateEverything();

}


/* =========================================================
   QUERO ASSISTIR
========================================================= */

function isWatchlisted(id) {

    return state.watchlist
        .includes(id);

}


function toggleWatchlist(id) {

    if (
        isWatchlisted(id)
    ) {

        state.watchlist =
            state.watchlist.filter(
                item => item !== id
            );

        showToast(
            "Removida da sua lista",
            "−"
        );

    } else {

        state.watchlist.push(
            id
        );

        showToast(
            "Adicionada à sua lista!",
            "＋"
        );

    }

    saveState();

    updateEverything();

}


/* =========================================================
   BOTÕES DO HERO
========================================================= */

function updateHeroButtons(id) {

    if (
        isFavorite(id)
    ) {

        heroFavoriteBtn.innerHTML =
            "♥ Favoritada";

        heroFavoriteBtn.classList.add(
            "active"
        );

    } else {

        heroFavoriteBtn.innerHTML =
            "♡ Favoritar";

        heroFavoriteBtn.classList.remove(
            "active"
        );

    }

    if (
        isWatched(id)
    ) {

        heroWatchedBtn.innerHTML =
            "✓ Assistida";

        heroWatchedBtn.classList.add(
            "active"
        );

    } else {

        heroWatchedBtn.innerHTML =
            "✓ Marcar assistida";

        heroWatchedBtn.classList.remove(
            "active"
        );

    }

}


/* =========================================================
   GRID DAS SÉRIES
========================================================= */

function getFilteredSeries() {

    const search =
        seriesSearch
            ?.value
            .trim()
            .toLowerCase() ||
        "";

    let list =
        [...seriesData];

    if (
        activeFilter !== "all"
    ) {

        list =
            list.filter(
                series =>
                    series.genre.includes(
                        activeFilter
                    )
            );

    }

    if (search) {

        list =
            list.filter(
                series =>
                    series.title
                        .toLowerCase()
                        .includes(search) ||

                    series.country
                        .toLowerCase()
                        .includes(search) ||

                    series.genre
                        .join(" ")
                        .includes(search)
            );

    }

    const sort =
        seriesSort?.value;

    if (
        sort === "rating"
    ) {

        list.sort(
            (a, b) =>
                b.rating -
                a.rating
        );

    }

    if (
        sort === "az"
    ) {

        list.sort(
            (a, b) =>
                a.title.localeCompare(
                    b.title
                )
        );

    }

    if (
        sort === "za"
    ) {

        list.sort(
            (a, b) =>
                b.title.localeCompare(
                    a.title
                )
        );

    }

    if (
        sort === "year-new"
    ) {

        list.sort(
            (a, b) =>
                b.year -
                a.year
        );

    }

    if (
        sort === "year-old"
    ) {

        list.sort(
            (a, b) =>
                a.year -
                b.year
        );

    }

    return list;

}


function renderSeries() {

    if (!seriesGrid) return;

    const list =
        getFilteredSeries();

    seriesResultCount.textContent =
        list.length;

    emptySeries.classList.toggle(
        "hidden",
        list.length !== 0
    );

    seriesGrid.innerHTML =
        list
            .map(
                series => `
                    <article
                        class="series-card"
                        data-id="${
                            series.id
                        }"
                    >

                        <div
                            class="series-poster"
                        >

                            <img
                                src="${
                                    series.image
                                }"
                                alt="${
                                    escapeHTML(
                                        series.title
                                    )
                                }"
                                loading="lazy"
                                data-series-image="${
                                    series.id
                                }"
                            >

                            <div
                                class="card-top-actions"
                            >

                                <span
                                    class="card-badge"
                                >
                                    ${
                                        series.country ===
                                        "Brasil"
                                            ? "🇧🇷 BRASIL"
                                            : series.genre[0]
                                                .toUpperCase()
                                    }
                                </span>

                                <button
                                    class="card-heart ${
                                        isFavorite(
                                            series.id
                                        )
                                            ? "active"
                                            : ""
                                    }"
                                    data-favorite="${
                                        series.id
                                    }"
                                    title="Favoritar"
                                >
                                    ${
                                        isFavorite(
                                            series.id
                                        )
                                            ? "♥"
                                            : "♡"
                                    }
                                </button>

                            </div>

                        </div>


                        <div
                            class="series-card-body"
                        >

                            <h3>
                                ${
                                    escapeHTML(
                                        series.title
                                    )
                                }
                            </h3>


                            <div
                                class="series-card-meta"
                            >

                                <span>
                                    ${
                                        series.year
                                    }
                                </span>

                                <span>
                                    ${
                                        series.seasons
                                    }
                                </span>

                                ${
                                    isWatched(
                                        series.id
                                    )
                                        ? `
                                            <span>
                                                ✓ assistida
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            <p
                                class="series-card-description"
                            >
                                ${
                                    escapeHTML(
                                        series.description
                                    )
                                }
                            </p>


                            <div
                                class="series-card-footer"
                            >

                                <span
                                    class="series-rating"
                                >
                                    ★ ${
                                        series.rating
                                    }
                                </span>

                                <button
                                    class="open-series-btn"
                                    data-open-series="${
                                        series.id
                                    }"
                                >
                                    conhecer ♡
                                </button>

                            </div>

                        </div>

                    </article>
                `
            )
            .join("");

    $$(
        "[data-series-image]"
    ).forEach(
        img => {

            const series =
                getSeries(
                    img.dataset
                        .seriesImage
                );

            img.onerror =
                async () => {

                    img.onerror =
                        null;

                    img.src =
                        await resolvePoster(
                            series
                        );

                };

        }
    );

}


/* =========================================================
   FILTROS
========================================================= */

$$(".filter-btn").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                $$(".filter-btn")
                    .forEach(
                        btn =>
                            btn.classList
                                .remove(
                                    "active"
                                )
                    );

                button.classList.add(
                    "active"
                );

                activeFilter =
                    button.dataset
                        .filter;

                renderSeries();

            }
        );

    }
);


/* =========================================================
   RANKING
========================================================= */

function renderRanking() {

    if (!rankingList) return;

    const ranking =
        [...seriesData]
            .sort(
                (a, b) =>
                    b.rating -
                    a.rating
            )
            .slice(
                0,
                10
            );

    rankingList.innerHTML =
        ranking
            .map(
                (
                    series,
                    index
                ) => `
                    <button
                        class="ranking-item"
                        data-open-series="${
                            series.id
                        }"
                    >

                        <span
                            class="ranking-position"
                        >
                            ${
                                index + 1
                            }
                        </span>

                        <img
                            src="${
                                series.image
                            }"
                            alt="${
                                escapeHTML(
                                    series.title
                                )
                            }"
                            data-series-image="${
                                series.id
                            }"
                        >

                        <span
                            class="ranking-info"
                        >
                            <strong>
                                ${
                                    escapeHTML(
                                        series.title
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    series.country
                                }
                                •
                                ${
                                    series.year
                                }
                            </small>
                        </span>

                        <span
                            class="ranking-score"
                        >
                            ★ ${
                                series.rating
                            }
                        </span>

                    </button>
                `
            )
            .join("");

    $$(
        "#rankingList [data-series-image]"
    ).forEach(
        img => {

            const series =
                getSeries(
                    img.dataset
                        .seriesImage
                );

            img.onerror =
                async () => {

                    img.onerror = null;

                    img.src =
                        await resolvePoster(
                            series
                        );

                };

        }
    );

}


/* =========================================================
   ESTATÍSTICAS
========================================================= */

function updateStats() {

    favoriteCount.textContent =
        state.favorites.length;

    watchedCount.textContent =
        state.watched.length;

    watchlistCount.textContent =
        state.watchlist.length;

    ratingsCount.textContent =
        Object.keys(
            state.ratings
        ).length;

    streakCount.textContent =
        state.streak || 1;

}


/* =========================================================
   CONQUISTAS
========================================================= */

function updateAchievements() {

    const openedTotal =
        Object.keys(
            state.opened
        ).length;

    const achievements = {
        firstFavorite:
            state.favorites.length >= 1,

        fiveWatched:
            state.watched.length >= 5,

        critic:
            Object.keys(
                state.ratings
            ).length >= 3,

        explorer:
            openedTotal >= 10
    };

    $$(
        ".achievement-card"
    ).forEach(
        card => {

            const id =
                card.dataset
                    .achievement;

            card.classList.toggle(
                "unlocked",
                !!achievements[id]
            );

        }
    );

}


/* =========================================================
   MODAL DA SÉRIE
========================================================= */

async function openSeries(id) {

    const series =
        getSeries(id);

    if (!series) return;

    activeSeriesId =
        id;

    state.opened[id] =
        (
            state.opened[id] ||
            0
        ) + 1;

    saveState();

    modalTitle.textContent =
        series.title;

    modalRating.textContent =
        `★ ${series.rating}`;

    modalYear.textContent =
        series.year;

    modalSeasons.textContent =
        series.seasons;

    modalDescription.textContent =
        series.description;

    modalBadge.textContent =
        series.country ===
        "Brasil"
            ? "🇧🇷 PRODUÇÃO BRASILEIRA"
            : series.country
                .toUpperCase();

    await loadImageForElement(
        modalPoster,
        series
    );

    const poster =
        await resolvePoster(
            series
        );

    modalBackdrop.style
        .backgroundImage =
            `url("${poster}")`;

    updateModalButtons(id);

    renderStars(id);

    renderRecommendations(id);

    renderCast(series);

    episodeProgress.value =
        state.progress[id] ||
        0;

    episodeProgressText.textContent =
        `${
            state.progress[id] ||
            0
        }%`;

    seriesModal.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";

    updateAchievements();

}


/* =========================================================
   BOTÕES DO MODAL
========================================================= */

function updateModalButtons(id) {

    modalFavorite.innerHTML =
        isFavorite(id)
            ? "♥ Favoritada"
            : "♡ Favoritar";

    modalFavorite.classList.toggle(
        "active",
        isFavorite(id)
    );

    modalWatchlist.innerHTML =
        isWatchlisted(id)
            ? "✓ Na minha lista"
            : "＋ Quero assistir";

    modalWatchlist.classList.toggle(
        "active",
        isWatchlisted(id)
    );

    modalWatched.innerHTML =
        isWatched(id)
            ? "✓ Assistida"
            : "✓ Marcar assistida";

    modalWatched.classList.toggle(
        "active",
        isWatched(id)
    );

}


/* =========================================================
   ESTRELAS
========================================================= */

function renderStars(id) {

    const rating =
        Number(
            state.ratings[id] ||
            0
        );

    $$(
        "#starRating button"
    ).forEach(
        button => {

            const star =
                Number(
                    button.dataset.star
                );

            button.textContent =
                star <= rating
                    ? "★"
                    : "☆";

        }
    );

}


function rateSeries(
    id,
    value
) {

    state.ratings[id] =
        Number(value);

    saveState();

    renderStars(id);

    updateStats();

    updateAchievements();

    showToast(
        `Você deu ${value} estrela${
            value > 1
                ? "s"
                : ""
        }!`,
        "★"
    );

    if (
        Number(value) === 5
    ) {

        burstConfetti();

    }

}


/* =========================================================
   ELENCO

   Busca automaticamente as fotos pelo TVMaze.
========================================================= */

async function renderCast(series) {

    castGrid.innerHTML =
        `
        <div class="cast-loading">
            carregando elenco...
        </div>
        `;

    let cast =
        [];

    try {

        const showResponse =
            await fetch(
                `https://api.tvmaze.com/singlesearch/shows?q=${
                    encodeURIComponent(
                        series.query
                    )
                }`
            );

        if (
            showResponse.ok
        ) {

            const show =
                await showResponse
                    .json();

            const castResponse =
                await fetch(
                    `https://api.tvmaze.com/shows/${
                        show.id
                    }/cast`
                );

            if (
                castResponse.ok
            ) {

                const result =
                    await castResponse
                        .json();

                cast =
                    result
                        .slice(
                            0,
                            8
                        )
                        .map(
                            item => ({
                                name:
                                    item.person
                                        ?.name ||
                                    "Ator",

                                character:
                                    item.character
                                        ?.name ||
                                    "Personagem",

                                image:
                                    item.person
                                        ?.image
                                        ?.medium ||
                                    item.person
                                        ?.image
                                        ?.original ||
                                    ""
                            })
                        );

            }

        }

    } catch (error) {

        console.warn(
            "Falha ao buscar elenco:",
            error
        );

    }

    if (
        cast.length === 0
    ) {

        cast =
            series.cast.map(
                item => ({
                    name:
                        item[0],

                    character:
                        item[1],

                    image: ""
                })
            );

    }

    if (
        cast.length === 0
    ) {

        castGrid.innerHTML =
            `
            <div class="cast-loading">
                Elenco ainda não cadastrado.
            </div>
            `;

        return;

    }

    castGrid.innerHTML =
        cast
            .map(
                person => `
                    <article
                        class="cast-card"
                    >

                        <img
                            src="${
                                person.image ||
                                createActorPlaceholder(
                                    person.name
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    person.name
                                )
                            }"
                        >

                        <div
                            class="cast-card-info"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        person.name
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    escapeHTML(
                                        person.character
                                    )
                                }
                            </small>

                        </div>

                    </article>
                `
            )
            .join("");

}


/* =========================================================
   PLACEHOLDER DE ATOR
========================================================= */

function createActorPlaceholder(name) {

    const initials =
        name
            .split(" ")
            .slice(0, 2)
            .map(
                word =>
                    word[0] || ""
            )
            .join("")
            .toUpperCase();

    return (
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="500"
            >
                <defs>
                    <linearGradient
                        id="actor"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                    >
                        <stop
                            offset="0%"
                            stop-color="#a95ade"
                        />
                        <stop
                            offset="100%"
                            stop-color="#ec73b7"
                        />
                    </linearGradient>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="url(#actor)"
                />

                <circle
                    cx="200"
                    cy="190"
                    r="80"
                    fill="rgba(255,255,255,.25)"
                />

                <text
                    x="50%"
                    y="42%"
                    text-anchor="middle"
                    font-family="Arial"
                    font-size="58"
                    fill="white"
                >
                    ${initials}
                </text>

                <text
                    x="50%"
                    y="78%"
                    text-anchor="middle"
                    font-family="Arial"
                    font-size="20"
                    fill="white"
                >
                    ${escapeHTML(name)}
                </text>
            </svg>
        `)
    );

}


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function renderRecommendations(id) {

    const current =
        getSeries(id);

    if (!current) return;

    let related =
        seriesData.filter(
            series =>
                series.id !== id &&
                series.genre.some(
                    genre =>
                        current.genre
                            .includes(
                                genre
                            )
                )
        );

    related =
        related
            .sort(
                () =>
                    Math.random() -
                    0.5
            )
            .slice(
                0,
                4
            );

    recommendations.innerHTML =
        related
            .map(
                series => `
                    <button
                        class="recommendation-card"
                        data-open-series="${
                            series.id
                        }"
                    >

                        <img
                            src="${
                                series.image
                            }"
                            alt="${
                                escapeHTML(
                                    series.title
                                )
                            }"
                            data-series-image="${
                                series.id
                            }"
                        >

                        <span>
                            ${
                                escapeHTML(
                                    series.title
                                )
                            }
                        </span>

                    </button>
                `
            )
            .join("");

    $$(
        "#recommendations [data-series-image]"
    ).forEach(
        img => {

            const series =
                getSeries(
                    img.dataset
                        .seriesImage
                );

            img.onerror =
                async () => {

                    img.onerror = null;

                    img.src =
                        await resolvePoster(
                            series
                        );

                };

        }
    );

}


/* =========================================================
   FECHAR MODAIS
========================================================= */

function closeSeriesModal() {

    seriesModal.classList.remove(
        "open"
    );

    body.style.overflow =
        "";

}


function closeTrailerModal() {

    trailerModal.classList.remove(
        "open"
    );

    body.style.overflow =
        "";

}


/* =========================================================
   TRAILER
========================================================= */

function openTrailer(series) {

    currentTrailerSeries =
        series;

    trailerTitle.textContent =
        `Trailer — ${series.title}`;

    trailerModal.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";

}


function launchYoutubeTrailer() {

    if (
        !currentTrailerSeries
    ) return;

    const query =
        `${currentTrailerSeries.title} Netflix trailer oficial`;

    window.open(
        `https://www.youtube.com/results?search_query=${
            encodeURIComponent(
                query
            )
        }`,
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   SÉRIE ALEATÓRIA
========================================================= */

function surpriseMe() {

    let series =
        randomItem(
            seriesData
        );

    if (
        series.id ===
        activeSeriesId &&
        seriesData.length > 1
    ) {

        series =
            randomItem(
                seriesData.filter(
                    item =>
                        item.id !==
                        activeSeriesId
                )
            );

    }

    showToast(
        `Sua escolha: ${series.title}`,
        "✦"
    );

    openSeries(
        series.id
    );

}


/* =========================================================
   SÉRIE DO DIA
========================================================= */

function getDailySeries() {

    const today =
        new Date();

    const value =
        Number(
            `${today.getFullYear()}${
                today.getMonth() + 1
            }${today.getDate()}`
        );

    return seriesData[
        value %
        seriesData.length
    ];

}


async function prepareDailySeries() {

    const series =
        getDailySeries();

    dailyPreview.innerHTML =
        `
        <img
            src="${series.image}"
            alt="${escapeHTML(
                series.title
            )}"
        >
        `;

    const img =
        $("img", dailyPreview);

    img.onerror =
        async () => {

            img.onerror =
                null;

            img.src =
                await resolvePoster(
                    series
                );

        };

}


/* =========================================================
   PESQUISA GLOBAL
========================================================= */

function renderGlobalSearch() {

    const value =
        globalSearch.value
            .trim()
            .toLowerCase();

    if (!value) {

        searchResults.innerHTML =
            `
            <div
                style="
                    padding:20px;
                    text-align:center;
                    opacity:.6;
                    font-size:.7rem;
                "
            >
                Digite o nome de uma série ♡
            </div>
            `;

        return;

    }

    const results =
        seriesData
            .filter(
                series =>
                    series.title
                        .toLowerCase()
                        .includes(value) ||

                    series.country
                        .toLowerCase()
                        .includes(value)
            )
            .slice(
                0,
                8
            );

    if (
        results.length === 0
    ) {

        searchResults.innerHTML =
            `
            <div
                style="
                    padding:20px;
                    text-align:center;
                    opacity:.6;
                    font-size:.7rem;
                "
            >
                Nenhuma série encontrada.
            </div>
            `;

        return;

    }

    searchResults.innerHTML =
        results
            .map(
                series => `
                    <button
                        class="search-result"
                        data-search-open="${
                            series.id
                        }"
                    >

                        <img
                            src="${
                                series.image
                            }"
                            alt="${
                                escapeHTML(
                                    series.title
                                )
                            }"
                            data-series-image="${
                                series.id
                            }"
                        >

                        <span>
                            <strong>
                                ${
                                    escapeHTML(
                                        series.title
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    series.year
                                }
                                •
                                ${
                                    series.country
                                }
                            </small>
                        </span>

                        <span>
                            →
                        </span>

                    </button>
                `
            )
            .join("");

}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function populateCommentSeries() {

    const options =
        [...seriesData]
            .sort(
                (a, b) =>
                    a.title.localeCompare(
                        b.title
                    )
            )
            .map(
                series => `
                    <option
                        value="${
                            series.id
                        }"
                    >
                        ${
                            escapeHTML(
                                series.title
                            )
                        }
                    </option>
                `
            )
            .join("");

    commentSeries.insertAdjacentHTML(
        "beforeend",
        options
    );

}


function addComment(event) {

    event.preventDefault();

    const name =
        commentName.value
            .trim();

    const text =
        commentText.value
            .trim();

    const seriesId =
        commentSeries.value;

    if (
        !name ||
        !text ||
        !seriesId
    ) {

        showToast(
            "Preencha todos os campos.",
            "!"
        );

        return;

    }

    const comment = {
        id:
            Date.now(),

        name,
        text,
        seriesId,

        spoiler:
            commentSpoiler.checked,

        likes: 0,

        liked: false,

        replies: [],

        createdAt:
            new Date()
                .toISOString()
    };

    state.comments.unshift(
        comment
    );

    saveState();

    commentForm.reset();

    commentCharCount.textContent =
        "0";

    renderComments();

    showToast(
        "Comentário publicado!",
        "♡"
    );

}


/* =========================================================
   RENDER COMENTÁRIOS
========================================================= */

function renderComments() {

    let comments =
        [...state.comments];

    if (
        commentSort.value ===
        "likes"
    ) {

        comments.sort(
            (a, b) =>
                b.likes -
                a.likes
        );

    } else if (
        commentSort.value ===
        "old"
    ) {

        comments.sort(
            (a, b) =>
                new Date(
                    a.createdAt
                ) -
                new Date(
                    b.createdAt
                )
        );

    } else {

        comments.sort(
            (a, b) =>
                new Date(
                    b.createdAt
                ) -
                new Date(
                    a.createdAt
                )
        );

    }

    commentCount.textContent =
        comments.length;

    if (
        comments.length === 0
    ) {

        commentsList.innerHTML =
            `
            <div
                style="
                    padding:35px;
                    text-align:center;
                    opacity:.65;
                "
            >
                <div
                    style="
                        font-size:2.5rem;
                        margin-bottom:8px;
                    "
                >
                    ♡
                </div>

                <p
                    style="
                        font-size:.7rem;
                    "
                >
                    Seja a primeira pessoa
                    a comentar.
                </p>
            </div>
            `;

        return;

    }

    commentsList.innerHTML =
        comments
            .map(
                comment => {

                    const series =
                        getSeries(
                            comment.seriesId
                        );

                    const initials =
                        comment.name
                            .split(" ")
                            .slice(0, 2)
                            .map(
                                item =>
                                    item[0] || ""
                            )
                            .join("")
                            .toUpperCase();

                    return `
                        <article
                            class="comment-card"
                        >

                            <div
                                class="comment-top"
                            >

                                <div
                                    class="comment-author"
                                >

                                    <span
                                        class="comment-avatar"
                                    >
                                        ${
                                            escapeHTML(
                                                initials
                                            )
                                        }
                                    </span>

                                    <div>

                                        <strong>
                                            ${
                                                escapeHTML(
                                                    comment.name
                                                )
                                            }
                                        </strong>

                                        <small>
                                            ${
                                                formatDate(
                                                    comment.createdAt
                                                )
                                            }
                                        </small>

                                    </div>

                                </div>


                                <span
                                    class="comment-series-badge"
                                >
                                    ${
                                        escapeHTML(
                                            series
                                                ?.title ||
                                            "Série"
                                        )
                                    }
                                </span>

                            </div>


                            <p
                                class="comment-text ${
                                    comment.spoiler
                                        ? "spoiler"
                                        : ""
                                }"
                                data-comment-text="${
                                    comment.id
                                }"
                            >
                                ${
                                    escapeHTML(
                                        comment.text
                                    )
                                }
                            </p>


                            ${
                                comment.spoiler
                                    ? `
                                        <button
                                            class="spoiler-button"
                                            data-spoiler="${
                                                comment.id
                                            }"
                                        >
                                            👁 revelar spoiler
                                        </button>
                                    `
                                    : ""
                            }


                            <div
                                class="comment-actions"
                            >

                                <button
                                    class="${
                                        comment.liked
                                            ? "active"
                                            : ""
                                    }"
                                    data-like-comment="${
                                        comment.id
                                    }"
                                >
                                    ${
                                        comment.liked
                                            ? "♥"
                                            : "♡"
                                    }
                                    ${
                                        comment.likes
                                    }
                                </button>

                                <button
                                    data-reply-toggle="${
                                        comment.id
                                    }"
                                >
                                    ↩ responder
                                </button>

                                <button
                                    data-delete-comment="${
                                        comment.id
                                    }"
                                >
                                    × excluir
                                </button>

                            </div>


                            <div
                                class="comment-reply-box"
                                data-reply-box="${
                                    comment.id
                                }"
                            >

                                <input
                                    maxlength="180"
                                    placeholder="Escreva uma resposta..."
                                >

                                <button
                                    data-send-reply="${
                                        comment.id
                                    }"
                                >
                                    enviar
                                </button>

                            </div>


                            <div
                                class="reply-list"
                            >

                                ${
                                    (
                                        comment.replies ||
                                        []
                                    )
                                        .map(
                                            reply => `
                                                <div
                                                    class="reply"
                                                >
                                                    <strong>
                                                        ${
                                                            escapeHTML(
                                                                reply.name
                                                            )
                                                        }
                                                    </strong>

                                                    <p>
                                                        ${
                                                            escapeHTML(
                                                                reply.text
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                            `
                                        )
                                        .join("")
                                }

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   DATA DO COMENTÁRIO
========================================================= */

function formatDate(date) {

    const value =
        new Date(date);

    return value
        .toLocaleDateString(
            "pt-BR",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}


/* =========================================================
   CURTIR COMENTÁRIO
========================================================= */

function toggleCommentLike(id) {

    const comment =
        state.comments.find(
            item =>
                item.id === id
        );

    if (!comment) return;

    comment.liked =
        !comment.liked;

    comment.likes +=
        comment.liked
            ? 1
            : -1;

    comment.likes =
        Math.max(
            0,
            comment.likes
        );

    saveState();

    renderComments();

}


/* =========================================================
   RESPOSTAS
========================================================= */

function sendReply(id) {

    const box =
        document.querySelector(
            `[data-reply-box="${id}"]`
        );

    if (!box) return;

    const input =
        $("input", box);

    const text =
        input.value
            .trim();

    if (!text) return;

    const comment =
        state.comments.find(
            item =>
                item.id === id
        );

    if (!comment) return;

    if (
        !Array.isArray(
            comment.replies
        )
    ) {

        comment.replies = [];

    }

    comment.replies.push({
        name:
            commentName.value
                .trim() ||
            "Visitante",

        text,

        createdAt:
            new Date()
                .toISOString()
    });

    saveState();

    renderComments();

    showToast(
        "Resposta publicada!",
        "↩"
    );

}


/* =========================================================
   EXCLUIR COMENTÁRIO
========================================================= */

function deleteComment(id) {

    const confirmed =
        confirm(
            "Excluir este comentário?"
        );

    if (!confirmed) return;

    state.comments =
        state.comments.filter(
            item =>
                item.id !== id
        );

    saveState();

    renderComments();

    showToast(
        "Comentário excluído.",
        "×"
    );

}


/* =========================================================
   PROGRESSO DA SÉRIE
========================================================= */

function saveProgress() {

    const value =
        Number(
            episodeProgress.value
        );

    state.progress[
        activeSeriesId
    ] = value;

    episodeProgressText.textContent =
        `${value}%`;

    if (
        value === 100 &&
        !isWatched(
            activeSeriesId
        )
    ) {

        state.watched.push(
            activeSeriesId
        );

        showToast(
            "Você terminou a série! 🍿",
            "✓"
        );

        burstConfetti();

    }

    saveState();

    updateEverything();

}


/* =========================================================
   TEMA ESCURO
========================================================= */

function applyTheme() {

    body.classList.toggle(
        "dark-mode",
        state.theme ===
            "dark"
    );

    themeIcon.textContent =
        state.theme ===
        "dark"
            ? "☀"
            : "☾";

}


function toggleTheme() {

    state.theme =
        state.theme ===
        "dark"
            ? "light"
            : "dark";

    saveState();

    applyTheme();

    showToast(
        state.theme ===
        "dark"
            ? "Tema escuro ativado"
            : "Tema claro ativado",
        themeIcon.textContent
    );

}


/* =========================================================
   CORES
========================================================= */

function applyColorTheme() {

    if (
        state.colorTheme ===
        "bia"
    ) {

        body.removeAttribute(
            "data-color-theme"
        );

    } else {

        body.setAttribute(
            "data-color-theme",
            state.colorTheme
        );

    }

    $$(".theme-color")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .themeColor ===
                        state.colorTheme
                );

            }
        );

}


/* =========================================================
   EFEITOS
========================================================= */

function applyEffects() {

    effectsToggle.checked =
        state.effects;

    animationsToggle.checked =
        state.animations;

    body.classList.toggle(
        "custom-heart-cursor",
        state.effects
    );

    body.classList.toggle(
        "animations-off",
        !state.animations
    );

    heartCursor.style.display =
        state.effects
            ? ""
            : "none";

}


/* =========================================================
   CURSOR CORAÇÃO
========================================================= */

let lastTrail =
    0;


document.addEventListener(
    "mousemove",
    event => {

        if (
            !state.effects ||
            window.matchMedia(
                "(pointer: coarse)"
            ).matches
        ) {
            return;
        }

        heartCursor.style.left =
            `${event.clientX}px`;

        heartCursor.style.top =
            `${event.clientY}px`;

        const now =
            Date.now();

        if (
            now -
            lastTrail >
            80
        ) {

            createCursorTrail(
                event.clientX,
                event.clientY
            );

            lastTrail =
                now;

        }

    }
);


function createCursorTrail(
    x,
    y
) {

    const trail =
        document.createElement(
            "span"
        );

    trail.className =
        "cursor-trail";

    trail.textContent =
        Math.random() > 0.5
            ? "♡"
            : "✦";

    trail.style.left =
        `${x}px`;

    trail.style.top =
        `${y}px`;

    clickEffects.appendChild(
        trail
    );

    setTimeout(
        () =>
            trail.remove(),
        700
    );

}


/* =========================================================
   CORAÇÃO AO CLICAR
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !state.effects
        ) return;

        if (
            event.target.closest(
                "input, textarea, select"
            )
        ) {
            return;
        }

        const heart =
            document.createElement(
                "span"
            );

        heart.className =
            "click-heart";

        heart.textContent =
            Math.random() > 0.4
                ? "♡"
                : "♥";

        heart.style.left =
            `${event.clientX}px`;

        heart.style.top =
            `${event.clientY}px`;

        clickEffects.appendChild(
            heart
        );

        setTimeout(
            () =>
                heart.remove(),
            1000
        );

    }
);


/* =========================================================
   CONFETE
========================================================= */

function burstConfetti() {

    if (
        !state.effects
    ) return;

    const symbols =
        [
            "♡",
            "♥",
            "✦",
            "★"
        ];

    for (
        let i = 0;
        i < 22;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );

        piece.className =
            "confetti";

        piece.textContent =
            randomItem(
                symbols
            );

        piece.style.left =
            `${
                40 +
                Math.random() *
                20
            }vw`;

        piece.style.top =
            `${
                25 +
                Math.random() *
                20
            }vh`;

        piece.style.setProperty(
            "--x",
            `${
                -150 +
                Math.random() *
                300
            }px`
        );

        piece.style.fontSize =
            `${
                12 +
                Math.random() *
                15
            }px`;

        piece.style.width =
            "auto";

        piece.style.height =
            "auto";

        clickEffects.appendChild(
            piece
        );

        setTimeout(
            () =>
                piece.remove(),
            1500
        );

    }

}


/* =========================================================
   CARD 3D
========================================================= */

function activate3DCards() {

    document.addEventListener(
        "mousemove",
        event => {

            const card =
                event.target.closest(
                    ".series-card"
                );

            if (
                !card ||
                !state.animations
            ) return;

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
                    0.5
                ) * 7;

            const rotateX =
                (
                    y /
                    rect.height -
                    0.5
                ) * -7;

            card.style.transform =
                `
                translateY(-8px)
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );

    document.addEventListener(
        "mouseout",
        event => {

            const card =
                event.target.closest(
                    ".series-card"
                );

            if (!card) return;

            if (
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
   POSTER 3D HERO
========================================================= */

if (
    heroPosterCard
) {

    heroPosterCard.addEventListener(
        "mousemove",
        event => {

            if (
                !state.animations
            ) return;

            const rect =
                heroPosterCard
                    .getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rx =
                (
                    y /
                    rect.height -
                    0.5
                ) * -10;

            const ry =
                (
                    x /
                    rect.width -
                    0.5
                ) * 10;

            heroPosterCard.style
                .transform =
                    `
                    perspective(900px)
                    rotateX(${rx}deg)
                    rotateY(${ry}deg)
                    `;

        }
    );

    heroPosterCard.addEventListener(
        "mouseleave",
        () => {

            heroPosterCard.style
                .transform =
                    "";

        }
    );

}


/* =========================================================
   MENU MOBILE
========================================================= */

function openMobileMenu() {

    mobileMenu.classList.add(
        "open"
    );

    menuOverlay.classList.add(
        "show"
    );

}


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "open"
    );

    menuOverlay.classList.remove(
        "show"
    );

}


/* =========================================================
   PESQUISA
========================================================= */

function openSearch() {

    searchOverlay.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";

    setTimeout(
        () =>
            globalSearch.focus(),
        100
    );

    renderGlobalSearch();

}


function closeSearchModal() {

    searchOverlay.classList.remove(
        "open"
    );

    body.style.overflow =
        "";

}


/* =========================================================
   COMPARTILHAR
========================================================= */

async function shareBlog() {

    const data = {
        title:
            "Blog da Bia ♡",

        text:
            "Olha esse blog de séries!",

        url:
            window.location.href
    };

    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                data
            );

        } else {

            await navigator.clipboard
                .writeText(
                    window.location.href
                );

            showToast(
                "Link copiado!",
                "↗"
            );

        }

    } catch (error) {

        console.log(
            "Compartilhamento cancelado."
        );

    }

}


/* =========================================================
   COPIAR NOME
========================================================= */

async function copyCurrentSeries() {

    const series =
        getSeries(
            activeSeriesId
        );

    if (!series) return;

    try {

        await navigator.clipboard
            .writeText(
                series.title
            );

        showToast(
            `"${series.title}" copiado!`,
            "⧉"
        );

    } catch {

        showToast(
            series.title,
            "♡"
        );

    }

}


/* =========================================================
   STREAK
========================================================= */

function updateStreak() {

    const today =
        new Date();

    const key =
        today
            .toISOString()
            .slice(
                0,
                10
            );

    if (
        !state.lastVisit
    ) {

        state.lastVisit =
            key;

        state.streak =
            1;

        saveState();

        return;

    }

    if (
        state.lastVisit ===
        key
    ) return;

    const last =
        new Date(
            state.lastVisit +
            "T00:00:00"
        );

    const current =
        new Date(
            key +
            "T00:00:00"
        );

    const diff =
        Math.round(
            (
                current -
                last
            ) /
            86400000
        );

    if (
        diff === 1
    ) {

        state.streak =
            (
                state.streak ||
                1
            ) + 1;

    } else {

        state.streak =
            1;

    }

    state.lastVisit =
        key;

    saveState();

}


/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const scrollTop =
        window.scrollY;

    const height =
        document.documentElement
            .scrollHeight -
        window.innerHeight;

    const percent =
        height > 0
            ? (
                scrollTop /
                height
            ) * 100
            : 0;

    scrollProgress.style.width =
        `${percent}%`;

    backTop.classList.toggle(
        "show",
        scrollTop > 550
    );

}


/* =========================================================
   RESET
========================================================= */

function resetUserData() {

    const confirmed =
        confirm(
            "Deseja apagar favoritos, avaliações, comentários e progresso?"
        );

    if (!confirmed) return;

    const theme =
        state.theme;

    const colorTheme =
        state.colorTheme;

    const effects =
        state.effects;

    const animations =
        state.animations;

    state = {
        ...defaultState,
        theme,
        colorTheme,
        effects,
        animations
    };

    saveState();

    updateEverything();

    renderComments();

    showToast(
        "Seus dados foram redefinidos.",
        "♡"
    );

}


/* =========================================================
   ATALHOS DO TECLADO

   / = pesquisar
   ESC = fechar
   R = série aleatória
   T = trocar tema
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const typing =
            ["INPUT", "TEXTAREA", "SELECT"]
                .includes(
                    document.activeElement
                        ?.tagName
                );

        if (
            event.key ===
            "Escape"
        ) {

            closeSearchModal();

            closeSeriesModal();

            closeTrailerModal();

            closeMobileMenu();

            settingsPanel.classList
                .remove(
                    "open"
                );

            return;

        }

        if (typing) return;

        if (
            event.key === "/"
        ) {

            event.preventDefault();

            openSearch();

        }

        if (
            event.key.toLowerCase() ===
            "r"
        ) {

            surpriseMe();

        }

        if (
            event.key.toLowerCase() ===
            "t"
        ) {

            toggleTheme();

        }

    }
);


/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const favorite =
            event.target.closest(
                "[data-favorite]"
            );

        if (favorite) {

            event.stopPropagation();

            toggleFavorite(
                favorite.dataset
                    .favorite
            );

            return;

        }


        const openButton =
            event.target.closest(
                "[data-open-series]"
            );

        if (openButton) {

            openSeries(
                openButton.dataset
                    .openSeries
            );

            return;

        }


        const searchButton =
            event.target.closest(
                "[data-search-open]"
            );

        if (searchButton) {

            closeSearchModal();

            openSeries(
                searchButton.dataset
                    .searchOpen
            );

            return;

        }


        const spoiler =
            event.target.closest(
                "[data-spoiler]"
            );

        if (spoiler) {

            const id =
                spoiler.dataset
                    .spoiler;

            const text =
                document.querySelector(
                    `[data-comment-text="${id}"]`
                );

            text?.classList
                .toggle(
                    "revealed"
                );

            spoiler.textContent =
                text?.classList
                    .contains(
                        "revealed"
                    )
                    ? "🙈 esconder spoiler"
                    : "👁 revelar spoiler";

            return;

        }


        const like =
            event.target.closest(
                "[data-like-comment]"
            );

        if (like) {

            toggleCommentLike(
                Number(
                    like.dataset
                        .likeComment
                )
            );

            return;

        }


        const replyToggle =
            event.target.closest(
                "[data-reply-toggle]"
            );

        if (replyToggle) {

            const box =
                document.querySelector(
                    `[data-reply-box="${
                        replyToggle.dataset
                            .replyToggle
                    }"]`
                );

            box?.classList
                .toggle(
                    "open"
                );

            return;

        }


        const send =
            event.target.closest(
                "[data-send-reply]"
            );

        if (send) {

            sendReply(
                Number(
                    send.dataset
                        .sendReply
                )
            );

            return;

        }


        const remove =
            event.target.closest(
                "[data-delete-comment]"
            );

        if (remove) {

            deleteComment(
                Number(
                    remove.dataset
                        .deleteComment
                )
            );

        }

    }
);


/* =========================================================
   EVENTOS
========================================================= */

mobileMenuBtn?.addEventListener(
    "click",
    openMobileMenu
);

mobileMenuClose?.addEventListener(
    "click",
    closeMobileMenu
);

menuOverlay?.addEventListener(
    "click",
    closeMobileMenu
);


$$(
    "#mobileMenu a"
).forEach(
    link =>
        link.addEventListener(
            "click",
            closeMobileMenu
        )
);


searchOpenBtn?.addEventListener(
    "click",
    openSearch
);

searchClose?.addEventListener(
    "click",
    closeSearchModal
);

searchOverlay?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            searchOverlay
        ) {

            closeSearchModal();

        }

    }
);


globalSearch?.addEventListener(
    "input",
    renderGlobalSearch
);

clearSearch?.addEventListener(
    "click",
    () => {

        globalSearch.value =
            "";

        globalSearch.focus();

        renderGlobalSearch();

    }
);


themeBtn?.addEventListener(
    "click",
    toggleTheme
);

shareBlogBtn?.addEventListener(
    "click",
    shareBlog
);


heroFavoriteBtn?.addEventListener(
    "click",
    () =>
        toggleFavorite(
            activeSeriesId
        )
);

heroWatchedBtn?.addEventListener(
    "click",
    () =>
        toggleWatched(
            activeSeriesId
        )
);

watchTrailerBtn?.addEventListener(
    "click",
    () => {

        const series =
            getSeries(
                activeSeriesId
            );

        if (series) {

            openTrailer(
                series
            );

        }

    }
);

randomSeriesBtn?.addEventListener(
    "click",
    surpriseMe
);

copySeriesBtn?.addEventListener(
    "click",
    copyCurrentSeries
);


heroDots?.addEventListener(
    "click",
    event => {

        const dot =
            event.target.closest(
                "[data-hero-index]"
            );

        if (!dot) return;

        updateHero(
            Number(
                dot.dataset
                    .heroIndex
            )
        );

    }
);


seriesSearch?.addEventListener(
    "input",
    renderSeries
);

seriesSort?.addEventListener(
    "change",
    renderSeries
);


clearFiltersBtn?.addEventListener(
    "click",
    () => {

        activeFilter =
            "all";

        seriesSearch.value =
            "";

        seriesSort.value =
            "default";

        $$(".filter-btn")
            .forEach(
                button =>
                    button.classList
                        .toggle(
                            "active",
                            button.dataset
                                .filter ===
                                "all"
                        )
            );

        renderSeries();

    }
);


dailySeriesBtn?.addEventListener(
    "click",
    () => {

        const series =
            getDailySeries();

        openSeries(
            series.id
        );

    }
);


seriesModalClose?.addEventListener(
    "click",
    closeSeriesModal
);

seriesModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            seriesModal
        ) {

            closeSeriesModal();

        }

    }
);


modalFavorite?.addEventListener(
    "click",
    () =>
        toggleFavorite(
            activeSeriesId
        )
);

modalWatchlist?.addEventListener(
    "click",
    () =>
        toggleWatchlist(
            activeSeriesId
        )
);

modalWatched?.addEventListener(
    "click",
    () =>
        toggleWatched(
            activeSeriesId
        )
);


starRating?.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-star]"
            );

        if (!button) return;

        rateSeries(
            activeSeriesId,
            Number(
                button.dataset.star
            )
        );

    }
);


episodeProgress?.addEventListener(
    "input",
    () => {

        episodeProgressText
            .textContent =
                `${
                    episodeProgress
                        .value
                }%`;

    }
);

episodeProgress?.addEventListener(
    "change",
    saveProgress
);


trailerClose?.addEventListener(
    "click",
    closeTrailerModal
);

trailerModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            trailerModal
        ) {

            closeTrailerModal();

        }

    }
);

openYoutubeTrailer?.addEventListener(
    "click",
    launchYoutubeTrailer
);


commentText?.addEventListener(
    "input",
    () => {

        commentCharCount
            .textContent =
                commentText
                    .value
                    .length;

    }
);

commentForm?.addEventListener(
    "submit",
    addComment
);

commentSort?.addEventListener(
    "change",
    renderComments
);


resetDataBtn?.addEventListener(
    "click",
    resetUserData
);


settingsFloating?.addEventListener(
    "click",
    () => {

        settingsPanel.classList
            .add(
                "open"
            );

    }
);

settingsClose?.addEventListener(
    "click",
    () => {

        settingsPanel.classList
            .remove(
                "open"
            );

    }
);


$$(
    ".theme-color"
).forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                state.colorTheme =
                    button.dataset
                        .themeColor;

                saveState();

                applyColorTheme();

                showToast(
                    "Cores alteradas!",
                    "✦"
                );

            }
        );

    }
);


effectsToggle?.addEventListener(
    "change",
    () => {

        state.effects =
            effectsToggle
                .checked;

        saveState();

        applyEffects();

    }
);


animationsToggle?.addEventListener(
    "change",
    () => {

        state.animations =
            animationsToggle
                .checked;

        saveState();

        applyEffects();

    }
);


backTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


/* =========================================================
   LINKS INTERNOS
========================================================= */

$$('a[href^="#"]')
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );

                    const target =
                        document.querySelector(
                            href
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior:
                            state.animations
                                ? "smooth"
                                : "auto"
                    });

                }
            );

        }
    );


/* =========================================================
   HOVER DO CURSOR
========================================================= */

document.addEventListener(
    "mouseover",
    event => {

        if (
            event.target.closest(
                "button, a, input, textarea, select, .series-card"
            )
        ) {

            heartCursor.classList
                .add(
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
                "button, a, input, textarea, select, .series-card"
            )
        ) {

            heartCursor.classList
                .remove(
                    "hover"
                );

        }

    }
);


/* =========================================================
   ATUALIZA TUDO
========================================================= */

function updateEverything() {

    renderSeries();

    renderRanking();

    updateStats();

    updateAchievements();

    updateHeroButtons(
        activeSeriesId
    );

    if (
        seriesModal.classList
            .contains(
                "open"
            )
    ) {

        updateModalButtons(
            activeSeriesId
        );

        renderStars(
            activeSeriesId
        );

        episodeProgress.value =
            state.progress[
                activeSeriesId
            ] || 0;

        episodeProgressText
            .textContent =
                `${
                    state.progress[
                        activeSeriesId
                    ] || 0
                }%`;

    }

}


/* =========================================================
   AUTOPLAY HERO
========================================================= */

let heroAutoplay =
    null;


function startHeroAutoplay() {

    clearInterval(
        heroAutoplay
    );

    heroAutoplay =
        setInterval(
            () => {

                if (
                    document.hidden ||
                    seriesModal.classList
                        .contains(
                            "open"
                        ) ||
                    searchOverlay.classList
                        .contains(
                            "open"
                        )
                ) {
                    return;
                }

                updateHero(
                    heroIndex + 1
                );

            },
            9000
        );

}


/* =========================================================
   VISIBILIDADE
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            !document.hidden
        ) {

            startHeroAutoplay();

        }

    }
);


/* =========================================================
   ANIMAÇÃO DE ENTRADA AO ROLAR
========================================================= */

function activateRevealAnimations() {

    if (
        !("IntersectionObserver" in window)
    ) return;

    const elements =
        document.querySelectorAll(
            ".stat-card, .achievement-card, .person-card, .ranking-item"
        );

    elements.forEach(
        element => {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(20px)";

        }
    );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;

                        entry.target.style
                            .transition =
                                "opacity .6s ease, transform .6s ease";

                        entry.target.style
                            .opacity =
                                "1";

                        entry.target.style
                            .transform =
                                "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
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
   ANO
========================================================= */

if (
    currentYear
) {

    currentYear.textContent =
        new Date()
            .getFullYear();

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

async function init() {

    console.log(
        "♡ Blog da Bia iniciado"
    );

    updateStreak();

    applyTheme();

    applyColorTheme();

    applyEffects();

    createHeroDots();

    populateCommentSeries();

    renderSeries();

    renderRanking();

    renderComments();

    updateStats();

    updateAchievements();

    await prepareDailySeries();

    await updateHero(0);

    activate3DCards();

    handleScroll();

    startHeroAutoplay();

    setTimeout(
        activateRevealAnimations,
        300
    );

}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader?.classList
                    .add(
                        "hidden"
                    );

            },
            700
        );

    }
);


/* =========================================================
   EXECUTAR
========================================================= */

init();