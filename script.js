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

const safeJSON = (value, fallback) => {
    try {
        return JSON.parse(value) ?? fallback;
    } catch {
        return fallback;
    }
};

const storage = {
    get(key, fallback = null) {
        const value = localStorage.getItem(key);

        if (value === null) {
            return fallback;
        }

        return safeJSON(value, fallback);
    },

    set(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }
};


/* =========================================================
   ESTADO
========================================================= */

const state = {
    language:
        storage.get("bia_language", "pt"),

    theme:
        storage.get("bia_theme", "bia"),

    darkMode:
        storage.get("bia_dark", false),

    animations:
        storage.get("bia_animations", true),

    particles:
        storage.get("bia_particles", true),

    cursor:
        storage.get("bia_cursor", true),

    favorites:
        storage.get("bia_favorites", []),

    watchlist:
        storage.get("bia_watchlist", []),

    watched:
        storage.get("bia_watched", []),

    likes:
        storage.get("bia_likes", []),

    ratings:
        storage.get("bia_ratings", {}),

    progress:
        storage.get("bia_progress", {}),

    comments:
        storage.get("bia_comments", []),

    profile:
        storage.get(
            "bia_profile",
            {
                name: "Visitante",
                avatar: "💜"
            }
        ),

    currentSeries: null,

    currentFilter: "all",

    currentSearch: "",

    sort: "featured",

    year: "all",

    ratingFilter: "all",

    heroIndex: 0,

    heroTimer: null,

    quizIndex: 0,

    quizAnswers: []
};


/* =========================================================
   TRADUÇÕES
========================================================= */

const translations = {
    pt: {
        home: "Início",
        series: "Séries",
        brazil: "Brasil",
        ranking: "Ranking",
        community: "Comunidade",
        team: "Equipe",

        search: "Pesquisar",
        favorites: "Favoritos",
        settings: "Configurações",

        watchNow: "Conhecer série",
        trailer: "Trailer",
        addList: "Minha lista",
        removeList: "Remover da lista",

        catalogTitle: "Explore as séries",
        catalogText:
            "Descubra romances, dramas, mistérios e histórias inesquecíveis disponíveis na Netflix.",

        brazilTitle:
            "Produções brasileiras",

        brazilText:
            "Séries brasileiras que conquistaram espaço na Netflix.",

        rankingTitle:
            "As favoritas do blog",

        rankingText:
            "Um ranking baseado nas avaliações e destaques do Blog da Bia.",

        communityTitle:
            "Comunidade",

        communityText:
            "Comente, curta e compartilhe sua opinião sobre suas séries favoritas.",

        teamTitle:
            "Quem faz acontecer",

        creator:
            "Criadora do blog",

        developer:
            "Desenvolvedor",

        comments:
            "Comentários",

        noResults:
            "Nenhuma série encontrada.",

        searchPlaceholder:
            "Digite o nome de uma série...",

        saved:
            "Salvo!",

        removed:
            "Removido!",

        favoriteAdded:
            "Adicionado aos favoritos 💗",

        favoriteRemoved:
            "Removido dos favoritos.",

        listAdded:
            "Adicionado à sua lista.",

        listRemoved:
            "Removido da sua lista.",

        watchedAdded:
            "Marcado como assistido.",

        commentPublished:
            "Comentário publicado!",

        copied:
            "Link copiado!",

        profileSaved:
            "Perfil atualizado!",

        dataCleared:
            "Dados locais apagados.",

        random:
            "Série sorteada!",

        daily:
            "Série do dia",

        recommendation:
            "Recomendação especial para hoje.",

        cast:
            "Elenco principal",

        recommendations:
            "Você também pode gostar",

        yourRating:
            "Sua avaliação",

        progress:
            "Progresso",

        seasons:
            "temporadas",

        episodes:
            "episódios",

        year:
            "Ano",

        country:
            "País",

        genre:
            "Gênero",

        close:
            "Fechar"
    },

    en: {
        home: "Home",
        series: "Series",
        brazil: "Brazil",
        ranking: "Ranking",
        community: "Community",
        team: "Team",

        search: "Search",
        favorites: "Favorites",
        settings: "Settings",

        watchNow: "Discover series",
        trailer: "Trailer",
        addList: "My list",
        removeList: "Remove from list",

        catalogTitle: "Explore series",
        catalogText:
            "Discover romances, dramas, mysteries and unforgettable stories available on Netflix.",

        brazilTitle:
            "Brazilian productions",

        brazilText:
            "Brazilian series that found their audience on Netflix.",

        rankingTitle:
            "Blog favorites",

        rankingText:
            "A ranking based on ratings and highlights from Bia's Blog.",

        communityTitle:
            "Community",

        communityText:
            "Comment, like and share your opinion about your favorite series.",

        teamTitle:
            "Meet the team",

        creator:
            "Blog creator",

        developer:
            "Developer",

        comments:
            "Comments",

        noResults:
            "No series found.",

        searchPlaceholder:
            "Type a series name...",

        saved:
            "Saved!",

        removed:
            "Removed!",

        favoriteAdded:
            "Added to favorites 💗",

        favoriteRemoved:
            "Removed from favorites.",

        listAdded:
            "Added to your list.",

        listRemoved:
            "Removed from your list.",

        watchedAdded:
            "Marked as watched.",

        commentPublished:
            "Comment published!",

        copied:
            "Link copied!",

        profileSaved:
            "Profile updated!",

        dataCleared:
            "Local data cleared.",

        random:
            "Random series selected!",

        daily:
            "Series of the day",

        recommendation:
            "A special recommendation for today.",

        cast:
            "Main cast",

        recommendations:
            "You may also like",

        yourRating:
            "Your rating",

        progress:
            "Progress",

        seasons:
            "seasons",

        episodes:
            "episodes",

        year:
            "Year",

        country:
            "Country",

        genre:
            "Genre",

        close:
            "Close"
    }
};

const t = key =>
    translations[state.language]?.[key]
    ?? translations.pt[key]
    ?? key;


/* =========================================================
   BANCO DE SÉRIES
========================================================= */

