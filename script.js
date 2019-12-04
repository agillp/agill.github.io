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
