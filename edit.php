<?php
// including the database connection file
//error_reporting(0);
include_once("config.php");
 
if(isset($_POST['update']))
{    
    $id = $_POST['id'];
   
    $imie= $_POST['imie'];
    $nazwisko= $_POST['nazwisko'];
    $email= $_POST['email'];    
    
    // checking empty fields
    if(empty($imie) || empty($nazwisko) || empty($email)) {            
        if(empty($imie)) {
            echo "<font color='red'>Name field is empty.</font><br/>";
        }
        
        if(empty($nazwisko)) {
            echo "<font color='red'>sn field is empty.</font><br/>";
        }
        
        if(empty($email)) {
            echo "<font color='red'> field is empty.</font><br/>";
        }        
    } else {    
        //updating the table
        $result = mysqli_query($mysqli, "UPDATE uzytkownicy SET imie='$imie', nazwisko='$nazwisko', email='$email' WHERE idUzytkownika=$id");
        header("Location: zk.php");
    }
}
//getting id from url
$id = $_GET['id'];
 
$result = mysqli_query($mysqli, "SELECT imie, nazwisko, email FROM uzytkownicy WHERE idUzytkownika=$id");
while($res = mysqli_fetch_array($result))
{
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $email = $_POST['email'];
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
                <td>Email</td>
                <td><input type="text" name="email" value="<?php echo $email;?>"></td>
            </tr>
            <tr>
                <td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
                <td><input type="submit" name="update" value="Aktualizuj"></td>
            </tr>
        </table>
    </form>
</body>
</html>