const series = [

    {
        id: "stranger-things",
        title: "Stranger Things",
        year: 2016,
        genre: "Mistério",
        country: "Estados Unidos",
        rating: 9.1,
        seasons: 4,
        episodes: 34,
        poster: "stranger-things.jpg",
        backdrop: "stranger-things-bg.jpg",
        descriptionPT:
            "Em Hawkins, acontecimentos sobrenaturais, experimentos secretos e amizades inseparáveis transformam a vida de um grupo de jovens.",
        descriptionEN:
            "In Hawkins, supernatural events, secret experiments and inseparable friendships transform the lives of a group of young people.",
        featured: true,
        brazil: false,
        cast: [
            ["Millie Bobby Brown", "Eleven", "millie-bobby-brown.jpg"],
            ["Finn Wolfhard", "Mike", "finn-wolfhard.jpg"],
            ["Sadie Sink", "Max", "sadie-sink.jpg"],
            ["Caleb McLaughlin", "Lucas", "caleb-mclaughlin.jpg"]
        ]
    },

    {
        id: "bridgerton",
        title: "Bridgerton",
        year: 2020,
        genre: "Romance",
        country: "Estados Unidos",
        rating: 8.7,
        seasons: 3,
        episodes: 24,
        poster: "bridgerton.jpg",
        backdrop: "bridgerton-bg.jpg",
        descriptionPT:
            "Romances, escândalos e segredos movimentam a alta sociedade londrina enquanto famílias disputam prestígio e grandes paixões.",
        descriptionEN:
            "Romance, scandals and secrets shake London's high society as families pursue prestige and great love stories.",
        featured: true,
        brazil: false,
        cast: [
            ["Nicola Coughlan", "Penelope", "nicola-coughlan.jpg"],
            ["Luke Newton", "Colin", "luke-newton.jpg"],
            ["Simone Ashley", "Kate", "simone-ashley.jpg"],
            ["Jonathan Bailey", "Anthony", "jonathan-bailey.jpg"]
        ]
    },

    {
        id: "outer-banks",
        title: "Outer Banks",
        year: 2020,
        genre: "Aventura",
        country: "Estados Unidos",
        rating: 8.5,
        seasons: 4,
        episodes: 40,
        poster: "outer-banks.jpg",
        backdrop: "outer-banks-bg.jpg",
        descriptionPT:
            "Um grupo de amigos parte em busca de um tesouro perdido e acaba entrando em uma aventura cheia de perigos, romances e segredos.",
        descriptionEN:
            "A group of friends searches for a lost treasure and becomes involved in an adventure filled with danger, romance and secrets.",
        featured: true,
        brazil: false,
        cast: [
            ["Chase Stokes", "John B", "chase-stokes.jpg"],
            ["Madelyn Cline", "Sarah", "madelyn-cline.jpg"],
            ["Madison Bailey", "Kiara", "madison-bailey.jpg"],
            ["Jonathan Daviss", "Pope", "jonathan-daviss.jpg"]
        ]
    },

    {
        id: "wednesday",
        title: "Wednesday",
        year: 2022,
        genre: "Mistério",
        country: "Estados Unidos",
        rating: 8.8,
        seasons: 2,
        episodes: 16,
        poster: "wednesday.jpg",
        backdrop: "wednesday-bg.jpg",
        descriptionPT:
            "Wednesday Addams investiga mistérios, crimes e segredos enquanto tenta se adaptar à Academia Nevermore.",
        descriptionEN:
            "Wednesday Addams investigates mysteries, crimes and secrets while trying to adapt to Nevermore Academy.",
        featured: true,
        brazil: false,
        cast: [
            ["Jenna Ortega", "Wednesday", "jenna-ortega.jpg"],
            ["Emma Myers", "Enid", "emma-myers.jpg"],
            ["Joy Sunday", "Bianca", "joy-sunday.jpg"],
            ["Hunter Doohan", "Tyler", "hunter-doohan.jpg"]
        ]
    },

    {
        id: "ginny-georgia",
        title: "Ginny & Georgia",
        year: 2021,
        genre: "Drama",
        country: "Estados Unidos",
        rating: 8.4,
        seasons: 3,
        episodes: 30,
        poster: "ginny-georgia.jpg",
        backdrop: "ginny-georgia-bg.jpg",
        descriptionPT:
            "Ginny tenta viver uma adolescência normal enquanto descobre que sua mãe Georgia esconde um passado cheio de segredos.",
        descriptionEN:
            "Ginny tries to live a normal teenage life while discovering that her mother Georgia hides a past full of secrets.",
        featured: false,
        brazil: false,
        cast: [
            ["Antonia Gentry", "Ginny", "antonia-gentry.jpg"],
            ["Brianne Howey", "Georgia", "brianne-howey.jpg"],
            ["Felix Mallard", "Marcus", "felix-mallard.jpg"],
            ["Sara Waisglass", "Max", "sara-waisglass.jpg"]
        ]
    },

    {
        id: "you",
        title: "You",
        year: 2018,
        genre: "Suspense",
        country: "Estados Unidos",
        rating: 8.6,
        seasons: 5,
        episodes: 50,
        poster: "you.jpg",
        backdrop: "you-bg.jpg",
        descriptionPT:
            "Joe Goldberg transforma obsessões amorosas em relações perigosas enquanto tenta esconder sua verdadeira personalidade.",
        descriptionEN:
            "Joe Goldberg turns romantic obsessions into dangerous relationships while trying to hide his true personality.",
        featured: false,
        brazil: false,
        cast: [
            ["Penn Badgley", "Joe", "penn-badgley.jpg"],
            ["Charlotte Ritchie", "Kate", "charlotte-ritchie.jpg"]
        ]
    },

    {
        id: "cobra-kai",
        title: "Cobra Kai",
        year: 2018,
        genre: "Drama",
        country: "Estados Unidos",
        rating: 8.5,
        seasons: 6,
        episodes: 65,
        poster: "cobra-kai.jpg",
        backdrop: "cobra-kai-bg.jpg",
        descriptionPT:
            "Décadas depois de Karate Kid, antigas rivalidades retornam quando Johnny Lawrence decide reabrir o dojo Cobra Kai.",
        descriptionEN:
            "Decades after The Karate Kid, old rivalries return when Johnny Lawrence decides to reopen the Cobra Kai dojo.",
        featured: false,
        brazil: false,
        cast: [
            ["Ralph Macchio", "Daniel", "ralph-macchio.jpg"],
            ["William Zabka", "Johnny", "william-zabka.jpg"],
            ["Xolo Maridueña", "Miguel", "xolo-mariduena.jpg"]
        ]
    },

    {
        id: "lucifer",
        title: "Lucifer",
        year: 2016,
        genre: "Drama",
        country: "Estados Unidos",
        rating: 8.7,
        seasons: 6,
        episodes: 93,
        poster: "lucifer.jpg",
        backdrop: "lucifer-bg.jpg",
        descriptionPT:
            "Cansado do inferno, Lucifer Morningstar vai para Los Angeles e passa a ajudar a polícia a investigar crimes.",
        descriptionEN:
            "Tired of Hell, Lucifer Morningstar moves to Los Angeles and begins helping the police investigate crimes.",
        featured: false,
        brazil: false,
        cast: [
            ["Tom Ellis", "Lucifer", "tom-ellis.jpg"],
            ["Lauren German", "Chloe", "lauren-german.jpg"]
        ]
    },

    {
        id: "one-day",
        title: "One Day",
        year: 2024,
        genre: "Romance",
        country: "Reino Unido",
        rating: 8.9,
        seasons: 1,
        episodes: 14,
        poster: "one-day.jpg",
        backdrop: "one-day-bg.jpg",
        descriptionPT:
            "Emma e Dexter se reencontram no mesmo dia ao longo dos anos, enquanto amizade e amor transformam suas vidas.",
        descriptionEN:
            "Emma and Dexter meet again on the same day over the years as friendship and love transform their lives.",
        featured: false,
        brazil: false,
        cast: [
            ["Ambika Mod", "Emma", "ambika-mod.jpg"],
            ["Leo Woodall", "Dexter", "leo-woodall.jpg"]
        ]
    },

    {
        id: "heartstopper",
        title: "Heartstopper",
        year: 2022,
        genre: "Romance",
        country: "Reino Unido",
        rating: 9.0,
        seasons: 3,
        episodes: 24,
        poster: "heartstopper.jpg",
        backdrop: "heartstopper-bg.jpg",
        descriptionPT:
            "Charlie e Nick descobrem que uma amizade inesperada pode se transformar em algo muito maior.",
        descriptionEN:
            "Charlie and Nick discover that an unexpected friendship can turn into something much bigger.",
        featured: false,
        brazil: false,
        cast: [
            ["Kit Connor", "Nick", "kit-connor.jpg"],
            ["Joe Locke", "Charlie", "joe-locke.jpg"]
        ]
    },

    {
        id: "elite",
        title: "Elite",
        year: 2018,
        genre: "Drama",
        country: "Espanha",
        rating: 8.2,
        seasons: 8,
        episodes: 64,
        poster: "elite.jpg",
        backdrop: "elite-bg.jpg",
        descriptionPT:
            "Conflitos entre estudantes de uma escola de elite desencadeiam romances, rivalidades e crimes.",
        descriptionEN:
            "Conflicts among students at an elite school trigger romance, rivalries and crimes.",
        featured: false,
        brazil: false,
        cast: [
            ["Omar Ayuso", "Omar", "omar-ayuso.jpg"],
            ["Valentina Zenere", "Isadora", "valentina-zenere.jpg"]
        ]
    },

    {
        id: "never-have-i-ever",
        title: "Never Have I Ever",
        year: 2020,
        genre: "Romance",
        country: "Estados Unidos",
        rating: 8.5,
        seasons: 4,
        episodes: 40,
        poster: "never-have-i-ever.jpg",
        backdrop: "never-have-i-ever-bg.jpg",
        descriptionPT:
            "Devi enfrenta escola, família, amizades e romances enquanto tenta mudar sua vida.",
        descriptionEN:
            "Devi faces school, family, friendships and romance while trying to change her life.",
        featured: false,
        brazil: false,
        cast: [
            ["Maitreyi Ramakrishnan", "Devi", "maitreyi.jpg"],
            ["Darren Barnet", "Paxton", "darren-barnet.jpg"]
        ]
    },

    {
        id: "the-night-agent",
        title: "The Night Agent",
        year: 2023,
        genre: "Suspense",
        country: "Estados Unidos",
        rating: 8.4,
        seasons: 2,
        episodes: 20,
        poster: "the-night-agent.jpg",
        backdrop: "the-night-agent-bg.jpg",
        descriptionPT:
            "Um agente do FBI atende uma ligação que o coloca no centro de uma conspiração política.",
        descriptionEN:
            "An FBI agent answers a call that puts him at the center of a political conspiracy.",
        featured: false,
        brazil: false,
        cast: [
            ["Gabriel Basso", "Peter", "gabriel-basso.jpg"],
            ["Luciane Buchanan", "Rose", "luciane-buchanan.jpg"]
        ]
    },

    {
        id: "the-gentlemen",
        title: "The Gentlemen",
        year: 2024,
        genre: "Crime",
        country: "Reino Unido",
        rating: 8.5,
        seasons: 1,
        episodes: 8,
        poster: "the-gentlemen.jpg",
        backdrop: "the-gentlemen-bg.jpg",
        descriptionPT:
            "Um aristocrata herda uma propriedade e descobre que ela faz parte de um império criminoso.",
        descriptionEN:
            "An aristocrat inherits an estate and discovers that it is part of a criminal empire.",
        featured: false,
        brazil: false,
        cast: [
            ["Theo James", "Eddie", "theo-james.jpg"],
            ["Kaya Scodelario", "Susie", "kaya-scodelario.jpg"]
        ]
    },

    {
        id: "blood-water",
        title: "Blood & Water",
        year: 2020,
        genre: "Drama",
        country: "África do Sul",
        rating: 8.1,
        seasons: 4,
        episodes: 25,
        poster: "blood-water.jpg",
        backdrop: "blood-water-bg.jpg",
        descriptionPT:
            "Uma adolescente investiga se uma famosa nadadora de sua escola pode ser sua irmã desaparecida.",
        descriptionEN:
            "A teenager investigates whether a famous swimmer at her school could be her missing sister.",
        featured: false,
        brazil: false,
        cast: [
            ["Ama Qamata", "Puleng", "ama-qamata.jpg"],
            ["Khosi Ngema", "Fikile", "khosi-ngema.jpg"]
        ]
    },

    {
        id: "sintonia",
        title: "Sintonia",
        year: 2019,
        genre: "Drama",
        country: "Brasil",
        rating: 8.6,
        seasons: 5,
        episodes: 32,
        poster: "sintonia.jpg",
        backdrop: "sintonia-bg.jpg",
        descriptionPT:
            "Três amigos da periferia de São Paulo seguem caminhos diferentes entre música, crime e fé.",
        descriptionEN:
            "Three friends from São Paulo's outskirts follow different paths involving music, crime and faith.",
        featured: false,
        brazil: true,
        cast: [
            ["Christian Malheiros", "Nando", "christian-malheiros.jpg"],
            ["Jottapê", "Doni", "jottape.jpg"],
            ["Bruna Mascarenhas", "Rita", "bruna-mascarenhas.jpg"]
        ]
    },

    {
        id: "bom-dia-veronica",
        title: "Bom Dia, Verônica",
        year: 2020,
        genre: "Suspense",
        country: "Brasil",
        rating: 8.7,
        seasons: 3,
        episodes: 17,
        poster: "bom-dia-veronica.jpg",
        backdrop: "bom-dia-veronica-bg.jpg",
        descriptionPT:
            "Uma escrivã investiga crimes violentos e descobre uma rede muito mais perigosa do que imaginava.",
        descriptionEN:
            "A police clerk investigates violent crimes and discovers a network far more dangerous than she imagined.",
        featured: false,
        brazil: true,
        cast: [
            ["Tainá Müller", "Verônica", "taina-muller.jpg"],
            ["Reynaldo Gianecchini", "Matias", "reynaldo-gianecchini.jpg"]
        ]
    },

    {
        id: "dna-do-crime",
        title: "DNA do Crime",
        year: 2023,
        genre: "Crime",
        country: "Brasil",
        rating: 8.5,
        seasons: 2,
        episodes: 16,
        poster: "dna-do-crime.jpg",
        backdrop: "dna-do-crime-bg.jpg",
        descriptionPT:
            "Policiais federais usam pistas de DNA para investigar uma organização criminosa após um grande assalto.",
        descriptionEN:
            "Federal police use DNA evidence to investigate a criminal organization after a major robbery.",
        featured: false,
        brazil: true,
        cast: [
            ["Maeve Jinkings", "Suellen", "maeve-jinkings.jpg"],
            ["Rômulo Braga", "Benício", "romulo-braga.jpg"]
        ]
    },

    {
        id: "cidade-invisivel",
        title: "Cidade Invisível",
        year: 2021,
        genre: "Mistério",
        country: "Brasil",
        rating: 8.3,
        seasons: 2,
        episodes: 12,
        poster: "cidade-invisivel.jpg",
        backdrop: "cidade-invisivel-bg.jpg",
        descriptionPT:
            "Um investigador descobre criaturas do folclore brasileiro escondidas entre os humanos.",
        descriptionEN:
            "An investigator discovers creatures from Brazilian folklore hidden among humans.",
        featured: false,
        brazil: true,
        cast: [
            ["Marco Pigossi", "Eric", "marco-pigossi.jpg"],
            ["Alessandra Negrini", "Inês", "alessandra-negrini.jpg"]
        ]
    },

    {
        id: "de-volta-aos-15",
        title: "De Volta aos 15",
        year: 2022,
        genre: "Romance",
        country: "Brasil",
        rating: 8.2,
        seasons: 3,
        episodes: 18,
        poster: "de-volta-aos-15.jpg",
        backdrop: "de-volta-aos-15-bg.jpg",
        descriptionPT:
            "Uma mulher de 30 anos volta misteriosamente à adolescência e tenta corrigir escolhas do passado.",
        descriptionEN:
            "A 30-year-old woman mysteriously returns to her teenage years and tries to fix choices from the past.",
        featured: false,
        brazil: true,
        cast: [
            ["Maisa Silva", "Anita jovem", "maisa.jpg"],
            ["Camila Queiroz", "Anita adulta", "camila-queiroz.jpg"]
        ]
    },

    {
        id: "pedaço-de-mim",
        title: "Pedaço de Mim",
        year: 2024,
        genre: "Drama",
        country: "Brasil",
        rating: 8.1,
        seasons: 1,
        episodes: 17,
        poster: "pedaco-de-mim.jpg",
        backdrop: "pedaco-de-mim-bg.jpg",
        descriptionPT:
            "Uma descoberta inesperada transforma completamente a vida de uma mulher e de sua família.",
        descriptionEN:
            "An unexpected discovery completely transforms a woman's life and her family.",
        featured: false,
        brazil: true,
        cast: [
            ["Juliana Paes", "Liana", "juliana-paes.jpg"],
            ["Vladimir Brichta", "Tomás", "vladimir-brichta.jpg"]
        ]
    }

];


