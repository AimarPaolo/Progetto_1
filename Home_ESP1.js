//ricevo l'id del form e controllo che i dati inseriti siano corretti, ad esempio che il nome non sia troppo corto, 
//che la mail sia valida (anche se un primo controllo dovrebbe esser
// già stato effettuato da input type email) ... 

function validateForm(f1){
    let nome = document.getElementById(f1).nome.value;
    let cognome = document.getElementById(f1).cognome.value;
    let email = document.getElementById(f1).email.value;
    let textArea = document.getElementById(f1).message.value;
    if (nome != "" && cognome != "" && email != "" && textArea != ""){
        console.log("valori inseriti correttamente, necessario solo controllare che l'email rispetti lo stile");
        let regexp_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(regexp_email.test(email)){
            console.log("anche l'email è stata inserita corretamente ed è: ", email);
            return true;
        }else{
            window.alert("i valori inseriti nel campo email non sono corretti!");
            return false;
        }
    }else{
        // Se un campo obbligatorio non è stato compilato, visualizza un messaggio di errore distinto per ogni tipo di "errore"
        if (nome === "") {
            window.alert("Per favore, inserisci il tuo nome.");
        } else if (cognome === "") {
            window.alert("Per favore, inserisci il tuo cognome.");
        } else if (email === "") {
            window.alert("Per favore, inserisci la tua email.");
        } else if (textArea === "") {
            window.alert("Per favore, inserisci il tuo messaggio.");
        }
        return false;
    }
}