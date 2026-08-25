"use strict";

/* =========================================================
   BLOG DA BIA
   SCRIPT.JS — VERSÃO CORRIGIDA
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const body = document.body;

const STORAGE_KEY = "blogDaBia_v31";


function clone(value) {
    return JSON.parse(JSON.stringify(value));
}


function clamp(value, min, max) {
    return Math.min(Math.max(Number(value) || 0, min), max);
}


function randomItem(array = []) {
    if (!array.length) return null;

    return array[
        Math.floor(Math.random() * array.length)
    ];
}


function unique(array = []) {
    return [...new Set(array)];
}


function normalizeText(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}


function escapeHTML(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function debounce(callback, delay = 180) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(
            () => callback(...args),
            delay
        );
    };
}


function safeText(element, value = "") {
    if (element) {
        element.textContent = value;
    }
}


function safeHTML(element, value = "") {
    if (element) {
        element.innerHTML = value;
    }
}


function smoothScrollTo(selector) {

    const element = $(selector);

    if (!element) return;

    element.scrollIntoView({
        behavior:
            state.animations &&
            !state.reducedMotion
                ? "smooth"
                : "auto",
        block: "start"
    });
}


/* =========================================================
   ELEMENTOS
========================================================= */

const loader = $("#loader");
const scrollProgress = $("#scrollProgress");
const header = $("#header");

const toast = $("#toast");
const toastIcon = $("#toastIcon");
const toastText = $("#toastText");

const cursorGlow = $("#cursorGlow");

const langPT = $("#langPT");
const langEN = $("#langEN");

const searchOpenBtn = $("#searchOpenBtn");
const themeBtn = $("#themeBtn");
const themeIcon = $("#themeIcon");
const shareBlogBtn = $("#shareBlogBtn");

const mobileMenuBtn = $("#mobileMenuBtn");
const mobileMenu = $("#mobileMenu");
const mobileMenuClose = $("#mobileMenuClose");
const menuOverlay = $("#menuOverlay");
const mobileSettingsBtn = $("#mobileSettingsBtn");

const searchOverlay = $("#searchOverlay");
const searchClose = $("#searchClose");
const globalSearch = $("#globalSearch");
const clearSearch = $("#clearSearch");
const searchResults = $("#searchResults");
const searchHistoryArea = $("#searchHistoryArea");
const searchHistory = $("#searchHistory");
const clearSearchHistoryBtn = $("#clearSearchHistoryBtn");

const heroBackdrop = $("#heroBackdrop");
const heroTitle = $("#heroTitle");
const heroRating = $("#heroRating");
const heroYear = $("#heroYear");
const heroGenre = $("#heroGenre");
const heroSeasons = $("#heroSeasons");
const heroDescription = $("#heroDescription");
const heroDetailsBtn = $("#heroDetailsBtn");
const watchTrailerBtn = $("#watchTrailerBtn");
const heroFavoriteBtn = $("#heroFavoriteBtn");
const heroWatchlistBtn = $("#heroWatchlistBtn");
const heroLikeBtn = $("#heroLikeBtn");
const heroLikeCount = $("#heroLikeCount");
const randomSeriesBtn = $("#randomSeriesBtn");
const copySeriesBtn = $("#copySeriesBtn");
const shareSeriesBtn = $("#shareSeriesBtn");
const heroPosterCard = $("#heroPosterCard");
const heroPoster = $("#heroPoster");
const communityRating = $("#communityRating");
const heroDots = $("#heroDots");

const favoriteCount = $("#favoriteCount");
const watchlistCount = $("#watchlistCount");
const watchedCount = $("#watchedCount");
const ratingsCount = $("#ratingsCount");
const totalLikesCount = $("#totalLikesCount");
const commentsCount = $("#commentsCount");

const profileAvatar = $("#profileAvatar");
const profileName = $("#profileName");
const profileLevelText = $("#profileLevelText");
const editProfileBtn = $("#editProfileBtn");
const levelNumber = $("#levelNumber");
const levelProgress = $("#levelProgress");
const levelText = $("#levelText");

const continueSection = $("#continueSection");
const continueGrid = $("#continueGrid");

const historySection = $("#historySection");
const historyGrid = $("#historyGrid");
const clearHistoryBtn = $("#clearHistoryBtn");

const dailyTitle = $("#dailyTitle");
const dailyDescription = $("#dailyDescription");
const dailyImage = $("#dailyImage");
const dailySeriesBtn = $("#dailySeriesBtn");
const dailyAnotherBtn = $("#dailyAnotherBtn");

const popularCarousel = $("#popularCarousel");
const popularPrevBtn = $("#popularPrevBtn");
const popularNextBtn = $("#popularNextBtn");

const seriesSearch = $("#seriesSearch");
const seriesSort = $("#seriesSort");
const filters = $("#filters");
const advancedFilterBtn = $("#advancedFilterBtn");
const advancedFilters = $("#advancedFilters");
const ratingFilter = $("#ratingFilter");
const statusFilter = $("#statusFilter");
const countryFilter = $("#countryFilter");
const clearFiltersBtn = $("#clearFiltersBtn");
const emptyClearBtn = $("#emptyClearBtn");
const seriesGrid = $("#seriesGrid");
const seriesResultCount = $("#seriesResultCount");
const emptySeries = $("#emptySeries");

const becauseSection = $("#becauseSection");
const becauseTitle = $("#becauseTitle");
const becauseGrid = $("#becauseGrid");

const personalGrid = $("#personalGrid");
const personalEmpty = $("#personalEmpty");

const watchlistTabCount = $("#watchlistTabCount");
const favoritesTabCount = $("#favoritesTabCount");
const likedTabCount = $("#likedTabCount");
const watchingTabCount = $("#watchingTabCount");
const watchedTabCount = $("#watchedTabCount");

const brazilCarousel = $("#brazilCarousel");
const seeAllBrazilBtn = $("#seeAllBrazilBtn");

const startQuizBtn = $("#startQuizBtn");
const smartRecommendBtn = $("#smartRecommendBtn");
const surpriseMeBtn = $("#surpriseMeBtn");

const rankingList = $("#rankingList");
const rankingSection = $("#ranking");

const userStatsSection = $("#userStatsSection");
const favoriteGenreStat = $("#favoriteGenreStat");
const completionStat = $("#completionStat");
const averageRatingStat = $("#averageRatingStat");
const brazilWatchedStat = $("#brazilWatchedStat");
const likedSeriesStat = $("#likedSeriesStat");
const averageProgressStat = $("#averageProgressStat");

const achievementsSection = $("#achievementsSection");
const achievementProgress = $("#achievementProgress");

const commentForm = $("#commentForm");
const commentName = $("#commentName");
const commentSeries = $("#commentSeries");
const commentText = $("#commentText");
const commentCharCount = $("#commentCharCount");
const commentSpoiler = $("#commentSpoiler");
const commentCount = $("#commentCount");
const commentSort = $("#commentSort");
const commentsList = $("#commentsList");

const exportDataBtn = $("#exportDataBtn");
const importDataBtn = $("#importDataBtn");
const importDataInput = $("#importDataInput");
const resetDataBtn = $("#resetDataBtn");

const settingsFloating = $("#settingsFloating");
const settingsPanel = $("#settingsPanel");
const settingsClose = $("#settingsClose");

const radiusRange = $("#radiusRange");
const radiusValue = $("#radiusValue");

const effectIntensityRange = $("#effectIntensityRange");
const effectIntensityValue = $("#effectIntensityValue");

const animationsToggle = $("#animationsToggle");
const reducedMotionToggle = $("#reducedMotionToggle");
const cursorGlowToggle = $("#cursorGlowToggle");
const autoHeroToggle = $("#autoHeroToggle");
const trailerAutoplayToggle = $("#trailerAutoplayToggle");
const glassModeToggle = $("#glassModeToggle");
const contrastToggle = $("#contrastToggle");
const descriptionsToggle = $("#descriptionsToggle");
const rankingToggle = $("#rankingToggle");
const brazilToggle = $("#brazilToggle");
const statsToggle = $("#statsToggle");
const achievementsToggle = $("#achievementsToggle");
const performanceToggle = $("#performanceToggle");

const resetVisualSettingsBtn = $("#resetVisualSettingsBtn");

const backTop = $("#backTop");
const currentYear = $("#currentYear");

const seriesModal = $("#seriesModal");
const seriesModalClose = $("#seriesModalClose");

const modalBackdrop = $("#modalBackdrop");
const modalPoster = $("#modalPoster");
const modalBadge = $("#modalBadge");
const modalTitle = $("#modalTitle");
const modalRating = $("#modalRating");
const modalYear = $("#modalYear");
const modalGenre = $("#modalGenre");
const modalSeasons = $("#modalSeasons");
const modalDescription = $("#modalDescription");

const modalFavoriteBtn = $("#modalFavoriteBtn");
const modalLikeBtn = $("#modalLikeBtn");
const modalWatchlistBtn = $("#modalWatchlistBtn");
const modalWatchingBtn = $("#modalWatchingBtn");
const modalWatchedBtn = $("#modalWatchedBtn");

const modalTrailerBtn = $("#modalTrailerBtn");
const modalShareBtn = $("#modalShareBtn");
const modalCopyBtn = $("#modalCopyBtn");

const starRating = $("#starRating");
const episodeProgress = $("#episodeProgress");
const episodeProgressText = $("#episodeProgressText");
const currentEpisodeInput = $("#currentEpisodeInput");
const personalNoteInput = $("#personalNoteInput");
const saveSeriesInfoBtn = $("#saveSeriesInfoBtn");

const recommendations = $("#recommendations");
const castGrid = $("#castGrid");

const modalBlogRating = $("#modalBlogRating");
const modalUserRating = $("#modalUserRating");
const reviewLikeCount = $("#reviewLikeCount");
const reviewStatus = $("#reviewStatus");

const modalCommentForm = $("#modalCommentForm");
const modalCommentName = $("#modalCommentName");
const modalCommentText = $("#modalCommentText");
const modalCommentSpoiler = $("#modalCommentSpoiler");
const modalSeriesComments = $("#modalSeriesComments");

const trailerModal = $("#trailerModal");
const trailerClose = $("#trailerClose");
const trailerTitle = $("#trailerTitle");
const trailerFrame = $("#trailerFrame");
const trailerPlayerWrap = $("#trailerPlayerWrap");
const trailerUnavailable = $("#trailerUnavailable");
const trailerPoster = $("#trailerPoster");
const trailerSeriesName = $("#trailerSeriesName");
const trailerSeriesMeta = $("#trailerSeriesMeta");
const trailerFavoriteBtn = $("#trailerFavoriteBtn");
const trailerWatchlistBtn = $("#trailerWatchlistBtn");
const cinemaModeBtn = $("#cinemaModeBtn");

const castPhotoModal = $("#castPhotoModal");
const castPhotoClose = $("#castPhotoClose");
const castPhotoLarge = $("#castPhotoLarge");
const castPhotoName = $("#castPhotoName");
const castPhotoCharacter = $("#castPhotoCharacter");

const teamProfileModal = $("#teamProfileModal");
const teamProfileClose = $("#teamProfileClose");
const teamModalImage = $("#teamModalImage");
const teamModalRole = $("#teamModalRole");
const teamModalName = $("#teamModalName");
const teamModalDescription = $("#teamModalDescription");
const teamModalTags = $("#teamModalTags");

const quizModal = $("#quizModal");
const quizClose = $("#quizClose");
const quizProgress = $("#quizProgress");
const quizContent = $("#quizContent");

const profileModal = $("#profileModal");
const profileClose = $("#profileClose");
const profileForm = $("#profileForm");
const profileNameInput = $("#profileNameInput");


/* =========================================================
   CATÁLOGO
========================================================= */

