function controllaDataEventi() {
    //in questo modo mi prendo la data di oggi, utilizzando l'array/oggetto  Date()
    var oggi = new Date();

    //mi seleziona gli eventi dichiarati nella classe evento (mi crea un array)
    var eventi = document.getElementsByClassName("evento");

    //creo un ciclo for per controllare ogni singolo evento, eliminando quelli che sono già "scaduti"
    for (var i = 0; i < eventi.length; i++) {
        //Funzione che prende il valore utilizzato nel tag, e successivamente mi prende il valore dell'attributo "datetime" 
        //presente nel tage time.
        var dataEventoString = eventi[i].getElementsByTagName("time")[0].getAttribute("datetime");
 
        var dataEvento = new Date(dataEventoString); //--> mi trasformo l'evento nella stringa per poterlo confrontare con la data di oggi 

        if (dataEvento < oggi) {
            // Se la data dell'evento è passata, nascondo l'evento
            //avessi utilizzato display = hidden lo spazio sarebbe ancora occupato nella pagina, in questo caso invece non viene occupato
            eventi[i].style.display = "none";
        }
    }
}