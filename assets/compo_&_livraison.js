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
document.getElementById("taille").innerHTML="Taille "+valeur[0];
document.getElementById("base").innerHTML=valeur[1];
document.getElementById("proteines").innerHTML=valeur[2];
document.getElementById("sauce").innerHTML=valeur[3];
document.getElementById("accomp1").innerHTML=valeur[4];
document.getElementById("accomp2").innerHTML=valeur[5];
document.getElementById("accomp3").innerHTML=valeur[6];
document.getElementById("topping").innerHTML=valeur[7];
console.log(document.getElementById("taille").value);

//----------------------- affichage prix----------------------
if (valeur[0]=="Petit"){
    document.getElementById("prix").innerHTML="9€";
}else if (valeur[0]=="Moyen"){
    document.getElementById("prix").innerHTML="11€";
}else if (valeur[0]=="Grand"){
    document.getElementById("prix").innerHTML="13€";
}

//----------------------- numéro commande----------------------
function generateOrderCode() {
    let code1 = '';
    let code2 = '';
    let code = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const codeLength = 3;

    code1 += characters.charAt(Math.floor(Math.random() * characters.length));

    for (let i = 0; i < codeLength; i++) {
      code2 += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    code=code1+code2;

    return code;
  }
  
  const orderCode = generateOrderCode();
  document.getElementById("commande").innerHTML+=orderCode;
  document.getElementById("numero_cache").setAttribute("value",document.getElementById("commande").innerHTML)