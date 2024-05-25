"use strict";
function controllaDataEventi() {
    //in questo modo mi prendo la data di oggi, utilizzando l'array/oggetto  Date()
    let oggi = new Date();

    //mi seleziona gli eventi dichiarati nella classe evento (mi crea un array)
    let eventi = document.getElementsByClassName("evento");
    console.log("l'evento preso in considerazione è: "+eventi);
    /*for (var i = 0; i < eventi.length; i++) {
        console.log(eventi[i])
    }*/
    //creo un ciclo for per controllare ogni singolo evento, eliminando quelli che sono già "scaduti"
    for (let i = 0; i < eventi.length; i++) {
        //Funzione che prende il valore utilizzato nel tag, e successivamente mi prende il valore dell'attributo "datetime" 
        //presente nel tage time.
        console.log("valore preso in considerazione: "+eventi[i].getElementsByTagName("time")[0]);
        let dataEventoString = eventi[i].getElementsByTagName("time")[0].getAttribute("datetime");
 
        let dataEvento = new Date(dataEventoString); //--> mi trasformo l'evento nella stringa per poterlo confrontare con la data di oggi 

        if (dataEvento < oggi) {
            // Se la data dell'evento è passata, nascondo l'evento
            //avessi utilizzato display = hidden lo spazio sarebbe ancora occupato nella pagina, in questo caso invece non viene occupato
            eventi[i].style.display = "none";
        }
    }
}
function incrementValue(idCounter){
    let counter = document.getElementById(idCounter).value;
    document.getElementById(idCounter).value = parseInt(counter) + 1;
}

function decrementValue(idCounter){
    /*inserisco il controllo che decremento solo se il numero è maggiore di uno, in quanto non avrebbe comprare -1 biglietti...*/ 
    if(document.getElementById(idCounter).value == 0){
        /*volendo si può aggiungere un avvertimento all'utente*/
        /*window.alert("non puoi rimuovere altri biglietti in quanto il valore non può essere negativo") */
        return
    }
    /*utilizzo le variabili dichiarate come let in quanto più consistenti rispetto alle var*/
    let counter = document.getElementById(idCounter).value;
    document.getElementById(idCounter).value = counter - 1;
}
