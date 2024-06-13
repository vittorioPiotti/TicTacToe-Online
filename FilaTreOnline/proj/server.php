


<?php

/*
  FilaTre Online v1.0.0 (https://github.com/vittorioPiotti/FilaTre-Online/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/FilaTreOnline/blob/main/LICENSE.md)
*/

// Connessione al database
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "filaTreOnline";
$port = '8889';
$conn = new mysqli($servername, $username, $password, $dbname, $port);


if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}


//esecuzione evento

$event = $_GET['event'];
$response;


switch ($event) {
    case 0:
        $idGiocatore = $_GET['idGiocatore'];
        $response = creaPartita($conn,$idGiocatore);
        // Esegui la logica per creare una nuova partita con idGiocatore
        break;
    case 1:
        $idGiocatore = $_GET['idGiocatore'];
        $response = eliminaPartita($conn,$idGiocatore);
        // Esegui la logica per eliminare la partita con idGiocatore
        break;
    case 2:
        $idGiocatore = $_GET['idGiocatore'];
        $response = attesaSfidante($conn,$idGiocatore);
        // Esegui la logica per l'attesa dello sfidante
        break;
    case 3:
        $response = ottieniListaCodici($conn);
        if (empty($response))$response = 0;
        else json_encode($response);
        // Esegui la logica per ottenere lista codici
        break;
    case 4:
        $idGiocatore = $_GET['idGiocatore'];
        $response = verificaCodicePartita($conn,$idGiocatore);
         // Esegui la logica per verificare il codice inserito - aggiunge giocatore a partita
        break;
    case 5:
        $idGiocatoreBlu = $_GET['idGiocatoreBlu'];
        $idGiocatoreRosso = $_GET['idGiocatoreRosso'];
        $response = eseguiAccessoPartita($conn,$idGiocatoreBlu,$idGiocatoreRosso);
        // Esegui la logica per join partita
        break;
    case 6:
        $idGiocatore = $_GET['idGiocatore'];
        $inxMossa = $_GET['inxMossa'];
        $response = aggiornaCampoGioco($conn,$idGiocatore,$inxMossa);
        // Esegui la logica per aggiorna campoGioco 
        break;
    case 7:
        $idGiocatore = $_GET['idGiocatore'];
        $response = attesaTurno($conn,$idGiocatore);
        // Esegui la logica per attesa turno
        break;
    case 8:
        $idGiocatore = $_GET['idGiocatore'];
        $response = cambiaTurno($conn,$idGiocatore);
        // Esegui la logica per cambio turno
        break; 
    case 9:
        $idGiocatore = $_GET['idGiocatore'];
        $response = ottieniCampoGioco($conn,$idGiocatore);
        //logica per ottenere campoGioco
        break;
    case 10:
        $idGiocatore = $_GET['idGiocatore'];
        $response = verificaPresenzaSfidante($conn,$idGiocatore);
        //logica per vedere se giocatore nemico online (se non online partita non esiste piu)
        break;
    default:
        $response = "evento non valido";
        break;
}



//eventi 
function verificaPresenzaSfidante($conn, $idGiocatore) {
    // Verifica la presenza dell'idGiocatore nella tabella partita
    $query = "SELECT 1 FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore' LIMIT 1";
    $result = $conn->query($query);

    // Verifica se il risultato contiene almeno una riga
    if ($result->num_rows > 0) {
        // Almeno una riga trovata, quindi l'idGiocatore è presente
        return 0;
    } else {
        // Nessuna riga trovata, quindi l'idGiocatore non è presente
        return 1;
    }
}

function creaPartita($conn,$idGiocatore){
    $query = "INSERT INTO partita (idGiocatoreBlu) VALUES ('$idGiocatore')";

        // Esegui la query
        if ($conn->query($query) === TRUE) {
            return "Nuova partita creata con successo";
        } else {
            return "Errore durante la creazione della partita: " . $conn->error;
        }

        // Chiudi la connessione
        $conn->close();
}
function cambiaTurno($conn, $idGiocatore) {
    // Seleziona statoTurno dalla tabella partita
    $query = "SELECT statoTurno FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $statoTurno = $row['statoTurno'];

        // Determina il nuovo stato del turno
        $appTurno = ($statoTurno === "rosso") ? "blu" : "rosso";

        // Aggiorna lo stato del turno nella tabella partita
        $updateQuery = "UPDATE partita SET statoTurno = '$appTurno' WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
        if ($conn->query($updateQuery) === TRUE) {
            return "Il turno è stato cambiato con successo.";
        } else {
            return "Errore durante il cambio di turno: " . $conn->error;
        }
    } else {
        return "Partita non trovata o errore nella query.";
    }
}





