<?php
	$poziom0 = array();
	$odpowiedz = "-1";
	$zw1St = 1;
	$zw2St = 1;
	define("WIIELKOSC_POZIOMU",25);
	define("ZW1POZ",6);
	define("DLTOR1",8);
	define("SEMA",3);
	$sem1 = 0;
	$sem2 = 0;
	$sem3 = 0;
	$sem4 = 0;
	$poziom = $_GET["id"];
	
	switch ($poziom){
		case 0:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case 1:
						$poziom0[$i] = 1;
						break;
					case 2:
						$poziom0[$i] = 2;
						break;
					case 3:
						$poziom0[$i] = 3;
						break;
					case 4:
						$poziom0[$i] = 4;
						break;
					case 5:
						$poziom0[$i] = 5;
						break;
					case 6:
						$poziom0[$i] = 6;
						break;
					case 7:
						$poziom0[$i] = 7;
						break;
					case 8:
						$poziom0[$i] = 8;
						break;
					case 24:
						$poziom0[$i] = 27;
						break;
					default:
						$poziom0[$i] = 9;
				}
			}
			break;
		case 1:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case ZW1POZ + 2:
						$poziom0[$i] = 10;
						break;
					case ZW1POZ + 3:
						$poziom0[$i] = 11;
						break;
					default:
						$poziom0[$i] = 9;
				}
			}
			break;
		case 2:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case ZW1POZ + 1:
						$poziom0[$i] = 12;
						break;
					case ZW1POZ + 2 + DLTOR1:
						$poziom0[$i] = 13;
						break;
					default:
						if ($i < ZW1POZ + 2 || $i > ZW1POZ + 1 + DLTOR1) {
							$poziom0[$i] = 9;
						} else {
							$poziom0[$i] = 14;
						}
						
				}
			}
			break;
		case 3:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case ZW1POZ:
						$poziom0[$i] = 12;
						break;
					case ZW1POZ + 1:
						$poziom0[$i] = 15;
						break;
					case ZW1POZ + 3 + DLTOR1:
						$poziom0[$i] = 13;
						break;
					case ZW1POZ + 2 + DLTOR1:
						$poziom0[$i] = 16;
						break;
					case ZW1POZ + 2:
						$poziom0[$i] = 10;
						break;
					case ZW1POZ + 3:
						$poziom0[$i] = 17;
						break;
					case ZW1POZ + DLTOR1:
						$poziom0[$i] = 18;
						break;
					case ZW1POZ + 1 + DLTOR1:
						$poziom0[$i] = 10;
						break;
					case 22:
						$poziom0[$i] = 26;
						break;
					case 21:
						$poziom0[$i] = 10;
						break;
					default:
						$poziom0[$i] = 9;
						
				}
			}
			break;
		case 4:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case ZW1POZ:
						$poziom0[$i] = 19;
						break;
					case ZW1POZ + DLTOR1 + 3:
						$poziom0[$i] = 20;
						break;
					default:
						$poziom0[$i] = 14;
				}
			}
			break;
		case 5:
			for ($i = 0; $i < WIIELKOSC_POZIOMU; $i++) {
				switch ($i) {
					case SEMA:
						$poziom0[$i] = 24;
						break;
					case SEMA-1:
						$poziom0[$i] = 25;
						break;
					case ZW1POZ:
						$poziom0[$i] = 21;
						break;
					case ZW1POZ + 3 + DLTOR1:
						$poziom0[$i] = 22;
						break;
					case ZW1POZ + 1 + DLTOR1:
						$poziom0[$i] = 10;
						break;
					case ZW1POZ + DLTOR1:
						$poziom0[$i] = 23;
						break;
					default:
						$poziom0[$i] = 9;
						
				}
			}
			break;
	}
	
	
	for ($i = 0; $i<count($poziom0); $i++){
		$odpowiedz = $odpowiedz.";".$poziom0[$i];
	}
	
	
	echo $odpowiedz;
?>