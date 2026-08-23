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
   BANCO DE DADOS — 20 SÉRIES
========================================================= */

const seriesData = [

    /* =====================================================
       01 — STRANGER THINGS
    ====================================================== */

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

        description: [
            "Na pequena cidade de Hawkins, o desaparecimento de um garoto revela experimentos secretos, acontecimentos sobrenaturais e uma dimensão assustadora.",
            "Stranger Things mistura amizade, suspense, aventura e nostalgia, criando personagens que fazem a gente se apegar cada vez mais."
        ],

        tags: [
            "anos 80",
            "amizade",
            "mistério",
            "sobrenatural"
        ],

        quote:
            "Hawkins pode até parecer tranquila, mas a gente sabe que nunca é.",

        phrase:
            "uma das minhas favoritas ♡",

        trailer:
            "https://www.youtube.com/embed/b9EkMc79ZSU",

        cast: [
            ["Millie Bobby Brown", "Eleven"],
            ["Finn Wolfhard", "Mike Wheeler"],
            ["Noah Schnapp", "Will Byers"],
            ["Gaten Matarazzo", "Dustin Henderson"],
            ["Caleb McLaughlin", "Lucas Sinclair"],
            ["Sadie Sink", "Max Mayfield"]
        ]
    },


    /* =====================================================
       02 — RIVERDALE
    ====================================================== */

    {
        id: "riverdale",
        title: "Riverdale",
        year: 2017,
        seasons: 7,
        genre: "Drama",

        genres: [
            "Drama",
            "Mistério",
            "Romance"
        ],

        age: "16",
        rating: 3.9,

        poster:
            "https://placehold.co/500x750/6c233d/ffffff?text=Riverdale",

        description: [
            "Archie, Betty, Veronica e Jughead vivem em uma cidade cheia de segredos, crimes e acontecimentos que parecem ficar mais estranhos a cada temporada.",
            "Entre romances, amizades, investigações e muito drama adolescente, Riverdale é daquelas séries que simplesmente abraçam o caos."
        ],

        tags: [
            "adolescente",
            "mistério",
            "romance",
            "crime"
        ],

        quote:
            "Em Riverdale, uma semana tranquila parece ser praticamente impossível.",

        phrase:
            "caótica, estranha e impossível de esquecer.",

        trailer:
            "https://www.youtube.com/embed/HxtLlByaYTc",

        cast: [
            ["KJ Apa", "Archie Andrews"],
            ["Lili Reinhart", "Betty Cooper"],
            ["Camila Mendes", "Veronica Lodge"],
            ["Cole Sprouse", "Jughead Jones"],
            ["Madelaine Petsch", "Cheryl Blossom"]
        ]
    },


    /* =====================================================
       03 — GOSSIP GIRL
    ====================================================== */

    {
        id: "gossip-girl",
        title: "Gossip Girl",
        year: 2007,
        seasons: 6,
        genre: "Drama",

        genres: [
            "Drama",
            "Romance"
        ],

        age: "16",
        rating: 4.5,

        poster:
            "https://placehold.co/500x750/b79ab8/ffffff?text=Gossip+Girl",

        description: [
            "No Upper East Side de Manhattan, jovens privilegiados têm praticamente todos os seus segredos expostos por uma blogueira anônima.",
            "Luxo, amizade, romance, traição e muita fofoca transformaram Gossip Girl em uma das séries adolescentes mais lembradas."
        ],

        tags: [
            "Nova York",
            "romance",
            "fofoca",
            "luxo"
        ],

        quote:
            "Nenhum segredo permanece escondido por muito tempo.",

        phrase:
            "xoxo, Gossip Girl ♡",

        trailer:
            "https://www.youtube.com/embed/eCg1RN-dyQk",

        cast: [
            ["Blake Lively", "Serena"],
            ["Leighton Meester", "Blair"],
            ["Penn Badgley", "Dan"],
            ["Ed Westwick", "Chuck"],
            ["Chace Crawford", "Nate"]
        ]
    },


    /* =====================================================
       04 — YOU
    ====================================================== */

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
            "https://placehold.co/500x750/471e25/ffffff?text=YOU",

        description: [
            "Joe Goldberg parece inteligente, educado e romântico, mas sua maneira de enxergar relacionamentos rapidamente revela um lado obsessivo e perigoso.",
            "A série coloca o espectador dentro dos pensamentos de Joe enquanto suas escolhas ficam cada vez mais absurdas."
        ],

        tags: [
            "crime",
            "obsessão",
            "psicológico",
            "suspense"
        ],

        quote:
            "Joe sempre encontra uma maneira absurda de justificar o injustificável.",

        phrase:
            "problemático e extremamente viciante.",

        trailer:
            "https://www.youtube.com/embed/ga1m0wjzscU",

        cast: [
            ["Penn Badgley", "Joe Goldberg"],
            ["Victoria Pedretti", "Love Quinn"],
            ["Elizabeth Lail", "Beck"],
            ["Tati Gabrielle", "Marienne"]
        ]
    },


    /* =====================================================
       05 — LA CASA DE PAPEL
    ====================================================== */

    {
        id: "la-casa-de-papel",
        title: "La Casa de Papel",
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

        poster:
            "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",

        description: [
            "O Professor reúne criminosos com habilidades diferentes para executar um plano extremamente ambicioso.",
            "Estratégia, ação, relações pessoais e inúmeras reviravoltas transformam cada parte do assalto em um verdadeiro caos."
        ],

        tags: [
            "assalto",
            "estratégia",
            "ação",
            "Espanha"
        ],

        quote:
            "O plano pode ser perfeito. As pessoas nunca são.",

        phrase:
            "Bella Ciao nunca mais foi a mesma.",

        trailer:
            "https://www.youtube.com/embed/_InqQJRqGW4",

        cast: [
            ["Álvaro Morte", "Professor"],
            ["Úrsula Corberó", "Tokyo"],
            ["Pedro Alonso", "Berlin"],
            ["Itziar Ituño", "Lisboa"],
            ["Jaime Lorente", "Denver"]
        ]
    },


    /* =====================================================
       06 — ALICE IN BORDERLAND
    ====================================================== */

    {
        id: "alice-in-borderland",
        title: "Alice in Borderland",
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

        poster:
            "https://image.tmdb.org/t/p/w500/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",

        description: [
            "Arisu acaba em uma versão quase vazia de Tóquio, onde precisa participar de jogos perigosos para continuar vivo.",
            "Cada desafio testa inteligência, coragem, força e a vontade de sobreviver."
        ],

        tags: [
            "Japão",
            "jogos",
            "sobrevivência",
            "ação"
        ],

        quote:
            "Nesse mundo, cada carta pode significar uma nova chance ou o fim.",

        phrase:
            "um jogo que você não gostaria de jogar.",

        trailer:
            "https://www.youtube.com/embed/49_44FFKZ1M",

        cast: [
            ["Kento Yamazaki", "Arisu"],
            ["Tao Tsuchiya", "Usagi"],
            ["Nijiro Murakami", "Chishiya"],
            ["Aya Asahina", "Kuina"]
        ]
    },


    /* =====================================================
       07 — OUTER BANKS
    ====================================================== */

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

        description: [
            "John B e seus amigos encontram pistas envolvendo um tesouro perdido e o misterioso desaparecimento de seu pai.",
            "A investigação coloca os Pogues em uma aventura cheia de perseguições, romances, rivalidades e situações perigosas."
        ],

        tags: [
            "praia",
            "tesouro",
            "amizade",
            "aventura"
        ],

        quote:
            "Pogues juntos, não importa o tamanho da confusão.",

        phrase:
            "aventura, praia e caos ♡",

        trailer:
            "https://www.youtube.com/embed/uk_hFfUFXh4",

        cast: [
            ["Chase Stokes", "John B"],
            ["Madelyn Cline", "Sarah"],
            ["Rudy Pankow", "JJ"],
            ["Jonathan Daviss", "Pope"],
            ["Madison Bailey", "Kiara"]
        ]
    },


    /* =====================================================
       08 — ROUND 6
    ====================================================== */

    {
        id: "round-6",
        title: "Round 6",
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

        poster:
            "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",

        description: [
            "Pessoas endividadas recebem um convite misterioso para competir por um prêmio gigantesco.",
            "O problema é que brincadeiras aparentemente infantis possuem consequências extremamente perigosas."
        ],

        tags: [
            "Coreia",
            "jogos",
            "sobrevivência",
            "drama"
        ],

        quote:
            "Uma brincadeira simples pode se transformar em uma decisão impossível.",

        phrase:
            "brincadeiras infantis nunca foram tão tensas.",

        trailer:
            "https://www.youtube.com/embed/oqxAJKy0ii4",

        cast: [
            ["Lee Jung-jae", "Gi-hun"],
            ["Lee Byung-hun", "Front Man"],
            ["Wi Ha-jun", "Jun-ho"],
            ["Jung Ho-yeon", "Sae-byeok"]
        ]
    },


    /* =====================================================
       09 — WEDNESDAY
    ====================================================== */

    {
        id: "wednesday",
        title: "Wednesday",
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

        poster:
            "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",

        description: [
            "Wednesday Addams começa a estudar na Academia Nevermore, uma escola cheia de estudantes incomuns.",
            "Enquanto tenta entender seus poderes, ela se envolve em uma investigação cheia de segredos e acontecimentos misteriosos."
        ],

        tags: [
            "Nevermore",
            "mistério",
            "gótico",
            "fantasia"
        ],

        quote:
            "O sarcasmo dela provavelmente é mais perigoso que qualquer monstro.",

        phrase:
            "sombria, sarcástica e estilosa.",

        trailer:
            "https://www.youtube.com/embed/Di310WS8zLk",

        cast: [
            ["Jenna Ortega", "Wednesday Addams"],
            ["Emma Myers", "Enid Sinclair"],
            ["Hunter Doohan", "Tyler"],
            ["Joy Sunday", "Bianca"],
            ["Catherine Zeta-Jones", "Morticia"]
        ]
    },


    /* =====================================================
       10 — THE UMBRELLA ACADEMY
    ====================================================== */

    {
        id: "umbrella-academy",
        title: "The Umbrella Academy",
        year: 2019,
        seasons: 4,
        genre: "Fantasia",

        genres: [
            "Fantasia",
            "Ação",
            "Drama"
        ],

        age: "16",
        rating: 4.4,

        poster:
            "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",

        description: [
            "Irmãos adotivos com habilidades extraordinárias se reencontram depois da morte do homem que os criou.",
            "Além dos problemas familiares, eles precisam lidar com viagens no tempo, ameaças e possíveis fins do mundo."
        ],

        tags: [
            "superpoderes",
            "família",
            "tempo",
            "ação"
        ],

        quote:
            "Salvar o mundo seria muito mais fácil se essa família conseguisse conversar normalmente.",

        phrase:
            "a família mais problemática possível.",

        trailer:
            "https://www.youtube.com/embed/0DAmWHxeoKw",

        cast: [
            ["Elliot Page", "Viktor"],
            ["Tom Hopper", "Luther"],
            ["Aidan Gallagher", "Five"],
            ["Robert Sheehan", "Klaus"],
            ["David Castañeda", "Diego"]
        ]
    },


    /* =====================================================
       11 — BRIDGERTON
    ====================================================== */

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
            "https://placehold.co/500x750/c6a6cf/ffffff?text=Bridgerton",

        description: [
            "Na alta sociedade londrina, famílias disputam prestígio enquanto romances inesperados começam a surgir.",
            "Entre bailes luxuosos, escândalos e fofocas, cada temporada acompanha relações capazes de mudar completamente a vida dos personagens."
        ],

        tags: [
            "romance",
            "época",
            "sociedade",
            "drama"
        ],

        quote:
            "Às vezes um simples olhar em um baile consegue causar mais confusão que qualquer escândalo.",

        phrase:
            "romance, vestidos e fofoca ♡",

        trailer:
            "https://www.youtube.com/embed/gpv7ayf_tyE",

        cast: [
            ["Nicola Coughlan", "Penelope"],
            ["Luke Newton", "Colin"],
            ["Jonathan Bailey", "Anthony"],
            ["Simone Ashley", "Kate"]
        ]
    },


    /* =====================================================
       12 — DARK
    ====================================================== */

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

        description: [
            "O desaparecimento de uma criança revela segredos envolvendo várias famílias de uma pequena cidade alemã.",
            "Dark transforma tempo, passado, presente e futuro em um gigantesco quebra-cabeça."
        ],

        tags: [
            "tempo",
            "mistério",
            "Alemanha",
            "ficção"
        ],

        quote:
            "O começo é o fim e o fim é o começo.",

        phrase:
            "prepare o cérebro antes de assistir.",

        trailer:
            "https://www.youtube.com/embed/rrwycJ08PSA",

        cast: [
            ["Louis Hofmann", "Jonas"],
            ["Lisa Vicari", "Martha"],
            ["Andreas Pietschmann", "Jonas adulto"],
            ["Maja Schöne", "Hannah"]
        ]
    },


    /* =====================================================
       13 — LUCIFER
    ====================================================== */

    {
        id: "lucifer",
        title: "Lucifer",
        year: 2016,
        seasons: 6,
        genre: "Fantasia",

        genres: [
            "Fantasia",
            "Crime",
            "Drama",
            "Romance"
        ],

        age: "16",
        rating: 4.7,

        poster:
            "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg",

        description: [
            "Cansado de comandar o inferno, Lucifer Morningstar decide abandonar seu reino e viver em Los Angeles.",
            "Depois de se envolver em uma investigação policial, ele passa a trabalhar ao lado da detetive Chloe Decker."
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
            "um certo diabo extremamente carismático.",

        trailer:
            "https://www.youtube.com/embed/X4bF_quwNtw",

        cast: [
            ["Tom Ellis", "Lucifer"],
            ["Lauren German", "Chloe"],
            ["Kevin Alejandro", "Dan"],
            ["D.B. Woodside", "Amenadiel"]
        ]
    },


    /* =====================================================
       14 — COBRA KAI
    ====================================================== */

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

        description: [
            "Décadas depois do famoso torneio de karatê, Johnny Lawrence e Daniel LaRusso voltam a se encontrar.",
            "Uma nova geração de alunos acaba envolvida na rivalidade entre diferentes dojos."
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
            "https://www.youtube.com/embed/xCwwxNbtK6Y",

        cast: [
            ["William Zabka", "Johnny Lawrence"],
            ["Ralph Macchio", "Daniel LaRusso"],
            ["Xolo Maridueña", "Miguel"],
            ["Mary Mouser", "Samantha"]
        ]
    },


    /* =====================================================
       15 — O GAMBITO DA RAINHA
    ====================================================== */

    {
        id: "gambito-da-rainha",
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

        description: [
            "Beth Harmon descobre ainda criança um talento extraordinário para o xadrez.",
            "Enquanto enfrenta adversários cada vez mais fortes, ela também precisa lidar com suas dificuldades pessoais."
        ],

        tags: [
            "xadrez",
            "competição",
            "drama",
            "superação"
        ],

        quote:
            "Cada movimento muda completamente o jogo.",

        phrase:
            "xeque-mate com muita elegância.",

        trailer:
            "https://www.youtube.com/embed/CDrieqwSdgI",

        cast: [
            ["Anya Taylor-Joy", "Beth Harmon"],
            ["Thomas Brodie-Sangster", "Benny"],
            ["Harry Melling", "Harry Beltik"]
        ]
    },


    /* =====================================================
       16 — ELITE
    ====================================================== */

    {
        id: "elite",
        title: "Elite",
        year: 2018,
        seasons: 8,
        genre: "Drama",

        genres: [
            "Drama",
            "Mistério",
            "Romance",
            "Crime"
        ],

        age: "18",
        rating: 4.2,

        poster:
            "https://placehold.co/500x750/8f1e3d/ffffff?text=Elite",

        description: [
            "Quando estudantes de origem humilde entram em uma escola extremamente exclusiva, conflitos começam quase imediatamente.",
            "Elite mistura romances, rivalidades, festas, segredos e investigações em torno de crimes."
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
            "luxo, romance e muita confusão.",

        trailer:
            "https://www.youtube.com/embed/QNwhAdrdwp0",

        cast: [
            ["Itzan Escamilla", "Samuel"],
            ["Omar Ayuso", "Omar"],
            ["Arón Piper", "Ander"],
            ["Miguel Bernardeau", "Guzmán"]
        ]
    },


    /* =====================================================
       17 — SEX EDUCATION
    ====================================================== */

    {
        id: "sex-education",
        title: "Sex Education",
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

        poster:
            "https://placehold.co/500x750/e54e65/ffffff?text=Sex+Education",

        description: [
            "Otis é um adolescente inseguro que acaba usando os conhecimentos de sua mãe terapeuta para aconselhar colegas da escola.",
            "A série mistura humor, amizade, relacionamentos e amadurecimento de uma maneira divertida e sensível."
        ],

        tags: [
            "escola",
            "amizade",
            "comédia",
            "adolescência"
        ],

        quote:
            "Crescer já é complicado. Crescer cercado de adolescentes confusos é ainda pior.",

        phrase:
            "engraçada, caótica e cheia de coração.",

        trailer:
            "https://www.youtube.com/embed/Hd2ldTR-WpI",

        cast: [
            ["Asa Butterfield", "Otis"],
            ["Emma Mackey", "Maeve"],
            ["Ncuti Gatwa", "Eric"],
            ["Aimee Lou Wood", "Aimee"]
        ]
    },


    /* =====================================================
       18 — GINNY & GEORGIA
    ====================================================== */

    {
        id: "ginny-georgia",
        title: "Ginny & Georgia",
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

        poster:
            "https://placehold.co/500x750/d59eaa/ffffff?text=Ginny+%26+Georgia",

        description: [
            "Georgia se muda com os filhos Ginny e Austin na tentativa de começar uma nova vida.",
            "Mas o passado de Georgia continua aparecendo enquanto Ginny enfrenta escola, amizades e relacionamentos."
        ],

        tags: [
            "família",
            "romance",
            "escola",
            "segredos"
        ],

        quote:
            "Por trás da família perfeita existem muito mais segredos do que parece.",

        phrase:
            "drama familiar em níveis perigosos.",

        trailer:
            "https://www.youtube.com/embed/QsacpJwXCO8",

        cast: [
            ["Brianne Howey", "Georgia"],
            ["Antonia Gentry", "Ginny"],
            ["Diesel La Torraca", "Austin"],
            ["Felix Mallard", "Marcus"]
        ]
    },


    /* =====================================================
       19 — THE WITCHER
    ====================================================== */

    {
        id: "the-witcher",
        title: "The Witcher",
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

        poster:
            "https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg",

        description: [
            "Geralt de Rívia é um caçador de monstros que percorre um continente cheio de criaturas, guerras e magia.",
            "Seus caminhos acabam ligados aos de Yennefer e Ciri em uma história envolvendo destino e poder."
        ],

        tags: [
            "fantasia",
            "monstros",
            "magia",
            "aventura"
        ],

        quote:
            "Às vezes os humanos conseguem ser mais perigosos que os monstros.",

        phrase:
            "magia, monstros e destino.",

        trailer:
            "https://www.youtube.com/embed/ndl1W4ltcmg",

        cast: [
            ["Liam Hemsworth", "Geralt"],
            ["Anya Chalotra", "Yennefer"],
            ["Freya Allan", "Ciri"],
            ["Joey Batey", "Jaskier"]
        ]
    },


    /* =====================================================
       20 — ANNE WITH AN E
    ====================================================== */

    {
        id: "anne-with-an-e",
        title: "Anne with an E",
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

        poster:
            "https://placehold.co/500x750/bf8868/ffffff?text=Anne+with+an+E",

        description: [
            "Anne Shirley é uma garota imaginativa que chega por engano à casa dos irmãos Marilla e Matthew Cuthbert.",
            "Sua personalidade transforma completamente a vida de todos ao redor enquanto ela descobre amizade, família e seu próprio lugar no mundo."
        ],

        tags: [
            "família",
            "amizade",
            "época",
            "emocionante"
        ],

        quote:
            "É maravilhoso descobrir que existe tanta beleza até nas pequenas coisas.",

        phrase:
            "um abraço em forma de série ♡",

        trailer:
            "https://www.youtube.com/embed/S5qJXYNNINo",

        cast: [
            ["Amybeth McNulty", "Anne Shirley"],
            ["Geraldine James", "Marilla"],
            ["R.H. Thomson", "Matthew"],
            ["Lucas Jade Zumann", "Gilbert"]
        ]
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
        seriesData[0].id,

    search: "",

    filter: "all",

    genre: "all"

};


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadStorage(
    key,
    fallback
) {

    try {

        const value =
            localStorage.getItem(
                key
            );

        if (value === null) {
            return fallback;
        }

        return JSON.parse(
            value
        );

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
        JSON.stringify(
            value
        )
    );

}


/* =========================================================
   DADOS DO USUÁRIO
========================================================= */

let favorites =
    loadStorage(
        "biaFavorites",
        []
    );


let watchStatus =
    loadStorage(
        "biaWatchStatus",
        {}
    );


let progressData =
    loadStorage(
        "biaProgress",
        {}
    );


let ratingsData =
    loadStorage(
        "biaRatings",
        {}
    );


let opinionData =
    loadStorage(
        "biaOpinions",
        {}
    );


let reactionsData =
    loadStorage(
        "biaReactions",
        {}
    );


let commentsData =
    loadStorage(
        "biaComments",
        {}
    );


let historyData =
    loadStorage(
        "biaHistory",
        []
    );


let settings =
    loadStorage(
        "biaSettings",
        {

            theme:
                "lavender",

            font:
                "medium",

            animations:
                true,

            cursor:
                true,

            trail:
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


const genreSelect =
    $("#genreSelect");


const searchInput =
    $("#searchInput");


const sidebarSearch =
    $("#sidebarSearch");


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


const rankingGrid =
    $("#rankingGrid");


const recommendationsGrid =
    $("#recommendationsGrid");


const historyList =
    $("#historyList");


const heartCursor =
    $("#heartCursor");


const effectsContainer =
    $("#effectsContainer");


const toastContainer =
    $("#toastContainer");


const readingProgress =
    $("#readingProgress");


const backToTop =
    $("#backToTop");


const settingsPanel =
    $("#settingsPanel");


const settingsOverlay =
    $("#settingsOverlay");


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


/* =========================================================
   PEGAR SÉRIE ATUAL
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

    const div =
        document.createElement(
            "div"
        );

    div.textContent =
        String(text);

    return div.innerHTML;

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    icon = "fa-heart"
) {

    const toast =
        document.createElement(
            "div"
        );

    toast.className =
        "toast";


    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>

        <span>
            ${escapeHTML(message)}
        </span>
    `;


    toastContainer.appendChild(
        toast
    );


    setTimeout(
        () => {

            toast.style.opacity =
                "0";

            toast.style.transform =
                "translateX(25px)";

        },
        2600
    );


    setTimeout(
        () => {

            toast.remove();

        },
        3000
    );

}


/* =========================================================
   CRIAR CORAÇÃO
========================================================= */

function createHeart(
    x,
    y,
    small = false
) {

    if (!settings.effects) {
        return;
    }


    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        small
            ? "cursor-trail-heart"
            : "floating-heart";


    heart.textContent =
        Math.random() > 0.25
            ? "♡"
            : "♥";


    heart.style.left =
        `${x}px`;

    heart.style.top =
        `${y}px`;


    effectsContainer.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        small
            ? 800
            : 1200
    );

}


/* =========================================================
   EXPLOSÃO DE CORAÇÕES
========================================================= */

function heartBurst(
    x,
    y,
    amount = 8
) {

    if (!settings.effects) {
        return;
    }


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            () => {

                createHeart(
                    x +
                    (
                        Math.random() *
                        60 -
                        30
                    ),

                    y +
                    (
                        Math.random() *
                        30 -
                        15
                    )
                );

            },
            i * 45
        );

    }

}


/* =========================================================
   CONFETE
========================================================= */

function createConfetti(
    x =
        window.innerWidth / 2,

    y =
        window.innerHeight / 2
) {

    if (!settings.effects) {
        return;
    }


    const colors = [

        "#b266e3",
        "#ed7ebe",
        "#8174ed",
        "#ffca66",
        "#ef9aaa",
        "#ad7be7"

    ];


    for (
        let i = 0;
        i < 32;
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


        piece.style.animationDelay =
            `${
                Math.random() *
                0.15
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
   RENDERIZAR SÉRIE ATUAL
========================================================= */

function renderCurrentSeries() {

    const series =
        getCurrentSeries();


    document.title =
        `${series.title} | Blog da Bia ♡`;


    localStorage.setItem(
        "biaCurrentSeries",
        series.id
    );


    window.history.replaceState(
        null,
        "",
        `#${series.id}`
    );


    /* TÍTULO */

    seriesTitle.textContent =
        series.title;


    /* NOTA */

    seriesRating.textContent =
        series.rating.toFixed(
            1
        );


    /* POSTER */

    seriesPoster.src =
        series.poster;

    seriesPoster.alt =
        `Poster de ${series.title}`;


    /* FRASE */

    seriesPhrase.textContent =
        series.phrase;


    /* META */

    seriesMetadata.innerHTML = `

        <span class="metadata-pill">

            <i class="fa-regular fa-calendar"></i>

            ${series.year}

        </span>


        <span class="metadata-pill">

            <i class="fa-solid fa-layer-group"></i>

            ${series.seasons}

            ${
                series.seasons === 1
                    ? "temporada"
                    : "temporadas"
            }

        </span>


        <span class="metadata-pill">

            <i class="fa-solid fa-film"></i>

            ${escapeHTML(
                series.genre
            )}

        </span>


        <span class="metadata-pill">

            <i class="fa-solid fa-user-shield"></i>

            ${series.age}+

        </span>

    `;


    /* TEXTO */

    seriesDescription.innerHTML =
        series.description
            .map(
                text => `
                    <p>
                        ${escapeHTML(text)}
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


    /* QUOTE */

    seriesQuote.innerHTML = `
        “${escapeHTML(
            series.quote
        )}”
    `;


    /* ANIMAÇÃO */

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

    updateReactionUI();

    updateNextSeries();

    renderComments();

    renderSeriesList();

    renderRecommendations();

    addToHistory(
        series.id
    );

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


    $("#sidebar")
        .classList.remove(
            "open"
        );


    if (
        window.innerWidth <
        850
    ) {

        $("#contentCard")
            .scrollIntoView({
                behavior:
                    "smooth",
                block:
                    "start"
            });

    }

}


/* =========================================================
   LISTA DE SÉRIES
========================================================= */

function renderSeriesList() {

    let list =
        [...seriesData];


    /* PESQUISA */

    if (
        state.search.trim()
    ) {

        const term =
            state.search
                .trim()
                .toLowerCase();


        list =
            list.filter(
                series => {

                    const searchable = `

                        ${series.title}

                        ${series.genre}

                        ${series.genres.join(" ")}

                        ${series.tags.join(" ")}

                    `.toLowerCase();


                    return searchable.includes(
                        term
                    );

                }
            );

    }


    /* GÊNERO */

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


    /* FAVORITO */

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

                nenhuma série encontrada ♡

            </div>

        `;

        return;

    }


    seriesList.innerHTML =
        list
            .map(
                series => {

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


                            <img

                                src="${series.poster}"

                                alt="${escapeHTML(
                                    series.title
                                )}"

                                class="series-thumb"

                            >


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
                                favorite
                                    ? `
                                        <i
                                            class="
                                                fa-solid
                                                fa-heart
                                                item-favorite
                                            "
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
                                                    status ===
                                                    "watched"
                                                        ? "fa-check"
                                                        :
                                                    status ===
                                                    "watching"
                                                        ? "fa-play"
                                                        :
                                                        "fa-bookmark"
                                                }
                                                item-status
                                            "
                                        ></i>
                                    `
                                    : ""
                            }

                        </button>

                    `;

                }
            )
            .join("");

}


/* =========================================================
   CLIQUE NAS SÉRIES
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
            button.dataset
                .seriesId
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
        ]
            .sort();


    genreSelect.innerHTML = `

        <option value="all">

            todos

        </option>


        ${
            genres
                .map(
                    genre => `

                        <option value="${genre}">

                            ${escapeHTML(
                                genre
                            )}

                        </option>

                    `
                )
                .join("")
        }

    `;

}


/* =========================================================
   PESQUISA LATERAL
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        state.search =
            searchInput.value;


        sidebarSearch
            .classList.toggle(
                "has-text",
                Boolean(
                    searchInput.value
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


            sidebarSearch
                .classList.remove(
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
                        button.dataset
                            .filter;


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

    const series =
        getCurrentSeries();


    const index =
        favorites.indexOf(
            series.id
        );


    if (
        index >= 0
    ) {

        favorites.splice(
            index,
            1
        );


        showToast(
            `${series.title} removida dos favoritos`,
            "fa-heart-crack"
        );

    }

    else {

        favorites.push(
            series.id
        );


        showToast(
            `${series.title} adicionada aos favoritos ♡`,
            "fa-heart"
        );


        const rect =
            event
                ?.currentTarget
                ?.getBoundingClientRect();


        if (rect) {

            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top +
                rect.height / 2,

                7

            );

        }

    }


    saveStorage(
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
   STATUS
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

                        delete watchStatus[
                            id
                        ];


                        showToast(
                            "status removido",
                            "fa-bookmark"
                        );

                    }

                    else {

                        watchStatus[id] =
                            status;


                        const messages = {

                            want:
                                "adicionada em quero assistir ♡",

                            watching:
                                "marcada como assistindo",

                            watched:
                                "marcada como assistida ✓"

                        };


                        showToast(
                            messages[
                                status
                            ],
                            "fa-tv"
                        );


                        if (
                            status ===
                            "watched"
                        ) {

                            progressData[
                                id
                            ] =
                                100;


                            saveStorage(
                                "biaProgress",
                                progressData
                            );


                            createConfetti();

                        }

                    }


                    saveStorage(
                        "biaWatchStatus",
                        watchStatus
                    );


                    updateWatchStatusUI();

                    updateProgressUI();

                    renderSeriesList();

                    updateStatistics();

                }
            );

        }
    );


function updateWatchStatusUI() {

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

episodeProgress.addEventListener(
    "input",
    () => {

        const value =
            Number(
                episodeProgress.value
            );


        progressData[
            state.currentSeriesId
        ] =
            value;


        episodeProgressText
            .textContent =
            `${value}%`;


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

            if (
                watchStatus[
                    state.currentSeriesId
                ] !==
                "watched"
            ) {

                watchStatus[
                    state.currentSeriesId
                ] =
                    "watching";

            }

        }


        saveStorage(
            "biaProgress",
            progressData
        );


        saveStorage(
            "biaWatchStatus",
            watchStatus
        );


        updateWatchStatusUI();

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
            ) ===
            100
        ) {

            showToast(
                "maratona concluída ♡",
                "fa-trophy"
            );


            createConfetti();

        }

    }
);


function updateProgressUI() {

    const progress =
        progressData[
            state.currentSeriesId
        ] ||
        0;


    episodeProgress.value =
        progress;


    episodeProgressText
        .textContent =
        `${progress}%`;

}


/* =========================================================
   ESTRELAS
========================================================= */

function paintStars(
    value
) {

    $$(
        "[data-star]",
        starsContainer
    )
        .forEach(
            button => {

                const star =
                    Number(
                        button.dataset
                            .star
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


$$(
    "[data-star]",
    starsContainer
)
    .forEach(
        button => {

            button.addEventListener(
                "mouseenter",
                () => {

                    paintStars(
                        Number(
                            button.dataset
                                .star
                        )
                    );

                }
            );


            button.addEventListener(
                "click",
                event => {

                    const rating =
                        Number(
                            button.dataset
                                .star
                        );


                    ratingsData[
                        state.currentSeriesId
                    ] =
                        rating;


                    saveStorage(
                        "biaRatings",
                        ratingsData
                    );


                    updateRatingUI();


                    if (
                        rating === 5
                    ) {

                        const rect =
                            event
                                .currentTarget
                                .getBoundingClientRect();


                        createConfetti(

                            rect.left +
                            rect.width / 2,

                            rect.top

                        );


                        showToast(
                            "5 estrelas! ♡",
                            "fa-star"
                        );

                    }

                    else {

                        showToast(
                            `avaliação: ${rating}/5`,
                            "fa-star"
                        );

                    }

                }
            );

        }
    );


starsContainer.addEventListener(
    "mouseleave",
    updateRatingUI
);


function updateRatingUI() {

    const rating =
        ratingsData[
            state.currentSeriesId
        ] ||
        0;


    paintStars(
        rating
    );


    userRatingText.textContent =
        rating
            ? `${rating}/5`
            : "ainda não avaliado";

}


/* =========================================================
   GOSTEI / NÃO GOSTEI
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
    type,
    event
) {

    const id =
        state.currentSeriesId;


    if (
        opinionData[
            id
        ] ===
        type
    ) {

        delete opinionData[
            id
        ];


        showToast(
            "voto removido",
            "fa-rotate-left"
        );

    }

    else {

        opinionData[
            id
        ] =
            type;


        if (
            type ===
            "like"
        ) {

            const rect =
                event
                    .currentTarget
                    .getBoundingClientRect();


            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top,

                6

            );


            showToast(
                "você gostou dessa série ♡",
                "fa-thumbs-up"
            );

        }

        else {

            showToast(
                "opinião registrada",
                "fa-thumbs-down"
            );

        }

    }


    saveStorage(
        "biaOpinions",
        opinionData
    );


    updateOpinionUI();

}


/* =========================================================
   PERCENTUAL
========================================================= */

function updateOpinionUI() {

    const series =
        getCurrentSeries();


    const opinion =
        opinionData[
            state.currentSeriesId
        ];


    let likes =
        Math.round(
            64 +
            series.rating *
            6.5
        );


    likes =
        Math.min(
            97,
            likes
        );


    if (
        opinion ===
        "like"
    ) {

        likes =
            Math.min(
                99,
                likes + 1
            );

    }


    if (
        opinion ===
        "dislike"
    ) {

        likes =
            Math.max(
                1,
                likes - 3
            );

    }


    const dislikes =
        100 -
        likes;


    likePercentage
        .textContent =
        `${likes}%`;


    dislikePercentage
        .textContent =
        `${dislikes}%`;


    voteProgress.style.width =
        `${likes}%`;


    likeButton.classList.toggle(
        "active",
        opinion ===
        "like"
    );


    dislikeButton.classList.toggle(
        "active",
        opinion ===
        "dislike"
    );


    const likeIcon =
        $("i", likeButton);


    const dislikeIcon =
        $("i", dislikeButton);


    likeIcon.className =
        opinion === "like"
            ? "fa-solid fa-thumbs-up"
            : "fa-regular fa-thumbs-up";


    dislikeIcon.className =
        opinion === "dislike"
            ? "fa-solid fa-thumbs-down"
            : "fa-regular fa-thumbs-down";

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

                    const reaction =
                        button.dataset
                            .reaction;


                    const id =
                        state.currentSeriesId;


                    if (
                        !reactionsData[
                            id
                        ]
                    ) {

                        reactionsData[
                            id
                        ] =
                            {};

                    }


                    const current =
                        Boolean(
                            reactionsData[
                                id
                            ][
                                reaction
                            ]
                        );


                    reactionsData[
                        id
                    ][
                        reaction
                    ] =
                        !current;


                    saveStorage(
                        "biaReactions",
                        reactionsData
                    );


                    updateReactionUI();


                    if (!current) {

                        const rect =
                            event
                                .currentTarget
                                .getBoundingClientRect();


                        createHeart(

                            rect.left +
                            rect.width / 2,

                            rect.top

                        );

                    }

                }
            );

        }
    );


function updateReactionUI() {

    const reactions =
        reactionsData[
            state.currentSeriesId
        ] ||
        {};


    const baseCounts = {

        love: 48,
        cry: 23,
        shock: 37,
        laugh: 19,
        angry: 11

    };


    $$("[data-reaction]")
        .forEach(
            button => {

                const type =
                    button.dataset
                        .reaction;


                const active =
                    Boolean(
                        reactions[
                            type
                        ]
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
                    baseCounts[
                        type
                    ] +
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


/* CONTADOR */

commentInput.addEventListener(
    "input",
    () => {

        characterCounter
            .textContent =
            `${commentInput.value.length}/280`;

    }
);


/* EMOJIS */

$$("[data-insert-emoji]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    commentInput.value +=
                        button.dataset
                            .insertEmoji;


                    characterCounter
                        .textContent =
                        `${commentInput.value.length}/280`;


                    commentInput.focus();

                }
            );

        }
    );


/* PUBLICAR */

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


        if (
            !commentsData[
                id
            ]
        ) {

            commentsData[
                id
            ] =
                [];

        }


        commentsData[
            id
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

            likes:
                0,

            liked:
                false,

            replies:
                []

        });


        saveStorage(
            "biaComments",
            commentsData
        );


        commentInput.value =
            "";


        characterCounter
            .textContent =
            "0/280";


        renderComments();

        updateStatistics();


        showToast(
            "comentário publicado ♡",
            "fa-comment"
        );


        heartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            5
        );

    }
);


/* =========================================================
   DATA DO COMENTÁRIO
========================================================= */

function commentDate(
    date
) {

    const created =
        new Date(
            date
        );


    const difference =
        Date.now() -
        created.getTime();


    const minutes =
        Math.floor(
            difference /
            60000
        );


    if (
        minutes <
        1
    ) {

        return "agora";

    }


    if (
        minutes <
        60
    ) {

        return `${minutes} min`;

    }


    const hours =
        Math.floor(
            minutes /
            60
        );


    if (
        hours <
        24
    ) {

        return `${hours} h`;

    }


    const days =
        Math.floor(
            hours /
            24
        );


    if (
        days <
        7
    ) {

        return `${days} d`;

    }


    return created
        .toLocaleDateString(
            "pt-BR"
        );

}


/* =========================================================
   RENDER COMENTÁRIOS
========================================================= */

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

                ainda não tem comentários.
                seja a primeira pessoa a comentar ♡

            </div>

        `;

        return;

    }


    commentsList.innerHTML =
        comments
            .map(
                comment => {

                    const replies =
                        comment.replies ||
                        [];


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


                            <div class="comment-content">

                                <div class="comment-meta">

                                    <strong>

                                        ${escapeHTML(
                                            comment.author
                                        )}

                                    </strong>


                                    <small>

                                        ${commentDate(
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
                                        class="
                                            comment-action
                                            ${
                                                comment.liked
                                                    ? "active"
                                                    : ""
                                            }
                                        "
                                        data-like-comment="${comment.id}"
                                    >

                                        <i
                                            class="
                                                ${
                                                    comment.liked
                                                        ? "fa-solid"
                                                        : "fa-regular"
                                                }
                                                fa-heart
                                            "
                                        ></i>

                                        ${comment.likes || 0}

                                    </button>


                                    <button
                                        class="comment-action"
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
                                        type="text"
                                        maxlength="180"
                                        placeholder="escreva uma resposta..."
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

                                        `
                                        : ""
                                }

                            </div>


                            <button
                                class="delete-comment"
                                data-delete-comment="${comment.id}"
                                title="Excluir comentário"
                            >

                                <i class="fa-regular fa-trash-can"></i>

                            </button>

                        </article>

                    `;

                }
            )
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


        if (like) {

            toggleCommentLike(
                like.dataset
                    .likeComment
            );

            return;

        }


        if (reply) {

            const form =
                $(
                    `[data-reply-form="${reply.dataset.replyComment}"]`
                );


            if (!form) {
                return;
            }


            form.classList.toggle(
                "open"
            );


            if (
                form.classList.contains(
                    "open"
                )
            ) {

                $("input", form)
                    .focus();

            }


            return;

        }


        if (remove) {

            deleteComment(
                remove.dataset
                    .deleteComment
            );

        }

    }
);


