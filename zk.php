<?php
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
	   //1. POBRANIE Z SESJI USER LOGINU
	   //kurwa cos zle
	// $user_id =  $_SESSION['user'];
	// $sql = "SELECT idTypuKonta FROM uzytkownicy WHERE login = $user_id";
    // $resultat = $mysqli->query($sql);

//if ($resultat == 0) {

    //$temp = $dataArray['username']
	//$idTK = mysqli_query($mysqli, "SELECT idTypuKonta FROM uzytkownicy WHERE login = '$temp'");
	
	//if ($_SERVER["REQUEST_METHOD"] === "POST") {
  	//$username = $_POST['username'];
	//}
	
	// 2. INCLUDE LOGIN.PHP I POBRANIE ZE ZMIENNEJ Z LOGIN.PHP LOGINU
	//$text = "Zalogowano jako " . (string)$dataArray['username'];
	//$idTK = null;
	//$idTK = mysqli_query($mysqli, "SELECT idTypuKonta FROM uzytkownicy WHERE login = '$text'");
	
	// cos zrobic z indexem ? WTF
	//$idTK = "SELECT idTypuKonta FROM uzytkownicy WHERE login ='".$_POST['username']."';";
	//$temp = mysqli_fetch_assoc($idTK);
	
	
	// 3. POLACZENIE Z BAZA NA NOWO
	/*
	try 
		{
			$polaczenie = new mysqli("localhost","root","","kspn");
			if ($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno());
			}
	$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE email='$email'");
	*/
	
	//$idTK = mysqli_fetch_array($query);
	//echo $idTK;
	//if ((string)$_POST['username'] == "SUPERADMIN") {
		/* 
		// 4.POLACZENIE Z BAZĄ
		try 
		{
			$polaczenie = new mysqli("localhost","root","","kspn");
			if ($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno());
			}
			else
			{
				$rezultat = $polaczenie->query("SELECT * FROM uzytkownicy;");
			}
			*/


		//5.JEDNO ZAPYTANIE			
		//$rezultat = $polaczenie-> query("SELECT id FROM uzytkownicy WHERE email='$email'");
		
		/*
		
		6.FUNKCJYJNIE POBIERZ ID
		function pobierzCel($id)
  {
    $celQuery = mysql_query("SELECT imie, nazwisko, email FROM players WHERE id = '$id'");
    $cel = mysql_fetch_array($celQuery);
    return $cel;
  }
  */
  
	/*
	
	7.POBRANIE UZYTKOWNIKA OD ID = 2 (ZWYKLY USER)
		$res1 = mysqli_query ($mysqli, "SELECT * FROM uzytkownicy WHERE idUzytkownika = '2'");
			while ($res1 = mysqli_fetch_array($res1))
			{
			echo "<tr>";
            echo "<td>".$res['imie']."</td>";
            echo "<td>".$res['nazwisko']."</td>";
            echo "<td>".$res['email']."</td>";    
			}
		
		*/
		
	   $result = mysqli_query($mysqli, "SELECT * FROM players ORDER BY punkty DESC");
        while($res = mysqli_fetch_array($result))
			{   
            echo "<tr>";
            echo "<td>".$res['imie']."</td>";
            echo "<td>".$res['nazwisko']."</td>";
            echo "<td>".$res['punkty']."</td>";    
            echo "<td><a href=\"edit.php?id=$res[id]\">Edit</a> </td>";    
			}
	//}
//} 
//else {   
	/*
        while($res = mysqli_fetch_array($result)) {   
            echo "<tr>";
            echo "<td>".$res['imie']."</td>";
            echo "<td>".$res['nazwisko']."</td>";
            echo "<td>".$res['punkty']."</td>";    
            echo "<td><a href=\"edit.php?id=$res[id]\">Edit</a> </td>";    
		}
//}
*/  
?>
 
    </table>			
</body>
</html>	