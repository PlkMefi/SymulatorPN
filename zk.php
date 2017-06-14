<?php
	error_reporting(0);
	include_once("config.php");
	//include_once("login.php");
	session_start();
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
			<?php
				session_start();
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
			
	

 <table width='80%' border=0>
        <tr bgcolor='#CCCCCC'>
            <td>Imie</td>
            <td>Nazwisko</td>
            <td>Punkty</td>
            <td>Edytuj</td>
        </tr>

		
       <?php
		if (isset($_SESSION['username'])){
			
			echo (string)$_SESSION['username'];
		}
		
		$text = (string)$_SESSION['username'];
		if ((string)$_SESSION['username'] == "SUPERADMIN"){		
			echo"<br><a href=\"add.html\">Dodaj nowego uzytkownika</a><br/><br/>";
		   $result = mysqli_query($mysqli, "SELECT * FROM players ORDER BY punkty DESC");
			while($res = mysqli_fetch_array($result)){   
				echo "<tr>";
				echo "<td>".$res['imie']."</td>";
				echo "<td>".$res['nazwisko']."</td>";
				echo "<td>".$res['punkty']."</td>";    
				echo "<td><a href=\"edit.php?id=$res[id]\">Edytuj</a> </td>";    
				}			
			}else{
				$result2 = mysqli_query($mysqli, "SELECT imie, nazwisko, email FROM uzytkownicy WHERE login = '$text'");		
				while($res2 = mysqli_fetch_array($result2)){   
				echo "<tr>";
				echo "<td>".$res2['imie']."</td>";
				echo "<td>".$res2['nazwisko']."</td>";
				echo "<td>".$res2['email']."</td>"; 
				}	
			}
		?>
</table>			
</body>
</html>	