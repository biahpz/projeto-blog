"use strict";


/* =========================================================
   BLOG DA BIA
   SCRIPT.JS
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (
    selector,
    parent = document
) => parent.querySelector(selector);


const $$ = (
    selector,
    parent = document
) => [
    ...parent.querySelectorAll(selector)
];


const body =
    document.body;


const STORAGE_KEY =
    "blogDaBia_v16";


function clamp(
    value,
    min,
    max
) {

    return Math.min(
        Math.max(
            value,
            min
        ),
        max
    );

}


function randomItem(array) {

    if (!array.length) {
        return null;
    }


    return array[
        Math.floor(
            Math.random()
            * array.length
        )
    ];

}


function escapeHTML(
    value = ""
) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function debounce(
    callback,
    delay = 250
) {

    let timer;


    return (...args) => {

        clearTimeout(timer);


        timer =
            setTimeout(
                () => callback(...args),
                delay
            );

    };

}


/* =========================================================
   ELEMENTOS
========================================================= */

const loader =
    $("#loader");

const scrollProgress =
    $("#scrollProgress");

const toast =
    $("#toast");

const toastIcon =
    $("#toastIcon");

const toastText =
    $("#toastText");

const header =
    $("#header");


/* HEADER */

const langPT =
    $("#langPT");

const langEN =
    $("#langEN");

const searchOpenBtn =
    $("#searchOpenBtn");

const themeBtn =
    $("#themeBtn");

const themeIcon =
    $("#themeIcon");

const shareBlogBtn =
    $("#shareBlogBtn");

const mobileMenuBtn =
    $("#mobileMenuBtn");


/* MOBILE */

const mobileMenu =
    $("#mobileMenu");

const mobileMenuClose =
    $("#mobileMenuClose");

const menuOverlay =
    $("#menuOverlay");


/* SEARCH */

const searchOverlay =
    $("#searchOverlay");

const searchClose =
    $("#searchClose");

const globalSearch =
    $("#globalSearch");

const clearSearch =
    $("#clearSearch");

const searchResults =
    $("#searchResults");


/* HERO */

const heroBackdrop =
    $("#heroBackdrop");

const heroTitle =
    $("#heroTitle");

const heroRating =
    $("#heroRating");

const heroYear =
    $("#heroYear");

const heroGenre =
    $("#heroGenre");

const heroSeasons =
    $("#heroSeasons");

const heroDescription =
    $("#heroDescription");

const heroDetailsBtn =
    $("#heroDetailsBtn");

const watchTrailerBtn =
    $("#watchTrailerBtn");

const heroFavoriteBtn =
    $("#heroFavoriteBtn");

const heroWatchlistBtn =
    $("#heroWatchlistBtn");

const randomSeriesBtn =
    $("#randomSeriesBtn");

const copySeriesBtn =
    $("#copySeriesBtn");

const shareSeriesBtn =
    $("#shareSeriesBtn");

const heroPoster =
    $("#heroPoster");

const heroPosterCard =
    $("#heroPosterCard");

const communityRating =
    $("#communityRating");

const heroDots =
    $("#heroDots");


/* STATS */

const favoriteCount =
    $("#favoriteCount");

const watchlistCount =
    $("#watchlistCount");

const watchedCount =
    $("#watchedCount");

const ratingsCount =
    $("#ratingsCount");

const commentsCount =
    $("#commentsCount");


/* PROFILE */

const profileAvatar =
    $("#profileAvatar");

const profileName =
    $("#profileName");

const profileLevelText =
    $("#profileLevelText");

const editProfileBtn =
    $("#editProfileBtn");

const levelNumber =
    $("#levelNumber");

const levelProgress =
    $("#levelProgress");

const levelText =
    $("#levelText");


/* CONTINUE */

const continueSection =
    $("#continueSection");

const continueGrid =
    $("#continueGrid");


/* HISTORY */

const historySection =
    $("#historySection");

const historyGrid =
    $("#historyGrid");

const clearHistoryBtn =
    $("#clearHistoryBtn");


/* DAILY */

const dailyTitle =
    $("#dailyTitle");

const dailyDescription =
    $("#dailyDescription");

const dailyImage =
    $("#dailyImage");

const dailySeriesBtn =
    $("#dailySeriesBtn");


/* CATALOG */

const seriesSearch =
    $("#seriesSearch");

const seriesSort =
    $("#seriesSort");

const filters =
    $("#filters");

const advancedFilterBtn =
    $("#advancedFilterBtn");

const advancedFilters =
    $("#advancedFilters");

const ratingFilter =
    $("#ratingFilter");

const statusFilter =
    $("#statusFilter");

const clearFiltersBtn =
    $("#clearFiltersBtn");

const seriesGrid =
    $("#seriesGrid");

const seriesResultCount =
    $("#seriesResultCount");

const emptySeries =
    $("#emptySeries");


/* PERSONAL */

const personalGrid =
    $("#personalGrid");

const personalEmpty =
    $("#personalEmpty");


/* BRAZIL */

const seeAllBrazilBtn =
    $("#seeAllBrazilBtn");

const brazilCarousel =
    $("#brazilCarousel");


/* QUIZ */

const startQuizBtn =
    $("#startQuizBtn");

const smartRecommendBtn =
    $("#smartRecommendBtn");


/* RANKING */

const rankingList =
    $("#rankingList");


/* USER STATS */

const favoriteGenreStat =
    $("#favoriteGenreStat");

const completionStat =
    $("#completionStat");

const averageRatingStat =
    $("#averageRatingStat");

const brazilWatchedStat =
    $("#brazilWatchedStat");


/* COMMENTS */

const commentForm =
    $("#commentForm");

const commentName =
    $("#commentName");

const commentSeries =
    $("#commentSeries");

const commentText =
    $("#commentText");

const commentCharCount =
    $("#commentCharCount");

const commentSpoiler =
    $("#commentSpoiler");

const commentCount =
    $("#commentCount");

const commentSort =
    $("#commentSort");

const commentsList =
    $("#commentsList");


/* DATA */

const exportDataBtn =
    $("#exportDataBtn");

const importDataBtn =
    $("#importDataBtn");

const importDataInput =
    $("#importDataInput");

const resetDataBtn =
    $("#resetDataBtn");


/* FLOATING */

const currentYear =
    $("#currentYear");

const backTop =
    $("#backTop");


/* SETTINGS */

const settingsFloating =
    $("#settingsFloating");

const settingsPanel =
    $("#settingsPanel");

const settingsClose =
    $("#settingsClose");

const animationsToggle =
    $("#animationsToggle");

const autoHeroToggle =
    $("#autoHeroToggle");


/* SERIES MODAL */

const seriesModal =
    $("#seriesModal");

const seriesModalClose =
    $("#seriesModalClose");

const modalBackdrop =
    $("#modalBackdrop");

const modalPoster =
    $("#modalPoster");

const modalBadge =
    $("#modalBadge");

const modalTitle =
    $("#modalTitle");

const modalRating =
    $("#modalRating");

const modalYear =
    $("#modalYear");

const modalGenre =
    $("#modalGenre");

const modalSeasons =
    $("#modalSeasons");

const modalDescription =
    $("#modalDescription");

const modalFavoriteBtn =
    $("#modalFavoriteBtn");

const modalWatchlistBtn =
    $("#modalWatchlistBtn");

const modalWatchingBtn =
    $("#modalWatchingBtn");

const modalWatchedBtn =
    $("#modalWatchedBtn");

const starRating =
    $("#starRating");

const episodeProgress =
    $("#episodeProgress");

const episodeProgressText =
    $("#episodeProgressText");

const currentEpisodeInput =
    $("#currentEpisodeInput");

const personalNoteInput =
    $("#personalNoteInput");

const saveSeriesInfoBtn =
    $("#saveSeriesInfoBtn");

const modalTrailerBtn =
    $("#modalTrailerBtn");

const modalShareBtn =
    $("#modalShareBtn");

const modalCopyBtn =
    $("#modalCopyBtn");

const castGrid =
    $("#castGrid");

const recommendations =
    $("#recommendations");


/* TRAILER */

const trailerModal =
    $("#trailerModal");

const trailerClose =
    $("#trailerClose");

const trailerTitle =
    $("#trailerTitle");

const trailerFrame =
    $("#trailerFrame");

const trailerPlayerWrap =
    $("#trailerPlayerWrap");

const trailerLoading =
    $("#trailerLoading");

const trailerPoster =
    $("#trailerPoster");

const trailerSeriesName =
    $("#trailerSeriesName");

const trailerSeriesMeta =
    $("#trailerSeriesMeta");

const trailerFavoriteBtn =
    $("#trailerFavoriteBtn");

const trailerWatchlistBtn =
    $("#trailerWatchlistBtn");

const cinemaModeBtn =
    $("#cinemaModeBtn");

const trailerUnavailable =
    $("#trailerUnavailable");


/* TEAM */

const teamProfileModal =
    $("#teamProfileModal");

const teamProfileClose =
    $("#teamProfileClose");

const teamModalImage =
    $("#teamModalImage");

const teamModalRole =
    $("#teamModalRole");

const teamModalName =
    $("#teamModalName");

const teamModalDescription =
    $("#teamModalDescription");

const teamModalTags =
    $("#teamModalTags");


/* CAST PHOTO */

const castPhotoModal =
    $("#castPhotoModal");

const castPhotoClose =
    $("#castPhotoClose");

const castPhotoLarge =
    $("#castPhotoLarge");

const castPhotoName =
    $("#castPhotoName");

const castPhotoCharacter =
    $("#castPhotoCharacter");


/* QUIZ MODAL */

const quizModal =
    $("#quizModal");

const quizClose =
    $("#quizClose");

const quizProgress =
    $("#quizProgress");

const quizContent =
    $("#quizContent");

const quizBeginBtn =
    $("#quizBeginBtn");


/* PROFILE MODAL */

const profileModal =
    $("#profileModal");

const profileClose =
    $("#profileClose");

const profileForm =
    $("#profileForm");

const profileNameInput =
    $("#profileNameInput");


/* =========================================================
   SÉRIES
========================================================= */

