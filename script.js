"use strict";


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
    "blogDaBia_v20";


function clone(value) {

    return JSON.parse(
        JSON.stringify(value)
    );

}


function randomItem(array) {

    if (!array.length) {
        return null;
    }


    return array[
        Math.floor(
            Math.random()
            *
            array.length
        )
    ];

}


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


function escapeHTML(value = "") {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function debounce(
    callback,
    delay = 150
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
   ELEMENTS
========================================================= */

const loader =
    $("#loader");

const loaderText =
    $("#loaderText");

const scrollProgress =
    $("#scrollProgress");

const header =
    $("#header");

const toast =
    $("#toast");

const toastText =
    $("#toastText");

const toastIcon =
    $("#toastIcon");


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

const mobileMenu =
    $("#mobileMenu");

const mobileMenuClose =
    $("#mobileMenuClose");

const menuOverlay =
    $("#menuOverlay");


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


const continueSection =
    $("#continueSection");

const continueGrid =
    $("#continueGrid");

const historySection =
    $("#historySection");

const historyGrid =
    $("#historyGrid");

const clearHistoryBtn =
    $("#clearHistoryBtn");


const dailyTitle =
    $("#dailyTitle");

const dailyDescription =
    $("#dailyDescription");

const dailyImage =
    $("#dailyImage");

const dailySeriesBtn =
    $("#dailySeriesBtn");


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


const personalGrid =
    $("#personalGrid");

const personalEmpty =
    $("#personalEmpty");

const seeAllBrazilBtn =
    $("#seeAllBrazilBtn");

const brazilCarousel =
    $("#brazilCarousel");


const startQuizBtn =
    $("#startQuizBtn");

const smartRecommendBtn =
    $("#smartRecommendBtn");

const rankingList =
    $("#rankingList");


const favoriteGenreStat =
    $("#favoriteGenreStat");

const completionStat =
    $("#completionStat");

const averageRatingStat =
    $("#averageRatingStat");

const brazilWatchedStat =
    $("#brazilWatchedStat");

const userStatsSection =
    $("#userStatsSection");

const achievementsSection =
    $("#achievementsSection");


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


const exportDataBtn =
    $("#exportDataBtn");

const importDataBtn =
    $("#importDataBtn");

const importDataInput =
    $("#importDataInput");

const resetDataBtn =
    $("#resetDataBtn");


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

const compactCardsToggle =
    $("#compactCardsToggle");

const contrastToggle =
    $("#contrastToggle");

const transparencyToggle =
    $("#transparencyToggle");

const trailerAutoplayToggle =
    $("#trailerAutoplayToggle");

const descriptionsToggle =
    $("#descriptionsToggle");

const statsToggle =
    $("#statsToggle");

const achievementsToggle =
    $("#achievementsToggle");

const performanceToggle =
    $("#performanceToggle");

const resetVisualSettingsBtn =
    $("#resetVisualSettingsBtn");


const backTop =
    $("#backTop");

const currentYear =
    $("#currentYear");


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

const trailerPlayerWrap =
    $("#trailerPlayerWrap");

const trailerFrame =
    $("#trailerFrame");

const trailerUnavailable =
    $("#trailerUnavailable");

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


/* QUIZ */

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
   SERIES DATA
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

        trailerId:
            "Wb3kaP580kA",

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

        trailerId:
            "Di310WS8zLk",

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

        trailerId:
            "uk_hFfUFXh4",

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

        trailerId:
            "QsacpJwXCO8",

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

        trailerId:
            "gpv7ayf_tyE",

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

        trailerId:
            "QNwhAdrdwp0",

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

        trailerId:
            "HyOCCCbxwMQ",

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

        trailerId:
            "Hd2ldTR-WpI",

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

        trailerId:
            "ga1m0wjzscU",

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

        trailerId:
            "X4bF_quwNtw",

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

        trailerId:
            "xsODpM3Rwdg",

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

        trailerId:
            "L7YeC_quE-o",

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

        trailerId:
            "wY0e0L5c7xk",

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

        trailerId:
            "WLaFr5eem2o",

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

        trailerId:
            "hQ0F6-z6Zj8",

        descriptionPT:
            "Uma descoberta inesperada muda completamente a vida de uma mulher, seu casamento e sua família.",

        descriptionEN:
            "An unexpected discovery completely changes a woman's life, marriage and family."
    }

];


/* =========================================================
   TEAM
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
            "Responsável pela ideia do Blog da Bia, curadoria das séries, conteúdo e identidade do projeto.",

        descriptionEN:
            "Responsible for the idea behind Bia's Blog, series curation, content and project identity.",

        tags: [
            "Curadoria",
            "Conteúdo",
            "Séries",
            "Identidade"
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
            "Responsável pela estrutura em HTML, visual e responsividade em CSS e interações em JavaScript.",

        descriptionEN:
            "Responsible for the HTML structure, CSS design and responsiveness, and JavaScript interactions.",

        tags: [
            "HTML",
            "CSS",
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

    interfaceSize:
        "normal",

    animations:
        true,

    autoHero:
        true,

    compactCards:
        false,

    highContrast:
        false,

    reduceTransparency:
        false,

    trailerAutoplay:
        true,

    descriptions:
        true,

    showStats:
        true,

    showAchievements:
        true,

    performanceMode:
        false,

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

    comments:
        [],

    profile: {

        name:
            "Visitante",

        avatar:
            "B"

    }

};


function loadState() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            );


        if (!saved) {

            return clone(
                defaultState
            );

        }


        return {

            ...clone(
                defaultState
            ),

            ...saved,

            profile: {

                ...defaultState.profile,

                ...(saved.profile || {})

            }

        };

    } catch {

        return clone(
            defaultState
        );

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
   TEMP
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


let currentCast =
    [];


let quizStep =
    0;


let quizAnswers =
    [];


/* =========================================================
   MEDIA CACHE
========================================================= */

const mediaCache =
    new Map();


/* =========================================================
   PLACEHOLDER
========================================================= */

