const sujets = [
    { id: 1, img: 'image1.png' },
    { id: 2, img: 'image2.png' },
    { id: 3, img: 'image3.png' },
    { id: 4, img: 'image4.png' },
    { id: 5, img: 'image5.png' },
];


function aleatoire() {

    // si plus de sujets dans le tableau des sujets
    if (sujets.length === 0) {
        return alert("Tous les challenges ont été faits !");
    } else {
    // index aléatoire parmi les sujets 
    const index = Math.floor(Math.random() * sujets.length);
    return sujets[index]; 
    }


}

function afficherSujet() {
    const sujetEncours = aleatoire();

    
    const container = document.querySelector(".container");
    document.querySelector("h2").innerHTML = `Challenge ${sujetEncours.id}`;
    container.querySelector("img").src = "./img/" + sujetEncours.img;

    const index = sujets.indexOf(sujetEncours); // Trouve l'index du sujet en cours
    sujets.splice(index, 1); // supprime le sujet en cours du tableau sujets
}

// Initialisation du premier sujet 
afficherSujet();

// au click :relance la fonction afficher sujet
const btn = document.querySelector('#btn');
btn.addEventListener("click", function () {
    afficherSujet(); 
});