const seriesData = [

    {
        id: "stranger-things",
        title: "Stranger Things",
        query: "Stranger Things",
        year: 2016,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        rating: 4.9,

        genres: [
            "misterio",
            "drama",
            "suspense"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "Wb3kaP580kA",

        descriptionPT:
            "Em Hawkins, o desaparecimento de um garoto revela experimentos secretos, forças sobrenaturais e mistérios que mudam a vida de um grupo de amigos.",

        descriptionEN:
            "In Hawkins, a boy's disappearance reveals secret experiments, supernatural forces and mysteries that change the lives of a group of friends."
    },


    {
        id: "wednesday",
        title: "Wednesday",
        query: "Wednesday",
        year: 2022,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        rating: 4.8,

        genres: [
            "misterio",
            "suspense",
            "comedia"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "Di310WS8zLk",

        descriptionPT:
            "Wednesday Addams entra na Academia Nevermore e começa a investigar assassinatos, segredos familiares e acontecimentos sobrenaturais.",

        descriptionEN:
            "Wednesday Addams enters Nevermore Academy and begins investigating murders, family secrets and supernatural events."
    },


    {
        id: "outer-banks",
        title: "Outer Banks",
        query: "Outer Banks",
        year: 2020,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        rating: 4.7,

        genres: [
            "drama",
            "romance",
            "suspense"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "uk_hFfUFXh4",

        descriptionPT:
            "John B e seus amigos entram em uma caça ao tesouro cheia de segredos, perseguições, romances e perigos.",

        descriptionEN:
            "John B and his friends enter a treasure hunt filled with secrets, chases, romance and danger."
    },


    {
        id: "ginny-georgia",
        title: "Ginny & Georgia",
        query: "Ginny & Georgia",
        year: 2021,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        rating: 4.7,

        genres: [
            "drama",
            "romance",
            "comedia"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "QsacpJwXCO8",

        descriptionPT:
            "Ginny tenta viver uma adolescência normal enquanto descobre que sua mãe Georgia esconde um passado muito mais complicado do que parece.",

        descriptionEN:
            "Ginny tries to live a normal teenage life while discovering that her mother Georgia hides a far more complicated past than it seems."
    },


    {
        id: "bridgerton",
        title: "Bridgerton",
        query: "Bridgerton",
        year: 2020,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        rating: 4.7,

        genres: [
            "romance",
            "drama"
        ],

        countryPT: "Reino Unido",
        countryEN: "United Kingdom",

        brazil: false,
        featured: true,

        trailerId: "gpv7ayf_tyE",

        descriptionPT:
            "Romances, escândalos e disputas familiares movimentam a alta sociedade enquanto novos casais surgem a cada temporada.",

        descriptionEN:
            "Romance, scandals and family rivalries shake high society as new couples emerge each season."
    },


    {
        id: "elite",
        title: "Elite",
        query: "Elite",
        year: 2018,
        seasonsPT: "8 temporadas",
        seasonsEN: "8 seasons",
        rating: 4.4,

        genres: [
            "drama",
            "crime",
            "suspense",
            "romance"
        ],

        countryPT: "Espanha",
        countryEN: "Spain",

        brazil: false,
        featured: false,

        trailerId: "QNwhAdrdwp0",

        descriptionPT:
            "Alunos de uma escola de elite vivem romances, rivalidades e segredos que frequentemente acabam ligados a crimes.",

        descriptionEN:
            "Students at an elite school experience romance, rivalries and secrets that often become connected to crimes."
    },


    {
        id: "never-have-i-ever",
        title: "Eu Nunca...",
        titleEN: "Never Have I Ever",
        query: "Never Have I Ever",
        year: 2020,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        rating: 4.7,

        genres: [
            "comedia",
            "romance",
            "drama"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: false,

        trailerId: "HyOCCCbxwMQ",

        descriptionPT:
            "Devi tenta melhorar sua vida social enquanto lida com escola, família, amizades e relacionamentos complicados.",

        descriptionEN:
            "Devi tries to improve her social life while dealing with school, family, friendships and complicated relationships."
    },


    {
        id: "sex-education",
        title: "Sex Education",
        query: "Sex Education",
        year: 2019,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        rating: 4.8,

        genres: [
            "comedia",
            "drama",
            "romance"
        ],

        countryPT: "Reino Unido",
        countryEN: "United Kingdom",

        brazil: false,
        featured: false,

        trailerId: "Hd2ldTR-WpI",

        descriptionPT:
            "Otis usa o conhecimento adquirido com sua mãe terapeuta para aconselhar colegas e acaba envolvido nos problemas deles.",

        descriptionEN:
            "Otis uses knowledge from his therapist mother to advise classmates and ends up involved in their problems."
    },


    {
        id: "you",
        title: "You",
        query: "You",
        year: 2018,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        rating: 4.6,

        genres: [
            "suspense",
            "crime",
            "drama"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "ga1m0wjzscU",

        descriptionPT:
            "Joe Goldberg transforma paixão em obsessão enquanto tenta controlar pessoas e esconder seus próprios crimes.",

        descriptionEN:
            "Joe Goldberg turns love into obsession while trying to control people and hide his own crimes."
    },


    {
        id: "lucifer",
        title: "Lucifer",
        query: "Lucifer",
        year: 2016,
        seasonsPT: "6 temporadas",
        seasonsEN: "6 seasons",
        rating: 4.7,

        genres: [
            "drama",
            "crime",
            "comedia"
        ],

        countryPT: "Estados Unidos",
        countryEN: "United States",

        brazil: false,
        featured: true,

        trailerId: "X4bF_quwNtw",

        descriptionPT:
            "Lucifer Morningstar abandona o inferno, vai para Los Angeles e passa a ajudar a polícia a solucionar crimes.",

        descriptionEN:
            "Lucifer Morningstar leaves Hell, moves to Los Angeles and begins helping the police solve crimes."
    },


    {
        id: "sintonia",
        title: "Sintonia",
        query: "Sintonia",
        year: 2019,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        rating: 4.8,

        genres: [
            "drama",
            "crime",
            "brasil"
        ],

        countryPT: "Brasil",
        countryEN: "Brazil",

        brazil: true,
        featured: false,

        trailerId: "xsODpM3Rwdg",

        descriptionPT:
            "Doni, Nando e Rita crescem juntos na periferia de São Paulo enquanto música, crime e fé mudam seus caminhos.",

        descriptionEN:
            "Doni, Nando and Rita grow up together on the outskirts of São Paulo as music, crime and faith change their paths."
    },


    {
        id: "dna-do-crime",
        title: "DNA do Crime",
        titleEN: "Criminal Code",
        query: "Criminal Code",
        year: 2023,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        rating: 4.7,

        genres: [
            "crime",
            "suspense",
            "brasil"
        ],

        countryPT: "Brasil",
        countryEN: "Brazil",

        brazil: true,
        featured: false,

        trailerId: "L7YeC_quE-o",

        descriptionPT:
            "Policiais federais usam pistas de DNA para investigar uma poderosa organização criminosa depois de um grande assalto.",

        descriptionEN:
            "Federal police use DNA evidence to investigate a powerful criminal organization after a major robbery."
    },


    {
        id: "bom-dia-veronica",
        title: "Bom Dia, Verônica",
        titleEN: "Good Morning, Verônica",
        query: "Good Morning Veronica",
        year: 2020,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        rating: 4.7,

        genres: [
            "crime",
            "suspense",
            "drama",
            "brasil"
        ],

        countryPT: "Brasil",
        countryEN: "Brazil",

        brazil: true,
        featured: false,

        trailerId: "wY0e0L5c7xk",

        descriptionPT:
            "Uma escrivã da polícia investiga casos de violência e descobre uma rede de crimes muito mais perigosa do que imaginava.",

        descriptionEN:
            "A police clerk investigates cases of violence and discovers a criminal network far more dangerous than she imagined."
    },


    {
        id: "de-volta-aos-15",
        title: "De Volta aos 15",
        titleEN: "Back to 15",
        query: "Back to 15",
        year: 2022,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        rating: 4.5,

        genres: [
            "comedia",
            "romance",
            "drama",
            "brasil"
        ],

        countryPT: "Brasil",
        countryEN: "Brazil",

        brazil: true,
        featured: false,

        trailerId: "WLaFr5eem2o",

        descriptionPT:
            "Anita volta misteriosamente aos 15 anos e começa a alterar acontecimentos de seu próprio passado.",

        descriptionEN:
            "Anita mysteriously returns to age 15 and begins changing events from her own past."
    },


    {
        id: "pedaco-de-mim",
        title: "Pedaço de Mim",
        titleEN: "Desperate Lies",
        query: "Desperate Lies",
        year: 2024,
        seasonsPT: "1 temporada",
        seasonsEN: "1 season",
        rating: 4.5,

        genres: [
            "drama",
            "brasil"
        ],

        countryPT: "Brasil",
        countryEN: "Brazil",

        brazil: true,
        featured: false,

        trailerId: "hQ0F6-z6Zj8",

        descriptionPT:
            "Uma descoberta inesperada muda completamente a vida de uma mulher, seu casamento e sua família.",

        descriptionEN:
            "An unexpected discovery completely changes a woman's life, marriage and family."
    }

];


/* =========================================================
   PERFIS DA EQUIPE
========================================================= */

const teamProfiles = {

    beatriz: {

        name:
            "Beatriz",

        rolePT:
            "CRIADORA DO BLOG",

        roleEN:
            "BLOG CREATOR",

        image:
            "./img/Beatriz.jpg",

        descriptionPT:
            "Criadora do Blog da Bia. Responsável pela ideia do projeto, escolha das séries, conteúdo e identidade do blog.",

        descriptionEN:
            "Creator of Bia's Blog. Responsible for the project idea, series selection, content and blog identity.",

        tagsPT: [
            "Curadoria",
            "Conteúdo",
            "Séries",
            "Identidade"
        ],

        tagsEN: [
            "Curation",
            "Content",
            "Series",
            "Identity"
        ]

    },


    bayerlee: {

        name:
            "Bayerlee",

        rolePT:
            "DESENVOLVEDOR",

        roleEN:
            "DEVELOPER",

        image:
            "./img/Bayerlee.jpg",

        descriptionPT:
            "Desenvolvedor do Blog da Bia. Responsável pela estrutura em HTML, visual e responsividade em CSS e interações e funcionalidades em JavaScript.",

        descriptionEN:
            "Developer of Bia's Blog. Responsible for the HTML structure, CSS design and responsiveness, and JavaScript interactions and features.",

        tagsPT: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        tagsEN: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ]

    }

};


/* =========================================================
   STATE
========================================================= */

const defaultState = {

    language:
        "pt",

    theme:
        "dark",

    colorTheme:
        "default",

    animations:
        true,

    autoHero:
        true,

    favorites:
        [],

    watchlist:
        [],

    watching:
        [],

    watched:
        [],

    ratings:
        {},

    progress:
        {},

    episodes:
        {},

    notes:
        {},

    history:
        [],

    searchHistory:
        [],

    comments:
        [],

    profile: {

        name:
            "Visitante",

        avatar:
            "B"

    }

};


function cloneDefaultState() {

    return JSON.parse(
        JSON.stringify(
            defaultState
        )
    );

}


function loadState() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            );


        if (!saved) {

            return cloneDefaultState();

        }


        return {

            ...cloneDefaultState(),

            ...saved,

            profile: {

                ...defaultState.profile,
                ...(saved.profile || {})

            }

        };

    } catch {

        return cloneDefaultState();

    }

}


let state =
    loadState();


function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =========================================================
   TEMPORARY STATE
========================================================= */

let activeSeriesId =
    seriesData[0].id;


let heroIndex =
    0;


let activeFilter =
    "all";


let personalTab =
    "watchlist";


let heroTimer =
    null;


let toastTimer =
    null;


let currentTrailerSeries =
    null;


let quizStep =
    0;


let quizAnswers =
    [];


/* =========================================================
   MEDIA CACHE
========================================================= */

const mediaMemory =
    new Map();


const personImageMemory =
    new Map();


/* =========================================================
   PLACEHOLDER
========================================================= */

function createPlaceholder(
    title,
    type = "series"
) {

    const safeTitle =
        String(title)
            .replaceAll("&", "e");


    const initial =
        safeTitle
            .trim()
            .charAt(0)
            .toUpperCase()
        ||
        "B";


    const ratio =
        type === "person"
            ? "500 625"
            : "600 900";


    const width =
        type === "person"
            ? 500
            : 600;


    const height =
        type === "person"
            ? 625
            : 900;


    const svg =
        `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${ratio}"
        >

            <defs>

                <linearGradient
                    id="bg"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                >

                    <stop
                        offset="0%"
                        stop-color="#31283d"
                    />

                    <stop
                        offset="55%"
                        stop-color="#201c29"
                    />

                    <stop
                        offset="100%"
                        stop-color="#121318"
                    />

                </linearGradient>

            </defs>


            <rect
                width="100%"
                height="100%"
                fill="url(#bg)"
            />


            <circle
                cx="50%"
                cy="42%"
                r="72"
                fill="rgba(255,255,255,.06)"
            />


            <text
                x="50%"
                y="44%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="#ffffff"
                font-family="Arial"
                font-size="64"
                font-weight="700"
            >
                ${initial}
            </text>


            <text
                x="50%"
                y="62%"
                text-anchor="middle"
                fill="#b8b4c1"
                font-family="Arial"
                font-size="24"
            >
                ${safeTitle}
            </text>

        </svg>
        `;


    return (
        "data:image/svg+xml;charset=UTF-8,"
        +
        encodeURIComponent(svg)
    );

}


/* =========================================================
   GETTERS
========================================================= */

function getSeries(id) {

    return seriesData.find(
        series =>
            series.id === id
    );

}


function getSeriesTitle(series) {

    if (
        state.language === "en"
        &&
        series.titleEN
    ) {

        return series.titleEN;

    }


    return series.title;

}


function getSeriesDescription(series) {

    return state.language === "en"
        ? series.descriptionEN
        : series.descriptionPT;

}


function getSeriesCountry(series) {

    return state.language === "en"
        ? series.countryEN
        : series.countryPT;

}


function getSeriesSeasons(series) {

    return state.language === "en"
        ? series.seasonsEN
        : series.seasonsPT;

}


/* =========================================================
   GÊNEROS
========================================================= */

function formatGenre(genre) {

    const pt = {

        misterio:
            "Mistério",

        suspense:
            "Suspense",

        drama:
            "Drama",

        romance:
            "Romance",

        crime:
            "Crime",

        comedia:
            "Comédia",

        brasil:
            "Brasil"

    };


    const en = {

        misterio:
            "Mystery",

        suspense:
            "Thriller",

        drama:
            "Drama",

        romance:
            "Romance",

        crime:
            "Crime",

        comedia:
            "Comedy",

        brasil:
            "Brazil"

    };


    return (
        state.language === "en"
            ? en
            : pt
    )[genre]
    ||
    genre;

}


/* =========================================================
   BUSCAR IMAGEM DE PESSOA
========================================================= */

async function getPersonImage(
    person
) {

    if (!person) {
        return "";
    }


    if (
        person.image
    ) {

        return person.image;

    }


    if (
        personImageMemory.has(
            person.id
        )
    ) {

        return personImageMemory.get(
            person.id
        );

    }


    if (!person.id) {

        return createPlaceholder(
            person.name,
            "person"
        );

    }


    try {

        const response =
            await fetch(
                `https://api.tvmaze.com/people/${person.id}`
            );


        if (!response.ok) {

            throw new Error(
                "Person request failed"
            );

        }


        const data =
            await response.json();


        const image =
            data?.image?.original
            ||
            data?.image?.medium
            ||
            createPlaceholder(
                person.name,
                "person"
            );


        personImageMemory.set(
            person.id,
            image
        );


        return image;

    } catch {

        const fallback =
            createPlaceholder(
                person.name,
                "person"
            );


        personImageMemory.set(
            person.id,
            fallback
        );


        return fallback;

    }

}


/* =========================================================
   SERIES MEDIA
========================================================= */

async function getSeriesMedia(series) {

    if (
        mediaMemory.has(
            series.id
        )
    ) {

        return mediaMemory.get(
            series.id
        );

    }


    try {

        const response =
            await fetch(
                "https://api.tvmaze.com/singlesearch/shows?q="
                +
                encodeURIComponent(
                    series.query
                )
                +
                "&embed=cast"
            );


        if (!response.ok) {

            throw new Error(
                "TVMaze error"
            );

        }


        const result =
            await response.json();


        const poster =
            result?.image?.original
            ||
            result?.image?.medium
            ||
            createPlaceholder(
                getSeriesTitle(series)
            );


        const rawCast =
            (
                result?._embedded?.cast
                ||
                []
            )
                .slice(
                    0,
                    10
                );


        const cast =
            await Promise.all(
                rawCast.map(
                    async item => {

                        const person = {

                            id:
                                item.person?.id,

                            name:
                                item.person?.name
                                ||
                                "—",

                            character:
                                item.character?.name
                                ||
                                "",

                            image:
                                item.person?.image?.original
                                ||
                                item.person?.image?.medium
                                ||
                                ""

                        };


                        person.image =
                            await getPersonImage(
                                person
                            );


                        return person;

                    }
                )
            );


        const media = {

            poster,
            cast

        };


        mediaMemory.set(
            series.id,
            media
        );


        return media;

    } catch (error) {

        console.warn(
            "Erro ao carregar mídia:",
            series.title,
            error
        );


        const fallback = {

            poster:
                createPlaceholder(
                    getSeriesTitle(series)
                ),

            cast:
                []

        };


        mediaMemory.set(
            series.id,
            fallback
        );


        return fallback;

    }

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function setupImageFallback(
    image,
    title,
    type = "series"
) {

    if (!image) {
        return;
    }


    image.addEventListener(
        "error",
        () => {

            if (
                image.dataset.fallbackApplied
                === "true"
            ) {
                return;
            }


            image.dataset.fallbackApplied =
                "true";


            image.src =
                createPlaceholder(
                    title,
                    type
                );

        },
        {
            once: true
        }
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    icon = "✓"
) {

    if (
        !toast
        ||
        !toastText
    ) {
        return;
    }


    toastText.textContent =
        message;


    toastIcon.textContent =
        icon;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2300
        );

}


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(language) {

    if (
        ![
            "pt",
            "en"
        ].includes(language)
    ) {
        return;
    }


    state.language =
        language;


    saveState();


    langPT?.classList.toggle(
        "active",
        language === "pt"
    );


    langEN?.classList.toggle(
        "active",
        language === "en"
    );


    document.documentElement.lang =
        language === "en"
            ? "en"
            : "pt-BR";


    applyBasicTranslations();

    populateCommentSeries();

    renderEverything();


    showToast(
        language === "pt"
            ? "🇧🇷 Português"
            : "🇺🇸 English"
    );

}


function applyBasicTranslations() {

    const dictionary = {

        pt: {

            home:
                "Início",

            series:
                "Séries",

            brazil:
                "Brasil",

            myList:
                "Minha Lista",

            ranking:
                "Ranking",

            community:
                "Comunidade",

            about:
                "Sobre",

            brandSubtitle:
                "séries & histórias",

            loading:
                "preparando o catálogo...",

            search:
                "PESQUISAR",

            whatWatch:
                "O que vamos assistir?",

            details:
                "Ver detalhes",

            watchTrailer:
                "Assistir trailer",

            communityRating:
                "avaliação",

            favorites:
                "Favoritas",

            watchlist:
                "Minha lista",

            watched:
                "Assistidas",

            ratings:
                "Avaliações",

            comments:
                "Comentários",

            yourProfile:
                "SEU PERFIL",

            marathonLevel:
                "Nível de maratonista",

            continue:
                "CONTINUE",

            continueWatching:
                "Continue assistindo",

            history:
                "HISTÓRICO",

            recentlyViewed:
                "Vistas recentemente",

            clearHistory:
                "Limpar histórico",

            biaRecommends:
                "BIA RECOMENDA",

            seriesOfDay:
                "Série do dia",

            catalog:
                "CATÁLOGO",

            seriesForMarathon:
                "Séries para maratonar",

            catalogDescription:
                "Escolha sua próxima série.",

            results:
                "resultados",

            personal:
                "PESSOAL",

            brazilianProductions:
                "Produções brasileiras",

            brazilDescription:
                "Histórias brasileiras presentes no blog.",

            recommendation:
                "RECOMENDAÇÃO",

            findYourSeries:
                "Descubra sua próxima série",

            quizDescription:
                "Responda algumas perguntas e receba uma indicação.",

            statistics:
                "ESTATÍSTICAS",

            yourStatistics:
                "Suas estatísticas",

            favoriteGenre:
                "Gênero favorito",

            completion:
                "Catálogo concluído",

            averageRating:
                "Sua nota média",

            brazilWatched:
                "Brasileiras assistidas",

            talkAboutSeries:
                "Vamos falar de séries?",

            communityDescription:
                "Comente e compartilhe sua opinião.",

            leaveComment:
                "Novo comentário",

            yourName:
                "Seu nome",

            whichSeries:
                "Série",

            yourComment:
                "Comentário",

            containsSpoiler:
                "Contém spoiler",

            behindBlog:
                "POR TRÁS DO BLOG",

            yourData:
                "SEUS DADOS",

            savedInBrowser:
                "Dados salvos no navegador",

            dataDescription:
                "Favoritos, listas, avaliações e comentários ficam salvos localmente."

        },


        en: {

            home:
                "Home",

            series:
                "Series",

            brazil:
                "Brazil",

            myList:
                "My List",

            ranking:
                "Ranking",

            community:
                "Community",

            about:
                "About",

            brandSubtitle:
                "series & stories",

            loading:
                "preparing the catalog...",

            search:
                "SEARCH",

            whatWatch:
                "What are we watching?",

            details:
                "View details",

            watchTrailer:
                "Watch trailer",

            communityRating:
                "rating",

            favorites:
                "Favorites",

            watchlist:
                "My list",

            watched:
                "Watched",

            ratings:
                "Ratings",

            comments:
                "Comments",

            yourProfile:
                "YOUR PROFILE",

            marathonLevel:
                "Binge level",

            continue:
                "CONTINUE",

            continueWatching:
                "Continue watching",

            history:
                "HISTORY",

            recentlyViewed:
                "Recently viewed",

            clearHistory:
                "Clear history",

            biaRecommends:
                "BIA RECOMMENDS",

            seriesOfDay:
                "Series of the day",

            catalog:
                "CATALOG",

            seriesForMarathon:
                "Series to binge",

            catalogDescription:
                "Choose your next series.",

            results:
                "results",

            personal:
                "PERSONAL",

            brazilianProductions:
                "Brazilian productions",

            brazilDescription:
                "Brazilian stories featured on the blog.",

            recommendation:
                "RECOMMENDATION",

            findYourSeries:
                "Find your next series",

            quizDescription:
                "Answer a few questions and get a recommendation.",

            statistics:
                "STATISTICS",

            yourStatistics:
                "Your statistics",

            favoriteGenre:
                "Favorite genre",

            completion:
                "Catalog completed",

            averageRating:
                "Your average rating",

            brazilWatched:
                "Brazilian series watched",

            talkAboutSeries:
                "Let's talk about series?",

            communityDescription:
                "Comment and share your opinion.",

            leaveComment:
                "New comment",

            yourName:
                "Your name",

            whichSeries:
                "Series",

            yourComment:
                "Comment",

            containsSpoiler:
                "Contains spoiler",

            behindBlog:
                "BEHIND THE BLOG",

            yourData:
                "YOUR DATA",

            savedInBrowser:
                "Data saved in your browser",

            dataDescription:
                "Favorites, lists, ratings and comments are stored locally."

        }

    };


    const text =
        dictionary[
            state.language
        ];


    $$("[data-i18n]")
        .forEach(
            element => {

                const key =
                    element.dataset.i18n;


                if (
                    text[key]
                    !== undefined
                ) {

                    element.textContent =
                        text[key];

                }

            }
        );


    $$("[data-i18n-placeholder]")
        .forEach(
            element => {

                const key =
                    element.dataset
                        .i18nPlaceholder;


                if (
                    key === "searchPlaceholder"
                ) {

                    element.placeholder =
                        state.language === "en"
                            ? "Type a series..."
                            : "Digite uma série...";

                }


                if (
                    key === "searchSeries"
                ) {

                    element.placeholder =
                        state.language === "en"
                            ? "Search series..."
                            : "Buscar série...";

                }

            }
        );

}


/* =========================================================
   THEME
========================================================= */

function applyTheme() {

    body.classList.toggle(
        "light-mode",
        state.theme === "light"
    );


    if (themeIcon) {

        themeIcon.textContent =
            state.theme === "light"
                ? "☾"
                : "☀";

    }

}


function toggleTheme() {

    state.theme =
        state.theme === "dark"
            ? "light"
            : "dark";


    saveState();

    applyTheme();


    showToast(
        state.language === "en"
            ? (
                state.theme === "dark"
                    ? "Dark mode"
                    : "Light mode"
            )
            : (
                state.theme === "dark"
                    ? "Tema escuro"
                    : "Tema claro"
            )
    );

}


/* =========================================================
   COLOR THEME
========================================================= */

function applyColorTheme() {

    if (
        state.colorTheme === "default"
    ) {

        body.removeAttribute(
            "data-color-theme"
        );

    } else {

        body.dataset.colorTheme =
            state.colorTheme;

    }


    $$(".theme-color")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.themeColor
                    === state.colorTheme
                );

            }
        );

}