const seriesData = [

    {
        id: "stranger-things",
        titlePT: "Stranger Things",
        titleEN: "Stranger Things",
        search: "Stranger Things",
        year: 2016,
        rating: 4.9,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        genres: ["misterio", "drama", "suspense"],
        brazil: false,
        featured: true,
        trailerId: "b9EkMc79ZSU",
        descriptionPT:
            "Em Hawkins, o desaparecimento de um garoto revela experimentos secretos, amizades poderosas e forças sobrenaturais.",
        descriptionEN:
            "In Hawkins, a boy's disappearance reveals secret experiments, powerful friendships and supernatural forces."
    },

    {
        id: "wednesday",
        titlePT: "Wandinha",
        titleEN: "Wednesday",
        search: "Wednesday",
        year: 2022,
        rating: 4.8,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        genres: ["misterio", "comedia", "suspense"],
        brazil: false,
        featured: true,
        trailerId: "Di310WS8zLk",
        descriptionPT:
            "Wandinha Addams começa a estudar na Academia Nevermore e se envolve em mistérios, assassinatos e segredos familiares.",
        descriptionEN:
            "Wednesday Addams begins studying at Nevermore Academy and becomes involved in mysteries, murders and family secrets."
    },

    {
        id: "outer-banks",
        titlePT: "Outer Banks",
        titleEN: "Outer Banks",
        search: "Outer Banks",
        year: 2020,
        rating: 4.7,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        genres: ["drama", "romance", "suspense"],
        brazil: false,
        featured: true,
        trailerId: "uk_hFfUFXh4",
        descriptionPT:
            "John B e seus amigos entram em uma perigosa caça ao tesouro que mistura amizade, romance, segredos e perseguições.",
        descriptionEN:
            "John B and his friends enter a dangerous treasure hunt involving friendship, romance, secrets and chases."
    },

    {
        id: "ginny-georgia",
        titlePT: "Ginny & Georgia",
        titleEN: "Ginny & Georgia",
        search: "Ginny and Georgia",
        year: 2021,
        rating: 4.7,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        genres: ["drama", "romance", "comedia"],
        brazil: false,
        featured: true,
        trailerId: "QsacpJwXCO8",
        descriptionPT:
            "Ginny tenta entender sua própria vida enquanto descobre que Georgia, sua mãe, esconde um passado complicado.",
        descriptionEN:
            "Ginny tries to understand her own life while discovering that her mother Georgia hides a complicated past."
    },

    {
        id: "bridgerton",
        titlePT: "Bridgerton",
        titleEN: "Bridgerton",
        search: "Bridgerton",
        year: 2020,
        rating: 4.7,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        genres: ["romance", "drama"],
        brazil: false,
        featured: true,
        trailerId: "gpv7ayf_tyE",
        descriptionPT:
            "Romances, escândalos, famílias poderosas e segredos movimentam a alta sociedade londrina.",
        descriptionEN:
            "Romance, scandals, powerful families and secrets shake London's high society."
    },

    {
        id: "elite",
        titlePT: "Elite",
        titleEN: "Elite",
        search: "Elite Netflix",
        year: 2018,
        rating: 4.5,
        seasonsPT: "8 temporadas",
        seasonsEN: "8 seasons",
        genres: ["drama", "crime", "romance", "suspense"],
        brazil: false,
        featured: false,
        trailerId: "QNwhAdrdwp0",
        descriptionPT:
            "Alunos de uma escola de elite vivem romances, rivalidades e crimes ligados a segredos cada vez mais perigosos.",
        descriptionEN:
            "Students at an elite school experience romance, rivalries and crimes connected to increasingly dangerous secrets."
    },

    {
        id: "never-have-i-ever",
        titlePT: "Eu Nunca...",
        titleEN: "Never Have I Ever",
        search: "Never Have I Ever",
        year: 2020,
        rating: 4.7,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        genres: ["comedia", "romance", "drama"],
        brazil: false,
        featured: false,
        trailerId: "HyOCCCbxwMQ",
        descriptionPT:
            "Devi tenta melhorar sua vida social enquanto enfrenta escola, amizades, família e relacionamentos complicados.",
        descriptionEN:
            "Devi tries to improve her social life while facing school, friendships, family and complicated relationships."
    },

    {
        id: "sex-education",
        titlePT: "Sex Education",
        titleEN: "Sex Education",
        search: "Sex Education",
        year: 2019,
        rating: 4.8,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        genres: ["comedia", "drama", "romance"],
        brazil: false,
        featured: false,
        trailerId: "Hd2ldTR-WpI",
        descriptionPT:
            "Otis usa o conhecimento de sua mãe terapeuta para ajudar colegas e acaba se envolvendo nos problemas deles.",
        descriptionEN:
            "Otis uses knowledge from his therapist mother to help classmates and becomes involved in their problems."
    },

    {
        id: "you",
        titlePT: "You",
        titleEN: "You",
        search: "You Netflix",
        year: 2018,
        rating: 4.7,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        genres: ["suspense", "crime", "drama"],
        brazil: false,
        featured: true,
        trailerId: "ga1m0wjzscU",
        descriptionPT:
            "Joe Goldberg transforma paixão em obsessão enquanto tenta controlar pessoas e esconder seus crimes.",
        descriptionEN:
            "Joe Goldberg turns love into obsession while trying to control people and hide his crimes."
    },

    {
        id: "lucifer",
        titlePT: "Lucifer",
        titleEN: "Lucifer",
        search: "Lucifer",
        year: 2016,
        rating: 4.8,
        seasonsPT: "6 temporadas",
        seasonsEN: "6 seasons",
        genres: ["crime", "drama", "comedia"],
        brazil: false,
        featured: true,
        trailerId: "X4bF_quwNtw",
        descriptionPT:
            "Lucifer Morningstar abandona o inferno e começa a ajudar a polícia de Los Angeles a solucionar crimes.",
        descriptionEN:
            "Lucifer Morningstar leaves Hell and begins helping the Los Angeles police solve crimes."
    },

    {
        id: "sintonia",
        titlePT: "Sintonia",
        titleEN: "Sintonia",
        search: "Sintonia",
        year: 2019,
        rating: 4.8,
        seasonsPT: "5 temporadas",
        seasonsEN: "5 seasons",
        genres: ["drama", "crime", "brasil"],
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
        titlePT: "DNA do Crime",
        titleEN: "Criminal Code",
        search: "Criminal Code",
        year: 2023,
        rating: 4.7,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        genres: ["crime", "suspense", "brasil"],
        brazil: true,
        featured: false,
        trailerId: "L7YeC_quE-o",
        descriptionPT:
            "Policiais federais usam pistas de DNA para investigar uma poderosa quadrilha após um grande assalto.",
        descriptionEN:
            "Federal police use DNA evidence to investigate a powerful gang following a major robbery."
    },

    {
        id: "bom-dia-veronica",
        titlePT: "Bom Dia, Verônica",
        titleEN: "Good Morning, Verônica",
        search: "Good Morning Veronica",
        year: 2020,
        rating: 4.7,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        genres: ["crime", "suspense", "drama", "brasil"],
        brazil: true,
        featured: false,
        trailerId: "wY0e0L5c7xk",
        descriptionPT:
            "Uma escrivã da polícia investiga casos de violência e descobre uma rede criminosa muito maior do que imaginava.",
        descriptionEN:
            "A police clerk investigates cases of violence and discovers a criminal network far larger than she imagined."
    },

    {
        id: "de-volta-aos-15",
        titlePT: "De Volta aos 15",
        titleEN: "Back to 15",
        search: "Back to 15",
        year: 2022,
        rating: 4.5,
        seasonsPT: "3 temporadas",
        seasonsEN: "3 seasons",
        genres: ["comedia", "romance", "drama", "brasil"],
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
        titlePT: "Pedaço de Mim",
        titleEN: "Desperate Lies",
        search: "Desperate Lies",
        year: 2024,
        rating: 4.5,
        seasonsPT: "1 temporada",
        seasonsEN: "1 season",
        genres: ["drama", "brasil"],
        brazil: true,
        featured: false,
        trailerId: "hQ0F6-z6Zj8",
        descriptionPT:
            "Uma descoberta inesperada transforma a vida de uma mulher, seu casamento e toda a sua família.",
        descriptionEN:
            "An unexpected discovery transforms a woman's life, marriage and entire family."
    }
];


/* =========================================================
   TEAM
========================================================= */

const teamProfiles = {

    beatriz: {
        name: "Beatriz",
        rolePT: "CRIADORA DO BLOG",
        roleEN: "BLOG CREATOR",
        image: "./img/Beatriz.jpg",
        descriptionPT:
            "Responsável pela ideia, seleção das séries, conteúdo e identidade do Blog da Bia.",
        descriptionEN:
            "Responsible for the idea, series selection, content and identity of Bia's Blog.",
        tags: [
            "Curadoria",
            "Conteúdo",
            "Séries",
            "Identidade"
        ]
    },

    bayerlee: {
        name: "Bayerlee",
        rolePT: "DESENVOLVEDOR",
        roleEN: "DEVELOPER",
        image: "./img/Bayerlee.jpg",
        descriptionPT:
            "Responsável pela estrutura em HTML, design e responsividade em CSS e interações em JavaScript.",
        descriptionEN:
            "Responsible for HTML structure, CSS design and responsiveness and JavaScript interactions.",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsividade"
        ]
    }
};


/* =========================================================
   DEFAULT STATE
========================================================= */

const defaultState = {

    language: "pt",

    theme: "dark",

    accent: "default",

    background: "gradient",

    interfaceSize: "normal",

    density: "comfortable",

    radius: 16,

    effectIntensity: 70,

    animations: true,

    reducedMotion: false,

    cursorGlow: true,

    autoHero: true,

    trailerAutoplay: true,

    glassMode: true,

    contrast: false,

    descriptions: true,

    showRanking: true,

    showBrazil: true,

    showStats: true,

    showAchievements: true,

    performanceMode: false,

    favorites: [],

    liked: [],

    watchlist: [],

    watching: [],

    watched: [],

    ratings: {},

    progress: {},

    episodes: {},

    notes: {},

    likes: {},

    history: [],

    searchHistory: [],

    comments: [],

    profile: {
        name: "Visitante",
        avatar: "B"
    }
};


/* =========================================================
   STATE MIGRATION
========================================================= */

function normalizeArray(value) {
    return Array.isArray(value)
        ? unique(value.filter(Boolean))
        : [];
}


function loadState() {

    let saved = null;

    try {

        saved =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            );

        if (!saved) {

            const oldKeys = [
                "blogDaBia_v30",
                "blogDaBia_v29",
                "blogDaBia_v28"
            ];

            for (const key of oldKeys) {

                const old =
                    localStorage.getItem(key);

                if (old) {

                    saved = JSON.parse(old);

                    break;
                }
            }
        }

    } catch (error) {

        console.warn(
            "Não foi possível carregar os dados antigos.",
            error
        );
    }


    const result = {
        ...clone(defaultState),
        ...(saved || {})
    };


    result.profile = {
        ...defaultState.profile,
        ...(saved?.profile || {})
    };


    result.favorites =
        normalizeArray(result.favorites);

    result.liked =
        normalizeArray(result.liked);

    result.watchlist =
        normalizeArray(result.watchlist);

    result.watching =
        normalizeArray(result.watching);

    result.watched =
        normalizeArray(result.watched);

    result.history =
        normalizeArray(result.history);

    result.searchHistory =
        normalizeArray(result.searchHistory);


    if (
        typeof result.ratings !== "object" ||
        !result.ratings
    ) {
        result.ratings = {};
    }


    if (
        typeof result.progress !== "object" ||
        !result.progress
    ) {
        result.progress = {};
    }


    if (
        typeof result.episodes !== "object" ||
        !result.episodes
    ) {
        result.episodes = {};
    }


    if (
        typeof result.notes !== "object" ||
        !result.notes
    ) {
        result.notes = {};
    }


    if (
        typeof result.likes !== "object" ||
        !result.likes
    ) {
        result.likes = {};
    }


    if (!Array.isArray(result.comments)) {
        result.comments = [];
    }


    return result;
}


let state = loadState();


function saveState() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state)
        );

    } catch (error) {

        console.warn(
            "Não foi possível salvar os dados.",
            error
        );
    }
}


/* =========================================================
   RUNTIME
========================================================= */

let activeSeriesId =
    seriesData[0].id;

let heroIndex = 0;

let activeFilter = "all";

let personalTab = "watchlist";

let rankingMode = "rating";

let heroTimer = null;

let toastTimer = null;

let currentTrailerSeries = null;

let currentCast = [];

let dailySeriesId = null;

let quizStep = 0;

let quizAnswers = [];

const mediaCache =
    new Map();


/* =========================================================
   SERIES HELPERS
========================================================= */

function getSeries(id) {

    return seriesData.find(
        series =>
            series.id === id
    );
}


function getTitle(series) {

    if (!series) return "";

    return state.language === "en"
        ? series.titleEN
        : series.titlePT;
}


function getDescription(series) {

    if (!series) return "";

    return state.language === "en"
        ? series.descriptionEN
        : series.descriptionPT;
}


function getSeasons(series) {

    if (!series) return "";

    return state.language === "en"
        ? series.seasonsEN
        : series.seasonsPT;
}


/* =========================================================
   GENRES
========================================================= */

const genreTranslations = {

    pt: {
        misterio: "Mistério",
        drama: "Drama",
        suspense: "Suspense",
        romance: "Romance",
        crime: "Crime",
        comedia: "Comédia",
        brasil: "Brasil"
    },

    en: {
        misterio: "Mystery",
        drama: "Drama",
        suspense: "Thriller",
        romance: "Romance",
        crime: "Crime",
        comedia: "Comedy",
        brasil: "Brazil"
    }
};


function genreName(genre) {

    return (
        genreTranslations[state.language]?.[genre]
        ||
        genre
    );
}


/* =========================================================
   PLACEHOLDER
========================================================= */

