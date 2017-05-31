 /*global window: false, document: false */
/*jslint for: true */

var kafelki0 = {};
var kafelki1 = {};
var kafelki2 = {};
var kafelki3 = {};
var kafelki4 = {};
var kafelki5 = {};
var id = 0;
var blokadySem = [0,0,0,0,0];
var blokadyZw = [0,0];

var zw1St = 1;
var zw2St = 1;
var zw1Poz = 6;

var sem1 = 0;
var sem2 = 0;
var sem3 = 0;
var sem4 = 0;
var sema = 0;

var tor1Zaj = false;
var tor2Zaj = false;

var wielkoscPlanszy = 25;
var dlTor1 = 8;

function zamianaZw1() {
    "use strict";
	if(blokadyZw[0]===0){
		var temp;
		if (zw1St === 1) {
			temp = document.createElement("IMG");
			temp.setAttribute("id",document.getElementById("gra4").childNodes[zw1Poz + 1].getAttribute("id"));
			temp.setAttribute("class","zwrotnica");
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","n");
			temp.src = "gameAssets/kafelMinusGora.png";
			document.getElementById("gra4").replaceChild(temp, kafelki4[zw1Poz]);
			kafelki4[zw1Poz] = temp;
			zw1St = 0;
		} else {
			temp = document.createElement("IMG");
			temp.setAttribute("id",document.getElementById("gra4").childNodes[zw1Poz + 1].getAttribute("id"));
			temp.setAttribute("class","zwrotnica");
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","e");
			temp.src = "gameAssets/kafelPlusGora.png";
			document.getElementById("gra4").replaceChild(temp, kafelki4[zw1Poz]);
			kafelki4[zw1Poz] = temp;
			zw1St = 1;
		}
	}
}

