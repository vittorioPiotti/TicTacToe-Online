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

### creaPartita

Crea una nuova partita con l'id del giocatore specificato.

- **URL:** `/event=0&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### eliminaPartita

Elimina la partita associata all'id del giocatore specificato.

- **URL:** `/event=1&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### attesaSfidante

Attende l'arrivo di uno sfidante per il giocatore specificato.

- **URL:** `/event=2&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### ottieniListaCodici

Ottiene la lista dei codici disponibili.

- **URL:** `/event=3&`
- **Parametri:** Nessuno

### verificaCodicePartita

Verifica il codice inserito e aggiunge il giocatore alla partita.

- **URL:** `/event=4&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### eseguiAccessoPartita

Permette ai giocatori di entrare in una partita.

- **URL:** `/event=5&param=${idGiocatoreBlu}&param2=${idGiocatoreRosso}`
- **Parametri:** `idGiocatoreBlu`, `idGiocatoreRosso`

### aggiornaCampoGioco

Aggiorna il campo di gioco con la mossa specificata del giocatore.

- **URL:** `/event=6&param=${idGiocatore}&param2=${inxMossa}`
- **Parametri:** `idGiocatore`, `inxMossa`

### attesaTurno

Attende che sia il turno del giocatore specificato.

- **URL:** `/event=7&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### cambiaTurno

Cambia il turno del gioco per il giocatore specificato.

- **URL:** `/event=8&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### ottieniCampoGioco

Ottiene lo stato attuale del campo di gioco per il giocatore specificato.

- **URL:** `/event=9&param=${idGiocatore}`
- **Parametri:** `idGiocatore`

### verificaPresenzaSfidante

Verifica se lo sfidante del giocatore è online (se non online, partita non esiste più).

- **URL:** `/event=10&param=${idGiocatore}`
- **Parametri:** `idGiocatore`