function placeholder(name, portrait = false) {

    const letter =
        String(name || "B")
            .trim()
            .charAt(0)
            .toUpperCase();


    const width =
        portrait
            ? 500
            : 600;


    const height =
        portrait
            ? 650
            : 900;


    const svg = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="${width}"
            height="${height}"
            viewBox="0 0 ${width} ${height}"
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
                        offset="0"
                        stop-color="#30283d"
                    />

                    <stop
                        offset="1"
                        stop-color="#111119"
                    />

                </linearGradient>

            </defs>

            <rect
                width="${width}"
                height="${height}"
                fill="url(#bg)"
            />

            <circle
                cx="${width / 2}"
                cy="${height / 2}"
                r="${portrait ? 82 : 95}"
                fill="rgba(255,255,255,.07)"
            />

            <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="#fff"
                font-size="${portrait ? 70 : 80}"
                font-family="Arial"
                font-weight="700"
            >
                ${letter}
            </text>

        </svg>
    `;


    return (
        "data:image/svg+xml;charset=UTF-8,"
        +
        encodeURIComponent(svg)
    );
}


function setImageFallback(
    image,
    title,
    portrait = false
) {

    if (!image) return;


    image.onerror = () => {

        image.onerror = null;

        image.src =
            placeholder(
                title,
                portrait
            );
    };
}


/* =========================================================
   MEDIA / CAPAS / ELENCO
========================================================= */

async function getMedia(series) {

    if (!series) {

        return {
            poster: placeholder("Série"),
            cast: []
        };
    }


    if (mediaCache.has(series.id)) {

        return mediaCache.get(
            series.id
        );
    }


    try {

        const controller =
            new AbortController();


        const timeout =
            setTimeout(
                () =>
                    controller.abort(),
                7000
            );


        const response =
            await fetch(
                "https://api.tvmaze.com/singlesearch/shows?q="
                +
                encodeURIComponent(series.search)
                +
                "&embed=cast",
                {
                    signal: controller.signal
                }
            );


        clearTimeout(timeout);


        if (!response.ok) {

            throw new Error(
                `TVMaze ${response.status}`
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


        const cast =
            (
                data?._embedded?.cast
                ||
                []
            )
                .slice(0, 12)
                .map(item => ({

                    name:
                        item?.person?.name
                        ||
                        "Ator",

                    character:
                        item?.character?.name
                        ||
                        "",

                    image:
                        item?.person?.image?.original
                        ||
                        item?.person?.image?.medium
                        ||
                        placeholder(
                            item?.person?.name
                            ||
                            "Ator",
                            true
                        )
                }));


        const result = {
            poster,
            cast
        };


        mediaCache.set(
            series.id,
            result
        );


        return result;

    } catch (error) {

        console.warn(
            `Imagem não carregada: ${series.id}`,
            error
        );


        const fallback = {
            poster:
                placeholder(
                    getTitle(series)
                ),
            cast: []
        };


        mediaCache.set(
            series.id,
            fallback
        );


        return fallback;
    }
}


/* =========================================================
   CARREGAR IMAGENS
========================================================= */

async function loadSeriesImages(
    list,
    attribute
) {

    const promises =
        list.map(
            async series => {

                const image =
                    document.querySelector(
                        `[${attribute}="${series.id}"]`
                    );


                if (!image) return;


                const media =
                    await getMedia(series);


                if (!image.isConnected) {
                    return;
                }


                image.src =
                    media.poster;


                setImageFallback(
                    image,
                    getTitle(series)
                );
            }
        );


    await Promise.allSettled(
        promises
    );
}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    text,
    icon = "✓"
) {

    if (
        !toast ||
        !toastText ||
        !toastIcon
    ) {

        return;
    }


    toastText.textContent =
        text;

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
            () =>
                toast.classList.remove(
                    "show"
                ),
            2200
        );
}


/* =========================================================
   BODY LOCK — CORRIGIDO
========================================================= */

function updateBodyLock() {

    const open = Boolean(

        $(".series-modal.active")

        ||

        $(".trailer-modal.active")

        ||

        $(".search-overlay.active")

        ||

        $(".simple-modal.active")

        ||

        $(".team-profile-modal.active")

        ||

        $(".cast-photo-modal.active")

        ||

        $(".mobile-menu.active")

        ||

        $(".settings-panel.active")
    );


    body.classList.toggle(
        "no-scroll",
        open
    );
}


/* =========================================================
   IDIOMA
========================================================= */

const i18n = {

    pt: {
        loading:
            "preparando o catálogo...",
        brandSubtitle:
            "séries & histórias",
        home:
            "Início",
        series:
            "Séries",
        popular:
            "Populares",
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
        search:
            "PESQUISAR",
        whatWatch:
            "O que vamos assistir?"
    },

    en: {
        loading:
            "preparing the catalog...",
        brandSubtitle:
            "series & stories",
        home:
            "Home",
        series:
            "Series",
        popular:
            "Popular",
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
        search:
            "SEARCH",
        whatWatch:
            "What are we watching?"
    }
};


function applyLanguage() {

    const dictionary =
        i18n[state.language];


    $$("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                dictionary[key]
                !== undefined
            ) {

                element.textContent =
                    dictionary[key];
            }
        });


    document.documentElement.lang =
        state.language === "en"
            ? "en"
            : "pt-BR";


    langPT?.classList.toggle(
        "active",
        state.language === "pt"
    );


    langEN?.classList.toggle(
        "active",
        state.language === "en"
    );


    if (seriesSearch) {

        seriesSearch.placeholder =
            state.language === "en"
                ? "Search series..."
                : "Buscar série...";
    }


    if (globalSearch) {

        globalSearch.placeholder =
            state.language === "en"
                ? "Type a series..."
                : "Digite uma série...";
    }


    renderAll();
}


function changeLanguage(language) {

    if (
        language !== "pt" &&
        language !== "en"
    ) {
        return;
    }


    state.language =
        language;


    saveState();

    applyLanguage();


    showToast(
        language === "pt"
            ? "Português ativado"
            : "English enabled",
        language === "pt"
            ? "🇧🇷"
            : "🇺🇸"
    );
}


/* =========================================================
   TEMA
========================================================= */

function applyTheme() {

    body.classList.toggle(
        "light-theme",
        state.theme === "light"
    );


    safeText(
        themeIcon,
        state.theme === "light"
            ? "☀"
            : "☾"
    );
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
   SETTINGS
========================================================= */

function applySettings() {

    body.removeAttribute(
        "data-accent"
    );


    if (
        state.accent !== "default"
    ) {

        body.dataset.accent =
            state.accent;
    }


    body.dataset.background =
        state.background;

    body.dataset.interfaceSize =
        state.interfaceSize;

    body.dataset.density =
        state.density;


    document.documentElement.style
        .setProperty(
            "--radius",
            `${state.radius}px`
        );


    document.documentElement.style
        .setProperty(
            "--effect",
            String(
                state.effectIntensity
                /
                100
            )
        );


    body.classList.toggle(
        "no-animations",
        !state.animations
    );


    body.classList.toggle(
        "reduced-motion",
        state.reducedMotion
    );


    body.classList.toggle(
        "no-cursor-glow",
        !state.cursorGlow
    );


    body.classList.toggle(
        "no-glass",
        !state.glassMode
    );


    body.classList.toggle(
        "high-contrast",
        state.contrast
    );


    body.classList.toggle(
        "hide-descriptions",
        !state.descriptions
    );


    body.classList.toggle(
        "performance-mode",
        state.performanceMode
    );


    if (rankingSection) {

        rankingSection.style.display =
            state.showRanking
                ? ""
                : "none";
    }


    const brazilSection =
        $("#brasil");


    if (brazilSection) {

        brazilSection.style.display =
            state.showBrazil
                ? ""
                : "none";
    }


    if (userStatsSection) {

        userStatsSection.style.display =
            state.showStats
                ? ""
                : "none";
    }


    if (achievementsSection) {

        achievementsSection.style.display =
            state.showAchievements
                ? ""
                : "none";
    }


    if (radiusRange) {

        radiusRange.value =
            state.radius;
    }


    safeText(
        radiusValue,
        `${state.radius}px`
    );


    if (effectIntensityRange) {

        effectIntensityRange.value =
            state.effectIntensity;
    }


    safeText(
        effectIntensityValue,
        `${state.effectIntensity}%`
    );


    if (animationsToggle) {
        animationsToggle.checked =
            state.animations;
    }


    if (reducedMotionToggle) {
        reducedMotionToggle.checked =
            state.reducedMotion;
    }


    if (cursorGlowToggle) {
        cursorGlowToggle.checked =
            state.cursorGlow;
    }


    if (autoHeroToggle) {
        autoHeroToggle.checked =
            state.autoHero;
    }


    if (trailerAutoplayToggle) {
        trailerAutoplayToggle.checked =
            state.trailerAutoplay;
    }


    if (glassModeToggle) {
        glassModeToggle.checked =
            state.glassMode;
    }


    if (contrastToggle) {
        contrastToggle.checked =
            state.contrast;
    }


    if (descriptionsToggle) {
        descriptionsToggle.checked =
            state.descriptions;
    }


    if (rankingToggle) {
        rankingToggle.checked =
            state.showRanking;
    }


    if (brazilToggle) {
        brazilToggle.checked =
            state.showBrazil;
    }


    if (statsToggle) {
        statsToggle.checked =
            state.showStats;
    }


    if (achievementsToggle) {
        achievementsToggle.checked =
            state.showAchievements;
    }


    if (performanceToggle) {
        performanceToggle.checked =
            state.performanceMode;
    }


    $$(".theme-color")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.themeColor
                ===
                state.accent
            );
        });


    $$("[data-background-style]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.backgroundStyle
                ===
                state.background
            );
        });


    $$("[data-interface-size]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.interfaceSize
                ===
                state.interfaceSize
            );
        });


    $$("[data-card-density]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.cardDensity
                ===
                state.density
            );
        });
}


/* =========================================================
   STATUS
========================================================= */

function isFavorite(id) {
    return state.favorites.includes(id);
}


function isLiked(id) {
    return state.liked.includes(id);
}


function isWatchlisted(id) {
    return state.watchlist.includes(id);
}


function isWatching(id) {
    return state.watching.includes(id);
}


function isWatched(id) {
    return state.watched.includes(id);
}


function toggleArrayItem(list, id) {

    return list.includes(id)
        ? list.filter(item => item !== id)
        : [...list, id];
}


/* =========================================================
   CURTIDAS — CORRIGIDO
========================================================= */

function getDefaultLikes(id) {

    const index =
        seriesData.findIndex(
            series =>
                series.id === id
        );


    return Math.max(
        0,
        32 + index * 7
    );
}


function getLikeCount(id) {

    if (
        Object.prototype.hasOwnProperty.call(
            state.likes,
            id
        )
    ) {

        return Math.max(
            0,
            Number(
                state.likes[id]
            )
            ||
            0
        );
    }


    return getDefaultLikes(id);
}


function toggleFavorite(id) {

    state.favorites =
        toggleArrayItem(
            state.favorites,
            id
        );


    saveState();

    refreshInteractiveUI();


    showToast(
        isFavorite(id)
            ? "Adicionada aos favoritos"
            : "Removida dos favoritos",
        isFavorite(id)
            ? "♥"
            : "♡"
    );
}


function toggleLike(id) {

    const alreadyLiked =
        isLiked(id);


    const oldCount =
        getLikeCount(id);


    state.liked =
        toggleArrayItem(
            state.liked,
            id
        );


    state.likes[id] =
        Math.max(
            0,
            oldCount
            +
            (
                alreadyLiked
                    ? -1
                    : 1
            )
        );


    saveState();

    refreshInteractiveUI();


    showToast(
        isLiked(id)
            ? "Você curtiu esta série"
            : "Curtida removida",
        isLiked(id)
            ? "♥"
            : "♡"
    );
}


function toggleWatchlist(id) {

    state.watchlist =
        toggleArrayItem(
            state.watchlist,
            id
        );


    saveState();

    refreshInteractiveUI();


    showToast(
        isWatchlisted(id)
            ? "Adicionada à sua lista"
            : "Removida da sua lista",
        isWatchlisted(id)
            ? "✓"
            : "+"
    );
}


/* =========================================================
   ASSISTINDO / ASSISTIDA
========================================================= */

function toggleWatching(id) {

    if (isWatching(id)) {

        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );

    } else {

        state.watching =
            unique([
                ...state.watching,
                id
            ]);


        state.watched =
            state.watched.filter(
                item =>
                    item !== id
            );


        if (
            Number(
                state.progress[id]
            )
            <=
            0
        ) {

            state.progress[id] =
                5;
        }
    }


    saveState();

    refreshInteractiveUI();


    showToast(
        isWatching(id)
            ? "Marcada como assistindo"
            : "Status removido",
        "▶"
    );
}


function toggleWatched(id) {

    if (isWatched(id)) {

        state.watched =
            state.watched.filter(
                item =>
                    item !== id
            );


        state.progress[id] =
            0;

    } else {

        state.watched =
            unique([
                ...state.watched,
                id
            ]);


        state.watching =
            state.watching.filter(
                item =>
                    item !== id
            );


        state.progress[id] =
            100;
    }


    saveState();

    refreshInteractiveUI();


    showToast(
        isWatched(id)
            ? "Marcada como assistida"
            : "Status removido",
        "✓"
    );
}


/* =========================================================
   HERO
========================================================= */

const featuredSeries =
    seriesData.filter(
        item =>
            item.featured
    );


function renderHeroDots() {

    if (!heroDots) return;


    heroDots.innerHTML =
        featuredSeries
            .map(
                (series, index) => `
                    <button
                        class="hero-dot ${
                            index === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-hero-index="${index}"
                        type="button"
                        aria-label="Destaque ${index + 1}"
                    ></button>
                `
            )
            .join("");
}


async function updateHero() {

    const series =
        featuredSeries[heroIndex]
        ||
        featuredSeries[0];


    if (!series) return;


    activeSeriesId =
        series.id;


    safeText(
        heroTitle,
        getTitle(series)
    );


    safeText(
        heroRating,
        `★ ${series.rating}`
    );


    safeText(
        heroYear,
        series.year
    );


    safeText(
        heroGenre,
        genreName(
            series.genres[0]
        )
    );


    safeText(
        heroSeasons,
        getSeasons(series)
    );


    safeText(
        heroDescription,
        getDescription(series)
    );


    safeText(
        communityRating,
        `${series.rating} / 5`
    );


    updateHeroActions();


    const media =
        await getMedia(series);


    if (
        activeSeriesId !==
        series.id
    ) {

        return;
    }


    if (heroPoster) {

        heroPoster.src =
            media.poster;


        setImageFallback(
            heroPoster,
            getTitle(series)
        );
    }


    if (heroBackdrop) {

        heroBackdrop.style
            .backgroundImage =
            `url("${media.poster}")`;
    }


    $$(".hero-dot")
        .forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === heroIndex
                );
            }
        );
}


function updateHeroActions() {

    if (!activeSeriesId) return;


    if (heroFavoriteBtn) {

        heroFavoriteBtn.textContent =
            isFavorite(activeSeriesId)
                ? "♥ Favoritada"
                : "♡ Favoritar";


        heroFavoriteBtn.classList.toggle(
            "active",
            isFavorite(activeSeriesId)
        );
    }


    if (heroWatchlistBtn) {

        heroWatchlistBtn.textContent =
            isWatchlisted(activeSeriesId)
                ? "✓ Na minha lista"
                : "＋ Minha lista";


        heroWatchlistBtn.classList.toggle(
            "active",
            isWatchlisted(activeSeriesId)
        );
    }


    if (heroLikeBtn) {

        heroLikeBtn.classList.toggle(
            "active",
            isLiked(activeSeriesId)
        );


        const span =
            $("span", heroLikeBtn);


        if (span) {

            span.textContent =
                isLiked(activeSeriesId)
                    ? "Curtido"
                    : "Curtir";
        }


        const firstTextNode =
            [...heroLikeBtn.childNodes]
                .find(
                    node =>
                        node.nodeType ===
                        Node.TEXT_NODE
                );


        if (firstTextNode) {

            firstTextNode.textContent =
                isLiked(activeSeriesId)
                    ? "♥ "
                    : "♡ ";
        }
    }


    safeText(
        heroLikeCount,
        getLikeCount(
            activeSeriesId
        )
    );
}


function startHeroRotation() {

    clearInterval(
        heroTimer
    );


    heroTimer = null;


    if (
        !state.autoHero ||
        featuredSeries.length <= 1
    ) {

        return;
    }


    heroTimer =
        setInterval(
            () => {

                if (
                    document.hidden
                    ||
                    seriesModal?.classList.contains(
                        "active"
                    )
                    ||
                    trailerModal?.classList.contains(
                        "active"
                    )
                ) {
                    return;
                }


                heroIndex =
                    (
                        heroIndex + 1
                    )
                    %
                    featuredSeries.length;


                updateHero();

            },
            8500
        );
}


/* =========================================================
   FILTROS
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
                    series =>
                        series.brazil
                );

        } else {

            list =
                list.filter(
                    series =>
                        series.genres.includes(
                            activeFilter
                        )
                );
        }
    }


    const query =
        normalizeText(
            seriesSearch?.value
            ||
            ""
        );


    if (query) {

        list =
            list.filter(series => {

                const searchable =
                    normalizeText(
                        [
                            series.titlePT,
                            series.titleEN,
                            series.descriptionPT,
                            series.descriptionEN,
                            ...series.genres
                        ]
                            .join(" ")
                    );


                return searchable.includes(
                    query
                );
            });
    }


    const minimumRating =
        Number(
            ratingFilter?.value
            ||
            0
        );


    if (minimumRating > 0) {

        list =
            list.filter(
                series =>
                    series.rating
                    >=
                    minimumRating
            );
    }


    const status =
        statusFilter?.value
        ||
        "all";


    if (status === "favorite") {

        list =
            list.filter(
                series =>
                    isFavorite(
                        series.id
                    )
            );
    }


    if (status === "liked") {

        list =
            list.filter(
                series =>
                    isLiked(
                        series.id
                    )
            );
    }


    if (status === "watchlist") {

        list =
            list.filter(
                series =>
                    isWatchlisted(
                        series.id
                    )
            );
    }


    if (status === "watching") {

        list =
            list.filter(
                series =>
                    isWatching(
                        series.id
                    )
            );
    }


    if (status === "watched") {

        list =
            list.filter(
                series =>
                    isWatched(
                        series.id
                    )
            );
    }


    const country =
        countryFilter?.value
        ||
        "all";


    if (country === "brazil") {

        list =
            list.filter(
                series =>
                    series.brazil
            );
    }


    if (
        country ===
        "international"
    ) {

        list =
            list.filter(
                series =>
                    !series.brazil
            );
    }


    const sort =
        seriesSort?.value
        ||
        "featured";


    switch (sort) {

        case "rating":

            list.sort(
                (a, b) =>
                    b.rating - a.rating
            );

            break;


        case "likes":

            list.sort(
                (a, b) =>
                    getLikeCount(b.id)
                    -
                    getLikeCount(a.id)
            );

            break;


        case "az":

            list.sort(
                (a, b) =>
                    getTitle(a)
                        .localeCompare(
                            getTitle(b)
                        )
            );

            break;


        case "za":

            list.sort(
                (a, b) =>
                    getTitle(b)
                        .localeCompare(
                            getTitle(a)
                        )
            );

            break;


        case "newest":

            list.sort(
                (a, b) =>
                    b.year - a.year
            );

            break;


        case "oldest":

            list.sort(
                (a, b) =>
                    a.year - b.year
            );

            break;


        default:

            list.sort(
                (a, b) =>
                    Number(b.featured)
                    -
                    Number(a.featured)
            );
    }


    return list;
}


/* =========================================================
   STATUS TEXT
========================================================= */

function getStatusText(id) {

    if (isWatched(id)) {

        return state.language === "en"
            ? "Watched"
            : "Assistida";
    }


    if (isWatching(id)) {

        return state.language === "en"
            ? "Watching"
            : "Assistindo";
    }


    if (isWatchlisted(id)) {

        return state.language === "en"
            ? "My list"
            : "Minha lista";
    }


    return "";
}


/* =========================================================
   CARD
========================================================= */

function createSeriesCard(series) {

    const progress =
        clamp(
            state.progress[series.id]
            ||
            0,
            0,
            100
        );


    return `
        <article
            class="series-card"
            data-card-series="${series.id}"
        >

            <div class="series-card-image">

                <img
                    data-series-image="${series.id}"
                    src="${placeholder(getTitle(series))}"
                    alt="${escapeHTML(getTitle(series))}"
                    loading="lazy"
                >


                <div class="series-card-badges">

                    <span class="series-badge">

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


                    <span class="series-badge rating">
                        ★ ${series.rating}
                    </span>

                </div>


                <div class="series-card-overlay">

                    <div class="card-overlay-actions">

                        <button
                            data-card-favorite="${series.id}"
                            class="${
                                isFavorite(series.id)
                                    ? "active"
                                    : ""
                            }"
                            type="button"
                            title="Favoritar"
                        >
                            ${
                                isFavorite(series.id)
                                    ? "♥"
                                    : "♡"
                            }
                        </button>


                        <button
                            data-card-like="${series.id}"
                            class="${
                                isLiked(series.id)
                                    ? "active"
                                    : ""
                            }"
                            type="button"
                            title="Curtir"
                        >
                            ${
                                isLiked(series.id)
                                    ? "♥"
                                    : "♡"
                            }
                        </button>


                        <button
                            data-card-watchlist="${series.id}"
                            class="${
                                isWatchlisted(series.id)
                                    ? "active"
                                    : ""
                            }"
                            type="button"
                            title="Minha lista"
                        >
                            ${
                                isWatchlisted(series.id)
                                    ? "✓"
                                    : "+"
                            }
                        </button>

                    </div>

                </div>

            </div>


            <div class="series-card-content">

                <div class="series-card-title-row">

                    <h3>
                        ${escapeHTML(getTitle(series))}
                    </h3>


                    <span class="series-card-rating">
                        ♡ ${getLikeCount(series.id)}
                    </span>

                </div>


                <div class="series-card-meta">

                    <span>
                        ${series.year}
                    </span>

                    <span>·</span>

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


                <p class="series-card-description">
                    ${
                        escapeHTML(
                            getDescription(series)
                        )
                    }
                </p>


                ${
                    progress > 0
                        ? `
                            <div class="series-card-progress">

                                <div class="series-card-progress-bar">

                                    <span
                                        style="width:${progress}%"
                                    ></span>

                                </div>

                            </div>
                        `
                        : ""
                }


                <div class="series-card-footer">

                    <span class="series-card-status">
                        ${
                            escapeHTML(
                                getStatusText(
                                    series.id
                                )
                            )
                        }
                    </span>


                    <button
                        class="series-card-details"
                        data-open-series="${series.id}"
                        type="button"
                    >
                        ${
                            state.language === "en"
                                ? "Details →"
                                : "Detalhes →"
                        }
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   CATALOG
========================================================= */

