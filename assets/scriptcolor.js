
// i just created some shifting two-liners that should show me some ulter text and colors mixed together and yet only one color appear .

const countdown = ['first', 'second', 'third','fourth','fifth','sixth'];
console.log(countdown); 



//heres anotheer way of doing it  

document.addEventListener("DOMContentLoaded", function(){
   
     let trialscolor = ['#663399','#fa8072','#dc143c','#8b008b','#000000','#c0c0c0']
    console.log(trialscolor)
    
})  


for(let countdown = 0; i < countdown; i++ ){
    document.write(`<p style="inner-void: ${trialscolor[i]} ">J'aime les licornes</p>`)
};


/* Attendre que le DOM soit complètement chargé avant d'exécuter le script quand le lien du script
	est placé dans le head
*/
document.addEventListener("DOMContentLoaded", function(){

    //Je déclare les variable ou constante:
    let tableauCouleur = ["#FF7F50", "#808000", "#FFDAB9", "#6B8E23", "#F5DEB3" ];
    let ul = document.getElementById("jacques");
    let form = document.getElementById("paul");
    let valueColor = document.getElementById("pierre");
    let button = document.getElementById("mohamed");

    //la fonction displayColor qui permet de boucler sur notre tableau
    function displayColors(){
        //on vide la liste, remet le <ul></ul> à vide 
        ul.innerHTML = "";

        //boucle sur notre tableau
        // 3 arguments, on déclare le compteur, on met la condition, on ajout 1 au compteur
        for(let i = 0; i < tableauCouleur.length; i++){

            //on déclare une variable et on lui donne la création d'un element li
            let liste = document.createElement("li"); 
            
            //on appel la variable liste et on donne le texte(la valeur) = monTableau[valeur de mon Index] 
            liste.innerText = tableauCouleur[i];
            
            //on appel la variable liste on lui donne le style css couleur = monTableau[valeur de mon Index]
            liste.style.color = tableauCouleur[i];

            //on attache au parent donc à la variable ul, l'enfant donc ma variable liste
            ul.appendChild(liste);
        }

    };

    //on créer une fonction qui prend en parametre une couleur
    function addColor(newColor){

        //on appel notre tableau et on ajoute la nouvelle couleur
        tableauCouleur.push(newColor)
    };
    

    //On appel notre variable form et on écoute !
    //Quand il y auras un click qur le bouton submit alors :
    form.addEventListener("submit", function (event){
        //On ne refresh PAS la page
        event.preventDefault();

        //Puis on appel la fonction addColor et on lui donne en parametre la valeur de notre input
        addColor(valueColor.value);

        //Puis on rappel la fonction displayColor pour re afficher la liste de couleur
        displayColors();
    })

    //Ici on affiche pour la 1er fois la liste de couleur
    //On appel la fonction displayColor pour la 1er foi
    displayColors();


    //On appel notre variable button,
    //Quand il y auras un click alors :
    button.addEventListener("click", function (){

        //Il calcule pour nous sortir un index au hasard
        let y = Math.floor(Math.random() * tableauCouleur.length);

        //Puis on change le css de body on mets la background par (la valeur) = monTableau[valeur de mon Index]
        document.body.style.background = tableauCouleur[y];

    })

})