/* =========================================================
   ANIMATION SETTINGS
========================================================= */

function applyAnimationSetting() {

    body.classList.toggle(
        "animations-off",
        !state.animations
    );


    if (
        animationsToggle
    ) {

        animationsToggle.checked =
            state.animations;

    }


    if (
        autoHeroToggle
    ) {

        autoHeroToggle.checked =
            state.autoHero;

    }

}


/* =========================================================
   STATUS HELPERS
========================================================= */

function isFavorite(id) {

    return state.favorites
        .includes(id);

}


function isWatchlisted(id) {

    return state.watchlist
        .includes(id);

}


function isWatching(id) {

    return state.watching
        .includes(id);

}


function isWatched(id) {

    return state.watched
        .includes(id);

}


function toggleArrayItem(
    array,
    id
) {

    if (
        array.includes(id)
    ) {

        return array.filter(
            item =>
                item !== id
        );

    }


    return [
        ...array,
        id
    ];

}


/* =========================================================
   FAVORITE
========================================================= */

function toggleFavorite(id) {

    state.favorites =
        toggleArrayItem(
            state.favorites,
            id
        );


    saveState();

    refreshUserInterface();


    showToast(
        isFavorite(id)
            ? (
                state.language === "en"
                    ? "Added to favorites"
                    : "Adicionada aos favoritos"
            )
            : (
                state.language === "en"
                    ? "Removed from favorites"
                    : "Removida dos favoritos"
            ),
        isFavorite(id)
            ? "★"
            : "✓"
    );

}


/* =========================================================
   WATCHLIST
========================================================= */

function toggleWatchlist(id) {

    state.watchlist =
        toggleArrayItem(
            state.watchlist,
            id
        );


    saveState();

    refreshUserInterface();


    showToast(
        isWatchlisted(id)
            ? (
                state.language === "en"
                    ? "Added to your list"
                    : "Adicionada à sua lista"
            )
            : (
                state.language === "en"
                    ? "Removed from your list"
                    : "Removida da sua lista"
            )
    );

}


/* =========================================================
   WATCHING
========================================================= */

function toggleWatching(id) {

    const turningOn =
        !isWatching(id);


    if (turningOn) {

        if (
            !state.watching
                .includes(id)
        ) {

            state.watching.push(id);

        }


        state.watched =
            state.watched.filter(
                item =>
                    item !== id
            );


        if (
            !state.progress[id]
        ) {

            state.progress[id] =
                5;

        }

    } else {

        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );

    }


    saveState();

    refreshUserInterface();

}


/* =========================================================
   WATCHED
========================================================= */

function toggleWatched(id) {

    const turningOn =
        !isWatched(id);


    if (turningOn) {

        if (
            !state.watched
                .includes(id)
        ) {

            state.watched.push(id);

        }


        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );


        state.progress[id] =
            100;

    } else {

        state.watched =
            state.watched.filter(
                item =>
                    item !== id
            );


        if (
            state.progress[id] === 100
        ) {

            state.progress[id] =
                0;

        }

    }


    saveState();

    refreshUserInterface();

}


/* =========================================================
   HERO
========================================================= */

const featuredSeries =
    seriesData.filter(
        series =>
            series.featured
    );


function createHeroDots() {

    if (!heroDots) {
        return;
    }


    heroDots.innerHTML =
        featuredSeries
            .map(
                (
                    series,
                    index
                ) => `
                    <button
                        class="hero-dot ${
                            index === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-hero-index="${index}"
                        type="button"
                        aria-label="${
                            escapeHTML(
                                getSeriesTitle(
                                    series
                                )
                            )
                        }"
                    ></button>
                `
            )
            .join("");

}


async function updateHero() {

    if (
        !featuredSeries.length
    ) {
        return;
    }


    const series =
        featuredSeries[
            heroIndex
        ];


    activeSeriesId =
        series.id;


    heroTitle.textContent =
        getSeriesTitle(series);


    heroRating.textContent =
        `★ ${series.rating}`;


    heroYear.textContent =
        series.year;


    heroGenre.textContent =
        formatGenre(
            series.genres[0]
        );


    heroSeasons.textContent =
        getSeriesSeasons(series);


    heroDescription.textContent =
        getSeriesDescription(series);


    communityRating.textContent =
        `${series.rating} / 5`;


    updateHeroButtons(
        series.id
    );


    const media =
        await getSeriesMedia(
            series
        );


    heroPoster.src =
        media.poster;


    heroPoster.alt =
        getSeriesTitle(series);


    heroBackdrop.style
        .backgroundImage =
        `url("${media.poster}")`;


    setupImageFallback(
        heroPoster,
        getSeriesTitle(series)
    );


    $$(".hero-dot")
        .forEach(
            (
                dot,
                index
            ) => {

                dot.classList.toggle(
                    "active",
                    index === heroIndex
                );

            }
        );

}


