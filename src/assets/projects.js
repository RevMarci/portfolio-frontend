export const projects = [
    {
        name: 'Webshop',
        description:
            'Egy 6 fős csoportmunka volt, amiben egy élelmiszer áruház weboldalát készítettük. Én a backend oldalon dolgoztam. Az alkalmazást Firebase-en hostoltuk és Firestore adatbázist is használtunk.',
        stack: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS'],
    },
    {
        name: 'Repülőjárat kereső',
        description:
            'Frontend heavy projekt flexboxokkal, animációkkal, reszponzív kivitelben. Cél: letisztult oldal repjegyek vásárlására.',
        stack: ['HTML', 'CSS', 'PHP'],
        github: 'https://github.com/RevMarci/turul',
    },
    {
        name: 'Vasút menetrend',
        description:
            'Oracle adatbázisra épülő többtáblás projekt. Menetrendre és járatokra lehetett keresni, jegyet venni. Bejelentkezés, regisztráció, admin felület járatkezeléssel és statisztikákkal.',
        stack: ['PHP', 'Oracle SQL', 'HTML', 'CSS'],
        github: 'https://github.com/RevMarci/vasutmenetrend',
    },
    {
        name: 'WebLed',
        description:
            'ESP8266 alapú IoT projekt. A mikrovezérlőn egy weboldal futott, amivel lokálisan lehetett irányítani egy 16x16-os LED kijelzőt.',
        stack: ['Arduino', 'C', 'IoT', 'HTML', 'CSS', 'JavaScript'],
    },
    {
        name: 'Asteroids',
        description:
            'JavaScript canvas alapú játék. Minden elem (lövedék, aszteroida, játékos) külön osztály. Példányok kezelése, memória optimalizáció törléssel.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/RevMarci/Asteroids',
        demo: 'https://revmarci.github.io/Asteroids/',
    },
    {
        name: 'Bejelentkezés automatizáció',
        description:
            'Első web automatizációs projektem. Automatizált edzésre jelentkezés Puppeteer-rel. Kezeli a kijelentkezéses eseteket is. A megoldás a mai napig működik.',
        stack: ['Node.js', 'Puppeteer'],
        github: 'https://github.com/RevMarci/web--automation-motibro',
    },
];