/* =========================================================
   FALLBACK DE IMAGENS
========================================================= */

const fallbackPoster =
    "https://placehold.co/600x900/7d4ea3/ffffff?text=Blog+da+Bia";

const fallbackActor =
    "https://placehold.co/400x500/9c69b8/ffffff?text=Elenco";

function imageFallback(img, fallback = fallbackPoster) {
    img.addEventListener(
        "error",
        () => {
            if (img.src !== fallback) {
                img.src = fallback;
            }
        },
        { once: true }
    );
}

function applyImageFallbacks() {
    $$("img").forEach(img =>
        imageFallback(img)
    );
}


/* =========================================================
   DESCRIÇÃO
========================================================= */

function getDescription(item) {
    return state.language === "en"
        ? item.descriptionEN
        : item.descriptionPT;
}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;

function showToast(message, icon = "♥") {
    const toast = $("#toast");

    if (!toast) {
        return;
    }

    const iconElement =
        $(".toast-icon", toast);

    const textElement =
        $(".toast-text", toast);

    if (iconElement) {
        iconElement.textContent = icon;
    }

    if (textElement) {
        textElement.textContent = message;
    }

    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout =
        setTimeout(
            () =>
                toast.classList.remove("show"),
            2500
        );
}


/* =========================================================
   CONFETE
========================================================= */

function confetti(x, y) {
    if (!state.animations) {
        return;
    }

    const container =
        $("#clickEffects")
        || document.body;

    const symbols =
        ["♥", "✦", "✧", "★", "♡"];

    for (let i = 0; i < 12; i++) {
        const particle =
            document.createElement("span");

        particle.className =
            "confetti-piece";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];

        particle.style.left =
            `${x}px`;

        particle.style.top =
            `${y}px`;

        particle.style.setProperty(
            "--x",
            `${
                Math.random() * 180 - 90
            }px`
        );

        particle.style.setProperty(
            "--y",
            `${
                Math.random() * 130 + 40
            }px`
        );

        particle.style.setProperty(
            "--rotation",
            `${
                Math.random() * 360
            }deg`
        );

        container.appendChild(
            particle
        );

        setTimeout(
            () => particle.remove(),
            1400
        );
    }
}


/* =========================================================
   CLIQUE COM CORAÇÃO
========================================================= */

function setupClickHearts() {
    document.addEventListener(
        "click",
        event => {
            if (!state.animations) {
                return;
            }

            const heart =
                document.createElement("span");

            heart.className =
                "click-heart";

            heart.textContent = "♥";

            heart.style.left =
                `${event.clientX}px`;

            heart.style.top =
                `${event.clientY}px`;

            (
                $("#clickEffects")
                || document.body
            ).appendChild(heart);

            setTimeout(
                () => heart.remove(),
                1100
            );
        }
    );
}


/* =========================================================
   CURSOR CORAÇÃO
========================================================= */

function setupHeartCursor() {
    const cursor =
        $("#heartCursor");

    if (!cursor) {
        return;
    }

    function updateCursorMode() {
        const enabled =
            state.cursor
            && window.matchMedia(
                "(pointer: fine)"
            ).matches;

        body.classList.toggle(
            "custom-heart-cursor",
            enabled
        );

        cursor.style.display =
            enabled
                ? "block"
                : "none";
    }

    updateCursorMode();

    document.addEventListener(
        "mousemove",
        event => {
            if (!state.cursor) {
                return;
            }

            cursor.style.left =
                `${event.clientX}px`;

            cursor.style.top =
                `${event.clientY}px`;
        }
    );

    document.addEventListener(
        "mouseover",
        event => {
            if (
                event.target.closest(
                    "button, a, input, textarea, select, .series-card"
                )
            ) {
                cursor.classList.add(
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
                cursor.classList.remove(
                    "hover"
                );
            }
        }
    );

    window.addEventListener(
        "resize",
        updateCursorMode
    );
}


/* =========================================================
   RASTRO DO CURSOR
========================================================= */

let lastTrail = 0;

function setupCursorTrail() {
    document.addEventListener(
        "mousemove",
        event => {
            if (
                !state.cursor
                || !state.animations
            ) {
                return;
            }

            const now = Date.now();

            if (now - lastTrail < 45) {
                return;
            }

            lastTrail = now;

            const trail =
                document.createElement("span");

            trail.className =
                "cursor-trail";

            trail.textContent = "♥";

            trail.style.left =
                `${event.clientX}px`;

            trail.style.top =
                `${event.clientY}px`;

            (
                $("#clickEffects")
                || document.body
            ).appendChild(trail);

            setTimeout(
                () => trail.remove(),
                700
            );
        }
    );
}


/* =========================================================
   PARTÍCULAS
========================================================= */

function createParticles() {
    const container =
        $("#particles");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!state.particles) {
        return;
    }

    const symbols =
        ["♥", "♡", "✦", "✧"];

    for (let i = 0; i < 18; i++) {
        const particle =
            document.createElement("span");

        particle.className =
            "background-particle";

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.fontSize =
            `${
                Math.random() * 13 + 8
            }px`;

        particle.style.animationDelay =
            `-${Math.random() * 15}s`;

        particle.style.setProperty(
            "--particle-speed",
            `${
                Math.random() * 10 + 10
            }s`
        );

        container.appendChild(
            particle
        );
    }
}


/* =========================================================
   LOADER
========================================================= */

function setupLoader() {
    const loader = $("#loader");

    if (!loader) {
        return;
    }

    window.addEventListener(
        "load",
        () => {
            setTimeout(
                () =>
                    loader.classList.add(
                        "hidden"
                    ),
                450
            );
        }
    );

    setTimeout(
        () =>
            loader.classList.add(
                "hidden"
            ),
        2500
    );
}


/* =========================================================
   HEADER / SCROLL
========================================================= */

function setupScroll() {
    const header = $("#header");

    const progress =
        $("#scrollProgress");

    const backTop =
        $("#backTop");

    function update() {
        const scrollTop =
            window.scrollY;

        const max =
            document.documentElement
                .scrollHeight
            - window.innerHeight;

        const percentage =
            max > 0
                ? (scrollTop / max) * 100
                : 0;

        if (progress) {
            progress.style.width =
                `${percentage}%`;
        }

        if (header) {
            header.classList.toggle(
                "scrolled",
                scrollTop > 30
            );
        }

        if (backTop) {
            backTop.classList.toggle(
                "show",
                scrollTop > 500
            );
        }
    }

    window.addEventListener(
        "scroll",
        update,
        { passive: true }
    );

    update();

    backTop?.addEventListener(
        "click",
        () =>
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
    );
}


/* =========================================================
   MENU MOBILE
========================================================= */

function setupMobileMenu() {
    const menu =
        $("#mobileMenu");

    const overlay =
        $("#menuOverlay");

    const openButton =
        $("#mobileMenuBtn");

    const closeButton =
        $("#closeMobileMenu");

    function open() {
        menu?.classList.add("open");
        overlay?.classList.add("show");

        body.style.overflow = "hidden";
    }

    function close() {
        menu?.classList.remove("open");
        overlay?.classList.remove("show");

        body.style.overflow = "";
    }

    openButton?.addEventListener(
        "click",
        open
    );

    closeButton?.addEventListener(
        "click",
        close
    );

    overlay?.addEventListener(
        "click",
        close
    );

    $$("a", menu).forEach(link =>
        link.addEventListener(
            "click",
            close
        )
    );
}


/* =========================================================
   IDIOMA
========================================================= */

function setLanguage(language) {
    state.language = language;

    storage.set(
        "bia_language",
        language
    );

    document.documentElement.lang =
        language === "en"
            ? "en"
            : "pt-BR";

    $$(".language-btn").forEach(
        button => {
            button.classList.toggle(
                "active",
                button.dataset.lang
                === language
            );
        }
    );

    $$("[data-i18n]").forEach(
        element => {
            const key =
                element.dataset.i18n;

            if (
                translations[language]?.[
                    key
                ]
            ) {
                element.textContent =
                    translations[language][
                        key
                    ];
            }
        }
    );

    $$("[data-i18n-placeholder]")
        .forEach(element => {
            const key =
                element.dataset
                    .i18nPlaceholder;

            if (
                translations[language]?.[
                    key
                ]
            ) {
                element.placeholder =
                    translations[language][
                        key
                    ];
            }
        });

    renderSeries();
    renderBrazil();
    renderRanking();
    renderComments();
    renderDailySeries();
    updateHero();
}

function setupLanguage() {
    $$("[data-lang]").forEach(
        button => {
            button.addEventListener(
                "click",
                () =>
                    setLanguage(
                        button.dataset.lang
                    )
            );
        }
    );

    setLanguage(
        state.language
    );
}


/* =========================================================
   HERO
========================================================= */

const featuredSeries =
    series.filter(
        item => item.featured
    );

function updateHero() {
    if (!featuredSeries.length) {
        return;
    }

    const item =
        featuredSeries[
            state.heroIndex
            % featuredSeries.length
        ];

    const title =
        $("#heroTitle");

    const description =
        $("#heroDescription");

    const poster =
        $("#heroPoster");

    const backdrop =
        $("#heroBackdrop");

    const rating =
        $("#heroRating");

    const year =
        $("#heroYear");

    const genre =
        $("#heroGenre");

    if (title) {
        title.textContent =
            item.title;
    }

    if (description) {
        description.textContent =
            getDescription(item);
    }

    if (poster) {
        poster.src =
            item.poster;

        poster.alt =
            item.title;

        imageFallback(
            poster
        );
    }

    if (backdrop) {
        backdrop.style.backgroundImage =
            `url("${item.backdrop}")`;
    }

    if (rating) {
        rating.textContent =
            `★ ${item.rating}`;
    }

    if (year) {
        year.textContent =
            item.year;
    }

    if (genre) {
        genre.textContent =
            item.genre;
    }

    const detailsButton =
        $("#heroDetails");

    if (detailsButton) {
        detailsButton.dataset.id =
            item.id;
    }

    const favoriteButton =
        $("#heroFavorite");

    if (favoriteButton) {
        favoriteButton.dataset.id =
            item.id;

        favoriteButton.classList.toggle(
            "active",
            state.favorites.includes(
                item.id
            )
        );
    }

    const watchlistButton =
        $("#heroWatchlist");

    if (watchlistButton) {
        watchlistButton.dataset.id =
            item.id;

        watchlistButton.classList.toggle(
            "active",
            state.watchlist.includes(
                item.id
            )
        );
    }

    renderHeroDots();
}

