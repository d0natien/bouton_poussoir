/*  
- mettre dans une variable le bouton en le récupérant sur le document
- cette chose, au clic, je lui fais changer d'apparence avec une fonction particulère

si clic alors on switch de vrai a faux sur une variable avec un CSS différent.


 */


let bouton = document.querySelector('#bouton');

let switchOn = true;

function switchOnOff(){
  
  if(switchOn){
  bouton.style.position = "absolute";
  bouton.style.top = "125px"; /*simulation d'enfoncement*/
  bouton.style.color = '#b3ff00';
  bouton.style.background = "#ffffff";
  bouton.style.textShadow = "0px 0px 10px #c8ff85, 0px 0px 10px #c8ff85, 0px 0px 10px #c8ff85"; /*superposition pour un effet lumineux*/
  bouton.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 1px 0px 1px #156785";
  
  switchOn = false;

}else{
  bouton.style.position = "absolute";
  bouton.style.top = "120px";
  bouton.style.border = "1px solid black";
  bouton.style.color = "#808080";
  bouton.style.boxShadow = "inset 0px 1px 0px #aaa, 0px 7px 0px 1px #156785, 8px 7px 7px grey";
  bouton.style.textShadow = "none";
  
  switchOn = true;
}
}


	bouton.addEventListener('click', switchOnOff);




