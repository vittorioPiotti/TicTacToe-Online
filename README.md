<img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/header5.png" />

<img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/socialpreview.png" width="100%" />


# FilaTre Online

Sito Web per FilaTre Online con un interfaccia grafica simpatica e divertente 


> [!TIP]
> Corretto funzionamento garantito

## Ispirazione

Per lo sfondo del sito è stata utilizzata  **con le opportune modifiche** l'immagine di sfondo presente nella pagina CodePen: [Link allo Sfondo](https://codepen.io/ksenia-k/pen/jXbWaJ)


## Sito Web

Sito Web FilaTre: [Link al Sito](https://vittoriopiotti.altervista.org/FilaTre/Online/index.php)


---

<img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/preview.gif" width="100%" />




|   <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/win.gif" alt="Icona" width="100%"/>  | <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/won.gif" alt="Icona" width="100%"/> | <img src="https://github.com/vittorioPiotti/FilaTreOnline/blob/main/FilaTreOnline/imgs/pari.gif" alt="Icona" width="100%"/>  |
|  ------------ | ------------ |  ------------ | 

## API


| Nome API                | URL                             | Parametri                          | Descrizione                                                                 |
|-------------------------|---------------------------------|------------------------------------|-----------------------------------------------------------------------------|
| **creaPartita**         | `/event=0`                      | `idGiocatore`                      | Crea una nuova partita per il giocatore specificato.                         |
| **eliminaPartita**      | `/event=1`                      | `idGiocatore`                      | Elimina la partita associata all'id del giocatore specificato.               |
| **attesaSfidante**      | `/event=2`                      | `idGiocatore`                      | Attende l'arrivo di uno sfidante per il giocatore specificato.               |
| **ottieniListaCodici**  | `/event=3`                      | Nessuno                            | Ottiene la lista dei codici disponibili.                                      |
| **verificaCodicePartita**| `/event=4`                     | `idGiocatore`                      | Verifica il codice inserito e aggiunge il giocatore alla partita.            |
| **eseguiAccessoPartita**| `/event=5`                     | `idGiocatoreBlu`, `idGiocatoreRosso`| Permette ai giocatori di entrare in una partita.                              |
| **aggiornaCampoGioco**  | `/event=6`                      | `idGiocatore`, `inxMossa`          | Aggiorna il campo di gioco con la mossa specificata del giocatore.           |
| **attesaTurno**         | `/event=7`                      | `idGiocatore`                      | Attende che sia il turno del giocatore specificato.                          |
| **cambiaTurno**         | `/event=8`                      | `idGiocatore`                      | Cambia il turno del gioco per il giocatore specificato.                      |
| **ottieniCampoGioco**   | `/event=9`                      | `idGiocatore`                      | Ottiene lo stato attuale del campo di gioco per il giocatore specificato.    |
| **verificaPresenzaSfidante** | `/event=10`| `idGiocatore`                      | Verifica se lo sfidante del giocatore è online.                             |


## Licenze

| Componente         | Versione  | Copyright                         | Licenza                                                       |
|--------------------|-----------|-----------------------------------|---------------------------------------------------------------|
| FilaTre-Online | v1.0.0    | 2024 Vittorio Piotti              | [GPL-3.0 License](https://github.com/vittorioPiotti/FilaTreOnline/blob/main/LICENSE.md) |
| font Slakey             |     |  | [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0) |