function placeholder(
    title,
    person = false
) {

    const initial =
        String(title)
            .trim()
            .charAt(0)
            .toUpperCase()
        ||
        "B";


    const width =
        person
            ? 500
            : 600;


    const height =
        person
            ? 625
            : 900;


    const svg =
        `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
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
                        offset="0"
                        stop-color="#312640"
                    />

                    <stop
                        offset="1"
                        stop-color="#111219"
                    />
                </linearGradient>
            </defs>

            <rect
                width="${width}"
                height="${height}"
                fill="url(#g)"
            />

            <circle
                cx="${width / 2}"
                cy="${height * .43}"
                r="70"
                fill="rgba(255,255,255,.06)"
            />

            <text
                x="50%"
                y="44%"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="#fff"
                font-family="Arial"
                font-size="64"
                font-weight="700"
            >
                ${initial}
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
        item =>
            item.id === id
    );

}


function getTitle(series) {

    if (
        state.language === "en"
        &&
        series.titleEN
    ) {

        return series.titleEN;

    }


    return series.title;

}


function getDescription(series) {

    return (
        state.language === "en"
            ? series.descriptionEN
            : series.descriptionPT
    );

}


function getSeasons(series) {

    return (
        state.language === "en"
            ? series.seasonsEN
            : series.seasonsPT
    );

}


function getCountry(series) {

    return (
        state.language === "en"
            ? series.countryEN
            : series.countryPT
    );

}


function genreName(genre) {

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
   MEDIA / TVMAZE
========================================================= */

async function getMedia(series) {

    if (
        mediaCache.has(
            series.id
        )
    ) {

        return mediaCache.get(
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
                "TVMaze request failed"
            );

        }


        const data =
            await response.json();


        const poster =
            data?.image?.original
            ||
            data?.image?.medium
            ||
            placeholder(
                getTitle(series)
            );


        const castRaw =
            (
                data?._embedded?.cast
                ||
                []
            )
                .slice(
                    0,
                    10
                );


        const cast =
            await Promise.all(
                castRaw.map(
                    async item => {

                        let image =
                            item.person?.image?.original
                            ||
                            item.person?.image?.medium
                            ||
                            "";


                        if (
                            !image
                            &&
                            item.person?.id
                        ) {

                            try {

                                const personRequest =
                                    await fetch(
                                        `https://api.tvmaze.com/people/${item.person.id}`
                                    );


                                if (
                                    personRequest.ok
                                ) {

                                    const personData =
                                        await personRequest.json();


                                    image =
                                        personData?.image?.original
                                        ||
                                        personData?.image?.medium
                                        ||
                                        "";

                                }

                            } catch {

                                /* ignore */

                            }

                        }


                        return {

                            name:
                                item.person?.name
                                ||
                                "Ator",

                            character:
                                item.character?.name
                                ||
                                "",

                            image:
                                image
                                ||
                                placeholder(
                                    item.person?.name
                                    ||
                                    "Ator",
                                    true
                                )

                        };

                    }
                )
            );


        const result = {

            poster,
            cast

        };


        mediaCache.set(
            series.id,
            result
        );


        return result;

    } catch {

        const fallback = {

            poster:
                placeholder(
                    getTitle(series)
                ),

            cast:
                []

        };


        mediaCache.set(
            series.id,
            fallback
        );


        return fallback;

    }

}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imageFallback(
    image,
    name,
    person = false
) {

    if (!image) {
        return;
    }


    image.onerror =
        () => {

            image.onerror =
                null;


            image.src =
                placeholder(
                    name,
                    person
                );

        };

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    icon = "✓"
) {

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
   TRANSLATION
========================================================= */

const dictionary = {

    pt: {

        subtitle:
            "séries & histórias",

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
            "Sobre"

    },


    en: {

        subtitle:
            "series & stories",

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
            "About"

    }

};


function translateStatic() {

    const language =
        dictionary[
            state.language
        ];


    $$("[data-i18n]")
        .forEach(
            element => {

                const key =
                    element.dataset.i18n;


                if (
                    language[key]
                    !== undefined
                ) {

                    element.textContent =
                        language[key];

                }

            }
        );


    document.documentElement.lang =
        state.language === "en"
            ? "en"
            : "pt-BR";


    langPT.classList.toggle(
        "active",
        state.language === "pt"
    );


    langEN.classList.toggle(
        "active",
        state.language === "en"
    );


    globalSearch.placeholder =
        state.language === "en"
            ? "Type a series..."
            : "Digite uma série...";


    seriesSearch.placeholder =
        state.language === "en"
            ? "Search series..."
            : "Buscar série...";

}


function setLanguage(language) {

    state.language =
        language;


    saveState();

    translateStatic();

    populateCommentSeries();

    renderEverything();


    showToast(
        language === "pt"
            ? "🇧🇷 Português"
            : "🇺🇸 English"
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


    themeIcon.textContent =
        state.theme === "light"
            ? "☾"
            : "☀";

}


function toggleTheme() {

    state.theme =
        state.theme === "dark"
            ? "light"
            : "dark";


    saveState();

    applyTheme();

}


/* =========================================================
   ADVANCED SETTINGS
========================================================= */

function applySettings() {

    body.removeAttribute(
        "data-color-theme"
    );


    if (
        state.colorTheme
        !== "default"
    ) {

        body.dataset.colorTheme =
            state.colorTheme;

    }


    body.classList.remove(
        "interface-small",
        "interface-large"
    );


    if (
        state.interfaceSize
        === "small"
    ) {

        body.classList.add(
            "interface-small"
        );

    }


    if (
        state.interfaceSize
        === "large"
    ) {

        body.classList.add(
            "interface-large"
        );

    }


    body.classList.toggle(
        "animations-off",
        !state.animations
    );


    body.classList.toggle(
        "compact-cards",
        state.compactCards
    );


    body.classList.toggle(
        "high-contrast",
        state.highContrast
    );


    body.classList.toggle(
        "reduce-transparency",
        state.reduceTransparency
    );


    body.classList.toggle(
        "hide-descriptions",
        !state.descriptions
    );


    body.classList.toggle(
        "performance-mode",
        state.performanceMode
    );


    userStatsSection.style.display =
        state.showStats
            ? ""
            : "none";


    achievementsSection.style.display =
        state.showAchievements
            ? ""
            : "none";


    animationsToggle.checked =
        state.animations;


    autoHeroToggle.checked =
        state.autoHero;


    compactCardsToggle.checked =
        state.compactCards;


    contrastToggle.checked =
        state.highContrast;


    transparencyToggle.checked =
        state.reduceTransparency;


    trailerAutoplayToggle.checked =
        state.trailerAutoplay;


    descriptionsToggle.checked =
        state.descriptions;


    statsToggle.checked =
        state.showStats;


    achievementsToggle.checked =
        state.showAchievements;


    performanceToggle.checked =
        state.performanceMode;


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


    $$("[data-interface-size]")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.interfaceSize
                    === state.interfaceSize
                );

            }
        );

}


/* =========================================================
   STATUS
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


function toggleItem(
    list,
    id
) {

    return list.includes(id)
        ? list.filter(
            item =>
                item !== id
        )
        : [
            ...list,
            id
        ];

}


/* =========================================================
   FAVORITE / WATCHLIST
========================================================= */

function toggleFavorite(id) {

    state.favorites =
        toggleItem(
            state.favorites,
            id
        );


    saveState();

    refreshUserUI();


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
        "★"
    );

}


function toggleWatchlist(id) {

    state.watchlist =
        toggleItem(
            state.watchlist,
            id
        );


    saveState();

    refreshUserUI();


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


function toggleWatching(id) {

    if (
        isWatching(id)
    ) {

        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );

    } else {

        state.watching.push(id);


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

    }


    saveState();

    refreshUserUI();

}


function toggleWatched(id) {

    if (
        isWatched(id)
    ) {

        state.watched =
            state.watched.filter(
                item =>
                    item !== id
            );


        state.progress[id] =
            0;

    } else {

        state.watched.push(id);


        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );


        state.progress[id] =
            100;

    }


    saveState();

    refreshUserUI();

}


/* =========================================================
   HERO
========================================================= */

const featuredSeries =
    seriesData.filter(
        item =>
            item.featured
    );


