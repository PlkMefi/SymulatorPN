/*global window: false, document: false */
/*jslint for: true */


//document.getElementById("wyslanie").addEventListener("click", potwierdzenieWyslania);
//przycisk.addEventListener("click", potwierdzenieWyslania);

function komunikat() {
    "use strict";
    var x = Math.floor(Math.random() * 10) % 4;
    switch (x) {
    case 0:
        document.getElementById("komunikat").innerHTML = "Uwaga podróżni! Dziś wszystkie bilety sprzedawane są o 10% taniej";
        break;
    case 1:
        document.getElementById("komunikat").innerHTML = "Uwaga podróżni! Nastąpiła awaria peronu numer 3. Prosimy o weryfikację miejsca odjazdu waszego pociągu.";
        break;
    case 2:
        document.getElementById("komunikat").innerHTML = "Uwaga podróżni! Chłopiec w wieku 5 lat o imieniu Damian czeka w informacji na swoich rodziców.";
        break;
    case 3:
        document.getElementById("komunikat").innerHTML = "Uwaga podróżni! W toaletach skończyło się mydło. Za utrudnienia przepraszamy.";
        break;
    default:
        document.getElementById("komunikat").innerHTML = x;
    }
}

function time(hh, mm, ss) {
    "use strict";
    var tt = {
        t: (parseInt(hh) % 24) * 3600 + (parseInt(mm) % 60) * 60 + parseInt(ss) % 60
    };
    tt.hour = function () {
        var x = parseInt(tt.t / 3600);
        if (x < 10) {
            return "0" + x;
        } else {
            return x;
        }
    };
    tt.minute = function () {
        var x = parseInt(tt.t / 60) % 60;
        if (x < 10) {
            return "0" + x;
        } else {
            return x;
        }
    };
    tt.second = function () {
        var x = tt.t % 60;
        if (x < 10) {
            return "0" + x;
        } else {
            return x;
        }
    };
    tt.time = function () {
        return tt.hour() + ":" + tt.minute() + ":" + tt.second();
    };
    return tt;
}

function randtime() {
    "use strict";
    var i;
    var rows = document.getElementsByClassName("planowy");
    for (i = 0; i < rows.length; i += 1) {
        rows[i].innerHTML = time(Math.floor(Math.random() * 24),
                Math.floor(Math.random() * 60),
                Math.floor(Math.random() * 60)).time();
    }
}

window.onload = function () {
    "use strict";
    komunikat();
    randtime();
};
