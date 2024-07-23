<?php
    include("aperturaSessioni.php");
    if(isset($_REQUEST["email"]) && isset($_REQUEST["pswrd"])){
        $email = trim($_REQUEST["email"]);
        $password = trim($_REQUEST["pswrd"]);
        $nome = $_COOKIE["utente"]["nome"];
        echo "$nome";
        if($email == $_COOKIE["utente"]["nome"]){
            $_SESSION["login"] = true;
        }else{
            echo "nome utente errato";
        }
    }
?>
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8">
        <title>Interfaccia Utente ESP1</title>
        <meta name="author" content="Paolo Aimar">
        <link rel="stylesheet" href="Login_ESP1_CSS.css">
        <meta name="keywords" lang="it" content="html">
        <!--in questo caso fornisco una breve descrizione della pagina nella parte di header, in modo da informare le persone 
        sulle operazioni che vengono svolte nella pagina-->
        <meta name="description" content="Pagina per registrarsi al sito">
        <meta http-equiv="refresh" content="60">
        <script src="javascript_ESP1.js"></script>
    </head>
    <body>
        <div class="contenitore">
            <h1>Inserisci i dati per effettuare il login</h1>
            <form action="login.php" id="contactForm" name="contactForm" method="get" onsubmit="return validateForm('contactForm');">
            <?php
                if(isset($_SESSION["successo"])){
                    $messaggio = $_SESSION["successo"];
                    echo "<div>$messaggio</div>";
                }
            ?>
                <p>
                    <!--Creo delle label per ogni singolo input text in modo che si chiarifichi meglio come andare ad inserire le informazioni-->
                    <label for="email">email:</label>
                    <input type="email" id="email" name="email" placeholder="Inserire email" required>
                </p>
                <p>
                    <label for="password">password:</label>
                    <input type="password" name="pswrd" id="pswrd" placeholder="Inserire la password" required>
                </p>
                <p>
                    <!--manca l'opzione recupera password-->
                    <input type="submit" id="sottometti" name="sottometti" value="Accedi">
                    <input type="button" id="registrazione" onclick="openSubscription();" value="Registrati Adesso">
                    <input type="reset" id="clear" name="clear" value="Cancella">
                </p>
            </form>
        </div>
    </body>
</html>
