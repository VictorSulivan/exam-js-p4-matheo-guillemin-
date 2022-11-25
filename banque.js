var exam_formulaire = document.getElementById("exam-form");

function verifLengthcompte()
{
    if (document.getElementById("compte").length < 16  || document.getElementById("compte").length > 16 )
    {
        alert("Attention : Votre compte doit contenir 16 lettres au minimum et au maximum !");
        return false;
    }
    else
    {
        return true;
    }
}
function verifLengthsomme()
{
    if (document.getElementById("somme").length < 0 )
    {
        alert("Attention : Votre somme déposer doit être supérieur à 0€ au minimum!");
        return false;
    }
    else
    {
        document.getElementById("somme").style.backgroundColor = "#6eff33";
        return true;
    }
}

