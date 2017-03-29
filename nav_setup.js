function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function logout() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "login.php?action=logout", true);
  xhttp.send();
  location.reload(true);
}

function loadNavbar() {
  var usernameInput = '<input type="text" name="username" size="20" maxlength="20" placeholder="username" autocomplete="on" required id="username">';
  var passwordInput = '<input type="password" name="password" size="20" maxlength="20" placeholder="password" required id="password">';
  var loginButton = '<input type="submit" value="Zaloguj" id="login">';

  //get username
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", 'login.php?action="getusr"', false);
  xhttp.send();
  var username = xhttp.responseText;
  //check if logged
  var nav = document.getElementById("loginmenu");
  if(username === ""){
    var form = document.createElement('form');
    form.innerHTML = usernameInput + '\n' + passwordInput + '\n' + loginButton;
	form.method = "POST";
	form.action = "login.php";
    nav.appendChild(form);
  } else {
    var p = document.createElement('p');
    p.innerHTML = username + ' (<a onclick="logout();" href ="'+window.location.href+'">Wyloguj</a>)';
    nav.appendChild(p);
  }
}
