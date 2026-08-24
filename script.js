"use strict";


/* =========================================================
   BLOG DA BIA — SCRIPT.JS
   Compatível com o index.html e style.css atuais
========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

const body = document.body;

const STORAGE_KEY = "blogDaBiaV10";


function escapeHTML(value = "") {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function randomItem(array) {
    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];
}


function clamp(value, min, max) {
    return Math.min(
        Math.max(value, min),
        max
    );
}


/* =========================================================
   ELEMENTOS
========================================================= */

const loader = $("#loader");

const heartCursor = $("#heartCursor");

const clickEffects = $("#clickEffects");

const particles = $("#particles");

const scrollProgress = $("#scrollProgress");

const toast = $("#toast");
const toastIcon = $("#toastIcon");
const toastText = $("#toastText");

const header = $("#header");

const langPT = $("#langPT");
const langEN = $("#langEN");

const searchOpenBtn = $("#searchOpenBtn");
const searchOverlay = $("#searchOverlay");
const searchClose = $("#searchClose");
const globalSearch = $("#globalSearch");
const clearSearch = $("#clearSearch");
const searchResults = $("#searchResults");

const themeBtn = $("#themeBtn");
const themeIcon = $("#themeIcon");
const shareBlogBtn = $("#shareBlogBtn");

const mobileMenuBtn = $("#mobileMenuBtn");
const mobileMenu = $("#mobileMenu");
const mobileMenuClose = $("#mobileMenuClose");
const menuOverlay = $("#menuOverlay");

const heroBackdrop = $("#heroBackdrop");
const heroTitle = $("#heroTitle");
const heroRating = $("#heroRating");
const heroYear = $("#heroYear");
const heroGenre = $("#heroGenre");
const heroSeasons = $("#heroSeasons");
const heroDescription = $("#heroDescription");
const heroPoster = $("#heroPoster");
const heroPosterCard = $("#heroPosterCard");
const communityRating = $("#communityRating");
const heroDots = $("#heroDots");

const watchTrailerBtn = $("#watchTrailerBtn");
const heroFavoriteBtn = $("#heroFavoriteBtn");
const heroWatchlistBtn = $("#heroWatchlistBtn");
const randomSeriesBtn = $("#randomSeriesBtn");
const copySeriesBtn = $("#copySeriesBtn");

const favoriteCount = $("#favoriteCount");
const watchlistCount = $("#watchlistCount");
const watchedCount = $("#watchedCount");
const ratingsCount = $("#ratingsCount");
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

const dailyTitle = $("#dailyTitle");
const dailyDescription = $("#dailyDescription");
const dailyImage = $("#dailyImage");
const dailySeriesBtn = $("#dailySeriesBtn");

const seriesSearch = $("#seriesSearch");
const seriesSort = $("#seriesSort");
const filters = $("#filters");
const advancedFilterBtn = $("#advancedFilterBtn");
const advancedFilters = $("#advancedFilters");
const ratingFilter = $("#ratingFilter");
const statusFilter = $("#statusFilter");
const clearFiltersBtn = $("#clearFiltersBtn");
const seriesGrid = $("#seriesGrid");
const seriesResultCount = $("#seriesResultCount");
const emptySeries = $("#emptySeries");

const seeAllBrazilBtn = $("#seeAllBrazilBtn");
const brazilCarousel = $("#brazilCarousel");

const startQuizBtn = $("#startQuizBtn");

const rankingList = $("#rankingList");

const commentForm = $("#commentForm");
const commentName = $("#commentName");
const commentSeries = $("#commentSeries");
const commentText = $("#commentText");
const commentCharCount = $("#commentCharCount");
const commentSpoiler = $("#commentSpoiler");
const commentCount = $("#commentCount");
const commentSort = $("#commentSort");
const commentsList = $("#commentsList");

const resetDataBtn = $("#resetDataBtn");

const currentYear = $("#currentYear");

const backTop = $("#backTop");

const settingsFloating = $("#settingsFloating");
const settingsPanel = $("#settingsPanel");
const settingsClose = $("#settingsClose");
const effectsToggle = $("#effectsToggle");
const animationsToggle = $("#animationsToggle");

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
const modalWatchlistBtn = $("#modalWatchlistBtn");
const modalWatchedBtn = $("#modalWatchedBtn");
const starRating = $("#starRating");
const episodeProgress = $("#episodeProgress");
const episodeProgressText = $("#episodeProgressText");
const castGrid = $("#castGrid");
const recommendations = $("#recommendations");

const trailerModal = $("#trailerModal");
const trailerClose = $("#trailerClose");
const trailerTitle = $("#trailerTitle");
const openYoutubeTrailer = $("#openYoutubeTrailer");

const quizModal = $("#quizModal");
const quizClose = $("#quizClose");
const quizProgress = $("#quizProgress");
const quizContent = $("#quizContent");
const quizBeginBtn = $("#quizBeginBtn");

const profileModal = $("#profileModal");
const profileClose = $("#profileClose");
const profileForm = $("#profileForm");
const profileNameInput = $("#profileNameInput");