//poziom - id poziomu np. "gra0", "gra1"
//ind - to indeks kafelka w poziomie, razem z poziomem tworzą współrzędne kafelka
//kierunek tos kierunek w którym będziemy sprawdzać przebieg, 1 - w prawo, 0 - w lewo
function sprawdzeniePrzebiegu(poziom, ind, kierunek){
	if(ind>1 && ind < 25){
		var poziomGry = "gra"+poziom;
		//alert(poziomGry);
		//alert(ind);
		//alert(document.getElementById(poziomGry).childNodes[ind].src);
		if(kierunek==1 && document.getElementById(poziomGry).childNodes[ind+1].getAttribute("class")!=="znak"){
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="e" ){
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelOffProsty.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelOnProsty.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelPlusGoraTyl.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelWOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG3.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG3ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGoraTyl.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelBNOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelPlusGora.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelEOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG1.png"){
					sprawdzeniePrzebiegu(poziom, ind+1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG1ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
			//alert(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="n");
			var poziomGryNext = poziom-1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="n" ){
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="s" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG2.png"){
					sprawdzeniePrzebiegu(poziom-1, ind, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG2ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="s" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGora.png"){
					sprawdzeniePrzebiegu(poziom-1, ind, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelNOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
			poziomGryNext = poziom+1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="s" ){
				//alert(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="n");
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="n" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG4.png"){
					sprawdzeniePrzebiegu(poziom+1, ind, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG4ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
			
		}
		if(kierunek==1 && document.getElementById(poziomGry).childNodes[ind+1].getAttribute("class")==="znak"){
			document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelOnProsty.png";
		}
		if(kierunek==0){
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir1")=="w"){
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelOffProsty.png"){
					sprawdzeniePrzebiegu(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelOnProsty.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG2.png"){
					sprawdzeniePrzebiegu(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG2ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				//alert(document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGora.png");
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGora.png"){
					sprawdzeniePrzebiegu(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelNOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelPlusGora.png"){
					sprawdzeniePrzebiegu(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelEOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
			var poziomGryNext = poziom+1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir1")=="s"){
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir2")=="n" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG1.png"){
					sprawdzeniePrzebiegu(poziom+1, ind, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG1ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
		}
	}
}

function pociagRusza(poziom, ind, kierunek){
		//alert();
		if(ind == 25){
			setTimeout(function(){if(sem3==1){
				blokadySem[2]=0;
				blokadyZw[1]=0;
				zamianaSm("sm3","zas");
			}
			if(sem4==1){
				blokadySem[3]=0;
				blokadyZw[1]=0;
				zamianaSm("sm4","zas");
				zamianaZw2();
			}},12000);
		}
		if(ind>1 && ind < 25){
		var poziomGry = "gra"+poziom;
		//alert(poziomGry);
		//alert(ind);
		//alert(document.getElementById(poziomGry).childNodes[ind].src);
		var boolZnak = true;
		//alert(document.getElementById(poziomGry).childNodes[ind+5].getAttribute("class"));
		if(ind+5<document.getElementById(poziomGry).childNodes.length){
			if(document.getElementById(poziomGry).childNodes[ind+5].getAttribute("class")==="znak"){
				boolZnak = false;
			}
		}
		
		if(kierunek==1 && boolZnak){
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="e" ){
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelOnProsty.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZajProsty.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelOffProsty.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelWOn.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPrzeGoraTylPlusZaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPlusGoraTyl.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG3ON.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG3Zaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG3.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelBNOn.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPrzeGoraTylMinusZaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelMinusGoraTyl.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelEOn.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPrzeGoraPlusZaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPlusGora.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById(poziomGry).childNodes[ind+1].getAttribute("dir1")=="w" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG1ON.png"){
					setTimeout(function(){pociagRusza(poziom, ind+1, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG1Zaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG1.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
			}
			//alert(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="n");
			var poziomGryNext = poziom-1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="n" ){
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="s" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG2ON.png"){
					setTimeout(function(){pociagRusza(poziom-1, ind, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG2Zaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG2.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="s" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelNOn.png"){
					setTimeout(function(){pociagRusza(poziom-1, ind, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelPrzeGoraMinusZaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelMinusGora.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
			}
			poziomGryNext = poziom+1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir2")=="s" ){
				//alert(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="n");
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir1")=="n" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG4ON.png"){
					setTimeout(function(){pociagRusza(poziom+1, ind, kierunek);},3000);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG4Zaj.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
					setTimeout(function(){
						document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG4.png";
						document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","wol");
					},12000);
				}
			}
			
		}
		var poziomGryNext = poziom+1;
		if(kierunek==1 && (!boolZnak)){
			document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZajProsty.png";
			document.getElementById(poziomGry).childNodes[ind+1].src="gameAssets/kafelZajProsty.png";
			document.getElementById(poziomGry).childNodes[ind+2].src="gameAssets/kafelZajProsty.png";
			document.getElementById(poziomGry).childNodes[ind+3].src="gameAssets/kafelZajProsty.png";
			document.getElementById(poziomGry).childNodes[ind+4].src="gameAssets/kafelZajProsty.png";
			//alert(document.getElementById("gra"+poziomGryNext).childNodes[ind+4].getAttribute("src")=="gameAssets/kafelSem3.png");
			if(document.getElementById("gra"+poziomGryNext).childNodes[ind+4].getAttribute("src")=="gameAssets/kafelSem3.png"){
				tor1Zaj = true;
				blokadyZw[0]=0;
				blokadySem[4]=0;
				zamianaSm("sma","zas");
				if(sem3==1){
					setTimeout(function(){pociagRusza(4,16,1)},12000);
					setTimeout(function(){
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1 + 1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 2].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 3].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 4].src="gameAssets/kafelOffProsty.png";
						tor1Zaj = false;
					},21000);
				}
				
			}
			if(document.getElementById("gra"+poziomGryNext).childNodes[ind+4].getAttribute("src")=="gameAssets/kafelSem4.png"){
				tor2Zaj = true;
				blokadyZw[0]=0;
				blokadySem[4]=0;
				zamianaSm("sma","zas");
				zamianaZw1();
				if(sem4==1){
					setTimeout(function(){pociagRusza(2,16,1)},12000);
					setTimeout(function(){
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1 + 1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 1].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 2].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 3].src="gameAssets/kafelOffProsty.png";
						document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 4].src="gameAssets/kafelOffProsty.png";
						tor2Zaj = false;
					},21000);
				}
			}
		}
		if(kierunek==0){
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir1")=="w"){
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelOffProsty.png"){
					pociagRusza(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelOnProsty.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG2.png"){
					pociagRusza(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG2ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				//alert(document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGora.png");
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelMinusGora.png"){
					pociagRusza(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelNOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
				if(document.getElementById(poziomGry).childNodes[ind-1].getAttribute("dir2")=="e" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelPlusGora.png"){
					pociagRusza(poziom, ind-1, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelEOn.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
			var poziomGryNext = poziom+1;
			if(document.getElementById(poziomGry).childNodes[ind].getAttribute("dir1")=="s"){
				if(document.getElementById("gra"+poziomGryNext).childNodes[ind].getAttribute("dir2")=="n" && document.getElementById(poziomGry).childNodes[ind].getAttribute("src")==="gameAssets/kafelZwG1.png"){
					pociagRusza(poziom+1, ind, kierunek);
					document.getElementById(poziomGry).childNodes[ind].src="gameAssets/kafelZwG1ON.png";
					document.getElementById(poziomGry).childNodes[ind].setAttribute("zaj","zabl");
				}
			}
		}
	}
}

function zamianaZw2() {
    "use strict";
	if(blokadyZw[1]===0){
		var temp;
		if (zw2St === 1) {
			temp = document.createElement("IMG");
			temp.setAttribute("id",document.getElementById("gra4").childNodes[zw1Poz + dlTor1 + 4].getAttribute("id"));
			temp.setAttribute("class","zwrotnica");
			temp.setAttribute("dir1","n");
			temp.setAttribute("dir2","e");
			temp.src = "gameAssets/kafelMinusGoraTyl.png";
			document.getElementById("gra4").replaceChild(temp, kafelki4[zw1Poz + dlTor1 + 3]);
			kafelki4[zw1Poz + dlTor1 + 3] = temp;
			zw2St = 0;
		} else {
			temp = document.createElement("IMG");
			temp.setAttribute("id",document.getElementById("gra4").childNodes[zw1Poz + dlTor1 + 4].getAttribute("id"));
			temp.setAttribute("class","zwrotnica");
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","e");
			temp.src = "gameAssets/kafelPlusGoraTyl.png";
			document.getElementById("gra4").replaceChild(temp, kafelki4[zw1Poz + dlTor1 + 3]);
			kafelki4[zw1Poz + dlTor1 + 3] = temp;
			zw2St = 1;
		}
	}
}

function zamianaSm(semafor, sygnal) {
    "use strict";
    var temp;
    switch (semafor) {
    case "sma":
        if (sema === 1 && blokadySem[4]===0) {
			
				temp = document.createElement("IMG");
				temp.src = "gameAssets/kafelSemCzer.png";
				document.getElementById("gra5").replaceChild(temp, kafelki5[3]);
				kafelki5[3] = temp;
				blokadyZw[4] = 0;
				sema = 0;
			
        } else {
			if(blokadySem[4]===0){
				if(!((tor1Zaj && zw1St == 1)||(tor2Zaj && zw1St == 0))){
					sprawdzeniePrzebiegu(4,3,1);
					temp = document.createElement("IMG");
					temp.src = "gameAssets/kafelSemZiel.png";
					document.getElementById("gra5").replaceChild(temp, kafelki5[3]);
					kafelki5[3] = temp;
					sema = 1;
					blokadyZw[0] = 1;
					blokadySem[4] = 1;
					setTimeout(function(){pociagRusza(4,3,1)},3000);
				}
			}
        }
        break;
	case "sm1":
        switch (sygnal) {
        case "zas":
            if (sem1 === 1 && blokadySem[0]===0) {
                temp = document.createElement("IMG");
                temp.src = "gameAssets/kafelSemCzer.png";
                document.getElementById("gra1").replaceChild(temp, kafelki1[zw1Poz + 2]);
                kafelki1[zw1Poz + 2] = temp;
				blokadyZw[0] = 0;
                sem1 = 0;
            } else {
				if(zw1St===0 && blokadySem[0]===0){
					sprawdzeniePrzebiegu(2,9,0);
					temp = document.createElement("IMG");
					temp.src = "gameAssets/kafelSemZiel.png";
					document.getElementById("gra1").replaceChild(temp, kafelki1[zw1Poz + 2]);
					kafelki1[zw1Poz + 2] = temp;
					sem1 = 1;
					blokadyZw[0] = 1;
					blokadySem[0] = 1;
					//setTimeout(function(){pociagRusza(2,9,0)},3000);
				}
            }
            break;
        case "m":
			if(zw1St===0 && blokadySem[0]===0){
				temp = document.createElement("IMG");
				temp.src = "gameAssets/kafelSemMan.png";
				document.getElementById("gra1").replaceChild(temp, kafelki1[zw1Poz + 2]);
				kafelki1[zw1Poz + 2] = temp;
				sem1 = 1;
				blokadyZw[0] = 1;
			}
            break;
        case "sz":
            temp = document.createElement("IMG");
            temp.src = "gameAssets/kafelSemZas.png";
            document.getElementById("gra1").replaceChild(temp, kafelki1[zw1Poz + 2]);
            kafelki1[zw1Poz + 2] = temp;
            sem1 = 1;
            break;
        }
        break;
    case "sm2":
        switch (sygnal) {
        case "zas":
            if (sem2 === 1 && blokadySem[1]===0) {
                temp = document.createElement("IMG");
                temp.src = "gameAssets/kafelSemCzer.png";
                document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + 2]);
                kafelki3[zw1Poz + 2] = temp;
				blokadyZw[0] = 0;
                sem2 = 0;
            } else {
				if(zw1St===1 && blokadySem[1]===0){
					sprawdzeniePrzebiegu(4,9,0);
					temp = document.createElement("IMG");
					temp.src = "gameAssets/kafelSemZiel.png";
					document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + 2]);
					kafelki3[zw1Poz + 2] = temp;
					sem2 = 1;
					blokadyZw[0] = 1;
					blokadySem[1] = 1;
				}
            }
            break;
        case "m":
			if(zw1St===1 && blokadySem[1]===0){
				temp = document.createElement("IMG");
				temp.src = "gameAssets/kafelSemMan.png";
				document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + 2]);
				kafelki3[zw1Poz + 2] = temp;
				sem2 = 1;
				blokadyZw[0] = 1;
			}
            break;
        case "sz":
            temp = document.createElement("IMG");
            temp.src = "gameAssets/kafelSemZas.png";
            document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + 2]);
            kafelki3[zw1Poz + 2] = temp;
            sem2 = 1;
            break;
        }
        break;
    case "sm3":
        switch (sygnal) {
        case "zas":
            if (sem3 === 1 && blokadySem[2]===0) {
                temp = document.createElement("IMG");
                temp.src = "gameAssets/kafelSemCzer.png";
                document.getElementById("gra5").replaceChild(temp, kafelki5[zw1Poz + dlTor1 + 1]);
                kafelki5[zw1Poz + dlTor1 + 1] = temp;
				blokadyZw[1] = 0;
                sem3 = 0;
            } else {
				if(zw2St===1 && blokadySem[2]===0){
					sprawdzeniePrzebiegu(4,16,1);
					temp = document.createElement("IMG");
					temp.src = "gameAssets/kafelSemZielTyl.png";
					document.getElementById("gra5").replaceChild(temp, kafelki5[zw1Poz + dlTor1 + 1]);
					kafelki5[zw1Poz + dlTor1 + 1] = temp;
					sem3 = 1;
					blokadyZw[1] = 1;
					blokadySem[2] = 1;
					if(tor1Zaj){
						setTimeout(function(){pociagRusza(4,16,1)},3000);
						setTimeout(function(){
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1 + 1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 2].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 3].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra4").childNodes[zw1Poz + dlTor1 - 4].src="gameAssets/kafelOffProsty.png";
						},12000);
					}
					
				}
            }
            break;
        case "m":
			if(zw2St===1 && blokadySem[2]===0){
				temp = document.createElement("IMG");
				temp.src = "gameAssets/kafelSemManTyl.png";
				document.getElementById("gra5").replaceChild(temp, kafelki5[zw1Poz + dlTor1 + 1]);
				kafelki5[zw1Poz + dlTor1 + 1] = temp;
				sem3 = 1;
				blokadyZw[1] = 1;
			}
            break;
        case "sz":
            temp = document.createElement("IMG");
            temp.src = "gameAssets/kafelSemZasTyl.png";
            document.getElementById("gra5").replaceChild(temp, kafelki5[zw1Poz + dlTor1 + 1]);
            kafelki5[zw1Poz + dlTor1 + 1] = temp;
            sem3 = 1;
            break;
        }
        break;
    case "sm4":
        switch (sygnal) {
        case "zas":
            if (sem4 === 1 && blokadySem[3]===0) {
                temp = document.createElement("IMG");
                temp.src = "gameAssets/kafelSemCzer.png";
                document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + dlTor1 + 1]);
                kafelki3[zw1Poz + dlTor1 + 1] = temp;
				blokadyZw[1] = 0;
                sem4 = 0;
            } else {
				if(zw2St===0 && blokadySem[3]===0){
					sprawdzeniePrzebiegu(2,16,1);
					temp = document.createElement("IMG");
					temp.src = "gameAssets/kafelSemZielTyl.png";
					document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + dlTor1 + 1]);
					kafelki3[zw1Poz + dlTor1 + 1] = temp;
					sem4 = 1;
					blokadyZw[1] = 1;
					blokadySem[3] = 1;
					if(tor2Zaj){
						setTimeout(function(){pociagRusza(2,16,1)},3000);
						setTimeout(function(){pociagRusza(2,16,1)},12000);
						setTimeout(function(){
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1 + 1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 1].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 2].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 3].src="gameAssets/kafelOffProsty.png";
							document.getElementById("gra2").childNodes[zw1Poz + dlTor1 - 4].src="gameAssets/kafelOffProsty.png";
							tor1Zaj = false;
						},12000);
					}
				}
            }
            break;
        case "m":
			if(zw2St===0 && blokadySem[3]===0){
				temp = document.createElement("IMG");
				temp.src = "gameAssets/kafelSemManTyl.png";
				document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + dlTor1 + 1]);
				kafelki3[zw1Poz + dlTor1 + 1] = temp;
				sem4 = 1;
				blokadyZw[1] = 1;
			}
            break;
        case "sz":
            temp = document.createElement("IMG");
            temp.src = "gameAssets/kafelSemZasTyl.png";
            document.getElementById("gra3").replaceChild(temp, kafelki3[zw1Poz + dlTor1 + 1]);
            kafelki3[zw1Poz + dlTor1 + 1] = temp;
            sem4 = 1;
            break;
        }
        break;
    }
}