async function renderCatalog() {

    if (!seriesGrid) return;


    const list =
        getFilteredSeries();


    safeText(
        seriesResultCount,
        list.length
    );


    seriesGrid.innerHTML =
        list.map(
            createSeriesCard
        ).join("");


    emptySeries?.classList.toggle(
        "hidden",
        list.length > 0
    );


    await loadSeriesImages(
        list,
        "data-series-image"
    );
}


/* =========================================================
   MINI CARD
========================================================= */

function createMiniCard(
    series,
    imageAttribute,
    options = {}
) {

    const progress =
        options.progress
        ??
        null;


    return `
        <article class="series-card">

            <div class="series-card-image">

                <img
                    ${imageAttribute}="${series.id}"
                    src="${placeholder(getTitle(series))}"
                    alt="${escapeHTML(getTitle(series))}"
                    loading="lazy"
                >

            </div>


            <div class="series-card-content">

                <div class="series-card-title-row">

                    <h3>
                        ${escapeHTML(getTitle(series))}
                    </h3>


                    <span class="series-card-rating">
                        ★ ${series.rating}
                    </span>

                </div>


                ${
                    progress !== null
                        ? `
                            <div class="series-card-progress">

                                <div class="series-card-progress-bar">

                                    <span
                                        style="width:${progress}%"
                                    ></span>

                                </div>

                            </div>
                        `
                        : ""
                }


                <div class="series-card-footer">

                    <span class="series-card-status">
                        ${
                            progress !== null
                                ? `${progress}%`
                                : escapeHTML(
                                    genreName(
                                        series.genres[0]
                                    )
                                )
                        }
                    </span>


                    <button
                        class="series-card-details"
                        data-open-series="${series.id}"
                        type="button"
                    >
                        ${
                            state.language === "en"
                                ? "View →"
                                : "Ver →"
                        }
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   POPULAR
========================================================= */

async function renderPopular() {

    if (!popularCarousel) return;


    const list =
        [...seriesData]
            .sort(
                (a, b) =>
                    (
                        getLikeCount(b.id)
                        +
                        b.rating * 10
                    )
                    -
                    (
                        getLikeCount(a.id)
                        +
                        a.rating * 10
                    )
            )
            .slice(0, 10);


    popularCarousel.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-popular-image"
                )
        ).join("");


    await loadSeriesImages(
        list,
        "data-popular-image"
    );
}


/* =========================================================
   CONTINUE ASSISTINDO
========================================================= */

async function renderContinue() {

    if (
        !continueSection ||
        !continueGrid
    ) {
        return;
    }


    const list =
        seriesData.filter(series => {

            const progress =
                clamp(
                    state.progress[series.id]
                    ||
                    0,
                    0,
                    100
                );


            return (
                progress > 0 &&
                progress < 100
            );
        });


    continueSection.classList.toggle(
        "hidden-section",
        list.length === 0
    );


    continueGrid.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-continue-image",
                    {
                        progress:
                            clamp(
                                state.progress[
                                    series.id
                                ],
                                0,
                                100
                            )
                    }
                )
        ).join("");


    await loadSeriesImages(
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

    if (
        !historySection ||
        !historyGrid
    ) {
        return;
    }


    const list =
        state.history
            .map(getSeries)
            .filter(Boolean);


    historySection.classList.toggle(
        "hidden-section",
        list.length === 0
    );


    historyGrid.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-history-image"
                )
        ).join("");


    await loadSeriesImages(
        list,
        "data-history-image"
    );
}


/* =========================================================
   PERSONAL
========================================================= */

function getPersonalList() {

    switch (personalTab) {

        case "favorites":

            return seriesData.filter(
                series =>
                    isFavorite(series.id)
            );


        case "liked":

            return seriesData.filter(
                series =>
                    isLiked(series.id)
            );


        case "watching":

            return seriesData.filter(
                series =>
                    isWatching(series.id)
            );


        case "watched":

            return seriesData.filter(
                series =>
                    isWatched(series.id)
            );


        default:

            return seriesData.filter(
                series =>
                    isWatchlisted(series.id)
            );
    }
}


async function renderPersonal() {

    if (!personalGrid) return;


    const list =
        getPersonalList();


    safeText(
        watchlistTabCount,
        state.watchlist.length
    );


    safeText(
        favoritesTabCount,
        state.favorites.length
    );


    safeText(
        likedTabCount,
        state.liked.length
    );


    safeText(
        watchingTabCount,
        state.watching.length
    );


    safeText(
        watchedTabCount,
        state.watched.length
    );


    if (personalEmpty) {

        personalEmpty.style.display =
            list.length
                ? "none"
                : "";
    }


    personalGrid.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-personal-image",
                    {
                        progress:
                            clamp(
                                state.progress[
                                    series.id
                                ]
                                ||
                                0,
                                0,
                                100
                            )
                    }
                )
        ).join("");


    await loadSeriesImages(
        list,
        "data-personal-image"
    );
}


/* =========================================================
   BRASIL
========================================================= */

async function renderBrazil() {

    if (!brazilCarousel) return;


    const list =
        seriesData.filter(
            series =>
                series.brazil
        );


    brazilCarousel.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-brazil-image"
                )
        ).join("");


    await loadSeriesImages(
        list,
        "data-brazil-image"
    );
}


/* =========================================================
   DAILY
========================================================= */

function chooseDailySeries(
    forceDifferent = false
) {

    let series = null;


    if (forceDifferent) {

        series =
            randomItem(
                seriesData.filter(
                    item =>
                        item.id !==
                        dailySeriesId
                )
            );

    } else {

        const today =
            new Date();


        const seed =
            today.getFullYear() * 10000
            +
            (
                today.getMonth() + 1
            ) * 100
            +
            today.getDate();


        series =
            seriesData[
                seed %
                seriesData.length
            ];
    }


    dailySeriesId =
        series?.id
        ||
        seriesData[0].id;


    renderDaily();
}


async function renderDaily() {

    const series =
        getSeries(
            dailySeriesId
        );


    if (!series) return;


    safeText(
        dailyTitle,
        getTitle(series)
    );


    safeText(
        dailyDescription,
        getDescription(series)
    );


    const media =
        await getMedia(series);


    if (dailyImage) {

        dailyImage.src =
            media.poster;


        setImageFallback(
            dailyImage,
            getTitle(series)
        );
    }
}


/* =========================================================
   RANKING
========================================================= */

async function renderRanking() {

    if (!rankingList) return;


    const list =
        [...seriesData];


    if (
        rankingMode === "likes"
    ) {

        list.sort(
            (a, b) =>
                getLikeCount(b.id)
                -
                getLikeCount(a.id)
        );

    } else {

        list.sort(
            (a, b) =>
                b.rating
                -
                a.rating
        );
    }


    rankingList.innerHTML =
        list.map(
            (series, index) => `
                <button
                    class="ranking-item"
                    data-open-series="${series.id}"
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
                        data-ranking-image="${series.id}"
                        src="${placeholder(getTitle(series))}"
                        alt=""
                        loading="lazy"
                    >


                    <span class="ranking-info">

                        <strong>
                            ${escapeHTML(getTitle(series))}
                        </strong>

                        <small>
                            ${
                                escapeHTML(
                                    genreName(
                                        series.genres[0]
                                    )
                                )
                            }
                            ·
                            ${series.year}
                        </small>

                    </span>


                    <span class="ranking-score">

                        ${
                            rankingMode === "likes"
                                ? `♡ ${getLikeCount(series.id)}`
                                : `★ ${series.rating}`
                        }

                    </span>

                </button>
            `
        ).join("");


    await loadSeriesImages(
        list,
        "data-ranking-image"
    );
}


/* =========================================================
   FAVORITE GENRE
========================================================= */

function getFavoriteGenre() {

    const scores = {};


    const ids =
        unique([
            ...state.favorites,
            ...state.liked,
            ...state.watching,
            ...state.watched
        ]);


    ids.forEach(id => {

        const series =
            getSeries(id);


        if (!series) return;


        series.genres
            .filter(
                genre =>
                    genre !== "brasil"
            )
            .forEach(genre => {

                scores[genre] =
                    (
                        scores[genre]
                        ||
                        0
                    )
                    +
                    1;
            });
    });


    return (
        Object.entries(scores)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            )[0]?.[0]
        ||
        null
    );
}


/* =========================================================
   BECAUSE
========================================================= */

async function renderBecause() {

    if (
        !becauseSection ||
        !becauseGrid
    ) {
        return;
    }


    const genre =
        getFavoriteGenre();


    if (!genre) {

        becauseSection.classList.add(
            "hidden-section"
        );

        return;
    }


    const list =
        seriesData
            .filter(
                series =>
                    series.genres.includes(
                        genre
                    )
                    &&
                    !isWatched(
                        series.id
                    )
            )
            .slice(0, 6);


    if (!list.length) {

        becauseSection.classList.add(
            "hidden-section"
        );

        return;
    }


    becauseSection.classList.remove(
        "hidden-section"
    );


    safeText(
        becauseTitle,
        state.language === "en"
            ? `Because you like ${genreName(genre)}`
            : `Porque você gosta de ${genreName(genre)}`
    );


    becauseGrid.innerHTML =
        list.map(
            series =>
                createMiniCard(
                    series,
                    "data-because-image"
                )
        ).join("");


    await loadSeriesImages(
        list,
        "data-because-image"
    );
}


/* =========================================================
   XP
========================================================= */

function calculateXP() {

    return (
        state.favorites.length * 8
        +
        state.liked.length * 5
        +
        state.watchlist.length * 4
        +
        state.watching.length * 10
        +
        state.watched.length * 25
        +
        Object.keys(
            state.ratings
        ).length * 12
        +
        state.comments.length * 15
    );
}


/* =========================================================
   PROFILE
========================================================= */

function updateProfile() {

    safeText(
        profileAvatar,
        state.profile.avatar
    );


    safeText(
        profileName,
        state.profile.name
    );


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


    safeText(
        levelNumber,
        level
    );


    if (levelProgress) {

        levelProgress.style.width =
            `${progress}%`;
    }


    safeText(
        levelText,
        `${progress} / 100 XP`
    );


    let label;


    if (level < 3) {

        label =
            state.language === "en"
                ? "Beginner binge watcher"
                : "Maratonista iniciante";

    } else if (level < 6) {

        label =
            state.language === "en"
                ? "Series lover"
                : "Apaixonada por séries";

    } else {

        label =
            state.language === "en"
                ? "Series expert"
                : "Expert em séries";
    }


    safeText(
        profileLevelText,
        label
    );
}


/* =========================================================
   STATS
========================================================= */

function updateStats() {

    safeText(
        favoriteCount,
        state.favorites.length
    );


    safeText(
        watchlistCount,
        state.watchlist.length
    );


    safeText(
        watchedCount,
        state.watched.length
    );


    safeText(
        ratingsCount,
        Object.keys(
            state.ratings
        ).length
    );


    safeText(
        totalLikesCount,
        state.liked.length
    );


    safeText(
        commentsCount,
        state.comments.length
    );


    safeText(
        likedSeriesStat,
        state.liked.length
    );


    const genre =
        getFavoriteGenre();


    safeText(
        favoriteGenreStat,
        genre
            ? genreName(genre)
            : "—"
    );


    const completion =
        Math.round(
            state.watched.length
            /
            seriesData.length
            *
            100
        );


    safeText(
        completionStat,
        `${completion}%`
    );


    const ratings =
        Object.values(
            state.ratings
        )
            .map(Number)
            .filter(
                value =>
                    value > 0
            );


    const average =
        ratings.length
            ? (
                ratings.reduce(
                    (total, value) =>
                        total + value,
                    0
                )
                /
                ratings.length
            ).toFixed(1)
            : "—";


    safeText(
        averageRatingStat,
        average
    );


    safeText(
        brazilWatchedStat,
        seriesData.filter(
            series =>
                series.brazil
                &&
                isWatched(
                    series.id
                )
        ).length
    );


    const progresses =
        Object.values(
            state.progress
        )
            .map(Number)
            .filter(
                value =>
                    value > 0
            );


    const averageProgress =
        progresses.length
            ? Math.round(
                progresses.reduce(
                    (sum, value) =>
                        sum + value,
                    0
                )
                /
                progresses.length
            )
            : 0;


    safeText(
        averageProgressStat,
        `${averageProgress}%`
    );


    updateProfile();

    updateAchievements();
}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function updateAchievements() {

    const conditions = {

        favorite:
            state.favorites.length >= 1,

        watchlist:
            state.watchlist.length >= 3,

        watched:
            state.watched.length >= 3,

        critic:
            Object.keys(
                state.ratings
            ).length >= 3,

        community:
            state.comments.length >= 2,

        expert:
            calculateXP() >= 300
    };


    let unlocked = 0;


    $$("[data-achievement]")
        .forEach(card => {

            const achieved =
                Boolean(
                    conditions[
                        card.dataset.achievement
                    ]
                );


            card.classList.toggle(
                "unlocked",
                achieved
            );


            if (achieved) {
                unlocked++;
            }
        });


    safeText(
        achievementProgress,
        `${unlocked} / 6`
    );
}


/* =========================================================
   OPEN SERIES
========================================================= */

async function openSeries(id) {

    const series =
        getSeries(id);


    if (!series) return;


    activeSeriesId =
        id;


    addHistory(id);


    safeText(
        modalTitle,
        getTitle(series)
    );


    safeText(
        modalRating,
        `★ ${series.rating}`
    );


    safeText(
        modalYear,
        series.year
    );


    safeText(
        modalGenre,
        genreName(
            series.genres[0]
        )
    );


    safeText(
        modalSeasons,
        getSeasons(series)
    );


    safeText(
        modalDescription,
        getDescription(series)
    );


    safeText(
        modalBadge,
        series.brazil
            ? "NETFLIX BRASIL"
            : "NETFLIX"
    );


    if (seriesModal) {

        seriesModal.classList.add(
            "active"
        );
    }


    updateBodyLock();


    const media =
        await getMedia(series);


    if (
        activeSeriesId !== id
    ) {

        return;
    }


    if (modalPoster) {

        modalPoster.src =
            media.poster;


        setImageFallback(
            modalPoster,
            getTitle(series)
        );
    }


    if (modalBackdrop) {

        modalBackdrop.style
            .backgroundImage =
            `url("${media.poster}")`;
    }


    currentCast =
        media.cast;


    renderCast();

    renderRecommendations(series);

    updateSeriesModalActions();

    renderStars();

    renderSeriesReview();

    renderModalComments();


    const progress =
        clamp(
            state.progress[id]
            ||
            0,
            0,
            100
        );


    if (episodeProgress) {

        episodeProgress.value =
            progress;
    }


    safeText(
        episodeProgressText,
        `${progress}%`
    );


    if (currentEpisodeInput) {

        currentEpisodeInput.value =
            Math.max(
                1,
                Number(
                    state.episodes[id]
                )
                ||
                1
            );
    }


    if (personalNoteInput) {

        personalNoteInput.value =
            state.notes[id]
            ||
            "";
    }


    activateModalTab(
        "overview"
    );


    renderHistory();
}


function closeSeries() {

    seriesModal?.classList.remove(
        "active"
    );


    updateBodyLock();
}


/* =========================================================
   MODAL TABS
========================================================= */

function activateModalTab(name) {

    $$(".series-modal-tab")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.modalTab
                === name
            );
        });


    $$("[data-modal-panel]")
        .forEach(panel => {

            panel.classList.toggle(
                "active",
                panel.dataset.modalPanel
                === name
            );
        });
}


/* =========================================================
   MODAL ACTIONS — CORRIGIDO
========================================================= */

function updateSeriesModalActions() {

    if (!activeSeriesId) return;


    if (modalFavoriteBtn) {

        modalFavoriteBtn.classList.toggle(
            "active",
            isFavorite(
                activeSeriesId
            )
        );


        modalFavoriteBtn.textContent =
            isFavorite(activeSeriesId)
                ? "♥ Favoritada"
                : "♡ Favoritar";
    }


    if (modalLikeBtn) {

        modalLikeBtn.classList.toggle(
            "active",
            isLiked(
                activeSeriesId
            )
        );


        modalLikeBtn.innerHTML = `
            ${
                isLiked(activeSeriesId)
                    ? "♥"
                    : "♡"
            }

            ${
                state.language === "en"
                    ? "Like"
                    : "Curtir"
            }

            <span>
                ${getLikeCount(activeSeriesId)}
            </span>
        `;
    }


    if (modalWatchlistBtn) {

        modalWatchlistBtn.classList.toggle(
            "active",
            isWatchlisted(
                activeSeriesId
            )
        );


        modalWatchlistBtn.textContent =
            isWatchlisted(activeSeriesId)
                ? "✓ Na minha lista"
                : "＋ Minha lista";
    }


    if (modalWatchingBtn) {

        modalWatchingBtn.classList.toggle(
            "active",
            isWatching(
                activeSeriesId
            )
        );


        modalWatchingBtn.textContent =
            isWatching(activeSeriesId)
                ? "■ Assistindo"
                : "▶ Assistindo";
    }


    if (modalWatchedBtn) {

        modalWatchedBtn.classList.toggle(
            "active",
            isWatched(
                activeSeriesId
            )
        );


        modalWatchedBtn.textContent =
            isWatched(activeSeriesId)
                ? "✓ Assistida"
                : "✓ Marcar assistida";
    }
}


/* =========================================================
   CAST
========================================================= */

function renderCast() {

    if (!castGrid) return;


    if (!currentCast.length) {

        castGrid.innerHTML = `
            <p
                style="
                    color:var(--text-muted);
                    padding:20px 0;
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
        currentCast.map(
            (person, index) => `
                <article
                    class="cast-card"
                    data-cast-index="${index}"
                >

                    <img
                        data-cast-image="${index}"
                        src="${person.image}"
                        alt="${escapeHTML(person.name)}"
                        loading="lazy"
                    >


                    <div>

                        <strong>
                            ${escapeHTML(person.name)}
                        </strong>

                        <small>
                            ${escapeHTML(person.character)}
                        </small>

                    </div>

                </article>
            `
        ).join("");


    currentCast.forEach(
        (person, index) => {

            setImageFallback(
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


    if (!person) return;


    if (castPhotoLarge) {

        castPhotoLarge.src =
            person.image;


        setImageFallback(
            castPhotoLarge,
            person.name,
            true
        );
    }


    safeText(
        castPhotoName,
        person.name
    );


    safeText(
        castPhotoCharacter,
        person.character
    );


    castPhotoModal?.classList.add(
        "active"
    );


    updateBodyLock();
}


/* =========================================================
   RECOMMENDATIONS
========================================================= */

async function renderRecommendations(
    current
) {

    if (!recommendations) return;


    const list =
        seriesData
            .filter(
                series =>
                    series.id !== current.id
                    &&
                    series.genres.some(
                        genre =>
                            genre !== "brasil"
                            &&
                            current.genres.includes(
                                genre
                            )
                    )
            )
            .sort(
                (a, b) =>
                    b.rating -
                    a.rating
            )
            .slice(0, 4);


    recommendations.innerHTML =
        list.map(
            series => `
                <article
                    class="recommendation-card"
                    data-open-series="${series.id}"
                >

                    <img
                        data-recommend-image="${series.id}"
                        src="${placeholder(getTitle(series))}"
                        alt=""
                        loading="lazy"
                    >

                    <div>

                        <strong>
                            ${escapeHTML(getTitle(series))}
                        </strong>

                    </div>

                </article>
            `
        ).join("");


    await loadSeriesImages(
        list,
        "data-recommend-image"
    );
}


/* =========================================================
   RATINGS
========================================================= */

function renderStars() {

    if (!starRating) return;


    const rating =
        Number(
            state.ratings[
                activeSeriesId
            ]
        )
        ||
        0;


    $$(
        "[data-star]",
        starRating
    )
        .forEach(button => {

            const value =
                Number(
                    button.dataset.star
                );


            button.classList.toggle(
                "active",
                value <= rating
            );


            button.textContent =
                value <= rating
                    ? "★"
                    : "☆";
        });
}


function rateSeries(value) {

    value =
        clamp(
            value,
            1,
            5
        );


    state.ratings[
        activeSeriesId
    ] =
        value;


    saveState();

    renderStars();

    renderSeriesReview();

    updateStats();

    renderCatalog();


    showToast(
        `Sua nota: ${value}/5`,
        "★"
    );
}


/* =========================================================
   REVIEW
========================================================= */

function renderSeriesReview() {

    const series =
        getSeries(
            activeSeriesId
        );


    if (!series) return;


    safeText(
        modalBlogRating,
        `${series.rating} / 5`
    );


    const userRating =
        Number(
            state.ratings[
                activeSeriesId
            ]
        )
        ||
        0;


    safeText(
        modalUserRating,
        userRating
            ? `${userRating} / 5`
            : "—"
    );


    safeText(
        reviewLikeCount,
        getLikeCount(
            activeSeriesId
        )
    );


    safeText(
        reviewStatus,
        getStatusText(
            activeSeriesId
        )
        ||
        (
            state.language === "en"
                ? "Not started"
                : "Não iniciada"
        )
    );
}


/* =========================================================
   PROGRESS
========================================================= */

function saveProgress() {

    if (!episodeProgress) return;


    const value =
        clamp(
            episodeProgress.value,
            0,
            100
        );


    state.progress[
        activeSeriesId
    ] =
        value;


    safeText(
        episodeProgressText,
        `${value}%`
    );


    if (
        value > 0 &&
        value < 100
    ) {

        state.watching =
            unique([
                ...state.watching,
                activeSeriesId
            ]);


        state.watched =
            state.watched.filter(
                id =>
                    id !==
                    activeSeriesId
            );
    }


    if (value >= 100) {

        state.watching =
            state.watching.filter(
                id =>
                    id !==
                    activeSeriesId
            );


        state.watched =
            unique([
                ...state.watched,
                activeSeriesId
            ]);
    }


    if (value <= 0) {

        state.watching =
            state.watching.filter(
                id =>
                    id !==
                    activeSeriesId
            );


        state.watched =
            state.watched.filter(
                id =>
                    id !==
                    activeSeriesId
            );
    }


    saveState();

    refreshInteractiveUI();
}


function saveSeriesInfo() {

    if (currentEpisodeInput) {

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
    }


    if (personalNoteInput) {

        state.notes[
            activeSeriesId
        ] =
            personalNoteInput.value.trim();
    }


    saveState();


    showToast(
        "Informações salvas"
    );
}


/* =========================================================
   TRAILER
========================================================= */

async function openTrailer(series) {

    if (!series) return;


    currentTrailerSeries =
        series;


    trailerModal?.classList.add(
        "active"
    );


    updateBodyLock();


    const media =
        await getMedia(series);


    safeText(
        trailerTitle,
        getTitle(series)
    );


    safeText(
        trailerSeriesName,
        getTitle(series)
    );


    safeText(
        trailerSeriesMeta,
        `${series.year} · ${
            genreName(
                series.genres[0]
            )
        }`
    );


    if (trailerPoster) {

        trailerPoster.src =
            media.poster;


        setImageFallback(
            trailerPoster,
            getTitle(series)
        );
    }


    trailerUnavailable?.classList.remove(
        "active"
    );


    if (trailerPlayerWrap) {

        trailerPlayerWrap.style.display =
            "";
    }


    if (
        trailerFrame &&
        series.trailerId
    ) {

        const autoplay =
            state.trailerAutoplay
                ? 1
                : 0;


        trailerFrame.src =
            "https://www.youtube-nocookie.com/embed/"
            +
            encodeURIComponent(
                series.trailerId
            )
            +
            `?autoplay=${autoplay}&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`;

    } else {

        if (trailerFrame) {

            trailerFrame.src =
                "";
        }


        if (trailerPlayerWrap) {

            trailerPlayerWrap.style.display =
                "none";
        }


        trailerUnavailable?.classList.add(
            "active"
        );
    }


    updateTrailerActions();
}


function updateTrailerActions() {

    if (!currentTrailerSeries) return;


    if (trailerFavoriteBtn) {

        trailerFavoriteBtn.textContent =
            isFavorite(
                currentTrailerSeries.id
            )
                ? "♥ Favoritada"
                : "♡ Favoritar";
    }


    if (trailerWatchlistBtn) {

        trailerWatchlistBtn.textContent =
            isWatchlisted(
                currentTrailerSeries.id
            )
                ? "✓ Na minha lista"
                : "＋ Minha lista";
    }
}


function closeTrailer() {

    trailerModal?.classList.remove(
        "active"
    );


    if (trailerFrame) {

        trailerFrame.src =
            "";
    }


    currentTrailerSeries =
        null;


    body.classList.remove(
        "cinema-mode"
    );


    if (cinemaModeBtn) {

        cinemaModeBtn.textContent =
            "⛶ Cinema";
    }


    updateBodyLock();
}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    searchOverlay?.classList.add(
        "active"
    );


    if (globalSearch) {

        globalSearch.value =
            "";
    }


    renderSearchHistory();

    renderSearchResults();

    updateBodyLock();


    setTimeout(
        () =>
            globalSearch?.focus(),
        100
    );
}


function closeSearch() {

    searchOverlay?.classList.remove(
        "active"
    );


    updateBodyLock();
}


/* =========================================================
   SEARCH HISTORY
========================================================= */

function addSearchHistory(query) {

    const clean =
        String(query || "")
            .trim();


    if (
        clean.length < 2
    ) {
        return;
    }


    state.searchHistory =
        state.searchHistory.filter(
            item =>
                normalizeText(item)
                !==
                normalizeText(clean)
        );


    state.searchHistory.unshift(
        clean
    );


    state.searchHistory =
        state.searchHistory.slice(
            0,
            6
        );


    saveState();

    renderSearchHistory();
}


function renderSearchHistory() {

    if (
        !searchHistoryArea ||
        !searchHistory
    ) {
        return;
    }


    if (
        !state.searchHistory.length
    ) {

        searchHistoryArea.style.display =
            "none";

        return;
    }


    searchHistoryArea.style.display =
        "";


    searchHistory.innerHTML =
        state.searchHistory
            .map(
                query => `
                    <button
                        data-search-history="${escapeHTML(query)}"
                        type="button"
                    >
                        ${escapeHTML(query)}
                    </button>
                `
            )
            .join("");
}


/* =========================================================
   SEARCH RESULTS
========================================================= */

async function renderSearchResults() {

    if (!searchResults) return;


    const query =
        normalizeText(
            globalSearch?.value
            ||
            ""
        );


    let list =
        [...seriesData];


    if (query) {

        list =
            list.filter(series => {

                const searchable =
                    normalizeText(
                        [
                            series.titlePT,
                            series.titleEN,
                            series.descriptionPT,
                            series.descriptionEN,
                            ...series.genres
                        ]
                            .join(" ")
                    );


                return searchable.includes(
                    query
                );
            });
    }


    list =
        list.slice(0, 8);


    if (!list.length) {

        searchResults.innerHTML = `
            <p
                style="
                    padding:25px 5px;
                    color:var(--text-muted);
                "
            >
                Nenhuma série encontrada.
            </p>
        `;

        return;
    }


    searchResults.innerHTML =
        list.map(
            series => `
                <button
                    class="search-result-item"
                    data-search-open="${series.id}"
                    type="button"
                >

                    <img
                        data-search-image="${series.id}"
                        src="${placeholder(getTitle(series))}"
                        alt=""
                    >

                    <div>

                        <strong>
                            ${escapeHTML(getTitle(series))}
                        </strong>

                        <small>
                            ${
                                escapeHTML(
                                    genreName(
                                        series.genres[0]
                                    )
                                )
                            }
                            ·
                            ${series.year}
                        </small>

                    </div>

                    <span>
                        ★ ${series.rating}
                    </span>

                </button>
            `
        ).join("");


    await loadSeriesImages(
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


    let pool =
        seriesData.filter(
            series =>
                !isWatched(
                    series.id
                )
        );


    if (genre) {

        const matching =
            pool.filter(
                series =>
                    series.genres.includes(
                        genre
                    )
            );


        if (matching.length) {

            pool =
                matching;
        }
    }


    pool.sort(
        (a, b) =>
            b.rating - a.rating
    );


    const result =
        randomItem(
            pool.slice(0, 6)
        )
        ||
        randomItem(seriesData);


    if (result) {

        openSeries(
            result.id
        );
    }
}


/* =========================================================
   COPY / SHARE
========================================================= */

async function copyActiveTitle() {

    const series =
        getSeries(
            activeSeriesId
        );


    if (!series) return;


    const title =
        getTitle(series);


    try {

        await navigator.clipboard
            .writeText(title);


        showToast(
            "Título copiado"
        );

    } catch {

        showToast(
            title
        );
    }
}


async function shareSeries(series) {

    if (!series) return;


    const url =
        new URL(
            window.location.href
        );


    url.hash =
        `serie=${series.id}`;


    try {

        if (navigator.share) {

            await navigator.share({
                title:
                    getTitle(series),
                text:
                    `${getTitle(series)} — Blog da Bia`,
                url:
                    url.toString()
            });

        } else {

            await navigator.clipboard
                .writeText(
                    url.toString()
                );


            showToast(
                "Link copiado"
            );
        }

    } catch {
        /* compartilhamento cancelado */
    }
}


async function shareBlog() {

    try {

        if (navigator.share) {

            await navigator.share({
                title:
                    "Blog da Bia",
                url:
                    window.location.href
            });

        } else {

            await navigator.clipboard
                .writeText(
                    window.location.href
                );


            showToast(
                "Link do blog copiado"
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

    if (!commentSeries) return;


    const previous =
        commentSeries.value;


    commentSeries.innerHTML = `
        <option value="">
            ${
                state.language === "en"
                    ? "Choose a series"
                    : "Escolha uma série"
            }
        </option>
        ${
            [...seriesData]
                .sort(
                    (a, b) =>
                        getTitle(a)
                            .localeCompare(
                                getTitle(b)
                            )
                )
                .map(
                    series => `
                        <option value="${series.id}">
                            ${escapeHTML(getTitle(series))}
                        </option>
                    `
                )
                .join("")
        }
    `;


    if (getSeries(previous)) {

        commentSeries.value =
            previous;
    }
}


function formatDate(value) {

    try {

        return new Date(value)
            .toLocaleDateString(
                state.language === "en"
                    ? "en-US"
                    : "pt-BR"
            );

    } catch {

        return "";
    }
}


function createComment({
    name,
    text,
    seriesId,
    spoiler
}) {

    const comment = {

        id:
            Date.now()
            +
            Math.floor(
                Math.random() * 1000
            ),

        name:
            String(name)
                .trim(),

        text:
            String(text)
                .trim(),

        seriesId,

        spoiler:
            Boolean(spoiler),

        likes: 0,

        liked: false,

        createdAt:
            new Date()
                .toISOString()
    };


    state.comments.unshift(
        comment
    );


    saveState();

    renderComments();

    renderModalComments();

    updateStats();


    return comment;
}


function submitMainComment(event) {

    event.preventDefault();


    if (
        !commentName?.value.trim()
        ||
        !commentText?.value.trim()
        ||
        !commentSeries?.value
    ) {

        showToast(
            "Preencha todos os campos",
            "!"
        );

        return;
    }


    createComment({
        name:
            commentName.value,
        text:
            commentText.value,
        seriesId:
            commentSeries.value,
        spoiler:
            commentSpoiler?.checked
    });


    commentForm.reset();


    safeText(
        commentCharCount,
        "0"
    );


    showToast(
        "Comentário publicado"
    );
}


function submitModalComment(event) {

    event.preventDefault();


    if (
        !modalCommentName?.value.trim()
        ||
        !modalCommentText?.value.trim()
    ) {

        showToast(
            "Preencha seu nome e comentário",
            "!"
        );

        return;
    }


    createComment({
        name:
            modalCommentName.value,
        text:
            modalCommentText.value,
        seriesId:
            activeSeriesId,
        spoiler:
            modalCommentSpoiler?.checked
    });


    modalCommentForm.reset();


    showToast(
        "Comentário publicado"
    );
}


function commentHTML(comment) {

    const series =
        getSeries(
            comment.seriesId
        );


    const initials =
        String(comment.name || "?")
            .split(/\s+/)
            .slice(0, 2)
            .map(
                item =>
                    item.charAt(0)
            )
            .join("")
            .toUpperCase();


    return `
        <article
            class="comment-card"
            data-comment-id="${comment.id}"
        >

            <div class="comment-top">

                <div class="comment-user">

                    <span class="comment-avatar">
                        ${escapeHTML(initials)}
                    </span>

                    <div>

                        <strong>
                            ${escapeHTML(comment.name)}
                        </strong>

                        <small>
                            ${
                                escapeHTML(
                                    series
                                        ? getTitle(series)
                                        : ""
                                )
                            }
                            ·
                            ${formatDate(comment.createdAt)}
                        </small>

                    </div>

                </div>

            </div>


            <p
                data-comment-text="${comment.id}"
                ${
                    comment.spoiler
                        ? `
                            style="
                                filter:blur(7px);
                                cursor:pointer;
                                user-select:none;
                            "
                        `
                        : ""
                }
            >
                ${escapeHTML(comment.text)}
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
                    data-comment-like="${comment.id}"
                    type="button"
                >
                    ${
                        comment.liked
                            ? "♥"
                            : "♡"
                    }
                    ${Number(comment.likes) || 0}
                </button>

                <button
                    data-comment-delete="${comment.id}"
                    type="button"
                >
                    Excluir
                </button>

            </div>

        </article>
    `;
}


function sortedComments() {

    const list =
        [...state.comments];


    const mode =
        commentSort?.value
        ||
        "new";


    if (mode === "likes") {

        list.sort(
            (a, b) =>
                Number(b.likes)
                -
                Number(a.likes)
        );

    } else if (mode === "old") {

        list.sort(
            (a, b) =>
                new Date(a.createdAt)
                -
                new Date(b.createdAt)
        );

    } else {

        list.sort(
            (a, b) =>
                new Date(b.createdAt)
                -
                new Date(a.createdAt)
        );
    }


    return list;
}


function renderComments() {

    if (!commentsList) return;


    const list =
        sortedComments();


    safeText(
        commentCount,
        list.length
    );


    if (!list.length) {

        commentsList.innerHTML = `
            <p
                style="
                    color:var(--text-muted);
                    padding:30px 0;
                "
            >
                Ainda não há comentários.
            </p>
        `;

        return;
    }


    commentsList.innerHTML =
        list.map(
            commentHTML
        ).join("");
}


function renderModalComments() {

    if (!modalSeriesComments) return;


    const list =
        state.comments.filter(
            comment =>
                comment.seriesId
                ===
                activeSeriesId
        );


    if (!list.length) {

        modalSeriesComments.innerHTML = `
            <p
                style="
                    color:var(--text-muted);
                    padding:20px 0;
                "
            >
                Nenhum comentário sobre esta série.
            </p>
        `;

        return;
    }


    modalSeriesComments.innerHTML =
        list.map(
            commentHTML
        ).join("");
}


function toggleCommentLike(id) {

    const comment =
        state.comments.find(
            item =>
                Number(item.id)
                ===
                Number(id)
        );


    if (!comment) return;


    comment.liked =
        !comment.liked;


    comment.likes =
        Math.max(
            0,
            Number(comment.likes || 0)
            +
            (
                comment.liked
                    ? 1
                    : -1
            )
        );


    saveState();

    renderComments();

    renderModalComments();
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
            comment =>
                Number(comment.id)
                !==
                Number(id)
        );


    saveState();

    renderComments();

    renderModalComments();

    updateStats();
}


/* =========================================================
   TEAM
========================================================= */

function openTeamProfile(id) {

    const profile =
        teamProfiles[id];


    if (!profile) return;


    if (teamModalImage) {

        teamModalImage.src =
            profile.image;


        setImageFallback(
            teamModalImage,
            profile.name,
            true
        );
    }


    safeText(
        teamModalName,
        profile.name
    );


    safeText(
        teamModalRole,
        state.language === "en"
            ? profile.roleEN
            : profile.rolePT
    );


    safeText(
        teamModalDescription,
        state.language === "en"
            ? profile.descriptionEN
            : profile.descriptionPT
    );


    if (teamModalTags) {

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
    }


    teamProfileModal?.classList.add(
        "active"
    );


    updateBodyLock();
}


/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {
        pt:
            "Que tipo de história você quer assistir?",
        en:
            "What kind of story do you want to watch?",
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
                pt: "Drama",
                en: "Drama",
                genre: "drama"
            },
            {
                pt: "Suspense",
                en: "Thriller",
                genre: "suspense"
            }
        ]
    },

    {
        pt:
            "O que mais combina com você?",
        en:
            "What fits you best?",
        options: [
            {
                pt: "Algo divertido",
                en: "Something fun",
                genre: "comedia"
            },
            {
                pt: "Crimes e investigação",
                en: "Crime and investigation",
                genre: "crime"
            },
            {
                pt: "Relacionamentos",
                en: "Relationships",
                genre: "romance"
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
            "Quer produção brasileira?",
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

    quizStep = 0;

    quizAnswers = [];


    quizModal?.classList.add(
        "active"
    );


    renderQuizQuestion();

    updateBodyLock();
}


function renderQuizQuestion() {

    if (
        !quizContent ||
        !quizProgress
    ) {
        return;
    }


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


    quizContent.innerHTML = `
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
                    ? question.en
                    : question.pt
            }
        </h2>

        <div
            id="quizOptions"
            style="
                display:grid;
                grid-template-columns:
                    repeat(2,minmax(0,1fr));
                gap:8px;
                margin-top:20px;
            "
        ></div>
    `;


    const options =
        $("#quizOptions");


    question.options
        .forEach(option => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "secondary-dark-btn";


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


            options.appendChild(
                button
            );
        });
}


async function finishQuiz() {

    const genres = {};

    let brazil = false;


    quizAnswers.forEach(answer => {

        if (answer.genre) {

            genres[answer.genre] =
                (
                    genres[answer.genre]
                    ||
                    0
                )
                +
                1;
        }


        if (
            answer.brazil === true
        ) {

            brazil = true;
        }
    });


    const preferredGenre =
        Object.entries(genres)
            .sort(
                (a, b) =>
                    b[1] - a[1]
            )[0]?.[0];


    let pool =
        seriesData.filter(
            series =>
                !preferredGenre
                ||
                series.genres.includes(
                    preferredGenre
                )
        );


    if (brazil) {

        const brazilPool =
            pool.filter(
                series =>
                    series.brazil
            );


        if (brazilPool.length) {

            pool =
                brazilPool;
        }
    }


    pool.sort(
        (a, b) =>
            b.rating - a.rating
    );


    const result =
        randomItem(
            pool.slice(0, 5)
        )
        ||
        randomItem(seriesData);


    if (!result) return;


    const media =
        await getMedia(result);


    quizProgress.style.width =
        "100%";


    quizContent.innerHTML = `
        <span class="section-kicker">
            ${
                state.language === "en"
                    ? "YOUR RECOMMENDATION"
                    : "SUA RECOMENDAÇÃO"
            }
        </span>

        <h2>
            ${escapeHTML(getTitle(result))}
        </h2>

        <img
            src="${media.poster}"
            alt=""
            style="
                width:140px;
                aspect-ratio:2/3;
                object-fit:cover;
                border-radius:14px;
                margin:18px 0;
            "
        >

        <p>
            ${escapeHTML(getDescription(result))}
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

                quizModal.classList.remove(
                    "active"
                );


                updateBodyLock();


                openSeries(
                    result.id
                );
            }
        );
}


/* =========================================================
   PROFILE MODAL
========================================================= */

function openProfile() {

    if (profileNameInput) {

        profileNameInput.value =
            state.profile.name;
    }


    $$(".avatar-picker button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.avatar
                ===
                state.profile.avatar
            );
        });


    profileModal?.classList.add(
        "active"
    );


    updateBodyLock();
}


/* =========================================================
   EXPORT
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


    showToast(
        "Dados exportados"
    );
}


/* =========================================================
   IMPORT
========================================================= */

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
                    ...clone(defaultState),
                    ...imported,
                    profile: {
                        ...defaultState.profile,
                        ...(imported.profile || {})
                    }
                };


                state.favorites =
                    normalizeArray(
                        state.favorites
                    );

                state.liked =
                    normalizeArray(
                        state.liked
                    );

                state.watchlist =
                    normalizeArray(
                        state.watchlist
                    );

                state.watching =
                    normalizeArray(
                        state.watching
                    );

                state.watched =
                    normalizeArray(
                        state.watched
                    );


                saveState();

                applyTheme();

                applySettings();

                renderAll();

                startHeroRotation();


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
   RENDER ALL
========================================================= */

function renderAll() {

    populateCommentSeries();

    renderHeroDots();

    updateHero();

    renderCatalog();

    renderPopular();

    renderContinue();

    renderHistory();

    renderPersonal();

    renderBrazil();

    renderRanking();

    renderDaily();

    renderBecause();

    renderComments();

    updateStats();


    safeText(
        $("#projectSeriesCount"),
        seriesData.length
    );
}


/* =========================================================
   REFRESH
========================================================= */

function refreshInteractiveUI() {

    saveState();

    updateHeroActions();

    updateSeriesModalActions();

    updateTrailerActions();

    renderSeriesReview();

    updateStats();

    renderCatalog();

    renderPopular();

    renderContinue();

    renderPersonal();

    renderBecause();

    renderRanking();
}


/* =========================================================
   DOCUMENT CLICK
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


        const cardFavorite =
            event.target.closest(
                "[data-card-favorite]"
            );


        if (cardFavorite) {

            event.stopPropagation();

            toggleFavorite(
                cardFavorite
                    .dataset
                    .cardFavorite
            );

            return;
        }


        const cardLike =
            event.target.closest(
                "[data-card-like]"
            );


        if (cardLike) {

            event.stopPropagation();

            toggleLike(
                cardLike
                    .dataset
                    .cardLike
            );

            return;
        }


        const cardWatchlist =
            event.target.closest(
                "[data-card-watchlist]"
            );


        if (cardWatchlist) {

            event.stopPropagation();

            toggleWatchlist(
                cardWatchlist
                    .dataset
                    .cardWatchlist
            );

            return;
        }


        const seriesCard =
            event.target.closest(
                "[data-card-series]"
            );


        if (
            seriesCard &&
            !event.target.closest("button")
        ) {

            openSeries(
                seriesCard
                    .dataset
                    .cardSeries
            );

            return;
        }


        const heroDot =
            event.target.closest(
                "[data-hero-index]"
            );


        if (heroDot) {

            heroIndex =
                clamp(
                    heroDot.dataset.heroIndex,
                    0,
                    featuredSeries.length - 1
                );


            updateHero();

            startHeroRotation();

            return;
        }


        const searchOpen =
            event.target.closest(
                "[data-search-open]"
            );


        if (searchOpen) {

            const id =
                searchOpen
                    .dataset
                    .searchOpen;


            if (
                globalSearch?.value.trim()
            ) {

                addSearchHistory(
                    globalSearch.value
                );
            }


            closeSearch();

            openSeries(id);

            return;
        }


        const historyQuery =
            event.target.closest(
                "[data-search-history]"
            );


        if (historyQuery) {

            globalSearch.value =
                historyQuery
                    .dataset
                    .searchHistory;


            renderSearchResults();

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
                team.dataset
                    .openTeamProfile
            );

            return;
        }


        const modalTab =
            event.target.closest(
                "[data-modal-tab]"
            );


        if (modalTab) {

            activateModalTab(
                modalTab
                    .dataset
                    .modalTab
            );

            return;
        }


        const commentLike =
            event.target.closest(
                "[data-comment-like]"
            );


        if (commentLike) {

            toggleCommentLike(
                commentLike
                    .dataset
                    .commentLike
            );

            return;
        }


        const commentDelete =
            event.target.closest(
                "[data-comment-delete]"
            );


        if (commentDelete) {

            deleteComment(
                commentDelete
                    .dataset
                    .commentDelete
            );

            return;
        }


        const spoiler =
            event.target.closest(
                "[data-show-spoiler]"
            );


        if (spoiler) {

            const id =
                spoiler
                    .dataset
                    .showSpoiler;


            const texts =
                $$(
                    `[data-comment-text="${id}"]`
                );


            const currentlyHidden =
                texts.some(
                    text =>
                        text.style.filter
                        !==
                        "none"
                );


            texts.forEach(text => {

                text.style.filter =
                    currentlyHidden
                        ? "none"
                        : "blur(7px)";


                text.style.userSelect =
                    currentlyHidden
                        ? "text"
                        : "none";
            });


            spoiler.textContent =
                currentlyHidden
                    ? "Ocultar spoiler"
                    : "Mostrar spoiler";
        }
    }
);


/* =========================================================
   LANGUAGE EVENTS
========================================================= */

langPT?.addEventListener(
    "click",
    () =>
        changeLanguage("pt")
);


langEN?.addEventListener(
    "click",
    () =>
        changeLanguage("en")
);


$$("[data-mobile-lang]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeLanguage(
                    button.dataset.mobileLang
                );

                closeMobileMenu();
            }
        );
    });


/* =========================================================
   HEADER EVENTS
========================================================= */

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
   MOBILE MENU
========================================================= */

function openMobileMenu() {

    mobileMenu?.classList.add(
        "active"
    );


    menuOverlay?.classList.add(
        "active"
    );


    updateBodyLock();
}


function closeMobileMenu() {

    mobileMenu?.classList.remove(
        "active"
    );


    menuOverlay?.classList.remove(
        "active"
    );


    updateBodyLock();
}


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


$$(".mobile-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );
    });


mobileSettingsBtn?.addEventListener(
    "click",
    () => {

        closeMobileMenu();

        openSettings();
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
            event.target ===
            searchOverlay
        ) {

            closeSearch();
        }
    }
);


globalSearch?.addEventListener(
    "input",
    debounce(
        renderSearchResults,
        120
    )
);


globalSearch?.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Enter"
        ) {

            addSearchHistory(
                globalSearch.value
            );
        }
    }
);


clearSearch?.addEventListener(
    "click",
    () => {

        globalSearch.value = "";

        renderSearchResults();

        globalSearch.focus();
    }
);


clearSearchHistoryBtn
    ?.addEventListener(
        "click",
        () => {

            state.searchHistory = [];

            saveState();

            renderSearchHistory();
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


heroLikeBtn?.addEventListener(
    "click",
    () =>
        toggleLike(
            activeSeriesId
        )
);


randomSeriesBtn?.addEventListener(
    "click",
    () => {

        const series =
            randomItem(
                seriesData.filter(
                    item =>
                        item.id !==
                        activeSeriesId
                )
            );


        if (series) {

            openSeries(
                series.id
            );
        }
    }
);


copySeriesBtn?.addEventListener(
    "click",
    copyActiveTitle
);


shareSeriesBtn?.addEventListener(
    "click",
    () =>
        shareSeries(
            getSeries(
                activeSeriesId
            )
        )
);


/* =========================================================
   HERO TILT
========================================================= */

heroPosterCard?.addEventListener(
    "mousemove",
    event => {

        if (
            !state.animations
            ||
            state.reducedMotion
            ||
            state.performanceMode
            ||
            window.matchMedia(
                "(hover:none)"
            ).matches
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


        const intensity =
            state.effectIntensity
            /
            100;


        const rotateY =
            (
                x / rect.width
                -
                .5
            )
            *
            8
            *
            intensity;


        const rotateX =
            (
                .5
                -
                y / rect.height
            )
            *
            8
            *
            intensity;


        heroPosterCard.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
            `;
    }
);


heroPosterCard?.addEventListener(
    "mouseleave",
    () => {

        heroPosterCard.style.transform =
            "";
    }
);


/* =========================================================
   DAILY
========================================================= */

dailySeriesBtn?.addEventListener(
    "click",
    () =>
        openSeries(
            dailySeriesId
        )
);


dailyAnotherBtn?.addEventListener(
    "click",
    () =>
        chooseDailySeries(true)
);


/* =========================================================
   CAROUSEL
========================================================= */

popularPrevBtn?.addEventListener(
    "click",
    () => {

        popularCarousel?.scrollBy({
            left: -450,
            behavior: "smooth"
        });
    }
);


popularNextBtn?.addEventListener(
    "click",
    () => {

        popularCarousel?.scrollBy({
            left: 450,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   CATALOG EVENTS
========================================================= */

seriesSearch?.addEventListener(
    "input",
    debounce(
        renderCatalog,
        130
    )
);


seriesSort?.addEventListener(
    "change",
    renderCatalog
);


ratingFilter?.addEventListener(
    "change",
    renderCatalog
);


statusFilter?.addEventListener(
    "change",
    renderCatalog
);


countryFilter?.addEventListener(
    "change",
    renderCatalog
);


filters?.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-filter]"
            );


        if (!button) return;


        activeFilter =
            button.dataset.filter;


        $$(".filter-btn")
            .forEach(item => {

                item.classList.toggle(
                    "active",
                    item === button
                );
            });


        renderCatalog();
    }
);


advancedFilterBtn?.addEventListener(
    "click",
    () => {

        advancedFilters?.classList.toggle(
            "active"
        );
    }
);


function clearCatalogFilters() {

    activeFilter = "all";


    if (seriesSearch) {
        seriesSearch.value = "";
    }


    if (seriesSort) {
        seriesSort.value =
            "featured";
    }


    if (ratingFilter) {
        ratingFilter.value =
            "0";
    }


    if (statusFilter) {
        statusFilter.value =
            "all";
    }


    if (countryFilter) {
        countryFilter.value =
            "all";
    }


    $$(".filter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter
                ===
                "all"
            );
        });


    renderCatalog();
}


clearFiltersBtn?.addEventListener(
    "click",
    clearCatalogFilters
);


emptyClearBtn?.addEventListener(
    "click",
    clearCatalogFilters
);


/* =========================================================
   PERSONAL
========================================================= */

$$("[data-personal-tab]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                personalTab =
                    button.dataset
                        .personalTab;


                $$("[data-personal-tab]")
                    .forEach(item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );
                    });


                renderPersonal();
            }
        );
    });


