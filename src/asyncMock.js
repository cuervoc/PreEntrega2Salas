const products = [
    { 
        id: 1, 
        name: "The Legend of Zelda: Breath of the Wild", 
        platform: "Switch", 
        price: 60,
        img: "https://juegosdigitaleschile.com/files/images/productos/1637859721-the-legend-of-zelda-breath-of-the-wild-nintendo-switch.jpg", 
        summary: "Embárcate en una aventura épica en Hyrule mientras Link lucha contra Calamity Ganon para salvar al reino y a la princesa Zelda."
    },
    { 
        id: 2, 
        name: "Elden Ring", 
        platform: "PC", 
        price: 60, 
        img: "https://cdn11.bigcommerce.com/s-xs1cevxe43/images/stencil/760x760/products/2418/9486/Steam_SD_edition__02413.1638342756.jpg?c=2",
        summary: "Un juego de rol de acción en un mundo abierto, donde los jugadores deben explorar vastas tierras y enfrentarse a temibles enemigos para restaurar el Elden Ring."
    },
    { 
        id: 3, 
        name: "Horizon Forbidden West", 
        platform: "PS5", 
        price: 70, 
        img:"https://juegosdigitaleschile.com/files/images/productos/1631120011-horizon-forbidden-west-ps5-pre-orden.jpg",
        summary: "Acompaña a Aloy en su viaje hacia el oeste para descubrir los secretos de un futuro post-apocalíptico y salvar la Tierra de nuevas amenazas."
    },
    { 
        id: 4, 
        name: "Halo Infinite", 
        platform: "Xbox", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnJpeakAgC-c8rr2G7hIZlLesy5LhglOn0A&s",
        price: 60, 
        summary: "El Jefe Maestro regresa para enfrentarse a una amenaza aún mayor y salvar a la humanidad en este capítulo de la legendaria saga de Halo."
    },
    { 
        id: 5, 
        name: "Super Mario Odyssey", 
        platform: "Switch", 
        img: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/6050426_1/w=1004,h=1500,fit=cover",
        price: 50, 
        summary: "Únete a Mario en un viaje global con su nuevo compañero Cappy, para salvar a la princesa Peach de Bowser y su boda forzada."
    },
    { 
        id: 6, 
        name: "Resident Evil Village", 
        platform: "PC", 
        price: 60, 
        img: "https://http2.mlstatic.com/D_NQ_NP_885189-MLA46305001621_062021-O.webp",
        summary: "Ethan Winters debe enfrentarse a horrores inimaginables en un misterioso pueblo para rescatar a su hija en la octava entrega de Resident Evil."
    },
    { 
        id: 7, 
        name: "Spider-Man: Miles Morales", 
        platform: "PS5", 
        price: 50, 
        img:"https://juegosdigitaleschile.com/files/images/productos/1606596198-marvels-spider-man-miles-morales-ps5.jpg",
        summary: "Vive la historia de Miles Morales mientras descubre sus nuevos poderes de Spider-Man y protege a la ciudad de Nueva York de nuevas amenazas."
    },
    { 
        id: 8, 
        name: "Forza Horizon 5", 
        platform: "PC", 
        price: 50, 
        img:"https://images.g2a.com/300x400/1x1x1/forza-horizon-5-pc-steam-account-account-global-i10000256484045/e47e9bcbede547a0a589f9df",
        summary: "Participa en el festival Horizon y explora un México vibrante y detallado en la mejor experiencia de carreras de mundo abierto."
    },
    { 
        id: 9, 
        name: "Gears 5", 
        platform: "Xbox", 
        price: 40, 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK34w_zxj8rSdurG9G0CxvZjli1qP505t0FA&s",
        summary: "Kait Diaz busca descubrir sus conexiones con el enemigo y la verdadera amenaza para Sera en esta entrega de la saga Gears of War."
    },
    { 
        id: 10, 
        name: "Metroid Dread", 
        platform: "Switch", 
        price: 60, 
        img:"https://http2.mlstatic.com/D_NQ_NP_842502-MLU75418181375_032024-O.webp",
        summary: "Acompaña a Samus Aran en su misión más peligrosa, enfrentándose a una amenaza robótica en el planeta ZDR."
    },
    { 
        id: 11, 
        name: "FIFA 24", 
        platform: "Xbox", 
        price: 70, 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCFYVlV4eEroOZk7ZIozags_Xcuc4TgBuKg&s",
        summary: "Disfruta de la experiencia de fútbol más realista y moderna con gráficos mejorados y nuevas mecánicas de juego."
    },
    { 
        id: 12, 
        name: "Ratchet & Clank: Rift Apart", 
        platform: "PS5", 
        price: 70, 
        img:"https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/15301740_1/w=1004,h=1500,fit=cover",
        summary: "Únete a Ratchet y Clank en una aventura interdimensional con una jugabilidad fluida y gráficos de próxima generación."
    },
    { 
        id: 13, 
        name: "Assassin's Creed Valhalla", 
        platform: "PC", 
        price: 60, 
        img:"https://http2.mlstatic.com/D_NQ_NP_764286-MLA46477664878_062021-O.webp",
        summary: "Vive la era vikinga como Eivor, un guerrero nórdico que debe liderar a su clan en la conquista de Inglaterra."
    },
    { 
        id: 14, 
        name: "Call of Duty: Modern Warfare II", 
        platform: "PC", 
        price: 70, 
        img:"https://m.media-amazon.com/images/I/71txxWzFApL._AC_UF1000,1000_QL80_.jpg",
        summary: "Experimenta una historia intensa y misiones de combate modernas en la secuela del exitoso Modern Warfare."
    },
    { 
        id: 15, 
        name: "Mario Kart 8 Deluxe", 
        platform: "Switch", 
        price: 50, 
        img:"https://cjmdigitales.cl/wp-content/uploads/2023/07/1119-1.webp",
        summary: "Corre con tus personajes favoritos de Mario en emocionantes pistas llenas de acción y objetos icónicos."
    },
    { 
        id: 16, 
        name: "Cyberpunk 2077", 
        platform: "PC", 
        price: 50, 
        img:"https://tecnoplay.cl/2582-large_default/steam-pc-cyberpunk-2077-ultimate-edition-cuenta-steam.jpg",
        summary: "Explora Night City, un mundo abierto futurista, en una historia llena de decisiones y consecuencias."
    },
    { 
        id: 17, 
        name: "Gran Turismo 7", 
        platform: "PS5", 
        price: 70, 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoGtK5jjBa65Wbp1XcSCikY7OSv6jbXo9jAw&s",
        summary: "El simulador de carreras definitivo regresa con autos y pistas realistas, ofreciendo una experiencia de conducción auténtica."
    },
    { 
        id: 18, 
        name: "Sea of Thieves", 
        platform: "Xbox", 
        price: 40, 
        img:"https://cdn.cdkeys.com/700x700/media/catalog/product/h/e/hero_8_.jpg",
        summary: "Embárcate en una aventura pirata multijugador donde puedes explorar, saquear y luchar en alta mar."
    },
    { 
        id: 19, 
        name: "Splatoon 3", 
        platform: "Switch", 
        price: 60, 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSps0n7H633DjVOjt8LbupsZZN5TKM9DhKtLA&s",
        summary: "Participa en intensas batallas de pintura con nuevos modos, armas y una emocionante campaña para un jugador."
    },
    { 
        id: 20, 
        name: "Starfield", 
        platform: "PC", 
        price: 70, 
        img:"https://img.pccomponentes.com/articles/1073/10738400/1230-starfield-pc-fe6b6a74-12b9-489c-ab2e-fed763989c5d.jpg",
        summary: "Explora el universo en esta épica aventura espacial de mundo abierto donde el jugador forja su propio destino."
    }
];


export const getProductsByIdCategory = (categoryId)=>
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=>prod.platform === categoryId));
        }, 2500);
    });

}


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};


export const getProductsById = (id)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=>prod.id === id));
        }, 500);
        
    });
}