/* =========================================================
   RESPOSTA
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
            input.value
                .trim();


        if (!text) {
            return;
        }


        const comments =
            getComments();


        const comment =
            comments.find(
                item =>
                    item.id ===
                    form.dataset
                        .replyForm
            );


        if (!comment) {
            return;
        }


        if (!comment.replies) {

            comment.replies =
                [];

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
        ] =
            comments;


        saveStorage(
            "biaComments",
            commentsData
        );


        renderComments();

        updateStatistics();


        showToast(
            "resposta publicada ♡",
            "fa-reply"
        );

    }
);


/* =========================================================
   CURTIR COMENTÁRIO
========================================================= */

function toggleCommentLike(
    id
) {

    const comments =
        getComments();


    const comment =
        comments.find(
            item =>
                item.id === id
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
    ] =
        comments;


    saveStorage(
        "biaComments",
        commentsData
    );


    renderComments();

}


/* =========================================================
   EXCLUIR COMENTÁRIO
========================================================= */

function deleteComment(
    id
) {

    commentsData[
        state.currentSeriesId
    ] =
        getComments()
            .filter(
                comment =>
                    comment.id !==
                    id
            );


    saveStorage(
        "biaComments",
        commentsData
    );


    renderComments();

    updateStatistics();


    showToast(
        "comentário excluído",
        "fa-trash"
    );

}


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
        modal ===
        trailerModal
    ) {

        trailerFrame.src =
            "";

    }


    if (
        !$(".modal.open") &&
        !settingsPanel
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


    trailerModalTitle.textContent =
        `Trailer de ${series.title}`;


    trailerFrame.src =
        `${series.trailer}?autoplay=1`;


    openModal(
        trailerModal
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
   ELENCO
========================================================= */

$("#castButton")
    .addEventListener(
        "click",
        () => {

            const series =
                getCurrentSeries();


            castGrid.innerHTML =
                series.cast
                    .map(
                        person => {

                            const name =
                                person[0];


                            const role =
                                person[1];


                            const initials =
                                name
                                    .split(" ")
                                    .slice(
                                        0,
                                        2
                                    )
                                    .map(
                                        part =>
                                            part[0]
                                    )
                                    .join("");


                            return `

                                <article class="cast-card">

                                    <div class="cast-avatar">

                                        ${escapeHTML(
                                            initials
                                        )}

                                    </div>

                                    <strong>

                                        ${escapeHTML(
                                            name
                                        )}

                                    </strong>

                                    <small>

                                        ${escapeHTML(
                                            role
                                        )}

                                    </small>

                                </article>

                            `;

                        }
                    )
                    .join("");


            openModal(
                castModal
            );

        }
    );


/* =========================================================
   COPIAR LINK
========================================================= */

$("#copyLinkButton")
    .addEventListener(
        "click",
        async () => {

            const url =
                `${
                    window.location
                        .href
                        .split("#")[0]
                }#${
                    state.currentSeriesId
                }`;


            try {

                await navigator
                    .clipboard
                    .writeText(
                        url
                    );


                showToast(
                    "link copiado ♡",
                    "fa-link"
                );

            }

            catch {

                showToast(
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


            const data = {

                title:
                    `${series.title} | Blog da Bia`,

                text:
                    `Olha ${series.title} no Blog da Bia ♡`,

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

                }

                else {

                    await navigator
                        .clipboard
                        .writeText(
                            window.location.href
                        );


                    showToast(
                        "link copiado para compartilhar ♡",
                        "fa-share-nodes"
                    );

                }

            }

            catch {
                /* cancelado */
            }

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

            }

            while (
                random.id ===
                state.currentSeriesId &&
                seriesData.length >
                1
            );


            selectSeries(
                random.id
            );


            showToast(
                `sorteada: ${random.title} ✦`,
                "fa-shuffle"
            );

        }
    );


/* =========================================================
   PRÓXIMA SÉRIE
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


    rankingGrid.innerHTML =
        ranking
            .map(
                (
                    series,
                    index
                ) => `

                    <button
                        class="ranking-card"
                        data-ranking-id="${series.id}"
                    >

                        <span class="ranking-number">

                            ${index + 1}

                        </span>


                        <img

                            src="${series.poster}"

                            alt="${escapeHTML(
                                series.title
                            )}"

                        >


                        <div class="ranking-info">

                            <strong>

                                ${escapeHTML(
                                    series.title
                                )}

                            </strong>


                            <span>

                                <i class="fa-solid fa-star"></i>

                                ${series.rating.toFixed(
                                    1
                                )}

                            </span>

                        </div>

                    </button>

                `
            )
            .join("");

}


/* RANKING CLICK */

rankingGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                "[data-ranking-id]"
            );


        if (!card) {
            return;
        }


        selectSeries(
            card.dataset
                .rankingId
        );

    }
);