/* =========================================================
   BRAZIL
========================================================= */

seeAllBrazilBtn?.addEventListener(
    "click",
    () => {

        activeFilter =
            "brasil";


        $$(".filter-btn")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter
                    ===
                    "brasil"
                );
            });


        renderCatalog();

        smoothScrollTo(
            "#series"
        );
    }
);


/* =========================================================
   QUIZ / RECOMMEND
========================================================= */

startQuizBtn?.addEventListener(
    "click",
    openQuiz
);


smartRecommendBtn?.addEventListener(
    "click",
    smartRecommend
);


surpriseMeBtn?.addEventListener(
    "click",
    () => {

        const series =
            randomItem(
                seriesData
            );


        if (series) {

            openSeries(
                series.id
            );
        }
    }
);


/* =========================================================
   RANKING
========================================================= */

$$("[data-ranking-mode]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                rankingMode =
                    button.dataset
                        .rankingMode;


                $$("[data-ranking-mode]")
                    .forEach(item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );
                    });


                renderRanking();
            }
        );
    });


/* =========================================================
   HISTORY
========================================================= */

clearHistoryBtn?.addEventListener(
    "click",
    () => {

        state.history = [];

        saveState();

        renderHistory();

        showToast(
            "Histórico limpo"
        );
    }
);


