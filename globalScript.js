
addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        document.getElementById("top").classList.add('visible');
    } else {
        document.getElementById("top").classList.remove('visible');
    }
})

let bool = true;
function switchTheme(){
    if (bool){
        bool = !bool;
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("sun").classList.add("fa-moon");
        document.getElementById("sun").classList.remove("fa-sun");
        document.cookie = "mode=light";
    }else{
        bool = !bool;
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("sun").classList.remove("fa-moon");
        document.getElementById("sun").classList.add("fa-sun");
        document.cookie = "mode=dark";

    }
}

let bool2 = true;
function toggleSearch(){
    if (bool2){
        bool2 = !bool2;
        document.getElementById("search").classList.remove("hidden");
    }else{
        bool2 = !bool2;
        document.getElementById("search").classList.add("hidden");
    }
}

let bool3 = true;
function toggleMenu(){
    if (bool3){
        bool3 = !bool3;
        document.getElementById("menu").classList.remove("hidden");
    }else{
        bool3 = !bool3;
        document.getElementById("menu").classList.add("hidden");
    }
}

document.onkeyup = function(e) {
    if (e.which == 83) {
        switchTheme();
    }else
    if (e.which == 84) {
        toggleSearch();
    }
};


if (getCookie("mode") == "light"){
    bool = false;
    document.documentElement.setAttribute('data-theme', 'light');
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}