function createHeroDots() {

    heroDots.innerHTML =
        featuredSeries
            .map(
                (
                    item,
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
                    ></button>
                `
            )
            .join("");

}


async function updateHero() {

    const series =
        featuredSeries[
            heroIndex
        ];


    activeSeriesId =
        series.id;


    heroTitle.textContent =
        getTitle(series);


    heroRating.textContent =
        `★ ${series.rating}`;


    heroYear.textContent =
        series.year;


    heroGenre.textContent =
        genreName(
            series.genres[0]
        );


    heroSeasons.textContent =
        getSeasons(series);


    heroDescription.textContent =
        getDescription(series);


    communityRating.textContent =
        `${series.rating} / 5`;


    updateHeroButtons();


    const media =
        await getMedia(
            series
        );


    heroPoster.src =
        media.poster;


    heroBackdrop.style.backgroundImage =
        `url("${media.poster}")`;


    imageFallback(
        heroPoster,
        getTitle(series)
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


function updateHeroButtons() {

    heroFavoriteBtn.classList.toggle(
        "active",
        isFavorite(
            activeSeriesId
        )
    );


    heroFavoriteBtn.textContent =
        isFavorite(
            activeSeriesId
        )
            ? "★ Favoritada"
            : "☆ Favoritar";


    heroWatchlistBtn.textContent =
        isWatchlisted(
            activeSeriesId
        )
            ? "✓ Na minha lista"
            : "+ Minha lista";

}


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
                    seriesModal.classList.contains(
                        "open"
                    )
                    ||
                    trailerModal.classList.contains(
                        "open"
                    )
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
   FILTERING
========================================================= */

function filteredSeries() {

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
                        item.genres.includes(
                            activeFilter
                        )
                );

        }

    }


    const query =
        seriesSearch.value
            .trim()
            .toLowerCase();


    if (query) {

        list =
            list.filter(
                item =>
                    [
                        item.title,
                        item.titleEN || "",
                        getDescription(item),
                        getCountry(item),
                        ...item.genres
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(query)
            );

    }


    const minimum =
        Number(
            ratingFilter.value
        );


    if (
        minimum > 0
    ) {

        list =
            list.filter(
                item =>
                    item.rating
                    >= minimum
            );

    }


    const status =
        statusFilter.value;


    if (
        status === "favorite"
    ) {

        list =
            list.filter(
                item =>
                    isFavorite(
                        item.id
                    )
            );

    }


    if (
        status === "watchlist"
    ) {

        list =
            list.filter(
                item =>
                    isWatchlisted(
                        item.id
                    )
            );

    }


    if (
        status === "watching"
    ) {

        list =
            list.filter(
                item =>
                    isWatching(
                        item.id
                    )
            );

    }


    if (
        status === "watched"
    ) {

        list =
            list.filter(
                item =>
                    isWatched(
                        item.id
                    )
            );

    }


    switch (
        seriesSort.value
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
                    getTitle(a)
                        .localeCompare(
                            getTitle(b)
                        )
            );

            break;


        case "za":

            list.sort(
                (
                    a,
                    b
                ) =>
                    getTitle(b)
                        .localeCompare(
                            getTitle(a)
                        )
            );

            break;


        case "newest":

            list.sort(
                (
                    a,
                    b
                ) =>
                    b.year
                    -
                    a.year
            );

            break;


        case "oldest":

            list.sort(
                (
                    a,
                    b
                ) =>
                    a.year
                    -
                    b.year
            );

            break;

    }


    return list;

}


/* =========================================================
   SERIES CARD
========================================================= */

function seriesCard(series) {

    return `
        <article
            class="series-card"
            data-series-card="${series.id}"
        >

            <div class="series-poster">

                <img
                    data-series-image="${series.id}"
                    src="${
                        placeholder(
                            getTitle(series)
                        )
                    }"
                    alt="${
                        escapeHTML(
                            getTitle(series)
                        )
                    }"
                    loading="lazy"
                >


                <div class="card-top">

                    <span class="card-badge">
                        ${
                            series.brazil
                                ? "BRASIL"
                                : escapeHTML(
                                    genreName(
                                        series.genres[0]
                                    )
                                )
                        }
                    </span>


                    <button
                        class="card-favorite ${
                            isFavorite(
                                series.id
                            )
                                ? "active"
                                : ""
                        }"
                        data-toggle-favorite="${series.id}"
                        type="button"
                    >
                        ${
                            isFavorite(
                                series.id
                            )
                                ? "★"
                                : "☆"
                        }
                    </button>

                </div>

            </div>


            <div class="series-body">

                <h3>
                    ${
                        escapeHTML(
                            getTitle(series)
                        )
                    }
                </h3>


                <div class="series-meta">

                    <span>
                        ${series.year}
                    </span>

                    <span>
                        ${
                            escapeHTML(
                                genreName(
                                    series.genres[0]
                                )
                            )
                        }
                    </span>

                </div>


                <p class="series-description">
                    ${
                        escapeHTML(
                            getDescription(series)
                        )
                    }
                </p>


                <div class="series-footer">

                    <span class="series-rating">
                        ★ ${series.rating}
                    </span>

                    <button
                        class="series-open"
                        data-open-series="${series.id}"
                        type="button"
                    >
                        detalhes
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   LOAD IMAGES
========================================================= */

async function loadImages(
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
                    await getMedia(
                        series
                    );


                image.src =
                    media.poster;


                imageFallback(
                    image,
                    getTitle(series)
                );

            }
        )
    );

}


/* =========================================================
   RENDER SERIES
========================================================= */

async function renderSeries() {

    const list =
        filteredSeries();


    seriesGrid.innerHTML =
        list
            .map(seriesCard)
            .join("");


    seriesResultCount.textContent =
        list.length;


    emptySeries.classList.toggle(
        "hidden",
        list.length > 0
    );


    await loadImages(
        list,
        "data-series-image"
    );

}


/* =========================================================
   HORIZONTAL CARD
========================================================= */

function horizontalCard(
    series,
    attribute,
    progress = null
) {

    return `
        <button
            class="horizontal-card"
            data-open-series="${series.id}"
            type="button"
        >

            <img
                ${attribute}="${series.id}"
                src="${
                    placeholder(
                        getTitle(series)
                    )
                }"
                alt=""
            >


            <div class="horizontal-card-content">

                <strong>
                    ${
                        escapeHTML(
                            getTitle(series)
                        )
                    }
                </strong>

                ${
                    progress !== null
                        ? `
                            <div class="mini-progress">

                                <span
                                    style="width:${progress}%"
                                ></span>

                            </div>

                            <small>
                                ${progress}%
                            </small>
                        `
                        : ""
                }

            </div>

        </button>
    `;

}


/* =========================================================
   PERSONAL
========================================================= */

function personalSeries() {

    if (
        personalTab === "favorites"
    ) {

        return seriesData.filter(
            item =>
                isFavorite(item.id)
        );

    }


    if (
        personalTab === "watching"
    ) {

        return seriesData.filter(
            item =>
                isWatching(item.id)
        );

    }


    if (
        personalTab === "watched"
    ) {

        return seriesData.filter(
            item =>
                isWatched(item.id)
        );

    }


    return seriesData.filter(
        item =>
            isWatchlisted(item.id)
    );

}


async function renderPersonal() {

    const list =
        personalSeries();


    personalGrid.innerHTML =
        list
            .map(
                item =>
                    horizontalCard(
                        item,
                        "data-personal-image",
                        Number(
                            state.progress[
                                item.id
                            ]
                            ||
                            0
                        )
                    )
            )
            .join("");


    personalEmpty.style.display =
        list.length
            ? "none"
            : "";


    await loadImages(
        list,
        "data-personal-image"
    );

}


/* =========================================================
   CONTINUE
========================================================= */

async function renderContinue() {

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


    continueSection.classList.toggle(
        "show",
        list.length > 0
    );


    continueGrid.innerHTML =
        list
            .map(
                item =>
                    horizontalCard(
                        item,
                        "data-continue-image",
                        Number(
                            state.progress[
                                item.id
                            ]
                        )
                    )
            )
            .join("");


    await loadImages(
        list,
        "data-continue-image"
    );

}


/* =========================================================
   HISTORY
========================================================= */