/* =========================================================
   HERO BUTTONS
========================================================= */

function updateHeroButtons(id) {

    if (
        heroFavoriteBtn
    ) {

        heroFavoriteBtn.classList.toggle(
            "active",
            isFavorite(id)
        );


        heroFavoriteBtn.textContent =
            isFavorite(id)
                ? (
                    state.language === "en"
                        ? "★ Favorited"
                        : "★ Favoritada"
                )
                : (
                    state.language === "en"
                        ? "☆ Favorite"
                        : "☆ Favoritar"
                );

    }


    if (
        heroWatchlistBtn
    ) {

        heroWatchlistBtn.classList.toggle(
            "active",
            isWatchlisted(id)
        );


        heroWatchlistBtn.textContent =
            isWatchlisted(id)
                ? (
                    state.language === "en"
                        ? "✓ In my list"
                        : "✓ Na minha lista"
                )
                : (
                    state.language === "en"
                        ? "+ My list"
                        : "+ Minha lista"
                );

    }

}


/* =========================================================
   AUTO HERO
========================================================= */

function startHeroTimer() {

    clearInterval(
        heroTimer
    );


    if (
        !state.autoHero
    ) {
        return;
    }


    heroTimer =
        setInterval(
            () => {

                if (
                    document.hidden
                    ||
                    seriesModal
                        ?.classList
                        .contains("open")
                    ||
                    trailerModal
                        ?.classList
                        .contains("open")
                    ||
                    searchOverlay
                        ?.classList
                        .contains("open")
                ) {

                    return;

                }


                heroIndex =
                    (
                        heroIndex
                        +
                        1
                    )
                    %
                    featuredSeries.length;


                updateHero();

            },
            8500
        );

}


/* =========================================================
   FILTER SERIES
========================================================= */

function getFilteredSeries() {

    let list =
        [...seriesData];


    if (
        activeFilter !== "all"
    ) {

        if (
            activeFilter === "brasil"
        ) {

            list =
                list.filter(
                    item =>
                        item.brazil
                );

        } else {

            list =
                list.filter(
                    item =>
                        item.genres
                            .includes(
                                activeFilter
                            )
                );

        }

    }


    const query =
        seriesSearch
            ?.value
            .trim()
            .toLowerCase()
        ||
        "";


    if (query) {

        list =
            list.filter(
                item => {

                    const searchable =
                        [
                            item.title,
                            item.titleEN || "",
                            getSeriesCountry(item),
                            getSeriesDescription(item),
                            ...item.genres
                        ]
                            .join(" ")
                            .toLowerCase();


                    return searchable
                        .includes(query);

                }
            );

    }


    const minimum =
        Number(
            ratingFilter?.value
            ||
            0
        );


    if (
        minimum > 0
    ) {

        list =
            list.filter(
                item =>
                    item.rating >= minimum
            );

    }


    const status =
        statusFilter?.value
        ||
        "all";


    if (
        status === "favorite"
    ) {

        list =
            list.filter(
                item =>
                    isFavorite(item.id)
            );

    }


    if (
        status === "watchlist"
    ) {

        list =
            list.filter(
                item =>
                    isWatchlisted(item.id)
            );

    }


    if (
        status === "watching"
    ) {

        list =
            list.filter(
                item =>
                    isWatching(item.id)
            );

    }


    if (
        status === "watched"
    ) {

        list =
            list.filter(
                item =>
                    isWatched(item.id)
            );

    }


    switch (
        seriesSort?.value
        ||
        "featured"
    ) {

        case "rating":

            list.sort(
                (
                    a,
                    b
                ) =>
                    b.rating
                    -
                    a.rating
            );

            break;


        case "az":

            list.sort(
                (
                    a,
                    b
                ) =>
                    getSeriesTitle(a)
                        .localeCompare(
                            getSeriesTitle(b)
                        )
            );

            break;


        case "za":

            list.sort(
                (
                    a,
                    b
                ) =>
                    getSeriesTitle(b)
                        .localeCompare(
                            getSeriesTitle(a)
                        )
            );

            break;


        case "newest":

            list.sort(
                (
                    a,
                    b
                ) =>
                    b.year - a.year
            );

            break;


        case "oldest":

            list.sort(
                (
                    a,
                    b
                ) =>
                    a.year - b.year
            );

            break;


        default:

            list.sort(
                (
                    a,
                    b
                ) =>
                    Number(
                        b.featured
                    )
                    -
                    Number(
                        a.featured
                    )
            );

    }


    return list;

}


/* =========================================================
   SERIES CARD
========================================================= */

