//----------------------- récup infos----------------------
nom = new Array();
valeur = new Array();

//On enlève le ? dans l'url
url = window.location.search.slice(1,window.location.search.length);

//récupérer les différents paramètres séparés par un &
listParam = url.split("&");
for(i=0;i<listParam.length;i++){
    laListe = listParam[i].split("=");
    nom[i] = laListe[0];
    valeur[i] = laListe[1];
    valeur[i]=valeur[i].replaceAll("+", " ");
    valeur[i]=valeur[i].replaceAll("%C3%A9", "é");
    valeur[i]=valeur[i].replaceAll("%C3%A8", "è");
}
console.log(nom+ ' - ' + valeur);


//----------------------- affichage infos----------------------
document.getElementById("nom").innerHTML="Nom : "+valeur[0];
document.getElementById("prenom").innerHTML="Prénom : "+valeur[1];
document.getElementById("tel").innerHTML="Tel : "+valeur[2];
document.getElementById("adresse").innerHTML="Adresse : "+valeur[3];
document.getElementById("codepostal").innerHTML="Code Postal : "+valeur[4];
document.getElementById("ville").innerHTML="Ville : "+valeur[5];


document.getElementById("taille").innerHTML=valeur[6];
document.getElementById("base").innerHTML=valeur[7];
document.getElementById("proteines").innerHTML=valeur[8];
document.getElementById("sauce").innerHTML=valeur[9];
document.getElementById("accomp1").innerHTML=valeur[10];
document.getElementById("accomp2").innerHTML=valeur[11];
document.getElementById("accomp3").innerHTML=valeur[12];
document.getElementById("topping").innerHTML=valeur[13];
document.getElementById("commande").innerHTML=valeur[14];

//----------------------- affichage prix----------------------
if (valeur[6]=="Petit"){
    document.getElementById("prix").innerHTML="9€";
}else if (valeur[6]=="Moyen"){
    document.getElementById("prix").innerHTML="11€";
}else if (valeur[6]=="Grand"){
    document.getElementById("prix").innerHTML="13€";
}
