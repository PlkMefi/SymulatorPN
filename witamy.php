<?php

	session_start();
	
	if (!isset($_SESSION['udanarejestracja']))
	{
		header('Location: index.php');
		exit();
	}
	else
	{
		unset($_SESSION['udanarejestracja']);
	}
	
	//Usuwanie zmiennych pamiętających wartości wpisane do formularza
	if (isset($_SESSION['fr_nick'])) unset($_SESSION['fr_nick']);
	if (isset($_SESSION['fr_email'])) unset($_SESSION['fr_email']);
	if (isset($_SESSION['fr_haslo1'])) unset($_SESSION['fr_haslo1']);
	if (isset($_SESSION['fr_haslo2'])) unset($_SESSION['fr_haslo2']);
	if (isset($_SESSION['fr_regulamin'])) unset($_SESSION['fr_regulamin']);
	
	//Usuwanie błędów rejestracji
	if (isset($_SESSION['e_nick'])) unset($_SESSION['e_nick']);
	if (isset($_SESSION['e_email'])) unset($_SESSION['e_email']);
	if (isset($_SESSION['e_haslo'])) unset($_SESSION['e_haslo']);
	if (isset($_SESSION['e_regulamin'])) unset($_SESSION['e_regulamin']);
	if (isset($_SESSION['e_bot'])) unset($_SESSION['e_bot']);
	
?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<link href="mrstyle.css" rel="stylesheet" type="text/css">
	<link id="content_style" href="style_sky.css" rel="stylesheet" type="text/css">
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>witamy</title>
</head>

<body>
	<nav id="menu_glowne">
				<ul>
				  <li><a href="index.php">Strona Główna</a></li>
				  <li><a href="rejestracja.php">Rejestracja</a></li>
				  <li><a href="#">Do pobrania</a></li>
				  <li><a href="#">Rozkład jazdy</a></li>
				  <li><a href="gra.php">Symulator DR</a></li>
				  <li><a href="#">Kontakt</a></li>
				</ul>
			</nav>
	
	<br><br><br><br>	
	<h2 class="srodek">Dziękujemy za rejestrację w serwisie! Możesz już zalogować się na swoje konto!</h2><br /><br />
	<a href="index.php" class="center">Zaloguj się na swoje konto!</a>
	
	
	
	
	
	<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
	<br /><br />

</body>
</html>