function renderHeroDots() {
    const dots =
        $("#heroDots");

    if (!dots) {
        return;
    }

    dots.innerHTML = "";

    featuredSeries.forEach(
        (_, index) => {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "hero-dot";

            if (
                index
                === state.heroIndex
            ) {
                button.classList.add(
                    "active"
                );
            }

            button.addEventListener(
                "click",
                () => {
                    state.heroIndex =
                        index;

                    updateHero();

                    restartHeroTimer();
                }
            );

            dots.appendChild(
                button
            );
        }
    );
}

function nextHero() {
    state.heroIndex =
        (
            state.heroIndex + 1
        )
        % featuredSeries.length;

    updateHero();
}

function previousHero() {
    state.heroIndex =
        (
            state.heroIndex
            - 1
            + featuredSeries.length
        )
        % featuredSeries.length;

    updateHero();
}

function restartHeroTimer() {
    clearInterval(
        state.heroTimer
    );

    state.heroTimer =
        setInterval(
            nextHero,
            7500
        );
}

function setupHero() {
    updateHero();

    restartHeroTimer();

    $("#heroNext")?.addEventListener(
        "click",
        () => {
            nextHero();
            restartHeroTimer();
        }
    );

    $("#heroPrev")?.addEventListener(
        "click",
        () => {
            previousHero();
            restartHeroTimer();
        }
    );

    $("#heroDetails")?.addEventListener(
        "click",
        event =>
            openSeries(
                event.currentTarget
                    .dataset.id
            )
    );

    $("#heroFavorite")
        ?.addEventListener(
            "click",
            event =>
                toggleFavorite(
                    event.currentTarget
                        .dataset.id,
                    event.currentTarget
                )
        );

    $("#heroWatchlist")
        ?.addEventListener(
            "click",
            event =>
                toggleWatchlist(
                    event.currentTarget
                        .dataset.id,
                    event.currentTarget
                )
        );

    setupHeroTilt();
}

