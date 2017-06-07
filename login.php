<?php session_start();
 $redir = $_SERVER['HTTP_REFERER'];
  if ($_SERVER["REQUEST_METHOD"] === "GET"){
	if (isset($_SESSION['username'])){
		echo (string)$_SESSION['username'];
	} else {
		echo "";
	}
	if (isset($_GET['action']) && (string)$_GET['action']==="logout" && isset($_SESSION['username'])) {
		echo '<script type="text/javascript">';
		echo '</script>';
		session_destroy();
		die(0);
	}
  }
  //login
  if ($_SERVER["REQUEST_METHOD"] === "POST") {
	  $_SESSION['usr'] = $_POST['username'];
  	$dataArray = array(
  		'username' => $_POST['username'],
  		'password' => $_POST['password']
  	);
    $_SESSION['username'] = $dataArray['username'];
	$connection = mysqli_connect("localhost","root","","kspn");
	
	if (!$connection) {
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}


	
	$database = mysqli_select_db($connection, "kspn");
	
	$query = "SELECT haslo FROM uzytkownicy WHERE login ='".$_POST['username']."';";
	$query2 = "SELECT idTypuKonta FROM uzytkownicy WHERE login ='".$_POST['username']."';";
	$result = mysqli_query($connection,$query);
	$tempArray = mysqli_fetch_array($result);
	$result2 = mysqli_query($connection,$query2);
	$temp = mysqli_fetch_array($result2);
	
	if($tempArray[0]==$dataArray['password']){
		setCookie("session_id", (string)session_id(), time() + 3600);
		$text = "Zalogowano jako " . (string)$dataArray['username'];
		
		
	} else {
		$text = "Wprowadzone dane logowania są niepoprawne!";
		session_destroy();
	}
	
    echo '<script type="text/javascript">';
    echo 'alert("'.$text.'");';
    echo 'window.location.href = "' . $redir . '";';
    echo '</script>';
	
  }
?>