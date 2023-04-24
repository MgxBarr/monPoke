
function ajouterOnClick() {
    var elt = document.getElementsByTagName('select');

    for (var i = elt.length-1; i >= 0; i--){
        elt[i].onclick = deplacer;
    }

    //remettre les selects à leurs valeurs de base si la page est refresh    
    window.addEventListener('beforeunload', function() {
        var elt = document.getElementsByTagName('select');

        for (var i = elt.length-1; i >= 0; i--){
            elt[i].selectedIndex = 0;
            elt[i].setAttribute("alt","0");
        }
    });
}


function deplacer(e) {
    var element = e.target;

    if(navigator.userAgent.indexOf("Chrome") != -1 || navigator.userAgent.indexOf("Safari") != -1){
        element = element.options[element.selectedIndex];
    }

    let nom_element = element.value;


    if ((element.getAttribute("alt") == "0") && (element.value!="choix")){

       for (i=0;i<document.getElementById("panier").children.length;i++){

            //si changement de l'élément choisi dans un même select
            if (document.getElementById("panier").children[i].getAttribute("alt") == element.parentNode.id){
                document.getElementById(document.getElementById("panier").children[i].innerHTML).setAttribute("alt","0");
                document.getElementById("panier").removeChild(document.getElementById("panier").children[i]);
            }
        }

        //ajout de l'élément
        let node=document.createElement("p");
        node.setAttribute("alt",element.parentNode.id);

        let textnode = document.createTextNode(nom_element);

        node.appendChild(textnode);

        document.getElementById("panier").appendChild(node);

        //alt à 1 pour ne pas re-afficher l'élément dans le panier si l'user clique de nouveau dessus (condition if)
        element.setAttribute("alt","1");

        //affichage du prix selon la taille du pokebowl
        if(element.value=="Petit"){
            document.getElementById("prix").innerHTML="9€";
        }else if(element.value=="Moyen"){
            document.getElementById("prix").innerHTML="11€";
        }else if(element.value=="Grand"){
            document.getElementById("prix").innerHTML="13€";
        }
    }
}


  /* ------------------------------------------------------------  */
  /* On charge la fonction ajouterOnClick au chargement de la page */
  /* ------------------------------------------------------------  */
document.body.onload = ajouterOnClick;