function generowanieMapy(szablon, poziom){
	/*var odpowiedz = szablon.split(";");
	for (i = 0; i < odpowiedz.length; i += 2) {
		temp = document.createElement("IMG");
        temp.src = odpowiedz[i];
		temp.addEventListener("click", function(){wyslanieSygnaluZmiany(odpowiedz[i+1]);});
        document.getElementById(poziom).appendChild(temp);
	}
	*/
	var odpowiedz = szablon.split(";");
	for (i = 0; i < odpowiedz.length; i += 1) {
        switch (parseInt(odpowiedz[i])) {
		case -1:
            break;
        case 1:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem1SZ.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(106);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 2:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem1M.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(105);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 3:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem2SZ.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(108);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 4:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem2M.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(107);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 5:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem3SZ.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(110);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 6:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem3M.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(109);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 7:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem4SZ.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(112);});
            document.getElementById("gra0").appendChild(temp);
            break;
        case 8:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","przyrzadPomocniczy");
			id += 1;
            temp.src = "gameAssets/kafelSem4M.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(111);});
            document.getElementById("gra0").appendChild(temp);
            break;
		case 10:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semfor");
			id += 1;
            temp.src = "gameAssets/kafelSemCzer.png";
			switch(poziom){
				case 1:
					document.getElementById("gra1").appendChild(temp);
					kafelki1[i-1] = temp;
					break;
				case 3:
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
				case 5:
					document.getElementById("gra5").appendChild(temp);
					kafelki5[i-1] = temp;
					break;
			}
            break;
		case 11:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semfor");
			id += 1;
            temp.src = "gameAssets/kafelSem1.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(101);});
			document.getElementById("gra1").appendChild(temp);
			kafelki1[i-1] = temp;
            break;
		case 12:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","tor");
			id += 1;
            temp.src = "gameAssets/kafelZwG1.png";
			switch(poziom){
				case 2:
					temp.setAttribute("dir1","s");
					temp.setAttribute("dir2","e");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra2").appendChild(temp);
					kafelki2[i-1] = temp;
					break;
				case 3:
					temp.setAttribute("dir1","s");
					temp.setAttribute("dir2","e");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
			}
            break;
		case 13:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","tor");
			id += 1;
            temp.src = "gameAssets/kafelZwG4.png";
			switch(poziom){
				case 2:
					temp.setAttribute("dir1","w");
					temp.setAttribute("dir2","s");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra2").appendChild(temp);
					kafelki2[i-1] = temp;
					break;
				case 3:
					temp.setAttribute("dir1","w");
					temp.setAttribute("dir2","s");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
			}
            break;
		case 14:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","tor");
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","e");
			temp.setAttribute("zaj","wol");
			id += 1;
            temp.src = "gameAssets/kafelOffProsty.png";
			switch(poziom){
				case 2:
					document.getElementById("gra2").appendChild(temp);
					kafelki2[i-1] = temp;
					break;
				case 4:
					document.getElementById("gra4").appendChild(temp);
					kafelki2[i-1] = temp;
					break;
			}
            break;
		case 15:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","tor");
			id += 1;
            temp.src = "gameAssets/kafelZwG2.png";
			switch(poziom){
				case 3:
					temp.setAttribute("dir1","w");
					temp.setAttribute("dir2","n");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
			}
            break;
		case 16:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","tor");
			id += 1;
            temp.src = "gameAssets/kafelZwG3.png";
			switch(poziom){
				case 3:
					temp.setAttribute("dir1","n");
					temp.setAttribute("dir2","e");
					temp.setAttribute("zaj","wol");
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
			}
            break;
		case 17:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semafor");
			id += 1;
            temp.src = "gameAssets/kafelSem2.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(102);});
			document.getElementById("gra3").appendChild(temp);
			kafelki3[i-1] = temp;
            break;
		case 18:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semafor");
			id += 1;
            temp.src = "gameAssets/kafelSem4.png";
			document.getElementById("gra2").childNodes[i+1].setAttribute("class","znak");
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(104);});
			document.getElementById("gra3").appendChild(temp);
			kafelki3[i-1] = temp;
			break;
		case 19:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","zwrotnica");
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","e");
			temp.setAttribute("zaj","wol");
			id += 1;
            temp.src = "gameAssets/kafelPlusGora.png";
			switch(poziom){
				case 4:
					document.getElementById("gra4").appendChild(temp);
					kafelki4[i-1] = temp;
					break;
			}
            break;
		case 20:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","zwrotnica");
			id += 1;
            temp.src = "gameAssets/kafelPlusGoraTyl.png";
			temp.setAttribute("dir1","w");
			temp.setAttribute("dir2","e");
			temp.setAttribute("zaj","wol");
			switch(poziom){
				case 4:
					document.getElementById("gra4").appendChild(temp);
					kafelki4[i-1] = temp;
					break;
			}
            break;
		case 21:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","glowicaZwrotnicy");
			id += 1;
            temp.src = "gameAssets/kafelZw1.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(113);});
			document.getElementById("gra5").appendChild(temp);
			kafelki5[i-1] = temp;
            break;
		case 22:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","glowicaZwrotnicy");
			id += 1;
            temp.src = "gameAssets/kafelZw2.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(114);});
			document.getElementById("gra5").appendChild(temp);
			kafelki5[i-1] = temp;
            break;
		case 23:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semafor");
			id += 1;
            temp.src = "gameAssets/kafelSem3.png";
			document.getElementById("gra4").childNodes[i+1].setAttribute("class","znak");
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(103);});
			document.getElementById("gra5").appendChild(temp);
			kafelki5[i-1] = temp;
            break;
		case 24:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semafor");
			id += 1;
            temp.src = "gameAssets/kafelSemCzer.png";
			document.getElementById("gra5").appendChild(temp);
			kafelki5[i-1] = temp;
            break;
		case 25:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","semafor");
			id += 1;
            temp.src = "gameAssets/kafelSemA.png";
			temp.addEventListener("click", function(){wyslanieSygnaluZmiany(115);});
			document.getElementById("gra5").appendChild(temp);
			kafelki5[i-1] = temp;
            break;
        default:
            temp = document.createElement("IMG");
			temp.setAttribute("id",id);
			temp.setAttribute("class","pulpit");
			id += 1;
            temp.src = "gameAssets/kafel.png";
			switch(poziom){
				case 0:
					document.getElementById("gra0").appendChild(temp);
					kafelki0[i-1] = temp;
					break;
				case 1:
					document.getElementById("gra1").appendChild(temp);
					kafelki1[i-1] = temp;
					break;
				case 2:
					document.getElementById("gra2").appendChild(temp);
					kafelki2[i-1] = temp;
					break;
				case 3:
					document.getElementById("gra3").appendChild(temp);
					kafelki3[i-1] = temp;
					break;
				case 5:
					document.getElementById("gra5").appendChild(temp);
					kafelki5[i-1] = temp;
					break;
			}
        }
    }
}