/* =========================================================
   SÉRIES

   NÃO TEM ANIME.

   As capas e as fotos do elenco vêm automaticamente
   da internet usando a API pública do TVMaze.

   Você NÃO precisa baixar essas imagens.
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

        descriptionPT:
            "Em Hawkins, o desaparecimento de um garoto revela experiências secretas, forças sobrenaturais e uma amizade capaz de enfrentar o impossível.",

        descriptionEN:
            "In Hawkins, a boy's disappearance reveals secret experiments, supernatural forces and a friendship strong enough to face the impossible."
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
            "comedia",
            "suspense"
        ],
        countryPT: "Estados Unidos",
        countryEN: "United States",
        brazil: false,
        featured: true,

        descriptionPT:
            "Wednesday Addams chega à Academia Nevermore e começa a investigar assassinatos, segredos familiares e mistérios sobrenaturais.",

        descriptionEN:
            "Wednesday Addams arrives at Nevermore Academy and begins investigating murders, family secrets and supernatural mysteries."
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

        descriptionPT:
            "John B e seus amigos entram em uma perigosa caça ao tesouro cheia de segredos, romances, perseguições e rivalidades.",

        descriptionEN:
            "John B and his friends enter a dangerous treasure hunt filled with secrets, romance, chases and rivalries."
    },


    {
        id: "bridgerton",
        title: "Bridgerton",
        query: "Bridgerton",
        year: 2020,
        seasonsPT: "4+ temporadas",
        seasonsEN: "4+ seasons",
        rating: 4.7,
        genres: [
            "romance",
            "drama"
        ],
        countryPT: "Reino Unido",
        countryEN: "United Kingdom",
        brazil: false,
        featured: true,

        descriptionPT:
            "Romances, escândalos, segredos e disputas familiares movimentam a alta sociedade londrina.",

        descriptionEN:
            "Romance, scandals, secrets and family rivalries shake London's high society."
    },


    {
        id: "ginny-georgia",
        title: "Ginny & Georgia",
        query: "Ginny & Georgia",
        year: 2021,
        seasonsPT: "3+ temporadas",
        seasonsEN: "3+ seasons",
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

        descriptionPT:
            "Ginny tenta viver uma adolescência normal enquanto percebe que sua mãe Georgia esconde um passado complicado.",

        descriptionEN:
            "Ginny tries to live a normal teenage life while realizing that her mother Georgia hides a complicated past."
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

        descriptionPT:
            "Joe Goldberg transforma paixão em obsessão enquanto tenta esconder seus crimes e controlar as pessoas ao seu redor.",

        descriptionEN:
            "Joe Goldberg turns love into obsession while trying to hide his crimes and control the people around him."
    },


    {
        id: "heartstopper",
        title: "Heartstopper",
        query: "Heartstopper",
        year: 2022,
        seasonsPT: "3+ temporadas",
        seasonsEN: "3+ seasons",
        rating: 4.8,
        genres: [
            "romance",
            "drama"
        ],
        countryPT: "Reino Unido",
        countryEN: "United Kingdom",
        brazil: false,
        featured: false,

        descriptionPT:
            "Charlie e Nick descobrem que uma amizade inesperada pode se transformar em uma história muito maior.",

        descriptionEN:
            "Charlie and Nick discover that an unexpected friendship can become something much bigger."
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

        descriptionPT:
            "Segredos, rivalidades, relacionamentos e crimes colocam os alunos de Las Encinas em situações cada vez mais perigosas.",

        descriptionEN:
            "Secrets, rivalries, relationships and crimes put the students of Las Encinas in increasingly dangerous situations."
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

        descriptionPT:
            "Devi tenta melhorar sua vida social enquanto enfrenta escola, família, amizades e romances complicados.",

        descriptionEN:
            "Devi tries to improve her social life while dealing with school, family, friendships and complicated romances."
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

        descriptionPT:
            "Otis usa o conhecimento da mãe terapeuta para aconselhar colegas e acaba se envolvendo nos problemas deles.",

        descriptionEN:
            "Otis uses knowledge from his therapist mother to advise classmates and becomes involved in their problems."
    },


    {
        id: "one-day",
        title: "One Day",
        query: "One Day",
        year: 2024,
        seasonsPT: "Minissérie",
        seasonsEN: "Limited series",
        rating: 4.8,
        genres: [
            "romance",
            "drama"
        ],
        countryPT: "Reino Unido",
        countryEN: "United Kingdom",
        brazil: false,
        featured: false,

        descriptionPT:
            "Emma e Dexter se reencontram na mesma data ao longo dos anos enquanto suas vidas seguem caminhos inesperados.",

        descriptionEN:
            "Emma and Dexter meet again on the same date over the years as their lives take unexpected paths."
    },


    {
        id: "the-night-agent",
        title: "O Agente Noturno",
        titleEN: "The Night Agent",
        query: "The Night Agent",
        year: 2023,
        seasonsPT: "2+ temporadas",
        seasonsEN: "2+ seasons",
        rating: 4.6,
        genres: [
            "suspense",
            "crime",
            "drama"
        ],
        countryPT: "Estados Unidos",
        countryEN: "United States",
        brazil: false,
        featured: false,

        descriptionPT:
            "Um agente do FBI atende uma ligação inesperada e entra no centro de uma enorme conspiração.",

        descriptionEN:
            "An FBI agent answers an unexpected call and finds himself at the center of a massive conspiracy."
    },


    {
        id: "the-gentlemen",
        title: "Magnatas do Crime",
        titleEN: "The Gentlemen",
        query: "The Gentlemen",
        year: 2024,
        seasonsPT: "1+ temporada",
        seasonsEN: "1+ season",
        rating: 4.6,
        genres: [
            "crime",
            "comedia",
            "drama"
        ],
        countryPT: "Reino Unido",
        countryEN: "United Kingdom",
        brazil: false,
        featured: false,

        descriptionPT:
            "Um aristocrata herda uma propriedade e descobre que seu novo patrimônio está ligado a um império criminoso.",

        descriptionEN:
            "An aristocrat inherits an estate and discovers that his new property is connected to a criminal empire."
    },


    {
        id: "blood-water",
        title: "Blood & Water",
        query: "Blood & Water",
        year: 2020,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        rating: 4.4,
        genres: [
            "drama",
            "misterio",
            "suspense"
        ],
        countryPT: "África do Sul",
        countryEN: "South Africa",
        brazil: false,
        featured: false,

        descriptionPT:
            "Uma adolescente começa a investigar se uma estudante popular pode ser sua irmã desaparecida.",

        descriptionEN:
            "A teenager begins investigating whether a popular student could be her missing sister."
    },


    /* =====================================================
       BRASIL
    ===================================================== */


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

        descriptionPT:
            "Doni, Nando e Rita crescem juntos na periferia de São Paulo enquanto música, crime e fé mudam seus caminhos.",

        descriptionEN:
            "Doni, Nando and Rita grow up together on the outskirts of São Paulo as music, crime and faith change their paths."
    },


    {
        id: "bom-dia-veronica",
        title: "Bom Dia, Verônica",
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

        descriptionPT:
            "Uma escrivã da polícia investiga casos de violência e acaba descobrindo uma rede muito mais perigosa.",

        descriptionEN:
            "A police clerk investigates cases of violence and discovers a network far more dangerous than expected."
    },


    {
        id: "dna-do-crime",
        title: "DNA do Crime",
        titleEN: "Criminal Code",
        query: "Criminal Code",
        year: 2023,
        seasonsPT: "2+ temporadas",
        seasonsEN: "2+ seasons",
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

        descriptionPT:
            "Policiais federais usam pistas de DNA para investigar uma organização criminosa depois de um grande assalto.",

        descriptionEN:
            "Federal police use DNA evidence to investigate a criminal organization after a major robbery."
    },


    {
        id: "cidade-invisivel",
        title: "Cidade Invisível",
        titleEN: "Invisible City",
        query: "Invisible City",
        year: 2021,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        rating: 4.4,
        genres: [
            "misterio",
            "drama",
            "brasil"
        ],
        countryPT: "Brasil",
        countryEN: "Brazil",
        brazil: true,
        featured: false,

        descriptionPT:
            "Um investigador descobre criaturas do folclore brasileiro vivendo escondidas entre os humanos.",

        descriptionEN:
            "An investigator discovers creatures from Brazilian folklore living secretly among humans."
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

        descriptionPT:
            "Anita volta misteriosamente aos 15 anos e começa a alterar acontecimentos do próprio passado.",

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

        descriptionPT:
            "Uma descoberta inesperada muda completamente a vida de uma mulher e de sua família.",

        descriptionEN:
            "An unexpected discovery completely changes a woman's life and her family."
    },


    {
        id: "3-percent",
        title: "3%",
        query: "3%",
        year: 2016,
        seasonsPT: "4 temporadas",
        seasonsEN: "4 seasons",
        rating: 4.5,
        genres: [
            "drama",
            "suspense",
            "brasil"
        ],
        countryPT: "Brasil",
        countryEN: "Brazil",
        brazil: true,
        featured: false,

        descriptionPT:
            "Em uma sociedade extremamente desigual, jovens disputam uma oportunidade de viver no lado privilegiado do mundo.",

        descriptionEN:
            "In an extremely unequal society, young people compete for the chance to live in the privileged part of the world."
    },


    {
        id: "irmandade",
        title: "Irmandade",
        titleEN: "Brotherhood",
        query: "Brotherhood",
        year: 2019,
        seasonsPT: "2 temporadas",
        seasonsEN: "2 seasons",
        rating: 4.5,
        genres: [
            "crime",
            "drama",
            "brasil"
        ],
        countryPT: "Brasil",
        countryEN: "Brazil",
        brazil: true,
        featured: false,

        descriptionPT:
            "Uma advogada é pressionada a colaborar com a polícia contra o próprio irmão, líder de uma organização criminosa.",

        descriptionEN:
            "A lawyer is pressured to cooperate with the police against her own brother, the leader of a criminal organization."
    }

];


/* =========================================================
   TRADUÇÕES
========================================================= */

