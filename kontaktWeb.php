
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
	<meta name="description" content="Strona poświęcona polskiej kolei" />
	<meta name="keywords" content="kolej,PKP,pociąg,ciuchcia,lokomotywa,wagony,kolejarze" />
	<title>Kontakt</title>
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
			
			<br><br>
<center>	
<form name="contactform" method="post" action="send_form_email.php">
<table width="450px">
<tr>
 <td valign="top">
  <label for="first_name">Imie</label>
 </td>
 <td valign="top">
  <input  type="text" name="first_name" maxlength="50" size="30">
 </td>
</tr>
<tr>
 <td valign="top"">
  <label for="last_name">Nazwisko</label>
 </td>
 <td valign="top">
  <input  type="text" name="last_name" maxlength="50" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="email">Email</label>
 </td>
 <td valign="top">
  <input  type="text" name="email" maxlength="80" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="telephone">Nr Telefonu (opcjonalnie)</label>
 </td>
 <td valign="top">
  <input  type="text" name="telephone" maxlength="30" size="30">
 </td>
</tr>
<tr>
 <td valign="top">
  <label for="comments">Tresc</label>
 </td>
 <td valign="top">
  <textarea  name="comments" maxlength="1000" cols="25" rows="6"></textarea>
 </td>
</tr>
<tr>
 <td colspan="2" style="text-align:center">
  <input type="button" value="Prześlij" onclick ="msg()">  
  
<script>  
  function msg()
{
	alert("Wiadomość została wysłana pomyślnie");
}
</script>

 </td>
</tr>
</table>
</form>
</center>
</html>