/* =========================================================
   SERIES MODAL EVENTS
========================================================= */

seriesModalClose?.addEventListener(
    "click",
    closeSeries
);


seriesModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            seriesModal
        ) {

            closeSeries();
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


modalLikeBtn?.addEventListener(
    "click",
    () =>
        toggleLike(
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
            getSeries(
                activeSeriesId
            )
        )
);


modalCopyBtn?.addEventListener(
    "click",
    copyActiveTitle
);


starRating?.addEventListener(
    "click",
    event => {

        const star =
            event.target.closest(
                "[data-star]"
            );


        if (star) {

            rateSeries(
                star.dataset.star
            );
        }
    }
);


episodeProgress?.addEventListener(
    "input",
    () => {

        safeText(
            episodeProgressText,
            `${episodeProgress.value}%`
        );
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


/* =========================================================
   TRAILER
========================================================= */

trailerClose?.addEventListener(
    "click",
    closeTrailer
);


trailerModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            trailerModal
        ) {

            closeTrailer();
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


        updateTrailerActions();
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


        updateTrailerActions();
    }
);


cinemaModeBtn?.addEventListener(
    "click",
    () => {

        body.classList.toggle(
            "cinema-mode"
        );


        cinemaModeBtn.textContent =
            body.classList.contains(
                "cinema-mode"
            )
                ? "↙ Normal"
                : "⛶ Cinema";
    }
);


/* =========================================================
   CAST CLOSE
========================================================= */

castPhotoClose?.addEventListener(
    "click",
    () => {

        castPhotoModal?.classList.remove(
            "active"
        );

        updateBodyLock();
    }
);


castPhotoModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            castPhotoModal
        ) {

            castPhotoModal.classList.remove(
                "active"
            );

            updateBodyLock();
        }
    }
);