const translations = {

    pt: {

        loading:
            "preparando sua próxima maratona...",

        brandSubtitle:
            "séries & histórias",

        home:
            "Início",

        series:
            "Séries",

        brazil:
            "Brasil",

        ranking:
            "Ranking",

        community:
            "Comunidade",

        about:
            "Sobre",

        search:
            "PESQUISAR",

        whatWatch:
            "O que vamos assistir?",

        searchPlaceholder:
            "Digite uma série...",

        featured:
            "DESTAQUE DA BIA",

        watchTrailer:
            "Assistir trailer",

        favorite:
            "Favoritar",

        watchlist:
            "Quero assistir",

        watched:
            "Assistidas",

        surpriseMe:
            "Surpreenda-me",

        copyTitle:
            "Copiar título",

        communityRating:
            "avaliação",

        favorites:
            "Favoritas",

        ratings:
            "Avaliações",

        comments:
            "Comentários",

        yourProfile:
            "SEU PERFIL",

        marathonLevel:
            "Nível de maratonista",

        yourMarathon:
            "SUA MARATONA",

        continueWatching:
            "Continue assistindo",

        biaRecommends:
            "BIA RECOMENDA",

        seriesOfDay:
            "Série do dia",

        discover:
            "Descobrir",

        seriesForMarathon:
            "Séries para maratonar",

        catalogDescription:
            "Escolha sua próxima obsessão.",

        results:
            "resultados",

        searchSeries:
            "Buscar série...",

        all:
            "Todas",

        romance:
            "Romance",

        drama:
            "Drama",

        mystery:
            "Mistério",

        thriller:
            "Suspense",

        crime:
            "Crime",

        comedy:
            "Comédia",

        advancedFilters:
            "Filtros avançados",

        minimumRating:
            "Nota mínima",

        status:
            "Status",

        clearFilters:
            "Limpar filtros",

        nothingFound:
            "Nenhuma série encontrada",

        tryOtherFilters:
            "Tente mudar os filtros.",

        brazilianProductions:
            "Produções brasileiras",

        brazilDescription:
            "Séries brasileiras que merecem entrar na sua lista.",

        seeAll:
            "Ver todas",

        cantChoose:
            "NÃO CONSEGUE ESCOLHER?",

        findYourSeries:
            "Descubra sua próxima série",

        quizDescription:
            "Responda algumas perguntas e receba uma recomendação.",

        startQuiz:
            "Fazer quiz",

        topSeries:
            "TOP SÉRIES",

        biaRanking:
            "Ranking da Bia",

        rankingDescription:
            "As mais bem avaliadas do blog.",

        yourJourney:
            "SUA JORNADA",

        achievements:
            "Conquistas",

        firstLove:
            "Primeiro amor",

        collector:
            "Colecionadora",

        marathoner:
            "Maratonista",

        critic:
            "Crítica de sofá",

        talkAboutSeries:
            "Vamos falar de séries?",

        communityDescription:
            "Compartilhe sua opinião.",

        leaveComment:
            "Deixe seu comentário ♡",

        yourName:
            "Seu nome",

        whichSeries:
            "Sobre qual série?",

        yourComment:
            "Seu comentário",

        containsSpoiler:
            "Contém spoiler",

        publish:
            "Publicar",

        behindBlog:
            "POR TRÁS DO BLOG",

        madeWithLove:
            "Feito com carinho e muitos episódios.",

        teamDescription:
            "Conheça quem faz parte do Blog da Bia.",

        creator:
            "CRIADORA",

        developer:
            "DESENVOLVEDOR",

        beatrizDescription:
            "Criadora do Blog da Bia e responsável pelas ideias, séries e identidade do projeto.",

        bayerleeDescription:
            "Responsável pelo desenvolvimento, design, animações e interações do site.",

        features:
            "funções",

        languages:
            "idiomas",

        creativity:
            "criatividade",

        yourData:
            "SEUS DADOS",

        savedInBrowser:
            "Tudo fica salvo no seu navegador",

        dataDescription:
            "Favoritos, comentários e progresso ficam salvos neste dispositivo.",

        resetData:
            "Redefinir dados",

        footerText:
            "Um cantinho para quem ama séries.",

        createdBy:
            "Criado por",

        developedBy:
            "Desenvolvido por",

        customize:
            "PERSONALIZE",

        yourBlog:
            "Seu Blog da Bia",

        gradient:
            "Gradiente",

        visualEffects:
            "Efeitos visuais",

        visualEffectsDescription:
            "Corações e partículas",

        animations:
            "Animações",

        animationsDescription:
            "Movimentos da interface",

        seriesDetails:
            "DETALHES",

        yourRating:
            "Sua avaliação",

        yourProgress:
            "Seu progresso",

        cast:
            "ELENCO",

        mainCast:
            "Elenco principal",

        recommendations:
            "RECOMENDAÇÕES",

        youMayLike:
            "Você também pode gostar",

        trailerDescription:
            "Abra o trailer oficial em uma nova guia.",

        searchOfficialTrailer:
            "Procurar trailer oficial",

        readyQuiz:
            "Pronta para descobrir?",

        quizIntro:
            "Responda algumas perguntas.",

        letsGo:
            "Vamos lá",

        howCallYou:
            "Como podemos te chamar?",

        name:
            "Nome",

        chooseAvatar:
            "Escolha seu avatar",

        saveProfile:
            "Salvar perfil"
    },


    en: {

        loading:
            "preparing your next binge...",

        brandSubtitle:
            "series & stories",

        home:
            "Home",

        series:
            "Series",

        brazil:
            "Brazil",

        ranking:
            "Ranking",

        community:
            "Community",

        about:
            "About",

        search:
            "SEARCH",

        whatWatch:
            "What are we watching?",

        searchPlaceholder:
            "Type a series...",

        featured:
            "BIA'S FEATURED PICK",

        watchTrailer:
            "Watch trailer",

        favorite:
            "Favorite",

        watchlist:
            "Watchlist",

        watched:
            "Watched",

        surpriseMe:
            "Surprise me",

        copyTitle:
            "Copy title",

        communityRating:
            "rating",

        favorites:
            "Favorites",

        ratings:
            "Ratings",

        comments:
            "Comments",

        yourProfile:
            "YOUR PROFILE",

        marathonLevel:
            "Binge level",

        yourMarathon:
            "YOUR BINGE",

        continueWatching:
            "Continue watching",

        biaRecommends:
            "BIA RECOMMENDS",

        seriesOfDay:
            "Series of the day",

        discover:
            "Discover",

        seriesForMarathon:
            "Series to binge",

        catalogDescription:
            "Choose your next obsession.",

        results:
            "results",

        searchSeries:
            "Search series...",

        all:
            "All",

        romance:
            "Romance",

        drama:
            "Drama",

        mystery:
            "Mystery",

        thriller:
            "Thriller",

        crime:
            "Crime",

        comedy:
            "Comedy",

        advancedFilters:
            "Advanced filters",

        minimumRating:
            "Minimum rating",

        status:
            "Status",

        clearFilters:
            "Clear filters",

        nothingFound:
            "No series found",

        tryOtherFilters:
            "Try changing the filters.",

        brazilianProductions:
            "Brazilian productions",

        brazilDescription:
            "Brazilian series that deserve a place on your list.",

        seeAll:
            "See all",

        cantChoose:
            "CAN'T CHOOSE?",

        findYourSeries:
            "Find your next series",

        quizDescription:
            "Answer a few questions and get a recommendation.",

        startQuiz:
            "Take the quiz",

        topSeries:
            "TOP SERIES",

        biaRanking:
            "Bia's ranking",

        rankingDescription:
            "The highest-rated series on the blog.",

        yourJourney:
            "YOUR JOURNEY",

        achievements:
            "Achievements",

        firstLove:
            "First love",

        collector:
            "Collector",

        marathoner:
            "Binge watcher",

        critic:
            "Couch critic",

        talkAboutSeries:
            "Let's talk about series?",

        communityDescription:
            "Share your opinion.",

        leaveComment:
            "Leave your comment ♡",

        yourName:
            "Your name",

        whichSeries:
            "Which series?",

        yourComment:
            "Your comment",

        containsSpoiler:
            "Contains spoiler",

        publish:
            "Publish",

        behindBlog:
            "BEHIND THE BLOG",

        madeWithLove:
            "Made with love and many episodes.",

        teamDescription:
            "Meet the people behind Bia's Blog.",

        creator:
            "CREATOR",

        developer:
            "DEVELOPER",

        beatrizDescription:
            "Creator of Bia's Blog, responsible for the ideas, series and identity of the project.",

        bayerleeDescription:
            "Responsible for development, design, animations and website interactions.",

        features:
            "features",

        languages:
            "languages",

        creativity:
            "creativity",

        yourData:
            "YOUR DATA",

        savedInBrowser:
            "Everything is saved in your browser",

        dataDescription:
            "Favorites, comments and progress are saved on this device.",

        resetData:
            "Reset data",

        footerText:
            "A little place for people who love series.",

        createdBy:
            "Created by",

        developedBy:
            "Developed by",

        customize:
            "CUSTOMIZE",

        yourBlog:
            "Your Bia's Blog",

        gradient:
            "Gradient",

        visualEffects:
            "Visual effects",

        visualEffectsDescription:
            "Hearts and particles",

        animations:
            "Animations",

        animationsDescription:
            "Interface movement",

        seriesDetails:
            "DETAILS",

        yourRating:
            "Your rating",

        yourProgress:
            "Your progress",

        cast:
            "CAST",

        mainCast:
            "Main cast",

        recommendations:
            "RECOMMENDATIONS",

        youMayLike:
            "You may also like",

        trailerDescription:
            "Open the official trailer in a new tab.",

        searchOfficialTrailer:
            "Search official trailer",

        readyQuiz:
            "Ready to find out?",

        quizIntro:
            "Answer a few questions.",

        letsGo:
            "Let's go",

        howCallYou:
            "What should we call you?",

        name:
            "Name",

        chooseAvatar:
            "Choose your avatar",

        saveProfile:
            "Save profile"
    }

};


/* =========================================================
   ESTADO
========================================================= */

const defaultState = {

    language: "pt",

    theme: "light",

    colorTheme: "bia",

    effects: true,

    animations: true,

    favorites: [],

    watchlist: [],

    watched: [],

    ratings: {},

    progress: {},

    comments: [],

    profile: {
        name: "Visitante",
        avatar: "♡"
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

        return {
            ...defaultState,
            ...(saved || {}),

            profile: {
                ...defaultState.profile,
                ...(saved?.profile || {})
            }
        };

    } catch {

        return {
            ...defaultState
        };

    }

}


let state = loadState();

let heroIndex = 0;

let activeSeriesId =
    seriesData[0].id;

let currentTrailerSeries = null;

let activeFilter = "all";

let quizStep = 0;

let quizAnswers = [];

let toastTimer = null;

let heroTimer = null;


/* =========================================================
   SALVAR
========================================================= */

function saveState() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );

}


/* =========================================================
   TEXTO DA SÉRIE
========================================================= */

