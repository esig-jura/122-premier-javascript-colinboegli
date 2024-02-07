/**
 * Démo mon premier JavaScript
 * @author  Colin Boegli
 * @version 2.0
 * @since   2024-02-07
 */

'use strict'; // Active le mode strict du JavaScript

const premierP = document.querySelector('p');
const premierUl = document.querySelector('ul');
const tousLesStrongs = document.querySelectorAll('strong');
console.log(premierP, premierUl, tousLesStrongs);

premierP.innerText = 'Bonjour le monde !';
premierUl.style.backgroundColor = 'yellow';

// Parcours le tableau de tousLesStrongs
for (let i = 0; i < tousLesStrongs.length; i++){
    tousLesStrongs[i].style.color = 'red';
    tousLesStrongs[i].innerText = 'TOTO';
}

// Même chose avec for...of
for (let element of tousLesStrongs){
    element.style.textDecoration = 'overline';
}

/* Gestion de la liste des courses */
const txtArticle = document.querySelector('#article');
const btAjouter = document.querySelector('button.ajouter');
const ulListe = document.querySelector('ul.Liste');

console.log(txtArticle,btAjouter, ulListe);

//Fonction Ajouter
function ajouter(){
    //Affiche le texte saisi dans le champ
    ulListe.innerHTML += `<li> $(txtArticle.value) </li>`;
}
// Au clic du bouton appelle la fonction ajouter
// btAjouter.onclick = ajouter;
// btAjouter.addEventListener('click', ajouter);
//Même chose avec un arrow function anonyme
btAjouter.addEventListener('click', function ajouter() {
    ulListe.innerHTML += `<li> $(txtArticle.value) </li>`;
});