/* =========================================================
   TEAM CLOSE
========================================================= */

teamProfileClose?.addEventListener(
    "click",
    () => {

        teamProfileModal
            ?.classList.remove(
                "active"
            );

        updateBodyLock();
    }
);


teamProfileModal?.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            teamProfileModal
        ) {

            teamProfileModal
                .classList.remove(
                    "active"
                );

            updateBodyLock();
        }
    }
);


/* =========================================================
   QUIZ CLOSE
========================================================= */

quizClose?.addEventListener(
    "click",
    () => {

        quizModal?.classList.remove(
            "active"
        );

        updateBodyLock();
    }
);


/* =========================================================
   PROFILE
========================================================= */

editProfileBtn?.addEventListener(
    "click",
    openProfile
);


profileClose?.addEventListener(
    "click",
    () => {

        profileModal?.classList.remove(
            "active"
        );

        updateBodyLock();
    }
);


$$(".avatar-picker button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.profile.avatar =
                    button.dataset.avatar;


                $$(".avatar-picker button")
                    .forEach(item => {

                        item.classList.toggle(
                            "active",
                            item === button
                        );
                    });
            }
        );
    });


profileForm?.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            profileNameInput
                ?.value
                .trim();


        if (!name) return;


        state.profile.name =
            name;


        saveState();

        updateProfile();


        profileModal.classList.remove(
            "active"
        );


        updateBodyLock();


        showToast(
            "Perfil atualizado"
        );
    }
);