function addHistory(id) {

    state.history =
        state.history.filter(
            item =>
                item !== id
        );


    state.history.unshift(
        id
    );


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


    historySection.classList.toggle(
        "show",
        list.length > 0
    );


    historyGrid.innerHTML =
        list
            .map(
                item =>
                    horizontalCard(
                        item,
                        "data-history-image"
                    )
            )
            .join("");


    await loadImages(
        list,
        "data-history-image"
    );

}


/* =========================================================
   BRAZIL
========================================================= */

async function renderBrazil() {

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
                                placeholder(
                                    getTitle(item)
                                )
                            }"
                            alt=""
                        >

                        <div>

                            <strong>
                                ${
                                    escapeHTML(
                                        getTitle(item)
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


    await loadImages(
        list,
        "data-brazil-image"
    );

}


/* =========================================================
   RANKING
========================================================= */

async function renderRanking() {

    const list =
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
        list
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

                        <span class="ranking-position">
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
                                placeholder(
                                    getTitle(item)
                                )
                            }"
                            alt=""
                        >


                        <span class="ranking-info">

                            <strong>
                                ${
                                    escapeHTML(
                                        getTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    genreName(
                                        item.genres[0]
                                    )
                                }
                                ·
                                ${item.year}
                            </small>

                        </span>


                        <span class="ranking-score">
                            ★ ${item.rating}
                        </span>

                    </button>
                `
            )
            .join("");


    await loadImages(
        list,
        "data-ranking-image"
    );

}


/* =========================================================
   DAILY
========================================================= */

function dailySeries() {

    const now =
        new Date();


    const value =
        now.getFullYear()
        +
        now.getMonth()
        +
        now.getDate();


    return seriesData[
        value
        %
        seriesData.length
    ];

}


async function renderDaily() {

    const series =
        dailySeries();


    dailyTitle.textContent =
        getTitle(series);


    dailyDescription.textContent =
        getDescription(series);


    const media =
        await getMedia(
            series
        );


    dailyImage.src =
        media.poster;


    imageFallback(
        dailyImage,
        getTitle(series)
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


function favoriteGenre() {

    const counts = {};


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

                            counts[genre] =
                                (
                                    counts[genre]
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
        counts
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


    const levelValue =
        xp % 100;


    levelNumber.textContent =
        level;


    levelProgress.style.width =
        `${levelValue}%`;


    levelText.textContent =
        `${levelValue} / 100 XP`;


    const genre =
        favoriteGenre();


    favoriteGenreStat.textContent =
        genre
            ? genreName(genre)
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
            item =>
                item.brazil
                &&
                isWatched(
                    item.id
                )
        ).length;


    updateAchievements();

    renderProfile();

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function updateAchievements() {

    const values = {

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
            >= 3

    };


    $$("[data-achievement]")
        .forEach(
            card => {

                card.classList.toggle(
                    "unlocked",
                    Boolean(
                        values[
                            card.dataset
                                .achievement
                        ]
                    )
                );

            }
        );

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

    profileAvatar.textContent =
        state.profile.avatar;


    profileName.textContent =
        state.profile.name;


    const level =
        Math.floor(
            calculateXP()
            /
            100
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


/* =========================================================
   SERIES MODAL
========================================================= */

async function openSeries(id) {

    const series =
        getSeries(id);


    if (!series) {
        return;
    }


    activeSeriesId =
        id;


    addHistory(id);


    modalTitle.textContent =
        getTitle(series);


    modalRating.textContent =
        `★ ${series.rating}`;


    modalYear.textContent =
        series.year;


    modalGenre.textContent =
        genreName(
            series.genres[0]
        );


    modalSeasons.textContent =
        getSeasons(series);


    modalDescription.textContent =
        getDescription(series);


    modalBadge.textContent =
        series.brazil
            ? "NETFLIX BRASIL"
            : "NETFLIX";


    const media =
        await getMedia(
            series
        );


    modalPoster.src =
        media.poster;


    modalBackdrop.style.backgroundImage =
        `url("${media.poster}")`;


    imageFallback(
        modalPoster,
        getTitle(series)
    );


    currentCast =
        media.cast;


    renderCast();

    renderRecommendations(
        series
    );


    updateModalControls();

    renderStars();


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


function closeSeries() {

    seriesModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


function updateModalControls() {

    modalFavoriteBtn.classList.toggle(
        "active",
        isFavorite(
            activeSeriesId
        )
    );


    modalWatchlistBtn.classList.toggle(
        "active",
        isWatchlisted(
            activeSeriesId
        )
    );


    modalWatchingBtn.classList.toggle(
        "active",
        isWatching(
            activeSeriesId
        )
    );


    modalWatchedBtn.classList.toggle(
        "active",
        isWatched(
            activeSeriesId
        )
    );


    modalFavoriteBtn.textContent =
        isFavorite(
            activeSeriesId
        )
            ? "★ Favoritada"
            : "☆ Favoritar";


    modalWatchlistBtn.textContent =
        isWatchlisted(
            activeSeriesId
        )
            ? "✓ Na minha lista"
            : "+ Minha lista";


    modalWatchingBtn.textContent =
        isWatching(
            activeSeriesId
        )
            ? "■ Assistindo"
            : "▶ Assistindo";


    modalWatchedBtn.textContent =
        isWatched(
            activeSeriesId
        )
            ? "✓ Assistida"
            : "✓ Marcar assistida";

}


/* =========================================================
   CAST
========================================================= */

function renderCast() {

    if (
        !currentCast.length
    ) {

        castGrid.innerHTML =
            `
            <p
                style="
                    color:var(--text-soft);
                    padding:20px;
                "
            >
                Elenco indisponível.
            </p>
            `;


        return;

    }


    castGrid.innerHTML =
        currentCast
            .map(
                (
                    person,
                    index
                ) => `
                    <article class="cast-card">

                        <button
                            data-cast-index="${index}"
                            type="button"
                        >

                            <img
                                data-cast-image="${index}"
                                src="${
                                    person.image
                                }"
                                alt="${
                                    escapeHTML(
                                        person.name
                                    )
                                }"
                            >

                            <div class="cast-card-info">

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


    currentCast.forEach(
        (
            person,
            index
        ) => {

            imageFallback(
                $(
                    `[data-cast-image="${index}"]`
                ),
                person.name,
                true
            );

        }
    );

}


/* =========================================================
   CAST PHOTO
========================================================= */

