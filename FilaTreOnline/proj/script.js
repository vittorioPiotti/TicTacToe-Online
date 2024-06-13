/*
    FilaTre Online v1.0.0 (https://github.com/vittorioPiotti/FilaTre-Online/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/FilaTreOnline/blob/main/LICENSE.md)
*/

         //costanti
         const combinazioni = [
            "012",
            "345",
            "678",
            "048",
            "246",
            "036",
            "147",
            "258"
         ];
         const caratteriPermessi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
         const lunghezzaCodice = 6;
         const standard = "000000";
         const body = document.getElementsByTagName("body")[0];
         const elementBtnOpzioni = document.getElementById("btn-opzioni");
         const elementBtnMenu = document.getElementById("btn-menu");
         const imgMenuCodici = document.getElementById("img-menu-codici");
         const elementListaCodici = document.getElementById('lista-codici');
         const elementInputCodice = document.getElementById("input-codice");
         const elementHamburger = document.getElementById('links');
         const elementMenuCodici = document.getElementById('container-menu-codici');
         const elementInputGioco = document.getElementById('element-input-gioco');
         const elementTextNotify = document.getElementById('text-notifica');
         const elementGridItem = [
            document.getElementById(`item-${0}`),
            document.getElementById(`item-${1}`),
            document.getElementById(`item-${2}`),
            document.getElementById(`item-${3}`),
            document.getElementById(`item-${4}`),
            document.getElementById(`item-${5}`),
            document.getElementById(`item-${6}`),
            document.getElementById(`item-${7}`),
            document.getElementById(`item-${8}`)
         ];

         const palette = [
         ["rgb(173, 181, 189)", "rgb(108, 117, 125)", "rgb(73, 80, 87)", "rgb(52, 58, 64)", "rgb(33, 37, 41)"],//pareggio
         ["rgb(90, 156, 253)", "rgb(55, 135, 253)", "rgb(13, 110, 253)", "rgb(11, 91, 209)", "rgb(9, 75, 173)"],//vittoria
         ["rgb(248, 215, 218)", "rgb(234, 134, 143)", "rgb(220, 53, 69)", "rgb(132, 32, 41)", "rgb(44, 11, 14)"],//sconfitta
         ["rgb(128, 255, 219)","rgb(100, 223, 223)",  "rgb(72, 191, 227)","rgb(83, 144, 217)","rgb(105, 48, 195)"],//sfondiVari
         ["rgb(243, 224, 236)", "rgb(234, 213, 230)", "rgb(242, 190, 252)", "rgb(202, 156, 225)", "rgb(104, 95, 116)"],
         ["rgb(250, 227, 227)", "rgb(247, 212, 188)", "rgb(207, 165, 180)", "rgb(201, 139, 185)", "rgb(132, 107, 138)"],
         ["rgb(97, 226, 148)", "rgb(123, 205, 186)", "rgb(151, 153, 202)", "rgb(189, 147, 216)", "rgb(180, 122, 234)"],
         ["rgb(163, 147, 191)", "rgb(168, 130, 172)", "rgb(115, 100, 138)", "rgb(69, 55, 80)", "rgb(12, 9, 16)"]
         ];
         const sfondo = Math.floor(Math.random() * (palette.length - 3)) + 3;;

      function setBodyColor(sfondo){
         if(sfondo > 2){
            for(let i = 0; i < 5; i ++){
               document.documentElement.style.setProperty(`--color-${i + 1}`, palette[sfondo][4 - i]);

            }

         }
         body.style.background = `url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80"><path fill="%23EAD5E6" id="gradient3" class="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" style="fill: ${palette[sfondo][1]};"></path><path fill="%23F3E0EC" id="gradient4" class="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" style="fill: ${palette[sfondo][0]};"></path><path fill="%23CA9CE1" id="gradient1" class="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" style="fill: ${palette[sfondo][3]};"></path><path fill="%23685F74" id="gradient0" class="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" style="fill: ${palette[sfondo][4]};"></path></svg>\') no-repeat center center fixed`;
         body.style.backgroundSize = 'cover';
         body.style.backgroundColor = `${palette[sfondo][2]}`;
      }
   
     
      setBodyColor(sfondo)

    
         const eventsBtnOpzioni = [
            "Crea nuova partita",
            "Annulla attesa sfidante",
            "Arrenditi"
         ];
         const notifies = [
            {
               text: 'Codice Partita',
               class: 'text-notify',
            },
            {
               text: 'Tocca A Te',
               class: 'text-notify text-notify-turn text-bounce'
            },
            {
               text: 'Turno Nemico',
               class: 'text-notify text-notify-turn text-bounce'
            },
            {
               text: 'Vittoria',
               class: 'text-notify text-notify-end text-bounce'
            },
            {
               text: 'Sconfitta',
               class: 'text-notify text-notify-end text-bounce'
            },
            {
               text: 'Pareggio',
               class: 'text-notify text-notify-end text-bounce'
            }
         ];
    

   
         const generaCodiceCasuale = () => {
           
            let codice = '';
            do{
               codice = '';
               for (let i = 0; i < lunghezzaCodice; i++) {
                     const indiceCasuale = Math.floor(Math.random() * caratteriPermessi.length);
                     codice += caratteriPermessi.charAt(indiceCasuale);
               }

            }while(codice == standard);
            return codice;
         };
         const generaElementInputMossa = (forma,id) => {
            return `
            <div class="${forma} animation-fade" id="grid-item-${id}"> </div>   
            <div class="inner-${forma}" id="grid-inner-item-${id}"></div> 
         `;
         
         }
         
         const codiceGiocatore = generaCodiceCasuale();



         //variabili
         var codicePartita;
         var intervalAttesaSfidante;
         var intervalListaCodiciPartita;
         var intervalAttesaTurno;
         var intervalPresenzaSfidante;
         var turno = 1;
         var tastiPremuti = [];
 

         var actionBtnOpzioni = 0;//-0. crea nuova partita -1.Annulla attesa sfidante -2.Arrenditi
         // Funzione da eseguire quando la variabile cambia valore
         var actionNotify = 0;


         // Funzioni  setter
         function setBtnOpzioni(action) {
            if (actionBtnOpzioni !== action) {
               actionBtnOpzioni = action;
               elementBtnOpzioni.textContent = eventsBtnOpzioni[action];
            }
         }
         function wrapCharactersInSpansWithDelay(text) {
         let result = '';
         let delay = 0.1; // Iniziamo con un ritardo di 0.1s

         for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (char === ' ') {
               result += `<span style="animation-delay: ${delay}s;">&nbsp;</span>`;
            } else {
               result += `<span style="animation-delay: ${delay}s;">${char}</span>`;
            }
            delay += 0.1; // Aggiungi 0.1s di ritardo per ogni carattere
         }

         return result;
         }
         function setNotify(action) {
            if (actionNotify !== action) {
               actionNotify = action;
               elementTextNotify.classList.remove('text-notify-turn', 'text-bounce', 'text-notify-end');
               var classes = notifies[action].class.split(' ');
               for(let i = 0; i < classes.length;i++){
                  elementTextNotify.classList.add(classes[i])
               };
               elementTextNotify.innerHTML = wrapCharactersInSpansWithDelay( notifies[action].text);
              
            }
         }

  

         
         //funzioni

         //funzioni input codice
         function preventInput(event) {
            event.preventDefault();
         }
         function handleInputCodiceKeyUp(event) {
      
            codicePartita = event.target.value;
            event.target.value = codicePartita.toUpperCase();
            animazioneVerificaCodicePartita()
            // Verifica se la lunghezza dell'input è 6 cifre
          
         }

         function animazioneVerificaCodicePartita(){
            if (codicePartita.length >= 6) {
               elementInputCodice.addEventListener("keydown", preventInput);
               elementInputCodice.classList.add("disabilita");
               elementInputCodice.blur(); // Rimuove il focus dall'elemento

               elementBtnOpzioni.classList.add("opacity");
               elementBtnOpzioni.disabled = true;

               
               const url = `server.php?event=4&idGiocatore=${encodeURIComponent(codicePartita)}`;
               myFetch(url, richiestaVerificaCodicePartita);
            }
         }
         //funzioni tasto opzioni

         function eventCreaNuovaPartita(){
            elementInputCodice.classList.remove("animation-fade");

            elementMenuCodici.classList.add("nascondi");
            setBtnOpzioni(1)
            elementInputCodice.classList.add("input-attesa");
          
            elementInputCodice.classList.add("disabilita");
            elementInputCodice.addEventListener("keydown", preventInput);
            elementInputCodice.value = codiceGiocatore;  
            const url = `server.php?event=0&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url, richiestaCreaNuovaPartita);
            intervalAttesaSfidante = setInterval(() => {
               const url = `server.php?event=2&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
               myFetch(url, richiestaAttesaSfidante);
            }, 500); 
            //lanchia richiesta attesa gicoatore
         }
         function eventAnnullaAttesaSfidante(){
            elementBtnMenu.classList.add("animation-fade")

            elementMenuCodici.classList.remove("nascondi");
            clearInterval(intervalAttesaSfidante);
            elementInputCodice.classList.remove("input-attesa");
            setBtnOpzioni(0)
            elementInputCodice.classList.remove("disabilita");

            elementInputCodice.removeEventListener("keydown", preventInput);
            elementInputCodice.value = "";
            const url = `server.php?event=1&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url, richiestaAnnullaAttesaSfidante);
           

         }
         function eventArrenditi(){
            //invio richiesta resa
            const url = `server.php?event=1&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url, richiestaAnnullaAttesaSfidante);
            clearInterval(intervalAttesaTurno);
            clearInterval(intervalPresenzaSfidante);
            setNotify(4);
            setBodyColor(2);
            body.classList.add("disabilita")
            elementInputGioco.classList.add("disabilita")
            elementBtnOpzioni.classList.add("opacity");
            elementBtnOpzioni.disabled = true;
            elementInputGioco.style.backgroundColor = 'rgba(248, 249, 250, 0.7)';
            ripristinaSchermataIniziale()
         }

         function eventBtnOpzioni(){
            switch(actionBtnOpzioni){
               case 0:
                  eventCreaNuovaPartita();
                  break;
               case 1:
                  eventAnnullaAttesaSfidante();
             
                  break;
               case 2:
                  eventArrenditi();
                  break;
            }
         }


         //ftch - gestione richieste

         function myFetch(url, callback) {
            fetch(url)
               .then(response => response.json())
               .then(data => {
                     callback(data);
               })
               .catch(error => {
                     console.error("Errore:", error);
               });
         }


         //gestione risultati richieste
         function richiestaCreaNuovaPartita(data) {
        }
        function richiestaAttesaSfidante(data) {
         if(data == 0){
            clearInterval(intervalAttesaSfidante);//interrompe attesa sfidante
            codicePartita = codiceGiocatore;
            elementInputCodice.classList.remove("input-attesa");
            animazioneVerificaCodicePartita();






         }
         //scrivere qui per l'attesa sfidante 0 arrivato 1 non arrivato
        }
        function richiestaAnnullaAttesaSfidante(data) {
        }
        function aggiungiVirgoleOgni6Caratteri(inputString) {
         const chunkSize = 6;
         let result = '';

         for (let i = 0; i < inputString.length; i++) {
            result += inputString[i];

            if ((i + 1) % chunkSize === 0 && i !== inputString.length - 1) {
               result += ',';
            }
         }

         return result;
      }
      function richiestaListaCodiciPartita(data){
   
         if(aggiungiVirgoleOgni6Caratteri(elementListaCodici.textContent) != data){
         
         elementListaCodici.innerHTML = ''; 
         if(data != 0){
          for (const codice of data) {
        const elementRigaCodice = document.createElement('p');
        elementRigaCodice.onclick = function() {
         codicePartita = codice;
         elementInputCodice.value = codicePartita;  
         

         body.classList.add("disabilita");
         imgMenuCodici.click();
         setTimeout(() => {
            body.classList.remove("disabilita");
            elementMenuCodici.classList.add("nascondi")
            animazioneVerificaCodicePartita();
         },1000);


      };
        elementRigaCodice.textContent = codice;
        elementRigaCodice.classList.add('text-with-border-hover','rigaCodice');
        elementListaCodici.appendChild(elementRigaCodice);
         }
         }else{
            elementListaCodici.innerHTML = 'Non ci sono partite'; 

         }
      }
   }
      function richiestaPresenzaSfidante(data){
         if(data == 1){
            clearInterval(intervalAttesaTurno);
            clearInterval(intervalPresenzaSfidante);
            setNotify(3);
            setBodyColor(1);
            body.classList.add("disabilita")
            elementInputGioco.classList.add("disabilita")
            elementBtnOpzioni.classList.add("opacity");
            elementBtnOpzioni.disabled = true;
            elementInputGioco.style.backgroundColor = 'rgba(248, 249, 250, 0.7)';
            ripristinaSchermataIniziale()
         }
      }
      function richiestaVerificaCodicePartita(data) {
         if (codicePartita != codiceGiocatore){
            const url = `server.php?event=5&idGiocatoreBlu=${encodeURIComponent(codicePartita)}&idGiocatoreRosso=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url, richiestaEseguiAccessoPartita);
         }
         if(data == 0){
            result = "input-giusto"
            intervalPresenzaSfidante = setInterval(() => {
               const url = `server.php?event=10&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
               myFetch(url, richiestaPresenzaSfidante);
             
            }, 500); 
         }
         else result = "input-errore"
               elementInputCodice.classList.add(result);
               elementBtnMenu.classList.add("animation-fade")
               elementMenuCodici.classList.add("nascondi");
               setTimeout(() => {
   
                  elementInputCodice.classList.remove("disabilita");
                  elementInputCodice.removeEventListener("keydown", preventInput);
                  elementInputCodice.value = "";
                  elementBtnOpzioni.disabled = false;
                  elementBtnOpzioni.classList.remove("opacity");
                  elementInputCodice.classList.remove(result);
                  if(data == 0){
                     setBtnOpzioni(2)
                                
                     const url = `server.php?event=7&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
                     myFetch(url, inizializzaTurno);
                     elementInputCodice.classList.add("nascondi");
                     setTimeout(() => {
                        
                        elementInputGioco.classList.add("animation-fade");
                        elementInputGioco.classList.remove("nascondi");
                        elementInputGioco.classList.add("display-flex");//FONDAMENTALE RIMUVOERLO DOPO

                    
                     }, 1000);
                 
                     
            

                     
                  }else{
                     elementMenuCodici.classList.remove("nascondi");

                  }
         }, 2000);
        }
        function inizializzaTurno(data){
         if(data == 0)setNotify(1)
         else {
            elementInputGioco.classList.add("disabilita");
            setNotify(2)
               intervalAttesaTurno = setInterval(() => {
               const url2 = `server.php?event=7&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
               myFetch(url2, richiestaAttesaTurno);
            }, 500);
         }
        }
        function richiestaEseguiAccessoPartita(){
        }
        function richiestaCambioTurno(data){
        }
        function richiestaAttesaTurno(data){
            if(data == 0){
               setTimeout(() => {
                  elementInputGioco.classList.remove("disabilita");
               }, 1000);
          
               clearInterval(intervalAttesaTurno);
               const url = `server.php?event=9&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
               myFetch(url, richiestaOttieniCampoGioco);
               //fine attesa
            }
        }
        function richiestaOttieniCampoGioco(data){


                  for (let j = 0; j < data.length; j++) {
                     if(data.charAt(j) === '2' && elementGridItem[j].querySelector('.triangle') === null) {
                        elementGridItem[j].classList.add("disabilita");
                        elementGridItem[j].innerHTML = generaElementInputMossa("triangle",j);
                        checkClickCombinazione("triangle");
                        break;
                     }
                  }
               
         
        }
      function handleInputGioco(inxElement){

        if(turno == 1){

         //invio richiesta cambio turno
         elementInputGioco.classList.add("disabilita");
         
         const url1 = `server.php?event=8&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
         myFetch(url1, richiestaCambioTurno);

         intervalAttesaTurno = setInterval(() => {
            const url2 = `server.php?event=7&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url2, richiestaAttesaTurno);
         }, 1000);
     
         
        
        }
         forma = "circle";
         elementGridItem[inxElement].classList.add("disabilita");
         elementGridItem[inxElement].innerHTML = generaElementInputMossa(forma,inxElement);

         const url = `server.php?event=6&idGiocatore=${encodeURIComponent(codiceGiocatore)}&inxMossa=${encodeURIComponent(inxElement)}`;
         myFetch(url, richiestaAggiornaCampoGioco);
           
         //invio richiesta mossa

         //controllo vincita
         checkClickCombinazione(forma);
         //se vinto perso o pareggio =>  //invio richiesta cambio turno
         //senno //invio richiesta attesa turno

    
         
         
   
      }
      function richiestaAggiornaCampoGioco(data){
      }
      function checkClick(inxElement,forma){
         const elementoGridInnerItem = document.getElementById(`grid-item-${inxElement}`);
         if (elementoGridInnerItem !== null && elementoGridInnerItem.classList.contains(forma)) {
            return 1;//cella cliccata
         }
         return 0;//cella non cliccata
      }
      
      function contaNumeroDiMosseEseguite() {
         let contatore = 0; // Inizializza un contatore a zero

         for (let i = 0; i <= 8; i++) {
            const elemento = document.getElementById(`grid-item-${i}`);
            
            if (elemento) {
               // L'elemento esiste, quindi possiamo lavorare su di esso
               if (elemento.classList.contains('circle') || elemento.classList.contains('triangle')) {
                  contatore++; // Incrementa il contatore se l'elemento ha una delle classi cercate
               }
            }
         }

         return contatore; // Restituisci il numero di elementi con classi 'circle' o 'triangle'
      }


      function checkClickCombinazione(forma){
         
         tastiPremuti = [];
         let checkPartita = 0; //0.passa turno 1.vittoria/sconfitta 
         let i;
         for( i = 0; i < combinazioni.length; i ++){
             if(
               checkClick(parseInt(combinazioni[i].charAt(0)),forma) == 1 
               && 
               checkClick(parseInt(combinazioni[i].charAt(1)),forma) == 1 
               && 
               checkClick(parseInt(combinazioni[i].charAt(2)),forma) == 1 
            ){
               checkPartita = 1;      
               break;
            }
         }
         if( checkPartita == 0 && contaNumeroDiMosseEseguite() == 9){
               checkPartita = 2;
         }
         if(checkPartita == 0){//passa turno
            if(forma == "triangle"){
               setTimeout(() => {
                  setNotify(1);
               }, 1000);
            
            }
            else setNotify(2)
         }else if(checkPartita == 1){//vittoria/sconfitta
            tastiPremuti.push(combinazioni[i]);
               if(forma == "triangle"){
                  setNotify(4);
                  setBodyColor(2);
               }
               else {
                  setNotify(3);
                  setBodyColor(1);
               }
               body.classList.add("disabilita")
               elementInputGioco.classList.add("disabilita")
               elementBtnOpzioni.classList.add("opacity");
               elementBtnOpzioni.disabled = true;
               elementInputGioco.style.backgroundColor = 'rgba(248, 249, 250, 0.7)';
            
               setTimeout(() => {
                  document.getElementById(`grid-inner-item-${parseInt(combinazioni[i].charAt(0))}`).classList.add(`shadow-${forma}`);
                  document.getElementById(`grid-inner-item-${parseInt(combinazioni[i].charAt(1))}`).classList.add(`shadow-${forma}`);
                  document.getElementById(`grid-inner-item-${parseInt(combinazioni[i].charAt(2))}`).classList.add(`shadow-${forma}`);
           
                  document.getElementById(`grid-item-${parseInt(combinazioni[i].charAt(0))}`).classList.add("forma-active");
                  document.getElementById(`grid-item-${parseInt(combinazioni[i].charAt(1))}`).classList.add("forma-active");
                  document.getElementById(`grid-item-${parseInt(combinazioni[i].charAt(2))}`).classList.add("forma-active");

               },1000);

               clearInterval(intervalPresenzaSfidante);
               ripristinaSchermataIniziale();
               

         }else{
            setNotify(5);
            setBodyColor(0);
            body.classList.add("disabilita")
            elementInputGioco.classList.add("disabilita")
            elementBtnOpzioni.classList.add("opacity");
            elementBtnOpzioni.disabled = true;
            elementInputGioco.style.backgroundColor = 'rgba(248, 249, 250, 0.7)';

            clearInterval(intervalPresenzaSfidante);
            ripristinaSchermataIniziale();
            
         }

         
      
      }

      function ripristinaSchermataIniziale(){
         setTimeout(() => {//ripristina schermata iniziale
                  setNotify(0);
                  setBtnOpzioni(0);
                  setBodyColor(sfondo);

                  body.classList.remove("disabilita")
                  elementInputGioco.classList.remove("disabilita")
                  elementInputGioco.classList.add("nascondi");
                  elementInputGioco.classList.remove("display-flex");
                  elementInputGioco.style.backgroundColor = 'rgba(248, 249, 250, 0.3)';

                  elementInputCodice.classList.add("animation-fade");
                  elementInputCodice.classList.remove("nascondi");
                  
                  elementBtnOpzioni.classList.remove("opacity");
                  elementBtnOpzioni.disabled = false;
                  elementBtnMenu.classList.add("animation-fade")
                  elementMenuCodici.classList.remove("nascondi");
                  
                  const url2 = `server.php?event=1&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
                  myFetch(url2, richiestaAnnullaAttesaSfidante);

                  
                  for(let i = 0; i < 9; i ++ ){
                     elementGridItem[i].innerHTML = '';
                     elementGridItem[i].classList.remove("disabilita");
                  }

               },5000);
      }
      //altre funzioni
      function menuListaCodiciPartita(){
         const url = `server.php?event=3`;
         myFetch(url, richiestaListaCodiciPartita);
         intervalListaCodiciPartita = setInterval(() => {
            const url = `server.php?event=3`;
            myFetch(url, richiestaListaCodiciPartita);
            
         }, 500); 
      }
      function toggleMenu() {
      elementHamburger.classList.toggle('open');
      if (elementHamburger.classList.contains('open')) {
         elementHamburger.classList.add('btnMenuAnimation');
         menuListaCodiciPartita();
      
      } else {
         elementHamburger.classList.remove('btnMenuAnimation');
         clearInterval(intervalListaCodiciPartita)
      }
    }


        window.addEventListener('beforeunload', function() {
         const url = `server.php?event=1&idGiocatore=${encodeURIComponent(codiceGiocatore)}`;
            myFetch(url, richiestaAnnullaAttesaSfidante);
    
      });
     