function seriesCardHTML(series) {

    return `
        <article
            class="series-card"
            data-series-card="${series.id}"
        >

            <div
                class="series-poster"
            >

                <img
                    data-series-image="${series.id}"
                    src="${
                        createPlaceholder(
                            getSeriesTitle(series)
                        )
                    }"
                    alt="${
                        escapeHTML(
                            getSeriesTitle(series)
                        )
                    }"
                    loading="lazy"
                >


                <div
                    class="card-top-actions"
                >

                    <span
                        class="card-badge"
                    >
                        ${
                            series.brazil
                                ? "🇧🇷 BRASIL"
                                : escapeHTML(
                                    formatGenre(
                                        series.genres[0]
                                    )
                                )
                        }
                    </span>


                    <button
                        class="card-heart ${
                            isFavorite(series.id)
                                ? "active"
                                : ""
                        }"
                        data-toggle-favorite="${series.id}"
                        type="button"
                    >
                        ${
                            isFavorite(series.id)
                                ? "★"
                                : "☆"
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
                            getSeriesTitle(series)
                        )
                    }
                </h3>


                <div
                    class="series-card-meta"
                >

                    <span>
                        ${series.year}
                    </span>

                    <span>
                        ${
                            escapeHTML(
                                formatGenre(
                                    series.genres[0]
                                )
                            )
                        }
                    </span>

                </div>


                <p
                    class="series-card-description"
                >
                    ${
                        escapeHTML(
                            getSeriesDescription(
                                series
                            )
                        )
                    }
                </p>


                <div
                    class="series-card-footer"
                >

                    <span
                        class="series-rating"
                    >
                        ★ ${series.rating}
                    </span>


                    <button
                        class="open-series-btn"
                        data-open-series="${series.id}"
                        type="button"
                    >
                        ${
                            state.language === "en"
                                ? "details"
                                : "detalhes"
                        }
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   LOAD LIST IMAGES
========================================================= */

async function loadImagesForList(
    list,
    attribute
) {

    await Promise.allSettled(
        list.map(
            async series => {

                const image =
                    document.querySelector(
                        `[${attribute}="${series.id}"]`
                    );


                if (!image) {
                    return;
                }


                const media =
                    await getSeriesMedia(
                        series
                    );


                image.src =
                    media.poster;


                setupImageFallback(
                    image,
                    getSeriesTitle(series)
                );

            }
        )
    );

}


/* =========================================================
   RENDER SERIES
========================================================= */

async function renderSeries() {

    if (!seriesGrid) {
        return;
    }


    const list =
        getFilteredSeries();


    seriesGrid.innerHTML =
        list
            .map(seriesCardHTML)
            .join("");


    seriesResultCount.textContent =
        list.length;


    emptySeries.classList.toggle(
        "hidden",
        list.length !== 0
    );


    await loadImagesForList(
        list,
        "data-series-image"
    );

}


/* =========================================================
   PERSONAL
========================================================= */

function getPersonalSeries() {

    switch (
        personalTab
    ) {

        case "favorites":

            return seriesData.filter(
                item =>
                    isFavorite(item.id)
            );


        case "watching":

            return seriesData.filter(
                item =>
                    isWatching(item.id)
            );


        case "watched":

            return seriesData.filter(
                item =>
                    isWatched(item.id)
            );


        default:

            return seriesData.filter(
                item =>
                    isWatchlisted(item.id)
            );

    }

}


async function renderPersonalList() {

    if (!personalGrid) {
        return;
    }


    const list =
        getPersonalSeries();


    personalGrid.innerHTML =
        list
            .map(
                item => `
                    <button
                        class="personal-card"
                        data-open-series="${item.id}"
                        type="button"
                    >

                        <img
                            data-personal-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(item)
                                )
                            }"
                        >


                        <div
                            class="personal-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    Number(
                                        state.progress[
                                            item.id
                                        ]
                                        ||
                                        0
                                    )
                                }%
                            </small>

                        </div>

                    </button>
                `
            )
            .join("");


    personalEmpty.style.display =
        list.length
            ? "none"
            : "";


    await loadImagesForList(
        list,
        "data-personal-image"
    );

}


/* =========================================================
   CONTINUE
========================================================= */

async function renderContinueWatching() {

    const list =
        seriesData.filter(
            item => {

                const progress =
                    Number(
                        state.progress[
                            item.id
                        ]
                        ||
                        0
                    );


                return (
                    progress > 0
                    &&
                    progress < 100
                );

            }
        );


    continueSection
        ?.classList
        .toggle(
            "show",
            list.length > 0
        );


    if (!continueGrid) {
        return;
    }


    continueGrid.innerHTML =
        list
            .map(
                item => {

                    const progress =
                        Number(
                            state.progress[
                                item.id
                            ]
                            ||
                            0
                        );


                    return `
                        <button
                            class="continue-card"
                            data-open-series="${item.id}"
                            type="button"
                        >

                            <img
                                data-continue-image="${item.id}"
                                src="${
                                    createPlaceholder(
                                        getSeriesTitle(item)
                                    )
                                }"
                                alt=""
                            >


                            <div
                                class="continue-content"
                            >

                                <strong>
                                    ${
                                        escapeHTML(
                                            getSeriesTitle(item)
                                        )
                                    }
                                </strong>


                                <div
                                    class="continue-progress"
                                >
                                    <span
                                        style="width:${progress}%"
                                    ></span>
                                </div>


                                <small>
                                    ${progress}%
                                </small>

                            </div>

                        </button>
                    `;

                }
            )
            .join("");


    await loadImagesForList(
        list,
        "data-continue-image"
    );

}


/* =========================================================
   HISTORY
========================================================= */

function addToHistory(id) {

    state.history =
        state.history.filter(
            item =>
                item !== id
        );


    state.history.unshift(id);


    state.history =
        state.history.slice(
            0,
            8
        );


    saveState();

}


async function renderHistory() {

    const list =
        state.history
            .map(getSeries)
            .filter(Boolean);


    historySection
        ?.classList
        .toggle(
            "show",
            list.length > 0
        );


    if (!historyGrid) {
        return;
    }


    historyGrid.innerHTML =
        list
            .map(
                item => `
                    <button
                        class="history-card"
                        data-open-series="${item.id}"
                        type="button"
                    >

                        <img
                            data-history-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt=""
                        >


                        <div
                            class="history-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(item)
                                    )
                                }
                            </strong>

                        </div>

                    </button>
                `
            )
            .join("");


    await loadImagesForList(
        list,
        "data-history-image"
    );

}


/* =========================================================
   BRAZIL
========================================================= */

async function renderBrazil() {

    if (!brazilCarousel) {
        return;
    }


    const list =
        seriesData.filter(
            item =>
                item.brazil
        );


    brazilCarousel.innerHTML =
        list
            .map(
                item => `
                    <button
                        class="brazil-card"
                        data-open-series="${item.id}"
                        type="button"
                    >

                        <img
                            data-brazil-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt=""
                        >


                        <div
                            class="brazil-card-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${item.year}
                                ·
                                ★ ${item.rating}
                            </small>

                        </div>

                    </button>
                `
            )
            .join("");


    await loadImagesForList(
        list,
        "data-brazil-image"
    );

}


/* =========================================================
   RANKING
========================================================= */

async function renderRanking() {

    if (!rankingList) {
        return;
    }


    const ranking =
        [...seriesData]
            .sort(
                (
                    a,
                    b
                ) =>
                    b.rating
                    -
                    a.rating
            );


    rankingList.innerHTML =
        ranking
            .map(
                (
                    item,
                    index
                ) => `
                    <button
                        class="ranking-item"
                        data-open-series="${item.id}"
                        type="button"
                    >

                        <span
                            class="ranking-position"
                        >
                            ${
                                String(
                                    index + 1
                                )
                                    .padStart(
                                        2,
                                        "0"
                                    )
                            }
                        </span>


                        <img
                            data-ranking-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt=""
                        >


                        <span>

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    formatGenre(
                                        item.genres[0]
                                    )
                                }
                                ·
                                ${item.year}
                            </small>

                        </span>


                        <span>
                            ★ ${item.rating}
                        </span>

                    </button>
                `
            )
            .join("");


    await loadImagesForList(
        ranking,
        "data-ranking-image"
    );

}


/* =========================================================
   DAILY
========================================================= */

function getDailySeries() {

    const date =
        new Date();


    const seed =
        date.getFullYear()
        +
        date.getMonth()
        +
        date.getDate();


    return seriesData[
        seed
        %
        seriesData.length
    ];

}


async function renderDailySeries() {

    const series =
        getDailySeries();


    if (!series) {
        return;
    }


    dailyTitle.textContent =
        getSeriesTitle(series);


    dailyDescription.textContent =
        getSeriesDescription(series);


    const media =
        await getSeriesMedia(
            series
        );


    dailyImage.src =
        media.poster;


    setupImageFallback(
        dailyImage,
        getSeriesTitle(series)
    );

}


/* =========================================================
   STATS
========================================================= */

function calculateXP() {

    return (
        state.favorites.length
        * 8
        +
        state.watchlist.length
        * 5
        +
        state.watching.length
        * 10
        +
        state.watched.length
        * 25
        +
        Object.keys(
            state.ratings
        ).length
        * 12
        +
        state.comments.length
        * 15
    );

}


function getFavoriteGenre() {

    const count = {};


    [
        ...state.favorites,
        ...state.watched,
        ...state.watching
    ]
        .forEach(
            id => {

                const series =
                    getSeries(id);


                if (!series) {
                    return;
                }


                series.genres
                    .filter(
                        genre =>
                            genre !== "brasil"
                    )
                    .forEach(
                        genre => {

                            count[genre] =
                                (
                                    count[genre]
                                    ||
                                    0
                                )
                                +
                                1;

                        }
                    );

            }
        );


    return Object.entries(
        count
    )
        .sort(
            (
                a,
                b
            ) =>
                b[1] - a[1]
        )[0]?.[0]
        ||
        null;

}


function updateStats() {

    favoriteCount.textContent =
        state.favorites.length;


    watchlistCount.textContent =
        state.watchlist.length;


    watchedCount.textContent =
        state.watched.length;


    ratingsCount.textContent =
        Object.keys(
            state.ratings
        ).length;


    commentsCount.textContent =
        state.comments.length;


    const xp =
        calculateXP();


    const level =
        Math.floor(
            xp / 100
        )
        +
        1;


    const progress =
        xp % 100;


    levelNumber.textContent =
        level;


    levelProgress.style.width =
        `${progress}%`;


    levelText.textContent =
        `${progress} / 100 XP`;


    const favoriteGenre =
        getFavoriteGenre();


    favoriteGenreStat.textContent =
        favoriteGenre
            ? formatGenre(
                favoriteGenre
            )
            : "—";


    completionStat.textContent =
        `${
            Math.round(
                state.watched.length
                /
                seriesData.length
                *
                100
            )
        }%`;


    const ratings =
        Object.values(
            state.ratings
        )
            .map(Number)
            .filter(
                value =>
                    value > 0
            );


    averageRatingStat.textContent =
        ratings.length
            ? (
                ratings.reduce(
                    (
                        total,
                        value
                    ) =>
                        total + value,
                    0
                )
                /
                ratings.length
            )
                .toFixed(1)
            : "—";


    brazilWatchedStat.textContent =
        seriesData.filter(
            series =>
                series.brazil
                &&
                isWatched(
                    series.id
                )
        ).length;


    updateAchievements();

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function updateAchievements() {

    const unlocked = {

        favorite:
            state.favorites.length
            >= 1,

        watchlist:
            state.watchlist.length
            >= 3,

        watched:
            state.watched.length
            >= 3,

        critic:
            Object.keys(
                state.ratings
            ).length
            >= 3,

        community:
            state.comments.length
            >= 2,

        expert:
            calculateXP()
            >= 300

    };


    $$("[data-achievement]")
        .forEach(
            card => {

                card.classList.toggle(
                    "unlocked",
                    Boolean(
                        unlocked[
                            card.dataset
                                .achievement
                        ]
                    )
                );

            }
        );

}


/* =========================================================
   OPEN SERIES
========================================================= */

async function openSeries(id) {

    const series =
        getSeries(id);


    if (!series) {
        return;
    }


    activeSeriesId =
        id;


    addToHistory(id);


    modalTitle.textContent =
        getSeriesTitle(series);


    modalRating.textContent =
        `★ ${series.rating}`;


    modalYear.textContent =
        series.year;


    modalGenre.textContent =
        formatGenre(
            series.genres[0]
        );


    modalSeasons.textContent =
        getSeriesSeasons(series);


    modalDescription.textContent =
        getSeriesDescription(series);


    modalBadge.textContent =
        series.brazil
            ? "NETFLIX BRASIL"
            : "NETFLIX";


    const media =
        await getSeriesMedia(
            series
        );


    modalPoster.src =
        media.poster;


    modalBackdrop.style
        .backgroundImage =
        `url("${media.poster}")`;


    setupImageFallback(
        modalPoster,
        getSeriesTitle(series)
    );


    await renderCast(
        media.cast
    );


    renderRecommendations(
        series
    );


    updateModalControls(
        id
    );


    renderStars(
        id
    );


    const progress =
        Number(
            state.progress[id]
            ||
            0
        );


    episodeProgress.value =
        progress;


    episodeProgressText.textContent =
        `${progress}%`;


    currentEpisodeInput.value =
        state.episodes[id]
        ||
        1;


    personalNoteInput.value =
        state.notes[id]
        ||
        "";


    seriesModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";


    renderHistory();

}


/* =========================================================
   MODAL CONTROLS
========================================================= */

function updateModalControls(id) {

    modalFavoriteBtn.classList.toggle(
        "active",
        isFavorite(id)
    );


    modalWatchlistBtn.classList.toggle(
        "active",
        isWatchlisted(id)
    );


    modalWatchingBtn.classList.toggle(
        "active",
        isWatching(id)
    );


    modalWatchedBtn.classList.toggle(
        "active",
        isWatched(id)
    );


    modalFavoriteBtn.textContent =
        isFavorite(id)
            ? "★ Favoritada"
            : "☆ Favoritar";


    modalWatchlistBtn.textContent =
        isWatchlisted(id)
            ? "✓ Na minha lista"
            : "+ Minha lista";


    modalWatchingBtn.textContent =
        isWatching(id)
            ? "■ Assistindo"
            : "▶ Assistindo";


    modalWatchedBtn.textContent =
        isWatched(id)
            ? "✓ Assistida"
            : "✓ Marcar assistida";

}


/* =========================================================
   CLOSE SERIES
========================================================= */

function closeSeriesModal() {

    seriesModal
        ?.classList
        .remove("open");


    body.style.overflow =
        "";

}


/* =========================================================
   CAST
========================================================= */

async function renderCast(cast) {

    if (!castGrid) {
        return;
    }


    if (
        !cast
        ||
        !cast.length
    ) {

        castGrid.innerHTML =
            `
            <p
                style="
                    color:var(--text-soft);
                    padding:20px;
                "
            >
                ${
                    state.language === "en"
                        ? "Cast unavailable."
                        : "Elenco indisponível."
                }
            </p>
            `;


        return;

    }


    castGrid.innerHTML =
        cast
            .map(
                (
                    person,
                    index
                ) => `
                    <article
                        class="cast-card"
                    >

                        <button
                            type="button"
                            data-cast-index="${index}"
                        >

                            <img
                                src="${
                                    person.image
                                    ||
                                    createPlaceholder(
                                        person.name,
                                        "person"
                                    )
                                }"
                                alt="${
                                    escapeHTML(
                                        person.name
                                    )
                                }"
                                loading="lazy"
                                data-cast-image="${index}"
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

                        </button>

                    </article>
                `
            )
            .join("");


    cast.forEach(
        (
            person,
            index
        ) => {

            const image =
                document.querySelector(
                    `[data-cast-image="${index}"]`
                );


            setupImageFallback(
                image,
                person.name,
                "person"
            );

        }
    );


    castGrid.dataset.cast =
        JSON.stringify(cast);

}


/* =========================================================
   CAST PHOTO MODAL
========================================================= */

function openCastPhoto(
    person
) {

    if (!person) {
        return;
    }


    castPhotoLarge.src =
        person.image
        ||
        createPlaceholder(
            person.name,
            "person"
        );


    castPhotoLarge.alt =
        person.name;


    castPhotoName.textContent =
        person.name;


    castPhotoCharacter.textContent =
        person.character
        ||
        "";


    castPhotoModal
        .classList
        .add(
            "open"
        );


    body.style.overflow =
        "hidden";

}


function closeCastPhoto() {

    castPhotoModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        seriesModal
            ?.classList
            .contains("open")
            ? "hidden"
            : "";

}


/* =========================================================
   RECOMMENDATIONS
========================================================= */

async function renderRecommendations(
    current
) {

    let related =
        seriesData.filter(
            item =>
                item.id
                !== current.id
                &&
                item.genres.some(
                    genre =>
                        genre !== "brasil"
                        &&
                        current.genres
                            .includes(
                                genre
                            )
                )
        );


    related =
        related
            .sort(
                () =>
                    Math.random()
                    -
                    0.5
            )
            .slice(
                0,
                4
            );


    recommendations.innerHTML =
        related
            .map(
                item => `
                    <button
                        class="recommendation-card"
                        data-open-series="${item.id}"
                        type="button"
                    >

                        <img
                            data-recommendation-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt=""
                        >

                        <span>
                            ${
                                escapeHTML(
                                    getSeriesTitle(item)
                                )
                            }
                        </span>

                    </button>
                `
            )
            .join("");


    await loadImagesForList(
        related,
        "data-recommendation-image"
    );

}


/* =========================================================
   RATING
========================================================= */

function renderStars(id) {

    const value =
        Number(
            state.ratings[id]
            ||
            0
        );


    $$(
        "[data-star]",
        starRating
    )
        .forEach(
            button => {

                const number =
                    Number(
                        button.dataset.star
                    );


                button.textContent =
                    number <= value
                        ? "★"
                        : "☆";

            }
        );

}


function rateSeries(
    id,
    rating
) {

    state.ratings[id] =
        Number(rating);


    saveState();

    renderStars(id);

    updateStats();


    showToast(
        `${
            state.language === "en"
                ? "Rating"
                : "Sua nota"
        }: ${rating}/5`,
        "★"
    );

}


/* =========================================================
   PROGRESS
========================================================= */

function saveProgress() {

    const value =
        clamp(
            Number(
                episodeProgress.value
            ),
            0,
            100
        );


    state.progress[
        activeSeriesId
    ] =
        value;


    episodeProgressText.textContent =
        `${value}%`;


    if (
        value > 0
        &&
        value < 100
    ) {

        if (
            !isWatching(
                activeSeriesId
            )
        ) {

            state.watching.push(
                activeSeriesId
            );

        }


        state.watched =
            state.watched.filter(
                id =>
                    id !== activeSeriesId
            );

    }


    if (
        value === 100
    ) {

        state.watching =
            state.watching.filter(
                id =>
                    id !== activeSeriesId
            );


        if (
            !isWatched(
                activeSeriesId
            )
        ) {

            state.watched.push(
                activeSeriesId
            );

        }

    }


    saveState();

    refreshUserInterface();

}


/* =========================================================
   SAVE SERIES INFO
========================================================= */

function saveSeriesInfo() {

    state.episodes[
        activeSeriesId
    ] =
        Math.max(
            1,
            Number(
                currentEpisodeInput.value
            )
            ||
            1
        );


    state.notes[
        activeSeriesId
    ] =
        personalNoteInput
            .value
            .trim();


    saveState();


    showToast(
        state.language === "en"
            ? "Information saved"
            : "Informações salvas"
    );

}


/* =========================================================
   TRAILER PLAYER
========================================================= */

async function openTrailer(series) {

    if (!series) {
        return;
    }


    currentTrailerSeries =
        series;


    const media =
        await getSeriesMedia(
            series
        );


    trailerTitle.textContent =
        getSeriesTitle(series);


    trailerSeriesName.textContent =
        getSeriesTitle(series);


    trailerSeriesMeta.textContent =
        `${series.year} · ${formatGenre(
            series.genres[0]
        )}`;


    trailerPoster.src =
        media.poster;


    setupImageFallback(
        trailerPoster,
        getSeriesTitle(series)
    );


    trailerUnavailable
        ?.classList
        .remove(
            "show"
        );


    trailerPlayerWrap
        ?.classList
        .remove(
            "ready"
        );


    updateTrailerButtons();


    if (
        !series.trailerId
    ) {

        trailerFrame.src =
            "";


        trailerPlayerWrap.style.display =
            "none";


        trailerUnavailable
            ?.classList
            .add(
                "show"
            );

    } else {

        trailerPlayerWrap.style.display =
            "";


        const embedURL =
            "https://www.youtube-nocookie.com/embed/"
            +
            encodeURIComponent(
                series.trailerId
            )
            +
            "?autoplay=1"
            +
            "&rel=0"
            +
            "&modestbranding=1"
            +
            "&playsinline=1"
            +
            "&enablejsapi=1";


        trailerFrame.src =
            embedURL;

    }


    trailerModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


/* =========================================================
   TRAILER LOADED
========================================================= */

trailerFrame?.addEventListener(
    "load",
    () => {

        if (
            !trailerFrame.src
        ) {
            return;
        }


        setTimeout(
            () => {

                trailerPlayerWrap
                    ?.classList
                    .add(
                        "ready"
                    );

            },
            350
        );

    }
);


/* =========================================================
   TRAILER BUTTONS
========================================================= */

function updateTrailerButtons() {

    if (
        !currentTrailerSeries
    ) {
        return;
    }


    const id =
        currentTrailerSeries.id;


    trailerFavoriteBtn.classList.toggle(
        "active",
        isFavorite(id)
    );


    trailerWatchlistBtn.classList.toggle(
        "active",
        isWatchlisted(id)
    );


    trailerFavoriteBtn.textContent =
        isFavorite(id)
            ? (
                state.language === "en"
                    ? "★ Favorited"
                    : "★ Favoritada"
            )
            : (
                state.language === "en"
                    ? "☆ Favorite"
                    : "☆ Favoritar"
            );


    trailerWatchlistBtn.textContent =
        isWatchlisted(id)
            ? (
                state.language === "en"
                    ? "✓ In my list"
                    : "✓ Na minha lista"
            )
            : (
                state.language === "en"
                    ? "+ My list"
                    : "+ Minha lista"
            );

}


/* =========================================================
   CLOSE TRAILER
========================================================= */

function closeTrailerModal() {

    trailerModal
        ?.classList
        .remove(
            "open",
            "cinema"
        );


    trailerFrame.src =
        "";


    trailerPlayerWrap
        ?.classList
        .remove(
            "ready"
        );


    cinemaModeBtn.textContent =
        "⛶ Modo cinema";


    body.style.overflow =
        seriesModal
            ?.classList
            .contains("open")
            ? "hidden"
            : "";

}


/* =========================================================
   CINEMA MODE
========================================================= */

function toggleCinemaMode() {

    const enabled =
        trailerModal
            .classList
            .toggle(
                "cinema"
            );


    cinemaModeBtn.textContent =
        enabled
            ? (
                state.language === "en"
                    ? "↙ Normal mode"
                    : "↙ Modo normal"
            )
            : (
                state.language === "en"
                    ? "⛶ Cinema mode"
                    : "⛶ Modo cinema"
            );

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function openSearch() {

    searchOverlay
        .classList
        .add(
            "open"
        );


    body.style.overflow =
        "hidden";


    globalSearch.value =
        "";


    renderGlobalSearch();


    setTimeout(
        () =>
            globalSearch.focus(),
        100
    );

}


function closeSearch() {

    searchOverlay
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


async function renderGlobalSearch() {

    const query =
        globalSearch
            .value
            .trim()
            .toLowerCase();


    const list =
        seriesData
            .filter(
                item => {

                    if (!query) {
                        return true;
                    }


                    return [
                        item.title,
                        item.titleEN || "",
                        getSeriesDescription(item),
                        getSeriesCountry(item),
                        ...item.genres
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(query);

                }
            )
            .slice(
                0,
                8
            );


    if (!list.length) {

        searchResults.innerHTML =
            `
            <p
                style="
                    padding:30px;
                    color:var(--text-soft);
                    text-align:center;
                "
            >
                ${
                    state.language === "en"
                        ? "No series found."
                        : "Nenhuma série encontrada."
                }
            </p>
            `;


        return;

    }


    searchResults.innerHTML =
        list
            .map(
                item => `
                    <button
                        class="search-result"
                        data-search-series="${item.id}"
                        type="button"
                    >

                        <img
                            data-search-image="${item.id}"
                            src="${
                                createPlaceholder(
                                    getSeriesTitle(item)
                                )
                            }"
                            alt=""
                        >


                        <span>

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    formatGenre(
                                        item.genres[0]
                                    )
                                }
                                ·
                                ${item.year}
                            </small>

                        </span>


                        <span>
                            ★ ${item.rating}
                        </span>

                    </button>
                `
            )
            .join("");


    await loadImagesForList(
        list,
        "data-search-image"
    );

}


/* =========================================================
   SMART RECOMMEND
========================================================= */

function smartRecommend() {

    const genre =
        getFavoriteGenre();


    let candidates =
        seriesData.filter(
            item =>
                !isWatched(item.id)
        );


    if (genre) {

        const matches =
            candidates.filter(
                item =>
                    item.genres
                        .includes(
                            genre
                        )
            );


        if (
            matches.length
        ) {

            candidates =
                matches;

        }

    }


    candidates.sort(
        (
            a,
            b
        ) =>
            b.rating - a.rating
    );


    const result =
        randomItem(
            candidates.slice(
                0,
                5
            )
        )
        ||
        randomItem(
            seriesData
        );


    if (result) {

        openSeries(
            result.id
        );

    }

}


/* =========================================================
   RANDOM
========================================================= */

function randomSeries() {

    const result =
        randomItem(
            seriesData.filter(
                item =>
                    item.id
                    !== activeSeriesId
            )
        );


    if (
        result
    ) {

        openSeries(
            result.id
        );

    }

}


/* =========================================================
   COPY
========================================================= */

async function copySeriesTitle(
    id = activeSeriesId
) {

    const series =
        getSeries(id);


    if (!series) {
        return;
    }


    try {

        await navigator.clipboard
            .writeText(
                getSeriesTitle(series)
            );


        showToast(
            state.language === "en"
                ? "Title copied"
                : "Título copiado"
        );

    } catch {

        showToast(
            getSeriesTitle(series)
        );

    }

}


/* =========================================================
   SHARE SERIES
========================================================= */

async function shareSeries(
    id = activeSeriesId
) {

    const series =
        getSeries(id);


    if (!series) {
        return;
    }


    const originalURL =
        new URL(
            window.location.href
        );


    originalURL.hash =
        `serie=${series.id}`;


    const data = {

        title:
            getSeriesTitle(series),

        text:
            `${getSeriesTitle(series)} — Blog da Bia`,

        url:
            originalURL.toString()

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
                    `${data.text} ${data.url}`
                );


            showToast(
                state.language === "en"
                    ? "Series link copied"
                    : "Link da série copiado"
            );

        }

    } catch {

        /* cancelado */

    }

}


/* =========================================================
   SHARE BLOG
========================================================= */

async function shareBlog() {

    try {

        if (
            navigator.share
        ) {

            await navigator.share({

                title:
                    "Blog da Bia",

                text:
                    state.language === "en"
                        ? "Check out Bia's series blog."
                        : "Confira o Blog da Bia.",

                url:
                    window.location.href

            });

        } else {

            await navigator.clipboard
                .writeText(
                    window.location.href
                );


            showToast(
                state.language === "en"
                    ? "Link copied"
                    : "Link copiado"
            );

        }

    } catch {

        /* cancelado */

    }

}


/* =========================================================
   COMMENTS SERIES
========================================================= */

function populateCommentSeries() {

    if (!commentSeries) {
        return;
    }


    const previous =
        commentSeries.value;


    commentSeries.innerHTML =
        `
        <option value="">
            ${
                state.language === "en"
                    ? "Choose a series"
                    : "Escolha uma série"
            }
        </option>
        `
        +
        [...seriesData]
            .sort(
                (
                    a,
                    b
                ) =>
                    getSeriesTitle(a)
                        .localeCompare(
                            getSeriesTitle(b)
                        )
            )
            .map(
                item => `
                    <option
                        value="${item.id}"
                    >
                        ${
                            escapeHTML(
                                getSeriesTitle(item)
                            )
                        }
                    </option>
                `
            )
            .join("");


    if (
        getSeries(previous)
    ) {

        commentSeries.value =
            previous;

    }

}


/* =========================================================
   COMMENTS
========================================================= */

function addComment(event) {

    event.preventDefault();


    const name =
        commentName
            .value
            .trim();


    const text =
        commentText
            .value
            .trim();


    const seriesId =
        commentSeries.value;


    if (
        !name
        ||
        !text
        ||
        !seriesId
    ) {

        showToast(
            state.language === "en"
                ? "Fill in all fields"
                : "Preencha todos os campos",
            "!"
        );


        return;

    }


    state.comments.unshift({

        id:
            Date.now(),

        name,

        text,

        seriesId,

        spoiler:
            commentSpoiler.checked,

        likes:
            0,

        liked:
            false,

        createdAt:
            new Date()
                .toISOString()

    });


    saveState();


    commentForm.reset();


    commentCharCount.textContent =
        "0";


    renderComments();

    updateStats();

}


/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(date) {

    return new Date(date)
        .toLocaleDateString(
            state.language === "en"
                ? "en-US"
                : "pt-BR",
            {

                day:
                    "2-digit",

                month:
                    "short",

                year:
                    "numeric"

            }
        );

}


/* =========================================================
   RENDER COMMENTS
========================================================= */

function renderComments() {

    let list =
        [...state.comments];


    if (
        commentSort?.value
        === "likes"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                b.likes - a.likes
        );

    }


    if (
        commentSort?.value
        === "old"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                new Date(
                    a.createdAt
                )
                -
                new Date(
                    b.createdAt
                )
        );

    }


    if (
        commentSort?.value
        === "new"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                new Date(
                    b.createdAt
                )
                -
                new Date(
                    a.createdAt
                )
        );

    }


    commentCount.textContent =
        list.length;


    if (!list.length) {

        commentsList.innerHTML =
            `
            <p
                style="
                    padding:35px;
                    text-align:center;
                    color:var(--text-soft);
                "
            >
                ${
                    state.language === "en"
                        ? "No comments yet."
                        : "Ainda não há comentários."
                }
            </p>
            `;


        return;

    }


    commentsList.innerHTML =
        list
            .map(
                comment => {

                    const series =
                        getSeries(
                            comment.seriesId
                        );


                    const initials =
                        comment.name
                            .split(" ")
                            .slice(
                                0,
                                2
                            )
                            .map(
                                part =>
                                    part[0]
                                    ||
                                    ""
                            )
                            .join("")
                            .toUpperCase();


                    return `
                        <article
                            class="comment-card"
                        >

                            <div
                                style="
                                    display:flex;
                                    justify-content:space-between;
                                    gap:12px;
                                "
                            >

                                <div>

                                    <strong>
                                        ${escapeHTML(initials)}
                                        ·
                                        ${escapeHTML(comment.name)}
                                    </strong>

                                    <small
                                        style="
                                            display:block;
                                            color:var(--text-soft);
                                            margin-top:3px;
                                        "
                                    >
                                        ${
                                            formatDate(
                                                comment.createdAt
                                            )
                                        }
                                    </small>

                                </div>


                                <small>
                                    ${
                                        series
                                            ? escapeHTML(
                                                getSeriesTitle(
                                                    series
                                                )
                                            )
                                            : ""
                                    }
                                </small>

                            </div>


                            <p
                                data-comment-text="${comment.id}"
                                class="${
                                    comment.spoiler
                                        ? "comment-text spoiler"
                                        : "comment-text"
                                }"
                                style="
                                    margin-top:10px;
                                    color:var(--text-soft);
                                "
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
                                            data-show-spoiler="${comment.id}"
                                            type="button"
                                        >
                                            ${
                                                state.language === "en"
                                                    ? "Show spoiler"
                                                    : "Mostrar spoiler"
                                            }
                                        </button>
                                    `
                                    : ""
                            }


                            <div
                                style="
                                    margin-top:8px;
                                    display:flex;
                                    gap:6px;
                                "
                            >

                                <button
                                    data-like-comment="${comment.id}"
                                    type="button"
                                >
                                    ${
                                        comment.liked
                                            ? "★"
                                            : "☆"
                                    }
                                    ${comment.likes}
                                </button>


                                <button
                                    data-delete-comment="${comment.id}"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "Delete"
                                            : "Excluir"
                                    }
                                </button>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

}


/* =========================================================
   COMMENTS ACTIONS
========================================================= */

function toggleCommentLike(id) {

    const comment =
        state.comments.find(
            item =>
                item.id
                === Number(id)
        );


    if (!comment) {
        return;
    }


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


function deleteComment(id) {

    const confirmed =
        confirm(
            state.language === "en"
                ? "Delete this comment?"
                : "Excluir este comentário?"
        );


    if (!confirmed) {
        return;
    }


    state.comments =
        state.comments.filter(
            comment =>
                comment.id
                !== Number(id)
        );


    saveState();

    renderComments();

    updateStats();

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

    profileAvatar.textContent =
        state.profile.avatar;


    profileName.textContent =
        state.profile.name;


    const xp =
        calculateXP();


    const level =
        Math.floor(
            xp / 100
        )
        +
        1;


    profileLevelText.textContent =
        state.language === "en"
            ? (
                level < 3
                    ? "Beginner binge watcher"
                    : level < 6
                        ? "Series lover"
                        : "Series expert"
            )
            : (
                level < 3
                    ? "Maratonista iniciante"
                    : level < 6
                        ? "Apaixonada por séries"
                        : "Expert em séries"
            );

}


function openProfile() {

    profileNameInput.value =
        state.profile.name;


    $$(".avatar-picker button")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.avatar
                    === state.profile.avatar
                );

            }
        );


    profileModal
        .classList
        .add(
            "open"
        );


    body.style.overflow =
        "hidden";

}


function closeProfile() {

    profileModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


function saveProfile(event) {

    event.preventDefault();


    const name =
        profileNameInput
            .value
            .trim();


    if (!name) {
        return;
    }


    state.profile.name =
        name;


    saveState();

    renderProfile();

    closeProfile();


    showToast(
        state.language === "en"
            ? "Profile saved"
            : "Perfil salvo"
    );

}


/* =========================================================
   TEAM PROFILE
========================================================= */

function openTeamProfile(profileId) {

    const profile =
        teamProfiles[
            profileId
        ];


    if (!profile) {
        return;
    }


    teamModalImage.src =
        profile.image;


    teamModalName.textContent =
        profile.name;


    teamModalRole.textContent =
        state.language === "en"
            ? profile.roleEN
            : profile.rolePT;


    teamModalDescription.textContent =
        state.language === "en"
            ? profile.descriptionEN
            : profile.descriptionPT;


    const tags =
        state.language === "en"
            ? profile.tagsEN
            : profile.tagsPT;


    teamModalTags.innerHTML =
        tags
            .map(
                tag => `
                    <span>
                        ${escapeHTML(tag)}
                    </span>
                `
            )
            .join("");


    teamProfileModal
        .classList
        .add(
            "open"
        );


    body.style.overflow =
        "hidden";

}


function closeTeamProfile() {

    teamProfileModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {

        pt:
            "Que tipo de história você quer?",

        en:
            "What kind of story do you want?",

        options: [

            {
                pt: "Romance",
                en: "Romance",
                genre: "romance"
            },

            {
                pt: "Mistério",
                en: "Mystery",
                genre: "misterio"
            },

            {
                pt: "Suspense",
                en: "Thriller",
                genre: "suspense"
            },

            {
                pt: "Drama",
                en: "Drama",
                genre: "drama"
            }

        ]

    },


    {

        pt:
            "O que combina mais com você?",

        en:
            "What sounds better to you?",

        options: [

            {
                pt: "Relacionamentos",
                en: "Relationships",
                genre: "romance"
            },

            {
                pt: "Crimes",
                en: "Crime",
                genre: "crime"
            },

            {
                pt: "Algo divertido",
                en: "Something fun",
                genre: "comedia"
            },

            {
                pt: "História intensa",
                en: "Intense story",
                genre: "drama"
            }

        ]

    },


    {

        pt:
            "Quer uma produção brasileira?",

        en:
            "Would you like a Brazilian production?",

        options: [

            {
                pt: "Sim",
                en: "Yes",
                brazil: true
            },

            {
                pt: "Tanto faz",
                en: "Either",
                brazil: null
            }

        ]

    }

];


function openQuiz() {

    quizStep =
        0;


    quizAnswers =
        [];


    quizModal
        .classList
        .add(
            "open"
        );


    body.style.overflow =
        "hidden";


    renderQuizQuestion();

}


function renderQuizQuestion() {

    const question =
        quizQuestions[
            quizStep
        ];


    if (!question) {

        showQuizResult();

        return;

    }


    quizProgress.style.width =
        `${
            quizStep
            /
            quizQuestions.length
            *
            100
        }%`;


    quizContent.innerHTML =
        `
        <span
            class="simple-modal-label"
        >
            ${
                state.language === "en"
                    ? `QUESTION ${quizStep + 1}`
                    : `PERGUNTA ${quizStep + 1}`
            }
        </span>


        <h2>
            ${
                state.language === "en"
                    ? question.en
                    : question.pt
            }
        </h2>


        <div
            id="quizOptions"
            class="quiz-options"
        ></div>
        `;


    const container =
        $("#quizOptions");


    question.options
        .forEach(
            option => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "quiz-option";


                button.textContent =
                    state.language === "en"
                        ? option.en
                        : option.pt;


                button.addEventListener(
                    "click",
                    () => {

                        quizAnswers.push(
                            option
                        );


                        quizStep++;


                        renderQuizQuestion();

                    }
                );


                container.appendChild(
                    button
                );

            }
        );

}


async function showQuizResult() {

    const counts = {};


    let brazil =
        null;


    quizAnswers
        .forEach(
            answer => {

                if (
                    answer.genre
                ) {

                    counts[
                        answer.genre
                    ] =
                        (
                            counts[
                                answer.genre
                            ]
                            ||
                            0
                        )
                        +
                        1;

                }


                if (
                    answer.brazil
                    !== undefined
                ) {

                    brazil =
                        answer.brazil;

                }

            }
        );


    const genre =
        Object.entries(
            counts
        )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[1] - a[1]
            )[0]?.[0];


    let candidates =
        seriesData.filter(
            item =>
                !genre
                ||
                item.genres
                    .includes(
                        genre
                    )
        );


    if (
        brazil === true
    ) {

        candidates =
            candidates.filter(
                item =>
                    item.brazil
            );

    }


    const result =
        randomItem(
            candidates
        )
        ||
        randomItem(
            seriesData
        );


    const media =
        await getSeriesMedia(
            result
        );


    quizProgress.style.width =
        "100%";


    quizContent.innerHTML =
        `
        <span
            class="simple-modal-label"
        >
            ${
                state.language === "en"
                    ? "YOUR SERIES"
                    : "SUA SÉRIE"
            }
        </span>


        <h2>
            ${
                escapeHTML(
                    getSeriesTitle(
                        result
                    )
                )
            }
        </h2>


        <img
            style="
                width:145px;
                aspect-ratio:2/3;
                object-fit:cover;
                border-radius:12px;
                margin:15px auto;
            "
            src="${media.poster}"
            alt=""
        >


        <p>
            ${
                escapeHTML(
                    getSeriesDescription(
                        result
                    )
                )
            }
        </p>


        <button
            id="quizOpenResult"
            class="primary-btn"
            type="button"
        >
            ${
                state.language === "en"
                    ? "View details"
                    : "Ver detalhes"
            }
        </button>
        `;


    $("#quizOpenResult")
        ?.addEventListener(
            "click",
            () => {

                closeQuiz();

                openSeries(
                    result.id
                );

            }
        );

}


function closeQuiz() {

    quizModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


/* =========================================================
   DATA EXPORT
========================================================= */

function exportData() {

    const blob =
        new Blob(
            [
                JSON.stringify(
                    state,
                    null,
                    2
                )
            ],
            {
                type:
                    "application/json"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const anchor =
        document.createElement(
            "a"
        );


    anchor.href =
        url;


    anchor.download =
        "blog-da-bia-dados.json";


    anchor.click();


    URL.revokeObjectURL(
        url
    );

}


/* =========================================================
   IMPORT
========================================================= */

function importData(file) {

    if (!file) {
        return;
    }


    const reader =
        new FileReader();


    reader.onload =
        event => {

            try {

                const imported =
                    JSON.parse(
                        event.target.result
                    );


                state = {

                    ...cloneDefaultState(),
                    ...imported,

                    profile: {

                        ...defaultState.profile,
                        ...(imported.profile || {})

                    }

                };


                saveState();

                applyTheme();

                applyColorTheme();

                applyAnimationSetting();

                renderEverything();


                showToast(
                    state.language === "en"
                        ? "Data imported"
                        : "Dados importados"
                );

            } catch {

                showToast(
                    state.language === "en"
                        ? "Invalid file"
                        : "Arquivo inválido",
                    "!"
                );

            }

        };


    reader.readAsText(
        file
    );

}


/* =========================================================
   RESET
========================================================= */

function resetData() {

    const confirmed =
        confirm(
            state.language === "en"
                ? "Delete all saved data?"
                : "Apagar todos os dados salvos?"
        );


    if (!confirmed) {
        return;
    }


    const settings = {

        language:
            state.language,

        theme:
            state.theme,

        colorTheme:
            state.colorTheme,

        animations:
            state.animations,

        autoHero:
            state.autoHero

    };


    state = {

        ...cloneDefaultState(),
        ...settings

    };


    saveState();

    renderEverything();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function openMobileMenu() {

    mobileMenu
        .classList
        .add(
            "open"
        );


    menuOverlay
        .classList
        .add(
            "show"
        );


    body.style.overflow =
        "hidden";

}


function closeMobileMenu() {

    mobileMenu
        ?.classList
        .remove(
            "open"
        );


    menuOverlay
        ?.classList
        .remove(
            "show"
        );


    body.style.overflow =
        "";

}


/* =========================================================
   SETTINGS
========================================================= */

function openSettings() {

    settingsPanel
        .classList
        .add(
            "open"
        );

}


function closeSettings() {

    settingsPanel
        ?.classList
        .remove(
            "open"
        );

}


/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const current =
        window.scrollY;


    const maximum =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    scrollProgress.style.width =
        `${
            maximum > 0
                ? current / maximum * 100
                : 0
        }%`;


    header.classList.toggle(
        "scrolled",
        current > 25
    );


    backTop.classList.toggle(
        "show",
        current > 500
    );


    updateActiveNav();

}


/* =========================================================
   ACTIVE NAV
========================================================= */

function updateActiveNav() {

    const ids = [
        "inicio",
        "series",
        "brasil",
        "minha-lista",
        "ranking",
        "comunidade",
        "sobre"
    ];


    let active =
        "inicio";


    ids.forEach(
        id => {

            const section =
                document.getElementById(
                    id
                );


            if (!section) {
                return;
            }


            if (
                section
                    .getBoundingClientRect()
                    .top
                <=
                170
            ) {

                active =
                    id;

            }

        }
    );


    $$(".desktop-nav a")
        .forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute(
                        "href"
                    )
                    ===
                    `#${active}`
                );

            }
        );

}