function openCastPhoto(index) {

    const person =
        currentCast[
            Number(index)
        ];


    if (!person) {
        return;
    }


    castPhotoLarge.src =
        person.image;


    castPhotoName.textContent =
        person.name;


    castPhotoCharacter.textContent =
        person.character;


    imageFallback(
        castPhotoLarge,
        person.name,
        true
    );


    castPhotoModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeCastPhoto() {

    castPhotoModal.classList.remove(
        "open"
    );


    body.style.overflow =
        seriesModal.classList.contains(
            "open"
        )
            ? "hidden"
            : "";

}


/* =========================================================
   RECOMMENDATIONS
========================================================= */

async function renderRecommendations(
    current
) {

    let list =
        seriesData.filter(
            item =>
                item.id
                !== current.id
                &&
                item.genres.some(
                    genre =>
                        genre !== "brasil"
                        &&
                        current.genres.includes(
                            genre
                        )
                )
        );


    list =
        list
            .sort(
                () =>
                    Math.random()
                    -
                    .5
            )
            .slice(
                0,
                4
            );


    recommendations.innerHTML =
        list
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
                                placeholder(
                                    getTitle(item)
                                )
                            }"
                            alt=""
                        >

                        <span>
                            ${
                                escapeHTML(
                                    getTitle(item)
                                )
                            }
                        </span>

                    </button>
                `
            )
            .join("");


    await loadImages(
        list,
        "data-recommendation-image"
    );

}


/* =========================================================
   RATING
========================================================= */

function renderStars() {

    const value =
        Number(
            state.ratings[
                activeSeriesId
            ]
            ||
            0
        );


    $$(
        "[data-star]",
        starRating
    )
        .forEach(
            button => {

                button.textContent =
                    Number(
                        button.dataset.star
                    )
                    <= value
                        ? "★"
                        : "☆";

            }
        );

}


function rateSeries(rating) {

    state.ratings[
        activeSeriesId
    ] =
        Number(rating);


    saveState();

    renderStars();

    updateStats();


    showToast(
        `Sua nota: ${rating}/5`,
        "★"
    );

}


/* =========================================================
   PROGRESS / NOTE
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
                    id
                    !== activeSeriesId
            );

    }


    if (
        value === 100
    ) {

        state.watching =
            state.watching.filter(
                id =>
                    id
                    !== activeSeriesId
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

    refreshUserUI();

}


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
        personalNoteInput.value
            .trim();


    saveState();


    showToast(
        "Informações salvas"
    );

}


/* =========================================================
   TRAILER
========================================================= */

async function openTrailer(series) {

    if (!series) {
        return;
    }


    currentTrailerSeries =
        series;


    const media =
        await getMedia(
            series
        );


    trailerTitle.textContent =
        getTitle(series);


    trailerSeriesName.textContent =
        getTitle(series);


    trailerSeriesMeta.textContent =
        `${series.year} · ${
            genreName(
                series.genres[0]
            )
        }`;


    trailerPoster.src =
        media.poster;


    imageFallback(
        trailerPoster,
        getTitle(series)
    );


    trailerPlayerWrap.classList.remove(
        "ready"
    );


    trailerUnavailable.classList.remove(
        "show"
    );


    trailerPlayerWrap.style.display =
        "";


    updateTrailerButtons();


    if (
        !series.trailerId
    ) {

        trailerPlayerWrap.style.display =
            "none";


        trailerUnavailable.classList.add(
            "show"
        );


        trailerFrame.src =
            "";

    } else {

        const autoplay =
            state.trailerAutoplay
                ? 1
                : 0;


        trailerFrame.src =
            `https://www.youtube-nocookie.com/embed/${
                encodeURIComponent(
                    series.trailerId
                )
            }?autoplay=${autoplay}&rel=0&playsinline=1`;

    }


    trailerModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeTrailer() {

    trailerModal.classList.remove(
        "open",
        "cinema"
    );


    trailerFrame.src =
        "";


    trailerPlayerWrap.classList.remove(
        "ready"
    );


    cinemaModeBtn.textContent =
        "⛶ Cinema";


    body.style.overflow =
        seriesModal.classList.contains(
            "open"
        )
            ? "hidden"
            : "";

}


function updateTrailerButtons() {

    if (
        !currentTrailerSeries
    ) {
        return;
    }


    trailerFavoriteBtn.textContent =
        isFavorite(
            currentTrailerSeries.id
        )
            ? "★ Favoritada"
            : "☆ Favoritar";


    trailerWatchlistBtn.textContent =
        isWatchlisted(
            currentTrailerSeries.id
        )
            ? "✓ Na minha lista"
            : "+ Minha lista";

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    searchOverlay.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";


    globalSearch.value =
        "";


    renderSearch();


    setTimeout(
        () =>
            globalSearch.focus(),
        80
    );

}


function closeSearch() {

    searchOverlay.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


async function renderSearch() {

    const query =
        globalSearch.value
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
                        getDescription(item),
                        getCountry(item),
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


    if (
        !list.length
    ) {

        searchResults.innerHTML =
            `
            <p
                style="
                    padding:30px;
                    text-align:center;
                    color:var(--text-soft);
                "
            >
                Nenhuma série encontrada.
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
                                placeholder(
                                    getTitle(item)
                                )
                            }"
                            alt=""
                        >

                        <span>

                            <strong>
                                ${
                                    escapeHTML(
                                        getTitle(item)
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    genreName(
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


    await loadImages(
        list,
        "data-search-image"
    );

}


/* =========================================================
   SMART RECOMMEND
========================================================= */

function smartRecommend() {

    const genre =
        favoriteGenre();


    let list =
        seriesData.filter(
            item =>
                !isWatched(
                    item.id
                )
        );


    if (genre) {

        const matches =
            list.filter(
                item =>
                    item.genres.includes(
                        genre
                    )
            );


        if (
            matches.length
        ) {

            list =
                matches;

        }

    }


    list.sort(
        (
            a,
            b
        ) =>
            b.rating
            -
            a.rating
    );


    const result =
        randomItem(
            list.slice(
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
   COPY / SHARE
========================================================= */

async function copyTitle() {

    const series =
        getSeries(
            activeSeriesId
        );


    try {

        await navigator.clipboard.writeText(
            getTitle(series)
        );


        showToast(
            "Título copiado"
        );

    } catch {

        showToast(
            getTitle(series)
        );

    }

}


async function shareSeries() {

    const series =
        getSeries(
            activeSeriesId
        );


    const url =
        new URL(
            window.location.href
        );


    url.hash =
        `serie=${series.id}`;


    try {

        if (
            navigator.share
        ) {

            await navigator.share({

                title:
                    getTitle(series),

                text:
                    `${getTitle(series)} — Blog da Bia`,

                url:
                    url.toString()

            });

        } else {

            await navigator.clipboard.writeText(
                url.toString()
            );


            showToast(
                "Link copiado"
            );

        }

    } catch {

        /* cancelado */

    }

}


async function shareBlog() {

    try {

        if (
            navigator.share
        ) {

            await navigator.share({

                title:
                    "Blog da Bia",

                url:
                    window.location.href

            });

        } else {

            await navigator.clipboard.writeText(
                window.location.href
            );


            showToast(
                "Link copiado"
            );

        }

    } catch {

        /* cancelado */

    }

}


/* =========================================================
   COMMENTS
========================================================= */

function populateCommentSeries() {

    const previous =
        commentSeries.value;


    commentSeries.innerHTML =
        `
        <option value="">
            Escolha uma série
        </option>
        `
        +
        [...seriesData]
            .sort(
                (
                    a,
                    b
                ) =>
                    getTitle(a)
                        .localeCompare(
                            getTitle(b)
                        )
            )
            .map(
                item => `
                    <option
                        value="${item.id}"
                    >
                        ${
                            escapeHTML(
                                getTitle(item)
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
        !name
        ||
        !text
        ||
        !seriesId
    ) {

        showToast(
            "Preencha todos os campos",
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


    showToast(
        "Comentário publicado"
    );

}


function formatDate(value) {

    return new Date(value)
        .toLocaleDateString(
            state.language === "en"
                ? "en-US"
                : "pt-BR"
        );

}


function renderComments() {

    let list =
        [...state.comments];


    if (
        commentSort.value
        === "likes"
    ) {

        list.sort(
            (
                a,
                b
            ) =>
                b.likes
                -
                a.likes
        );

    } else if (
        commentSort.value
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

    } else {

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


    if (
        !list.length
    ) {

        commentsList.innerHTML =
            `
            <p
                style="
                    padding:35px;
                    color:var(--text-soft);
                    text-align:center;
                "
            >
                Ainda não há comentários.
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
                        <article class="comment-card">

                            <div class="comment-top">

                                <div class="comment-author">

                                    <span class="comment-avatar">
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


                                <span class="comment-series">
                                    ${
                                        series
                                            ? escapeHTML(
                                                getTitle(
                                                    series
                                                )
                                            )
                                            : ""
                                    }
                                </span>

                            </div>


                            <p
                                class="comment-text ${
                                    comment.spoiler
                                        ? "spoiler"
                                        : ""
                                }"
                                data-comment-text="${comment.id}"
                            >
                                ${
                                    escapeHTML(
                                        comment.text
                                    )
                                }
                            </p>


                            <div class="comment-actions">

                                ${
                                    comment.spoiler
                                        ? `
                                            <button
                                                data-show-spoiler="${comment.id}"
                                                type="button"
                                            >
                                                Mostrar spoiler
                                            </button>
                                        `
                                        : ""
                                }


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
                                    Excluir
                                </button>

                            </div>

                        </article>
                    `;

                }
            )
            .join("");

}


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

    if (
        !confirm(
            "Excluir este comentário?"
        )
    ) {
        return;
    }


    state.comments =
        state.comments.filter(
            item =>
                item.id
                !== Number(id)
        );


    saveState();

    renderComments();

    updateStats();

}


/* =========================================================
   TEAM PROFILE
========================================================= */

function openTeamProfile(id) {

    const profile =
        teamProfiles[id];


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


    teamModalTags.innerHTML =
        profile.tags
            .map(
                tag => `
                    <span>
                        ${escapeHTML(tag)}
                    </span>
                `
            )
            .join("");


    teamProfileModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {
        questionPT:
            "Que tipo de história você quer?",

        questionEN:
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
        questionPT:
            "O que mais te interessa?",

        questionEN:
            "What interests you most?",

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
                pt: "Uma história intensa",
                en: "An intense story",
                genre: "drama"
            }

        ]
    },


    {
        questionPT:
            "Quer uma série brasileira?",

        questionEN:
            "Would you like a Brazilian series?",

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


    quizModal.classList.add(
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

        finishQuiz();

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
        <span class="section-kicker">
            ${
                state.language === "en"
                    ? `QUESTION ${quizStep + 1}`
                    : `PERGUNTA ${quizStep + 1}`
            }
        </span>

        <h2>
            ${
                state.language === "en"
                    ? question.questionEN
                    : question.questionPT
            }
        </h2>

        <div
            id="quizOptions"
            class="quiz-options"
        ></div>
        `;


    const options =
        $("#quizOptions");


    question.options
        .forEach(
            option => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "quiz-option";


                button.textContent =
                    state.language === "en"
                        ? option.en
                        : option.pt;


                button.onclick =
                    () => {

                        quizAnswers.push(
                            option
                        );


                        quizStep++;


                        renderQuizQuestion();

                    };


                options.appendChild(
                    button
                );

            }
        );

}


async function finishQuiz() {

    const genres = {};


    let wantsBrazil =
        false;


    quizAnswers
        .forEach(
            answer => {

                if (
                    answer.genre
                ) {

                    genres[
                        answer.genre
                    ] =
                        (
                            genres[
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
                    === true
                ) {

                    wantsBrazil =
                        true;

                }

            }
        );


    const genre =
        Object.entries(
            genres
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
                item.genres.includes(
                    genre
                )
        );


    if (
        wantsBrazil
    ) {

        const brazil =
            candidates.filter(
                item =>
                    item.brazil
            );


        if (
            brazil.length
        ) {

            candidates =
                brazil;

        }

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
        await getMedia(
            result
        );


    quizProgress.style.width =
        "100%";


    quizContent.innerHTML =
        `
        <span class="section-kicker">
            SUA SÉRIE
        </span>

        <h2>
            ${
                escapeHTML(
                    getTitle(result)
                )
            }
        </h2>

        <img
            class="quiz-result-poster"
            src="${media.poster}"
            alt=""
        >

        <p>
            ${
                escapeHTML(
                    getDescription(result)
                )
            }
        </p>

        <button
            id="quizResultButton"
            class="primary-btn"
            type="button"
        >
            Ver detalhes
        </button>
        `;


    $("#quizResultButton")
        .onclick =
        () => {

            quizModal.classList.remove(
                "open"
            );


            openSeries(
                result.id
            );

        };

}


/* =========================================================
   PROFILE MODAL
========================================================= */

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


    profileModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


/* =========================================================
   DATA
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


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        "blog-da-bia-dados.json";


    document.body.appendChild(
        link
    );


    link.click();

    link.remove();


    URL.revokeObjectURL(
        url
    );

}


function importData(file) {

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

                    ...clone(
                        defaultState
                    ),

                    ...imported,

                    profile: {

                        ...defaultState.profile,

                        ...(imported.profile || {})

                    }

                };


                saveState();

                applyTheme();

                applySettings();

                translateStatic();

                renderEverything();


                showToast(
                    "Dados importados"
                );

            } catch {

                showToast(
                    "Arquivo inválido",
                    "!"
                );

            }

        };


    reader.readAsText(
        file
    );

}


/* =========================================================
   REFRESH
========================================================= */

function refreshUserUI() {

    saveState();

    updateStats();

    updateHeroButtons();

    updateModalControls();

    updateTrailerButtons();

    renderSeries();

    renderPersonal();

    renderContinue();

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

    renderPersonal();

    renderContinue();

    renderHistory();

    renderBrazil();

    renderRanking();

    renderDaily();

    renderComments();


    $("#projectSeriesCount")
        .textContent =
        seriesData.length;

}


/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const open =
            event.target.closest(
                "[data-open-series]"
            );


        if (open) {

            openSeries(
                open.dataset.openSeries
            );


            return;

        }


        const card =
            event.target.closest(
                "[data-series-card]"
            );


        if (
            card
            &&
            !event.target.closest(
                "button"
            )
        ) {

            openSeries(
                card.dataset.seriesCard
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
                favorite.dataset.toggleFavorite
            );


            return;

        }


        const search =
            event.target.closest(
                "[data-search-series]"
            );


        if (search) {

            closeSearch();


            openSeries(
                search.dataset.searchSeries
            );


            return;

        }


        const cast =
            event.target.closest(
                "[data-cast-index]"
            );


        if (cast) {

            openCastPhoto(
                cast.dataset.castIndex
            );


            return;

        }


        const team =
            event.target.closest(
                "[data-open-team-profile]"
            );


        if (team) {

            openTeamProfile(
                team.dataset.openTeamProfile
            );


            return;

        }


        const spoiler =
            event.target.closest(
                "[data-show-spoiler]"
            );


        if (spoiler) {

            const text =
                $(
                    `[data-comment-text="${
                        spoiler.dataset.showSpoiler
                    }"]`
                );


            text.classList.toggle(
                "revealed"
            );


            spoiler.textContent =
                text.classList.contains(
                    "revealed"
                )
                    ? "Ocultar spoiler"
                    : "Mostrar spoiler";


            return;

        }


        const like =
            event.target.closest(
                "[data-like-comment]"
            );


        if (like) {

            toggleCommentLike(
                like.dataset.likeComment
            );


            return;

        }


        const deleteButton =
            event.target.closest(
                "[data-delete-comment]"
            );


        if (deleteButton) {

            deleteComment(
                deleteButton.dataset.deleteComment
            );

        }

    }
);


/* =========================================================
   HEADER EVENTS
========================================================= */

langPT.onclick =
    () =>
        setLanguage("pt");


langEN.onclick =
    () =>
        setLanguage("en");


$$("[data-mobile-language]")
    .forEach(
        button => {

            button.onclick =
                () => {

                    setLanguage(
                        button.dataset.mobileLanguage
                    );


                    mobileMenu.classList.remove(
                        "open"
                    );


                    menuOverlay.classList.remove(
                        "show"
                    );

                };

        }
    );


themeBtn.onclick =
    toggleTheme;


shareBlogBtn.onclick =
    shareBlog;


searchOpenBtn.onclick =
    openSearch;


/* =========================================================
   MOBILE
========================================================= */

mobileMenuBtn.onclick =
    () => {

        mobileMenu.classList.add(
            "open"
        );


        menuOverlay.classList.add(
            "show"
        );


        body.style.overflow =
            "hidden";

    };


function closeMobileMenu() {

    mobileMenu.classList.remove(
        "open"
    );


    menuOverlay.classList.remove(
        "show"
    );


    body.style.overflow =
        "";

}


mobileMenuClose.onclick =
    closeMobileMenu;


menuOverlay.onclick =
    closeMobileMenu;


$$("#mobileMenu a")
    .forEach(
        link => {

            link.onclick =
                closeMobileMenu;

        }
    );


/* =========================================================
   SEARCH EVENTS
========================================================= */

searchClose.onclick =
    closeSearch;


searchOverlay.onclick =
    event => {

        if (
            event.target
            === searchOverlay
        ) {

            closeSearch();

        }

    };


globalSearch.oninput =
    debounce(
        renderSearch
    );


clearSearch.onclick =
    () => {

        globalSearch.value =
            "";


        renderSearch();

        globalSearch.focus();

    };


/* =========================================================
   HERO EVENTS
========================================================= */

heroDetailsBtn.onclick =
    () =>
        openSeries(
            activeSeriesId
        );


watchTrailerBtn.onclick =
    () =>
        openTrailer(
            getSeries(
                activeSeriesId
            )
        );


heroFavoriteBtn.onclick =
    () =>
        toggleFavorite(
            activeSeriesId
        );


heroWatchlistBtn.onclick =
    () =>
        toggleWatchlist(
            activeSeriesId
        );


randomSeriesBtn.onclick =
    () => {

        const result =
            randomItem(
                seriesData.filter(
                    item =>
                        item.id
                        !== activeSeriesId
                )
            );


        if (result) {

            openSeries(
                result.id
            );

        }

    };


copySeriesBtn.onclick =
    copyTitle;


shareSeriesBtn.onclick =
    shareSeries;


heroDots.onclick =
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
                button.dataset.heroIndex
            );


        updateHero();

        startHeroTimer();

    };


/* =========================================================
   CATALOG EVENTS
========================================================= */

seriesSearch.oninput =
    debounce(
        renderSeries
    );


seriesSort.onchange =
    renderSeries;


ratingFilter.onchange =
    renderSeries;


statusFilter.onchange =
    renderSeries;


filters.onclick =
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

    };


advancedFilterBtn.onclick =
    () => {

        advancedFilters.classList.toggle(
            "open"
        );

    };


clearFiltersBtn.onclick =
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

    };


/* =========================================================
   PERSONAL
========================================================= */

$$("[data-personal-tab]")
    .forEach(
        button => {

            button.onclick =
                () => {

                    personalTab =
                        button.dataset.personalTab;


                    $$("[data-personal-tab]")
                        .forEach(
                            item => {

                                item.classList.toggle(
                                    "active",
                                    item === button
                                );

                            }
                        );


                    renderPersonal();

                };

        }
    );


/* =========================================================
   BRAZIL / DAILY / QUIZ
========================================================= */

seeAllBrazilBtn.onclick =
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
            .scrollIntoView({

                behavior:
                    state.animations
                        ? "smooth"
                        : "auto"

            });

    };