function wyslanieSygnaluZmiany(id){
	switch(id){
		case 101:
			zamianaSm("sm1","zas");
			break;
		case 102:
			zamianaSm("sm2","zas");
			break;
		case 103:
			zamianaSm("sm3","zas");
			break;
		case 104:
			zamianaSm("sm4","zas");
			break;
		case 105:
			zamianaSm("sm1","m");
			break;
		case 106:
			zamianaSm("sm1","sz");
			break;
		case 107:
			zamianaSm("sm2","m");
			break;
		case 108:
			zamianaSm("sm2","sz");
			break;
		case 109:
			zamianaSm("sm3","m");
			break;
		case 110:
			zamianaSm("sm3","sz");
			break;
		case 111:
			zamianaSm("sm4","m");
			break;
		case 112:
			zamianaSm("sm4","sz");
			break;
		case 113:
			zamianaZw1();
			break;
		case 114:
			zamianaZw2();
			break;
		case 115:
			zamianaSm("sma","zas");
			break;
	}
	
}

function generatorPlanszy() {
    "use strict";
	var zapytanie;
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	zapytanie = 0;
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			generowanieMapy(this.responseText,zapytanie);
			
			xmlhttp = new XMLHttpRequest();
			zapytanie = 1;
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					generowanieMapy(this.responseText,zapytanie);
					
					xmlhttp = new XMLHttpRequest();
					zapytanie = 2;
					xmlhttp.onreadystatechange = function() {
						if (this.readyState == 4 && this.status == 200) {
							generowanieMapy(this.responseText,zapytanie);
							
							xmlhttp = new XMLHttpRequest();
							zapytanie = 3;
							xmlhttp.onreadystatechange = function() {
								if (this.readyState == 4 && this.status == 200) {
									generowanieMapy(this.responseText,zapytanie);
									
									xmlhttp = new XMLHttpRequest();
									zapytanie = 4;
									xmlhttp.onreadystatechange = function() {
										if (this.readyState == 4 && this.status == 200) {
											generowanieMapy(this.responseText,zapytanie);
											
											xmlhttp = new XMLHttpRequest();
											zapytanie = 5;
											xmlhttp.onreadystatechange = function() {
												if (this.readyState == 4 && this.status == 200) {
													generowanieMapy(this.responseText,zapytanie);
												}
											};
											xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
											xmlhttp.send();
										}
									};
									xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
									xmlhttp.send();
								}
							};
							xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
							xmlhttp.send();
						}
					};
					xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
					xmlhttp.send();
				}
			};
			xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
			xmlhttp.send();
			
	
		}
	};
	xmlhttp.open("GET", "gameCode/generatorPoziomowPlanszy.php?id="+zapytanie, true);
	xmlhttp.send();
}