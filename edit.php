<?php
// including the database connection file
error_reporting(0);
include_once("config.php");
 
if(isset($_POST['update']))
{    
    $id = $_POST['id'];
   
    $imie= $_POST['imie'];
    $nazwisko= $_POST['nazwisko'];
    $punkty= $_POST['punkty'];    
    
    // checking empty fields
    if(empty($imie) || empty($nazwisko) || empty($punkty)) {            
        if(empty($imie)) {
            echo "<font color='red'>Name field is empty.</font><br/>";
        }
        
        if(empty($nazwisko)) {
            echo "<font color='red'>sn field is empty.</font><br/>";
        }
        
        if(empty($punkty)) {
            echo "<font color='red'> field is empty.</font><br/>";
        }        
    } else {    
        //updating the table
        $result = mysqli_query($mysqli, "UPDATE players SET imie='$imie', nazwisko='$nazwisko', punkty='$punkty' WHERE id=$id");
        header("Location: zk.php");
    }
}
//getting id from url
$id = $_GET['id'];
 
$result = mysqli_query($mysqli, "SELECT * FROM players WHERE id=$id");
while($res = mysqli_fetch_array($result))
{
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $punkty = $_POST['punkty'];
}
?>

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
			
    <br/><br/>
    
    <form name="form1" method="post" action="edit.php">
        <table border="0">
            <tr> 
                <td>Imie</td>
                <td><input type="text" name="imie" value="<?php echo $imie;?>"></td>
            </tr>
            <tr> 
                <td>Nazwisko</td>
                <td><input type="text" name="nazwisko" value="<?php echo $nazwisko;?>"></td>
            </tr>
            <tr> 
                <td>Punkty</td>
                <td><input type="value" name="punkty" value="<?php echo $punkty;?>"></td>
            </tr>
            <tr>
                <td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
                <td><input type="submit" name="update" value="Update"></td>
            </tr>
        </table>
    </form>
</body>
</html>