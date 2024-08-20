<!--
  FilaTre Online v1.0.0 (https://github.com/vittorioPiotti/FilaTre-Online/releases/tag/1.0.0)
  Copyright 2024 Vittorio Piotti
  Licensed under GPL-3.0 (https://github.com/vittorioPiotti/FilaTreOnline/blob/main/LICENSE.md)
-->



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fila Tre</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta property="og:title" content="FilaTre Online">
    <meta property="og:description" content="Fila tre online per partite veloci con gli amici in un'interfaccia grafica accattivante.">
    <meta property="og:url" content="https://vittoriopiotti.altervista.org/FilaTre/Online/index.php">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://github.com/vittorioPiotti/FilaTre-Online/blob/main/FilaTreOnline/imgs/socialpreview3.png?raw=true">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="640">
</head>
<body>
    <div class="centered-div text-style ">
      <p class="text text-title">
         Fila Tre
      </p>
      <p class="text text-notify" id="text-notifica">
         Codice Partita
      </p>
      <input  id="input-codice" class="text-with-border text-style input-codice" onkeyup="handleInputCodiceKeyUp(event)">
      <div class="input-gioco nascondi" id="element-input-gioco">

      <div class="container-input-gioco">
        <div id="item-0" class="grid-item input-gioco-tl" onclick="handleInputGioco(0)"></div>
        <div id="item-1" class="grid-item input-gioco-tc" onclick="handleInputGioco(1)"></div>
        <div id="item-2" class="grid-item input-gioco-tr" onclick="handleInputGioco(2)"></div>
        <div id="item-3" class="grid-item input-gioco-ml" onclick="handleInputGioco(3)"></div>
        <div id="item-4" class="grid-item input-gioco-mc" onclick="handleInputGioco(4)"></div>
        <div id="item-5" class="grid-item input-gioco-mr" onclick="handleInputGioco(5)"></div>
        <div id="item-6" class="grid-item input-gioco-bl" onclick="handleInputGioco(6)"></div>
        <div id="item-7" class="grid-item input-gioco-bc" onclick="handleInputGioco(7)"></div>
        <div id="item-8" class="grid-item input-gioco-br" onclick="handleInputGioco(8)"></div>
    </div>


      </div>
      <button id="btn-opzioni" class="text-style btn-opzioni text-opzioni" onclick="eventBtnOpzioni()">Crea nuova partita</button>
   </div>



   <img class="icon" src="github.svg"  onclick="window.open('https://github.com/vittorioPiotti/FilaTreOnline', '_blank'); ">

   <div id="container-menu-codici">
   <div class="menu  btn-lista-codici" id="links" style="bottom: 15px;">
   <label class="menu-btn" id="img-menu-codici" for="active" onclick="toggleMenu()">
      <div class="wrapper-menu-hamburger" id="btn-menu">
         <div class="line-menu half start"></div>
         <div class="line-menu"></div>
         <div class="line-menu half end"></div>
      </div>
   </label>
   </div>
   <input type="checkbox" id="active" class="inputClass">



   <div class="wrapper" id="menu-codici">
   <div class="text-style container-lista-codici" id="lista-codici">Non ci sono partite</div>
   </div>
   </div>
   <script src="script.js"></script>
</body>
</html>




