// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.


// Creiamo il nostro array di oggetti che rappresentano ciascun post
const allPosts = [
    {
        id: 1,
        name: 'Phil Mangione',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        date: formatDate(new Date(2021, 6, 25)),
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 80
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        date: formatDate(new Date(2019, 3, 10)),
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 120
    },
    {
        id: 3,
        name: 'Italo Calvino',
        authorPic: null,
        date: formatDate(new Date(2020, 4, 13)),
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 210
    },
    {
        id: 4,
        name: 'Margherita Hack',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        date: formatDate(new Date(2022, 2, 23)),
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 90
    },
    {
        id: 5,
        name: 'Giovanni Verga',
        authorPic: null,
        date: formatDate(new Date(2022, 2, 23)),
        textPost: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 110
    },
];

console.log('allPost: ', allPosts);


// ---------------
// FUNCTION
// ---------------


// Genera un numero random in un range tra min e max (inclusi entrambi):
// min -> numero minimo del range di numeri
// max -> numero massimo del range di numeri
// return: un numero random tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Le due funzioni di seguito lavorano insieme per mostrare una data con formato mm-dd-yyyy
// Argomenti -> yyyy, mm, dd
// Return: data con formato mm-dd-yyyy
// Esempio di utilizzo: formatDate(new Date(2027, 6, 24))
function formatDate(date) {
    return [
        padTo2Digits(date.getMonth()),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join('-');
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}
