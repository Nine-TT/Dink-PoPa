


$(document).ready(function () {
    $("#main").load("../layout/home/main.html");
})

$(document).ready(function () {
    $("#footer").load("../layout/footer/footer.html");
})

function clickTab(path) {
    $("#product-love-tab").empty();
    $("#product-love-tab").load(path);

}

$(document).ready(function () {
    $(".menu-love-item").click(function () {
        $(".menu-love-item").removeClass("active");
        $(".menu-love-item").addClass("active");
    });
});



function clickTabMenuHeader(path) {
    $("#main").empty();
    $("#main").load(path)
}

$(document).ready(function () {


    $(".active-class ").click(function () {
        $(".active-class ").removeClass("active");
        $(this).addClass("active");
    });
});







