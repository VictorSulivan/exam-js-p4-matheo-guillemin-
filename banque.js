var exam_formulaire = document.getElementById("exam-form");

function W3docs(){ 
    var compte = document.forms["exam-form"]["compte"];               
    var somme = document.forms["exam-form"]["somme"]; 

    if (compte.value == "")                                  
    { 
        alert("Mettez votre compte."); 
        compte.focus(); 
        return false; 
    }    
    if (somme.value == "")                               
    { 
        alert("Mettez votre somme à envoyer."); 
        somme.focus(); 
        return false; 
    }
    return true; 
}