/* =========================================================
   SHUFFLE
========================================================= */

function shuffle(
    array
) {

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
                (
                    i + 1
                )
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


/* =========================================================
   RECOMENDAÇÕES
========================================================= */

function renderRecommendations() {

    const current =
        getCurrentSeries();


    const related =
        seriesData.filter(
            series => {

                if (
                    series.id ===
                    current.id
                ) {

                    return false;

                }


                return series.genres.some(
                    genre =>
                        current.genres
                            .includes(
                                genre
                            )
                );

            }
        );


    const unrelated =
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


    const finalList =
        [
            ...shuffle(
                related
            ),
            ...shuffle(
                unrelated
            )
        ]
            .slice(
                0,
                4
            );


    recommendationsGrid.innerHTML =
        finalList
            .map(
                series => `

                    <button
                        class="recommendation-card"
                        data-recommendation-id="${series.id}"
                    >

                        <img

                            src="${series.poster}"

                            alt="${escapeHTML(
                                series.title
                            )}"

                        >


                        <div class="recommendation-gradient">

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

                                ⭐

                                ${series.rating.toFixed(
                                    1
                                )}

                            </span>

                        </div>

                    </button>

                `
            )
            .join("");

}


/* CLICK */

recommendationsGrid
    .addEventListener(
        "click",
        event => {

            const card =
                event.target.closest(
                    "[data-recommendation-id]"
                );


            if (!card) {
                return;
            }


            selectSeries(
                card.dataset
                    .recommendationId
            );

        }
    );


$("#refreshRecommendations")
    .addEventListener(
        "click",
        () => {

            renderRecommendations();


            showToast(
                "novas recomendações ✦",
                "fa-wand-magic-sparkles"
            );

        }
    );


/* =========================================================
   HISTÓRICO
========================================================= */

function addToHistory(
    id
) {

    historyData =
        historyData.filter(
            item =>
                item.id !==
                id
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


    saveStorage(
        "biaHistory",
        historyData
    );

}


function renderHistory() {

    if (
        !historyData.length
    ) {

        historyList.innerHTML = `

            <div class="empty-state">

                seu histórico está vazio ♡

            </div>

        `;

        return;

    }


    historyList.innerHTML =
        historyData
            .map(
                item => {

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
                            data-history-id="${series.id}"
                        >

                            <img

                                src="${series.poster}"

                                alt=""

                            >


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


/* CLICK */

historyList.addEventListener(
    "click",
    event => {

        const item =
            event.target.closest(
                "[data-history-id]"
            );


        if (!item) {
            return;
        }


        selectSeries(
            item.dataset
                .historyId
        );

    }
);


/* LIMPAR */

$("#clearHistoryButton")
    .addEventListener(
        "click",
        () => {

            historyData =
                [];


            saveStorage(
                "biaHistory",
                historyData
            );


            renderHistory();


            showToast(
                "histórico limpo",
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


    const totalComments =
        Object.values(
            commentsData
        )
            .reduce(
                (
                    total,
                    comments
                ) => {

                    const replies =
                        comments.reduce(
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
                        comments.length +
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
        totalComments;

}


/* =========================================================
   VISITAS LOCAIS
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
            "biaSessionVisit"
        )
    ) {

        visits++;


        localStorage.setItem(
            "biaVisits",
            visits
        );


        sessionStorage.setItem(
            "biaSessionVisit",
            "1"
        );

    }


    $("#visitCounter")
        .textContent =
        visits;

}


/* =========================================================
   MODAL PESQUISA
========================================================= */

$("#searchButton")
    .addEventListener(
        "click",
        () => {

            modalSearchInput.value =
                "";


            renderModalSearch(
                ""
            );


            openModal(
                searchModal
            );


            setTimeout(
                () =>
                    modalSearchInput
                        .focus(),
                100
            );

        }
    );


modalSearchInput.addEventListener(
    "input",
    () => {

        renderModalSearch(
            modalSearchInput.value
        );

    }
);


function renderModalSearch(
    value
) {

    const term =
        value
            .trim()
            .toLowerCase();


    const results =
        seriesData.filter(
            series => {

                if (!term) {
                    return true;
                }


                return `
                    ${series.title}
                    ${series.genre}
                    ${series.genres.join(" ")}
                `
                    .toLowerCase()
                    .includes(
                        term
                    );

            }
        );


    if (
        !results.length
    ) {

        modalSearchResults.innerHTML = `

            <div class="empty-state">

                nenhuma série encontrada ♡

            </div>

        `;

        return;

    }


    modalSearchResults.innerHTML =
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


modalSearchResults.addEventListener(
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

function openSettings() {

    settingsPanel
        .classList.add(
            "open"
        );


    settingsOverlay
        .classList.add(
            "open"
        );


    body.style.overflow =
        "hidden";

}


function closeSettings() {

    settingsPanel
        .classList.remove(
            "open"
        );


    settingsOverlay
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


settingsOverlay.addEventListener(
    "click",
    closeSettings
);


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
                    button.dataset
                        .theme ===
                        settings.theme
                );

            }
        );


    /* FONT */

    const fontSizes = {

        small:
            "14px",

        medium:
            "16px",

        large:
            "18px"

    };


    document
        .documentElement
        .style
        .setProperty(

            "--font-size",

            fontSizes[
                settings.font
            ] ||
            "16px"

        );


    $$("[data-font]")
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset
                        .font ===
                        settings.font
                );

            }
        );


    /* ANIMAÇÃO */

    body.classList.toggle(
        "no-animations",
        !settings.animations
    );


    /* CURSOR */

    body.classList.toggle(
        "heart-cursor-enabled",
        settings.cursor
    );


    body.classList.toggle(
        "cursor-disabled",
        !settings.cursor
    );


    /* CHECKS */

    $("#animationToggle")
        .checked =
        settings.animations;


    $("#cursorToggle")
        .checked =
        settings.cursor;


    $("#trailToggle")
        .checked =
        settings.trail;


    $("#effectsToggle")
        .checked =
        settings.effects;

}


/* =========================================================
   TEMA
========================================================= */

$$(".theme-button")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    settings.theme =
                        button.dataset
                            .theme;


                    saveStorage(
                        "biaSettings",
                        settings
                    );


                    applySettings();


                    showToast(
                        "tema alterado ♡",
                        "fa-palette"
                    );

                }
            );

        }
    );


/* =========================================================
   FONTE
========================================================= */

$$("[data-font]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    settings.font =
                        button.dataset
                            .font;


                    saveStorage(
                        "biaSettings",
                        settings
                    );


                    applySettings();

                }
            );

        }
    );


