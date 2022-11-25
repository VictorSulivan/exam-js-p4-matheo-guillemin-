var exam_formulaire = document.getElementById("exam-form");

function verifLengthcompte()
{
    var compteTF=false;
    if (document.getElementById("compte").length < 16  || document.getElementById("compte").length > 16 )
    {
        alert("Attention : Votre compte doit contenir 16 lettres au minimum et au maximum !");
        return compteTF;
    }
    else
    {
        return compteTF=true;
    }
}
function verifLengthsomme()
{
    var sommeTF=false;
    if (document.getElementById("somme").length < 0 )
    {
        alert("Attention : Votre somme déposer doit être supérieur à 0€ au minimum!");
        return sommeTF;
    }
    else
    {
        document.getElementById("somme").style.backgroundColor = "#6eff33";
        return sommeTF=true;
    }
}

function alertIsTrue(verifLengthcompte,verifLengthsomme){
    if(compteTF==true &&sommeTF==true){
        return alert ("La somme de XXX à bien été déposée.");
    }else{
        return alert ("Erreur sur le champs compte ou dans le compte somme");
    }
}