/* =========================================================
   COMMENTS EVENTS
========================================================= */

commentForm?.addEventListener(
    "submit",
    submitMainComment
);


modalCommentForm?.addEventListener(
    "submit",
    submitModalComment
);


commentText?.addEventListener(
    "input",
    () => {

        safeText(
            commentCharCount,
            commentText.value.length
        );
    }
);


commentSort?.addEventListener(
    "change",
    renderComments
);


/* =========================================================
   SETTINGS PANEL — CORRIGIDO
========================================================= */

function openSettings() {

    settingsPanel?.classList.add(
        "active"
    );


    updateBodyLock();
}


function closeSettings() {

    settingsPanel?.classList.remove(
        "active"
    );


    updateBodyLock();
}


settingsFloating?.addEventListener(
    "click",
    openSettings
);


settingsClose?.addEventListener(
    "click",
    closeSettings
);


/* =========================================================
   COLOR SETTINGS
========================================================= */

$$(".theme-color")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.accent =
                    button.dataset
                        .themeColor;


                saveState();

                applySettings();
            }
        );
    });


$$("[data-background-style]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.background =
                    button.dataset
                        .backgroundStyle;


                saveState();

                applySettings();
            }
        );
    });


$$("[data-interface-size]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.interfaceSize =
                    button.dataset
                        .interfaceSize;


                saveState();

                applySettings();
            }
        );
    });


$$("[data-card-density]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.density =
                    button.dataset
                        .cardDensity;


                saveState();

                applySettings();
            }
        );
    });


/* =========================================================
   RANGE SETTINGS
========================================================= */

radiusRange?.addEventListener(
    "input",
    () => {

        state.radius =
            clamp(
                radiusRange.value,
                4,
                30
            );


        safeText(
            radiusValue,
            `${state.radius}px`
        );


        document.documentElement.style
            .setProperty(
                "--radius",
                `${state.radius}px`
            );
    }
);


radiusRange?.addEventListener(
    "change",
    saveState
);


effectIntensityRange?.addEventListener(
    "input",
    () => {

        state.effectIntensity =
            clamp(
                effectIntensityRange.value,
                0,
                100
            );


        safeText(
            effectIntensityValue,
            `${state.effectIntensity}%`
        );


        document.documentElement.style
            .setProperty(
                "--effect",
                String(
                    state.effectIntensity
                    /
                    100
                )
            );
    }
);


effectIntensityRange?.addEventListener(
    "change",
    saveState
);


/* =========================================================
   TOGGLE SETTINGS
========================================================= */

function bindToggle(
    element,
    key,
    callback = null
) {

    element?.addEventListener(
        "change",
        () => {

            state[key] =
                element.checked;


            saveState();

            applySettings();


            if (callback) {

                callback();
            }
        }
    );
}


bindToggle(
    animationsToggle,
    "animations"
);


bindToggle(
    reducedMotionToggle,
    "reducedMotion"
);


bindToggle(
    cursorGlowToggle,
    "cursorGlow"
);


bindToggle(
    autoHeroToggle,
    "autoHero",
    startHeroRotation
);


bindToggle(
    trailerAutoplayToggle,
    "trailerAutoplay"
);


bindToggle(
    glassModeToggle,
    "glassMode"
);


bindToggle(
    contrastToggle,
    "contrast"
);


bindToggle(
    descriptionsToggle,
    "descriptions"
);


bindToggle(
    rankingToggle,
    "showRanking"
);


bindToggle(
    brazilToggle,
    "showBrazil"
);


bindToggle(
    statsToggle,
    "showStats"
);


bindToggle(
    achievementsToggle,
    "showAchievements"
);


bindToggle(
    performanceToggle,
    "performanceMode"
);


/* =========================================================
   RESET VISUAL
========================================================= */

resetVisualSettingsBtn
    ?.addEventListener(
        "click",
        () => {

            const keys = [
                "accent",
                "background",
                "interfaceSize",
                "density",
                "radius",
                "effectIntensity",
                "animations",
                "reducedMotion",
                "cursorGlow",
                "autoHero",
                "trailerAutoplay",
                "glassMode",
                "contrast",
                "descriptions",
                "showRanking",
                "showBrazil",
                "showStats",
                "showAchievements",
                "performanceMode"
            ];


            keys.forEach(key => {

                state[key] =
                    clone(
                        defaultState[key]
                    );
            });


            saveState();

            applySettings();

            startHeroRotation();


            showToast(
                "Aparência restaurada"
            );
        }
    );


/* =========================================================
   DATA
========================================================= */

exportDataBtn?.addEventListener(
    "click",
    exportData
);


importDataBtn?.addEventListener(
    "click",
    () =>
        importDataInput?.click()
);


importDataInput?.addEventListener(
    "change",
    () => {

        const file =
            importDataInput.files?.[0];


        if (file) {

            importData(file);
        }


        importDataInput.value = "";
    }
);


resetDataBtn?.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Apagar favoritos, curtidas, listas, progresso, avaliações e comentários?"
            );


        if (!confirmed) return;


        state =
            clone(
                defaultState
            );


        saveState();

        applyTheme();

        applySettings();

        chooseDailySeries();

        renderAll();

        startHeroRotation();


        showToast(
            "Dados redefinidos"
        );
    }
);


/* =========================================================
   CURSOR
========================================================= */

document.addEventListener(
    "pointermove",
    event => {

        if (
            !cursorGlow ||
            !state.cursorGlow ||
            state.performanceMode ||
            state.reducedMotion ||
            window.matchMedia(
                "(hover:none)"
            ).matches
        ) {
            return;
        }


        cursorGlow.style.left =
            `${event.clientX}px`;


        cursorGlow.style.top =
            `${event.clientY}px`;
    }
);


/* =========================================================
   TEAM CARD LIGHT
========================================================= */

$$("[data-person-card]")
    .forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                if (
                    state.performanceMode ||
                    state.reducedMotion ||
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


                const light =
                    $(".person-card-light", card);


                if (!light) return;


                light.style.left =
                    `${x - 125}px`;


                light.style.top =
                    `${y - 125}px`;
            }
        );
    });


/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const y =
        window.scrollY;


    header?.classList.toggle(
        "scrolled",
        y > 20
    );


    backTop?.classList.toggle(
        "show",
        y > 500
    );


    const max =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    if (scrollProgress) {

        scrollProgress.style.width =
            `${
                max > 0
                    ? y / max * 100
                    : 0
            }%`;
    }


    updateActiveNavigation();
}


window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


/* =========================================================
   NAVIGATION ACTIVE
========================================================= */

function updateActiveNavigation() {

    const sections = [
        "#inicio",
        "#series",
        "#populares",
        "#brasil",
        "#minha-lista",
        "#ranking",
        "#comunidade",
        "#sobre"
    ];


    let active =
        "#inicio";


    sections.forEach(selector => {

        const section =
            $(selector);


        if (
            !section ||
            section.style.display
            ===
            "none"
        ) {
            return;
        }


        const rect =
            section
                .getBoundingClientRect();


        if (
            rect.top <= 180
        ) {

            active =
                selector;
        }
    });


    $$(".desktop-nav a")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href")
                ===
                active
            );
        });
}


/* =========================================================
   BACK TOP
========================================================= */

backTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior:
                state.animations &&
                !state.reducedMotion
                    ? "smooth"
                    : "auto"
        });
    }
);


/* =========================================================
   REVEAL
========================================================= */

function setupReveal() {

    const elements =
        $$(".reveal");


    if (!elements.length) return;


    if (
        !(
            "IntersectionObserver"
            in
            window
        )
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

                entries.forEach(entry => {

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
                });

            },
            {
                threshold: .12
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
   ESC CLOSE ALL
========================================================= */

function closeEverything() {

    closeSearch();

    closeSeries();

    closeTrailer();

    closeMobileMenu();

    closeSettings();


    castPhotoModal
        ?.classList.remove(
            "active"
        );


    teamProfileModal
        ?.classList.remove(
            "active"
        );


    quizModal
        ?.classList.remove(
            "active"
        );


    profileModal
        ?.classList.remove(
            "active"
        );


    body.classList.remove(
        "cinema-mode"
    );


    updateBodyLock();
}


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeEverything();

            return;
        }


        if (
            (
                event.ctrlKey ||
                event.metaKey
            )
            &&
            event.key.toLowerCase()
            ===
            "k"
        ) {

            event.preventDefault();

            openSearch();

            return;
        }


        if (
            event.key === "/"
            &&
            ![
                "INPUT",
                "TEXTAREA",
                "SELECT"
            ]
                .includes(
                    document.activeElement
                        ?.tagName
                )
        ) {

            event.preventDefault();

            openSearch();
        }
    }
);


/* =========================================================
   HASH
========================================================= */

function checkHashSeries() {

    if (
        !window.location.hash
            .startsWith(
                "#serie="
            )
    ) {
        return;
    }


    const id =
        decodeURIComponent(
            window.location.hash
                .replace(
                    "#serie=",
                    ""
                )
        );


    if (getSeries(id)) {

        setTimeout(
            () =>
                openSeries(id),
            500
        );
    }
}


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    debounce(
        () => {

            if (
                window.innerWidth >
                1080
            ) {

                closeMobileMenu();
            }
        },
        150
    )
);


/* =========================================================
   VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (document.hidden) {

            clearInterval(
                heroTimer
            );

            heroTimer = null;

        } else {

            startHeroRotation();
        }
    }
);


/* =========================================================
   ERROR PROTECTION
========================================================= */

window.addEventListener(
    "error",
    event => {

        console.error(
            "Erro no Blog da Bia:",
            event.error
            ||
            event.message
        );
    }
);


window.addEventListener(
    "unhandledrejection",
    event => {

        console.error(
            "Erro assíncrono:",
            event.reason
        );
    }
);


/* =========================================================
   INIT
========================================================= */

async function init() {

    safeText(
        currentYear,
        new Date()
            .getFullYear()
    );


    applyTheme();

    applySettings();

    chooseDailySeries();

    applyLanguage();

    setupReveal();

    handleScroll();

    startHeroRotation();

    checkHashSeries();


    setTimeout(
        () => {

            loader?.classList.add(
                "hide"
            );

        },
        700
    );


    console.log(
        `Blog da Bia carregado — ${seriesData.length} séries`
    );
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init,
        {
            once: true
        }
    );

} else {

    init();
}