/* =========================================================
   TOGGLES
========================================================= */

$("#animationToggle")
    .addEventListener(
        "change",
        event => {

            settings.animations =
                event.target
                    .checked;


            saveStorage(
                "biaSettings",
                settings
            );


            applySettings();

        }
    );


$("#cursorToggle")
    .addEventListener(
        "change",
        event => {

            settings.cursor =
                event.target
                    .checked;


            saveStorage(
                "biaSettings",
                settings
            );


            applySettings();

        }
    );


$("#trailToggle")
    .addEventListener(
        "change",
        event => {

            settings.trail =
                event.target
                    .checked;


            saveStorage(
                "biaSettings",
                settings
            );

        }
    );


$("#effectsToggle")
    .addEventListener(
        "change",
        event => {

            settings.effects =
                event.target
                    .checked;


            saveStorage(
                "biaSettings",
                settings
            );

        }
    );


/* =========================================================
   RESET CONFIGURAÇÕES
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

                trail:
                    true,

                effects:
                    true

            };


            saveStorage(
                "biaSettings",
                settings
            );


            applySettings();


            showToast(
                "configurações restauradas ♡",
                "fa-rotate-left"
            );

        }
    );


/* =========================================================
   CURSOR DE CORAÇÃO
========================================================= */

let lastTrailTime =
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
            lastTrailTime <
            55
        ) {

            return;

        }


        lastTrailTime =
            now;


        createHeart(
            event.clientX,
            event.clientY,
            true
        );

    }
);