function getSeriesTitle(series) {

    if (
        state.language === "en"
        && series.titleEN
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
   API TVMAZE

   Essa parte busca CAPA e ELENCO online.
========================================================= */

const mediaCache = {};


function getMediaStorageKey(id) {

    return `bia_media_${id}`;

}


async function getSeriesMedia(series) {

    if (
        mediaCache[series.id]
    ) {
        return mediaCache[series.id];
    }


    const cached =
        localStorage.getItem(
            getMediaStorageKey(
                series.id
            )
        );


    if (cached) {

        try {

            const parsed =
                JSON.parse(cached);

            mediaCache[series.id] =
                parsed;

            return parsed;

        } catch {
            // continua
        }

    }


    try {

        const url =
            "https://api.tvmaze.com/singlesearch/shows?q="
            +
            encodeURIComponent(
                series.query
            )
            +
            "&embed=cast";


        const response =
            await fetch(url);


        if (!response.ok) {
            throw new Error(
                "TVMaze error"
            );
        }


        const data =
            await response.json();


        const poster =
            data?.image?.original
            ||
            data?.image?.medium
            ||
            createPlaceholder(
                getSeriesTitle(series)
            );


        const cast =
            (
                data?._embedded?.cast
                ||
                []
            )
                .slice(0, 8)
                .map(item => ({
                    name:
                        item.person?.name
                        ||
                        "Ator",

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
                }));


        const media = {
            poster,
            cast
        };


        mediaCache[series.id] =
            media;


        localStorage.setItem(
            getMediaStorageKey(
                series.id
            ),
            JSON.stringify(media)
        );


        return media;

    } catch (error) {

        console.warn(
            `Imagem online não encontrada: ${series.title}`
        );


        return {
            poster:
                createPlaceholder(
                    getSeriesTitle(series)
                ),

            cast: []
        };

    }

}


/* =========================================================
   PLACEHOLDER
========================================================= */

function createPlaceholder(title) {

    return (
        "data:image/svg+xml;charset=UTF-8,"
        +
        encodeURIComponent(`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="600"
                height="900"
                viewBox="0 0 600 900"
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
                            stop-color="#9158d9"
                        />

                        <stop
                            offset="50%"
                            stop-color="#df6bbb"
                        />

                        <stop
                            offset="100%"
                            stop-color="#746ee7"
                        />

                    </linearGradient>

                </defs>


                <rect
                    width="600"
                    height="900"
                    fill="url(#g)"
                />


                <text
                    x="300"
                    y="390"
                    text-anchor="middle"
                    fill="white"
                    font-size="80"
                    font-family="Arial"
                >
                    ♡
                </text>


                <text
                    x="300"
                    y="475"
                    text-anchor="middle"
                    fill="white"
                    font-size="28"
                    font-family="Arial"
                >
                    ${escapeHTML(title)}
                </text>

            </svg>
        `)
    );

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
        setTimeout(
            () => {
                toast.classList.remove(
                    "show"
                );
            },
            2400
        );

}


/* =========================================================
   IDIOMA
========================================================= */

function translatePage() {

    const dictionary =
        translations[
            state.language
        ];


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


    $$("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset
                    .i18nPlaceholder;


            if (
                dictionary[key]
                !== undefined
            ) {

                element.placeholder =
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


    updateAllDynamicContent();

}


function setLanguage(language) {

    if (
        language !== "pt"
        &&
        language !== "en"
    ) {
        return;
    }


    state.language =
        language;


    saveState();

    translatePage();


    showToast(
        language === "pt"
            ? "🇧🇷 Português"
            : "🇺🇸 English",
        "✦"
    );

}


/* =========================================================
   TEMA ESCURO
========================================================= */

function applyTheme() {

    body.classList.toggle(
        "dark-mode",
        state.theme === "dark"
    );


    if (themeIcon) {

        themeIcon.textContent =
            state.theme === "dark"
                ? "☀"
                : "☾";

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
                    ? "Dark mode enabled"
                    : "Light mode enabled"
            )
            : (
                state.theme === "dark"
                    ? "Tema escuro ativado"
                    : "Tema claro ativado"
            ),
        themeIcon?.textContent || "✦"
    );

}


/* =========================================================
   GRADIENTES
========================================================= */

function applyColorTheme() {

    if (
        state.colorTheme === "bia"
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
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset
                    .themeColor
                === state.colorTheme
            );

        });

}


function setColorTheme(theme) {

    state.colorTheme =
        theme;


    saveState();

    applyColorTheme();


    showToast(
        state.language === "en"
            ? "Gradient changed!"
            : "Gradiente alterado!",
        "✦"
    );

}


/* =========================================================
   EFEITOS
========================================================= */

function applyEffects() {

    body.classList.toggle(
        "animations-off",
        !state.animations
    );


    if (effectsToggle) {

        effectsToggle.checked =
            state.effects;

    }


    if (animationsToggle) {

        animationsToggle.checked =
            state.animations;

    }


    const finePointer =
        window.matchMedia(
            "(pointer: fine)"
        ).matches;


    body.classList.toggle(
        "custom-heart-cursor",
        state.effects
        &&
        finePointer
    );


    if (heartCursor) {

        heartCursor.style.display =
            state.effects
            &&
            finePointer
                ? ""
                : "none";

    }


    createParticles();

}


/* =========================================================
   PARTÍCULAS
========================================================= */

function createParticles() {

    if (!particles) return;


    particles.innerHTML = "";


    if (!state.effects) {
        return;
    }


    const symbols = [
        "♡",
        "✦",
        "♥",
        "✧"
    ];


    for (
        let i = 0;
        i < 16;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "background-particle";


        particle.textContent =
            randomItem(symbols);


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.fontSize =
            `${
                8
                +
                Math.random() * 13
            }px`;


        particle.style.animationDelay =
            `-${
                Math.random() * 15
            }s`;


        particle.style.setProperty(
            "--particle-speed",
            `${
                10
                +
                Math.random() * 11
            }s`
        );


        particles.appendChild(
            particle
        );

    }

}


/* =========================================================
   CURSOR CORAÇÃO
========================================================= */

let lastTrailTime = 0;


document.addEventListener(
    "mousemove",
    event => {

        if (
            !state.effects
            ||
            !window.matchMedia(
                "(pointer: fine)"
            ).matches
        ) {
            return;
        }


        if (heartCursor) {

            heartCursor.style.left =
                `${event.clientX}px`;

            heartCursor.style.top =
                `${event.clientY}px`;

        }


        const now =
            Date.now();


        if (
            now - lastTrailTime
            > 70
        ) {

            createCursorTrail(
                event.clientX,
                event.clientY
            );


            lastTrailTime = now;

        }

    }
);


function createCursorTrail(
    x,
    y
) {

    if (
        !state.effects
        ||
        !clickEffects
    ) {
        return;
    }


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
        () => trail.remove(),
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
            ||
            !clickEffects
        ) {
            return;
        }


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
            () => heart.remove(),
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
        ||
        !clickEffects
    ) {
        return;
    }


    const symbols = [
        "♡",
        "♥",
        "✦",
        "★"
    ];


    for (
        let i = 0;
        i < 24;
        i++
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        piece.textContent =
            randomItem(symbols);


        piece.style.left =
            `${40 + Math.random() * 20}vw`;

        piece.style.top =
            `${25 + Math.random() * 25}vh`;


        piece.style.setProperty(
            "--x",
            `${
                -180
                +
                Math.random() * 360
            }px`
        );


        piece.style.setProperty(
            "--y",
            `${
                80
                +
                Math.random() * 220
            }px`
        );


        piece.style.setProperty(
            "--rotation",
            `${
                Math.random() * 720
            }deg`
        );


        clickEffects.appendChild(
            piece
        );


        setTimeout(
            () => piece.remove(),
            1500
        );

    }

}


/* =========================================================
   DADOS
========================================================= */

function getSeries(id) {

    return seriesData.find(
        series =>
            series.id === id
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
            state.language === "en"
                ? "Removed from favorites"
                : "Removida dos favoritos",
            "♡"
        );

    } else {

        state.favorites.push(id);


        showToast(
            state.language === "en"
                ? "Added to favorites!"
                : "Adicionada aos favoritos!",
            "♥"
        );


        burstConfetti();

    }


    saveState();

    updateAllDynamicContent();

}


/* =========================================================
   WATCHLIST
========================================================= */

function isWatchlisted(id) {

    return state.watchlist
        .includes(id);

}


function toggleWatchlist(id) {

    if (isWatchlisted(id)) {

        state.watchlist =
            state.watchlist.filter(
                item => item !== id
            );


        showToast(
            state.language === "en"
                ? "Removed from watchlist"
                : "Removida da lista",
            "−"
        );

    } else {

        state.watchlist.push(id);


        showToast(
            state.language === "en"
                ? "Added to watchlist!"
                : "Adicionada à sua lista!",
            "＋"
        );

    }


    saveState();

    updateAllDynamicContent();

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
            state.language === "en"
                ? "Removed from watched"
                : "Removida das assistidas",
            "✓"
        );

    } else {

        state.watched.push(id);

        state.progress[id] =
            100;


        showToast(
            state.language === "en"
                ? "Series completed!"
                : "Série concluída!",
            "🍿"
        );


        burstConfetti();

    }


    saveState();

    updateAllDynamicContent();

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

    if (!heroDots) return;


    heroDots.innerHTML =
        featuredSeries
            .map(
                (_, index) => `
                    <button
                        class="hero-dot ${
                            index === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-hero-index="${index}"
                        aria-label="Slide ${
                            index + 1
                        }"
                    ></button>
                `
            )
            .join("");

}