dailySeriesBtn.onclick =
    () =>
        openSeries(
            dailySeries().id
        );


smartRecommendBtn.onclick =
    smartRecommend;


startQuizBtn.onclick =
    openQuiz;


quizBeginBtn.onclick =
    renderQuizQuestion;


/* =========================================================
   HISTORY
========================================================= */

clearHistoryBtn.onclick =
    () => {

        state.history =
            [];


        saveState();

        renderHistory();

    };


/* =========================================================
   SERIES MODAL EVENTS
========================================================= */

seriesModalClose.onclick =
    closeSeries;


seriesModal.onclick =
    event => {

        if (
            event.target
            === seriesModal
        ) {

            closeSeries();

        }

    };


modalFavoriteBtn.onclick =
    () =>
        toggleFavorite(
            activeSeriesId
        );


modalWatchlistBtn.onclick =
    () =>
        toggleWatchlist(
            activeSeriesId
        );


modalWatchingBtn.onclick =
    () =>
        toggleWatching(
            activeSeriesId
        );


modalWatchedBtn.onclick =
    () =>
        toggleWatched(
            activeSeriesId
        );


starRating.onclick =
    event => {

        const button =
            event.target.closest(
                "[data-star]"
            );


        if (!button) {
            return;
        }


        rateSeries(
            button.dataset.star
        );

    };