/* =========================================================
   HERO 3D
========================================================= */

function setupHeroTilt() {

    heroPosterCard
        ?.addEventListener(
            "mousemove",
            event => {

                if (
                    !state.animations
                ) {
                    return;
                }


                const rect =
                    heroPosterCard
                        .getBoundingClientRect();


                const x =
                    event.clientX
                    -
                    rect.left;


                const y =
                    event.clientY
                    -
                    rect.top;


                heroPosterCard.style
                    .transform =
                    `
                    perspective(900px)
                    rotateX(${
                        (
                            0.5
                            -
                            y / rect.height
                        )
                        *
                        7
                    }deg)
                    rotateY(${
                        (
                            x / rect.width
                            -
                            0.5
                        )
                        *
                        7
                    }deg)
                    `;

            }
        );


    heroPosterCard
        ?.addEventListener(
            "mouseleave",
            () => {

                heroPosterCard.style
                    .transform =
                    "";

            }
        );

}


/* =========================================================
   TEAM CARD EFFECT
========================================================= */

function setupTeamCards() {

    $$(".premium-person-card")
        .forEach(
            card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        if (
                            !state.animations
                        ) {
                            return;
                        }


                        const rect =
                            card
                                .getBoundingClientRect();


                        const x =
                            event.clientX
                            -
                            rect.left;


                        const y =
                            event.clientY
                            -
                            rect.top;


                        card.style
                            .setProperty(
                                "--mouse-x",
                                `${x}px`
                            );


                        card.style
                            .setProperty(
                                "--mouse-y",
                                `${y}px`
                            );


                        const rotateY =
                            (
                                x / rect.width
                                -
                                0.5
                            )
                            *
                            3;


                        const rotateX =
                            (
                                0.5
                                -
                                y / rect.height
                            )
                            *
                            3;


                        card.style.transform =
                            `
                            perspective(1000px)
                            translateY(-4px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

}


/* =========================================================
   REVEAL
========================================================= */

function setupRevealAnimations() {

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        $$(".reveal")
            .forEach(
                element =>
                    element
                        .classList
                        .add(
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
                                .classList
                                .add(
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
                    0.1
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
   REFRESH UI
========================================================= */

function refreshUserInterface() {

    saveState();

    updateStats();

    renderProfile();

    updateHeroButtons(
        activeSeriesId
    );

    updateModalControls(
        activeSeriesId
    );

    updateTrailerButtons();

    renderSeries();

    renderPersonalList();

    renderContinueWatching();

}


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderEverything() {

    renderProfile();

    updateStats();

    createHeroDots();

    updateHero();

    renderSeries();

    renderPersonalList();

    renderContinueWatching();

    renderHistory();

    renderBrazil();

    renderRanking();

    renderDailySeries();

    renderComments();


    const count =
        $("#projectSeriesCount");


    if (count) {

        count.textContent =
            seriesData.length;

    }

}


/* =========================================================
   CLICK DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const openSeriesButton =
            event.target.closest(
                "[data-open-series]"
            );


        if (openSeriesButton) {

            openSeries(
                openSeriesButton
                    .dataset
                    .openSeries
            );


            return;

        }


        const seriesCard =
            event.target.closest(
                "[data-series-card]"
            );


        if (
            seriesCard
            &&
            !event.target.closest(
                "button"
            )
        ) {

            openSeries(
                seriesCard.dataset
                    .seriesCard
            );


            return;

        }


        const favorite =
            event.target.closest(
                "[data-toggle-favorite]"
            );


        if (favorite) {

            event.stopPropagation();


            toggleFavorite(
                favorite.dataset
                    .toggleFavorite
            );


            return;

        }


        const searchItem =
            event.target.closest(
                "[data-search-series]"
            );


        if (searchItem) {

            closeSearch();


            openSeries(
                searchItem.dataset
                    .searchSeries
            );


            return;

        }


        const teamButton =
            event.target.closest(
                "[data-open-team-profile]"
            );


        if (teamButton) {

            openTeamProfile(
                teamButton.dataset
                    .openTeamProfile
            );


            return;

        }


        const castButton =
            event.target.closest(
                "[data-cast-index]"
            );


        if (
            castButton
            &&
            castGrid.dataset.cast
        ) {

            try {

                const cast =
                    JSON.parse(
                        castGrid.dataset.cast
                    );


                const person =
                    cast[
                        Number(
                            castButton.dataset
                                .castIndex
                        )
                    ];


                openCastPhoto(
                    person
                );

            } catch {

                /* ignore */

            }


            return;

        }


        const spoiler =
            event.target.closest(
                "[data-show-spoiler]"
            );


        if (spoiler) {

            const text =
                document.querySelector(
                    `[data-comment-text="${
                        spoiler.dataset
                            .showSpoiler
                    }"]`
                );


            if (text) {

                text.classList.toggle(
                    "spoiler"
                );

            }


            return;

        }


        const like =
            event.target.closest(
                "[data-like-comment]"
            );


        if (like) {

            toggleCommentLike(
                like.dataset
                    .likeComment
            );


            return;

        }


        const deleteButton =
            event.target.closest(
                "[data-delete-comment]"
            );


        if (deleteButton) {

            deleteComment(
                deleteButton.dataset
                    .deleteComment
            );

        }

    }
);


