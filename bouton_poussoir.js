/*  
- mettre dans une variable le bouton en le récupérant sur le document
- cette chose, au clic, je lui fais changer d'apparence avec une fonction particulère

 */


var bouton = document.querySelector('#bouton');

function boutonOn(){
  bouton.style.color = 'green';
  bouton.style.boxShadow = '0px 0px 0px white, -4px -4px 7px grey';
}

bouton.addEventListener('click', boutonOn);