function setupHeroTilt() {
    const card =
        $(".hero-poster-card");

    if (!card) {
        return;
    }

    card.addEventListener(
        "mousemove",
        event => {
            if (!state.animations) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX
                - rect.left;

            const y =
                event.clientY
                - rect.top;

            const rotateY =
                (
                    x
                    / rect.width
                    - 0.5
                )
                * 10;

            const rotateX =
                (
                    0.5
                    - y
                    / rect.height
                )
                * 10;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {
            card.style.transform = "";
        }
    );
}


/* =========================================================
   FILTRAGEM
========================================================= */

function filteredSeries() {
    let result = [...series];

    const search =
        state.currentSearch
            .trim()
            .toLowerCase();

    if (search) {
        result =
            result.filter(item =>
                [
                    item.title,
                    item.genre,
                    item.country,
                    getDescription(item)
                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(search)
            );
    }

    switch (
        state.currentFilter
    ) {
        case "favorites":
            result =
                result.filter(item =>
                    state.favorites
                        .includes(
                            item.id
                        )
                );
            break;

        case "watchlist":
            result =
                result.filter(item =>
                    state.watchlist
                        .includes(
                            item.id
                        )
                );
            break;

        case "watched":
            result =
                result.filter(item =>
                    state.watched
                        .includes(
                            item.id
                        )
                );
            break;

        case "brazil":
            result =
                result.filter(
                    item => item.brazil
                );
            break;

        case "romance":
            result =
                result.filter(
                    item =>
                        item.genre
                        === "Romance"
                );
            break;

        case "drama":
            result =
                result.filter(
                    item =>
                        item.genre
                        === "Drama"
                );
            break;

        case "mystery":
            result =
                result.filter(
                    item =>
                        [
                            "Mistério",
                            "Suspense",
                            "Crime"
                        ].includes(
                            item.genre
                        )
                );
            break;
    }

    if (
        state.year !== "all"
    ) {
        result =
            result.filter(
                item =>
                    String(item.year)
                    === state.year
            );
    }

    if (
        state.ratingFilter
        !== "all"
    ) {
        result =
            result.filter(
                item =>
                    item.rating
                    >= Number(
                        state.ratingFilter
                    )
            );
    }

    switch (state.sort) {
        case "rating":
            result.sort(
                (a, b) =>
                    b.rating
                    - a.rating
            );
            break;

        case "newest":
            result.sort(
                (a, b) =>
                    b.year
                    - a.year
            );
            break;

        case "oldest":
            result.sort(
                (a, b) =>
                    a.year
                    - b.year
            );
            break;

        case "az":
            result.sort(
                (a, b) =>
                    a.title.localeCompare(
                        b.title
                    )
            );
            break;

        case "za":
            result.sort(
                (a, b) =>
                    b.title.localeCompare(
                        a.title
                    )
            );
            break;

        default:
            result.sort(
                (a, b) =>
                    Number(b.featured)
                    - Number(a.featured)
            );
    }

    return result;
}


/* =========================================================
   CARDS
========================================================= */

function createSeriesCard(item) {
    const card =
        document.createElement(
            "article"
        );

    card.className =
        "series-card";

    card.dataset.id =
        item.id;

    const isFavorite =
        state.favorites.includes(
            item.id
        );

    card.innerHTML = `
        <div class="series-poster">

            <img
                src="${item.poster}"
                alt="${item.title}"
                loading="lazy"
            >

            <div class="series-card-shine"></div>

            <div class="card-top-actions">

                <span class="card-badge">
                    ${item.genre}
                </span>

                <button
                    class="card-heart ${
                        isFavorite
                            ? "active"
                            : ""
                    }"
                    type="button"
                    aria-label="Favoritar"
                >
                    ${
                        isFavorite
                            ? "♥"
                            : "♡"
                    }
                </button>

            </div>

        </div>

        <div class="series-card-body">

            <h3>${item.title}</h3>

            <div class="series-card-meta">
                <span>${item.year}</span>
                <span>${item.country}</span>
            </div>

            <p class="series-card-description">
                ${getDescription(item)}
            </p>

            <div class="series-card-footer">

                <span class="series-rating">
                    ★ ${item.rating}
                </span>

                <button
                    class="open-series-btn"
                    type="button"
                >
                    ${
                        state.language
                        === "en"
                            ? "Details"
                            : "Detalhes"
                    }
                </button>

            </div>

        </div>
    `;

    const img =
        $("img", card);

    imageFallback(img);

    $(".card-heart", card)
        .addEventListener(
            "click",
            event => {
                event.stopPropagation();

                toggleFavorite(
                    item.id,
                    event.currentTarget
                );
            }
        );

    $(".open-series-btn", card)
        .addEventListener(
            "click",
            event => {
                event.stopPropagation();

                openSeries(
                    item.id
                );
            }
        );

    card.addEventListener(
        "click",
        event => {
            if (
                !event.target.closest(
                    "button"
                )
            ) {
                openSeries(
                    item.id
                );
            }
        }
    );

    setupCardTilt(card);

    return card;
}

function renderSeries() {
    const grid =
        $("#seriesGrid");

    if (!grid) {
        return;
    }

    const result =
        filteredSeries();

    grid.innerHTML = "";

    result.forEach(item =>
        grid.appendChild(
            createSeriesCard(item)
        )
    );

    const counter =
        $("#resultCount");

    if (counter) {
        counter.textContent =
            result.length;
    }

    const empty =
        $("#emptyState");

    empty?.classList.toggle(
        "hidden",
        result.length > 0
    );
}


/* =========================================================
   CARD TILT
========================================================= */

function setupCardTilt(card) {
    card.addEventListener(
        "mousemove",
        event => {
            if (!state.animations) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX
                - rect.left;

            const y =
                event.clientY
                - rect.top;

            const rotateY =
                (
                    x
                    / rect.width
                    - 0.5
                )
                * 5;

            const rotateX =
                (
                    0.5
                    - y
                    / rect.height
                )
                * 5;

            card.style.transform =
                `perspective(800px)
                 translateY(-8px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {
            card.style.transform = "";
        }
    );
}


/* =========================================================
   CATÁLOGO
========================================================= */

function setupCatalog() {
    const search =
        $("#catalogSearch");

    search?.addEventListener(
        "input",
        event => {
            state.currentSearch =
                event.target.value;

            renderSeries();
        }
    );

    $$(".filter-btn")
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    $$(".filter-btn")
                        .forEach(btn =>
                            btn.classList
                                .remove(
                                    "active"
                                )
                        );

                    button.classList.add(
                        "active"
                    );

                    state.currentFilter =
                        button.dataset.filter
                        || "all";

                    renderSeries();
                }
            );
        });

    $("#sortSeries")
        ?.addEventListener(
            "change",
            event => {
                state.sort =
                    event.target.value;

                renderSeries();
            }
        );

    $("#yearFilter")
        ?.addEventListener(
            "change",
            event => {
                state.year =
                    event.target.value;

                renderSeries();
            }
        );

    $("#ratingFilter")
        ?.addEventListener(
            "change",
            event => {
                state.ratingFilter =
                    event.target.value;

                renderSeries();
            }
        );

    $("#advancedFilterBtn")
        ?.addEventListener(
            "click",
            () =>
                $("#advancedFilters")
                    ?.classList.toggle(
                        "open"
                    )
        );

    $("#clearFilters")
        ?.addEventListener(
            "click",
            clearFilters
        );

    populateYears();

    renderSeries();
}

function populateYears() {
    const select =
        $("#yearFilter");

    if (!select) {
        return;
    }

    const years =
        [
            ...new Set(
                series.map(
                    item =>
                        item.year
                )
            )
        ].sort(
            (a, b) => b - a
        );

    years.forEach(year => {
        const option =
            document.createElement(
                "option"
            );

        option.value =
            year;

        option.textContent =
            year;

        select.appendChild(
            option
        );
    });
}

function clearFilters() {
    state.currentFilter = "all";
    state.currentSearch = "";
    state.year = "all";
    state.ratingFilter = "all";
    state.sort = "featured";

    if ($("#catalogSearch")) {
        $("#catalogSearch").value = "";
    }

    if ($("#yearFilter")) {
        $("#yearFilter").value =
            "all";
    }

    if ($("#ratingFilter")) {
        $("#ratingFilter").value =
            "all";
    }

    if ($("#sortSeries")) {
        $("#sortSeries").value =
            "featured";
    }

    $$(".filter-btn").forEach(
        button =>
            button.classList.toggle(
                "active",
                button.dataset.filter
                === "all"
            )
    );

    renderSeries();
}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(
    id,
    button = null
) {
    const index =
        state.favorites.indexOf(id);

    let added;

    if (index === -1) {
        state.favorites.push(id);
        added = true;
    } else {
        state.favorites.splice(
            index,
            1
        );

        added = false;
    }

    storage.set(
        "bia_favorites",
        state.favorites
    );

    if (button) {
        button.classList.toggle(
            "active",
            added
        );

        if (
            button.classList.contains(
                "card-heart"
            )
        ) {
            button.textContent =
                added
                    ? "♥"
                    : "♡";
        }
    }

    showToast(
        added
            ? t("favoriteAdded")
            : t("favoriteRemoved"),
        added ? "♥" : "♡"
    );

    updateStats();
    updateHero();

    if (
        state.currentFilter
        === "favorites"
    ) {
        renderSeries();
    }
}


/* =========================================================
   WATCHLIST
========================================================= */

function toggleWatchlist(
    id,
    button = null
) {
    const index =
        state.watchlist.indexOf(id);

    let added;

    if (index === -1) {
        state.watchlist.push(id);
        added = true;
    } else {
        state.watchlist.splice(
            index,
            1
        );

        added = false;
    }

    storage.set(
        "bia_watchlist",
        state.watchlist
    );

    button?.classList.toggle(
        "active",
        added
    );

    showToast(
        added
            ? t("listAdded")
            : t("listRemoved"),
        added ? "+" : "✓"
    );

    updateStats();

    if (
        state.currentSeries
        === id
    ) {
        updateModalButtons(id);
    }
}


/* =========================================================
   ASSISTIDO
========================================================= */

function toggleWatched(id) {
    const index =
        state.watched.indexOf(id);

    let added;

    if (index === -1) {
        state.watched.push(id);
        added = true;
    } else {
        state.watched.splice(
            index,
            1
        );

        added = false;
    }

    storage.set(
        "bia_watched",
        state.watched
    );

    showToast(
        added
            ? t("watchedAdded")
            : t("removed"),
        "✓"
    );

    updateModalButtons(id);
    updateStats();
    renderContinueWatching();
}


/* =========================================================
   ESTATÍSTICAS
========================================================= */

function updateStats() {
    const values = {
        statSeries:
            series.length,

        statFavorites:
            state.favorites.length,

        statWatchlist:
            state.watchlist.length,

        statWatched:
            state.watched.length,

        statComments:
            state.comments.length
    };

    Object.entries(values)
        .forEach(
            ([id, value]) => {
                const element =
                    $(`#${id}`);

                if (element) {
                    animateNumber(
                        element,
                        value
                    );
                }
            }
        );

    updateLevel();
}

function animateNumber(
    element,
    target
) {
    const current =
        Number(
            element.textContent
        ) || 0;

    if (!state.animations) {
        element.textContent =
            target;

        return;
    }

    const difference =
        target - current;

    const steps = 15;

    let step = 0;

    const timer =
        setInterval(
            () => {
                step++;

                element.textContent =
                    Math.round(
                        current
                        + difference
                        * (
                            step
                            / steps
                        )
                    );

                if (
                    step >= steps
                ) {
                    clearInterval(
                        timer
                    );

                    element.textContent =
                        target;
                }
            },
            20
        );
}


/* =========================================================
   NÍVEL
========================================================= */

function calculateXP() {
    return (
        state.favorites.length * 8
        + state.watchlist.length * 5
        + state.watched.length * 20
        + state.comments.length * 15
        + Object.keys(
            state.ratings
        ).length * 10
    );
}

function updateLevel() {
    const xp =
        calculateXP();

    const level =
        Math.floor(
            xp / 100
        ) + 1;

    const progress =
        xp % 100;

    if ($("#profileLevel")) {
        $("#profileLevel")
            .textContent =
            level;
    }

    if ($("#levelProgress")) {
        $("#levelProgress")
            .style.width =
            `${progress}%`;
    }

    if ($("#levelText")) {
        $("#levelText")
            .textContent =
            `${progress}/100 XP`;
    }

    updateAchievements();
}


/* =========================================================
   CONQUISTAS
========================================================= */

function updateAchievements() {
    $$("[data-achievement]")
        .forEach(card => {
            const type =
                card.dataset
                    .achievement;

            let unlocked =
                false;

            switch (type) {
                case "favorite":
                    unlocked =
                        state.favorites
                            .length >= 1;
                    break;

                case "watchlist":
                    unlocked =
                        state.watchlist
                            .length >= 3;
                    break;

                case "watched":
                    unlocked =
                        state.watched
                            .length >= 3;
                    break;

                case "critic":
                    unlocked =
                        Object.keys(
                            state.ratings
                        ).length >= 3;
                    break;

                case "community":
                    unlocked =
                        state.comments
                            .length >= 2;
                    break;

                case "expert":
                    unlocked =
                        calculateXP()
                        >= 300;
                    break;
            }

            card.classList.toggle(
                "unlocked",
                unlocked
            );
        });
}


/* =========================================================
   MODAL SÉRIE
========================================================= */

function openSeries(id) {
    const item =
        series.find(
            serie =>
                serie.id === id
        );

    if (!item) {
        return;
    }

    state.currentSeries =
        item.id;

    const modal =
        $("#seriesModal");

    if (!modal) {
        return;
    }

    const backdrop =
        $("#modalBackdrop");

    if (backdrop) {
        backdrop.style
            .backgroundImage =
            `url("${item.backdrop}")`;
    }

    const poster =
        $("#modalPoster");

    if (poster) {
        poster.src =
            item.poster;

        poster.alt =
            item.title;

        imageFallback(
            poster
        );
    }

    if ($("#modalTitle")) {
        $("#modalTitle")
            .textContent =
            item.title;
    }

    if ($("#modalDescription")) {
        $("#modalDescription")
            .textContent =
            getDescription(item);
    }

    if ($("#modalRating")) {
        $("#modalRating")
            .textContent =
            `★ ${item.rating}`;
    }

    if ($("#modalYear")) {
        $("#modalYear")
            .textContent =
            item.year;
    }

    if ($("#modalGenre")) {
        $("#modalGenre")
            .textContent =
            item.genre;
    }

    if ($("#modalCountry")) {
        $("#modalCountry")
            .textContent =
            item.country;
    }

    if ($("#modalSeasons")) {
        $("#modalSeasons")
            .textContent =
            `${item.seasons} ${t(
                "seasons"
            )}`;
    }

    if ($("#modalEpisodes")) {
        $("#modalEpisodes")
            .textContent =
            `${item.episodes} ${t(
                "episodes"
            )}`;
    }

    if ($("#modalBadge")) {
        $("#modalBadge")
            .textContent =
            item.brazil
                ? "🇧🇷 Brasil"
                : "Netflix";
    }

    renderCast(item);

    renderRecommendations(
        item
    );

    renderStarRating(
        item.id
    );

    renderProgress(
        item.id
    );

    updateModalButtons(
        item.id
    );

    modal.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";
}

function closeSeries() {
    $("#seriesModal")
        ?.classList.remove(
            "open"
        );

    body.style.overflow = "";

    state.currentSeries =
        null;
}

function setupSeriesModal() {
    $("#closeSeriesModal")
        ?.addEventListener(
            "click",
            closeSeries
        );

    $("#seriesModal")
        ?.addEventListener(
            "click",
            event => {
                if (
                    event.target.id
                    === "seriesModal"
                ) {
                    closeSeries();
                }
            }
        );

    $("#modalFavorite")
        ?.addEventListener(
            "click",
            () => {
                if (
                    state.currentSeries
                ) {
                    toggleFavorite(
                        state.currentSeries,
                        $("#modalFavorite")
                    );

                    updateModalButtons(
                        state.currentSeries
                    );
                }
            }
        );

    $("#modalWatchlist")
        ?.addEventListener(
            "click",
            () => {
                if (
                    state.currentSeries
                ) {
                    toggleWatchlist(
                        state.currentSeries,
                        $("#modalWatchlist")
                    );
                }
            }
        );

    $("#modalWatched")
        ?.addEventListener(
            "click",
            () => {
                if (
                    state.currentSeries
                ) {
                    toggleWatched(
                        state.currentSeries
                    );
                }
            }
        );

    $("#modalShare")
        ?.addEventListener(
            "click",
            shareCurrentSeries
        );

    $("#modalTrailer")
        ?.addEventListener(
            "click",
            openTrailer
        );
}

function updateModalButtons(id) {
    $("#modalFavorite")
        ?.classList.toggle(
            "active",
            state.favorites.includes(
                id
            )
        );

    $("#modalWatchlist")
        ?.classList.toggle(
            "active",
            state.watchlist.includes(
                id
            )
        );

    $("#modalWatched")
        ?.classList.toggle(
            "active",
            state.watched.includes(
                id
            )
        );
}


/* =========================================================
   ELENCO
========================================================= */

function renderCast(item) {
    const grid =
        $("#castGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    item.cast.forEach(
        actor => {
            const [
                name,
                character,
                image
            ] = actor;

            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "cast-card";

            card.innerHTML = `
                <img
                    src="${image}"
                    alt="${name}"
                    loading="lazy"
                >

                <div class="cast-card-info">
                    <strong>
                        ${name}
                    </strong>

                    <small>
                        ${character}
                    </small>
                </div>
            `;

            imageFallback(
                $("img", card),
                fallbackActor
            );

            grid.appendChild(
                card
            );
        }
    );
}


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function renderRecommendations(
    current
) {
    const container =
        $("#recommendations");

    if (!container) {
        return;
    }

    let recommended =
        series.filter(
            item =>
                item.id
                !== current.id
                && (
                    item.genre
                    === current.genre
                    || item.country
                    === current.country
                )
        );

    recommended =
        recommended
            .sort(
                () =>
                    Math.random()
                    - 0.5
            )
            .slice(0, 4);

    container.innerHTML = "";

    recommended.forEach(
        item => {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "recommendation-card";

            button.innerHTML = `
                <img
                    src="${item.poster}"
                    alt="${item.title}"
                >

                <span>
                    ${item.title}
                </span>
            `;

            imageFallback(
                $("img", button)
            );

            button.addEventListener(
                "click",
                () =>
                    openSeries(
                        item.id
                    )
            );

            container.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   AVALIAÇÃO
========================================================= */

function renderStarRating(id) {
    const container =
        $("#starRating");

    if (!container) {
        return;
    }

    const current =
        state.ratings[id]
        || 0;

    container.innerHTML = "";

    for (
        let star = 1;
        star <= 5;
        star++
    ) {
        const button =
            document.createElement(
                "button"
            );

        button.type =
            "button";

        button.textContent =
            star <= current
                ? "★"
                : "☆";

        button.addEventListener(
            "click",
            () => {
                state.ratings[id] =
                    star;

                storage.set(
                    "bia_ratings",
                    state.ratings
                );

                renderStarRating(
                    id
                );

                showToast(
                    `${star}/5 ★`,
                    "★"
                );

                updateLevel();
            }
        );

        container.appendChild(
            button
        );
    }
}


/* =========================================================
   PROGRESSO
========================================================= */

function renderProgress(id) {
    const input =
        $("#seriesProgress");

    const text =
        $("#seriesProgressText");

    if (!input) {
        return;
    }

    const value =
        state.progress[id]
        || 0;

    input.value =
        value;

    if (text) {
        text.textContent =
            `${value}%`;
    }

    input.oninput =
        event => {
            const progress =
                Number(
                    event.target.value
                );

            state.progress[id] =
                progress;

            storage.set(
                "bia_progress",
                state.progress
            );

            if (text) {
                text.textContent =
                    `${progress}%`;
            }

            if (
                progress >= 100
                && !state.watched
                    .includes(id)
            ) {
                state.watched.push(
                    id
                );

                storage.set(
                    "bia_watched",
                    state.watched
                );

                updateStats();
            }

            renderContinueWatching();
        };
}


/* =========================================================
   CONTINUAR ASSISTINDO
========================================================= */

function renderContinueWatching() {
    const section =
        $("#continueSection");

    const grid =
        $("#continueGrid");

    if (
        !section
        || !grid
    ) {
        return;
    }

    const items =
        series.filter(
            item => {
                const value =
                    state.progress[
                        item.id
                    ];

                return (
                    value > 0
                    && value < 100
                );
            }
        );

    section.classList.toggle(
        "show",
        items.length > 0
    );

    grid.innerHTML = "";

    items.forEach(
        item => {
            const progress =
                state.progress[
                    item.id
                ];

            const card =
                document.createElement(
                    "button"
                );

            card.className =
                "continue-card";

            card.innerHTML = `
                <img
                    src="${item.backdrop}"
                    alt="${item.title}"
                >

                <div class="continue-content">

                    <strong>
                        ${item.title}
                    </strong>

                    <div class="continue-progress">
                        <span
                            style="width:${progress}%"
                        ></span>
                    </div>

                    <small>
                        ${progress}%
                    </small>

                </div>
            `;

            imageFallback(
                $("img", card)
            );

            card.addEventListener(
                "click",
                () =>
                    openSeries(
                        item.id
                    )
            );

            grid.appendChild(
                card
            );
        }
    );
}


/* =========================================================
   COMPARTILHAR
========================================================= */

async function shareCurrentSeries() {
    const item =
        series.find(
            serie =>
                serie.id
                === state.currentSeries
        );

    if (!item) {
        return;
    }

    const text =
        `${item.title} — Blog da Bia`;

    try {
        if (navigator.share) {
            await navigator.share({
                title: item.title,
                text,
                url: location.href
            });
        } else {
            await navigator.clipboard
                .writeText(
                    location.href
                );

            showToast(
                t("copied"),
                "↗"
            );
        }
    } catch {
        // compartilhamento cancelado
    }
}


/* =========================================================
   TRAILER
========================================================= */

function openTrailer() {
    const item =
        series.find(
            serie =>
                serie.id
                === state.currentSeries
        );

    if (!item) {
        return;
    }

    if ($("#trailerTitle")) {
        $("#trailerTitle")
            .textContent =
            item.title;
    }

    $("#trailerModal")
        ?.classList.add(
            "open"
        );
}

function closeTrailer() {
    $("#trailerModal")
        ?.classList.remove(
            "open"
        );
}

function setupTrailer() {
    $("#closeTrailer")
        ?.addEventListener(
            "click",
            closeTrailer
        );

    $("#trailerModal")
        ?.addEventListener(
            "click",
            event => {
                if (
                    event.target.id
                    === "trailerModal"
                ) {
                    closeTrailer();
                }
            }
        );
}


/* =========================================================
   SÉRIES BRASILEIRAS
========================================================= */

function renderBrazil() {
    const carousel =
        $("#brazilCarousel");

    if (!carousel) {
        return;
    }

    carousel.innerHTML = "";

    series
        .filter(
            item => item.brazil
        )
        .forEach(item => {
            const card =
                document.createElement(
                    "button"
                );

            card.className =
                "brazil-card";

            card.innerHTML = `
                <img
                    src="${item.poster}"
                    alt="${item.title}"
                    loading="lazy"
                >

                <div class="brazil-card-content">
                    <strong>
                        ${item.title}
                    </strong>

                    <small>
                        🇧🇷 ${item.year}
                        · ★ ${item.rating}
                    </small>
                </div>
            `;

            imageFallback(
                $("img", card)
            );

            card.addEventListener(
                "click",
                () =>
                    openSeries(
                        item.id
                    )
            );

            carousel.appendChild(
                card
            );
        });
}


/* =========================================================
   RANKING
========================================================= */

function renderRanking() {
    const list =
        $("#rankingList");

    if (!list) {
        return;
    }

    const ranking =
        [...series]
            .sort(
                (a, b) =>
                    b.rating
                    - a.rating
            )
            .slice(0, 8);

    list.innerHTML = "";

    ranking.forEach(
        (item, index) => {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "ranking-item";

            button.innerHTML = `
                <span class="ranking-position">
                    ${index + 1}
                </span>

                <img
                    src="${item.poster}"
                    alt="${item.title}"
                >

                <span class="ranking-info">
                    <strong>
                        ${item.title}
                    </strong>

                    <small>
                        ${item.genre}
                        · ${item.year}
                    </small>
                </span>

                <span class="ranking-score">
                    ★ ${item.rating}
                </span>
            `;

            imageFallback(
                $("img", button)
            );

            button.addEventListener(
                "click",
                () =>
                    openSeries(
                        item.id
                    )
            );

            list.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   SÉRIE DO DIA
========================================================= */

function getDailySeries() {
    const today =
        new Date();

    const key =
        Number(
            `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`
        );

    return series[
        key % series.length
    ];
}

function renderDailySeries() {
    const item =
        getDailySeries();

    if ($("#dailyTitle")) {
        $("#dailyTitle")
            .textContent =
            item.title;
    }

    if ($("#dailyDescription")) {
        $("#dailyDescription")
            .textContent =
            getDescription(item);
    }

    const image =
        $("#dailyImage");

    if (image) {
        image.src =
            item.poster;

        image.alt =
            item.title;

        imageFallback(
            image
        );
    }

    const button =
        $("#dailyButton");

    if (button) {
        button.onclick =
            () =>
                openSeries(
                    item.id
                );
    }
}


/* =========================================================
   SORTEIO
========================================================= */

function randomSeries() {
    const item =
        series[
            Math.floor(
                Math.random()
                * series.length
            )
        ];

    showToast(
        t("random"),
        "✦"
    );

    setTimeout(
        () =>
            openSeries(
                item.id
            ),
        250
    );
}

function setupRandom() {
    $("#randomSeries")
        ?.addEventListener(
            "click",
            randomSeries
        );

    $("#randomSeriesMobile")
        ?.addEventListener(
            "click",
            randomSeries
        );
}


/* =========================================================
   PESQUISA GLOBAL
========================================================= */

function setupSearch() {
    const overlay =
        $("#searchOverlay");

    const input =
        $("#globalSearch");

    const results =
        $("#searchResults");

    function open() {
        overlay?.classList.add(
            "open"
        );

        body.style.overflow =
            "hidden";

        setTimeout(
            () => input?.focus(),
            150
        );

        renderSearchResults("");
    }

    function close() {
        overlay?.classList.remove(
            "open"
        );

        body.style.overflow = "";
    }

    $("#searchBtn")
        ?.addEventListener(
            "click",
            open
        );

    $("#closeSearch")
        ?.addEventListener(
            "click",
            close
        );

    overlay?.addEventListener(
        "click",
        event => {
            if (
                event.target
                === overlay
            ) {
                close();
            }
        }
    );

    input?.addEventListener(
        "input",
        event =>
            renderSearchResults(
                event.target.value
            )
    );

    $("#clearGlobalSearch")
        ?.addEventListener(
            "click",
            () => {
                if (input) {
                    input.value = "";
                    input.focus();
                }

                renderSearchResults(
                    ""
                );
            }
        );

    function renderSearchResults(
        query
    ) {
        if (!results) {
            return;
        }

        const normalized =
            query
                .trim()
                .toLowerCase();

        const matches =
            series
                .filter(item =>
                    !normalized
                    || item.title
                        .toLowerCase()
                        .includes(
                            normalized
                        )
                    || item.genre
                        .toLowerCase()
                        .includes(
                            normalized
                        )
                )
                .slice(0, 8);

        results.innerHTML = "";

        matches.forEach(
            item => {
                const button =
                    document.createElement(
                        "button"
                    );

                button.className =
                    "search-result";

                button.innerHTML = `
                    <img
                        src="${item.poster}"
                        alt="${item.title}"
                    >

                    <span>
                        <strong>
                            ${item.title}
                        </strong>

                        <small>
                            ${item.genre}
                            · ${item.year}
                        </small>
                    </span>

                    <span>
                        ★ ${item.rating}
                    </span>
                `;

                imageFallback(
                    $("img", button)
                );

                button.addEventListener(
                    "click",
                    () => {
                        close();

                        openSeries(
                            item.id
                        );
                    }
                );

                results.appendChild(
                    button
                );
            }
        );
    }
}


/* =========================================================
   COMENTÁRIOS
========================================================= */

function setupComments() {
    const form =
        $("#commentForm");

    const textarea =
        $("#commentText");

    const counter =
        $("#commentCharacters");

    textarea?.addEventListener(
        "input",
        () => {
            if (counter) {
                counter.textContent =
                    `${textarea.value.length}/500`;
            }
        }
    );

    populateCommentSeries();

    form?.addEventListener(
        "submit",
        event => {
            event.preventDefault();

            const name =
                $("#commentName")
                    ?.value
                    .trim()
                || state.profile.name
                || "Visitante";

            const text =
                $("#commentText")
                    ?.value
                    .trim();

            const seriesId =
                $("#commentSeries")
                    ?.value
                || "";

            const spoiler =
                Boolean(
                    $("#commentSpoiler")
                        ?.checked
                );

            if (!text) {
                return;
            }

            const comment = {
                id:
                    Date.now()
                    .toString(),

                name,
                text,

                seriesId,

                spoiler,

                likes: 0,

                liked: false,

                createdAt:
                    Date.now(),

                replies: []
            };

            state.comments.unshift(
                comment
            );

            storage.set(
                "bia_comments",
                state.comments
            );

            form.reset();

            if (counter) {
                counter.textContent =
                    "0/500";
            }

            renderComments();

            updateStats();

            showToast(
                t("commentPublished"),
                "♥"
            );
        }
    );

    $("#commentSort")
        ?.addEventListener(
            "change",
            renderComments
        );

    renderComments();
}

function populateCommentSeries() {
    const select =
        $("#commentSeries");

    if (!select) {
        return;
    }

    const existing =
        new Set(
            [...select.options]
                .map(
                    option =>
                        option.value
                )
        );

    series.forEach(
        item => {
            if (
                existing.has(
                    item.id
                )
            ) {
                return;
            }

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                item.id;

            option.textContent =
                item.title;

            select.appendChild(
                option
            );
        }
    );
}

function renderComments() {
    const list =
        $("#commentsList");

    if (!list) {
        return;
    }

    let comments =
        [...state.comments];

    const sort =
        $("#commentSort")
            ?.value
        || "newest";

    if (sort === "oldest") {
        comments.sort(
            (a, b) =>
                a.createdAt
                - b.createdAt
        );
    } else if (
        sort === "likes"
    ) {
        comments.sort(
            (a, b) =>
                b.likes
                - a.likes
        );
    } else {
        comments.sort(
            (a, b) =>
                b.createdAt
                - a.createdAt
        );
    }

    list.innerHTML = "";

    comments.forEach(
        comment => {
            const card =
                document.createElement(
                    "article"
                );

            card.className =
                "comment-card";

            const item =
                series.find(
                    serie =>
                        serie.id
                        === comment.seriesId
                );

            const initials =
                comment.name
                    .split(" ")
                    .map(
                        word =>
                            word[0]
                    )
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();

            card.innerHTML = `
                <div class="comment-top">

                    <div class="comment-author">

                        <div class="comment-avatar">
                            ${initials || "♥"}
                        </div>

                        <div>
                            <strong>
                                ${escapeHTML(
                                    comment.name
                                )}
                            </strong>

                            <small>
                                ${formatDate(
                                    comment.createdAt
                                )}
                            </small>
                        </div>

                    </div>

                    ${
                        item
                            ? `
                            <span class="comment-series-badge">
                                ${item.title}
                            </span>
                            `
                            : ""
                    }

                </div>

                <p class="comment-text ${
                    comment.spoiler
                        ? "spoiler"
                        : ""
                }">
                    ${escapeHTML(
                        comment.text
                    )}
                </p>

                ${
                    comment.spoiler
                        ? `
                        <button
                            class="spoiler-button"
                            type="button"
                        >
                            ${
                                state.language
                                === "en"
                                    ? "Show spoiler"
                                    : "Mostrar spoiler"
                            }
                        </button>
                        `
                        : ""
                }

                <div class="comment-actions">

                    <button
                        class="comment-like ${
                            comment.liked
                                ? "active"
                                : ""
                        }"
                        type="button"
                    >
                        ♥ ${comment.likes}
                    </button>

                    <button
                        class="comment-reply"
                        type="button"
                    >
                        ${
                            state.language
                            === "en"
                                ? "Reply"
                                : "Responder"
                        }
                    </button>

                    <button
                        class="comment-delete"
                        type="button"
                    >
                        ${
                            state.language
                            === "en"
                                ? "Delete"
                                : "Excluir"
                        }
                    </button>

                </div>

                <div class="comment-reply-box">

                    <input
                        type="text"
                        maxlength="200"
                        placeholder="${
                            state.language
                            === "en"
                                ? "Write a reply..."
                                : "Escreva uma resposta..."
                        }"
                    >

                    <button type="button">
                        ${
                            state.language
                            === "en"
                                ? "Send"
                                : "Enviar"
                        }
                    </button>

                </div>

                <div class="reply-list">
                    ${
                        (
                            comment.replies
                            || []
                        )
                        .map(
                            reply => `
                            <div class="reply">
                                <strong>
                                    ${escapeHTML(
                                        reply.name
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
            `;

            const spoilerText =
                $(".comment-text", card);

            $(".spoiler-button", card)
                ?.addEventListener(
                    "click",
                    event => {
                        spoilerText
                            .classList
                            .toggle(
                                "revealed"
                            );

                        event.currentTarget
                            .textContent =
                            spoilerText
                                .classList
                                .contains(
                                    "revealed"
                                )
                                ? (
                                    state.language
                                    === "en"
                                        ? "Hide spoiler"
                                        : "Ocultar spoiler"
                                )
                                : (
                                    state.language
                                    === "en"
                                        ? "Show spoiler"
                                        : "Mostrar spoiler"
                                );
                    }
                );

            $(".comment-like", card)
                .addEventListener(
                    "click",
                    () => {
                        comment.liked =
                            !comment.liked;

                        comment.likes +=
                            comment.liked
                                ? 1
                                : -1;

                        saveComments();
                    }
                );

            $(".comment-delete", card)
                .addEventListener(
                    "click",
                    () => {
                        state.comments =
                            state.comments
                                .filter(
                                    item =>
                                        item.id
                                        !== comment.id
                                );

                        saveComments();

                        updateStats();
                    }
                );

            const replyButton =
                $(".comment-reply", card);

            const replyBox =
                $(".comment-reply-box", card);

            replyButton
                .addEventListener(
                    "click",
                    () =>
                        replyBox
                            .classList
                            .toggle(
                                "open"
                            )
                );

            const replyInput =
                $("input", replyBox);

            const replySend =
                $("button", replyBox);

            replySend
                .addEventListener(
                    "click",
                    () => {
                        const text =
                            replyInput
                                .value
                                .trim();

                        if (!text) {
                            return;
                        }

                        comment.replies =
                            comment.replies
                            || [];

                        comment.replies.push({
                            name:
                                state.profile
                                    .name
                                || "Visitante",

                            text
                        });

                        saveComments();
                    }
                );

            list.appendChild(
                card
            );
        }
    );

    if ($("#commentCount")) {
        $("#commentCount")
            .textContent =
            state.comments.length;
    }
}

function saveComments() {
    storage.set(
        "bia_comments",
        state.comments
    );

    renderComments();
}

function escapeHTML(value) {
    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        value;

    return div.innerHTML;
}

function formatDate(timestamp) {
    return new Intl.DateTimeFormat(
        state.language === "en"
            ? "en-US"
            : "pt-BR",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    ).format(
        new Date(timestamp)
    );
}


/* =========================================================
   PERFIL
========================================================= */

function setupProfile() {
    updateProfile();

    $("#avatarEditBtn")
        ?.addEventListener(
            "click",
            openProfileModal
        );

    $("#closeProfileModal")
        ?.addEventListener(
            "click",
            closeProfileModal
        );

    $("#profileModal")
        ?.addEventListener(
            "click",
            event => {
                if (
                    event.target.id
                    === "profileModal"
                ) {
                    closeProfileModal();
                }
            }
        );

    $$(".avatar-picker button")
        .forEach(button => {
            button.addEventListener(
                "click",
                () => {
                    $$(".avatar-picker button")
                        .forEach(btn =>
                            btn.classList
                                .remove(
                                    "active"
                                )
                        );

                    button.classList.add(
                        "active"
                    );
                }
            );
        });

    $("#saveProfile")
        ?.addEventListener(
            "click",
            () => {
                const name =
                    $("#profileNameInput")
                        ?.value
                        .trim();

                const active =
                    $(
                        ".avatar-picker button.active"
                    );

                if (name) {
                    state.profile.name =
                        name;
                }

                if (active) {
                    state.profile.avatar =
                        active.dataset.avatar
                        || active.textContent;
                }

                storage.set(
                    "bia_profile",
                    state.profile
                );

                updateProfile();

                closeProfileModal();

                showToast(
                    t("profileSaved"),
                    "♥"
                );
            }
        );
}

function updateProfile() {
    if ($("#profileName")) {
        $("#profileName")
            .textContent =
            state.profile.name;
    }

    if ($("#profileAvatar")) {
        $("#profileAvatar")
            .textContent =
            state.profile.avatar;
    }
}

function openProfileModal() {
    const modal =
        $("#profileModal");

    if (!modal) {
        return;
    }

    if ($("#profileNameInput")) {
        $("#profileNameInput")
            .value =
            state.profile.name;
    }

    $$(".avatar-picker button")
        .forEach(button =>
            button.classList.toggle(
                "active",
                (
                    button.dataset.avatar
                    || button.textContent
                )
                === state.profile.avatar
            )
        );

    modal.classList.add(
        "open"
    );

    body.style.overflow =
        "hidden";
}

function closeProfileModal() {
    $("#profileModal")
        ?.classList.remove(
            "open"
        );

    body.style.overflow = "";
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
                pt: "Romântico",
                en: "Romantic",
                genre: "Romance"
            },
            {
                pt: "Misterioso",
                en: "Mysterious",
                genre: "Mistério"
            },
            {
                pt: "Tenso",
                en: "Intense",
                genre: "Suspense"
            },
            {
                pt: "Dramático",
                en: "Dramatic",
                genre: "Drama"
            }
        ]
    },

    {
        pt:
            "O que mais importa?",
        en:
            "What matters most?",
        options: [
            {
                pt: "Romance",
                en: "Romance",
                genre: "Romance"
            },
            {
                pt: "Segredos",
                en: "Secrets",
                genre: "Mistério"
            },
            {
                pt: "Personagens",
                en: "Characters",
                genre: "Drama"
            },
            {
                pt: "Ação",
                en: "Action",
                genre: "Crime"
            }
        ]
    },

    {
        pt:
            "Qual produção você prefere?",
        en:
            "Which production do you prefer?",
        options: [
            {
                pt: "Brasil 🇧🇷",
                en: "Brazil 🇧🇷",
                country: "Brasil"
            },
            {
                pt: "Estados Unidos",
                en: "United States",
                country:
                    "Estados Unidos"
            },
            {
                pt: "Europa",
                en: "Europe",
                country:
                    "Reino Unido"
            },
            {
                pt: "Tanto faz",
                en: "Anything",
                country: null
            }
        ]
    }
];

function setupQuiz() {
    $("#startQuiz")
        ?.addEventListener(
            "click",
            openQuiz
        );

    $("#closeQuiz")
        ?.addEventListener(
            "click",
            closeQuiz
        );

    $("#quizModal")
        ?.addEventListener(
            "click",
            event => {
                if (
                    event.target.id
                    === "quizModal"
                ) {
                    closeQuiz();
                }
            }
        );
}

function openQuiz() {
    state.quizIndex = 0;

    state.quizAnswers = [];

    $("#quizModal")
        ?.classList.add(
            "open"
        );

    body.style.overflow =
        "hidden";

    renderQuizQuestion();
}

function closeQuiz() {
    $("#quizModal")
        ?.classList.remove(
            "open"
        );

    body.style.overflow = "";
}

function renderQuizQuestion() {
    const question =
        quizQuestions[
            state.quizIndex
        ];

    const box =
        $("#quizContent");

    if (!box) {
        return;
    }

    if (!question) {
        showQuizResult();
        return;
    }

    const progress =
        (
            state.quizIndex
            / quizQuestions.length
        ) * 100;

    if ($("#quizProgressBar")) {
        $("#quizProgressBar")
            .style.width =
            `${progress}%`;
    }

    box.innerHTML = `
        <span class="eyebrow">
            ${
                state.language
                === "en"
                    ? `QUESTION ${
                        state.quizIndex + 1
                    }`
                    : `PERGUNTA ${
                        state.quizIndex + 1
                    }`
            }
        </span>

        <h3 class="quiz-question">
            ${
                state.language
                === "en"
                    ? question.en
                    : question.pt
            }
        </h3>

        <div class="quiz-options"></div>
    `;

    const options =
        $(".quiz-options", box);

    question.options.forEach(
        option => {
            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "quiz-option";

            button.textContent =
                state.language
                === "en"
                    ? option.en
                    : option.pt;

            button.addEventListener(
                "click",
                () => {
                    state.quizAnswers.push(
                        option
                    );

                    state.quizIndex++;

                    renderQuizQuestion();
                }
            );

            options.appendChild(
                button
            );
        }
    );
}

function showQuizResult() {
    const genreScores = {};

    let preferredCountry =
        null;

    state.quizAnswers.forEach(
        answer => {
            if (answer.genre) {
                genreScores[
                    answer.genre
                ] =
                    (
                        genreScores[
                            answer.genre
                        ]
                        || 0
                    ) + 1;
            }

            if (answer.country) {
                preferredCountry =
                    answer.country;
            }
        }
    );

    const bestGenre =
        Object.entries(
            genreScores
        )
        .sort(
            (a, b) =>
                b[1] - a[1]
        )[0]?.[0];

    let candidates =
        series.filter(
            item =>
                !bestGenre
                || item.genre
                === bestGenre
                || (
                    bestGenre
                    === "Mistério"
                    && item.genre
                    === "Suspense"
                )
        );

    if (preferredCountry) {
        const countryMatches =
            candidates.filter(
                item =>
                    item.country
                    === preferredCountry
            );

        if (
            countryMatches.length
        ) {
            candidates =
                countryMatches;
        }
    }

    const result =
        candidates[
            Math.floor(
                Math.random()
                * candidates.length
            )
        ]
        || series[0];

    if ($("#quizProgressBar")) {
        $("#quizProgressBar")
            .style.width =
            "100%";
    }

    const box =
        $("#quizContent");

    box.innerHTML = `
        <span class="eyebrow">
            ${
                state.language
                === "en"
                    ? "YOUR SERIES"
                    : "SUA SÉRIE"
            }
        </span>

        <h3 class="quiz-question">
            ${result.title}
        </h3>

        <img
            class="quiz-result-poster"
            src="${result.poster}"
            alt="${result.title}"
        >

        <p>
            ${getDescription(result)}
        </p>

        <button
            class="primary-btn"
            id="quizResultButton"
            type="button"
        >
            ${
                state.language
                === "en"
                    ? "See details"
                    : "Ver detalhes"
            }
        </button>
    `;

    imageFallback(
        $(".quiz-result-poster", box)
    );

    $("#quizResultButton")
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


/* =========================================================
   SETTINGS
========================================================= */

function setupSettings() {
    const panel =
        $("#settingsPanel");

    function open() {
        panel?.classList.add(
            "open"
        );
    }

    function close() {
        panel?.classList.remove(
            "open"
        );
    }

    $("#settingsBtn")
        ?.addEventListener(
            "click",
            open
        );

    $("#settingsFloating")
        ?.addEventListener(
            "click",
            open
        );

    $("#closeSettings")
        ?.addEventListener(
            "click",
            close
        );

    $$(".theme-color")
        .forEach(button => {
            button.addEventListener(
                "click",
                () =>
                    setColorTheme(
                        button.dataset.theme
                    )
            );
        });

    const darkToggle =
        $("#darkModeToggle");

    const animationToggle =
        $("#animationToggle");

    const particleToggle =
        $("#particleToggle");

    const cursorToggle =
        $("#cursorToggle");

    if (darkToggle) {
        darkToggle.checked =
            state.darkMode;

        darkToggle.addEventListener(
            "change",
            event => {
                state.darkMode =
                    event.target.checked;

                storage.set(
                    "bia_dark",
                    state.darkMode
                );

                applyPreferences();
            }
        );
    }

    if (animationToggle) {
        animationToggle.checked =
            state.animations;

        animationToggle
            .addEventListener(
                "change",
                event => {
                    state.animations =
                        event.target.checked;

                    storage.set(
                        "bia_animations",
                        state.animations
                    );

                    applyPreferences();
                }
            );
    }

    if (particleToggle) {
        particleToggle.checked =
            state.particles;

        particleToggle
            .addEventListener(
                "change",
                event => {
                    state.particles =
                        event.target.checked;

                    storage.set(
                        "bia_particles",
                        state.particles
                    );

                    createParticles();
                }
            );
    }

    if (cursorToggle) {
        cursorToggle.checked =
            state.cursor;

        cursorToggle
            .addEventListener(
                "change",
                event => {
                    state.cursor =
                        event.target.checked;

                    storage.set(
                        "bia_cursor",
                        state.cursor
                    );

                    location.reload();
                }
            );
    }

    setColorTheme(
        state.theme,
        false
    );

    applyPreferences();
}

function setColorTheme(
    theme,
    notify = true
) {
    state.theme =
        theme || "bia";

    storage.set(
        "bia_theme",
        state.theme
    );

    body.dataset.colorTheme =
        state.theme;

    $$(".theme-color")
        .forEach(button =>
            button.classList.toggle(
                "active",
                button.dataset.theme
                === state.theme
            )
        );

    if (notify) {
        showToast(
            t("saved"),
            "✦"
        );
    }
}

function applyPreferences() {
    body.classList.toggle(
        "dark-mode",
        state.darkMode
    );

    body.classList.toggle(
        "animations-off",
        !state.animations
    );
}


/* =========================================================
   EQUIPE — EFEITO SPOTLIGHT
========================================================= */

function setupTeamCards() {
    $$(".person-card")
        .forEach(card => {
            const spotlight =
                $(".person-spotlight", card);

            card.addEventListener(
                "mousemove",
                event => {
                    if (
                        !spotlight
                        || !state.animations
                    ) {
                        return;
                    }

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX
                        - rect.left;

                    const y =
                        event.clientY
                        - rect.top;

                    spotlight.style.left =
                        `${x}px`;

                    spotlight.style.top =
                        `${y}px`;

                    const rotateY =
                        (
                            x
                            / rect.width
                            - 0.5
                        )
                        * 3;

                    const rotateX =
                        (
                            0.5
                            - y
                            / rect.height
                        )
                        * 3;

                    card.style.transform =
                        `perspective(1000px)
                         translateY(-5px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)`;
                }
            );

            card.addEventListener(
                "mouseleave",
                () => {
                    card.style.transform =
                        "";
                }
            );
        });
}


/* =========================================================
   REVEAL AO ROLAR
========================================================= */

function setupReveal() {
    if (
        !("IntersectionObserver"
            in window)
    ) {
        return;
    }

    const targets =
        $$(
            ".content-section, .daily-card, .profile-dashboard, .quiz-card, .person-card, .data-card"
        );

    targets.forEach(
        element =>
            element.classList.add(
                "reveal-ready"
            )
    );

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

                            observer
                                .unobserve(
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

    targets.forEach(
        element =>
            observer.observe(
                element
            )
    );
}


/* =========================================================
   ATALHOS DE TECLADO
========================================================= */

function setupKeyboard() {
    document.addEventListener(
        "keydown",
        event => {
            const tag =
                document.activeElement
                    ?.tagName;

            const typing =
                [
                    "INPUT",
                    "TEXTAREA",
                    "SELECT"
                ].includes(tag);

            if (
                event.key === "Escape"
            ) {
                closeSeries();
                closeTrailer();
                closeQuiz();
                closeProfileModal();

                $("#searchOverlay")
                    ?.classList.remove(
                        "open"
                    );

                $("#settingsPanel")
                    ?.classList.remove(
                        "open"
                    );

                $("#mobileMenu")
                    ?.classList.remove(
                        "open"
                    );

                $("#menuOverlay")
                    ?.classList.remove(
                        "show"
                    );

                body.style.overflow =
                    "";
            }

            if (
                !typing
                && event.key === "/"
            ) {
                event.preventDefault();

                $("#searchBtn")
                    ?.click();
            }

            if (
                !typing
                && event.key
                    .toLowerCase()
                === "r"
            ) {
                randomSeries();
            }

            if (
                !typing
                && event.key
                    .toLowerCase()
                === "d"
            ) {
                state.darkMode =
                    !state.darkMode;

                storage.set(
                    "bia_dark",
                    state.darkMode
                );

                applyPreferences();

                if (
                    $("#darkModeToggle")
                ) {
                    $("#darkModeToggle")
                        .checked =
                        state.darkMode;
                }
            }
        }
    );
}


/* =========================================================
   LIMPAR DADOS
========================================================= */

function setupClearData() {
    $("#clearData")
        ?.addEventListener(
            "click",
            () => {
                const message =
                    state.language
                    === "en"
                        ? "Delete all locally saved blog data?"
                        : "Apagar todos os dados salvos localmente pelo blog?";

                if (
                    !confirm(message)
                ) {
                    return;
                }

                [
                    "bia_favorites",
                    "bia_watchlist",
                    "bia_watched",
                    "bia_likes",
                    "bia_ratings",
                    "bia_progress",
                    "bia_comments",
                    "bia_profile"
                ].forEach(
                    key =>
                        localStorage
                            .removeItem(
                                key
                            )
                );

                showToast(
                    t("dataCleared"),
                    "✓"
                );

                setTimeout(
                    () =>
                        location.reload(),
                    800
                );
            }
        );
}


/* =========================================================
   NAVEGAÇÃO SUAVE
========================================================= */

function setupNavigation() {
    $$('a[href^="#"]')
        .forEach(link => {
            link.addEventListener(
                "click",
                event => {
                    const id =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !id
                        || id === "#"
                    ) {
                        return;
                    }

                    const target =
                        $(id);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });
}


/* =========================================================
   FAVORITOS HEADER
========================================================= */

function setupFavoriteShortcut() {
    $("#favoritesBtn")
        ?.addEventListener(
            "click",
            () => {
                state.currentFilter =
                    "favorites";

                $$(".filter-btn")
                    .forEach(
                        button =>
                            button.classList
                                .toggle(
                                    "active",
                                    button.dataset
                                        .filter
                                    === "favorites"
                                )
                    );

                renderSeries();

                $("#series")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });
            }
        );
}


/* =========================================================
   BOTÃO BRASIL
========================================================= */

function setupBrazilShortcut() {
    $("#showBrazilSeries")
        ?.addEventListener(
            "click",
            () => {
                state.currentFilter =
                    "brazil";

                $$(".filter-btn")
                    .forEach(
                        button =>
                            button.classList
                                .toggle(
                                    "active",
                                    button.dataset
                                        .filter
                                    === "brazil"
                                )
                    );

                renderSeries();

                $("#series")
                    ?.scrollIntoView({
                        behavior:
                            "smooth"
                    });
            }
        );
}


/* =========================================================
   IMAGEM DA EQUIPE
========================================================= */

function setupTeamImages() {
    const beatriz =
        $("#beatrizImage");

    const bayerlee =
        $("#bayerleeImage");

    if (beatriz) {
        beatriz.src =
            "Beatriz.jpg";

        imageFallback(
            beatriz,
            "https://placehold.co/500x500/cb74b8/ffffff?text=Beatriz"
        );
    }

    if (bayerlee) {
        bayerlee.src =
            "Bayerlee.jpg";

        imageFallback(
            bayerlee,
            "https://placehold.co/500x500/765ed1/ffffff?text=Bayerlee"
        );
    }
}


/* =========================================================
   ANO FOOTER
========================================================= */

function setupFooterYear() {
    const year =
        $("#currentYear");

    if (year) {
        year.textContent =
            new Date()
                .getFullYear();
    }
}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function init() {
    setupLoader();

    applyImageFallbacks();

    setupScroll();

    setupMobileMenu();

    setupHeartCursor();

    setupCursorTrail();

    setupClickHearts();

    createParticles();

    setupSettings();

    setupLanguage();

    setupHero();

    setupCatalog();

    setupSeriesModal();

    setupTrailer();

    setupSearch();

    setupRandom();

    setupComments();

    setupProfile();

    setupQuiz();

    setupTeamCards();

    setupTeamImages();

    setupReveal();

    setupKeyboard();

    setupClearData();

    setupNavigation();

    setupFavoriteShortcut();

    setupBrazilShortcut();

    setupFooterYear();

    renderBrazil();

    renderRanking();

    renderDailySeries();

    renderContinueWatching();

    updateStats();
}


/* =========================================================
   START
========================================================= */

if (
    document.readyState
    === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        init
    );
} else {
    init();
}