episodeProgress.oninput =
    () => {

        episodeProgressText.textContent =
            `${episodeProgress.value}%`;

    };


episodeProgress.onchange =
    saveProgress;


saveSeriesInfoBtn.onclick =
    saveSeriesInfo;


modalTrailerBtn.onclick =
    () =>
        openTrailer(
            getSeries(
                activeSeriesId
            )
        );


modalShareBtn.onclick =
    shareSeries;


modalCopyBtn.onclick =
    copyTitle;


/* =========================================================
   TRAILER EVENTS
========================================================= */

trailerFrame.onload =
    () => {

        if (
            trailerFrame.src
        ) {

            setTimeout(
                () => {

                    trailerPlayerWrap.classList.add(
                        "ready"
                    );

                },
                250
            );

        }

    };


trailerClose.onclick =
    closeTrailer;


trailerModal.onclick =
    event => {

        if (
            event.target
            === trailerModal
        ) {

            closeTrailer();

        }

    };


trailerFavoriteBtn.onclick =
    () => {

        if (
            currentTrailerSeries
        ) {

            toggleFavorite(
                currentTrailerSeries.id
            );

        }

    };


trailerWatchlistBtn.onclick =
    () => {

        if (
            currentTrailerSeries
        ) {

            toggleWatchlist(
                currentTrailerSeries.id
            );

        }

    };


cinemaModeBtn.onclick =
    () => {

        const enabled =
            trailerModal.classList.toggle(
                "cinema"
            );


        cinemaModeBtn.textContent =
            enabled
                ? "↙ Normal"
                : "⛶ Cinema";

    };


/* =========================================================
   CAST MODAL
========================================================= */

castPhotoClose.onclick =
    closeCastPhoto;


castPhotoModal.onclick =
    event => {

        if (
            event.target
            === castPhotoModal
        ) {

            closeCastPhoto();

        }

    };


/* =========================================================
   TEAM MODAL
========================================================= */

