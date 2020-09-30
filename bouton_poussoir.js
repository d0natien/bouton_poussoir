/*  
- mettre dans une variable le bouton en le récupérant sur le document
- cette chose, au clic, je lui fais changer d'apparence avec une fonction particulère

 */


var bouton = document.querySelector('#bouton');

function boutonOn(){
  bouton.style.color = '#89ed0e';
  bouton.style.background = "#ffffff";
  bouton.style.textShadow = "0px 0px 10px #c8ff85, 0px 0px 10px #c8ff85, 0px 0px 10px #c8ff85";
  bouton.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #156785";
}

bouton.addEventListener('click', boutonOn);
