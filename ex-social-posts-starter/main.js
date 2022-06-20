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
        postId: 1,
        authorName: 'Phil Mangione',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        datePost: formatDate(new Date(2021, 6, 25)),
        postText: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        postImage: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 80
    },
    {
        postId: 2,
        authorName: 'Sofia Perlari',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        datePost: formatDate(new Date(2019, 3, 10)),
        postText: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        postImage: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 120
    },
    {
        postId: 3,
        authorName: 'Italo Calvino',
        authorPic: null,
        datePost: formatDate(new Date(2020, 4, 13)),
        postText: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        postImage: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 210
    },
    {
        postId: 4,
        authorName: 'Margherita Hack',
        authorPic: `https://unsplash.it/300/300?image=${getRndInteger(1, 100)}`,
        datePost: formatDate(new Date(2022, 2, 23)),
        postText: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        postImage: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 90
    },
    {
        postId: 5,
        authorName: 'Giovanni Verga',
        authorPic: null,
        datePost: formatDate(new Date(2022, 2, 23)),
        postText: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        postImage: `https://unsplash.it/600/300?image=${getRndInteger(1, 100)}`,
        likesNumber: 110
    },
];

// Invoca funzione per la stampa dei singoli post
drawAllPosts();


// ---------------------------------
// EVENT LISTENERS
// ---------------------------------

const allLikesBtns = document.querySelectorAll('.js-like-button');
const allLikesNumbers = document.querySelectorAll('.js-likes-counter');
for (let i = 0; i < allLikesBtns.length; i++) {
    const thisLikeBtn = allLikesBtns[i];
    // Ad ogni click del button:
    thisLikeBtn.addEventListener('click', function(event) {
        // Evitiamo il comportamento di default del browser
        event.preventDefault();
        // Aggiungo all'elemento cliccato la classe 'like-button--liked'
        this.classList.add('like-button--liked');
        // Prendo l'elemento html che ha il numero relativo a questo btn
        let relatedLikesNumber = allLikesNumbers[i];
        // Incremento di 1 il numero di like
        relatedLikesNumber.innerHTML++;
    })
}

// ---------------------------------
//  DOM'S FUNCTIONS
// ---------------------------------


// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed
function drawAllPosts() {

    // Seleziono l'elemento in cui voglio stampare il template dei singoli post
    const postsList = document.querySelector('.posts-list');

    // Scorro l'array con i post e per ognuno:
    for (let i = 0; i < allPosts.length; i++) {
        const thisPost = allPosts[i];

        
        // Creo una variabile per ciascuna chiave dell'oggetto
        const {postId, authorName, authorPic, datePost, postText, postImage, likesNumber} = thisPost;


        // Creo una variabile con il template del singolo post
        const templatePost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${authorPic}" alt="${authorName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${authorName}</div>
                        <div class="post-meta__time">${datePost}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postText}</div>
            <div class="post__image">
                <img src="${postImage}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${postId}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${postId}" class="js-likes-counter">${likesNumber}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `

        // Stampo il post popolato con i dati contenuti nel singolo oggetto
        postsList.innerHTML += templatePost; 
    }
}


// -------------------
// UTILITY FUNCTIONS
// -------------------


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