/* =========================================================
   HEADER EVENTS
========================================================= */

langPT?.addEventListener(
    "click",
    () =>
        setLanguage("pt")
);


langEN?.addEventListener(
    "click",
    () =>
        setLanguage("en")
);


$$("[data-mobile-lang]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    setLanguage(
                        button.dataset
                            .mobileLang
                    );


                    closeMobileMenu();

                }
            );

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


searchOpenBtn?.addEventListener(
    "click",
    openSearch
);


/* =========================================================
   MOBILE EVENTS
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


$$("#mobileMenu a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


/* =========================================================
   SEARCH EVENTS
========================================================= */

searchClose?.addEventListener(
    "click",
    closeSearch
);


searchOverlay?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === searchOverlay
        ) {

            closeSearch();

        }

    }
);


globalSearch?.addEventListener(
    "input",
    debounce(
        renderGlobalSearch,
        120
    )
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


/* =========================================================
   HERO EVENTS
========================================================= */

heroDetailsBtn?.addEventListener(
    "click",
    () =>
        openSeries(
            activeSeriesId
        )
);


watchTrailerBtn?.addEventListener(
    "click",
    () =>
        openTrailer(
            getSeries(
                activeSeriesId
            )
        )
);


heroFavoriteBtn?.addEventListener(
    "click",
    () =>
        toggleFavorite(
            activeSeriesId
        )
);


heroWatchlistBtn?.addEventListener(
    "click",
    () =>
        toggleWatchlist(
            activeSeriesId
        )
);


randomSeriesBtn?.addEventListener(
    "click",
    randomSeries
);


copySeriesBtn?.addEventListener(
    "click",
    () =>
        copySeriesTitle(
            activeSeriesId
        )
);


shareSeriesBtn?.addEventListener(
    "click",
    () =>
        shareSeries(
            activeSeriesId
        )
);


heroDots?.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-hero-index]"
            );


        if (!button) {
            return;
        }


        heroIndex =
            Number(
                button.dataset
                    .heroIndex
            );


        updateHero();

        startHeroTimer();

    }
);