/* =========================================================
   CURSOR HOVER
========================================================= */

document.addEventListener(
    "mouseover",
    event => {

        if (
            event.target.closest(
                "button, a, input, textarea, select"
            )
        ) {

            heartCursor
                .classList
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
                "button, a, input, textarea, select"
            )
        ) {

            heartCursor
                .classList
                .remove(
                    "hover"
                );

        }

    }
);


/* =========================================================
   CLIQUE NA PÁGINA
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !settings.effects
        ) {

            return;

        }


        if (
            event.target.closest(
                ".settings-panel"
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
   TILT 3D
========================================================= */

function initializeTilt() {

    if (
        !window.matchMedia(
            "(pointer: fine)"
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
                    0.5
                ) *
                8;


            const rotateX =
                (
                    y /
                    rect.height -
                    0.5
                ) *
                -8;


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


            if (!card) {
                return;
            }


            if (
                event.relatedTarget &&
                card.contains(
                    event.relatedTarget
                )
            ) {

                return;

            }


            card.style.transform =
                "";

        }
    );

}


/* =========================================================
   PROGRESSO DA PÁGINA
========================================================= */

function updatePageProgress() {

    const maxScroll =
        document
            .documentElement
            .scrollHeight -
        window.innerHeight;


    const progress =
        maxScroll > 0
            ? (
                window.scrollY /
                maxScroll
            ) *
            100
            : 0;


    readingProgress
        .style
        .width =
        `${progress}%`;


    backToTop
        .classList
        .toggle(
            "show",
            window.scrollY >
            450
        );

}