async function updateHero() {

    if (
        featuredSeries.length === 0
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


    heroFavoriteBtn.classList.toggle(
        "active",
        isFavorite(series.id)
    );


    heroFavoriteBtn.innerHTML =
        isFavorite(series.id)
            ? `♥ <span>${
                state.language === "en"
                    ? "Favorited"
                    : "Favoritada"
            }</span>`
            : `♡ <span>${
                translations[
                    state.language
                ].favorite
            }</span>`;


    heroWatchlistBtn.classList.toggle(
        "active",
        isWatchlisted(series.id)
    );


    heroWatchlistBtn.innerHTML =
        isWatchlisted(series.id)
            ? `✓ <span>${
                state.language === "en"
                    ? "In my list"
                    : "Na minha lista"
            }</span>`
            : `＋ <span>${
                translations[
                    state.language
                ].watchlist
            }</span>`;


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
            `
            linear-gradient(
                rgba(20,10,25,.1),
                rgba(20,10,25,.1)
            ),
            url("${media.poster}")
            `;


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


/* =========================================================
   HERO AUTOPLAY
========================================================= */

function startHeroTimer() {

    clearInterval(
        heroTimer
    );


    heroTimer =
        setInterval(
            () => {

                if (
                    document.hidden
                    ||
                    seriesModal?.classList
                        .contains("open")
                    ||
                    searchOverlay?.classList
                        .contains("open")
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
            9000
        );

}


/* =========================================================
   GÊNEROS
========================================================= */

function formatGenre(genre) {

    const map = {

        misterio:
            state.language === "en"
                ? "Mystery"
                : "Mistério",

        suspense:
            state.language === "en"
                ? "Thriller"
                : "Suspense",

        drama:
            "Drama",

        romance:
            "Romance",

        crime:
            "Crime",

        comedia:
            state.language === "en"
                ? "Comedy"
                : "Comédia",

        brasil:
            state.language === "en"
                ? "Brazil"
                : "Brasil"

    };


    return map[genre]
        || genre;

}


/* =========================================================
   FILTROS
========================================================= */

function getFilteredSeries() {

    let list =
        [...seriesData];


    const query =
        seriesSearch?.value
            .trim()
            .toLowerCase()
        ||
        "";


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
                        series.genres
                            .includes(
                                activeFilter
                            )
                );

        }

    }


    if (query) {

        list =
            list.filter(
                series => {

                    const text =
                        [
                            getSeriesTitle(series),
                            series.title,
                            series.titleEN || "",
                            getSeriesCountry(series),
                            getSeriesDescription(series),
                            ...series.genres
                        ]
                            .join(" ")
                            .toLowerCase();


                    return text.includes(
                        query
                    );

                }
            );

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
                    >= minimumRating
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
                series =>
                    isFavorite(
                        series.id
                    )
            );

    }


    if (
        status === "watchlist"
    ) {

        list =
            list.filter(
                series =>
                    isWatchlisted(
                        series.id
                    )
            );

    }


    if (
        status === "watched"
    ) {

        list =
            list.filter(
                series =>
                    isWatched(
                        series.id
                    )
            );

    }


    if (
        status === "watching"
    ) {

        list =
            list.filter(
                series => {

                    const progress =
                        Number(
                            state.progress[
                                series.id
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

    }


    const sort =
        seriesSort?.value
        ||
        "featured";


    if (
        sort === "rating"
    ) {

        list.sort(
            (a, b) =>
                b.rating
                -
                a.rating
        );

    }


    if (
        sort === "az"
    ) {

        list.sort(
            (a, b) =>
                getSeriesTitle(a)
                    .localeCompare(
                        getSeriesTitle(b)
                    )
        );

    }


    if (
        sort === "za"
    ) {

        list.sort(
            (a, b) =>
                getSeriesTitle(b)
                    .localeCompare(
                        getSeriesTitle(a)
                    )
        );

    }


    if (
        sort === "newest"
    ) {

        list.sort(
            (a, b) =>
                b.year
                -
                a.year
        );

    }


    if (
        sort === "oldest"
    ) {

        list.sort(
            (a, b) =>
                a.year
                -
                b.year
        );

    }


    return list;

}


/* =========================================================
   GRID DAS SÉRIES
========================================================= */

async function renderSeries() {

    if (!seriesGrid) return;


    const list =
        getFilteredSeries();


    seriesResultCount.textContent =
        list.length;


    emptySeries.classList.toggle(
        "hidden",
        list.length > 0
    );


    seriesGrid.innerHTML =
        list
            .map(
                series => `
                    <article
                        class="series-card"
                        data-series-card="${
                            series.id
                        }"
                    >

                        <div
                            class="series-poster"
                        >

                            <img
                                data-online-poster="${
                                    series.id
                                }"
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
                                class="series-card-shine"
                            ></div>


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
                                        isFavorite(
                                            series.id
                                        )
                                            ? "active"
                                            : ""
                                    }"
                                    data-favorite="${
                                        series.id
                                    }"
                                    type="button"
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
                                        getSeriesTitle(
                                            series
                                        )
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
                                            getSeriesCountry(
                                                series
                                            )
                                        )
                                    }
                                </span>

                                ${
                                    isWatched(
                                        series.id
                                    )
                                        ? `
                                            <span>
                                                ✓ ${
                                                    state.language === "en"
                                                        ? "watched"
                                                        : "assistida"
                                                }
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
                                    data-open-series="${
                                        series.id
                                    }"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "details ♡"
                                            : "detalhes ♡"
                                    }
                                </button>

                            </div>

                        </div>

                    </article>
                `
            )
            .join("");


    loadVisiblePosters(
        list
    );

}


/* =========================================================
   CARREGAR CAPAS
========================================================= */

async function loadVisiblePosters(list) {

    const tasks =
        list.map(
            async series => {

                const image =
                    document.querySelector(
                        `[data-online-poster="${
                            series.id
                        }"]`
                    );


                if (!image) return;


                const media =
                    await getSeriesMedia(
                        series
                    );


                image.src =
                    media.poster;

            }
        );


    await Promise.allSettled(
        tasks
    );

}


/* =========================================================
   BRASIL
========================================================= */

async function renderBrazil() {

    if (!brazilCarousel) return;


    const brazilSeries =
        seriesData.filter(
            series =>
                series.brazil
        );


    brazilCarousel.innerHTML =
        brazilSeries
            .map(
                series => `
                    <button
                        class="brazil-card"
                        data-open-series="${
                            series.id
                        }"
                        type="button"
                    >

                        <img
                            data-brazil-poster="${
                                series.id
                            }"
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
                        >


                        <div
                            class="brazil-card-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            series
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${series.year}
                                ·
                                ★ ${series.rating}
                            </small>

                        </div>

                    </button>
                `
            )
            .join("");


    for (
        const series of brazilSeries
    ) {

        const image =
            document.querySelector(
                `[data-brazil-poster="${
                    series.id
                }"]`
            );


        if (!image) continue;


        const media =
            await getSeriesMedia(
                series
            );


        image.src =
            media.poster;

    }

}


/* =========================================================
   RANKING
========================================================= */

async function renderRanking() {

    if (!rankingList) return;


    const ranking =
        [...seriesData]
            .sort(
                (a, b) =>
                    b.rating
                    -
                    a.rating
            )
            .slice(0, 10);


    rankingList.innerHTML =
        ranking
            .map(
                (series, index) => `
                    <button
                        class="ranking-item"
                        data-open-series="${
                            series.id
                        }"
                        type="button"
                    >

                        <span
                            class="ranking-position"
                        >
                            ${index + 1}
                        </span>


                        <img
                            data-ranking-poster="${
                                series.id
                            }"
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
                        >


                        <span
                            class="ranking-info"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            series
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    escapeHTML(
                                        formatGenre(
                                            series.genres[0]
                                        )
                                    )
                                }
                                ·
                                ${series.year}
                            </small>

                        </span>


                        <span
                            class="ranking-score"
                        >
                            ★ ${series.rating}
                        </span>

                    </button>
                `
            )
            .join("");


    for (
        const series of ranking
    ) {

        const image =
            document.querySelector(
                `[data-ranking-poster="${
                    series.id
                }"]`
            );


        if (!image) continue;


        const media =
            await getSeriesMedia(
                series
            );


        image.src =
            media.poster;

    }

}


/* =========================================================
   SÉRIE DO DIA
========================================================= */

function getDailySeries() {

    const now =
        new Date();


    const key =
        Number(
            `${
                now.getFullYear()
            }${
                now.getMonth() + 1
            }${
                now.getDate()
            }`
        );


    return seriesData[
        key
        %
        seriesData.length
    ];

}


async function renderDailySeries() {

    const series =
        getDailySeries();


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


    dailyImage.alt =
        getSeriesTitle(series);

}


/* =========================================================
   ESTATÍSTICAS
========================================================= */

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


    updateLevel();

    updateAchievements();

}


/* =========================================================
   NÍVEL
========================================================= */

