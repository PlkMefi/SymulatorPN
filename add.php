<html>
<head>
    <title>Add Data</title>
</head>
 
<body>
<?php
include_once("config.php");
 
if(isset($_POST['Submit'])) {    
    $imie = $_POST['imie'];
    $nazwisko = $_POST['nazwisko'];
    $punkty = $_POST['punkty'];
        
    // checking empty fields
    if(empty($imie) || empty($nazwisko) || empty($punkty)) {                
        if(empty($imie)) {
            echo "<font color='red'>Name field is empty.</font><br/>";
        }
        
        if(empty($nazwisko)) {
            echo "<font color='red'>Surname field is empty.</font><br/>";
        }
        
        if(empty($punkty)) {
            echo "<font color='red'>Pts field is empty.</font><br/>";
        }
        
        //link to the previous page
        echo "<br/><a href='javascript:self.history.back();'>Go Back</a>";
    } else { 
        // if all the fields are filled (not empty)             
        //insert data to database
        $result = mysqli_query($mysqli, "INSERT INTO players(imie,nazwisko,punkty) VALUES('$imie','$nazwisko','$punkty')");
        
        //display success message
        echo "<font color='green'>Data added successfully.";
        echo "<br/><a href='zk.php'>View Result</a>";
    }
}
?>
</body>
</html>