window.addEventListener(
    "scroll",
    updatePageProgress,
    {
        passive:
            true
    }
);


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

function scrollTopPage() {

    window.scrollTo({

        top:
            0,

        behavior:
            "smooth"

    });

}


backToTop.addEventListener(
    "click",
    scrollTopPage
);


$("#footerTopButton")
    .addEventListener(
        "click",
        scrollTopPage
    );


$("#logoButton")
    .addEventListener(
        "click",
        scrollTopPage
    );


/* =========================================================
   SIDEBAR MOBILE
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

$$("[data-scroll-target]")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        document
                            .getElementById(
                                button.dataset
                                    .scrollTarget
                            );


                    if (!target) {
                        return;
                    }


                    $$(".quick-nav-button")
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


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }
            );

        }
    );


/* =========================================================
   CORAÇÃO DOS CRIADORES
========================================================= */

$("#sendHeartButton")
    .addEventListener(
        "click",
        event => {

            const rect =
                event
                    .currentTarget
                    .getBoundingClientRect();


            heartBurst(

                rect.left +
                rect.width / 2,

                rect.top,

                14

            );


            createConfetti(

                rect.left +
                rect.width / 2,

                rect.top

            );


            showToast(
                "Bayerlee e Beatriz receberam seu coração ♡",
                "fa-heart"
            );

        }
    );


