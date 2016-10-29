var $ = function (id) {
    return document.getElementById(id);
};

$(document).ready(function(){
    $("#about").click(function(){
        $("#capsule").fadeIn();
    });
});
