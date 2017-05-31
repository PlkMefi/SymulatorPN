<?php
	include_once("config.php");
	?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="description" content="Strona poświęcona polskiej kolei" />
	<meta name="keywords" content="kolej,PKP,pociąg,ciuchcia,lokomotywa,wagony,kolejarze" />
	<title>Koleje polskie</title>
	<link href="mrstyle.css" rel="stylesheet" type="text/css">
	<link id="content_style" href="style_sky.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="styleswap.js"></script>
	<script type="text/javascript" src="nav_setup.js"></script>
<div id="google_translate_element"></div><script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'pl', includedLanguages: 'de,en,pl', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        
	</head>
<body onload="loadNavbar();">
			
			<nav id="menu_glowne">
				<ul>
				  <li><a href="index.php">Strona Główna</a></li>
				  <li><a href="rejestracja.php">Rejestracja</a></li>
				  <li><a href="zk.php">Zarzadzanie kontami</a></li>
				  <li><a href="#">Rozkład jazdy</a></li>
				  <li><a href="gra.php">Symulator DR</a></li>
				  <li><a href="kontakt.html">Kontakt</a></li>
				</ul>
			</nav>
			
	
    <a href="add.html">Dodaj nowego uzytkownika</a><br/><br/>
	

 <table width='80%' border=0>
        <tr bgcolor='#CCCCCC'>
            <td>Imie</td>
            <td>Nazwisko</td>
            <td>Punkty</td>
            <td>Update</td>
        </tr>
       <?php 
	   $result = mysqli_query($mysqli, "SELECT * FROM players");
        while($res = mysqli_fetch_array($result)) {   
            echo "<tr>";
            echo "<td>".$res['imie']."</td>";
            echo "<td>".$res['nazwisko']."</td>";
            echo "<td>".$res['punkty']."</td>";    
            echo "<td><a href=\"edit.php?id=$res[id]\">Edit</a> </td>";    
		}
        ?>
    </table>			
</body>
</html>