function calculateXP() {

    return (
        state.favorites.length * 8
        +
        state.watchlist.length * 5
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


function updateLevel() {

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


    if (
        state.language === "en"
    ) {

        profileLevelText.textContent =
            level < 3
                ? "Beginner binge watcher"
                : level < 6
                    ? "Series lover"
                    : "Binge expert";

    } else {

        profileLevelText.textContent =
            level < 3
                ? "Maratonista iniciante"
                : level < 6
                    ? "Apaixonada por séries"
                    : "Expert em maratonas";

    }

}


/* =========================================================
   CONQUISTAS
========================================================= */

function updateAchievements() {

    const achievements = {

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
        .forEach(card => {

            const id =
                card.dataset
                    .achievement;


            card.classList.toggle(
                "unlocked",
                Boolean(
                    achievements[id]
                )
            );

        });

}


/* =========================================================
   CONTINUAR ASSISTINDO
========================================================= */

async function renderContinueWatching() {

    if (
        !continueSection
        ||
        !continueGrid
    ) {
        return;
    }


    const items =
        seriesData.filter(
            series => {

                const progress =
                    Number(
                        state.progress[
                            series.id
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
        items.length > 0
    );


    continueGrid.innerHTML =
        items
            .map(
                series => `
                    <button
                        class="continue-card"
                        data-open-series="${
                            series.id
                        }"
                        type="button"
                    >

                        <img
                            data-continue-poster="${
                                series.id
                            }"
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
                        >


                        <div
                            class="continue-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            series
                                        )
                                    )
                                }
                            </strong>


                            <div
                                class="continue-progress"
                            >

                                <span
                                    style="
                                        width:${
                                            state.progress[
                                                series.id
                                            ]
                                            ||
                                            0
                                        }%
                                    "
                                ></span>

                            </div>


                            <small>
                                ${
                                    state.progress[
                                        series.id
                                    ]
                                    ||
                                    0
                                }%
                            </small>

                        </div>

                    </button>
                `
            )
            .join("");


    for (
        const series of items
    ) {

        const image =
            document.querySelector(
                `[data-continue-poster="${
                    series.id
                }"]`
            );


        if (!image) continue;


        const media =
            await getSeriesMedia(
                series
            );


        image.src =
            media.poster;

    }

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
            ? "🇧🇷 NETFLIX BRASIL"
            : getSeriesCountry(series)
                .toUpperCase();


    const media =
        await getSeriesMedia(
            series
        );


    modalPoster.src =
        media.poster;


    modalPoster.alt =
        getSeriesTitle(series);


    modalBackdrop.style
        .backgroundImage =
            `url("${media.poster}")`;


    renderCast(
        series,
        media.cast
    );


    renderRecommendations(
        series
    );


    renderStars(
        series.id
    );


    updateModalButtons(
        series.id
    );


    const progress =
        Number(
            state.progress[
                series.id
            ]
            ||
            0
        );


    episodeProgress.value =
        progress;


    episodeProgressText.textContent =
        `${progress}%`;


    seriesModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeSeriesModal() {

    seriesModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


/* =========================================================
   BOTÕES MODAL
========================================================= */

function updateModalButtons(id) {

    const favorite =
        isFavorite(id);


    const watchlist =
        isWatchlisted(id);


    const watched =
        isWatched(id);


    modalFavoriteBtn.classList.toggle(
        "active",
        favorite
    );


    modalWatchlistBtn.classList.toggle(
        "active",
        watchlist
    );


    modalWatchedBtn.classList.toggle(
        "active",
        watched
    );


    modalFavoriteBtn.innerHTML =
        favorite
            ? `♥ ${
                state.language === "en"
                    ? "Favorited"
                    : "Favoritada"
            }`
            : `♡ ${
                translations[
                    state.language
                ].favorite
            }`;


    modalWatchlistBtn.innerHTML =
        watchlist
            ? `✓ ${
                state.language === "en"
                    ? "In my list"
                    : "Na minha lista"
            }`
            : `＋ ${
                translations[
                    state.language
                ].watchlist
            }`;


    modalWatchedBtn.innerHTML =
        watched
            ? `✓ ${
                state.language === "en"
                    ? "Watched"
                    : "Assistida"
            }`
            : `✓ ${
                state.language === "en"
                    ? "Mark watched"
                    : "Marcar assistida"
            }`;

}


/* =========================================================
   ELENCO
========================================================= */

function renderCast(
    series,
    cast
) {

    if (!castGrid) return;


    if (
        !cast
        ||
        cast.length === 0
    ) {

        castGrid.innerHTML =
            `
            <div
                class="cast-loading"
            >
                ${
                    state.language === "en"
                        ? "Cast information unavailable."
                        : "Elenco não disponível no momento."
                }
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
                                person.image
                                ||
                                createPlaceholder(
                                    person.name
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    person.name
                                )
                            }"
                            loading="lazy"
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
   RECOMENDAÇÕES
========================================================= */

async function renderRecommendations(
    current
) {

    if (!recommendations) return;


    let related =
        seriesData.filter(
            series =>
                series.id
                !== current.id
                &&
                series.genres.some(
                    genre =>
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
            .slice(0, 4);


    recommendations.innerHTML =
        related
            .map(
                series => `
                    <button
                        class="recommendation-card"
                        data-open-series="${
                            series.id
                        }"
                        type="button"
                    >

                        <img
                            data-recommendation-poster="${
                                series.id
                            }"
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
                        >

                        <span>
                            ${
                                escapeHTML(
                                    getSeriesTitle(series)
                                )
                            }
                        </span>

                    </button>
                `
            )
            .join("");


    for (
        const series of related
    ) {

        const image =
            document.querySelector(
                `[data-recommendation-poster="${
                    series.id
                }"]`
            );


        if (!image) continue;


        const media =
            await getSeriesMedia(
                series
            );


        image.src =
            media.poster;

    }

}


/* =========================================================
   ESTRELAS
========================================================= */

function renderStars(id) {

    if (!starRating) return;


    const rating =
        Number(
            state.ratings[id]
            ||
            0
        );


    $$(
        "[data-star]",
        starRating
    )
        .forEach(button => {

            const star =
                Number(
                    button.dataset.star
                );


            button.textContent =
                star <= rating
                    ? "★"
                    : "☆";

        });

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


    showToast(
        `${
            state.language === "en"
                ? "Your rating"
                : "Sua nota"
        }: ${value}/5`,
        "★"
    );


    if (
        Number(value) === 5
    ) {
        burstConfetti();
    }

}


/* =========================================================
   PROGRESSO
========================================================= */

function updateProgress() {

    if (!activeSeriesId) return;


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
    ] = value;


    episodeProgressText.textContent =
        `${value}%`;


    if (
        value === 100
        &&
        !isWatched(
            activeSeriesId
        )
    ) {

        state.watched.push(
            activeSeriesId
        );


        showToast(
            state.language === "en"
                ? "Series completed!"
                : "Série concluída!",
            "🍿"
        );


        burstConfetti();

    }


    saveState();

    updateStats();

    renderContinueWatching();

    updateModalButtons(
        activeSeriesId
    );

}


/* =========================================================
   TRAILER
========================================================= */

function openTrailer(series) {

    if (!series) return;


    currentTrailerSeries =
        series;


    trailerTitle.textContent =
        `${
            state.language === "en"
                ? "Trailer"
                : "Trailer"
        } — ${
            getSeriesTitle(series)
        }`;


    trailerModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeTrailerModal() {

    trailerModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


function openTrailerOnYoutube() {

    if (!currentTrailerSeries) {
        return;
    }


    const query =
        `${getSeriesTitle(
            currentTrailerSeries
        )} Netflix official trailer`;


    window.open(
        "https://www.youtube.com/results?search_query="
        +
        encodeURIComponent(
            query
        ),
        "_blank",
        "noopener,noreferrer"
    );

}


/* =========================================================
   PESQUISA GLOBAL
========================================================= */

function openSearch() {

    searchOverlay.classList.add(
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

    searchOverlay.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


async function renderGlobalSearch() {

    const query =
        globalSearch.value
            .trim()
            .toLowerCase();


    const results =
        seriesData
            .filter(
                series => {

                    if (!query) {
                        return true;
                    }


                    return [
                        getSeriesTitle(series),
                        series.title,
                        series.titleEN || "",
                        getSeriesCountry(series),
                        getSeriesDescription(series),
                        ...series.genres
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(query);

                }
            )
            .slice(0, 8);


    if (
        results.length === 0
    ) {

        searchResults.innerHTML =
            `
            <div
                style="
                    padding:30px;
                    text-align:center;
                    opacity:.65;
                "
            >
                ${
                    state.language === "en"
                        ? "No series found."
                        : "Nenhuma série encontrada."
                }
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
                        data-search-series="${
                            series.id
                        }"
                        type="button"
                    >

                        <img
                            data-search-poster="${
                                series.id
                            }"
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
                        >


                        <span>

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            series
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    escapeHTML(
                                        formatGenre(
                                            series.genres[0]
                                        )
                                    )
                                }
                                ·
                                ${series.year}
                            </small>

                        </span>


                        <span>
                            ★ ${series.rating}
                        </span>

                    </button>
                `
            )
            .join("");


    for (
        const series of results
    ) {

        const image =
            document.querySelector(
                `[data-search-poster="${
                    series.id
                }"]`
            );


        if (!image) continue;


        const media =
            await getSeriesMedia(
                series
            );


        image.src =
            media.poster;

    }

}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function populateCommentSeries() {

    if (!commentSeries) return;


    const firstOption =
        state.language === "en"
            ? "Choose a series"
            : "Escolha uma série";


    commentSeries.innerHTML =
        `
        <option value="">
            ${firstOption}
        </option>
        `
        +
        [...seriesData]
            .sort(
                (a, b) =>
                    getSeriesTitle(a)
                        .localeCompare(
                            getSeriesTitle(b)
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
                                getSeriesTitle(series)
                            )
                        }
                    </option>
                `
            )
            .join("");

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
            state.language === "en"
                ? "Fill in all fields."
                : "Preencha todos os campos.",
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

        likes:
            0,

        liked:
            false,

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

    updateStats();


    showToast(
        state.language === "en"
            ? "Comment published!"
            : "Comentário publicado!",
        "♡"
    );

}


/* =========================================================
   RENDER COMENTÁRIOS
========================================================= */

function renderComments() {

    if (!commentsList) return;


    let comments =
        [...state.comments];


    if (
        commentSort.value === "likes"
    ) {

        comments.sort(
            (a, b) =>
                b.likes
                -
                a.likes
        );

    } else if (
        commentSort.value === "old"
    ) {

        comments.sort(
            (a, b) =>
                new Date(
                    a.createdAt
                )
                -
                new Date(
                    b.createdAt
                )
        );

    } else {

        comments.sort(
            (a, b) =>
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
        comments.length;


    if (
        comments.length === 0
    ) {

        commentsList.innerHTML =
            `
            <div
                style="
                    padding:40px;
                    text-align:center;
                    opacity:.65;
                "
            >

                <div
                    style="
                        font-size:2.4rem;
                    "
                >
                    ♡
                </div>

                <p>
                    ${
                        state.language === "en"
                            ? "Be the first to comment."
                            : "Seja a primeira pessoa a comentar."
                    }
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
                                part =>
                                    part[0] || ""
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
                                                ? getSeriesTitle(series)
                                                : "Série"
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
                                            type="button"
                                        >
                                            ${
                                                state.language === "en"
                                                    ? "👁 show spoiler"
                                                    : "👁 revelar spoiler"
                                            }
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
                                    type="button"
                                >
                                    ${
                                        comment.liked
                                            ? "♥"
                                            : "♡"
                                    }
                                    ${comment.likes}
                                </button>


                                <button
                                    data-reply-toggle="${
                                        comment.id
                                    }"
                                    type="button"
                                >
                                    ↩ ${
                                        state.language === "en"
                                            ? "reply"
                                            : "responder"
                                    }
                                </button>


                                <button
                                    data-delete-comment="${
                                        comment.id
                                    }"
                                    type="button"
                                >
                                    × ${
                                        state.language === "en"
                                            ? "delete"
                                            : "excluir"
                                    }
                                </button>

                            </div>


                            <div
                                class="comment-reply-box"
                                data-reply-box="${
                                    comment.id
                                }"
                            >

                                <input
                                    type="text"
                                    maxlength="180"
                                    placeholder="${
                                        state.language === "en"
                                            ? "Write a reply..."
                                            : "Escreva uma resposta..."
                                    }"
                                >

                                <button
                                    data-send-reply="${
                                        comment.id
                                    }"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "send"
                                            : "enviar"
                                    }
                                </button>

                            </div>


                            <div
                                class="reply-list"
                            >

                                ${
                                    (
                                        comment.replies
                                        ||
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
   DATA
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
   CURTIR COMENTÁRIO
========================================================= */

function toggleCommentLike(id) {

    const comment =
        state.comments.find(
            comment =>
                comment.id === id
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
            comment =>
                comment.id === id
        );


    if (!comment) return;


    comment.replies =
        comment.replies || [];


    comment.replies.push({

        name:
            state.profile.name
            ||
            (
                state.language === "en"
                    ? "Visitor"
                    : "Visitante"
            ),

        text,

        createdAt:
            new Date()
                .toISOString()

    });


    saveState();

    renderComments();


    showToast(
        state.language === "en"
            ? "Reply published!"
            : "Resposta publicada!",
        "↩"
    );

}


/* =========================================================
   EXCLUIR COMENTÁRIO
========================================================= */

function deleteComment(id) {

    const confirmed =
        confirm(
            state.language === "en"
                ? "Delete this comment?"
                : "Excluir este comentário?"
        );


    if (!confirmed) return;


    state.comments =
        state.comments.filter(
            comment =>
                comment.id !== id
        );


    saveState();

    renderComments();

    updateStats();

}


/* =========================================================
   PERFIL
========================================================= */

function renderProfile() {

    profileAvatar.textContent =
        state.profile.avatar;


    profileName.textContent =
        state.profile.name;

}


function openProfile() {

    profileNameInput.value =
        state.profile.name;


    $$(".avatar-picker button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.avatar
                === state.profile.avatar
            );

        });


    profileModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeProfile() {

    profileModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

}


function saveProfile(event) {

    event.preventDefault();


    const name =
        profileNameInput.value
            .trim();


    if (!name) return;


    state.profile.name =
        name;


    saveState();

    renderProfile();

    closeProfile();


    showToast(
        state.language === "en"
            ? "Profile saved!"
            : "Perfil salvo!",
        "♡"
    );

}


/* =========================================================
   QUIZ
========================================================= */

const quizQuestions = [

    {

        pt:
            "Qual clima você quer hoje?",

        en:
            "What mood do you want today?",

        options: [

            {
                pt:
                    "💕 Romance",

                en:
                    "💕 Romance",

                value:
                    "romance"
            },

            {
                pt:
                    "🔎 Mistério",

                en:
                    "🔎 Mystery",

                value:
                    "misterio"
            },

            {
                pt:
                    "😰 Suspense",

                en:
                    "😰 Thriller",

                value:
                    "suspense"
            },

            {
                pt:
                    "🎭 Drama",

                en:
                    "🎭 Drama",

                value:
                    "drama"
            }

        ]

    },


    {

        pt:
            "Que tipo de história parece melhor?",

        en:
            "What kind of story sounds better?",

        options: [

            {
                pt:
                    "💘 Relacionamentos",

                en:
                    "💘 Relationships",

                value:
                    "romance"
            },

            {
                pt:
                    "🕵️ Crimes e segredos",

                en:
                    "🕵️ Crime and secrets",

                value:
                    "crime"
            },

            {
                pt:
                    "😂 Algo mais leve",

                en:
                    "😂 Something lighter",

                value:
                    "comedia"
            },

            {
                pt:
                    "🎬 História intensa",

                en:
                    "🎬 Intense story",

                value:
                    "drama"
            }

        ]

    },


    {

        pt:
            "Quer uma produção brasileira?",

        en:
            "Do you want a Brazilian production?",

        options: [

            {
                pt:
                    "🇧🇷 Sim",

                en:
                    "🇧🇷 Yes",

                brazil:
                    true
            },

            {
                pt:
                    "🌎 Tanto faz",

                en:
                    "🌎 Either",

                brazil:
                    null
            }

        ]

    }

];


function openQuiz() {

    quizStep = 0;

    quizAnswers = [];


    quizModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";


    renderQuizIntro();

}


function renderQuizIntro() {

    quizProgress.style.width =
        "0%";


    quizContent.innerHTML =
        `
        <span
            class="quiz-icon-big"
        >
            ✦
        </span>

        <h2>
            ${
                translations[
                    state.language
                ].readyQuiz
            }
        </h2>

        <p>
            ${
                translations[
                    state.language
                ].quizIntro
            }
        </p>

        <button
            id="dynamicQuizBegin"
            class="primary-btn"
            type="button"
        >
            ${
                translations[
                    state.language
                ].letsGo
            }
            →
        </button>
        `;


    $("#dynamicQuizBegin")
        ?.addEventListener(
            "click",
            renderQuizQuestion
        );

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
            (
                quizStep
                /
                quizQuestions.length
            )
            *
            100
        }%`;


    quizContent.innerHTML =
        `
        <span class="eyebrow">
            ${
                state.language === "en"
                    ? `QUESTION ${
                        quizStep + 1
                    }`
                    : `PERGUNTA ${
                        quizStep + 1
                    }`
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
            class="quiz-options"
            id="dynamicQuizOptions"
        ></div>
        `;


    const container =
        $("#dynamicQuizOptions");


    question.options
        .forEach(option => {

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

        });

}


async function showQuizResult() {

    quizProgress.style.width =
        "100%";


    const genreCounts = {};


    let brazilPreference =
        null;


    quizAnswers
        .forEach(answer => {

            if (
                answer.value
            ) {

                genreCounts[
                    answer.value
                ] =
                    (
                        genreCounts[
                            answer.value
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

                brazilPreference =
                    answer.brazil;

            }

        });


    const favoriteGenre =
        Object.entries(
            genreCounts
        )
            .sort(
                (a, b) =>
                    b[1]
                    -
                    a[1]
            )[0]?.[0];


    let candidates =
        seriesData.filter(
            series =>
                !favoriteGenre
                ||
                series.genres.includes(
                    favoriteGenre
                )
        );


    if (
        brazilPreference === true
    ) {

        const brazil =
            candidates.filter(
                series =>
                    series.brazil
            );


        if (
            brazil.length > 0
        ) {

            candidates =
                brazil;

        }

    }


    const result =
        randomItem(
            candidates.length
                ? candidates
                : seriesData
        );


    const media =
        await getSeriesMedia(
            result
        );


    quizContent.innerHTML =
        `
        <span class="eyebrow">
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
            class="quiz-result-poster"
            src="${media.poster}"
            alt="${
                escapeHTML(
                    getSeriesTitle(
                        result
                    )
                )
            }"
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
            id="quizResultOpen"
            class="primary-btn"
            type="button"
        >
            ${
                state.language === "en"
                    ? "See details"
                    : "Ver detalhes"
            }
        </button>
        `;


    $("#quizResultOpen")
        ?.addEventListener(
            "click",
            () => {

                closeQuiz();

                openSeries(
                    result.id
                );

            }
        );


    burstConfetti();

}


function closeQuiz() {

    quizModal.classList.remove(
        "open"
    );


    body.style.overflow =
        "";

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


    body.style.overflow =
        "hidden";

}


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


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

function openSettings() {

    settingsPanel.classList.add(
        "open"
    );

}


function closeSettings() {

    settingsPanel.classList.remove(
        "open"
    );

}


/* =========================================================
   COMPARTILHAR
========================================================= */

async function shareBlog() {

    const shareData = {

        title:
            "Blog da Bia ♡",

        text:
            state.language === "en"
                ? "Check out this series blog!"
                : "Olha esse blog de séries!",

        url:
            window.location.href

    };


    try {

        if (
            navigator.share
        ) {

            await navigator.share(
                shareData
            );

        } else {

            await navigator.clipboard
                .writeText(
                    window.location.href
                );


            showToast(
                state.language === "en"
                    ? "Link copied!"
                    : "Link copiado!",
                "↗"
            );

        }

    } catch {
        // cancelado
    }

}


/* =========================================================
   COPIAR TÍTULO
========================================================= */

async function copyCurrentSeries() {

    const series =
        getSeries(
            activeSeriesId
        );


    if (!series) return;


    const title =
        getSeriesTitle(
            series
        );


    try {

        await navigator.clipboard
            .writeText(title);


        showToast(
            state.language === "en"
                ? `"${title}" copied!`
                : `"${title}" copiado!`,
            "⧉"
        );

    } catch {

        showToast(
            title,
            "♡"
        );

    }

}


/* =========================================================
   ALEATÓRIA
========================================================= */

function surpriseMe() {

    let series =
        randomItem(
            seriesData
        );


    if (
        series.id === activeSeriesId
        &&
        seriesData.length > 1
    ) {

        series =
            randomItem(
                seriesData.filter(
                    item =>
                        item.id
                        !== activeSeriesId
                )
            );

    }


    showToast(
        state.language === "en"
            ? `Your pick: ${
                getSeriesTitle(series)
            }`
            : `Sua escolha: ${
                getSeriesTitle(series)
            }`,
        "✦"
    );


    openSeries(
        series.id
    );

}


/* =========================================================
   RESET
========================================================= */

function resetData() {

    const confirmed =
        confirm(
            state.language === "en"
                ? "Delete favorites, ratings, comments and progress?"
                : "Apagar favoritos, avaliações, comentários e progresso?"
        );


    if (!confirmed) return;


    const preserved = {

        language:
            state.language,

        theme:
            state.theme,

        colorTheme:
            state.colorTheme,

        effects:
            state.effects,

        animations:
            state.animations

    };


    state = {
        ...defaultState,
        ...preserved,

        profile: {
            ...defaultState.profile
        }
    };


    saveState();

    updateAllDynamicContent();

    translatePage();


    showToast(
        state.language === "en"
            ? "Data reset!"
            : "Dados redefinidos!",
        "✓"
    );

}


/* =========================================================
   SCROLL
========================================================= */

function handleScroll() {

    const scrollTop =
        window.scrollY;


    const maximum =
        document.documentElement
            .scrollHeight
        -
        window.innerHeight;


    const percentage =
        maximum > 0
            ? (
                scrollTop
                /
                maximum
            )
            *
            100
            : 0;


    scrollProgress.style.width =
        `${percentage}%`;


    header.classList.toggle(
        "scrolled",
        scrollTop > 30
    );


    backTop.classList.toggle(
        "show",
        scrollTop > 550
    );

}


/* =========================================================
   TILT HERO
========================================================= */

function setupHeroTilt() {

    if (!heroPosterCard) return;


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


            const rotateY =
                (
                    x / rect.width
                    -
                    0.5
                )
                *
                10;


            const rotateX =
                (
                    0.5
                    -
                    y / rect.height
                )
                *
                10;


            heroPosterCard.style
                .transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
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
   TILT CARDS E EQUIPE
========================================================= */

function setupTiltEffects() {

    document.addEventListener(
        "mousemove",
        event => {

            if (
                !state.animations
            ) {
                return;
            }


            const card =
                event.target.closest(
                    ".series-card, .person-card"
                );


            if (!card) return;


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


            const rotateY =
                (
                    x / rect.width
                    -
                    0.5
                )
                *
                5;


            const rotateX =
                (
                    0.5
                    -
                    y / rect.height
                )
                *
                5;


            card.style.transform =
                `
                perspective(900px)
                translateY(-6px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;


            const spotlight =
                $(".person-spotlight", card);


            if (spotlight) {

                spotlight.style.left =
                    `${x}px`;

                spotlight.style.top =
                    `${y}px`;

            }

        }
    );


    document.addEventListener(
        "mouseout",
        event => {

            const card =
                event.target.closest(
                    ".series-card, .person-card"
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
                card.dataset
                    .seriesCard
            );


            return;

        }


        const searchButton =
            event.target.closest(
                "[data-search-series]"
            );


        if (searchButton) {

            closeSearch();


            openSeries(
                searchButton.dataset
                    .searchSeries
            );


            return;

        }


        const spoilerButton =
            event.target.closest(
                "[data-spoiler]"
            );


        if (spoilerButton) {

            const id =
                spoilerButton.dataset
                    .spoiler;


            const text =
                document.querySelector(
                    `[data-comment-text="${id}"]`
                );


            text?.classList.toggle(
                "revealed"
            );


            spoilerButton.textContent =
                text?.classList.contains(
                    "revealed"
                )
                    ? (
                        state.language === "en"
                            ? "🙈 hide spoiler"
                            : "🙈 esconder spoiler"
                    )
                    : (
                        state.language === "en"
                            ? "👁 show spoiler"
                            : "👁 revelar spoiler"
                    );


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


            box?.classList.toggle(
                "open"
            );


            return;

        }


        const sendReplyButton =
            event.target.closest(
                "[data-send-reply]"
            );


        if (sendReplyButton) {

            sendReply(
                Number(
                    sendReplyButton.dataset
                        .sendReply
                )
            );


            return;

        }


        const deleteButton =
            event.target.closest(
                "[data-delete-comment]"
            );


        if (deleteButton) {

            deleteComment(
                Number(
                    deleteButton.dataset
                        .deleteComment
                )
            );

        }

    }
);


/* =========================================================
   EVENTOS HEADER
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
    .forEach(button => {

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

    });


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


searchClose?.addEventListener(
    "click",
    closeSearch
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


globalSearch?.addEventListener(
    "input",
    renderGlobalSearch
);


/* =========================================================
   MOBILE
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
)
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   HERO EVENTS
========================================================= */

watchTrailerBtn?.addEventListener(
    "click",
    () => {

        openTrailer(
            getSeries(
                activeSeriesId
            )
        );

    }
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


        heroIndex =
            Number(
                dot.dataset
                    .heroIndex
            );


        updateHero();

        startHeroTimer();

    }
);


/* =========================================================
   FILTROS EVENTS
========================================================= */

seriesSearch?.addEventListener(
    "input",
    renderSeries
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


        if (!button) return;


        $$(".filter-btn")
            .forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


        button.classList.add(
            "active"
        );


        activeFilter =
            button.dataset.filter;


        renderSeries();

    }
);


advancedFilterBtn?.addEventListener(
    "click",
    () => {

        advancedFilters.classList.toggle(
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
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .filter
                    === "all"
                );

            });


        renderSeries();

    }
);


