﻿
<!DOCTYPE html>
<html>

<script src="gra.js"></script>

<head>
	<meta charset="utf-8" />
	<meta name="description" content="Symulator dyżurnego ruchu" />
	<meta name="keywords" content="symulator,PKP,pociąg,jazda,przyjazd,odjazd,gra,kierowanie ruchem" />
	<title>Symulator DR</title>
	<link href="mrstyle.css" rel="stylesheet" type="text/css">
	<link id="content_style" href="style_sky.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="styleswap.js"></script>
	<script type="text/javascript" src="nav_setup.js"></script>
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'pl', includedLanguages: 'de,en,pl', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        
	</head>

<body onload="loadNavbar();">
	<?php
		
		session_start();
		if(isset($_SESSION['username'])){
			echo '<script>generatorPlanszy();</script>';
		}
				if(!isset($_SESSION['username'])){
					echo '<nav id="menu_glowne">
							<ul id="mg_1">
							  <li><a href="index.php">Strona Główna</a></li>
							  <li><a href="rejestracja.php">Rejestracja</a></li>
							  <li><a href="#">Rozkład jazdy</a></li>
							  <li><a href="kontaktWeb.php">Kontakt</a></li>
							</ul>
						</nav>';
				}else{
					if((string)$_SESSION['username'] == "SUPERADMIN"){
						echo '<nav id="menu_glowne">
							<ul>
							  <li><a href="index.php">Strona Główna</a></li>
							  <li><a href="zk.php">Zarzadzanie kontami</a></li>
							  <li><a href="#">Rozkład jazdy</a></li>
							  <li><a href="gra.php">Symulator DR</a></li>
							  <li><a href="kontaktWeb.php">Kontakt</a></li>
							</ul>
						</nav>';
					}else{
						echo '<nav id="menu_glowne">
							<ul>
							  <li><a href="index.php">Strona Główna</a></li>
							  <li><a href="#">Rozkład jazdy</a></li>
							  <li><a href="gra.php">Symulator DR</a></li>
							  <li><a href="kontaktWeb.php">Kontakt</a></li>
							</ul>
						</nav>';
					}
				}
			?>
			<nav id="loginmenu"></nav>
	<br>
	<p id="komunikat"/>
	<div id="poleGry" class="srodek">
		<div id="gra0" class="srodek"> </div>
		<div id="gra1" class="srodek"> </div>
		<div id="gra2" class="srodek"> </div>
		<div id="gra3" class="srodek"> </div>
		<div id="gra4" class="srodek"> </div>
		<div id="gra5" class="srodek"> </div>
		
		<article>
		<br><br><h1>Skrócona instrukcja obsługi symulatora</h1>
		<p id=powitanie>1. Wciśnięcie przycisków oznaczonych symbolem "Sem" spowoduje wyświetlenie zielonego bądź czerwonego sygnału.<br>
		2. Wciśnięcie przycisków oznaczonych symbolem "Zw" spowoduje przełożenie pozycji zwrotnicy.<br>
		3. Wciśnięcie przycisków oznaczonych symbolem "Sem M" spowoduje wyświetlenie sygnału manewrowego.<br>
		4. Wciśnięcie przycisków oznaczonych symbolem "Sem SZ" spowoduje wyświetlenie sygnału zastępczego.</p><br><br><br><br><br><br>
		
	</article>
	</div><br><br>
	<div id="podsumowanie0"></div><br>
	<div id="podsumowanie1"></div><br>
	<div id="podsumowanie2"></div><br>
	<div id="podsumowanie3"></div><br>
	
	
	
	
</body>
</html>
