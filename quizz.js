
var rep = new Array;

var faite = new Array;

var score = 0;

rep[1] = "d";

rep[2] = "d";

rep[3] = "c";

rep[4] = "d";

rep[5] = "c";

rep[6] = "a";

rep[7] = "a";

rep[8] = "b";

rep[9] = "b";

rep[10] = "d";

function truc() {
    alert("c'est un point de vue");
}

function Engine(question, reponse) {

    if (reponse != rep[question]) {

        if (!faite[question]) {

            faite[question] = -1;

            alert("Faux !!   La bonne réponse était en - " + rep[question] + " -");

        }

        else {

            alert("Tu as déjà répondu à cette question !");

        }

    }

    else {

        if (!faite[question]) {

            faite[question] = -1;

            score++;

            alert("Bonne réponse !! ");

        }

        else {

            alert("Tu as déjà répondu à cette question !");

        }

    }

}


function NextLevel() {

    if (score > 10) {

        alert("Tricheur !");

    }

    if (score > 8 && score <= 10) {

        alert(score + "/10. " + "Un coup de maître !");

    }

    if (score > 6 && score <= 8) {

        alert(score + "/10. " + "Bien, mais... pas parfait.");

    }



    if (score >= 4 && score < 6) {

        alert(score + "/10. " + "Pas terrible... un autre essai ?");

    }

    if (score < 4) {

        alert(score + "/10. " + "Il faut refaire l'exercice");

    }





    faite = new Array;

    score = 0;



    document.quest.reset();

}