seeAllBrazilBtn?.addEventListener(
    "click",
    () => {

        activeFilter =
            "brasil";


        $$(".filter-btn")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .filter
                    === "brasil"
                );

            });


        renderSeries();


        $("#series")?.scrollIntoView({
            behavior:
                "smooth"
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
   MODAL EVENTS
========================================================= */

seriesModalClose?.addEventListener(
    "click",
    closeSeriesModal
);


seriesModal?.addEventListener(
    "click",
    event => {

        if (
            event.target
            === seriesModal
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

        episodeProgressText.textContent =
            `${
                episodeProgress.value
            }%`;

    }
);


episodeProgress?.addEventListener(
    "change",
    updateProgress
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
            event.target
            === trailerModal
        ) {

            closeTrailerModal();

        }

    }
);


openYoutubeTrailer?.addEventListener(
    "click",
    openTrailerOnYoutube
);


/* =========================================================
   QUIZ EVENTS
========================================================= */

startQuizBtn?.addEventListener(
    "click",
    openQuiz
);


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
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                $$(".avatar-picker button")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                state.profile.avatar =
                    button.dataset.avatar;

            }
        );

    });


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
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setColorTheme(
                    button.dataset
                        .themeColor
                );

            }
        );

    });


effectsToggle?.addEventListener(
    "change",
    () => {

        state.effects =
            effectsToggle.checked;


        saveState();

        applyEffects();

    }
);


