// challenges = [1,2,3...]


const sujets =[
    {
        id:1,
        img: 'image1.png'
    },
    {
        id:2,
        img: 'image2.png'
    },
    {
        id:3,
        img: 'image3.png'
    },
    {
        id:4,
        img: 'image4.png'
    },
    {
        id:5,
        img: 'image5.png'
    },
]
function aleatoire(){
const alea = Math.ceil(Math.random()*5)
const pos = alea-1


   return pos
}

// affichage 
const container = document.querySelector(".container")
const pos= aleatoire();

const currentSujet = sujets[pos]
document.querySelector("h2").innerHTML+=(pos+1)
container.querySelector("img").src="./img/"+currentSujet.img


