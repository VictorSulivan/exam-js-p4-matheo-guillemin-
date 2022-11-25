var exam_formulaire = document.getElementById("exam-form");

function verifLengthcompte()
{
    var compteTF=false;
    if (document.getElementById("compte").length < 16  || document.getElementById("compte").length > 16 )
    {
        alert("Attention : Votre compte doit contenir 16 lettres au minimum et au maximum !");
        console.log(1)
        return compteTF;
    }
    else
    {
        console.log(2)
        return compteTF=true;
    }
}
function verifLengthsomme()
{
    var sommeTF=false;
    if (document.getElementById("somme").length < 0 )
    {
        alert("Attention : Votre somme déposer doit être supérieur à 0€ au minimum!");
        console.log(3);
        return sommeTF;
    }
    else
    {
        document.getElementById("somme").style.backgroundColor = "#6eff33";
        console.log(4);
        return sommeTF=true;
    }
}

function alertIsTrue(verifLengthcompte,verifLengthsomme){
    if(compteTF==true &&sommeTF==true){
        console.log(5);
        return alert ("La somme de XXX à bien été déposée.");
    }else{
        console.log(6);
        return alert ("Erreur sur le champs compte ou dans le compte somme.");
    }
}

let envoie = new XMLHttpRequest();
envoie.open('GET', 'http://exjs.apigame.co/data.php');
envoie.send();
envoie.onload= function(){
    document.getElementById("somme");
    document.getElementById("compte");
}