animationsToggle?.addEventListener(
    "change",
    () => {

        state.animations =
            animationsToggle.checked;


        saveState();

        applyEffects();

    }
);


/* =========================================================
   RESET
========================================================= */

resetDataBtn?.addEventListener(
    "click",
    resetData
);


/* =========================================================
   BACK TOP
========================================================= */

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
   SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


/* =========================================================
   HOVER CURSOR
========================================================= */

document.addEventListener(
    "mouseover",
    event => {

        if (
            event.target.closest(
                "button, a, input, textarea, select, .series-card"
            )
        ) {

            heartCursor?.classList.add(
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

            heartCursor?.classList.remove(
                "hover"
            );

        }

    }
);


/* =========================================================
   TECLADO

   ESC = fecha
   /   = pesquisa
   R   = aleatória
   T   = tema
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

            closeSearch();

            closeSeriesModal();

            closeTrailerModal();

            closeQuiz();

            closeProfile();

            closeMobileMenu();

            closeSettings();


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
            event.key
                .toLowerCase()
            === "r"
        ) {

            surpriseMe();

        }


        if (
            event.key
                .toLowerCase()
            === "t"
        ) {

            toggleTheme();

        }

    }
);


/* =========================================================
   LINKS INTERNOS
========================================================= */

$$('a[href^="#"]')
    .forEach(link => {

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


                if (!target) return;


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

    });


/* =========================================================
   ATUALIZAÇÃO GERAL
========================================================= */

function updateAllDynamicContent() {

    renderProfile();

    updateStats();

    populateCommentSeries();

    renderComments();

    renderSeries();

    renderBrazil();

    renderRanking();

    renderDailySeries();

    renderContinueWatching();

    createHeroDots();

    updateHero();


    if (
        seriesModal?.classList
            .contains("open")
    ) {

        const current =
            getSeries(
                activeSeriesId
            );


        if (current) {

            openSeries(
                current.id
            );

        }

    }

}


/* =========================================================
   LOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader?.classList.add(
                    "hidden"
                );

            },
            650
        );

    }
);


setTimeout(
    () => {

        loader?.classList.add(
            "hidden"
        );

    },
    2800
);


/* =========================================================
   INIT
========================================================= */

async function init() {

    console.log(
        "♡ Blog da Bia iniciado"
    );


    if (currentYear) {

        currentYear.textContent =
            new Date()
                .getFullYear();

    }


    applyTheme();

    applyColorTheme();

    applyEffects();

    renderProfile();

    createHeroDots();

    populateCommentSeries();

    updateStats();

    renderComments();

    renderSeries();

    renderBrazil();

    renderRanking();

    renderContinueWatching();

    await renderDailySeries();

    await updateHero();

    setupHeroTilt();

    setupTiltEffects();

    handleScroll();

    translatePage();

    startHeroTimer();

}


/* =========================================================
   EXECUTAR
========================================================= */

init();