/* =========================================================
   CATALOG EVENTS
========================================================= */

seriesSearch?.addEventListener(
    "input",
    debounce(
        renderSeries,
        120
    )
);


seriesSort?.addEventListener(
    "change",
    renderSeries
);


ratingFilter?.addEventListener(
    "change",
    renderSeries
);


statusFilter?.addEventListener(
    "change",
    renderSeries
);


filters?.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-filter]"
            );


        if (!button) {
            return;
        }


        activeFilter =
            button.dataset.filter;


        $$(".filter-btn")
            .forEach(
                item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                }
            );


        renderSeries();

    }
);


advancedFilterBtn?.addEventListener(
    "click",
    () => {

        advancedFilters
            .classList
            .toggle(
                "open"
            );

    }
);


clearFiltersBtn?.addEventListener(
    "click",
    () => {

        activeFilter =
            "all";


        seriesSearch.value =
            "";


        seriesSort.value =
            "featured";


        ratingFilter.value =
            "0";


        statusFilter.value =
            "all";


        $$(".filter-btn")
            .forEach(
                button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter
                        === "all"
                    );

                }
            );


        renderSeries();

    }
);


/* =========================================================
   PERSONAL TABS
========================================================= */

$$("[data-personal-tab]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    personalTab =
                        button.dataset
                            .personalTab;


                    $$("[data-personal-tab]")
                        .forEach(
                            item => {

                                item.classList.toggle(
                                    "active",
                                    item === button
                                );

                            }
                        );


                    renderPersonalList();

                }
            );

        }
    );


/* =========================================================
   BRAZIL
========================================================= */

seeAllBrazilBtn?.addEventListener(
    "click",
    () => {

        activeFilter =
            "brasil";


        $$(".filter-btn")
            .forEach(
                button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.filter
                        === "brasil"
                    );

                }
            );


        renderSeries();


        $("#series")
            ?.scrollIntoView({

                behavior:
                    state.animations
                        ? "smooth"
                        : "auto"

            });

    }
);


/* =========================================================
   DAILY
========================================================= */

dailySeriesBtn?.addEventListener(
    "click",
    () => {

        openSeries(
            getDailySeries().id
        );

    }
);


/* =========================================================
   HISTORY
========================================================= */

clearHistoryBtn?.addEventListener(
    "click",
    () => {

        state.history =
            [];


        saveState();

        renderHistory();

    }
);


/* =========================================================
   RECOMMENDATION
========================================================= */

smartRecommendBtn?.addEventListener(
    "click",
    smartRecommend
);


startQuizBtn?.addEventListener(
    "click",
    openQuiz
);


/* =========================================================
   SERIES MODAL EVENTS
========================================================= */

seriesModalClose?.addEventListener(
    "click",
    closeSeriesModal
);


seriesModal?.addEventListener(
    "click",
    event => {

        if (
            event.target === seriesModal
        ) {

            closeSeriesModal();

        }

    }
);


modalFavoriteBtn?.addEventListener(
    "click",
    () =>
        toggleFavorite(
            activeSeriesId
        )
);


modalWatchlistBtn?.addEventListener(
    "click",
    () =>
        toggleWatchlist(
            activeSeriesId
        )
);


modalWatchingBtn?.addEventListener(
    "click",
    () =>
        toggleWatching(
            activeSeriesId
        )
);


modalWatchedBtn?.addEventListener(
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


        if (!button) {
            return;
        }


        rateSeries(
            activeSeriesId,
            button.dataset.star
        );

    }
);


episodeProgress?.addEventListener(
    "input",
    () => {

        episodeProgressText.textContent =
            `${episodeProgress.value}%`;

    }
);


episodeProgress?.addEventListener(
    "change",
    saveProgress
);


saveSeriesInfoBtn?.addEventListener(
    "click",
    saveSeriesInfo
);


modalTrailerBtn?.addEventListener(
    "click",
    () =>
        openTrailer(
            getSeries(
                activeSeriesId
            )
        )
);


modalShareBtn?.addEventListener(
    "click",
    () =>
        shareSeries(
            activeSeriesId
        )
);


modalCopyBtn?.addEventListener(
    "click",
    () =>
        copySeriesTitle(
            activeSeriesId
        )
);


/* =========================================================
   TRAILER EVENTS
========================================================= */

trailerClose?.addEventListener(
    "click",
    closeTrailerModal
);


trailerModal?.addEventListener(
    "click",
    event => {

        if (
            event.target === trailerModal
        ) {

            closeTrailerModal();

        }

    }
);


trailerFavoriteBtn?.addEventListener(
    "click",
    () => {

        if (!currentTrailerSeries) {
            return;
        }


        toggleFavorite(
            currentTrailerSeries.id
        );


        updateTrailerButtons();

    }
);


trailerWatchlistBtn?.addEventListener(
    "click",
    () => {

        if (!currentTrailerSeries) {
            return;
        }


        toggleWatchlist(
            currentTrailerSeries.id
        );


        updateTrailerButtons();

    }
);


cinemaModeBtn?.addEventListener(
    "click",
    toggleCinemaMode
);


/* =========================================================
   CAST PHOTO EVENTS
========================================================= */

castPhotoClose?.addEventListener(
    "click",
    closeCastPhoto
);


castPhotoModal?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === castPhotoModal
        ) {

            closeCastPhoto();

        }

    }
);


/* =========================================================
   TEAM EVENTS
========================================================= */

teamProfileClose?.addEventListener(
    "click",
    closeTeamProfile
);


teamProfileModal?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === teamProfileModal
        ) {

            closeTeamProfile();

        }

    }
);


/* =========================================================
   QUIZ EVENTS
========================================================= */

quizClose?.addEventListener(
    "click",
    closeQuiz
);


quizBeginBtn?.addEventListener(
    "click",
    renderQuizQuestion
);


quizModal?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === quizModal
        ) {

            closeQuiz();

        }

    }
);


/* =========================================================
   PROFILE EVENTS
========================================================= */

editProfileBtn?.addEventListener(
    "click",
    openProfile
);


profileClose?.addEventListener(
    "click",
    closeProfile
);


profileModal?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === profileModal
        ) {

            closeProfile();

        }

    }
);


profileForm?.addEventListener(
    "submit",
    saveProfile
);


$$(".avatar-picker button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    state.profile.avatar =
                        button.dataset.avatar;


                    $$(".avatar-picker button")
                        .forEach(
                            item => {

                                item.classList.toggle(
                                    "active",
                                    item === button
                                );

                            }
                        );

                }
            );

        }
    );


/* =========================================================
   COMMENTS EVENTS
========================================================= */

commentText?.addEventListener(
    "input",
    () => {

        commentCharCount.textContent =
            commentText.value.length;

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


/* =========================================================
   SETTINGS EVENTS
========================================================= */

settingsFloating?.addEventListener(
    "click",
    openSettings
);


settingsClose?.addEventListener(
    "click",
    closeSettings
);


$$(".theme-color")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    state.colorTheme =
                        button.dataset
                            .themeColor;


                    saveState();

                    applyColorTheme();

                }
            );

        }
    );


animationsToggle?.addEventListener(
    "change",
    () => {

        state.animations =
            animationsToggle.checked;


        saveState();

        applyAnimationSetting();

    }
);


autoHeroToggle?.addEventListener(
    "change",
    () => {

        state.autoHero =
            autoHeroToggle.checked;


        saveState();

        startHeroTimer();

    }
);


/* =========================================================
   DATA EVENTS
========================================================= */

exportDataBtn?.addEventListener(
    "click",
    exportData
);


importDataBtn?.addEventListener(
    "click",
    () =>
        importDataInput.click()
);


importDataInput?.addEventListener(
    "change",
    () => {

        const file =
            importDataInput
                .files?.[0];


        if (file) {

            importData(file);

        }


        importDataInput.value =
            "";

    }
);


resetDataBtn?.addEventListener(
    "click",
    resetData
);


/* =========================================================
   SCROLL EVENTS
========================================================= */

window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


backTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior:
                state.animations
                    ? "smooth"
                    : "auto"

        });

    }
);


/* =========================================================
   INTERNAL LINKS
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


                    if (
                        !href
                        ||
                        href === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            href
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            state.animations
                                ? "smooth"
                                : "auto",

                        block:
                            "start"

                    });

                }
            );

        }
    );


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const typing =
            [
                "INPUT",
                "TEXTAREA",
                "SELECT"
            ]
                .includes(
                    document.activeElement
                        ?.tagName
                );


        if (
            event.key === "Escape"
        ) {

            closeCastPhoto();

            closeTrailerModal();

            closeSearch();

            closeSeriesModal();

            closeQuiz();

            closeProfile();

            closeTeamProfile();

            closeMobileMenu();

            closeSettings();


            return;

        }


        if (typing) {
            return;
        }


        if (
            event.key === "/"
        ) {

            event.preventDefault();

            openSearch();

        }


        if (
            event.key
                .toLowerCase()
            === "r"
        ) {

            randomSeries();

        }


        if (
            event.key
                .toLowerCase()
            === "t"
        ) {

            toggleTheme();

        }


        if (
            event.key
                .toLowerCase()
            === "f"
        ) {

            toggleFavorite(
                activeSeriesId
            );

        }

    }
);


/* =========================================================
   URL HASH
========================================================= */

function openSeriesFromHash() {

    const hash =
        window.location.hash;


    if (
        !hash.startsWith(
            "#serie="
        )
    ) {
        return;
    }


    const id =
        decodeURIComponent(
            hash.replace(
                "#serie=",
                ""
            )
        );


    if (
        getSeries(id)
    ) {

        setTimeout(
            () =>
                openSeries(id),
            600
        );

    }

}


/* =========================================================
   WINDOW LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader
                    ?.classList
                    .add(
                        "hidden"
                    );

            },
            450
        );

    }
);


setTimeout(
    () => {

        loader
            ?.classList
            .add(
                "hidden"
            );

    },
    2500
);


/* =========================================================
   INIT
========================================================= */

function init() {

    console.log(
        "Blog da Bia iniciado ✓"
    );


    currentYear.textContent =
        new Date()
            .getFullYear();


    applyTheme();

    applyColorTheme();

    applyAnimationSetting();

    applyBasicTranslations();

    populateCommentSeries();

    renderEverything();

    setupHeroTilt();

    setupTeamCards();

    setupRevealAnimations();

    handleScroll();

    startHeroTimer();

    openSeriesFromHash();

}


/* =========================================================
   START
========================================================= */

init();