function closeTeamModal() {

    teamProfileModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


teamProfileClose.onclick =
    closeTeamModal;


teamProfileModal.onclick =
    event => {

        if (
            event.target
            === teamProfileModal
        ) {

            closeTeamModal();

        }

    };


/* =========================================================
   QUIZ MODAL
========================================================= */

quizClose.onclick =
    () => {

        quizModal.classList.remove(
            "open"
        );


        body.style.overflow =
            "";

    };


/* =========================================================
   PROFILE
========================================================= */

editProfileBtn.onclick =
    openProfile;


profileClose.onclick =
    () => {

        profileModal.classList.remove(
            "open"
        );


        body.style.overflow =
            "";

    };


profileForm.onsubmit =
    event => {

        event.preventDefault();


        const name =
            profileNameInput.value
                .trim();


        if (!name) {
            return;
        }


        state.profile.name =
            name;


        saveState();

        renderProfile();


        profileModal.classList.remove(
            "open"
        );


        body.style.overflow =
            "";


        showToast(
            "Perfil salvo"
        );

    };


$$(".avatar-picker button")
    .forEach(
        button => {

            button.onclick =
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

                };

        }
    );


/* =========================================================
   COMMENTS EVENTS
========================================================= */

commentText.oninput =
    () => {

        commentCharCount.textContent =
            commentText.value.length;

    };


commentForm.onsubmit =
    addComment;


commentSort.onchange =
    renderComments;


/* =========================================================
   SETTINGS EVENTS
========================================================= */

settingsFloating.onclick =
    () => {

        settingsPanel.classList.add(
            "open"
        );

    };


settingsClose.onclick =
    () => {

        settingsPanel.classList.remove(
            "open"
        );

    };


$$(".theme-color")
    .forEach(
        button => {

            button.onclick =
                () => {

                    state.colorTheme =
                        button.dataset.themeColor;


                    saveState();

                    applySettings();

                };

        }
    );


$$("[data-interface-size]")
    .forEach(
        button => {

            button.onclick =
                () => {

                    state.interfaceSize =
                        button.dataset.interfaceSize;


                    saveState();

                    applySettings();

                };

        }
    );


animationsToggle.onchange =
    () => {

        state.animations =
            animationsToggle.checked;


        saveState();

        applySettings();

    };


autoHeroToggle.onchange =
    () => {

        state.autoHero =
            autoHeroToggle.checked;


        saveState();

        startHeroTimer();

    };


compactCardsToggle.onchange =
    () => {

        state.compactCards =
            compactCardsToggle.checked;


        saveState();

        applySettings();

    };


contrastToggle.onchange =
    () => {

        state.highContrast =
            contrastToggle.checked;


        saveState();

        applySettings();

    };


transparencyToggle.onchange =
    () => {

        state.reduceTransparency =
            transparencyToggle.checked;


        saveState();

        applySettings();

    };


trailerAutoplayToggle.onchange =
    () => {

        state.trailerAutoplay =
            trailerAutoplayToggle.checked;


        saveState();

    };


descriptionsToggle.onchange =
    () => {

        state.descriptions =
            descriptionsToggle.checked;


        saveState();

        applySettings();

    };


statsToggle.onchange =
    () => {

        state.showStats =
            statsToggle.checked;


        saveState();

        applySettings();

    };


achievementsToggle.onchange =
    () => {

        state.showAchievements =
            achievementsToggle.checked;


        saveState();

        applySettings();

    };


performanceToggle.onchange =
    () => {

        state.performanceMode =
            performanceToggle.checked;


        saveState();

        applySettings();

    };


resetVisualSettingsBtn.onclick =
    () => {

        state.colorTheme =
            "default";


        state.interfaceSize =
            "normal";


        state.animations =
            true;


        state.autoHero =
            true;


        state.compactCards =
            false;


        state.highContrast =
            false;


        state.reduceTransparency =
            false;


        state.trailerAutoplay =
            true;


        state.descriptions =
            true;


        state.showStats =
            true;


        state.showAchievements =
            true;


        state.performanceMode =
            false;


        saveState();

        applySettings();

        startHeroTimer();


        showToast(
            "Aparência restaurada"
        );

    };


/* =========================================================
   DATA EVENTS
========================================================= */

exportDataBtn.onclick =
    exportData;


importDataBtn.onclick =
    () =>
        importDataInput.click();


importDataInput.onchange =
    () => {

        const file =
            importDataInput.files?.[0];


        if (file) {

            importData(file);

        }


        importDataInput.value =
            "";

    };


resetDataBtn.onclick =
    () => {

        if (
            !confirm(
                "Apagar todos os dados salvos?"
            )
        ) {
            return;
        }


        state =
            clone(
                defaultState
            );


        saveState();

        applyTheme();

        applySettings();

        translateStatic();

        renderEverything();


        showToast(
            "Dados redefinidos"
        );

    };


/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const current =
        window.scrollY;


    const max =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    scrollProgress.style.width =
        `${
            max > 0
                ? current / max * 100
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

}


window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive:
            true
    }
);


backTop.onclick =
    () => {

        window.scrollTo({

            top:
                0,

            behavior:
                state.animations
                    ? "smooth"
                    : "auto"

        });

    };


/* =========================================================
   TILT
========================================================= */

function setupTilt() {

    heroPosterCard.addEventListener(
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


            heroPosterCard.style.transform =
                `
                perspective(900px)
                rotateX(${
                    (
                        .5
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
                        .5
                    )
                    *
                    7
                }deg)
                `;

        }
    );


    heroPosterCard.addEventListener(
        "mouseleave",
        () => {

            heroPosterCard.style.transform =
                "";

        }
    );


    $$(".person-card")
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
                            card.getBoundingClientRect();


                        const x =
                            event.clientX
                            -
                            rect.left;


                        const y =
                            event.clientY
                            -
                            rect.top;


                        card.style.setProperty(
                            "--mouse-x",
                            `${x}px`
                        );


                        card.style.setProperty(
                            "--mouse-y",
                            `${y}px`
                        );


                        const rotateY =
                            (
                                x / rect.width
                                -
                                .5
                            )
                            *
                            3;


                        const rotateX =
                            (
                                .5
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

function setupReveal() {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
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
                    .1
            }
        );


    $$(".reveal")
        .forEach(
            item =>
                observer.observe(
                    item
                )
        );

}


/* =========================================================
   HASH
========================================================= */

function checkHash() {

    if (
        !window.location.hash.startsWith(
            "#serie="
        )
    ) {
        return;
    }


    const id =
        decodeURIComponent(
            window.location.hash.replace(
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
            500
        );

    }

}


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key
            !== "Escape"
        ) {
            return;
        }


        castPhotoModal.classList.remove(
            "open"
        );


        trailerModal.classList.remove(
            "open"
        );


        trailerFrame.src =
            "";


        seriesModal.classList.remove(
            "open"
        );


        searchOverlay.classList.remove(
            "open"
        );


        teamProfileModal.classList.remove(
            "open"
        );


        quizModal.classList.remove(
            "open"
        );


        profileModal.classList.remove(
            "open"
        );


        mobileMenu.classList.remove(
            "open"
        );


        menuOverlay.classList.remove(
            "show"
        );


        settingsPanel.classList.remove(
            "open"
        );


        body.style.overflow =
            "";

    }
);


/* =========================================================
   INIT
========================================================= */

function init() {

    currentYear.textContent =
        new Date()
            .getFullYear();


    applyTheme();

    applySettings();

    translateStatic();

    populateCommentSeries();

    renderEverything();

    setupTilt();

    setupReveal();

    handleScroll();

    startHeroTimer();

    checkHash();


    setTimeout(
        () => {

            loader.classList.add(
                "hidden"
            );

        },
        650
    );

}


/* =========================================================
   START
========================================================= */

init();