function attesaTurno($conn, $idGiocatore) {
    // Seleziona statoPartita e idGiocatoreBlu dalla tabella partita
    $query = "SELECT statoTurno, idGiocatoreBlu FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $statoTurno = $row['statoTurno'];
        $idGiocatoreBlu = $row['idGiocatoreBlu'];

        // Determina il colore del giocatore
        $coloreGiocatore = ($idGiocatore == $idGiocatoreBlu) ? "blu" : "rosso";

        // Verifica se lo statoTurno è uguale al colore del giocatore
        if ($statoTurno !== $coloreGiocatore) {
            return 1; // Il giocatore è in attesa del suo turno
        } else {
            return 0; // Il giocatore non è in attesa del suo turno
        }
    } else {
        return -1; // Partita non trovata o errore nella query
    }
}

function eliminaPartita($conn,$idGiocatore){
    $query = "DELETE FROM partita WHERE idGiocatoreRosso = '".$idGiocatore."' OR idGiocatoreBlu = '".$idGiocatore."'";

     // Esegui la query
     if ($conn->query($query) === TRUE) {
        return "elimina partita con successo";
    } else {
        return "Errore durante elimina della partita: " . $conn->error;
    }

    // Chiudi la connessione
    $conn->close();

}
function ottieniListaCodici($conn) {
    $idGiocatoriBlu = array();

    // Query per cercare gli idGiocatoreBlu con statoPartita 'valido'
    $query = "SELECT idGiocatoreBlu FROM partita WHERE statoPartita = 'valido'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $idGiocatoriBlu[] = $row["idGiocatoreBlu"];
        }
    }

    return $idGiocatoriBlu;
}

function ottieniCampoGioco($conn, $idGiocatore){
    // Query per ottenere il campo di gioco in base all'id del giocatore
    $query = "SELECT idGiocatoreRosso, campoGioco FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
    
    // Esegui la query
    $result = $conn->query($query);
    
    // Verifica se c'è un risultato valido
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $idGiocatoreRosso = $row['idGiocatoreRosso'];
        $campoGioco = $row['campoGioco'];
        
        // Verifica se l'id del giocatore corrisponde all'id del giocatore rosso
        if ($idGiocatore == $idGiocatoreRosso) {
            // Inverti gli '1' con '2' nel campo di gioco
            $campoGioco = strtr($campoGioco, '12', '21');
        }
        
        return $campoGioco;
    } else {
        return null; // Restituisci null se non trovi una partita valida o il campo di gioco
    }
}

function aggiornaCampoGioco($conn, $idGiocatore, $inxMossa) {
    // Ottieni idGiocatoreBlu dal database
    $query = "SELECT idGiocatoreBlu FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
    $result = $conn->query($query);

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $idGiocatoreBlu = $row['idGiocatoreBlu'];

        // Verifica il valore di stato
        $stato = ($idGiocatore == $idGiocatoreBlu) ? 1 : 2;

        // Ottieni il valore corrente di campoGioco dal database
        $query = "SELECT campoGioco FROM partita WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
        $result = $conn->query($query);

        if ($result && $result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $campoGioco = $row['campoGioco'];

            // Modifica il valore di campoGioco all'indice specificato
            if ($inxMossa >= 0 && $inxMossa < strlen($campoGioco)) {
                $campoGioco[$inxMossa] = $stato;

                // Esegui l'UPDATE nel database
                $query = "UPDATE partita SET campoGioco = '$campoGioco' WHERE idGiocatoreRosso = '$idGiocatore' OR idGiocatoreBlu = '$idGiocatore'";
                $conn->query($query);
            }
        }
    }
}

function attesaSfidante($conn, $idGiocatore){
    $query = "SELECT statoPartita FROM partita WHERE idGiocatoreBlu = '$idGiocatore'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $statoPartita = $row['statoPartita'];

        if ($statoPartita == 'scaduto') {
            return 0;
        } else {
            return 1;
        }
    } else {
        return "Partita non trovata";
    }
}
function verificaCodicePartita($conn, $idGiocatoreBlu) {
    // Query per cercare la partita con l'idGiocatoreBlu dato
    $query = "SELECT * FROM partita WHERE idGiocatoreBlu = '$idGiocatoreBlu'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        return 0; // Valido
    } else {
        return 1; // Errore
    }
}
function eseguiAccessoPartita($conn, $idGiocatoreBlu, $idGiocatoreRosso) {
    // Query per aggiornare i dati della partita
    $updateQuery = "UPDATE partita SET idGiocatoreRosso = '$idGiocatoreRosso', statoPartita = 'scaduto' WHERE idGiocatoreBlu = '$idGiocatoreBlu'";
    
    if ($conn->query($updateQuery) === TRUE) {
        return 0; // Successo
    } else {
        return 1; // Errore
    }
}


// Chiudi la connessione
$conn->close();

echo json_encode($response);
?>
