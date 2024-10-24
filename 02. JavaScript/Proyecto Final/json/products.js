const jsonProducts = `[
    {
      "title": "RockJam Kit 61 Teclas",
      "description": "Teclado de piano digital, Banco Soporte de teclado, Auriculares, Pedal de sostenido y simplemente Aplicacion de piano.",
      "price": 164.99,
      "off": 0,
      "refer_link": "https://amzn.to/3Az2NHy",
      "category": "electric-keyboards",
      "img": "https://m.media-amazon.com/images/I/91CS0eGcsXL._AC_SL1500_.jpg"
    },
    {
      "title": "Alesis Melody 61 MKII",
      "description": "Teclado de piano electrico con 61 teclas, altavoces integrados, auriculares, microfono, soporte para piano, atril y banqueta.",
      "price": 113.42,
      "off": 5,
      "refer_link": "https://amzn.to/3KMrF3g",
      "category": "electric-keyboards",
      "img": "https://m.media-amazon.com/images/I/81a+qouQNmL._AC_SL1500_.jpg"
    },
    {
      "title": "Casio SA-77",
      "description": "Teclado electronico asio SA-77 de plastico, con 2 altavoces integrados, colores disponibles negro/gris.",
      "price": 58,
      "off": 22,
      "refer_link": "https://amzn.to/32wMz53",
      "category": "electric-keyboards",
      "img": "https://m.media-amazon.com/images/I/81-80XFRbvL._AC_SL1500_.jpg"
    },
    {
      "title": "Casio 781071 SA-76",
      "description": "Teclado electronico (44 teclas mini, 100 tonos, 50 ritmos), Color Negro, 64.20 x 22.60 x 7.60cm",
      "price": 69.86,
      "off": 6,
      "refer_link": "https://amzn.to/3IFRnnR",
      "category": "electric-keyboards",
      "img": "https://m.media-amazon.com/images/I/71imrFatGsL._AC_SL1500_.jpg"
    },
    {
      "title": "Casio CTK-3500",
      "description": "Teclado digital, 61 teclas sensibles, estilo piano, Negro.",
      "price": 166,
      "off": 0,
      "refer_link": "https://amzn.to/3AzK2Uo",
      "category": "electric-keyboards",
      "img": "https://m.media-amazon.com/images/I/81mr3PX6yLL._AC_SL1500_.jpg"
    },
    {
      "title": "Alesis Recital",
      "description": "Teclado de Piano Digital Electrico con 88 Teclas Semipesadas de Tamaño Completo, Fuente de Alimentacion, Altavoces Incorporados y 5 voces de Primera Calidad.",
      "price": 249.99,
      "off": 7,
      "refer_link": "https://amzn.to/3KJuimo",
      "category": "electric-pianos",
      "img": "https://m.media-amazon.com/images/I/7157g3o3BgL._AC_SL1500_.jpg"
    },
    {
      "title": "Donner DEP-20S",
      "description": "Piano Electrico 88 Teclas Contrapesadas, Piano Digital 88 Teclas con Soporte y 3 Pedal para Principiante.",
      "price": 459,
      "off": 0,
      "refer_link": "https://amzn.to/3AFMLvu",
      "category": "electric-pianos",
      "img": "https://m.media-amazon.com/images/I/614yhCzec5S._AC_SL1500_.jpg"
    },
    {
      "title": "SOUIDMY G-310 W",
      "description": "Piano digital con 88 teclas pesadas, accion de martillo graduada, resonancia de cuerdas, Bluetooth, MIDI, teclado electrico portatil con pedal Sustain y bolsa de transporte.",
      "price": 339.99,
      "off": 0,
      "refer_link": "https://amzn.to/3Ay0lkf",
      "category": "electric-pianos",
      "img": "https://m.media-amazon.com/images/I/71622uNMBNL._AC_SL1500_.jpg"
    },
    {
      "title": "Alesis Prestige Artist",
      "description": "Piano digital de 88 teclas contrapesadas de tamaño completo y con accion de martillo graduado, 30 sonidos de teclado de piano y altavoces integrados.",
      "price": 496,
      "off": 10,
      "refer_link": "https://amzn.to/3u4r3Qn",
      "category": "electric-pianos",
      "img": "https://m.media-amazon.com/images/I/71MRTjq4ksL._AC_SL1500_.jpg"
    },
    {
      "title": "M-Audio Hammer 88",
      "description": "Teclado controlador M-Audio Hammer 88 USB/MIDI profesional con 88 teclas de accion martillo y paquete de software.",
      "price": 419,
      "off": 11,
      "refer_link": "https://amzn.to/3u3xIdA",
      "category": "electric-pianos",
      "img": "https://m.media-amazon.com/images/I/81gBIRokmeL._AC_SL1500_.jpg"
    },
    {
      "title": "AKAI MPK Mini MK3",
      "description": "Teclado Controlador MIDI USB de 25 Teclas con 8 Drum Pads, 8 Perillas y Software de Produccion Musical Incluido, Standard.",
      "price": 85,
      "off": 15,
      "refer_link": "https://amzn.to/3KHfFQh",
      "category": "synths",
      "img": "https://m.media-amazon.com/images/I/717qmGlA7ZL._AC_SL1500_.jpg"
    },
    {
      "title": "Korg microKORG XL",
      "description": "Sintetizador/Vocodificador de 37 teclas Korg microKORG XL con PC expandido, color blanco.",
      "price": 411,
      "off": 12,
      "refer_link": "https://amzn.to/32Ac6dC",
      "category": "synths",
      "img": "https://m.media-amazon.com/images/I/81iPb6YFaxL._AC_SL1500_.jpg"
    },
    {
      "title": "Roland JD-Xi",
      "description": "Sintetizador hibrido interactivo con motores de sonido analagico y digital. Teclado electronico.",
      "price": 415,
      "off": 27,
      "refer_link": "https://amzn.to/3fTYehr",
      "category": "synths",
      "img": "https://m.media-amazon.com/images/I/71u4AOWXAZL._AC_SL1500_.jpg"
    },
    {
      "title": "Behringer DEEPMIND 12",
      "description": "Sintetizador polifonico clasico con 12 voces analogicas reales para sonidos increiblemente grasos y autenticos",
      "price": 735,
      "off": 0,
      "refer_link": "https://amzn.to/3rOX7Fa",
      "category": "synths",
      "img": "https://m.media-amazon.com/images/I/61BWHAehjHL._AC_SL1000_.jpg"
    },
    {
      "title": "Novation",
      "description": "Mininova sintetizador con ultranova sonido motor 37 teclas. VocalTune con vocoder y microfono con flexo.",
      "price": 322,
      "off": 0,
      "refer_link": "https://amzn.to/3H1zIH6",
      "category": "synths",
      "img": "https://m.media-amazon.com/images/I/61ck8HGkfQS._AC_SL1200_.jpg"
    },
    {
      "title": "Coolmusic 100W BT",
      "description": "Amplificador de monitor personal. Amplificador de tambor electrico Altavoz, teclado y altavoz de guitarra.",
      "price": 209,
      "off": 0,
      "refer_link": "https://amzn.to/3g2WNwU",
      "category": "amplis",
      "img": "https://m.media-amazon.com/images/I/81VXPUYyxoL._AC_SL1237_.jpg"
    },
    {
      "title": "Donner DDA-35",
      "description": "Amplificador de teclado con entrada auxiliar y conexion de audio inalambrica, Amplificador de bateria/teclado/microfono 3 en 1.",
      "price": 129,
      "off": 19,
      "refer_link": "https://amzn.to/3IBhSuF",
      "category": "amplis",
      "img": "https://m.media-amazon.com/images/I/81ORCxLwBJL._AC_SL1500_.jpg"
    },
    {
      "title": "Coolmusic 40W",
      "description": "Coolmusic amplificador de guitarra acustica portatil de 40 W con entrada de microfono, Bluetooth integrado, bateria recargable con rendimiento de hasta 8 horas.",
      "price": 178.99,
      "off": 0,
      "refer_link": "https://amzn.to/3G8Co4w",
      "category": "amplis",
      "img": "https://m.media-amazon.com/images/I/61WQA4X+9NL._AC_.jpg"
    },
    {
      "title": "Coolmusic 30W BT",
      "description": "Amplificador de teclado portatil con entrada de microfono, Bluetooth integrado, rendimiento de bateria recargable de hasta 8 horas.",
      "price": 149,
      "off": 0,
      "refer_link": "https://amzn.to/3KVFWL5",
      "category": "amplis",
      "img": "https://m.media-amazon.com/images/I/61y93AJLA1L._AC_SL1000_.jpg"
    },
    {
      "title": "Laney AH80",
      "description": "Amplificador para Teclado, Negro. 80 W RMS a 4 ohmios. 3 canales, xLR equilibrada/line no equilibrada, line no equilibrada estereo, instrumento Hi-Z",
      "price": 258,
      "off": 0,
      "refer_link": "https://amzn.to/3rTukz9",
      "category": "amplis",
      "img": "https://m.media-amazon.com/images/I/61bdLrTjVrL._AC_SL1500_.jpg"
    },
    {
      "title": "Soporte RockJam",
      "description": "Soporte RockJam ajustable con doble refuerzo y con correas de bloqueo",
      "price": 21.99,
      "off": 51,
      "refer_link": "https://amzn.to/3KCtLlY",
      "category": "accessories",
      "img": "https://m.media-amazon.com/images/I/71ih771l5XL._AC_SL1500_.jpg"
    },
    {
      "title": "Banco Premium",
      "description": "Banco de teclado RockJam Premium acolchado ajustable o Taburete de piano digital.",
      "price": 39.99,
      "off": 11,
      "refer_link": "https://amzn.to/3nZJj9Q",
      "category": "accessories",
      "img": "https://m.media-amazon.com/images/I/81Rqe6AV68L._AC_SL1500_.jpg"
    },
    {
      "title": "Funda 61 teclas",
      "description": "QEES Funda para teclado de 61 notas, funda para piano electrico de tela Oxford 600D con interior de tela de 10 mm.",
      "price": 51.44,
      "off": 0,
      "refer_link": "https://amzn.to/3ralNsR",
      "category": "accessories",
      "img": "https://m.media-amazon.com/images/I/51IpzTj38RL._AC_SL1001_.jpg"
    },
    {
      "title": "GATOR GKC-1540",
      "description": "Funda antipolvo para teclado, color negro, 61-76 teclas. Dimensiones de 109.2x16.5x44.4cm. Puede ser lavable a mano.",
      "price": 13.9,
      "off": 19,
      "refer_link": "https://amzn.to/3IHrg07",
      "category": "accessories",
      "img": "https://m.media-amazon.com/images/I/71fIFSXSjkL._AC_SL1500_.jpg"
    },
    {
      "title": "M-Audio SP-2",
      "description": "Pedal de sostenido universal con tacto de piano para teclados electronicos, pianos digitales, controladores MIDI, sintetizadores y mas.",
      "price": 16.5,
      "off": 3,
      "refer_link": "https://amzn.to/3tZaSUs",
      "category": "accessories",
      "img": "https://m.media-amazon.com/images/I/61bdLrTjVrL._AC_SL1500_.jpg"
    }
]`