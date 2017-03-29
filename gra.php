
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
</head>

<body onload="loadNavbar();">
	<nav id="menu_glowne">
				<ul>
				  <li><a href="index.php">Strona Główna</a></li>
				  <li><a href="#">Do pobrania</a></li>
				  <li><a href="#">Rozkład jazdy</a></li>
				  <li><a href="gra.php">Symulator DR</a></li>
				  <li><a href="#">Kontakt</a></li>
				</ul>
			</nav>
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
	</div>

	<script>generatorPlanszy();</script>
	
	<article>
		<br><br><h1>Skrócona instrukcja obsługi symulatora</h1>
		<p id=powitanie>1. Wciśnięcie przycisków oznaczonych symbolem "Sem" spowoduje wyświetlenie zielonego bądź czerwonego sygnału.<br>
		2. Wciśnięcie przycisków oznaczonych symbolem "Zw" spowoduje przełożenie pozycji zwrotnicy.<br>
		3. Wciśnięcie przycisków oznaczonych symbolem "Sem M" spowoduje wyświetlenie sygnału manewrowego.<br>
		4. Wciśnięcie przycisków oznaczonych symbolem "Sem SZ" spowoduje wyświetlenie sygnału zastępczego.</p><br><br><br><br><br><br>
		
	</article>
</body>
</html>