/* =========================================================
   REVEAL
========================================================= */

function initializeReveal() {

    const elements =
        $$(".reveal");


    if (
        !(
            "IntersectionObserver"
            in
            window
        )
    ) {

        elements.forEach(
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
                    0.07
            }

        );


    elements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   HASH
========================================================= */

function loadFromHash() {

    const hash =
        window.location
            .hash
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
                series.id ===
                hash
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

        const typing =
            event.target.matches(
                "input, textarea, select"
            );


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


        if (typing) {
            return;
        }


        /* / = pesquisar */

        if (
            event.key ===
            "/"
        ) {

            event.preventDefault();


            $("#searchButton")
                .click();

        }


        /* F = FAVORITO */

        if (
            event.key
                .toLowerCase() ===
            "f"
        ) {

            favoriteButton
                .click();

        }


        /* R = ALEATÓRIA */

        if (
            event.key
                .toLowerCase() ===
            "r"
        ) {

            $("#randomButton")
                .click();

        }


        /* → PRÓXIMA */

        if (
            event.key ===
            "ArrowRight"
        ) {

            $("#nextSeriesButton")
                .click();

        }


        /* ← ANTERIOR */

        if (
            event.key ===
            "ArrowLeft"
        ) {

            const index =
                seriesData.findIndex(
                    series =>
                        series.id ===
                        state.currentSeriesId
                );


            const previousIndex =
                (
                    index -
                    1 +
                    seriesData.length
                ) %
                seriesData.length;


            selectSeries(
                seriesData[
                    previousIndex
                ].id
            );

        }

    }
);


/* =========================================================
   FALLBACK DAS IMAGENS
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName !==
            "IMG"
        ) {

            return;

        }


        if (
            event.target.dataset
                .fallbackApplied ===
            "true"
        ) {

            return;

        }


        event.target.dataset
            .fallbackApplied =
            "true";


        const alt =
            event.target.alt ||
            "Série";


        event.target.src =
            `https://placehold.co/500x750/e8d5f5/755087?text=${
                encodeURIComponent(
                    alt
                )
            }`;

    },

    true
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initialize() {

    loadFromHash();

    populateGenres();

    applySettings();

    renderRanking();

    renderCurrentSeries();

    registerVisit();

    initializeReveal();

    initializeTilt();

    updatePageProgress();


    setTimeout(
        () => {

            showToast(
                "bem-vindo ao Blog da Bia ♡",
                "fa-heart"
            );

        },
        650
    );


    console.log(
        "%c♡ Blog da Bia carregado!",
        "font-size:18px;color:#b56adb;font-weight:bold;"
    );


    console.log(
        "20 séries carregadas."
    );


    console.log(
        "Atalhos: / pesquisa | F favorito | R aleatória | ← → séries"
    );

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);