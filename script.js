$(document).ready(function () {
    $("#boxLogin").click(function () {
        $(".formLogin").css({
            "display": "block"
        });
    });
    $("#boxSignUp").click(function () {
        $(".formSignUp").css({
            "display": "block"
        });
    });
    $("#linkSignUp").click(function () {
        $(".formLogin").css({
            "display": "none"
        });
        $(".formSignUp").css({
            "display": "block"
        });
    });
    $("#linkLogin").click(function () {
        $(".formLogin").css({
            "display": "block"
        });
        $(".formSignUp").css({
            "display": "none"
        });
    });
    $(".close").click(function () {
        $(".formLogin").css({
            "display": "none"
        });
        $(".formSignUp").css({
            "display": "none"
        });
    });
});

//** VALIDASI **//

function validasi() {
    var username = document.forms["login"]["username"].value;
    var password = document.forms["login"]["password"].value;
    if ((username == "reka" || username == "reka@gmail.com") && (password == "reka1234")) {
        return true;
    } else {
        alert("Username atau password yang anda masukkan salah")
        return false;
    }

}
