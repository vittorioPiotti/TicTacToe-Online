<img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/header5.png" />



# FilaTre Online

Sito Web per FilaTre Online con un interfaccia grafica simpatica e divertente 


## Ispirazione

Per lo sfondo del sito è stata utilizzata  **con le opportune modifiche** l'immagine di sfondo presente nella pagina CodePen: [Link allo Sfondo](https://codepen.io/ksenia-k/pen/jXbWaJ)


## Sito Web

Sito Web FilaTre: [Link al Sito](https://vittoriopiotti.altervista.org/FilaTre/Online/index.php)


---

<img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/home.png" />


| Vittoria | Sconfitta| Pareggio| 
| ------------ | ------------ |  ------------ | 
| <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/vittoria.png" alt="Icona" width="300"/>  | <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/sconfitta.png" alt="Icona" width="300"/> | <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/pareggio.png" alt="Icona" width="300"/>  |


## API

| Nome API                    | Parametri                       | URL                   | Descrizione                                                              |
|-----------------------------|----------------------------------|-----------------------|--------------------------------------------------------------------------|
| creaPartita                 | `idGiocatore`                   | /event=0/             | Crea una nuova partita con l'id del giocatore specificato                |
| eliminaPartita              | `idGiocatore`                   | /event=1/             | Elimina la partita associata all'id del giocatore specificato            |
| attesaSfidante              | `idGiocatore`                   | /event=2/             | Attende l'arrivo di uno sfidante per il giocatore specificato            |
| ottieniListaCodici          | Nessuno                         | /event=3/             | Ottiene la lista dei codici disponibili                                  |
| verificaCodicePartita       | `idGiocatore`                   | /event=4/             | Verifica il codice inserito e aggiunge il giocatore alla partita         |
| eseguiAccessoPartita        | `idGiocatoreBlu`, `idGiocatoreRosso` | /event=5/          | Permette ai giocatori di entrare in una partita                           |
| aggiornaCampoGioco          | `idGiocatore`, `inxMossa`       | /event=6/             | Aggiorna il campo di gioco con la mossa specificata del giocatore        |
| attesaTurno                 | `idGiocatore`                   | /event=7/             | Attende che sia il turno del giocatore specificato                       |
| cambiaTurno                 | `idGiocatore`                   | /event=8/             | Cambia il turno del gioco per il giocatore specificato                   |
| ottieniCampoGioco           | `idGiocatore`                   | /event=9/             | Ottiene lo stato attuale del campo di gioco per il giocatore specificato |
| verificaPresenzaSfidante    | `idGiocatore`                   | /event=10/            | Verifica se lo sfidante del giocatore è online (se non online, partita non esiste più) |


