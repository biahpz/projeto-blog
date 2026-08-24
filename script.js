"use strict";


/* =========================================================
   BLOG DA BIA
   SCRIPT.JS — VERSÃO COMPLETA
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
    "blogDaBia_v14";


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
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

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


/* MENU MOBILE */

const mobileMenu =
    $("#mobileMenu");

const mobileMenuClose =
    $("#mobileMenuClose");

const menuOverlay =
    $("#menuOverlay");


/* PESQUISA */

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


/* CONTINUAR */

const continueSection =
    $("#continueSection");

const continueGrid =
    $("#continueGrid");


/* HISTÓRICO */

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


/* CATÁLOGO */

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


/* MINHA LISTA */

const personalGrid =
    $("#personalGrid");

const personalEmpty =
    $("#personalEmpty");


/* BRASIL */

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


/* FOOTER */

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

const openYoutubeTrailer =
    $("#openYoutubeTrailer");


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


/* TEAM MODAL */

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


/* =========================================================
   CATÁLOGO
========================================================= */

const seriesData = [

    {
        id:
            "stranger-things",

        title:
            "Stranger Things",

        query:
            "Stranger Things",

        year:
            2016,

        seasonsPT:
            "5 temporadas",

        seasonsEN:
            "5 seasons",

        rating:
            4.9,

        genres: [
            "misterio",
            "drama",
            "suspense"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Em Hawkins, o desaparecimento de um garoto revela experimentos secretos, forças sobrenaturais e mistérios que mudam a vida de um grupo de amigos.",

        descriptionEN:
            "In Hawkins, a boy's disappearance reveals secret experiments, supernatural forces and mysteries that change the lives of a group of friends."
    },


    {
        id:
            "wednesday",

        title:
            "Wednesday",

        query:
            "Wednesday",

        year:
            2022,

        seasonsPT:
            "2 temporadas",

        seasonsEN:
            "2 seasons",

        rating:
            4.8,

        genres: [
            "misterio",
            "suspense",
            "comedia"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Wednesday Addams entra na Academia Nevermore e começa a investigar assassinatos, segredos familiares e acontecimentos sobrenaturais.",

        descriptionEN:
            "Wednesday Addams enters Nevermore Academy and begins investigating murders, family secrets and supernatural events."
    },


    {
        id:
            "outer-banks",

        title:
            "Outer Banks",

        query:
            "Outer Banks",

        year:
            2020,

        seasonsPT:
            "5 temporadas",

        seasonsEN:
            "5 seasons",

        rating:
            4.7,

        genres: [
            "drama",
            "romance",
            "suspense"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "John B e seus amigos entram em uma caça ao tesouro cheia de segredos, perseguições, romances e perigos.",

        descriptionEN:
            "John B and his friends enter a treasure hunt filled with secrets, chases, romance and danger."
    },


    {
        id:
            "ginny-georgia",

        title:
            "Ginny & Georgia",

        query:
            "Ginny & Georgia",

        year:
            2021,

        seasonsPT:
            "3 temporadas",

        seasonsEN:
            "3 seasons",

        rating:
            4.7,

        genres: [
            "drama",
            "romance",
            "comedia"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Ginny tenta viver uma adolescência normal enquanto descobre que sua mãe Georgia esconde um passado muito mais complicado do que parece.",

        descriptionEN:
            "Ginny tries to live a normal teenage life while discovering that her mother Georgia hides a far more complicated past than it seems."
    },


    {
        id:
            "bridgerton",

        title:
            "Bridgerton",

        query:
            "Bridgerton",

        year:
            2020,

        seasonsPT:
            "4 temporadas",

        seasonsEN:
            "4 seasons",

        rating:
            4.7,

        genres: [
            "romance",
            "drama"
        ],

        countryPT:
            "Reino Unido",

        countryEN:
            "United Kingdom",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Romances, escândalos e disputas familiares movimentam a alta sociedade enquanto novos casais surgem a cada temporada.",

        descriptionEN:
            "Romance, scandals and family rivalries shake high society as new couples emerge each season."
    },


    {
        id:
            "elite",

        title:
            "Elite",

        query:
            "Elite",

        year:
            2018,

        seasonsPT:
            "8 temporadas",

        seasonsEN:
            "8 seasons",

        rating:
            4.4,

        genres: [
            "drama",
            "crime",
            "suspense",
            "romance"
        ],

        countryPT:
            "Espanha",

        countryEN:
            "Spain",

        brazil:
            false,

        featured:
            false,

        descriptionPT:
            "Alunos de uma escola de elite vivem romances, rivalidades e segredos que frequentemente acabam ligados a crimes.",

        descriptionEN:
            "Students at an elite school experience romance, rivalries and secrets that often become connected to crimes."
    },


    {
        id:
            "never-have-i-ever",

        title:
            "Eu Nunca...",

        titleEN:
            "Never Have I Ever",

        query:
            "Never Have I Ever",

        year:
            2020,

        seasonsPT:
            "4 temporadas",

        seasonsEN:
            "4 seasons",

        rating:
            4.7,

        genres: [
            "comedia",
            "romance",
            "drama"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            false,

        descriptionPT:
            "Devi tenta melhorar sua vida social enquanto lida com escola, família, amizades e relacionamentos complicados.",

        descriptionEN:
            "Devi tries to improve her social life while dealing with school, family, friendships and complicated relationships."
    },


    {
        id:
            "sex-education",

        title:
            "Sex Education",

        query:
            "Sex Education",

        year:
            2019,

        seasonsPT:
            "4 temporadas",

        seasonsEN:
            "4 seasons",

        rating:
            4.8,

        genres: [
            "comedia",
            "drama",
            "romance"
        ],

        countryPT:
            "Reino Unido",

        countryEN:
            "United Kingdom",

        brazil:
            false,

        featured:
            false,

        descriptionPT:
            "Otis usa o conhecimento adquirido com sua mãe terapeuta para aconselhar colegas e acaba envolvido nos problemas deles.",

        descriptionEN:
            "Otis uses knowledge from his therapist mother to advise classmates and ends up involved in their problems."
    },


    {
        id:
            "you",

        title:
            "You",

        query:
            "You",

        year:
            2018,

        seasonsPT:
            "5 temporadas",

        seasonsEN:
            "5 seasons",

        rating:
            4.6,

        genres: [
            "suspense",
            "crime",
            "drama"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Joe Goldberg transforma paixão em obsessão enquanto tenta controlar pessoas e esconder seus próprios crimes.",

        descriptionEN:
            "Joe Goldberg turns love into obsession while trying to control people and hide his own crimes."
    },


    {
        id:
            "lucifer",

        title:
            "Lucifer",

        query:
            "Lucifer",

        year:
            2016,

        seasonsPT:
            "6 temporadas",

        seasonsEN:
            "6 seasons",

        rating:
            4.7,

        genres: [
            "drama",
            "crime",
            "comedia"
        ],

        countryPT:
            "Estados Unidos",

        countryEN:
            "United States",

        brazil:
            false,

        featured:
            true,

        descriptionPT:
            "Lucifer Morningstar abandona o inferno, vai para Los Angeles e passa a ajudar a polícia a solucionar crimes.",

        descriptionEN:
            "Lucifer Morningstar leaves Hell, moves to Los Angeles and begins helping the police solve crimes."
    },


    {
        id:
            "sintonia",

        title:
            "Sintonia",

        query:
            "Sintonia",

        year:
            2019,

        seasonsPT:
            "5 temporadas",

        seasonsEN:
            "5 seasons",

        rating:
            4.8,

        genres: [
            "drama",
            "crime",
            "brasil"
        ],

        countryPT:
            "Brasil",

        countryEN:
            "Brazil",

        brazil:
            true,

        featured:
            false,

        descriptionPT:
            "Doni, Nando e Rita crescem juntos na periferia de São Paulo enquanto música, crime e fé mudam seus caminhos.",

        descriptionEN:
            "Doni, Nando and Rita grow up together on the outskirts of São Paulo as music, crime and faith change their paths."
    },


    {
        id:
            "dna-do-crime",

        title:
            "DNA do Crime",

        titleEN:
            "Criminal Code",

        query:
            "Criminal Code",

        year:
            2023,

        seasonsPT:
            "2 temporadas",

        seasonsEN:
            "2 seasons",

        rating:
            4.7,

        genres: [
            "crime",
            "suspense",
            "brasil"
        ],

        countryPT:
            "Brasil",

        countryEN:
            "Brazil",

        brazil:
            true,

        featured:
            false,

        descriptionPT:
            "Policiais federais usam pistas de DNA para investigar uma poderosa organização criminosa depois de um grande assalto.",

        descriptionEN:
            "Federal police use DNA evidence to investigate a powerful criminal organization after a major robbery."
    },


    {
        id:
            "bom-dia-veronica",

        title:
            "Bom Dia, Verônica",

        titleEN:
            "Good Morning, Verônica",

        query:
            "Good Morning Veronica",

        year:
            2020,

        seasonsPT:
            "3 temporadas",

        seasonsEN:
            "3 seasons",

        rating:
            4.7,

        genres: [
            "crime",
            "suspense",
            "drama",
            "brasil"
        ],

        countryPT:
            "Brasil",

        countryEN:
            "Brazil",

        brazil:
            true,

        featured:
            false,

        descriptionPT:
            "Uma escrivã da polícia investiga casos de violência e descobre uma rede de crimes muito mais perigosa do que imaginava.",

        descriptionEN:
            "A police clerk investigates cases of violence and discovers a criminal network far more dangerous than she imagined."
    },


    {
        id:
            "de-volta-aos-15",

        title:
            "De Volta aos 15",

        titleEN:
            "Back to 15",

        query:
            "Back to 15",

        year:
            2022,

        seasonsPT:
            "3 temporadas",

        seasonsEN:
            "3 seasons",

        rating:
            4.5,

        genres: [
            "comedia",
            "romance",
            "drama",
            "brasil"
        ],

        countryPT:
            "Brasil",

        countryEN:
            "Brazil",

        brazil:
            true,

        featured:
            false,

        descriptionPT:
            "Anita volta misteriosamente aos 15 anos e começa a alterar acontecimentos de seu próprio passado.",

        descriptionEN:
            "Anita mysteriously returns to age 15 and begins changing events from her own past."
    },


    {
        id:
            "pedaco-de-mim",

        title:
            "Pedaço de Mim",

        titleEN:
            "Desperate Lies",

        query:
            "Desperate Lies",

        year:
            2024,

        seasonsPT:
            "1 temporada",

        seasonsEN:
            "1 season",

        rating:
            4.5,

        genres: [
            "drama",
            "brasil"
        ],

        countryPT:
            "Brasil",

        countryEN:
            "Brazil",

        brazil:
            true,

        featured:
            false,

        descriptionPT:
            "Uma descoberta inesperada muda completamente a vida de uma mulher, seu casamento e sua família.",

        descriptionEN:
            "An unexpected discovery completely changes a woman's life, marriage and family."
    }

];


/* =========================================================
   TRADUÇÕES
========================================================= */

const translations = {

    pt: {

        loading:
            "preparando o catálogo...",

        brandSubtitle:
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
            "Sobre",

        search:
            "PESQUISAR",

        whatWatch:
            "O que vamos assistir?",

        searchPlaceholder:
            "Digite uma série...",

        details:
            "Ver detalhes",

        watchTrailer:
            "Trailer",

        favorite:
            "Favoritar",

        watchlist:
            "Minha lista",

        watched:
            "Assistidas",

        watching:
            "Assistindo",

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

        personal:
            "PESSOAL",

        myListDescription:
            "Suas séries salvas em um só lugar.",

        emptyPersonal:
            "Sua lista ainda está vazia.",

        brazilianProductions:
            "Produções brasileiras",

        brazilDescription:
            "Histórias brasileiras presentes no blog.",

        seeAll:
            "Ver todas",

        recommendation:
            "RECOMENDAÇÃO",

        findYourSeries:
            "Descubra sua próxima série",

        quizDescription:
            "Responda algumas perguntas e receba uma indicação.",

        startQuiz:
            "Fazer quiz",

        recommendForMe:
            "Recomendar para mim",

        biaRanking:
            "Ranking da Bia",

        rankingDescription:
            "As mais bem avaliadas do blog.",

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

        achievements:
            "CONQUISTAS",

        yourJourney:
            "Sua jornada",

        firstFavorite:
            "Primeira favorita",

        collector:
            "Colecionadora",

        marathoner:
            "Maratonista",

        critic:
            "Crítica",

        communityMember:
            "Comunidade",

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

        publish:
            "Publicar comentário",

        behindBlog:
            "POR TRÁS DO BLOG",

        teamTitleMain:
            "As pessoas por trás",

        teamTitleAccent:
            "do projeto.",

        teamDescription:
            "Ideia, conteúdo, desenvolvimento e design trabalhando juntos para criar o Blog da Bia.",

        creator:
            "Criadora",

        developer:
            "Desenvolvedor",

        blogCreatorRole:
            "CRIADORA DO BLOG",

        developerRole:
            "DESENVOLVEDOR",

        beatrizDescription:
            "Responsável pelas ideias, seleção de séries, conteúdo e identidade do projeto.",

        bayerleeDescription:
            "Responsável por transformar as ideias do projeto em uma experiência completa através de desenvolvimento, design e interatividade.",

        selectedSeries:
            "séries selecionadas",

        languages:
            "idiomas",

        responsive:
            "responsivo",

        mainAreas:
            "Principais áreas",

        curation:
            "Curadoria",

        content:
            "Conteúdo",

        identity:
            "Identidade",

        focus:
            "FOCO",

        project:
            "PROJETO",

        technologies:
            "Tecnologias",

        interface:
            "Interface",

        interactions:
            "Interações",

        meetCreator:
            "Conhecer a criadora",

        meetDeveloper:
            "Conhecer o desenvolvedor",

        ideaDevelopment:
            "Ideia + desenvolvimento.",

        features:
            "funções",

        yourData:
            "SEUS DADOS",

        savedInBrowser:
            "Dados salvos no navegador",

        dataDescription:
            "Favoritos, listas, avaliações e comentários ficam salvos localmente.",

        exportData:
            "Exportar dados",

        importData:
            "Importar dados",

        resetData:
            "Redefinir dados",

        footerText:
            "Um blog sobre séries.",

        createdBy:
            "Criado por",

        developedBy:
            "Desenvolvido por",

        settings:
            "CONFIGURAÇÕES",

        customize:
            "Personalizar",

        accent:
            "Estilo de cor",

        animations:
            "Animações",

        animationsDescription:
            "Transições e movimento",

        autoHero:
            "Destaque automático",

        autoHeroDescription:
            "Troca a série principal automaticamente",

        seriesDetails:
            "DETALHES DA SÉRIE",

        yourRating:
            "Sua avaliação",

        yourProgress:
            "Seu progresso",

        currentEpisode:
            "Episódio atual",

        personalNote:
            "Nota pessoal",

        save:
            "Salvar",

        cast:
            "ELENCO",

        mainCast:
            "Elenco principal",

        similar:
            "PARECIDAS",

        youMayLike:
            "Você também pode gostar",

        trailerDescription:
            "Abrir busca pelo trailer oficial.",

        searchOfficialTrailer:
            "Procurar trailer",

        readyQuiz:
            "Descubra sua próxima série",

        quizIntro:
            "Responda algumas perguntas.",

        letsGo:
            "Começar",

        howCallYou:
            "Como podemos te chamar?",

        name:
            "Nome",

        chooseAvatar:
            "Escolha um avatar",

        saveProfile:
            "Salvar perfil"

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
            "What are we watching?",

        searchPlaceholder:
            "Type a series...",

        details:
            "View details",

        watchTrailer:
            "Trailer",

        favorite:
            "Favorite",

        watchlist:
            "My list",

        watched:
            "Watched",

        watching:
            "Watching",

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

        personal:
            "PERSONAL",

        myListDescription:
            "Your saved series in one place.",

        emptyPersonal:
            "Your list is still empty.",

        brazilianProductions:
            "Brazilian productions",

        brazilDescription:
            "Brazilian stories featured on the blog.",

        seeAll:
            "See all",

        recommendation:
            "RECOMMENDATION",

        findYourSeries:
            "Find your next series",

        quizDescription:
            "Answer a few questions and get a recommendation.",

        startQuiz:
            "Take quiz",

        recommendForMe:
            "Recommend for me",

        biaRanking:
            "Bia's ranking",

        rankingDescription:
            "The highest-rated series on the blog.",

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

        achievements:
            "ACHIEVEMENTS",

        yourJourney:
            "Your journey",

        firstFavorite:
            "First favorite",

        collector:
            "Collector",

        marathoner:
            "Binge watcher",

        critic:
            "Critic",

        communityMember:
            "Community",

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

        publish:
            "Publish comment",

        behindBlog:
            "BEHIND THE BLOG",

        teamTitleMain:
            "The people behind",

        teamTitleAccent:
            "the project.",

        teamDescription:
            "Ideas, content, development and design working together to create Bia's Blog.",

        creator:
            "Creator",

        developer:
            "Developer",

        blogCreatorRole:
            "BLOG CREATOR",

        developerRole:
            "DEVELOPER",

        beatrizDescription:
            "Responsible for ideas, series selection, content and the identity of the project.",

        bayerleeDescription:
            "Responsible for transforming the project's ideas into a complete experience through development, design and interactivity.",

        selectedSeries:
            "selected series",

        languages:
            "languages",

        responsive:
            "responsive",

        mainAreas:
            "Main areas",

        curation:
            "Curation",

        content:
            "Content",

        identity:
            "Identity",

        focus:
            "FOCUS",

        project:
            "PROJECT",

        technologies:
            "Technologies",

        interface:
            "Interface",

        interactions:
            "Interactions",

        meetCreator:
            "Meet the creator",

        meetDeveloper:
            "Meet the developer",

        ideaDevelopment:
            "Idea + development.",

        features:
            "features",

        yourData:
            "YOUR DATA",

        savedInBrowser:
            "Data saved in your browser",

        dataDescription:
            "Favorites, lists, ratings and comments are stored locally.",

        exportData:
            "Export data",

        importData:
            "Import data",

        resetData:
            "Reset data",

        footerText:
            "A blog about series.",

        createdBy:
            "Created by",

        developedBy:
            "Developed by",

        settings:
            "SETTINGS",

        customize:
            "Customize",

        accent:
            "Color style",

        animations:
            "Animations",

        animationsDescription:
            "Transitions and motion",

        autoHero:
            "Automatic featured series",

        autoHeroDescription:
            "Automatically changes the main series",

        seriesDetails:
            "SERIES DETAILS",

        yourRating:
            "Your rating",

        yourProgress:
            "Your progress",

        currentEpisode:
            "Current episode",

        personalNote:
            "Personal note",

        save:
            "Save",

        cast:
            "CAST",

        mainCast:
            "Main cast",

        similar:
            "SIMILAR",

        youMayLike:
            "You may also like",

        trailerDescription:
            "Open a search for the official trailer.",

        searchOfficialTrailer:
            "Search trailer",

        readyQuiz:
            "Find your next series",

        quizIntro:
            "Answer a few questions.",

        letsGo:
            "Start",

        howCallYou:
            "What should we call you?",

        name:
            "Name",

        chooseAvatar:
            "Choose an avatar",

        saveProfile:
            "Save profile"

    }

};


/* =========================================================
   TEAM PROFILES
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
            "Criadora do Blog da Bia. Responsável pelas ideias do projeto, escolha das séries, organização do conteúdo e identidade geral do blog.",

        descriptionEN:
            "Creator of Bia's Blog. Responsible for project ideas, series selection, content organization and the overall identity of the blog.",

        tagsPT: [
            "Curadoria",
            "Conteúdo",
            "Netflix",
            "Séries",
            "Identidade"
        ],

        tagsEN: [
            "Curation",
            "Content",
            "Netflix",
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
            "Desenvolvedor do Blog da Bia. Responsável pela programação, design da interface, responsividade, animações, favoritos, avaliações, perfis, comentários e demais interações.",

        descriptionEN:
            "Developer of Bia's Blog. Responsible for programming, interface design, responsiveness, animations, favorites, ratings, profiles, comments and other interactions.",

        tagsPT: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "UI",
            "UX",
            "Responsivo"
        ],

        tagsEN: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "UI",
            "UX",
            "Responsive"
        ]

    }

};


/* =========================================================
   ESTADO PADRÃO
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

    comments:
        [],

    profile: {

        name:
            "Visitante",

        avatar:
            "B"

    }

};


/* =========================================================
   CARREGAR ESTADO
========================================================= */

function loadState() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                )
            );


        if (!saved) {

            return structuredClone(
                defaultState
            );

        }


        return {

            ...structuredClone(
                defaultState
            ),

            ...saved,

            profile: {

                ...defaultState.profile,
                ...(saved.profile || {})

            }

        };

    } catch {

        return structuredClone(
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
   ESTADO TEMPORÁRIO
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


function mediaStorageKey(id) {

    return `biaMedia_${id}`;

}


/* =========================================================
   PLACEHOLDER
========================================================= */

function createPlaceholder(
    title
) {

    const safeTitle =
        String(title)
            .replaceAll(
                "&",
                "e"
            );


    const svg =
        `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="900"
            viewBox="0 0 600 900"
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
                        stop-color="#29252f"
                    />

                    <stop
                        offset="100%"
                        stop-color="#141419"
                    />

                </linearGradient>

            </defs>

            <rect
                width="600"
                height="900"
                fill="url(#bg)"
            />

            <text
                x="300"
                y="405"
                text-anchor="middle"
                fill="#ffffff"
                font-family="Arial"
                font-size="58"
                font-weight="700"
            >
                B
            </text>

            <text
                x="300"
                y="480"
                text-anchor="middle"
                fill="#b8b5bf"
                font-family="Arial"
                font-size="25"
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
        item =>
            item.id === id
    );

}


function getSeriesTitle(
    series
) {

    if (
        state.language === "en"
        &&
        series.titleEN
    ) {

        return series.titleEN;

    }


    return series.title;

}


function getSeriesDescription(
    series
) {

    return state.language === "en"
        ? series.descriptionEN
        : series.descriptionPT;

}


function getSeriesCountry(
    series
) {

    return state.language === "en"
        ? series.countryEN
        : series.countryPT;

}


function getSeriesSeasons(
    series
) {

    return state.language === "en"
        ? series.seasonsEN
        : series.seasonsPT;

}


/* =========================================================
   GENRE
========================================================= */

function formatGenre(
    genre
) {

    const mapPT = {

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


    const mapEN = {

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
            ? mapEN
            : mapPT
    )[genre]
    ||
    genre;

}


/* =========================================================
   BUSCAR CAPA + ELENCO
========================================================= */

async function getSeriesMedia(
    series
) {

    if (
        mediaMemory.has(
            series.id
        )
    ) {

        return mediaMemory.get(
            series.id
        );

    }


    const localKey =
        mediaStorageKey(
            series.id
        );


    try {

        const saved =
            localStorage.getItem(
                localKey
            );


        if (saved) {

            const parsed =
                JSON.parse(saved);


            mediaMemory.set(
                series.id,
                parsed
            );


            return parsed;

        }

    } catch {

        /* IGNORA */

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
                "Media request failed"
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


        const cast =
            (
                result?._embedded?.cast
                ||
                []
            )
                .slice(0, 8)
                .map(
                    item => ({

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

                    })
                );


        const media = {

            poster,
            cast

        };


        mediaMemory.set(
            series.id,
            media
        );


        try {

            localStorage.setItem(
                localKey,
                JSON.stringify(media)
            );

        } catch {

            /* IGNORA CACHE */

        }


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


    if (toastIcon) {

        toastIcon.textContent =
            icon;

    }


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
   LANGUAGE
========================================================= */

function translatePage() {

    const dictionary =
        translations[
            state.language
        ];


    $$("[data-i18n]")
        .forEach(
            element => {

                const key =
                    element.dataset.i18n;


                if (
                    dictionary[key]
                    !== undefined
                ) {

                    element.textContent =
                        dictionary[key];

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
                    dictionary[key]
                    !== undefined
                ) {

                    element.placeholder =
                        dictionary[key];

                }

            }
        );


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


    populateCommentSeries();

    renderEverything();

}


function setLanguage(
    language
) {

    if (
        ![
            "pt",
            "en"
        ].includes(
            language
        )
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
        state.colorTheme
        === "default"
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
                    button.dataset
                        .themeColor
                    === state.colorTheme
                );

            }
        );

}


/* =========================================================
   ANIMAÇÕES
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
   FAVORITO
========================================================= */

function toggleFavorite(id) {

    state.favorites =
        toggleArrayItem(
            state.favorites,
            id
        );


    saveState();

    refreshAfterUserChange();


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

    refreshAfterUserChange();


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

    refreshAfterUserChange();


    showToast(
        turningOn
            ? (
                state.language === "en"
                    ? "Marked as watching"
                    : "Marcada como assistindo"
            )
            : (
                state.language === "en"
                    ? "Removed from watching"
                    : "Removida de assistindo"
            )
    );

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
            state.progress[id]
            === 100
        ) {

            state.progress[id] =
                0;

        }

    }


    saveState();

    refreshAfterUserChange();


    showToast(
        turningOn
            ? (
                state.language === "en"
                    ? "Marked as watched"
                    : "Marcada como assistida"
            )
            : (
                state.language === "en"
                    ? "Removed from watched"
                    : "Removida das assistidas"
            )
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
                            index
                            === heroIndex
                                ? "active"
                                : ""
                        }"
                        data-hero-index="${index}"
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
        getSeriesTitle(
            series
        );


    heroRating.textContent =
        `★ ${series.rating}`;


    heroYear.textContent =
        series.year;


    heroGenre.textContent =
        formatGenre(
            series.genres[0]
        );


    heroSeasons.textContent =
        getSeriesSeasons(
            series
        );


    heroDescription.textContent =
        getSeriesDescription(
            series
        );


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
        getSeriesTitle(
            series
        );


    heroBackdrop.style
        .backgroundImage =
        `url("${media.poster}")`;


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


        heroFavoriteBtn.innerHTML =
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


        heroWatchlistBtn.innerHTML =
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
   HERO TIMER
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
                        .contains(
                            "open"
                        )
                    ||
                    searchOverlay
                        ?.classList
                        .contains(
                            "open"
                        )
                ) {

                    return;

                }


                heroIndex =
                    (
                        heroIndex
                        + 1
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
                            getSeriesTitle(item),
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
            ratingFilter
                ?.value
            ||
            0
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
        statusFilter
            ?.value
        ||
        "all";


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


    const sorting =
        seriesSort
            ?.value
        ||
        "featured";


    switch (sorting) {

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

function seriesCardHTML(
    series,
    imageAttribute =
        "data-series-image"
) {

    const watched =
        isWatched(
            series.id
        );


    const watching =
        isWatching(
            series.id
        );


    return `
        <article
            class="series-card"
            data-series-card="${series.id}"
        >

            <div
                class="series-poster"
            >

                <img
                    ${imageAttribute}="${series.id}"
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
                        watching
                            ? `
                                <span>
                                    ${
                                        state.language === "en"
                                            ? "Watching"
                                            : "Assistindo"
                                    }
                                </span>
                            `
                            : ""
                    }

                    ${
                        watched
                            ? `
                                <span>
                                    ${
                                        state.language === "en"
                                            ? "Watched"
                                            : "Assistida"
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
   LOAD IMAGES
========================================================= */

async function loadImagesForList(
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


                if (!image) {
                    return;
                }


                image.classList.add(
                    "loading-image"
                );


                const media =
                    await getSeriesMedia(
                        series
                    );


                image.src =
                    media.poster;


                image.onload =
                    () => {

                        image.classList.remove(
                            "loading-image"
                        );

                    };


                image.onerror =
                    () => {

                        image.src =
                            createPlaceholder(
                                getSeriesTitle(
                                    series
                                )
                            );


                        image.classList.remove(
                            "loading-image"
                        );

                    };

            }
        );


    await Promise.allSettled(
        promises
    );

}


/* =========================================================
   RENDER SERIES
========================================================= */

async function renderSeries() {

    if (
        !seriesGrid
    ) {
        return;
    }


    const list =
        getFilteredSeries();


    seriesGrid.innerHTML =
        list
            .map(
                item =>
                    seriesCardHTML(
                        item
                    )
            )
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
   MINHA LISTA
========================================================= */

function getPersonalSeries() {

    switch (
        personalTab
    ) {

        case "favorites":

            return seriesData
                .filter(
                    item =>
                        isFavorite(
                            item.id
                        )
                );


        case "watching":

            return seriesData
                .filter(
                    item =>
                        isWatching(
                            item.id
                        )
                );


        case "watched":

            return seriesData
                .filter(
                    item =>
                        isWatched(
                            item.id
                        )
                );


        case "watchlist":
        default:

            return seriesData
                .filter(
                    item =>
                        isWatchlisted(
                            item.id
                        )
                );

    }

}


async function renderPersonalList() {

    if (
        !personalGrid
    ) {
        return;
    }


    const list =
        getPersonalSeries();


    personalGrid.innerHTML =
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
                            class="personal-card"
                            data-open-series="${item.id}"
                            type="button"
                        >

                            <img
                                data-personal-image="${item.id}"
                                src="${
                                    createPlaceholder(
                                        getSeriesTitle(
                                            item
                                        )
                                    )
                                }"
                                alt="${
                                    escapeHTML(
                                        getSeriesTitle(
                                            item
                                        )
                                    )
                                }"
                            >


                            <div
                                class="personal-content"
                            >

                                <strong>
                                    ${
                                        escapeHTML(
                                            getSeriesTitle(
                                                item
                                            )
                                        )
                                    }
                                </strong>

                                <small>
                                    ${
                                        progress > 0
                                            ? `${progress}%`
                                            : (
                                                state.language === "en"
                                                    ? "View details"
                                                    : "Ver detalhes"
                                            )
                                    }
                                </small>

                            </div>

                        </button>
                    `;

                }
            )
            .join("");


    if (
        personalEmpty
    ) {

        personalEmpty.style.display =
            list.length
                ? "none"
                : "";

    }


    await loadImagesForList(
        list,
        "data-personal-image"
    );

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
        .classList
        .toggle(
            "show",
            list.length > 0
        );


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
                                        getSeriesTitle(
                                            item
                                        )
                                    )
                                }"
                                alt="${
                                    escapeHTML(
                                        getSeriesTitle(
                                            item
                                        )
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
                                                item
                                            )
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
   HISTÓRICO
========================================================= */

function addToHistory(id) {

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
        !historySection
        ||
        !historyGrid
    ) {
        return;
    }


    const list =
        state.history
            .map(
                id =>
                    getSeries(id)
            )
            .filter(Boolean);


    historySection
        .classList
        .toggle(
            "show",
            list.length > 0
        );


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
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                        >


                        <div
                            class="history-content"
                        >

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            item
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    state.language === "en"
                                        ? "Viewed"
                                        : "Visualizada"
                                }
                            </small>

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
   BRASIL
========================================================= */

async function renderBrazil() {

    if (
        !brazilCarousel
    ) {
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
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
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
                                            item
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${item.year}
                                · ★ ${item.rating}
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

    if (
        !rankingList
    ) {
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
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
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
                                            item
                                        )
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


                        <span
                            class="ranking-score"
                        >
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
   SÉRIE DO DIA
========================================================= */

function getDailySeries() {

    const date =
        new Date();


    const seed =
        Number(
            `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`
        );


    return seriesData[
        seed
        %
        seriesData.length
    ];

}


async function renderDailySeries() {

    const series =
        getDailySeries();


    dailyTitle.textContent =
        getSeriesTitle(
            series
        );


    dailyDescription.textContent =
        getSeriesDescription(
            series
        );


    const media =
        await getSeriesMedia(
            series
        );


    dailyImage.src =
        media.poster;


    dailyImage.alt =
        getSeriesTitle(
            series
        );

}


/* =========================================================
   USER STATS
========================================================= */

function getFavoriteGenre() {

    const counts = {};


    const relevantIds =
        [
            ...state.favorites,
            ...state.watched,
            ...state.watching
        ];


    relevantIds
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


    const sorted =
        Object.entries(
            counts
        )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[1]
                    -
                    a[1]
            );


    return sorted[0]?.[0]
        ||
        null;

}


function updateUserStats() {

    const favoriteGenre =
        getFavoriteGenre();


    favoriteGenreStat.textContent =
        favoriteGenre
            ? formatGenre(
                favoriteGenre
            )
            : "—";


    const completion =
        Math.round(
            (
                state.watched.length
                /
                seriesData.length
            )
            *
            100
        );


    completionStat.textContent =
        `${completion}%`;


    const ratingValues =
        Object.values(
            state.ratings
        )
            .map(Number)
            .filter(
                value =>
                    value > 0
            );


    if (
        ratingValues.length
    ) {

        const average =
            ratingValues.reduce(
                (
                    total,
                    value
                ) =>
                    total + value,
                0
            )
            /
            ratingValues.length;


        averageRatingStat.textContent =
            `${average.toFixed(1)}/5`;

    } else {

        averageRatingStat.textContent =
            "—";

    }


    const brazilWatched =
        seriesData.filter(
            item =>
                item.brazil
                &&
                isWatched(
                    item.id
                )
        ).length;


    brazilWatchedStat.textContent =
        brazilWatched;

}


/* =========================================================
   XP
========================================================= */

function calculateXP() {

    return (
        state.favorites.length * 8
        +
        state.watchlist.length * 5
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


    const current =
        xp % 100;


    levelNumber.textContent =
        level;


    levelProgress.style.width =
        `${current}%`;


    levelText.textContent =
        `${current} / 100 XP`;


    if (
        state.language === "en"
    ) {

        profileLevelText.textContent =
            level < 3
                ? "Beginner binge watcher"
                : level < 6
                    ? "Series lover"
                    : "Series expert";

    } else {

        profileLevelText.textContent =
            level < 3
                ? "Maratonista iniciante"
                : level < 6
                    ? "Apaixonada por séries"
                    : "Expert em séries";

    }


    updateAchievements();

    updateUserStats();

}


/* =========================================================
   CONQUISTAS
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
   ABRIR SÉRIE
========================================================= */

async function openSeries(id) {

    const series =
        getSeries(id);


    if (!series) {
        return;
    }


    activeSeriesId =
        id;


    addToHistory(
        id
    );


    modalTitle.textContent =
        getSeriesTitle(
            series
        );


    modalRating.textContent =
        `★ ${series.rating}`;


    modalYear.textContent =
        series.year;


    modalGenre.textContent =
        formatGenre(
            series.genres[0]
        );


    modalSeasons.textContent =
        getSeriesSeasons(
            series
        );


    modalDescription.textContent =
        getSeriesDescription(
            series
        );


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


    modalPoster.alt =
        getSeriesTitle(
            series
        );


    modalBackdrop.style
        .backgroundImage =
        `url("${media.poster}")`;


    renderCast(
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

    if (
        !modalFavoriteBtn
    ) {
        return;
    }


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


    modalFavoriteBtn.innerHTML =
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


    modalWatchlistBtn.innerHTML =
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


    modalWatchingBtn.innerHTML =
        isWatching(id)
            ? (
                state.language === "en"
                    ? "■ Watching"
                    : "■ Assistindo"
            )
            : (
                state.language === "en"
                    ? "▶ Watching"
                    : "▶ Assistindo"
            );


    modalWatchedBtn.innerHTML =
        isWatched(id)
            ? (
                state.language === "en"
                    ? "✓ Watched"
                    : "✓ Assistida"
            )
            : (
                state.language === "en"
                    ? "✓ Mark watched"
                    : "✓ Marcar assistida"
            );

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function closeSeriesModal() {

    seriesModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


/* =========================================================
   CAST
========================================================= */

function renderCast(cast) {

    if (
        !castGrid
    ) {
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
                    font-size:.6rem;
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

    let related =
        seriesData.filter(
            item =>
                item.id
                !== current.id
                &&
                item.genres.some(
                    genre =>
                        current.genres
                            .includes(
                                genre
                            )
                        &&
                        genre !== "brasil"
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
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                        >

                        <span>
                            ${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
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
        Number(
            rating
        );


    saveState();

    renderStars(id);

    updateStats();


    showToast(
        state.language === "en"
            ? `Rating: ${rating}/5`
            : `Sua nota: ${rating}/5`,
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

    refreshAfterUserChange();

}


/* =========================================================
   EPISÓDIO + NOTA
========================================================= */

function saveSeriesInfo() {

    const episode =
        Math.max(
            1,
            Number(
                currentEpisodeInput.value
            )
            ||
            1
        );


    const note =
        personalNoteInput
            .value
            .trim();


    state.episodes[
        activeSeriesId
    ] =
        episode;


    state.notes[
        activeSeriesId
    ] =
        note;


    saveState();


    showToast(
        state.language === "en"
            ? "Series info saved"
            : "Informações salvas"
    );

}


/* =========================================================
   TRAILER
========================================================= */

function openTrailer(
    series
) {

    if (!series) {
        return;
    }


    currentTrailerSeries =
        series;


    trailerTitle.textContent =
        `${getSeriesTitle(series)} — Trailer`;


    trailerModal.classList.add(
        "open"
    );


    body.style.overflow =
        "hidden";

}


function closeTrailerModal() {

    trailerModal
        ?.classList
        .remove(
            "open"
        );


    body.style.overflow =
        "";

}


function openTrailerSearch() {

    if (
        !currentTrailerSeries
    ) {
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


    const list =
        seriesData
            .filter(
                item => {

                    if (!query) {
                        return true;
                    }


                    const text =
                        [
                            item.title,
                            item.titleEN || "",
                            getSeriesTitle(item),
                            getSeriesDescription(item),
                            getSeriesCountry(item),
                            ...item.genres
                        ]
                            .join(" ")
                            .toLowerCase();


                    return text
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
                    padding:28px;
                    text-align:center;
                    color:var(--text-soft);
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
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                            alt="${
                                escapeHTML(
                                    getSeriesTitle(
                                        item
                                    )
                                )
                            }"
                        >


                        <span>

                            <strong>
                                ${
                                    escapeHTML(
                                        getSeriesTitle(
                                            item
                                        )
                                    )
                                }
                            </strong>

                            <small>
                                ${
                                    formatGenre(
                                        item.genres[0]
                                    )
                                }
                                · ${item.year}
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
   SMART RECOMMENDATION
========================================================= */

function getSmartRecommendation() {

    const favoriteGenre =
        getFavoriteGenre();


    let candidates =
        seriesData.filter(
            item =>
                !isWatched(
                    item.id
                )
        );


    if (
        favoriteGenre
    ) {

        const genreMatches =
            candidates.filter(
                item =>
                    item.genres
                        .includes(
                            favoriteGenre
                        )
            );


        if (
            genreMatches.length
        ) {

            candidates =
                genreMatches;

        }

    }


    const notSaved =
        candidates.filter(
            item =>
                !isFavorite(
                    item.id
                )
                &&
                !isWatchlisted(
                    item.id
                )
        );


    if (
        notSaved.length
    ) {

        candidates =
            notSaved;

    }


    candidates.sort(
        (
            a,
            b
        ) =>
            b.rating
            -
            a.rating
    );


    const bestPool =
        candidates.slice(
            0,
            Math.min(
                4,
                candidates.length
            )
        );


    return (
        randomItem(
            bestPool
        )
        ||
        randomItem(
            seriesData
        )
    );

}


function smartRecommend() {

    const series =
        getSmartRecommendation();


    if (!series) {
        return;
    }


    showToast(
        state.language === "en"
            ? `Recommendation: ${getSeriesTitle(series)}`
            : `Recomendação: ${getSeriesTitle(series)}`,
        "★"
    );


    openSeries(
        series.id
    );

}


/* =========================================================
   RANDOM
========================================================= */

function randomSeries() {

    const candidates =
        seriesData.filter(
            item =>
                item.id
                !== activeSeriesId
        );


    const series =
        randomItem(
            candidates
        )
        ||
        randomItem(
            seriesData
        );


    if (!series) {
        return;
    }


    showToast(
        state.language === "en"
            ? `Random pick: ${getSeriesTitle(series)}`
            : `Série sorteada: ${getSeriesTitle(series)}`
    );


    openSeries(
        series.id
    );

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


    const title =
        getSeriesTitle(
            series
        );


    try {

        await navigator.clipboard
            .writeText(
                title
            );


        showToast(
            state.language === "en"
                ? "Title copied"
                : "Título copiado"
        );

    } catch {

        showToast(
            title
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


    const data = {

        title:
            getSeriesTitle(
                series
            ),

        text:
            `${getSeriesTitle(series)} — Blog da Bia`,

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
                    `${data.text} ${data.url}`
                );


            showToast(
                state.language === "en"
                    ? "Series link copied"
                    : "Link da série copiado"
            );

        }

    } catch {

        /* CANCELADO */

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
                        ? "Check out this series blog."
                        : "Confira este blog de séries.",

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
                    ? "Blog link copied"
                    : "Link do blog copiado"
            );

        }

    } catch {

        /* CANCELADO */

    }

}


/* =========================================================
   COMMENTS OPTIONS
========================================================= */

function populateCommentSeries() {

    if (
        !commentSeries
    ) {
        return;
    }


    const currentValue =
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
                                getSeriesTitle(
                                    item
                                )
                            )
                        }
                    </option>
                `
            )
            .join("");


    if (
        getSeries(
            currentValue
        )
    ) {

        commentSeries.value =
            currentValue;

    }

}


/* =========================================================
   ADD COMMENT
========================================================= */

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

        replies:
            [],

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
        state.language === "en"
            ? "Comment published"
            : "Comentário publicado"
    );

}


/* =========================================================
   DATE
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
   COMMENTS
========================================================= */

function renderComments() {

    if (
        !commentsList
    ) {
        return;
    }


    let list =
        [...state.comments];


    switch (
        commentSort?.value
    ) {

        case "likes":

            list.sort(
                (
                    a,
                    b
                ) =>
                    b.likes
                    -
                    a.likes
            );

            break;


        case "old":

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

            break;


        default:

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


                                ${
                                    series
                                        ? `
                                            <span
                                                class="comment-series-badge"
                                            >
                                                ${
                                                    escapeHTML(
                                                        getSeriesTitle(
                                                            series
                                                        )
                                                    )
                                                }
                                            </span>
                                        `
                                        : ""
                                }

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


                            ${
                                comment.spoiler
                                    ? `
                                        <button
                                            class="spoiler-button"
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
                                class="comment-actions"
                            >

                                <button
                                    class="${
                                        comment.liked
                                            ? "active"
                                            : ""
                                    }"
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
                                    data-reply-comment="${comment.id}"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "Reply"
                                            : "Responder"
                                    }
                                </button>


                                <button
                                    data-edit-comment="${comment.id}"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "Edit"
                                            : "Editar"
                                    }
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


                            <div
                                class="comment-reply-box"
                                data-reply-box="${comment.id}"
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
                                    data-send-reply="${comment.id}"
                                    type="button"
                                >
                                    ${
                                        state.language === "en"
                                            ? "Send"
                                            : "Enviar"
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
   COMMENT ACTIONS
========================================================= */

function findComment(id) {

    return state.comments.find(
        comment =>
            comment.id
            === Number(id)
    );

}


function toggleCommentLike(id) {

    const comment =
        findComment(id);


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


function editComment(id) {

    const comment =
        findComment(id);


    if (!comment) {
        return;
    }


    const edited =
        prompt(
            state.language === "en"
                ? "Edit your comment:"
                : "Edite seu comentário:",
            comment.text
        );


    if (
        edited === null
    ) {
        return;
    }


    const text =
        edited.trim();


    if (!text) {
        return;
    }


    comment.text =
        text;


    saveState();

    renderComments();


    showToast(
        state.language === "en"
            ? "Comment edited"
            : "Comentário editado"
    );

}


function sendReply(id) {

    const comment =
        findComment(id);


    const box =
        document.querySelector(
            `[data-reply-box="${id}"]`
        );


    if (
        !comment
        ||
        !box
    ) {
        return;
    }


    const input =
        $("input", box);


    const text =
        input.value
            .trim();


    if (!text) {
        return;
    }


    comment.replies =
        comment.replies
        ||
        [];


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
            ? "Reply published"
            : "Resposta publicada"
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


    profileModal.classList.add(
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
        profileNameInput.value
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

function openTeamProfile(
    profileId
) {

    const profile =
        teamProfiles[
            profileId
        ];


    if (
        !profile
        ||
        !teamProfileModal
    ) {
        return;
    }


    teamModalImage.src =
        profile.image;


    teamModalImage.alt =
        profile.name;


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
   QUIZ DATA
========================================================= */

const quizQuestions = [

    {

        pt:
            "Que tipo de história você quer assistir?",

        en:
            "What kind of story do you want to watch?",

        options: [

            {

                pt:
                    "Romance",

                en:
                    "Romance",

                genre:
                    "romance"

            },

            {

                pt:
                    "Mistério",

                en:
                    "Mystery",

                genre:
                    "misterio"

            },

            {

                pt:
                    "Suspense",

                en:
                    "Thriller",

                genre:
                    "suspense"

            },

            {

                pt:
                    "Drama",

                en:
                    "Drama",

                genre:
                    "drama"

            }

        ]

    },


    {

        pt:
            "Qual dessas opções combina mais com você?",

        en:
            "Which option sounds best to you?",

        options: [

            {

                pt:
                    "Relacionamentos",

                en:
                    "Relationships",

                genre:
                    "romance"

            },

            {

                pt:
                    "Crimes e investigação",

                en:
                    "Crime and investigation",

                genre:
                    "crime"

            },

            {

                pt:
                    "Algo divertido",

                en:
                    "Something fun",

                genre:
                    "comedia"

            },

            {

                pt:
                    "Uma história intensa",

                en:
                    "An intense story",

                genre:
                    "drama"

            }

        ]

    },


    {

        pt:
            "Quer uma série brasileira?",

        en:
            "Would you like a Brazilian series?",

        options: [

            {

                pt:
                    "Sim",

                en:
                    "Yes",

                brazil:
                    true

            },

            {

                pt:
                    "Tanto faz",

                en:
                    "Either",

                brazil:
                    null

            }

        ]

    }

];


/* =========================================================
   QUIZ
========================================================= */

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


    renderQuizStart();

}


function renderQuizStart() {

    quizProgress.style.width =
        "0%";


    quizContent.innerHTML =
        `
        <span
            class="simple-modal-label"
        >
            QUIZ
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
            id="dynamicQuizStart"
            class="primary-btn"
            type="button"
        >
            ${
                translations[
                    state.language
                ].letsGo
            }
        </button>
        `;


    $("#dynamicQuizStart")
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

    const genreCounts = {};


    let brazil =
        null;


    quizAnswers
        .forEach(
            answer => {

                if (
                    answer.genre
                ) {

                    genreCounts[
                        answer.genre
                    ] =
                        (
                            genreCounts[
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


    const favoriteGenre =
        Object.entries(
            genreCounts
        )
            .sort(
                (
                    a,
                    b
                ) =>
                    b[1]
                    -
                    a[1]
            )[0]?.[0];


    let candidates =
        seriesData.filter(
            item =>
                !favoriteGenre
                ||
                item.genres
                    .includes(
                        favoriteGenre
                    )
        );


    if (
        brazil === true
    ) {

        const brazilMatches =
            candidates.filter(
                item =>
                    item.brazil
            );


        if (
            brazilMatches.length
        ) {

            candidates =
                brazilMatches;

        }

    }


    candidates =
        candidates.filter(
            item =>
                !isWatched(
                    item.id
                )
        );


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
   EXPORT
========================================================= */

function exportData() {

    const data =
        JSON.stringify(
            state,
            null,
            2
        );


    const blob =
        new Blob(
            [data],
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


    document.body
        .appendChild(
            link
        );


    link.click();


    link.remove();


    URL.revokeObjectURL(
        url
    );


    showToast(
        state.language === "en"
            ? "Data exported"
            : "Dados exportados"
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
                        event.target
                            .result
                    );


                if (
                    typeof imported
                    !== "object"
                    ||
                    !imported
                ) {

                    throw new Error(
                        "Invalid"
                    );

                }


                state = {

                    ...structuredClone(
                        defaultState
                    ),

                    ...imported,

                    profile: {

                        ...defaultState.profile,
                        ...(
                            imported.profile
                            ||
                            {}
                        )

                    }

                };


                saveState();


                applyTheme();

                applyColorTheme();

                applyAnimationSetting();

                translatePage();


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
                ? "Delete all saved blog data?"
                : "Apagar todos os dados salvos do blog?"
        );


    if (!confirmed) {
        return;
    }


    const preserved = {

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

        ...structuredClone(
            defaultState
        ),

        ...preserved,

        profile: {

            ...defaultState.profile

        }

    };


    saveState();


    translatePage();

    applyTheme();

    applyColorTheme();

    applyAnimationSetting();


    showToast(
        state.language === "en"
            ? "Data reset"
            : "Dados redefinidos"
    );

}


/* =========================================================
   MOBILE
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
   SETTINGS
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
                ? (
                    current
                    /
                    maximum
                )
                *
                100
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
   NAV ATIVA
========================================================= */

function updateActiveNav() {

    const sections = [
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


    for (
        const id
        of sections
    ) {

        const section =
            document.getElementById(
                id
            );


        if (!section) {
            continue;
        }


        const rect =
            section
                .getBoundingClientRect();


        if (
            rect.top <= 170
        ) {

            active =
                id;

        }

    }


    $$(".desktop-nav a")
        .forEach(
            link => {

                link.classList.toggle(
                    "active",
                    link.getAttribute(
                        "href"
                    )
                    === `#${active}`
                );

            }
        );

}


/* =========================================================
   HERO TILT
========================================================= */

function setupHeroTilt() {

    if (
        !heroPosterCard
    ) {
        return;
    }


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
                    x
                    /
                    rect.width
                    -
                    0.5
                )
                *
                7;


            const rotateX =
                (
                    0.5
                    -
                    y
                    /
                    rect.height
                )
                *
                7;


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
   TEAM CARD 3D
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
                                x
                                /
                                rect.width
                                -
                                0.5
                            )
                            *
                            3;


                        const rotateX =
                            (
                                0.5
                                -
                                y
                                /
                                rect.height
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
        !("IntersectionObserver" in window)
    ) {

        $$(".reveal")
            .forEach(
                element => {

                    element.classList.add(
                        "visible"
                    );

                }
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
                    0.12
            }
        );


    $$(".reveal")
        .forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

}


/* =========================================================
   REFRESH
========================================================= */

function refreshAfterUserChange() {

    saveState();

    updateStats();

    updateHeroButtons(
        activeSeriesId
    );

    updateModalControls(
        activeSeriesId
    );

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


    const projectCount =
        $("#projectSeriesCount");


    if (
        projectCount
    ) {

        projectCount.textContent =
            seriesData.length;

    }

}


/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const openSeriesButton =
            event.target.closest(
                "[data-open-series]"
            );


        if (
            openSeriesButton
        ) {

            openSeries(
                openSeriesButton
                    .dataset
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


        const favoriteButton =
            event.target.closest(
                "[data-toggle-favorite]"
            );


        if (
            favoriteButton
        ) {

            event.stopPropagation();


            toggleFavorite(
                favoriteButton
                    .dataset
                    .toggleFavorite
            );


            return;

        }


        const searchItem =
            event.target.closest(
                "[data-search-series]"
            );


        if (
            searchItem
        ) {

            closeSearch();


            openSeries(
                searchItem
                    .dataset
                    .searchSeries
            );


            return;

        }


        const teamButton =
            event.target.closest(
                "[data-open-team-profile]"
            );


        if (
            teamButton
        ) {

            openTeamProfile(
                teamButton
                    .dataset
                    .openTeamProfile
            );


            return;

        }


        const spoilerButton =
            event.target.closest(
                "[data-show-spoiler]"
            );


        if (
            spoilerButton
        ) {

            const id =
                spoilerButton
                    .dataset
                    .showSpoiler;


            const text =
                document.querySelector(
                    `[data-comment-text="${id}"]`
                );


            text?.classList.toggle(
                "revealed"
            );


            spoilerButton.textContent =
                text?.classList
                    .contains(
                        "revealed"
                    )
                    ? (
                        state.language === "en"
                            ? "Hide spoiler"
                            : "Ocultar spoiler"
                    )
                    : (
                        state.language === "en"
                            ? "Show spoiler"
                            : "Mostrar spoiler"
                    );


            return;

        }


        const likeComment =
            event.target.closest(
                "[data-like-comment]"
            );


        if (
            likeComment
        ) {

            toggleCommentLike(
                likeComment
                    .dataset
                    .likeComment
            );


            return;

        }


        const replyButton =
            event.target.closest(
                "[data-reply-comment]"
            );


        if (
            replyButton
        ) {

            const id =
                replyButton
                    .dataset
                    .replyComment;


            document
                .querySelector(
                    `[data-reply-box="${id}"]`
                )
                ?.classList
                .toggle(
                    "open"
                );


            return;

        }


        const sendReplyButton =
            event.target.closest(
                "[data-send-reply]"
            );


        if (
            sendReplyButton
        ) {

            sendReply(
                sendReplyButton
                    .dataset
                    .sendReply
            );


            return;

        }


        const editButton =
            event.target.closest(
                "[data-edit-comment]"
            );


        if (
            editButton
        ) {

            editComment(
                editButton
                    .dataset
                    .editComment
            );


            return;

        }


        const deleteButton =
            event.target.closest(
                "[data-delete-comment]"
            );


        if (
            deleteButton
        ) {

            deleteComment(
                deleteButton
                    .dataset
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
        setLanguage(
            "pt"
        )
);


langEN?.addEventListener(
    "click",
    () =>
        setLanguage(
            "en"
        )
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


$$(
    "#mobileMenu a"
)
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

        const dot =
            event.target.closest(
                "[data-hero-index]"
            );


        if (!dot) {
            return;
        }


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
   CATALOG EVENTS
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
                        button.dataset
                            .filter
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

        const series =
            getDailySeries();


        openSeries(
            series.id
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


        showToast(
            state.language === "en"
                ? "History cleared"
                : "Histórico limpo"
        );

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
    () => {

        openTrailer(
            getSeries(
                activeSeriesId
            )
        );

    }
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
            event.target
            === trailerModal
        ) {

            closeTrailerModal();

        }

    }
);


openYoutubeTrailer?.addEventListener(
    "click",
    openTrailerSearch
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
                        button.dataset.themeColor;


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


        showToast(
            state.language === "en"
                ? (
                    state.autoHero
                        ? "Automatic featured series enabled"
                        : "Automatic featured series disabled"
                )
                : (
                    state.autoHero
                        ? "Destaque automático ativado"
                        : "Destaque automático desativado"
                )
        );

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
    () => {

        importDataInput.click();

    }
);


importDataInput?.addEventListener(
    "change",
    () => {

        const file =
            importDataInput
                .files?.[0];


        if (
            file
        ) {

            importData(
                file
            );

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
   SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive:
            true
    }
);


backTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:
                0,

            behavior:
                state.animations
                    ? "smooth"
                    : "auto"

        });

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

        const activeTag =
            document.activeElement
                ?.tagName;


        const typing =
            [
                "INPUT",
                "TEXTAREA",
                "SELECT"
            ]
                .includes(
                    activeTag
                );


        if (
            event.key === "Escape"
        ) {

            closeSearch();

            closeSeriesModal();

            closeTrailerModal();

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
   VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            !document.hidden
            &&
            state.autoHero
        ) {

            startHeroTimer();

        }

    }
);


/* =========================================================
   LOAD
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
            500
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


    if (
        currentYear
    ) {

        currentYear.textContent =
            new Date()
                .getFullYear();

    }


    applyTheme();

    applyColorTheme();

    applyAnimationSetting();

    renderProfile();

    populateCommentSeries();

    translatePage();

    setupHeroTilt();

    setupTeamCards();

    setupRevealAnimations();

    handleScroll();

    startHeroTimer();

}


/* =========================================================
   START
========================================================= */

init();